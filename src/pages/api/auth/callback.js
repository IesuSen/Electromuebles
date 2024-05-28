import { supabase } from '../../../lib/supabase'

export const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get('code')

  if (!authCode) {
    return new Response('No se proporcionó ningún código', { status: 400 })
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode)

  if (error) {
    return new Response(error.message, { status: 500 })
  }

  const { access_token: accessToken, refresh_token: refreshToken } = data.session

  cookies.set('sb-access-token', accessToken, {
    path: '/'
  })
  cookies.set('sb-refresh-token', refreshToken, {
    path: '/'
  })

  return redirect('/dashboard')
}
