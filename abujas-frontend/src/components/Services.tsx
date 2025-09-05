// src/components/ServiceSection.tsx
import { Wrench, Home, Hammer, Ruler, Droplet, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Updated services with red-themed backgrounds
const services = [
  {
    icon: <Wrench size={28} className="text-red-900" />,
    title: "Carpentry",
    desc: "Skilled carpenters for custom furniture, repairs, and woodwork designs.",
    bg: "carpentry.jpg",
  },
  {
    icon: <Ruler size={28} className="text-red-900" />,
    title: "Interior Design",
    desc: "Modern, functional interior designs tailored to your space and style.",
    bg: "interior.jpg",
  },
  {
    icon: <Home size={28} className="text-red-900" />,
    title: "Construction",
    desc: "Professional builders for residential and commercial construction projects.",
    bg: "construction.jpg",
  },
  {
    icon: <Hammer size={28} className="text-red-900" />,
    title: "Maintenance & Repairs",
    desc: "Quick, reliable repairs and routine maintenance for homes and businesses.",
    bg: "maintenance.jpg",
  },
  {
    icon: <Zap size={28} className="text-red-900" />,
    title: "Electrical Services",
    desc: "Licensed electricians for installations, repairs, and safety checks.",
    bg: "electrical.jpg",
  },
  {
    icon: <Droplet size={28} className="text-red-900" />,
    title: "Plumbing",
    desc: "From leaks to full installations — trusted plumbing solutions.",
    bg: "plumbing.jpg",
  },
];


export default function ServiceSection() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                className="relative h-80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.bg})` }}
              >
                {/* Bottom panel for text */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>          
          ))}
        </Swiper>
      </div>
    </section>
  );
}