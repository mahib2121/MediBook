import { doctors } from "@/data/DoctorsData";
import { DoctorCard } from "@/components/card/doctorcard";

export default function page() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {doctors.map((doc) => (
                <DoctorCard
                    key={doc.id}
                    id={doc.id}
                    name={doc.name}
                    specialization={doc.specialization}
                    image={doc.image}
                    rating={doc.rating}
                    experience={doc.experience}
                    reviews={doc.reviews}
                    location={doc.location}
                    fee={doc.fee}
                // onBook={(id) => alert(`Booking doctor ${id}`)}
                />
            ))}
        </main>
    );
}