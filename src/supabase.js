import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yxzqbpelvpzuasrcpqgt.supabase.co";
const supabaseKey = "sb_publishable_7DPw5VzurNJcoUcRN5Ngwg_YfRIRLII";

export const supabase = createClient(supabaseUrl, supabaseKey);