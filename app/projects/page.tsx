"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"

// Sample projects data
const projects = [
  {
    id: "project1",
    title: "منصة تعليمية",
    description: "منصة تعليمية متكاملة تتيح للمعلمين إنشاء دورات تعليمية وللطلاب الاشتراك فيها ومتابعة تقدمهم",
      image: "/imags/blog/7.webp",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: "project2",
    title: "متجر إلكتروني",
    description: "متجر إلكتروني متكامل مع نظام دفع وإدارة مخزون وسلة تسوق",
      image: "/imags/blog/8.png",
    tags: ["React", "Express", "Stripe", "PostgreSQL"],
  },
  {
    id: "project3",
    title: "تطبيق إدارة المهام",
    description: "تطبيق لإدارة المهام والمشاريع مع إمكانية تتبع الوقت والتعاون مع الفريق",
      image: "/imags/blog/9.png",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: "project4",
    title: "تطبيق محادثة",
    description: "تطبيق محادثة في الوقت الحقيقي مع دعم الرسائل النصية والصوتية والفيديو",
      image: "/imags/blog/9.webp",
    tags: ["React", "Socket.io", "WebRTC", "MongoDB"],
  },
  {
    id: "project5",
    title: "لوحة تحكم إدارية",
    description: "لوحة تحكم إدارية متكاملة لإدارة المحتوى والمستخدمين والإحصائيات",
      image: "/imags/blog/10.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    id: "project6",
    title: "موقع شخصي",
    description: "موقع شخصي احترافي لعرض الأعمال والمهارات والخبرات",
      image: "/imags/blog/11.jpg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
  }
]


// All unique tags from projects
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

export default function ProjectsPage() {
  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("الكل")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  // Filter projects based on search query and selected tag
  useEffect(() => {
    let result = projects

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by tag
    if (selectedTag !== "الكل") {
      result = result.filter((project) => project.tags.includes(selectedTag))
    }

    setFilteredProjects(result)
  }, [searchQuery, selectedTag])
  useEffect(() => {
    // Check window width after component mounts
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    // Initial check
    handleResize()
    // Add resize listener
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Toggle filter menu on mobile
  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen)
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12" animation="fadeIn">
          <h1 className="text-4xl font-bold mb-4">معرض المشاريع</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعة من المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات
          </p>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection className="mb-12" animation="fadeInUp" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3 relative">
              <Input
                type="search"
                placeholder="ابحث عن مشاريع..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto" onClick={toggleFilterMenu}>
                <Filter className="h-4 w-4 ml-2" />
                تصفية حسب التقنية
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Tags Filter */}
        <AnimatedSection
             className={`mb-8 ${isFilterMenuOpen || isDesktop ? "block" : "hidden md:block"}`}
             animation="fadeInUp"
             delay={0.2}
        >
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === "الكل" ? "default" : "outline"}
              size="sm"
              className="hover-lift"
              onClick={() => setSelectedTag("الكل")}
            >
              الكل
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                className="hover-lift"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 + index * 0.05} className="hover-scale">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">لا توجد مشاريع تطابق معايير البحث</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedTag("الكل")
                  setSearchQuery("")
                }}
                className="mt-2"
              >
                عرض جميع المشاريع
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <AnimatedSection className="mt-16 bg-muted/50 rounded-lg p-8 text-center" animation="scaleIn" delay={0.4}>
          <SectionHeading title="هل لديك مشروع في ذهنك؟" subtitle="دعنا نتحدث عن كيفية تحويل فكرتك إلى واقع" />
          <div className="max-w-md mx-auto mt-8">
            <WhatsAppButton
              message="مرحباً، أود التحدث معك بخصوص مشروع جديد..."
              size="lg"
              className="w-full md:w-auto mx-auto"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

