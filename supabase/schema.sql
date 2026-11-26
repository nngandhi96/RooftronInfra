-- Rooftron Infra Solution Pvt. Ltd.
-- BOQ & Bulk Quote Inquiries Schema for Supabase (PostgreSQL)

create extension if not exists pgcrypto;

create table if not exists public.boq_inquiries (
  id uuid primary key default gen_random_uuid(),
  quote_ref text not null unique,
  company_name text not null,
  contact_person text not null,
  phone text not null,
  email text not null,
  site_location text not null,
  primary_product text not null,
  estimated_volume text,
  boq_notes text,
  status text not null default 'new' check (status in ('new', 'in_review', 'quoted', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists idx_boq_inquiries_created_at
  on public.boq_inquiries (created_at desc);

create index if not exists idx_boq_inquiries_quote_ref
  on public.boq_inquiries (quote_ref);

-- Enable Row Level Security
alter table public.boq_inquiries enable row level security;

-- Allow public B2B visitors (anon role) to submit new BOQ inquiries
drop policy if exists "Allow public BOQ inquiry inserts" on public.boq_inquiries;
create policy "Allow public BOQ inquiry inserts"
  on public.boq_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- Restrict reading/updating inquiries to authenticated/service users only
drop policy if exists "Allow authenticated users to read BOQ inquiries" on public.boq_inquiries;
create policy "Allow authenticated users to read BOQ inquiries"
  on public.boq_inquiries
  for select
  to authenticated
  using (true);
