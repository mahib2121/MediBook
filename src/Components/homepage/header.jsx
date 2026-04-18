import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";


export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <a href="" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(image:--gradient-primary) text-primary-foreground shadow-[var(--shadow-card)]">
                        <Stethoscope className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Medi<span className="text-primary">Book</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
                    <a href="#doctors" className="transition-colors hover:text-foreground">
                        Doctors
                    </a>
                    <a href="#specialties" className="transition-colors hover:text-foreground">
                        Specialties
                    </a>
                    <a href="#about" className="transition-colors hover:text-foreground">
                        About
                    </a>
                </nav>

                <Button size="sm" className="shadow-(--shadow-card)">
                    Sign In
                </Button>
            </div>
        </header>
    );
}   