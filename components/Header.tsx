'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Menu, Layers3, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Contributors', href: '/contributors' },
        { name: 'Projects', href: '/projects' },
        { name: 'Events', href: '/events' },
        { name: 'About', href: '/about' },
    ]

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 border-b border-primary/10 dark:border-background-light/10">
                    <div className="flex items-center gap-4">
                        <Layers3 className="w-6 h-6 text-primary dark:text-background-light" />
                        <Link 
                            href="/" 
                            className="text-xl font-unbounded font-bold uppercase text-primary dark:text-background-light"
                            onClick={closeMobileMenu}
                        >
                            Saji
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex font-unbounded items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${pathname === item.href
                                    ? 'text-primary dark:text-background-light'
                                    : 'text-primary/70 dark:text-background-light/70 hover:text-primary dark:hover:text-background-light'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/saji-gh/saji"
                            className="flex items-center gap-2 bg-primary text-background-light dark:text-background-dark px-4 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
                        >
                            <Github className="w-4 h-4 dark:text-white" />
                            <span className='text-primary dark:text-background-light'>GitHub</span>
                        </Link>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 rounded-full text-primary dark:text-background-light"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden border-b border-primary/10 dark:border-background-light/10 py-4">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`text-sm font-medium font-unbounded transition-colors px-2 py-1 ${pathname === item.href
                                        ? 'text-primary dark:text-background-light bg-primary/10 dark:bg-background-light/10 rounded-md'
                                        : 'text-primary/70 dark:text-background-light/70 hover:text-primary dark:hover:text-background-light'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}