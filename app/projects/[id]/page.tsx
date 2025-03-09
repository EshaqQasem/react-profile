"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Globe, Github, Calendar } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import ProjectCard from "@/components/project-card"
import { useParams } from "next/navigation";

const  projects = [
  {
    id: "project1",
    title: "منصة تعليمية",
    description: "منصة تعليمية متكاملة تتيح للمعلمين إنشاء دورات تعليمية وللطلاب الاشتراك فيها ومتابعة تقدمهم",
    fullDescription: [
      "قمت بتطوير منصة تعليمية متكاملة تهدف إلى تسهيل عملية التعليم عن بعد وتوفير بيئة تفاعلية للمعلمين والطلاب.",
      "تتيح المنصة للمعلمين إنشاء دورات تعليمية وإضافة محتوى متنوع مثل الفيديوهات والملفات والاختبارات، كما تمكن الطلاب من الاشتراك في الدورات ومتابعة تقدمهم وأداء الاختبارات.",
      "استخدمت في هذا المشروع تقنيات حديثة مثل Next.js للواجهة الأمامية وNode.js للواجهة الخلفية وMongoDB لقاعدة البيانات، مما يوفر أداءً سريعًا وتجربة مستخدم سلسة.",
    ],
    features: [
      "نظام تسجيل وإدارة المستخدمين",
      "إنشاء وإدارة الدورات التعليمية",
      "رفع وعرض محتوى متنوع (فيديو، PDF، صور)",
      "نظام اختبارات متكامل",
      "لوحة تحكم للمعلمين والإداريين",
      "تتبع تقدم الطلاب وإحصائيات",
      "نظام مدفوعات واشتراكات",
      "واجهة مستخدم سهلة الاستخدام ومتجاوبة",
    ],
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS", "AWS S3", "Stripe"],
    image: "/imags/blog/7.webp",
    gallery: [
      "/imags/blog/7.webp",
      "/imags/blog/7.webp",
      "/imags/blog/7.webp",
      "/imags/blog/7.webp",
    ],
    client: "شركة تعليمية",
    date: "يناير 2023",
    duration: "4 أشهر",
    website: "https://yacoubalhaidari.com/",
    github: "https://github.com/YacoubAl-hardari/react-profile",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: "project2",
    title: "متجر إلكتروني",
    description: "متجر إلكتروني متكامل مع نظام دفع وإدارة مخزون وسلة تسوق",
    fullDescription: [
      "قمت بتطوير متجر إلكتروني متكامل يتيح للشركات عرض وبيع منتجاتها عبر الإنترنت بطريقة سهلة وآمنة.",
      "يتضمن المتجر نظام إدارة منتجات متكامل، وسلة تسوق، ونظام دفع آمن، وإدارة للمخزون، وتتبع للطلبات، بالإضافة إلى لوحة تحكم للإداريين.",
      "استخدمت في هذا المشروع React للواجهة الأمامية وExpress للواجهة الخلفية وPostgreSQL لقاعدة البيانات، مع دمج Stripe لمعالجة المدفوعات.",
    ],
    features: [
      "عرض وتصفح المنتجات بطريقة سهلة",
      "البحث والتصفية حسب الفئات والأسعار",
      "سلة تسوق متكاملة",
      "نظام دفع آمن باستخدام Stripe",
      "إدارة المخزون والطلبات",
      "حسابات المستخدمين وتتبع الطلبات",
      "لوحة تحكم للإداريين",
      "تصميم متجاوب لجميع الأجهزة",
    ],
    technologies: ["React", "Express", "PostgreSQL", "Redux", "Stripe", "Material UI", "Docker", "AWS"],
    image: "/imags/blog/8.png",
    gallery: [
      "/imags/blog/8.png",
      "/imags/blog/8.png",
      "/imags/blog/8.png",
      "/imags/blog/8.png",
    ],
    client: "شركة تجارية",
    date: "مارس 2023",
    duration: "3 أشهر",
    website: "https://yacoubalhaidari.com/",
    github: "https://github.com/YacoubAl-hardari/react-profile",
    tags: ["React", "Express", "Stripe", "PostgreSQL"],
  },
  {
    id: "project3",
    title: "تطبيق إدارة المهام",
    description: "تطبيق لإدارة المهام والمشاريع مع إمكانية تتبع الوقت والتعاون مع الفريق",
    fullDescription: [
      "قمت بتطوير تطبيق لإدارة المهام والمشاريع يساعد الأفراد والفرق على تنظيم عملهم وزيادة إنتاجيتهم.",
      "يتيح التطبيق إنشاء وتنظيم المهام في مشاريع ولوحات، وتعيين المهام لأعضاء الفريق، وتتبع الوقت المستغرق، ووضع مواعيد نهائية وتذكيرات.",
      "استخدمت في هذا المشروع React Native لتطوير تطبيق متعدد المنصات يعمل على أجهزة iOS وAndroid، مع Firebase للتخزين والمصادقة وRedux لإدارة حالة التطبيق.",
    ],
    features: [
      "إنشاء وتنظيم المهام والمشاريع",
      "تعيين المهام لأعضاء الفريق",
      "تتبع الوقت المستغرق في المهام",
      "وضع مواعيد نهائية وتذكيرات",
      "مشاركة الملفات والتعليقات",
      "لوحات كانبان لتتبع سير العمل",
      "تقارير وإحصائيات",
      "إشعارات في الوقت الحقيقي",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Expo", "Cloud Functions", "Jest", "GitHub Actions"],
    image: "/imags/blog/9.png",
    gallery: [
      "/imags/blog/9.png",
      "/imags/blog/9.png",
      "/imags/blog/9.png",
      "/imags/blog/9.png",
    ],
    client: "شركة برمجيات",
    date: "مايو 2023",
    duration: "2 أشهر",
    website: "https://yacoubalhaidari.com/",
    github: "https://github.com/YacoubAl-hardari/react-profile",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    "id": "project4",
    "title": "تطبيق محادثة",
    "description": "تطبيق محادثة في الوقت الحقيقي مع دعم الرسائل النصية والصوتية والفيديو",
    "fullDescription": [
      "تم تطوير هذا التطبيق ليكون منصة تواصل متكاملة، تدعم المحادثات الفردية والجماعية، مع إمكانية إرسال الرسائل النصية والصوتية ومكالمات الفيديو بجودة عالية.",
      "يعتمد التطبيق على تقنيات WebRTC لضمان تجربة اتصال سلسة، مع Socket.io لتحديث المحادثات بشكل لحظي.",
      "يتم تخزين البيانات بشكل آمن باستخدام MongoDB، مع تشفير الرسائل لحماية خصوصية المستخدمين."
    ],
    "features": [
      "دعم المحادثات النصية والصوتية والفيديو",
      "إمكانية إنشاء مجموعات دردشة",
      "إشعارات لحظية عند استقبال رسائل جديدة",
      "مشاركة الصور والملفات",
      "نظام حالات (Stories) يظهر للمستخدمين لفترة محدودة",
      "تشفير البيانات لضمان الأمان والخصوصية"
    ],
    "technologies": ["React", "Socket.io", "WebRTC", "MongoDB"],
    "image": "/imags/blog/9.webp",
    "gallery": [
      "/imags/blog/9.webp",
      "/imags/blog/9.webp",
      "/imags/blog/9.webp"
    ],
    "client": "منصة اجتماعية ناشئة",
    "date": "يناير 2024",
    "duration": "3 أشهر",
    "website": "https://example.com",
    "github": "https://github.com/example/chat-app",
    "tags": ["React", "Socket.io", "WebRTC", "MongoDB"]
  },
  {
    "id": "project5",
    "title": "لوحة تحكم إدارية",
    "description": "لوحة تحكم إدارية متكاملة لإدارة المحتوى والمستخدمين والإحصائيات",
    "fullDescription": [
      "لوحة تحكم احترافية توفر واجهة مرنة لإدارة المستخدمين، المحتوى، والصلاحيات، مع تقارير متقدمة عن أداء النظام.",
      "يتميز النظام بتجربة مستخدم سلسة باستخدام Tailwind CSS، مع أمان عالي بفضل Prisma لإدارة قاعدة البيانات.",
      "يدعم العمل مع قواعد بيانات متعددة، مع عمليات تدقيق وتسجيل النشاطات لضمان الموثوقية."
    ],
    "features": [
      "إدارة المستخدمين والصلاحيات",
      "تحليلات وإحصائيات متقدمة",
      "دعم الوضع الداكن والواجهة التفاعلية",
      "تصدير البيانات بتنسيقات مختلفة (Excel، PDF)",
      "تكامل مع خدمات خارجية عبر API",
      "دعم تعدد اللغات"
    ],
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    "image": "/imags/blog/10.png",
    "gallery": [
      "/imags/blog/10.png",
      "/imags/blog/10.png",
      "/imags/blog/10.png"
    ],
    "client": "شركة تقنية متخصصة في تحليل البيانات",
    "date": "مارس 2024",
    "duration": "2.5 أشهر",
    "website": "https://example.com",
    "github": "https://github.com/example/admin-dashboard",
    "tags": ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]
  },
  {
    "id": "project6",
    "title": "موقع شخصي",
    "description": "موقع شخصي احترافي لعرض الأعمال والمهارات والخبرات",
    "fullDescription": [
      "تم تصميم الموقع ليكون منصة احترافية تعكس هوية المستخدم، مع قسم للأعمال السابقة والمدونة والتواصل.",
      "يتميز الموقع بتصميم ديناميكي يعتمد على Framer Motion لتحسين التفاعل البصري وتجربة المستخدم.",
      "يدعم التحميل السريع والتجاوب مع جميع الأجهزة، مع تحسينات لمحركات البحث (SEO)."
    ],
    "features": [
      "معرض أعمال متكامل",
      "مدونة شخصية لإضافة المقالات",
      "تأثيرات بصرية جذابة باستخدام Framer Motion",
      "صفحة تواصل ديناميكية مع نموذج اتصال",
      "تحسينات SEO لضمان ظهور الموقع في نتائج البحث",
      "دعم الوضع الداكن والواجهة التفاعلية"
    ],
    "technologies": ["React", "Framer Motion", "Tailwind CSS"],
    "image": "/imags/blog/11.jpg",
    "gallery": [
      "/imags/blog/11.jpg",
      "/imags/blog/11.jpg",
      "/imags/blog/11.jpg"
    ],
    "client": "مطور ويب مستقل",
    "date": "فبراير 2024",
    "duration": "1.5 شهر",
    "website": "https://example.com",
    "github": "https://github.com/example/personal-website",
    "tags": ["React", "Framer Motion", "Tailwind CSS"]
  }

]

export default function ProjectPage() {

     const params = useParams();
     const projectId = params?.id; 

      const project = projects.find((p) => p.id === projectId);

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

  // Related projects (excluding current project)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .filter((p) => p.tags.some((tag) => project.tags.includes(tag)))
    .slice(0, 3)

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
              {project.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
        {relatedProjects.length > 0 && (
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

