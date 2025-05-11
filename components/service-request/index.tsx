"use client"

import { ServiceRequestProvider } from "./service-request-context"
import ServiceRequestButton from "./service-request-button"
import ServiceRequestModal from "./service-request-modal"
interface PageProp{
  whatsapp: string
}
export default function ServiceRequestWrapper({whatsapp}: PageProp) {
  return (
    <ServiceRequestProvider>
      <ServiceRequestButton />
      <ServiceRequestModal whatsapp={whatsapp} />
    </ServiceRequestProvider>
  )
}

