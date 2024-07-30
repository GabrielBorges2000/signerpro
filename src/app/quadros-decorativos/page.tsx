import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import Quadros from "@/assets/quandros.jpg"
import Link from "next/link";

const tabsContentData = [
    {
        value: 'todos',
        title: 'Todos os Quadros',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'sala',
        title: 'Quadros para Sala',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'escritorio',
        title: 'Quadros para Escritório',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'quanto',
        title: 'Quadros para Quarto',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'artistas',
        title: 'Artistas',
        text: 'É simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum tem sido o texto de simulação padrão do setor desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum, e mais recentemente com software de editoração eletrônica como Aldus PageMaker, incluindo versões do Lorem Ipsum.',
    },
    {
        value: 'personalizado',
        title: 'Quadros Personalizados',
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
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Quadros Decorativos</h1>

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
                <Tabs defaultValue="todos" className="px-4 md:w-full md:px-24">
                    <TabsList className="w-full overflow-y-hidden">
                        {tabsContentData.map(({ value, title }) => (
                            <TabsTrigger value={value} key={value}>{title}</TabsTrigger>
                        ))}
                    </TabsList>
                    {tabsContentData.map(({ value, title, text }) => (
                        <TabsContent key={value} value={value} className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col justify-center items-center space-y-12 my-8 ">
                                <h1 className="text-4xl font-bold text-red-800">{title}</h1>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 p-4 md:p-6">
                                    <div className="relative overflow-hidden rounded-lg group">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                            src={Quadros}
                                            alt="Product 1"
                                            width={600}
                                            height={600}
                                            className="object-cover w-full aspect-square"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold text-center">Stylish Sunglasses</h3>
                                            <p className="text-sm text-muted-foreground text-center">UV protection</p>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-lg group">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                            src={Quadros}
                                            alt="Product 2"
                                            width={400}
                                            height={400}
                                            className="object-cover w-full aspect-square"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold text-center">Leather Crossbody Bag</h3>
                                            <p className="text-sm text-muted-foreground text-center">Stylish and practical</p>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-lg group">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                            src={Quadros}
                                            alt="Product 3"
                                            width={400}
                                            height={400}
                                            className="object-cover w-full aspect-square"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold text-center">Wireless Headphones</h3>
                                            <p className="text-sm text-muted-foreground text-center">High-quality sound</p>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-lg group">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                            src={Quadros}
                                            alt="Product 4"
                                            width={400}
                                            height={400}
                                            className="object-cover w-full aspect-square"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold text-center">Classic Wristwatch</h3>
                                            <p className="text-sm text-muted-foreground text-center">Timeless design</p>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-lg group">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                            src={Quadros}
                                            alt="Product 5"
                                            width={400}
                                            height={400}
                                            className="object-cover w-full aspect-square"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold text-center">Ergonomic Keyboard</h3>
                                            <p className="text-sm text-muted-foreground text-center">Comfortable typing</p>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-lg group">
                                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                            <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                            src={Quadros}
                                            alt="Product 6"
                                            width={400}
                                            height={400}
                                            className="object-cover w-full aspect-square"
                                        />
                                        <div className="p-4 bg-background">
                                            <h3 className="text-lg font-semibold text-center">Portable Speaker</h3>
                                            <p className="text-sm text-muted-foreground text-center">Powerful sound</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </section>
        </div>
    )
}