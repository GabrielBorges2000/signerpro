import { Button } from "@/components/ui/button"
import { AtSign, MapPinned, Phone, Send } from "lucide-react"
import Image from "next/image"
import ImageMock from "@/assets/image.png"
import icon1 from "@/assets/qualidade.png"
import icon2 from "@/assets/agilidade.png"
import icon3 from "@/assets/garantia.png"
import Link from "next/link"

const services = [
  {
    id: 1,
    icon: icon1,
    title: 'Qualidade',
    text: 'Utilizamos materiais de alta qualidade e tecnologia avançada para garantir que seus produtos tenham um acabamento impecável e durabilidade superior.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Agilidade',
    text: 'Oferecemos serviços rápidos e eficientes, assegurando que seus pedidos sejam entregues pontualmente.',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Garantia',
    text: 'Estamos comprometidos com sua satisfação. Por isso, todos os serviços vêm com garantia de qualidade.',
  },
]

const info = [
  {
    id: 1,
    icon: <Phone size={24} className="text-red-800" />,
    text: '73 99152-3658',
  },
  {
    id: 2,
    icon: <MapPinned size={24} className="text-red-800" />,
    text: `Avenida Rosentino Botelho de Assuncao Filho, 483A Ituberá/BA`,
  },
  {
    id: 3,
    icon: <AtSign size={24} className="text-red-800" />,
    text: 'signerpro@gmail.com',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 to-transparent" />
        <video className="w-full h-[calc(100dvh)] object-cover" autoPlay loop muted playsInline preload="none">
          <source
            src="/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">SIGNERPRO</h1>
          <p className="mt-4 max-w-xl text-gray-300 md:text-xl">
            Discover the ultimate platform for bringing your ideas to life. Explore our powerful tools and start
            creating today.
          </p>
          <div className="mt-8">
            <Button
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary p-6 text-sm font-medium text-primary-foreground 
              shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Faça um Orçamento
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 md:min-h-[80dvh] items-center justify-center flex">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-red-800">Quem Somos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Somos uma empresa dedicada a fornecer soluções inovadoras e de alta qualidade para nossos clientes. Com anos
              de experiência no mercado, nossa equipe de especialistas trabalha incansavelmente para entender as
              necessidades únicas de cada negócio e oferecer soluções personalizadas.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center min-h-[60dvh] md:min-h-[75dvh] bg-gradient-to-r from-red-600 to-red-900">
        <div className="md:flex md:flex-row items-center p-8 space-y-8 md:space-x-32 gap-16" >
          <div className="relative mr-4 md:mr-0">
            <Image src={ImageMock} alt="Billboard"
              className="md:w-[720px] md:h-[400px] rounded-lg shadow-lg relative z-10 translate-x-4 md:translate-x-8"
            />
            <div className="absolute inset-0 bg-card rounded-lg shadow-lg translate-y-4 md:translate-y-8 z-0 bg-gray-200" />
          </div>
          <div className="flex flex-col items md:items-start md:justify-start gap-10">
            <div className="text-white font-medium space-y-4 pl-4">
              <ul className="list-disc space-y-2 flex flex-col w-full items-center md:items-start">
                <li>Comunicação Visual</li>
                <li>Quadros Decorativos</li>
                <li>Designer de Ambientes</li>
                <li>Camisas Sublimadas</li>
              </ul>
            </div>
            <Button className="bg-white hover:bg-white hover:opacity-90 p-6 text-black ml-1 disabled:pointer-events-none">FAÇA UM ORÇAMENTO</Button>
          </div>
        </div>
      </section>

      <section className="w-full md:py-12 py-8 md:min-h-[80dvh] items-center justify-center flex flex-col gap-16">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-red-800">Serviços</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Com mais de 10 anos no mercado, nós da SIGNERPRO oferecemos soluções completas. Garantimos qualidade superior e atendimento personalizado para atender todas as suas necessidades. Conte conosco para dar vida às suas ideias.
            </p>
          </div>
        </div>
        <div className="container flex flex-col gap-16 lg:flex-row items-center justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex h-96 w-72 flex-col items-center rounded-md border-b-4 border-red-800 bg-gray-50 px-8 drop-shadow-md p-8"
            >
              <Image
                src={service.icon}
                alt={`icone do card de serviço: ${service.title}`}
                width={720}
                height={720}
                className="h-20 w-20"
              />
              <h4 className="mb-4 mt-8 w-96 text-center text-2xl font-bold">
                {service.title}
              </h4>
              <p className="text-center text-gray-500">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-20 lg:flex lg:flex-row lg:items-center lg:justify-center lg:px-12 lg:space-x-24 px-8"
        id="contact"
      >
        <div className="max-w-[800] ">
          <h2 className="mb-6 font-roboto text-4xl font-extrabold text-center md:text-start">
            Entre em contato com a gente!
          </h2>
          <p className="mb-8 w-80 text-xl text-gray-600 text-center md:text-start">
            Entre em contato com a SIGNERPRO, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
          </p>

          <Link
            className="mb-16 w-full md:w-auto inline-flex flex-row justify-center items-center gap-4 rounded-md bg-red-800 p-6 py-3 text-xl font-semibold text-white hover:bg-red-700 hover:text-white"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_WHATSAPP}?text=${process.env.NEXT_PUBLIC_MESSAGE_WHATSAPP}`}
            target="_blank"
          >
            <Send />
            <p>
              Entrar em contato
            </p>
          </Link>

        </div>
        <div className="flex flex-col gap-8">
          {info.map((info) => (
            <p key={info.id} className="flex flex-row gap-2 text-xl">
              {info.icon} <span>{info.text}</span>
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
