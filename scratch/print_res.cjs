const supabaseUrl = 'https://gbbkufbojlixndvkbluu.supabase.co';
const supabaseAnonKey = 'sb_publishable_C-8NCwjHX3WlAuWdlnbk5A_gVpT1gSo';

async function main() {
  const res = await fetch(`${supabaseUrl}/rest/v1/`, {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`
    }
  });
  const text = await res.text();
  console.log('Response status:', res.status);
  console.log('Response body:', text.slice(0, 1000));
}
main();
