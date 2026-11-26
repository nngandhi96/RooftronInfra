import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { BoqInquiryPayload, BoqInquiryResponse } from "@/types/product";

let browserClient: SupabaseClient | null = null;

export function isSupabaseBrowserConfigured(): boolean {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return false;
  if (
    supabaseUrl.includes("your-project-ref") ||
    supabaseAnonKey.includes("your-anon-public-key")
  ) {
    return false;
  }
  return true;
}

export function getSupabaseBrowserClient(): SupabaseClient {
  if (browserClient) {
    return browserClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
    );
  }

  browserClient = createClient(supabaseUrl, supabaseAnonKey);
  return browserClient;
}

function generateQuoteRef(): string {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `RIS-BOQ-${randomDigits}`;
}

export async function submitBoqInquiry(
  payload: BoqInquiryPayload
): Promise<BoqInquiryResponse> {
  const companyName = payload.companyName.trim();
  const contactPerson = payload.contactPerson.trim();
  const phone = payload.phone.trim();
  const email = payload.email.trim();
  const siteLocation = payload.siteLocation.trim();
  const primaryProduct = payload.primaryProduct.trim();
  const estimatedVolume = payload.estimatedVolume.trim();
  const boqNotes = payload.boqNotes.trim();

  if (
    !companyName ||
    !contactPerson ||
    !phone ||
    !email ||
    !siteLocation ||
    !primaryProduct
  ) {
    throw new Error(
      "Please complete all required BOQ fields (Company, Contact Person, Phone, Email, Delivery Location, and Primary Product)."
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Please enter a valid official email address.");
  }

  if (!isSupabaseBrowserConfigured()) {
    throw new Error(
      "Supabase is not configured yet. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY and run supabase/schema.sql."
    );
  }

  const supabase = getSupabaseBrowserClient();
  const quoteRef = generateQuoteRef();

  const { error } = await supabase.from("boq_inquiries").insert({
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
  });

  if (error) {
    throw new Error(
      error.message ||
        "Failed to record BOQ inquiry in Supabase. Ensure the boq_inquiries table and public insert RLS policy exist."
    );
  }

  return {
    quoteRef,
    companyName,
    primaryProduct,
    siteLocation,
    createdAt: new Date().toISOString(),
  };
}
