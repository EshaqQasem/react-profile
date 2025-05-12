import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "تكنوفيزن, رواد تقنية المعلومات",
  description: " مؤسسة تكنوفيزن لرايادة الأعمال التقنية",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}

