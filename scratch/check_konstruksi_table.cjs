const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://gbbkufbojlixndvkbluu.supabase.co';
const supabaseAnonKey = 'sb_publishable_C-8NCwjHX3WlAuWdlnbk5A_gVpT1gSo';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  console.log('Testing connection & checking if table "konstruksi" exists...');
  const { data, error } = await supabase
    .from('konstruksi')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching "konstruksi":', error.message);
  } else {
    console.log('Success! Table "konstruksi" exists. Rows count:', data.length);
  }
}
main();
