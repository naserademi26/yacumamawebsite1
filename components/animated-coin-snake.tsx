"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Coin {
  id: number
  x: number
  y: number
  value: number
  size: number
  eaten: boolean
  type: "pepe" | "shiba" | "doge" | "bonk" | "wif"
}

interface SnakeSegment {
  x: number
  y: number
}

export function AnimatedCoinSnake() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [snake, setSnake] = useState<SnakeSegment[]>([])
  const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 1, y: 0 })
  const [score, setScore] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [speed, setSpeed] = useState(5)
  const [targetCoin, setTargetCoin] = useState<Coin | null>(null)
  const [showResetMessage, setShowResetMessage] = useState(false)
  const requestRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const frameCountRef = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioLoaded, setAudioLoaded] = useState(false)

  // Fixed snake length - we'll keep this number of segments regardless of score
  const FIXED_SNAKE_LENGTH = 20

  // Meme coin types
  const coinTypes = ["doge", "pepe", "shiba", "bonk", "wif"]

  // Coin image URLs - updated Doge and Pepe with new images
  const coinImages = {
    doge: "/images/doge.png", // Updated Dogecoin image
    pepe: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w81gSJ0T19ECkCxazGqVJsAAhxCTso.png", // Pepe coin
    shiba: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gFUHqN0xynjQKyXDo6rqm1xnG2BbBZ.png", // Shiba Inu
    bonk: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9zoZqQ0YVqY1sNinZgZWXFQpssGDX.png", // Bonk coin
    wif: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RK6o85MT5nQzNx4xwaUjOXBO74kbP8.png", // WIF coin
  }

  // Initialize snake and first coin
  useEffect(() => {
    // Start snake at a random position on the left side of the screen
    const startY = Math.floor(Math.random() * (window.innerHeight - 200)) + 100
    initializeSnake(startY)

    // Create first coin
    createNewCoin()

    // Clean up animation frame on unmount
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  const initializeSnake = (startY: number) => {
    // Create a fixed-length snake
    const initialSnake = Array.from({ length: FIXED_SNAKE_LENGTH }, (_, i) => ({
      x: 50 - i * 10,
      y: startY,
    }))
    setSnake(initialSnake)
  }

  // Animation loop
  useEffect(() => {
    if (!isActive) return

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time
      }

      const deltaTime = time - lastTimeRef.current
      frameCountRef.current += 1

      // Update every few frames based on speed
      if (frameCountRef.current >= 30 / speed) {
        moveSnake()
        checkCoinCollisions()
        frameCountRef.current = 0
      }

      lastTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [isActive, snake, coins, direction, speed, targetCoin, score])

  // Create a new coin at a random position
  const createNewCoin = () => {
    const maxWidth = window.innerWidth - 100
    const maxHeight = window.innerHeight - 100

    // Select a random meme coin type
    const randomType = coinTypes[Math.floor(Math.random() * coinTypes.length)] as Coin["type"]

    // Assign different values based on coin type
    let coinValue = 1
    switch (randomType) {
      case "doge":
        coinValue = 1 // Classic, standard value
        break
      case "shiba":
        coinValue = 2 // More valuable
        break
      case "pepe":
        coinValue = 3 // Rare, high value
        break
      case "bonk":
        coinValue = 2 // Medium value
        break
      case "wif":
        coinValue = 4 // Most valuable, rare
        break
      default:
        coinValue = 1
    }

    const newCoin: Coin = {
      id: Date.now(),
      x: Math.floor(Math.random() * maxWidth) + 50,
      y: Math.floor(Math.random() * maxHeight) + 50,
      value: coinValue,
      size: 40, // Fixed size for all coins
      eaten: false,
      type: randomType,
    }

    setCoins((prevCoins) => [...prevCoins, newCoin])
  }

  // Find the nearest coin to target
  useEffect(() => {
    if (coins.length === 0 || !isActive) return

    const uneatenCoins = coins.filter((coin) => !coin.eaten)
    if (uneatenCoins.length === 0) {
      createNewCoin()
      return
    }

    // Find the nearest coin
    const head = snake[0]
    let nearest = uneatenCoins[0]
    let minDistance = Math.sqrt(Math.pow(head.x - nearest.x, 2) + Math.pow(head.y - nearest.y, 2))

    uneatenCoins.forEach((coin) => {
      const distance = Math.sqrt(Math.pow(head.x - coin.x, 2) + Math.pow(head.y - coin.y, 2))
      if (distance < minDistance) {
        minDistance = distance
        nearest = coin
      }
    })

    setTargetCoin(nearest)
  }, [coins, snake, isActive])

  // Update direction based on target coin
  useEffect(() => {
    if (!targetCoin || !isActive) return

    const head = snake[0]
    const dx = targetCoin.x - head.x
    const dy = targetCoin.y - head.y

    // Normalize direction vector
    const length = Math.sqrt(dx * dx + dy * dy)
    if (length === 0) return

    const newDirection = {
      x: dx / length,
      y: dy / length,
    }

    setDirection(newDirection)
  }, [targetCoin, snake, isActive])

  // Move the snake
  const moveSnake = () => {
    const newSnake = [...snake]
    const head = { ...newSnake[0] }

    // Move head in current direction
    head.x += direction.x * speed
    head.y += direction.y * speed

    // Wrap around screen edges
    if (head.x < 0) head.x = window.innerWidth
    if (head.x > window.innerWidth) head.x = 0
    if (head.y < 0) head.y = window.innerHeight
    if (head.y > window.innerHeight) head.y = 0

    // Add new head and remove tail to maintain fixed length
    newSnake.unshift(head)
    newSnake.pop()

    setSnake(newSnake)
  }

  // Reset snake when score reaches 35
  useEffect(() => {
    if (score >= 35) {
      // Show reset message
      setShowResetMessage(true)

      // Reset after a delay
      setTimeout(() => {
        // Reset score
        setScore(0)

        // Reset snake position (but keep same size)
        const startY = snake[0].y
        initializeSnake(startY)

        // Reset speed
        setSpeed(5)

        // Hide reset message
        setShowResetMessage(false)
      }, 2000)
    }
  }, [score])

  // Check if snake has collided with any coins
  const checkCoinCollisions = () => {
    const head = snake[0]
    let coinEaten = false

    const updatedCoins = coins.map((coin) => {
      if (coin.eaten) return coin

      const distance = Math.sqrt(Math.pow(head.x - coin.x, 2) + Math.pow(head.y - coin.y, 2))

      if (distance < coin.size / 2 + 10) {
        // Snake head radius + buffer
        // Coin is eaten
        coinEaten = true
        setScore((prevScore) => prevScore + coin.value)

        // Play coin collection sound
        if (audioRef.current && audioLoaded) {
          // Create a new Audio object each time to avoid issues with simultaneous playback
          const sound = new Audio("/sounds/coin-collect.mp3")
          sound.volume = 0.5 // Set volume to 50%
          sound.play().catch((err) => console.error("Audio play failed:", err))
        }

        // Increase speed slightly with each coin eaten
        setSpeed((prevSpeed) => Math.min(prevSpeed + 0.1, 10))

        // Add visual eating effect
        const headElement = document.querySelector(".snake-head")
        if (headElement) {
          headElement.classList.add("eating")
          setTimeout(() => {
            headElement.classList.remove("eating")
          }, 300)
        }

        return { ...coin, eaten: true }
      }

      return coin
    })

    setCoins(updatedCoins)

    // Create a new coin if one was eaten
    if (coinEaten) {
      setTimeout(createNewCoin, 1000)
    }

    // Occasionally add an extra coin
    if (Math.random() < 0.002 && coins.filter((c) => !c.eaten).length < 5) {
      createNewCoin()
    }
  }

  // Toggle snake activity
  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Audio element for coin collection sound */}
      <audio
        ref={audioRef}
        src="/sounds/coin-collect.mp3"
        preload="auto"
        onCanPlayThrough={() => setAudioLoaded(true)}
        onError={(e) => console.error("Audio failed to load:", e)}
      />

      {/* Score display */}
      <div className="fixed top-4 right-4 bg-[#1a2235]/80 p-2 rounded-lg z-50 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-lg font-bold">{score}</span>
          <span className="text-yellow-400 text-lg">🪙</span>
          <button onClick={toggleActive} className="ml-2 bg-green-500/20 hover:bg-green-500/40 p-1 rounded">
            {isActive ? "⏸️" : "▶️"}
          </button>
        </div>
      </div>

      {/* Reset message */}
      {showResetMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500/80 text-white px-6 py-3 rounded-lg z-50 animate-bounce">
          <p className="text-xl font-bold">Score: 35! Snake Reset! 🐍</p>
        </div>
      )}

      {/* Coins */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          className={cn("absolute transition-all duration-300", coin.eaten ? "coin-eaten" : "opacity-100")}
          style={{
            left: `${coin.x}px`,
            top: `${coin.y}px`,
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-full h-full animate-spin-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={coinImages[coin.type] || "/placeholder.svg"}
                alt={coin.type}
                width={coin.size}
                height={coin.size}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Snake */}
      {snake.map((segment, index) => {
        const isHead = index === 0
        // Fixed segment sizes - head is larger, rest are uniform
        const segmentSize = isHead ? 24 : 18
        const coinEaten = false // Define coinEaten here

        return (
          <div
            key={index}
            className={cn(
              "absolute rounded-full transition-transform duration-75 flex items-center justify-center",
              isHead ? "bg-green-500 z-41 snake-head" : "bg-green-600 z-40",
              isHead && coinEaten ? "eating" : "",
            )}
            style={{
              left: `${segment.x}px`,
              top: `${segment.y}px`,
              width: `${segmentSize}px`,
              height: `${segmentSize}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {isHead && (
              <>
                {/* Snake eyes */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-black rounded-full"></div>

                {/* Snake tongue */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  style={{
                    transformOrigin: "center top",
                    animation: "tongue-flick 1s infinite",
                  }}
                >
                  <div className="w-1 h-4 bg-red-500"></div>
                  <div className="flex -mt-1">
                    <div className="w-1 h-2 bg-red-500 transform rotate-45"></div>
                    <div className="w-1 h-2 bg-red-500 transform -rotate-45"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
