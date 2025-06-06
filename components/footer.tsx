import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { type Settings } from "@/lib/api"
import WhatsAppButton from "./whatsapp-button"

interface SettingsProp{
  // siteName: string
  // whatsapp: string
  // facebook? : string
  // twitter? : string
  // youtube?: string
  // insta? :string
 settings : Settings | null

}
export default function Footer({settings}: SettingsProp) {
  return (
    <footer className="bg-background border-t" id="contact">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4"> {settings?.site_name} </h3>
            <p className="text-muted-foreground mb-4">
              هي شركة برمجيات تتواجد في كل من اليمن السعودية وعمان
              </p>
            <div className="flex gap-4">
              {settings?.social_network?.facebook && (
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              )}

              {settings?.social_network?.x_twitter && (
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              )}

              {settings?.social_network?.instagram && (            
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              )}
              
              {settings?.social_network?.linkedin && (            
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              )}

            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  الرئيسية
                </Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  من أنا
                </Link>
              </li> */}
              {/* <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  المدونة
                </Link>
              </li> */}
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  أعمالنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">يمكنك التواصل معنا مباشرة عبر واتساب</p>
              <WhatsAppButton phoneNumber={settings?.social_network?.whatsapp ?? "967711265925"} message="مرحباً، أود التواصل معك بخصوص مشروع..." />
              {/* <form className="space-y-4 mt-4">
                <Input type="email" placeholder="البريد الإلكتروني" />
                <Input type="text" placeholder="الموضوع" />
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="الرسالة"
                ></textarea>
                <Button type="submit" className="w-full hover-lift">
                  إرسال
                </Button>
              </form> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}

