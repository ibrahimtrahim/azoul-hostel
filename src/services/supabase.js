import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://riarxkpdbhpgxoltanhh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpYXJ4a3BkYmhwZ3hvbHRhbmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNTYwOTQsImV4cCI6MjAzMjczMjA5NH0.blUFY9GDoskED9TVwYQS8e_R6J37yBUffKIwy96_jSU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;