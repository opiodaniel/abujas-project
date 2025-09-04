import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";


const TeamSection = () => {

  const managers = [
    {
      scheme: "Project Director",
      name: "Jaspher Abulu",
      phone: "782 572 384",
      email: "jaspher.abulu@abujas.com.au",
      img: "img_1.png",
    },
    {
      scheme: "Operations Manager",
      name: "Daniel Opio",
      phone: "781 218 116",
      email: "daniel.opio@abujas.com.au",
      img: "img_2.png",
    },
    {
      scheme: "Construction Supervisor",
      name: "Solomon Olwa",
      phone: "782 635 424",
      email: "solomon.olwa@abujas.com.au",
      img: "img_3.png",
    },
    {
      scheme: "Finance & Admin Lead",
      name: "Bosco Ceaser",
      phone: "758 581 046",
      email: "bosco.ceaser@abujas.com.au",
      img: "img_4.png",
    },
    {
      scheme: "Assistant Construction Supervisor",
      name: "Innocent Aryono",
      phone: "784 623 983",
      email: "innocent.aryono@abujas.com.au",
      img: "img_5.jpg",
    },
    {
      scheme: "Electrical Maintenance Manager",
      name: "Oscar Ekwang",
      phone: "787 711 714",
      email: "oscar.ekwang@abujas.com.au",
      img: "img_6.jpg",
    },
  ];

  return (

    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-22 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 leading-relaxed">
             Meet the experienced professionals leading Abujas Construction and Services Company Ltd.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                      +256 {m.phone}
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
      </div>
    </section>

  );
};

export default TeamSection;