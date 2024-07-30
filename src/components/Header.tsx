'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo_signerpro.png';
import { Airplay, AlignJustify, House, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';

const menus = [
    {
        icon: <House className="icon-md" />,
        title: 'Home',
        href: '/',
    },
    {
        icon: <Airplay className="icon-md" />,
        title: 'Comunicação Visual',
        href: '/comunicacao-visual',
    },
    {
        icon: <ImageIcon className="icon-md" />,
        title: 'Quadros Decorativos',
        href: '/quadros-decorativos',
    },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`
                flex items-center w-full h-16 px-4 md:px-14 justify-between fixed top-0 z-20 transition-colors duration-300 ease-in-out
                ${scrolled ? 'bg-red-800 shadow-sm shadow-gray-500' : 'bg-transparent dark:bg-transparent'}
            `}
        >
            <div className="flex flex-row gap-2 items-center">
                <Image src={Logo} alt="Logo" width={40} height={40} />
                <h1 className="text-xl font-bold text-white">SIGNERPRO</h1>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className='md:hidden'>
                        <AlignJustify />
                    </Button>
                </SheetTrigger>
                <SheetContent className='bg-slate-950'>
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex flex-row gap-2 items-center">
                                <Image src={Logo} alt="Logo" width={40} height={40} />
                                <h1 className="text-xl font-bold text-white">SIGNERPRO</h1>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-8 text-white mt-8 justify-start items-start">
                        {menus.map((menu) => {
                            return (
                                <SheetClose asChild>
                                    <Link href={menu.href} key={menu.href} className="flex gap-1 items-center justify-center">
                                        {menu.icon}
                                        <p>{menu.title}</p>
                                    </Link>
                                </SheetClose>
                            )
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
            <nav className="hidden md:flex gap-6 text-white">
                {menus.map((menu) => {
                    return (
                        <Link href={menu.href} key={menu.href} className="flex gap-1 items-center justify-center">
                            {menu.icon}
                            <p>{menu.title}</p>
                        </Link>
                    )
                })}
            </nav>
        </div>
    );
}
