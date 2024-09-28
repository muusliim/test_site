'use client'
import { useEffect, useState } from 'react';

export default function Header() {
    const nav = [
        { label: "Преимущества", link: "#balance" },
        { label: "Как работаем", link: "#howwework" },
    ];

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = nav.map(item => document.querySelector(item.link));
            let currentSection = '';

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    const sectionHeight = section.clientHeight;

                    if (sectionTop <= window.innerHeight / 3 && sectionTop + sectionHeight > 0) {
                        currentSection = section.id;
                    }
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="bg-gray-03 w-full h-[72px]" id="home">
            <div className="container flex justify-between mt-8 mx-auto fixed top-0 left-0 right-0 z-10 pl-[29px]">
                <a href="#home">
                    <div className="bg-white w-[161px] h-10 flex justify-center items-center rounded-lg my-4 logo">
                        LOGO
                    </div>
                </a>
                <div>
                    <nav className="flex flex-row mt-[14px]">
                        <ul className="flex">
                            {nav.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className={`cursor-pointer px-8 py-[10px] onest-button bg-gray-03 font-semibold hover:text-customOrange ${
                                            activeLink === item.link.slice(1) ? 'text-customOrange underline' : ''
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
