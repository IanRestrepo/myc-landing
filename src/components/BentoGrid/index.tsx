import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
    PersonIcon,
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { LockIcon, TerminalIcon } from "lucide-react";
  
  const features = [
    {
      Icon: LockIcon,
      name: "Seguridad",
      description: "Cuidamos tus datos, tu información y tu diversión.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Accesibilidad",
      description: "Nuestras experiencias son accesibles para todos.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Conectividad",
      description: "Creamos experiencias que conectan a las personas de todo el mundo.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: TerminalIcon,
      name: "Desarrollo",
      description: "Actualizamos constantemente nuestros proyectos en pro de nuestra comunidad..",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: PersonIcon,
      name: "Comunidad",
      description:
        "Contamos con una comunidad de más de 20.000 usuarios, ¿Quieres saber nuestra historía?.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export function BentoGridSection() {
    return (
      <BentoGrid className="lg:grid-rows-3 shadow-[inset_0px_-50px_69px_0px_rgba(0,_0,_0,_0.8)]">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  