import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

// Define TypeScript interfaces
interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  whatsapp?: string;
  instagram?: string;
  email?: string;
  phone?: string;
}

interface Manager {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  details: string;
  social: SocialLinks;
}

const TeamSection = () => {

  const managers = [
    {
      scheme: "Project Director",
      name: "Jaspher Abulu",
      phone: "0419 047 025",
      email: "jaspher.abulu@abujas.com.au",
      img: "img_1.png",
    },
    {
      scheme: "Operations Manager",
      name: "Daniel Opio",
      phone: "0407 554 800",
      email: "daniel.opio@abujas.com.au",
      img: "img_2.png",
    },
    {
      scheme: "Construction Supervisor",
      name: "Solomon Olwa",
      phone: "0418 388 596",
      email: "solomon.olwa@abujas.com.au",
      img: "img_3.png",
    },
    {
      scheme: "Finance & Admin Lead",
      name: "Bosco Ceaser",
      phone: "0457 700 590",
      email: "bosco.ceaser@abujas.com.au",
      img: "img_4.png",
    },
  ];

  return (

    <section id="team" className="py-5 px-6 bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
        <p className="text-gray-600">
          Meet the experienced professionals leading Abujas Construction and Services Company Ltd.
        </p>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
    {managers.map((m, i) => (
      <div
        key={i}
        className="relative bg-red-50 rounded-2xl shadow-lg pt-20 pb-6 px-6 mb-12"
      >
        {/* Profile Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={m.img}
            alt={m.name}
            className="w-35 h-35 rounded-full border-8 border-white shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <h3 className="text-xl font-bold mb-1 mt-2">{m.scheme}</h3>
        <p className="font-medium mb-4">{m.name}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-red-800" />
            <a href={`tel:${m.phone}`} className="hover:underline">
              {m.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5 text-red-800" />
            <a
              href={`mailto:${m.email}`}
              className="hover:underline break-words"
            >
              {m.email}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>

  </section>


  );
};

export default TeamSection;