"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Masonry from "react-masonry-css"

// You can replace these with your own images
const imageUrls = [
  "/happy_pics/IMG_01.jpg",
  "/happy_pics/IMG_02.jpg",
  "/happy_pics/IMG_03.jpg",
  "/happy_pics/IMG_04.jpg",
  "/happy_pics/IMG_05.jpg",
  "/happy_pics/IMG_06.jpg",
  "/happy_pics/IMG_07.jpg",
  "/happy_pics/IMG_08.jpg",
  "/happy_pics/IMG_09.jpg",
  "/happy_pics/IMG_10.jpg",
  "/happy_pics/IMG_11.jpg",
  "/happy_pics/IMG_12.jpg",
  "/happy_pics/IMG_13.jpg",
  "/happy_pics/IMG_14.jpg",
  "/happy_pics/IMG_15.jpg",
  "/happy_pics/IMG_16.jpg",
]

export default function YesPage() {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1)
      else if (window.innerWidth < 1024) setColumns(2)
      else setColumns(3)
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-200 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">❤️ Love you! ❤️</h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-4">You make life so much fun. I'm so lucky to have you in my life!</p>
        <Link href="/" className="text-lg text-gray-600 hover:text-gray-800 underline">
          Back home
        </Link>
      </motion.div>

      <Masonry breakpointCols={columns} className="flex w-auto -ml-4" columnClassName="pl-4 bg-clip-padding">
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <Image
              src={url || "/placeholder.svg"}
              alt={`Valentine image ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </Masonry>
    </div>
  )
}

