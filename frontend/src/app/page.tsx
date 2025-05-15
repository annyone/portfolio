'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '@/components/ProjectCard'

const API_URL = process.env.NEXT_PUBLIC_API_URL

type Project = {
  id: number
  documentId: string
  product: string
  title: string
  description: string
  thumbnail?: {
    id: number
    name: string
    url: string
    formats?: {
      thumbnail?: {
        url: string
      }
    }
  }
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    axios.get(`${API_URL}/api/projects?populate=thumbnail`)
      .then(res => {
        console.log('API Response:', res.data)
        setProjects(res.data.data)
      })
      .catch(err => console.error('Ошибка при загрузке:', err))
  }, [])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            thumbnail={project.thumbnail?.formats?.thumbnail?.url || project.thumbnail?.url}
          />
        ))}
      </div>
    </main>
  )
}
