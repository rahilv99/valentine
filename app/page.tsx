"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"

const Button = ({ children, onClick, primary = false }: { children: React.ReactNode, onClick: () => void, primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-3 rounded-full text-xl font-bold shadow-lg transition-colors ${
      primary ? "bg-pink-500 text-white hover:bg-pink-600" : "bg-white text-pink-500 hover:bg-pink-100"
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
)

const NoButton = ({ onClick }: { onClick: () => void }) => {
  const [x, setX] = useState(46)

  function mouseOver() {
    // Update the x-coordinate randomly, keeping the button within 80% of the screen width
    setX(Math.random() * 80 + 10)
  }

  return (
    <motion.button
      className="absolute px-8 py-3 rounded-full text-xl font-bold shadow-lg transition-colors bg-white text-pink-500 hover:bg-pink-100"
      animate={{ left: `${x}%` }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseOver={mouseOver}
      onClick={onClick}
    >
      No
    </motion.button>
  )
}

const HeartBackground = () => (
  <div className="fixed inset-0 overflow-hidden z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-gray-200">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  </div>
)

export default function ValentineLandingPage() {
  const router = useRouter()

  const handleYes = () => {
    router.push("/yes")
  }

  const handleNo = () => {
    toast.error("Nice try! You can't say no to Rahil! 💖", {
      duration: 3000,
      position: "top-center",
    })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeartBackground />
      <main className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-12"
        >
          Hi Grace! Will you be my Valentine?
        </motion.h1>
        <div className="space-y-4">
          <Button primary onClick={handleYes}>
            Yes
          </Button>
          <div className="h-20 relative w-full">
            <NoButton onClick={handleNo} />
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  )
}

