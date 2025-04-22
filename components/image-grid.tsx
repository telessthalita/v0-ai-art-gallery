import { getSupabaseClient } from "@/lib/supabase"
import type { Image } from "@/types"
import ImageCard from "@/components/image-card"

async function getImages() {
  try {
    const supabase = getSupabaseClient()

    // Use parameterized query for security
    const { data, error } = await supabase
      .from("images")
      .select("id, name, url, model, date")
      .order("date", { ascending: false })

    if (error) {
      console.error("Error fetching images:", error)
      return []
    }

    // Validate returned data
    if (!data || !Array.isArray(data)) {
      console.error("Invalid data format returned from Supabase")
      return []
    }

    // Sanitize data before returning
    return data.map((image) => ({
      id: image.id,
      name: image.name || "Untitled",
      url: image.url || "",
      model: image.model || "",
      date: image.date || "",
    })) as Image[]
  } catch (error) {
    console.error("Failed to fetch images:", error)
    return []
  }
}

export default async function ImageGrid() {
  const images = await getImages()

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-purple-300">No images found. Please add some to your gallery.</p>
      </div>
    )
  }

  return (
    <div className="relative py-10">
      {/* Futuristic grid lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 perspective-1000">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="transform-gpu transition-all duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(${-10 + Math.random() * 20}px) rotateX(${Math.random() * 2 - 1}deg) rotateY(${Math.random() * 2 - 1}deg)`,
            }}
          >
            <ImageCard image={image} />
          </div>
        ))}
      </div>
    </div>
  )
}
