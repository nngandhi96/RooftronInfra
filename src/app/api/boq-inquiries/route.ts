import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import type { BoqInquiryPayload } from "@/types/product";

function generateQuoteRef(): string {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `RIS-BOQ-${randomDigits}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BoqInquiryPayload>;

    const companyName = body.companyName?.trim() ?? "";
    const contactPerson = body.contactPerson?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const siteLocation = body.siteLocation?.trim() ?? "";
    const primaryProduct = body.primaryProduct?.trim() ?? "";
    const estimatedVolume = body.estimatedVolume?.trim() ?? "";
    const boqNotes = body.boqNotes?.trim() ?? "";

    if (
      !companyName ||
      !contactPerson ||
      !phone ||
      !email ||
      !siteLocation ||
      !primaryProduct
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required BOQ fields (Company, Contact Person, Phone, Email, Delivery Location, and Primary Product).",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid official email address." },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        {
          error:
            "Supabase is not configured yet. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local and run supabase/schema.sql.",
        },
        { status: 503 }
      );
    }

    const supabase = getSupabaseServerClient();
    const quoteRef = generateQuoteRef();

    const { data, error } = await supabase
      .from("boq_inquiries")
      .insert({
        quote_ref: quoteRef,
        company_name: companyName,
        contact_person: contactPerson,
        phone,
        email,
        site_location: siteLocation,
        primary_product: primaryProduct,
        estimated_volume: estimatedVolume || null,
        boq_notes: boqNotes || null,
        status: "new",
      })
      .select("quote_ref, company_name, primary_product, site_location, created_at")
      .single();

    if (error) {
      console.error("Supabase BOQ insert error:", error);
      return NextResponse.json(
        {
          error:
            error.message ||
            "Failed to record BOQ inquiry in Supabase. Ensure the boq_inquiries table and RLS policy exist.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        quoteRef: data.quote_ref,
        companyName: data.company_name,
        primaryProduct: data.primary_product,
        siteLocation: data.site_location,
        createdAt: data.created_at,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("BOQ inquiry API error:", err);
    return NextResponse.json(
      { error: "Unable to process BOQ inquiry request. Please try again." },
      { status: 500 }
    );
  }
}
