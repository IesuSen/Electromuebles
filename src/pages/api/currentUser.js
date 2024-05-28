import { supabase } from '../../lib/supabase'

export const GET = async ({ request }) => {
  const user = await supabase.auth.currentUser()
  // console.log(supabase.auth)

  console.log('Current user:', user)

  return new Response(JSON.stringify({ user }), {
    headers: {
      'content-type': 'application/json'
    }
  })
}
