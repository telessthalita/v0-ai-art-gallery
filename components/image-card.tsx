"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Image } from "@/types"
import { Card } from "@/components/ui/card"

interface ImageCardProps {
  image: Image
}

export default function ImageCard({ image }: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Sanitize image URL for security
  const safeImageUrl = (() => {
    try {
      // Only allow https URLs
      const url = new URL(image.url)
      if (url.protocol !== "https:") {
        return "/placeholder.svg?height=400&width=400"
      }
      return image.url
    } catch (e) {
      return "/placeholder.svg?height=400&width=400"
    }
  })()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        z: 30,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="relative"
    >
      <Card
        className="overflow-hidden border-0 rounded-lg transition-all duration-300 transform-gpu"
        style={{
          background: "transparent",
          boxShadow: isHovered
            ? "0 0 25px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3)"
            : "0 0 0px rgba(139, 92, 246, 0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden rounded-lg">
          {/* Glow effect overlay */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            animate={{
              boxShadow: isHovered ? "inset 0 0 30px rgba(139, 92, 246, 0.5)" : "inset 0 0 0px rgba(139, 92, 246, 0)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Image with error handling */}
          <motion.div
            className="w-full h-full"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-black/50">
                  <p className="text-purple-300">Image unavailable</p>
                </div>
              ) : (
                <img
                  src={safeImageUrl || "/placeholder.svg"}
                  alt={image.name}
                  className="w-full h-full object-cover"
                  style={{
                    filter: isHovered ? "contrast(1.1) brightness(1.1)" : "contrast(1) brightness(1)",
                  }}
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>

          {/* Futuristic overlay with name */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent flex flex-col justify-end p-4 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="backdrop-blur-sm bg-black/30 p-2 rounded border border-purple-500/30">
                <h3 className="text-lg font-medium text-white">{image.name}</h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Futuristic scan line effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-full h-1 bg-purple-400/50"
                initial={{ y: -10 }}
                animate={{ y: 500 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "linear",
                }}
              />
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
