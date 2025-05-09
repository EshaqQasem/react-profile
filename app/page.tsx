import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Download, Layout, LineChart, Shield, Smartphone } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedBackground from "@/components/animated-background"
import SkillsSection from "@/components/skills-section"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import { fetchAll } from "@/lib/api"

export default async function Home() {
  const { services, projects, testimonials, settings } = await fetchAll()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground className="opacity-70" />
        <div className="container relative z-10">
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                مرحباً، أنا <AnimatedText text={settings.site_name} className="text-primary" />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                {settings.site_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton size="lg" className="hover-lift" />
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <Link href="/projects">عرض أعمالي</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20" id="services">
        <div className="container">
          <SectionHeading title="الخدمات" subtitle="أقدم مجموعة متنوعة من الخدمات لتلبية احتياجاتك التقنية" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1} className="hover-scale">
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="projects">
        <div className="container">
          <SectionHeading title="المشاريع" subtitle="بعض المشاريع التي قمت بتطويرها" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
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
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild className="hover-lift">
              <Link href="/projects">
                عرض جميع المشاريع <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-20" animation="fadeIn">
        <SkillsSection
          categories={[
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
          ]}
        />
      </AnimatedSection>

      {/* Technologies Used Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="technologies" animation="fadeIn">
        <div className="container">
          <SectionHeading title="التقنيات التي استخدمها" subtitle="أدوات وتقنيات أستخدمها في مشاريعي" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.flatMap(project => project.technologies).filter((tech, index, self) => self.indexOf(tech) === index).map((tech, index) => (
              <AnimatedSection
                key={tech}
                delay={index * 0.05}
                className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">{tech}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20" id="testimonials" animation="fadeIn">
        <div className="container">
          <SectionHeading title="آراء العملاء" subtitle="ما يقوله العملاء عن خدماتي" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1} className="hover-scale">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary text-primary-foreground" animation="scaleIn">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للعمل معي؟</h2>
            <p className="text-primary-foreground/80 mb-8">دعنا نتعاون لتحويل أفكارك إلى واقع رقمي مميز</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className="hover-lift" />
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift"
                asChild
              >
                <Link href="/imags/2.pdf" download>
                  <Download className="ml-2 h-4 w-4" /> تحميل السيرة الذاتية
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

