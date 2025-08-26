// src/components/ServiceSection.tsx
import { Wrench, Home, Hammer, Ruler } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    icon: <Wrench size={28} />,
    title: "Carpentry",
    desc: "Skilled carpenters for furniture, repairs & custom designs.",
    bg: "bg-green-100",
  },
  {
    icon: <Home size={28} />,
    title: "Construction",
    desc: "Professional builders for residential & commercial projects.",
    bg: "bg-blue-100",
  },
  {
    icon: <Hammer size={28} />,
    title: "Repairs",
    desc: "Quick maintenance & reliable household repairs.",
    bg: "bg-yellow-100",
  },
  {
    icon: <Ruler size={28} />,
    title: "Engineering",
    desc: "Expertise in electrical, plumbing & civil engineering.",
    bg: "bg-red-100",
  },
  {

    icon: "🚰",
    title: "Plumbing",
    desc: "From leaks to installations — reliable plumbing solutions.",
    bg: "bg-blue-50",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Services
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },   // Mobile
            640: { slidesPerView: 2 },   // Tablet
            1024: { slidesPerView: 3 },  // Laptop
            1280: { slidesPerView: 4 },  // Desktop
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <div
                className={`p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition-all ${service.bg}`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
