const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://gbbkufbojlixndvkbluu.supabase.co';
const supabaseAnonKey = 'sb_publishable_C-8NCwjHX3WlAuWdlnbk5A_gVpT1gSo';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  console.log('Testing connection & checking if table "construction" exists...');
  const { data, error } = await supabase
    .from('construction')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching "construction":', error.message);
  } else {
    console.log('Success! Table "construction" exists. Rows count:', data.length);
  }
}
main();
