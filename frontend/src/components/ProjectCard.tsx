'use client'

import Image from 'next/image'
import Button from './Button'

interface ProjectCardProps {
  title: string
  thumbnail?: string
  id: number
}

export default function ProjectCard({ title, thumbnail, id }: ProjectCardProps) {
  const imageUrl = thumbnail 
    ? `${process.env.NEXT_PUBLIC_API_URL}${thumbnail}`
    : '/placeholder.svg'

  return (
    <div className="relative w-[800px] h-[400px] rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
        <div className="p-6 flex justify-between items-start">
          <h3 className="text-2xl font-medium text-white">{title}</h3>
          <Button variant="secondary">Подробнее</Button>
        </div>
      </div>
    </div>
  )
} 