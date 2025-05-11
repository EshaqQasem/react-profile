import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // هنا يمكنك استدعاء البيانات من قاعدة البيانات
    const settings = {
      siteName: "اسم الموقع",
      logo: "/images/logo.png",
      description: "وصف الموقع",
      email: "info@example.com",
      phone: "+1234567890",
      address: "عنوان الشركة",
      socialLinks: {
        facebook: "https://facebook.com/your-page",
        twitter: "https://twitter.com/your-handle",
        instagram: "https://instagram.com/your-account",
        linkedin: "https://linkedin.com/company/your-company",
        youtube: "https://youtube.com/your-channel"
      },
      footerLinks: [
        {
          title: "روابط سريعة",
          links: [
            { name: "الرئيسية", href: "/" },
            { name: "من نحن", href: "/about" },
            { name: "خدماتنا", href: "/services" },
            { name: "تواصل معنا", href: "/contact" }
          ]
        },
        {
          title: "خدماتنا",
          links: [
            { name: "تطوير المواقع", href: "/services/web-development" },
            { name: "تطوير التطبيقات", href: "/services/app-development" },
            { name: "تصميم المواقع", href: "/services/web-design" },
            { name: "استضافة المواقع", href: "/services/hosting" }
          ]
        }
      ]
    };

    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
} 