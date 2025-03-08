import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { Download, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-16" animation="fadeIn">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-primary/10 hover-scale">
              <Image src="/./imags/1.png" alt="صورة شخصية" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">يعقوب الحيدري</h1>
            <p className="text-xl text-muted-foreground mb-6">مطور ويب متخصص في بناء تطبيقات الويب الحديثة</p>
            <p className="mb-6">
            اسمي يعقوب الحيدري، أنا مطور Full stack developer مع خبرة 3+ سنوات في تطوير تطبيقات الويب وواجهات المستخدم المبتكرة. أتقن تطوير الواجهة الأمامية بشكل أساسي من خلال HTML و CSS و JavaScript ومكتبات مختلفة. من الجانب الخلفي، لدي معرفة واسعة بلغات الخادم، بما في ذلك PHP و Laravel،Livewire,Vue.js، وكذلك قواعد البيانات مثل MySQL. بالإضافة إلى ذلك، لدي خبرة في تطوير واجهات البرمجة (APIs) والتطوير باستخدام معمارية الميكروسيرفس
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>yacoub@yacoubalhaidari.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span dir="ltr">+967775042349</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>اليمن - صنعاء</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>1832/01/01</span>
              </div>
            </div>
            <Button asChild className="hover-lift">
              <Link href="/./imags/2.pdf" download>
                <Download className="ml-2 h-4 w-4" /> تحميل السيرة الذاتية
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* About Me Section - Enhanced for better readability */}
        <AnimatedSection className="mb-16" animation="fadeInUp">
          <SectionHeading title="من أنا" subtitle="نبذة عن حياتي المهنية" />

          <Card className="border-primary/20 overflow-hidden hover-scale">
            <div className="md:flex">
              {/* Left side - Career journey image */}
              <div className="md:w-1/3 relative min-h-[300px] bg-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/./imags/3.png"
                    alt="رحلتي المهنية"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right side - Text content */}
              <CardContent className="md:w-2/3 p-8">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
                    بدأت رحلتي في عالم البرمجة منذ أكثر من <span className="font-bold text-primary">8 سنوات</span>، حيث
                    كنت شغوفًا بتطوير المواقع الإلكترونية وتطبيقات الويب. بدأت بتعلم HTML و CSS و JavaScript، ثم توسعت في
                    تعلم إطارات العمل الحديثة مثل React و Next.js.
                  </p>

                  <div className="border-r-4 border-primary pr-4 py-2">
                    <p>
                      عملت في العديد من الشركات المرموقة، وشاركت في تطوير مشاريع متنوعة من مواقع الشركات البسيطة إلى
                      المنصات التعليمية المتكاملة والمتاجر الإلكترونية. أسعى دائمًا لتطوير مهاراتي ومواكبة أحدث التقنيات
                      في مجال تطوير الويب.
                    </p>
                  </div>

                  <p>
                    أؤمن بأن <span className="bg-primary/10 px-2 py-1 rounded">التعلم المستمر هو مفتاح النجاح</span> في
                    مجال التكنولوجيا، لذلك أحرص على حضور المؤتمرات والندوات التقنية، وأتابع الدورات التدريبية لتطوير
                    مهاراتي باستمرار.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <AnimatedSection
                      delay={0.1}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+50</p>
                      <p className="text-sm text-muted-foreground">مشروع مكتمل</p>
                    </AnimatedSection>
                    <AnimatedSection
                      delay={0.2}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+20</p>
                      <p className="text-sm text-muted-foreground">عميل سعيد</p>
                    </AnimatedSection>
                    <AnimatedSection
                      delay={0.3}
                      className="bg-background shadow-sm rounded-lg p-4 text-center hover-lift"
                    >
                      <p className="text-3xl font-bold text-primary">+8</p>
                      <p className="text-sm text-muted-foreground">سنوات خبرة</p>
                    </AnimatedSection>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Additional career highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <AnimatedSection delay={0.1} className="hover-scale">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full ml-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </span>
                  الشغف
                </h3>
                <p>
                  أحب تحويل الأفكار إلى حلول رقمية فعالة. أستمتع بالتحديات التقنية وإيجاد حلول مبتكرة للمشكلات المعقدة.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="hover-scale">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full ml-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </span>
                  التعلم المستمر
                </h3>
                <p>
                  أخصص وقتًا أسبوعيًا لتعلم تقنيات جديدة. أؤمن بأن صناعة التكنولوجيا تتطور بسرعة، وأسعى دائمًا لمواكبة هذا
                  التطور.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="hover-scale">
              <Card className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full ml-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </span>
                  التواصل
                </h3>
                <p>أؤمن بأهمية التواصل الفعال مع العملاء وفهم احتياجاتهم لتقديم أفضل الحلول التي تلبي تطلعاتهم.</p>
              </Card>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Timeline Section */}
        <AnimatedSection className="mb-16" animation="fadeInUp">
          <SectionHeading title="مسيرتي المهنية" subtitle="رحلتي في عالم البرمجة" />
          <div className="relative border-r-2 border-primary/20 pr-10">
            {[
              {
                title: "مطور ويب أول",
                subtitle: "شركة تقنية العالمية، 2020 - الحالي",
                description:
                  "أعمل كمطور ويب أول في فريق تطوير المنتجات، حيث أقود فريقًا من المطورين لبناء تطبيقات ويب متقدمة باستخدام React و Node.js.",
                icon: Briefcase,
                delay: 0.1,
              },
              {
                title: "مطور واجهة أمامية",
                subtitle: "شركة البرمجيات المتقدمة، 2018 - 2020",
                description: "عملت على تطوير واجهات مستخدم تفاعلية لعدة مشاريع باستخدام React و Redux.",
                icon: Briefcase,
                delay: 0.2,
              },
              {
                title: "مطور ويب",
                subtitle: "استوديو التصميم الإبداعي، 2016 - 2018",
                description:
                  "بدأت مسيرتي المهنية كمطور ويب، حيث عملت على تطوير مواقع ويب تفاعلية باستخدام HTML و CSS و JavaScript.",
                icon: Briefcase,
                delay: 0.3,
              },
              {
                title: "ماجستير علوم الحاسب",
                subtitle: "الجامعة الأمريكية، 2016 - 2018",
                description: "تخصص في الذكاء الاصطناعي وتعلم الآلة.",
                icon: GraduationCap,
                delay: 0.4,
              },
              {
                title: "بكالوريوس علوم الحاسب",
                subtitle: "جامعة القاهرة، 2012 - 2016",
                description: "تخصص في هندسة البرمجيات وتطوير الويب.",
                icon: GraduationCap,
                delay: 0.5,
              },
            ].map((item, index, array) => {
              const Icon = item.icon
              return (
                <AnimatedSection
                  key={index}
                  delay={item.delay}
                  className={`mb-12 relative ${index === array.length - 1 ? "mb-0" : ""} hover-lift`}
                >
                  <div className="absolute right-[-41px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.subtitle}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

