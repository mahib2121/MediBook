import Image from "next/image";
import { Search, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImg from "@/assets/hero-medical.jpg";
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 to-white">
            <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:py-24 md:gap-12 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Trusted by 50,000+ patients
                    </span>

                    <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Book trusted doctors,{" "}
                        <span className="text-blue-600">
                            instantly
                        </span>
                    </h1>

                    <p className="max-w-lg text-gray-600 md:text-lg">
                        Find specialists near you and book appointments in under a minute.
                        Secure, simple, and always at your convenience.
                    </p>

                    {/* SEARCH BOX */}
                    <div className="flex w-full max-w-md items-center gap-2 rounded-2xl border bg-white p-2 shadow">
                        <Search className="ml-2 h-5 w-5 text-gray-400" />
                        <Input placeholder="Search doctor or specialty..." />
                        <Button size="sm">Search</Button>
                    </div>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-600" /> 24/7 booking
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-blue-600" /> Verified doctors
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-blue-600" /> Secure & private
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-blue-500 opacity-20 blur-3xl" />

                    <Image
                        src={heroImg}
                        alt="Modern hospital"
                        width={600}
                        height={400}
                        className="relative w-full rounded-3xl object-cover shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}