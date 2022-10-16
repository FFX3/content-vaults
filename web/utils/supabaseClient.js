import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cafpnxogmtorsjiybcvl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZnBueG9nbXRvcnNqaXliY3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0Njc0NzEsImV4cCI6MTk4MDA0MzQ3MX0.dGswDFTLZMmNOLbrirl3CXNs--DMojr8mubOTx1UJvY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
