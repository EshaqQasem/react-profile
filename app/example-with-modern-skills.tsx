import { Code, Layout, Smartphone, Database } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import SkillsSection from "@/components/skills-section"
import { getSkillIcon } from "@/components/skill-icons"

export default function ExampleWithModernSkills() {
  // Hero section props
  const heroButtons = [
    { text: "تواصل معي", href: "#contact" },
    { text: "عرض أعمالي", href: "#projects" },
  ]

  // Services section props
  const services = [
    {
      title: "تطوير الواجهة الأمامية",
      description: "تصميم وتطوير واجهات مستخدم جذابة وسهلة الاستخدام باستخدام أحدث التقنيات مثل React و Next.js",
      icon: Layout,
    },
    {
      title: "تطوير الواجهة الخلفية",
      description: "بناء خدمات API قوية وقابلة للتوسع باستخدام Node.js و Express و MongoDB",
      icon: Code,
    },
    {
      title: "تطوير تطبيقات الجوال",
      description: "إنشاء تطبيقات جوال متعددة المنصات باستخدام React Native",
      icon: Smartphone,
    },
    {
      title: "قواعد البيانات",
      description: "تصميم وإدارة قواعد البيانات المختلفة مثل SQL و NoSQL",
      icon: Database,
    },
  ]

  // Skills section props with modernized structure
  const skillCategories = [
    {
      title: "مهارات الواجهة الأمامية",
      skills: [
        { name: "HTML/CSS", percentage: 95, icon: getSkillIcon("html"), color: "#e34c26" },
        { name: "JavaScript", percentage: 90, icon: getSkillIcon("javascript"), color: "#f7df1e" },
        { name: "React", percentage: 85, icon: getSkillIcon("react"), color: "#61dafb" },
        { name: "Next.js", percentage: 80, icon: getSkillIcon("nextjs") },
        { name: "Tailwind CSS", percentage: 90, icon: getSkillIcon("tailwind"), color: "#38b2ac" },
      ],
    },
    {
      title: "مهارات الواجهة الخلفية",
      skills: [
        { name: "Node.js", percentage: 85, icon: getSkillIcon("nodejs"), color: "#68a063" },
        { name: "Express", percentage: 80, icon: getSkillIcon("express") },
        { name: "MongoDB", percentage: 75, icon: getSkillIcon("mongodb"), color: "#4db33d" },
        { name: "SQL", percentage: 70, icon: getSkillIcon("sql") },
        { name: "GraphQL", percentage: 65, icon: getSkillIcon("graphql"), color: "#e535ab" },
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section without the Theme Test box */}
      <HeroSection
        title="مرحباً، أنا"
        animatedText="أحمد محمد"
        subtitle="مطور ويب متخصص في بناء تطبيقات الويب الحديثة والمواقع الإلكترونية المتميزة"
        buttons={heroButtons}
      />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Modern Skills Section */}
      <SkillsSection categories={skillCategories} background="muted" />
    </div>
  )
}

