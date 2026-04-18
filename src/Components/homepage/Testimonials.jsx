"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Patient · New York",
        quote:
            "Booking my cardiologist took less than a minute. The whole experience felt premium and reassuring.",
        rating: 5,
    },
    {
        name: "James O.",
        role: "Patient · Boston",
        quote:
            "I love how transparent everything is — from the doctor's credentials to the price. Highly recommend.",
        rating: 5,
    },
    {
        name: "Priya R.",
        role: "Patient · Chicago",
        quote:
            "The reminders and easy rescheduling saved me so much time. Best healthcare app I've used.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Loved by thousands of patients
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Real stories from people who found care that fits their lives.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <article
                            key={index}
                            className="relative rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-5 right-5 h-8 w-8 text-gray-200" />

                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-500">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                                "{t.quote}"
                            </p>

                            {/* User */}
                            <div className="mt-6 flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                                    {t.name.charAt(0)}
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}