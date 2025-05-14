'use client'

const API_URL = process.env.NEXT_PUBLIC_API_URL

import { useEffect, useState } from 'react'
import axios from 'axios'

type Project = {
  id: number
  title: string
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    axios.get(`${API_URL}/api/projects`)
      .then(res => setProjects(res.data.data))
      .catch(err => console.error('Ошибка при загрузке:', err))
  }, [])

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Мои проекты</h1>
      <ul className="space-y-4">
        {projects.map(project => (
          <li key={project.id} className="border rounded p-4 shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  )
}
