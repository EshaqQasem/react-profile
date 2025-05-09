const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://technovizen.com/api'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  is_active: boolean
  order_column: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

// interface Project {
//   id: number
//   title: string
//   description: string
//   tags: string[]
//   is_active: boolean
//   order_column: number
//   updated_at: string
//   deleted_at: string | null
//   full_description: string[]
//   features: string[]
//   technologies: string[]
//   image: string
//   gallery: string[]
//   client: string
//   date: string
//   duration: string
//   website: string
//   github: string
// }

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
  is_active: number
  order_column: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

interface Settings {
  id: number
  site_name: string
  site_description: string
  site_logo: string
  site_favicon: string | null
  theme_color: string | null
  support_email: string
  support_phone: string
  social_network: {
    tiktok: string | null
    youtube: string | null
    facebook: string | null
    linkedin: string | null
    whatsapp: string | null
    instagram: string | null
    pinterest: string | null
    x_twitter: string | null
  }
}


interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social_links?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface TeamMemberDetails {
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

interface ApiResponse {
  services: Service[]
  projects: Project[]
  members : TeamMember[],
  testimonials: Testimonial[],
  settings: Settings
}

export async function fetchAll(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/home`)
    if (!response.ok) throw new Error('Failed to fetch data')
    return response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      services: [],
      projects: [],
      members: [],
      testimonials: [],
  
      settings: {
        id: 1,
        site_name: '',
        site_description: '',
        site_logo: '',
        site_favicon: null,
        theme_color: null,
        support_email: '',
        support_phone: '',
        social_network: {
          tiktok: null,
          youtube: null,
          facebook: null,
          linkedin: null,
          whatsapp: null,
          instagram: null,
          pinterest: null,
          x_twitter: null
        }
      }
    }
  }
}

// Keeping these functions for backward compatibility
export async function fetchServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/services`)
    if (!response.ok) throw new Error('Failed to fetch services')
    return response.json()
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

// export async function fetchProjects(): Promise<Project[]> {
//   try {
//     const response = await fetch(`${API_BASE_URL}/projects`)
//     if (!response.ok) throw new Error('Failed to fetch projects')
//     return response.json()
//   } catch (error) {
//     console.error('Error fetching projects:', error)
//     return []
//   }
// }

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`)
    if (!response.ok) throw new Error('Failed to fetch testimonials')
    return response.json()
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function fetchTechnologies() {
  try {
    const response = await fetch(`${API_BASE_URL}/technologies`)
    if (!response.ok) throw new Error('Failed to fetch technologies')
    return response.json()
  } catch (error) {
    console.error('Error fetching technologies:', error)
    return []
  }
} 

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

export async function fetchTeamMember(id: string): Promise<TeamMemberDetails | null> {
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