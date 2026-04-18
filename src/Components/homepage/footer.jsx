import React from 'react';
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();
    return (

        <>
            <footer id="about" className="border-t border-border bg-secondary/40">
                <div className="container mx-auto px-4 py-14">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-card)]">
                                    <Stethoscope className="h-5 w-5" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-foreground">
                                    Medi<span className="text-primary">Book</span>
                                </span>
                            </Link>
                            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                                Book trusted, verified doctors in seconds. Your health, our priority — care that fits
                                your schedule.
                            </p>

                            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" /> 24 Wellness Ave, Suite 200, NY 10001
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-primary" /> +1 (800) 555-MEDI
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-primary" /> care@medibook.health
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <nav>
                            <h6 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                Services
                            </h6>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="transition-colors hover:text-primary">Find a doctor</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Online consult</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Lab tests</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Pharmacy</a></li>
                            </ul>
                        </nav>

                        {/* Company */}
                        <nav>
                            <h6 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                Company
                            </h6>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="transition-colors hover:text-primary">About us</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Careers</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Press</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Contact</a></li>
                            </ul>
                        </nav>

                        {/* Legal */}
                        <nav>
                            <h6 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                Legal
                            </h6>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="transition-colors hover:text-primary">Terms of use</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Privacy policy</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">Cookie policy</a></li>
                                <li><a href="#" className="transition-colors hover:text-primary">HIPAA notice</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
                        <p className="text-sm text-muted-foreground">
                            © {year} MediBook · Your health, our priority.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { Icon: FaFacebook, label: "Facebook" },
                                { Icon: FaTwitter, label: "Twitter" },
                                { Icon: FaInstagram, label: "Instagram" },
                                { Icon: FaLinkedin, label: "LinkedIn" },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[var(--shadow-card)]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

