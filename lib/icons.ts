import { 
  Code, 
  Database, 
  Layout, 
  LineChart, 
  Shield, 
  Smartphone,
  LucideIcon,
  // إضافة المزيد من الأيقونات الشائعة
  Briefcase,
  Globe,
  Server,
  Settings,
  Terminal,
  Users,
  Wrench,
  Zap,
  // أيقونة افتراضية
  HelpCircle
} from "lucide-react"

// قاموس يربط بين أسماء الأيقونات ومكوناتها
const iconMap: Record<string, LucideIcon> = {
  // الأيقونات الأساسية
  code: Code,
  database: Database,
  layout: Layout,
  lineChart: LineChart,
  shield: Shield,
  smartphone: Smartphone,
  // الأيقونات الإضافية
  briefcase: Briefcase,
  globe: Globe,
  server: Server,
  settings: Settings,
  terminal: Terminal,
  users: Users,
  wrench: Wrench,
  zap: Zap,
  // يمكن إضافة المزيد من الأيقونات هنا
}

/**
 * تحويل اسم الأيقونة من النص إلى مكون Lucide
 * @param iconName اسم الأيقونة من الباك إند
 * @returns مكون Lucide المناسب أو أيقونة افتراضية
 */
export function getIcon(iconName: string): LucideIcon {
  // تحويل اسم الأيقونة إلى حروف صغيرة وإزالة المسافات
  const normalizedName = iconName.toLowerCase().trim()
  
  // البحث عن الأيقونة في القاموس
  const icon = iconMap[normalizedName]
  
  // إرجاع الأيقونة إذا وجدت، وإلا إرجاع أيقونة افتراضية
  return icon || HelpCircle
} 