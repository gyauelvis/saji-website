import Link from 'next/link'
import { Github } from 'lucide-react'

export function Footer() {
    return (
        <footer className="w-full border-t border-primary/10 dark:border-background-light/10 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-primary/60 dark:text-background-light/60">
                <p>Built by the Open Source Community</p>
                <Link
                    href="https://github.com/saji-gh/saji"
                    className="flex items-center space-x-2 hover:text-primary dark:hover:text-background-light transition-colors mt-4 sm:mt-0"
                >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                </Link>
            </div>
        </footer>
    )
}
