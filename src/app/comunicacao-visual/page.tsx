import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import ImageMock from "@/assets/image.png"
import Link from "next/link";

const tabsContentData = [
    {
        value: 'banners',
        title: 'Banners',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'fachadas',
        title: 'Fachadas',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'envelopamento',
        title: 'Envelopamento',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'sinalização',
        title: 'Sinalização',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'letreiros',
        title: 'Letreiros',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
];

export default function ComunicacaoVisual() {
    return (
        <div className="flex flex-col min-h-dvh space-y-8">
            <section className="relative w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 to-transparent" />
                <video className="w-full h-[calc(100dvh)] object-cover" autoPlay loop muted playsInline preload="none">
                    <source
                        src="/video.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Cominucação Visual</h1>

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

            <section>
                <Tabs defaultValue="banners" className="px-4 md:w-full md:px-24">
                    <TabsList className="w-full overflow-y-hidden">
                        {tabsContentData.map(({ value, title }) => (
                            <TabsTrigger value={value} key={value}>{title}</TabsTrigger>
                        ))}
                    </TabsList>
                    {tabsContentData.map(({ value, title, text }) => (
                        <TabsContent key={value} value={value} className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col justify-center items-center space-y-12 my-8 max-w-[50rem]">
                                <h1 className="text-4xl font-bold text-red-800">{title}</h1>
                                <Image src={ImageMock} alt="Imagem alternativa" className="rounded-lg" />
                                <p className="text-center font-medium text-gray-700">{text}</p>
                                <Link
                                    className="mb-16 inline-flex flex-row items-center gap-4 rounded-md bg-red-800 p-6 py-3 text-xl font-semibold text-white hover:bg-red-700 hover:text-white"
                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_WHATSAPP}?text=${process.env.NEXT_PUBLIC_MESSAGE_WHATSAPP}`}
                                    target="_blank"
                                >
                                    Faça um orçamento
                                </Link>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </section>
        </div>
    )
}