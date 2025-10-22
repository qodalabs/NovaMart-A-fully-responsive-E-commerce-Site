"use client"
import { motion } from 'framer-motion'

export function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="space-y-3">
      <motion.img
        key={images[0]}
        src={images[0]}
        alt="Product image"
        className="w-full rounded-lg object-cover aspect-square"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
      />
      <div className="grid grid-cols-4 gap-3">
        {images.slice(1, 5).map((img, i) => (
          <motion.img
            key={img}
            src={img}
            alt="thumb"
            className="w-full rounded-md object-cover aspect-square"
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </div>
    </div>
  )
}

