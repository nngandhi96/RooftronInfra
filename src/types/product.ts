export type ProductCategoryId =
  | "all"
  | "peb"
  | "roofing"
  | "infra"
  | "pipes"
  | "insulation";

export type ProductCategory = Exclude<ProductCategoryId, "all">;

export type ProductSpecRow = readonly [label: string, value: string];

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  isCode: string;
  summary: string;
  specs: readonly ProductSpecRow[];
  applications: string;
}

export interface CategoryFilter {
  id: ProductCategoryId;
  label: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  productId: string;
  featuredLabel: string;
}

export interface BoqInquiryPayload {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  siteLocation: string;
  primaryProduct: string;
  estimatedVolume: string;
  boqNotes: string;
}

export interface BoqInquiryResponse {
  quoteRef: string;
  companyName: string;
  primaryProduct: string;
  siteLocation: string;
  createdAt: string;
}
