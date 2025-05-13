import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as Icons from "lucide-react" // Import all icons as a namespace
import {Code} from "lucide-react" // Import all icons as a namespace

import { FC } from "react" // Import React's Function Component type

interface ServiceCardProps {
  title: string
  description: string
  icon: string

}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as FC<{ className?: string }> | undefined;

  return (
    <Card className="text-center h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {IconComponent ? (
            <IconComponent className="h-8 w-8 text-primary" />
          ) : (
            <Code className="h-8 w-8 text-primary" />
          )}
        {/* <div dangerouslySetInnerHTML={{ __html: icon }} /> */}

        {/* <DynamicIcon name={icon} color="red" size={48} /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9d1dd7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-icon lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>    */}
        {/* <i className="fas fa-truck h-8 w-8 text-primary"></i> */}

          {/* <Icon className="h-8 w-8 text-primary" /> */}

        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

