import React from "react";
const ServiceCard = ({ image, title, description, bgColor = "bg-violet-100" }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition text-center">
      {/* Circle with custom image */}
      <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${bgColor}`}>
        <img src={image} alt={title} className="w-15 h-15 object-contain" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-markyetcolor mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
