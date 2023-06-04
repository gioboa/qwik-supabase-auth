import type { RequestEventCommon } from "@builder.io/qwik-city";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseMapKey = "__supabase";

export const getSupabaseClient = (): SupabaseClient => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("NO ENV VARIABLES");
  }

  return createClient(url, key, { auth: { persistSession: false } });
};
