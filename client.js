import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URLhttps://nqrthxheyrarqhowlsor.supabase.co,
  process.env.NEXT_PUBLIC_SUPABASE_TOKENeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcnRoeGhleXJhcnFob3dsc29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MDMzOTIsImV4cCI6MjAyMzA3OTM5Mn0.cB1D1I106iRs5jE4mD1jLzYY5NAk6vC4ABfuB6rtrr8
);
