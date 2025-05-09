"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Globe, Github, Calendar } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import ProjectCard from "@/components/project-card"
import { useParams } from "next/navigation"
import { fetchProject, fetchProjects, type Project } from "@/lib/api"

export default function ProjectPage() {
  const params = useParams()
  const projectId = params?.id as string

  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const showRelatedProjects = false;
  useEffect(() => {
   
    const loadProject = async () => {
      try {
        const data = await fetchProject(projectId)
        setProject(data)

        if (data && showRelatedProjects) {
          // Fetch all projects to get related ones
          const allProjects = await fetchProjects()
          const related = allProjects
            .filter((p) => p.id !== data.id)
            .filter((p) => p.tags.some((tag) => data.tags.includes(tag)))
            .slice(0, 3)
          setRelatedProjects(related)
        }
      } catch (error) {
        console.error('Error loading project:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProject()
  }, [projectId])

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-muted-foreground">جاري تحميل المشروع...</p>
        </div>
      </div>
    )
  }

  // If project not found, show error
  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">المشروع غير موجود</h1>
        <p className="text-muted-foreground mb-8">لم يتم العثور على المشروع المطلوب</p>
        <Button asChild>
          <Link href="/projects">العودة إلى المشاريع</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Back Button */}
        <AnimatedSection className="mb-8" animation="fadeIn">
          <Button variant="ghost" asChild className="hover-lift">
            <Link href="/projects">
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة إلى المشاريع
            </Link>
          </Button>
        </AnimatedSection>

        {/* Project Hero */}
        <AnimatedSection className="mb-12" animation="fadeIn">
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </AnimatedSection>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <AnimatedSection className="lg:col-span-2" animation="fadeInUp" delay={0.1}>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {/* {project.fullDescription.map((paragraph, index) => ( */}
                <p className="text-muted-foreground">
                  {project.fullDescription}
                </p>
              {/* ))} */}
            </div>

            <h2 className="text-2xl font-bold mb-4">المميزات</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">التقنيات المستخدمة</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">معرض الصور</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-[200px] rounded-lg overflow-hidden hover-scale">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - صورة ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold mb-2">العميل</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">تاريخ الإنجاز</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 ml-2 text-muted-foreground" />
                    <p className="text-muted-foreground">{project.date}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">مدة المشروع</h3>
                  <p className="text-muted-foreground">{project.duration}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">روابط المشروع</h3>
                  <div className="space-y-2">
                    {project.website && (
                      <Button variant="outline" asChild className="w-full justify-start hover-lift">
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 ml-2" />
                          زيارة الموقع
                        </a>
                      </Button>
                    )}

                    {project.github && (
                      <Button variant="outline" asChild className="w-full justify-start hover-lift">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 ml-2" />
                          مستودع GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4">هل تريد مشروعًا مشابهًا؟</h3>
                  <WhatsAppButton
                    message={`مرحباً، أعجبني مشروع "${project.title}" وأود التحدث معك حول مشروع مشابه...`}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Related Projects */}
        {showRelatedProjects && relatedProjects.length > 0 && (
          <AnimatedSection className="mt-16" animation="fadeIn" delay={0.3}>
            <h2 className="text-2xl font-bold mb-8">مشاريع ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <AnimatedSection key={relatedProject.id} className="hover-scale" delay={0.4}>
                  <ProjectCard
                    id={relatedProject.id}
                    title={relatedProject.title}
                    description={relatedProject.description}
                    image={relatedProject.image}
                    tags={relatedProject.tags}
                  />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}

