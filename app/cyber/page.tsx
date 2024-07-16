import Landing from "@/components/cyber/Landing";
import CyberNavbar from "@/components/cyber/navbar";
import ServicesPage from "@/components/cyber/services/page";


export default function Cyber() {

  return (
    <main className="flex flex-col min-h-screen flex-1">
      <CyberNavbar />
      <Landing/>
      <ServicesPage/>
    </main>
  )
}