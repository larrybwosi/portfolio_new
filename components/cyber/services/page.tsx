import { courses, design, tripguide } from "@/assets";
import Services from "./section";
import { servicesData } from "../content";

export default function ServicesPage() {
  

  return (
    <section>
      {servicesData.map((serviceProps, index) => (
        // @ts-ignore
        <Services key={index} {...serviceProps} />
      ))}
    </section>
  );
}