const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string[]
  features: string[]
  technologies: string[]
  image: string
  gallery: string[]
  client: string
  date: string
  duration: string
  website?: string
  github?: string
  tags: string[]
  order_column: number
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`)
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function fetchProject(id: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch project')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
} 