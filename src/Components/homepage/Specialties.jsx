import { Heart, Brain, Baby, Sparkles, Bone, Eye } from "lucide-react";

const items = [
    { icon: Heart, label: "Cardiology" },
    { icon: Brain, label: "Neurology" },
    { icon: Baby, label: "Pediatrics" },
    { icon: Sparkles, label: "Dermatology" },
    { icon: Bone, label: "Orthopedics" },
    { icon: Eye, label: "Ophthalmology" },
];

export function Specialties() {
    return (
        <section id="specialties" className="container mx-auto px-4 py-16">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Browse by specialty
                </h2>
                <p className="mt-2 text-muted-foreground">Find the right care for your needs</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {items.map(({ icon: Icon, label }) => (
                    <button
                        key={label}
                        className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{label}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
