'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Camisetas from '@/assets/camisetas.webp'
import QuadrosDecorativos from '@/assets/quadros-decorativos.webp'
import Carro from '@/assets/veiculo-plotado.png'
import IdentidadeVisual from '@/assets/identidade-visual.webp'
import Image from 'next/image'

const slides = [
    {
        id: 1,
        title: "Identidade Visual",
        description: "Transforme sua marca com nossa comunicação visual de alta qualidade, com impressões vibrantes e duráveis para destacar seu negócio.",
        image: IdentidadeVisual
    },
    {
        id: 2,
        title: "Personalização de Veículos",
        description: "Dê uma nova identidade aos seus veículos com nossos designs exclusivos e personalização avançada.",
        image: Carro
    },
    {
        id: 3,
        title: "Camisas Personalizadas",
        description: "Expresse seu estilo com camisas personalizadas que combinam tecnologia e criatividade para resultados únicos.",
        image: Camisetas
    },
    {
        id: 4,
        title: "Quadros Decorativos",
        description: "Enriqueça seus espaços com quadros decorativos personalizados, criados para harmonizar com qualquer ambiente e refletir seu estilo único.",
        image: QuadrosDecorativos
    }
];


export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-950 overflow-hidden rounded-sm">
            <AnimatePresence initial={false} custom={currentIndex}>
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide.id}
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover w-full h-full opacity-50"
                            quality={100}
                            priority
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{slide.title}</h2>
                            <p className="text-lg md:text-xl text-center max-w-2xl">{slide.description}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                aria-label="Slide anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                aria-label="Próximo slide"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}