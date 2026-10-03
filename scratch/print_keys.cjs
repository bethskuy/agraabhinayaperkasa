const supabaseUrl = 'https://gbbkufbojlixndvkbluu.supabase.co';
const supabaseAnonKey = 'sb_publishable_C-8NCwjHX3WlAuWdlnbk5A_gVpT1gSo';

async function main() {
  const res = await fetch(`${supabaseUrl}/rest/v1/`, {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`
    }
  });
  const data = await res.json();
  console.log('Keys of the metadata object:', Object.keys(data));
}
main();
