import { ShieldCheck, Clock, BadgeCheck, HeartPulse } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Verified Specialists",
        desc: "Every doctor is credential-checked and licensed for your peace of mind.",
    },
    {
        icon: Clock,
        title: "Book in Seconds",
        desc: "Pick a slot that fits your day — confirmed instantly, no phone calls.",
    },
    {
        icon: BadgeCheck,
        title: "Transparent Pricing",
        desc: "See consult fees upfront. No surprise charges, ever.",
    },
    {
        icon: HeartPulse,
        title: "24/7 Care Support",
        desc: "Our care team is on standby to help you reschedule or follow up.",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why" className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Why patients choose MediBook
                </h2>
                <p className="mt-3 text-muted-foreground">
                    A modern way to access quality healthcare — built around you.
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                            <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
