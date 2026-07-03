


import ServiceInfo from "@/components/template/ServiceInfo"
import { useRouter } from "next/router"


function Index() {
    const router=useRouter()
    const name=router.query.name
  return (
    <div>
        <ServiceInfo type={name}/>
    </div>
  )
}

export default Index