import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gbbkufbojlixndvkbluu.supabase.co'
const supabaseAnonKey = 'sb_publishable_C-8NCwjHX3WlAuWdlnbk5A_gVpT1gSo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
