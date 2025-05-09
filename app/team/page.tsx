"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import AnimatedSection from "@/components/animated-section"
import { fetchTeamMembers, type TeamMember } from "@/lib/api"

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const data = await fetchTeamMembers()
        setMembers(data)
        setFilteredMembers(data)
      } catch (error) {
        console.error('Error loading team members:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMembers()
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMembers(members)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = members.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.skills.some((skill) => skill.toLowerCase().includes(query))
    )
    setFilteredMembers(filtered)
  }, [searchQuery, members])

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-muted-foreground">جاري تحميل أعضاء الفريق...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12" animation="fadeIn">
          <h1 className="text-4xl font-bold mb-4">فريق العمل</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تعرف على فريق العمل المتميز الذي يقف وراء نجاح مشاريعنا
          </p>
        </AnimatedSection>

        {/* Search */}
        <AnimatedSection className="mb-8" animation="fadeIn">
          <div className="max-w-md mx-auto relative">
            <Input
              type="search"
              placeholder="ابحث عن عضو..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={0.1 + index * 0.05} className="hover-scale">
                <Link href={`/team/${member.id}`}>
                  <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-muted-foreground mb-4">{member.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">لا يوجد أعضاء يطابقون معايير البحث</p>
              <Button
                variant="link"
                onClick={() => setSearchQuery("")}
                className="mt-2"
              >
                عرض جميع الأعضاء
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 