import { Suspense } from "react"
import ImageGrid from "@/components/image-grid"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="relative space-y-4 py-8">
        {/* Futuristic header with glow effect */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center">AI Art Gallery</h1>
          <div className="h-1 w-40 mx-auto mt-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600"></div>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto mt-6 text-center">
            Explore the future of creativity through artificial intelligence
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-1 h-20 bg-purple-500"></div>
          <div className="absolute top-20 right-1/4 w-1 h-40 bg-fuchsia-500"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-1 bg-purple-500"></div>
          <div className="absolute top-1/2 right-10 w-20 h-1 bg-fuchsia-500"></div>
        </div>
      </section>

      <Suspense fallback={<ImageGridSkeleton />}>
        <ImageGrid />
      </Suspense>
    </div>
  )
}

function ImageGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[250px] w-full rounded-lg bg-purple-900/20" />
        </div>
      ))}
    </div>
  )
}
