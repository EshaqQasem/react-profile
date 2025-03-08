import { Code, Layout, Smartphone, Database, LineChart, Shield, Briefcase, GraduationCap, Mail } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import TechnologiesSection from "@/components/technologies-section"
import TestimonialsSection from "@/components/testimonials-section"
import ExperienceSection from "@/components/experience-section"
import EducationCertificationsSection from "@/components/education-certifications-section"
import CoursesSection from "@/components/courses-section"
import CareerTimelineSection from "@/components/career-timeline-section"
import InterestsSection from "@/components/interests-section"
import AboutMeSection from "@/components/about-me-section"
import CTASection from "@/components/cta-section"
import { Download } from "lucide-react"

export default function ExamplePage() {
  // Example data for each section
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
    {
      title: "تحليل البيانات",
      description: "تحليل البيانات وإنشاء لوحات معلومات تفاعلية لمساعدتك في اتخاذ قرارات أفضل",
      icon: LineChart,
    },
    {
      title: "أمن المعلومات",
      description: "تأمين تطبيقاتك ومواقعك ضد التهديدات الإلكترونية المختلفة",
      icon: Shield,
    },
  ]

  const projects = [
    {
      id: "project1",
      title: "منصة تعليمية",
      description: "منصة تعليمية متكاملة تتيح للمعلمين إنشاء دورات تعليمية وللطلاب الاشتراك فيها ومتابعة تقدمهم",
      image: "/./imags/blog/7.webp",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      id: "project2",
      title: "متجر إلكتروني",
      description: "متجر إلكتروني متكامل مع نظام دفع وإدارة مخزون وسلة تسوق",
      image: "/./imags/blog/8.png",
      tags: ["React", "Express", "Stripe", "PostgreSQL"],
    },
    {
      id: "project3",
      title: "تطبيق إدارة المهام",
      description: "تطبيق لإدارة المهام والمشاريع مع إمكانية تتبع الوقت والتعاون مع الفريق",
      image: "/./imags/blog/9.png",
      tags: ["React Native", "Firebase", "Redux"],
    },
  ]

  const skillCategories = [
    {
      title: "مهارات الواجهة الأمامية",
      skills: [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "Next.js", percentage: 80 },
        { name: "Tailwind CSS", percentage: 90 },
      ],
    },
    {
      title: "مهارات الواجهة الخلفية",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
        { name: "SQL", percentage: 70 },
        { name: "GraphQL", percentage: 65 },
      ],
    },
  ]

  const technologies = [
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Code },
    { name: "Node.js", icon: Code },
    { name: "Express", icon: Code },
    { name: "MongoDB", icon: Code },
    { name: "PostgreSQL", icon: Code },
    { name: "GraphQL", icon: Code },
    { name: "Redux", icon: Code },
    { name: "Tailwind CSS", icon: Code },
    { name: "Git", icon: Code },
  ]

  const testimonials = [
    {
      name: "محمد أحمد",
      role: "المدير التنفيذي",
      company: "شركة تقنية",
      content:
        "تعاملت مع أحمد في مشروع تطوير موقع الشركة، وكان العمل معه ممتازًا. التزم بالمواعيد وقدم عملًا عالي الجودة.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "سارة محمود",
      role: "مديرة التسويق",
      company: "شركة إعلانية",
      content: "ساعدنا أحمد في تطوير منصة تسويقية متكاملة، وكانت النتائج مبهرة. سرعة في الاستجابة ودقة في التنفيذ.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
    {
      name: "خالد عبدالله",
      role: "مؤسس",
      company: "شركة ناشئة",
      content:
        "كان أحمد شريكًا تقنيًا ممتازًا في رحلة إطلاق شركتنا الناشئة. ساعدنا في بناء المنتج من الصفر وتجاوز التحديات التقنية.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  const experiences = [
    {
      title: "مطور ويب أول",
      company: "شركة تقنية العالمية",
      period: "2020 - الحالي",
      description:
        "أعمل كمطور ويب أول في فريق تطوير المنتجات، حيث أقود فريقًا من المطورين لبناء تطبيقات ويب متقدمة باستخدام React و Node.js.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "مطور واجهة أمامية",
      company: "شركة البرمجيات المتقدمة",
      period: "2018 - 2020",
      description: "عملت على تطوير واجهات مستخدم تفاعلية لعدة مشاريع باستخدام React و Redux.",
      skills: ["React", "Redux", "JavaScript", "SASS"],
    },
    {
      title: "مطور ويب",
      company: "استوديو التصميم الإبداعي",
      period: "2016 - 2018",
      description:
        "بدأت مسيرتي المهنية كمطور ويب، حيث عملت على تطوير مواقع ويب تفاعلية باستخدام HTML و CSS و JavaScript.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ]

  const education = [
    {
      degree: "بكالوريوس علوم الحاسب",
      institution: "جامعة القاهرة",
      period: "2012 - 2016",
      description: "تخصص في هندسة البرمجيات وتطوير الويب",
    },
    {
      degree: "ماجستير علوم الحاسب",
      institution: "الجامعة الأمريكية",
      period: "2016 - 2018",
      description: "تخصص في الذكاء الاصطناعي وتعلم الآلة",
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2021",
    },
    {
      title: "Professional Web Developer",
      issuer: "Google",
      date: "2020",
    },
    {
      title: "React Developer",
      issuer: "Meta",
      date: "2019",
    },
  ]

  const courses = [
    {
      title: "تطوير تطبيقات الويب المتقدمة",
      platform: "Udemy",
      instructor: "د. محمد علي",
      date: "2022",
      certificate: true,
    },
    {
      title: "تطوير تطبيقات الجوال باستخدام React Native",
      platform: "Coursera",
      instructor: "م. أحمد خالد",
      date: "2021",
      certificate: true,
    },
    {
      title: "تعلم GraphQL من الصفر",
      platform: "Pluralsight",
      instructor: "م. سارة أحمد",
      date: "2021",
      certificate: false,
    },
    {
      title: "تطوير الواجهة الخلفية باستخدام Node.js",
      platform: "Udemy",
      instructor: "د. خالد محمود",
      date: "2020",
      certificate: true,
    },
    {
      title: "تعلم TypeScript",
      platform: "Frontend Masters",
      instructor: "م. علي حسن",
      date: "2020",
      certificate: false,
    },
    {
      title: "تطوير الواجهة الأمامية باستخدام React",
      platform: "Udemy",
      instructor: "د. محمد علي",
      date: "2019",
      certificate: true,
    },
  ]

  const timelineItems = [
    {
      title: "مطور ويب أول",
      subtitle: "شركة تقنية العالمية",
      period: "2020 - الحالي",
      description:
        "أعمل كمطور ويب أول في فريق تطوير المنتجات، حيث أقود فريقًا من المطورين لبناء تطبيقات ويب متقدمة باستخدام React و Node.js.",
      iconType: "work" as const,
    },
    {
      title: "مطور واجهة أمامية",
      subtitle: "شركة البرمجيات المتقدمة",
      period: "2018 - 2020",
      description: "عملت على تطوير واجهات مستخدم تفاعلية لعدة مشاريع باستخدام React و Redux.",
      iconType: "work" as const,
    },
    {
      title: "مطور ويب",
      subtitle: "استوديو التصميم الإبداعي",
      period: "2016 - 2018",
      description:
        "بدأت مسيرتي المهنية كمطور ويب، حيث عملت على تطوير مواقع ويب تفاعلية باستخدام HTML و CSS و JavaScript.",
      iconType: "work" as const,
    },
    {
      title: "ماجستير علوم الحاسب",
      subtitle: "الجامعة الأمريكية",
      period: "2016 - 2018",
      description: "تخصص في الذكاء الاصطناعي وتعلم الآلة.",
      iconType: "education"as const,
    },
    {
      title: "بكالوريوس علوم الحاسب",
      subtitle: "جامعة القاهرة",
      period: "2012 - 2016",
      description: "تخصص في هندسة البرمجيات وتطوير الويب.",
      iconType: "education"as const,
    },
  ]
  

  const interests = [
    { name: "قراءة الكتب", icon: "📚" },
    { name: "السفر", icon: "✈️" },
    { name: "التصوير", icon: "📷" },
    { name: "الطبخ", icon: "🍳" },
    { name: "الرياضة", icon: "🏃‍♂️" },
    { name: "الموسيقى", icon: "🎵" },
    { name: "التعلم المستمر", icon: "🧠" },
    { name: "العمل التطوعي", icon: "🤝" },
  ]

  const aboutContent = [
    "بدأت رحلتي في عالم البرمجة منذ أكثر من 8 سنوات، حيث كنت شغوفًا بتطوير المواقع الإلكترونية وتطبيقات الويب. بدأت بتعلم HTML و CSS و JavaScript، ثم توسعت في تعلم إطارات العمل الحديثة مثل React و Next.js.",
    "عملت في العديد من الشركات المرموقة، وشاركت في تطوير مشاريع متنوعة من مواقع الشركات البسيطة إلى المنصات التعليمية المتكاملة والمتاجر الإلكترونية. أسعى دائمًا لتطوير مهاراتي ومواكبة أحدث التقنيات في مجال تطوير الويب.",
    "أؤمن بأن التعلم المستمر هو مفتاح النجاح في مجال التكنولوجيا، لذلك أحرص على حضور المؤتمرات والندوات التقنية، وأتابع الدورات التدريبية لتطوير مهاراتي باستمرار.",
  ]

  const aboutStats = [
    { value: "+50", label: "مشروع مكتمل" },
    { value: "+20", label: "عميل سعيد" },
    { value: "+8", label: "سنوات خبرة" },
  ]

  const aboutHighlights = [
    {
      title: "الشغف",
      description:
        "أحب تحويل الأفكار إلى حلول رقمية فعالة. أستمتع بالتحديات التقنية وإيجاد حلول مبتكرة للمشكلات المعقدة.",
      icon: Briefcase,
    },
    {
      title: "التعلم المستمر",
      description:
        "أخصص وقتًا أسبوعيًا لتعلم تقنيات جديدة. أؤمن بأن صناعة التكنولوجيا تتطور بسرعة، وأسعى دائمًا لمواكبة هذا التطور.",
      icon: GraduationCap,
    },
    {
      title: "التواصل",
      description: "أؤمن بأهمية التواصل الفعال مع العملاء وفهم احتياجاتهم لتقديم أفضل الحلول التي تلبي تطلعاتهم.",
      icon: Mail,
    },
  ]

  const heroButtons = [
    { text: "تواصل معي", href: "#contact" },
    { text: "عرض أعمالي", href: "#projects" },
  ]

  const ctaButtons = [
    { text: "تواصل معي", href: "#contact" },
    {
      text: "تحميل السيرة الذاتية",
      href: "/cv.pdf",
      icon: <Download className="ml-2 h-4 w-4" />,
    },
  ]

  return (
    <div>
      {/* Example usage of all section components */}
      <HeroSection
        title="مرحباً، أنا"
        animatedText="أحمد محمد"
        subtitle="مطور ويب متخصص في بناء تطبيقات الويب الحديثة والمواقع الإلكترونية المتميزة"
        buttons={heroButtons}
      />

      <ServicesSection services={services} />

      <ProjectsSection projects={projects} />

      <SkillsSection categories={skillCategories} />

      <TechnologiesSection technologies={technologies} />

      <TestimonialsSection testimonials={testimonials} />

      <ExperienceSection experiences={experiences} />

      <EducationCertificationsSection education={education} certifications={certifications} />

      <CoursesSection courses={courses} />

      <CareerTimelineSection items={timelineItems} />

      <InterestsSection interests={interests} />

      <AboutMeSection content={aboutContent} stats={aboutStats} highlights={aboutHighlights} />

      <CTASection
        title="هل أنت مستعد للعمل معي؟"
        subtitle="دعنا نتعاون لتحويل أفكارك إلى واقع رقمي مميز"
        buttons={ctaButtons}
      />
    </div>
  )
}

