import { createClient } from "@supabase/supabase-js"

// Create a singleton instance for the browser
let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (supabaseInstance) return supabaseInstance

  // Validate environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables. Please check your .env file.")
  }

  // Create the client with proper error handling
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // Don't persist auth state for added security
      },
    })
    return supabaseInstance
  } catch (error) {
    console.error("Error initializing Supabase client:", error)
    throw new Error("Failed to initialize Supabase client")
  }
}

// Server-side only Supabase client for secure operations
export async function getServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase environment variables for server operations")
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
    },
  })
}
