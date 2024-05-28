import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://kldoodfojyaxwzvkgwbl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZG9vZGZvanlheHd6dmtnd2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NzM2NjIsImV4cCI6MjAzMjI0OTY2Mn0.JA1J13153OM0jvNVk5sQ4yNtjlgpFWJdiN2lrw6id8k'
)
