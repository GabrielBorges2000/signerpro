import { Boxes, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/assets/logo_signerpro.png';
import Image from 'next/image';
import { Separator } from './ui/separator';

export function Footer() {
    return (
        <footer className="flex flex-col bg-red-800 p-8 space-y-4">
            <div className='flex justify-between md:px-8 items-center'>
                <div className="flex flex-row gap-2 items-center">
                    <Image src={Logo} alt="Logo" width={40} height={40} />
                    <h1 className="text-xl font-bold text-white">SIGNERPRO</h1>
                </div>
                <div className="flex flex-row gap-4">
                    <Link href="https://www.instagram.com/">
                        <Instagram className="text-base font-bold text-white" size={24} />
                    </Link>
                    <Facebook className="text-base font-bold text-white" size={24} />
                </div>
            </div>
            <Separator />
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-evenly">
                <p className="font-roboto font-normal text-white text-center">SIGNERPRO 2024 © | Todos os Direitos Reservados</p>
                <p className="font-roboto font-normal text-white text-center">Desenvolvido por CODE BORGES</p>
            </div>
        </footer>
    )
}