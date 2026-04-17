"use client";
import { Star, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function DoctorCard({
    id,
    name,
    specialization,
    image,
    rating,
    experience,
    reviews,
    fee,
    onBook,
}) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                />

                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold shadow">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {rating.toFixed(1)}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-4">

                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-blue-600">{specialization}</p>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {experience} yrs · {reviews} reviews
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {location}
                    </div> */}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-2">
                    <div>
                        <p className="text-xs text-gray-500">Consultation</p>
                        <p className="font-bold">${fee}</p>
                    </div>

                    {/* <button
                        onClick={() => onBook && onBook(id)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
                    >
                        Book
                    </button> */}
                </div>
            </div>
        </article>
    );
}