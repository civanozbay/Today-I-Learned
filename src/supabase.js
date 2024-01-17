import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrhryyzyzrqcavistbbv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaHJ5eXp5enJxY2F2aXN0YmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNzE0MDcsImV4cCI6MjAyMDg0NzQwN30.h_yVDc0ia6MehlEqgZUBBRRlGtSdnIcm4lhFEr4CoTM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
