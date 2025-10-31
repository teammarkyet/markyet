import React from 'react';

const KeyValuesCard = ({ title, description, darkMode }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow transition-colors duration-300
        ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {description}
      </p>
    </div>
  );
};

export default KeyValuesCard;
