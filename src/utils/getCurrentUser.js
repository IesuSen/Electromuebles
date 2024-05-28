export default async function getCurrentUser () {
  const response = await fetch('/api/currentUser')
  const data = await response.json()

  if (response.ok) {
    console.log('Current user:', data.user)
  } else {
    console.error('Error fetching current user:', data.error)
  }
}
