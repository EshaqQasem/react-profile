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

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  email: string
  phone: string
  location: string
  birthDate: string
  resume: string
  skills: string[]
  experience: {
    title: string
    company: string
    period: string
    description: string
  }[]
  education: {
    degree: string
    institution: string
    period: string
    description: string
  }[]
  stats: {
    completedProjects: number
    happyClients: number
    yearsExperience: number
  }
  highlights: {
    title: string
    description: string
    icon: string
  }[]
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

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/team-members`)
    if (!response.ok) {
      throw new Error('Failed to fetch team members')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function fetchTeamMember(id: string): Promise<TeamMember | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/team-members/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch team member')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching team member:', error)
    return null
  }
} 