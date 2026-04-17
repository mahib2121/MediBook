import { DoctorCard } from "@/components/card/doctorcard";
import { doctors } from "@/data/DoctorsData";

const TopDoctor = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4">

                {/* Header */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Top Doctors
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Book appointments with our most experienced and trusted doctors.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {doctors.map((doc) => (
                        <DoctorCard
                            key={doc.id}
                            {...doc}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopDoctor;