"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { Download, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useParams } from "next/navigation"
import { fetchTeamMember, type TeamMemberDetails } from "@/lib/api"
import ProjectCard from "@/components/project-card"

export default function TeamMemberPage() {
  const params = useParams()
  const memberId = params?.id as string

  const [member, setMember] = useState<TeamMemberDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadMember = async () => {
      try {
        const data = await fetchTeamMember(memberId)
        setMember(data)
      } catch (error) {
        console.error('Error loading team member:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMember()
  }, [memberId])

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-muted-foreground">جاري تحميل المعلومات...</p>
        </div>
      </div>
    )
  }

  if (!member) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">العضو غير موجود</h1>
        <p className="text-muted-foreground mb-8">لم يتم العثور على العضو المطلوب</p>
        <Button asChild>
          <Link href="/">العودة إلى فريق العمل</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-16" animation="fadeIn">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-primary/10 hover-scale">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{member.role}</p>
            <p className="mb-6">{member.bio}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>{member.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span dir="ltr">{member.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{member.contact.location}</span>
              </div>
              
            </div>
            {member.resume ?  (
            <Button asChild>
              <Link href={member.resume} download>
                <Download className="ml-2 h-4 w-4" /> تحميل السيرة الذاتية
              </Link>
            </Button>
          ): ('')}

          </div>
        </AnimatedSection>

        {/* <AnimatedSection className="mb-16" animation="fadeInUp">
          <SectionHeading title="نبذة عني" subtitle="معلومات عن حياتي المهنية" />

          <Card className="border-primary/20 overflow-hidden hover-scale">
            <div className="md:flex">
              <div className="md:w-1/3 relative min-h-[300px] bg-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/imags/3.png"
                    alt="رحلتي المهنية"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
              <CardContent className="p-6 md:w-2/3">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <AnimatedSection
                      delay={0.1}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+{member.stats.completedProjects}</p>
                      <p className="text-sm text-muted-foreground">مشروع مكتمل</p>
                    </AnimatedSection>
                    <AnimatedSection
                      delay={0.2}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+{member.stats.happyClients}</p>
                      <p className="text-sm text-muted-foreground">عميل سعيد</p>
                    </AnimatedSection>
                    <AnimatedSection
                      delay={0.3}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+{member.stats.yearsExperience}</p>
                      <p className="text-sm text-muted-foreground">سنوات خبرة</p>
                    </AnimatedSection>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {member.highlights.map((highlight, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1} className="hover-scale">
                <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="bg-primary/10 p-2 rounded-full ml-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </span>
                    {highlight.title}
                  </h3>
                  <p>{highlight.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection> */}

        {/* Timeline Section */}
        <AnimatedSection className="mb-16" animation="fadeInUp">
          <SectionHeading title="المسيرة المهنية" subtitle="الخبرات والتعليم" />
          <div className="relative border-r-2 border-primary/20 pr-10">
            {[...member.experience].map((item, index, array) => {
              const Icon = 'title' in item ? Briefcase : GraduationCap
              return (
                <AnimatedSection
                  key={index}
                  delay={0.1 + index * 0.1}
                  className={`mb-12 relative ${index === array.length - 1 ? "mb-0" : ""} hover-lift`}
                >
                  <div className="absolute right-[-41px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {item.title }
                    </h3>
                    <p className="text-muted-foreground">
                      {item.company} - {item.period}
                    </p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        {/* <AnimatedSection className="mb-16" animation="fadeInUp">
          <SectionHeading title="المهارات" subtitle="مجالات التخصص" />
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.05}>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full hover-lift">
                  {skill}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection> */}

        <AnimatedSection className="py-20 bg-muted/50" id="projects">
        <div className="container">
          <SectionHeading title="المشاريع" subtitle="بعض المشاريع التي قمت بتطويرها" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.projects.map((project) => (
              <AnimatedSection key={project.id} delay={project.order_column * 0.1} className="hover-scale">
                <ProjectCard
                  id={project.id.toString()}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              </AnimatedSection>
            ))}
          </div>
          
        </div>
      </AnimatedSection>

      </div>
    </div>
  )
} 