// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hgamijrbczahblrdvknr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYW1panJiY3phaGJscmR2a25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2OTQyODIsImV4cCI6MjA2NDI3MDI4Mn0.2wD3G6u6Pja1NWf5C-Zo1v7toZefUcu3EmNM4mtA5YI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);