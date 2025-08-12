import React from 'react';

const ServiceCard = ({ title, description, iconSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <img src={iconSrc} alt={`${title} Icon`} className="h-20 w-20 mb-4" />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Live Video Consultation",
      description: "Get instant video consultation or schedule your",
      iconSrc: "https://i.imgur.com/live-video-icon.png"
    },
    {
      title: "Order Medicine",
      description: "Order easily and get the medicine in 1 hour",
      iconSrc: "https://i.imgur.com/order-medicine-icon.png"
    },
    {
      title: "Diagnostic Tests",
      description: "Get instant video consultation or schedule your",
      iconSrc: "https://i.imgur.com/diagnostic-tests-icon.png"
    },
    {
      title: "Healthcare Packages",
      description: "Consultations, hospital care, insurance & more",
      iconSrc: "https://i.imgur.com/healthcare-packages-icon.png"
    },
    {
      title: "Healthcare IT Services",
      description: "Our expert engineer can help build your health-tech solutions",
      iconSrc: "https://i.imgur.com/it-services-icon.png"
    },
    {
      title: "CareGlobal",
      description: "Quality & hassle free healthcare abroad.",
      iconSrc: "https://i.imgur.com/careglobal-icon.png"
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;