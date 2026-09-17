import React, { useEffect, useRef } from "react";
import Card from "../cards/card";



const cards = [
  {
    icon: "📅",
    title: "स्लॉट बुकिंग",
    description: "अपनी सुविधा के अनुसार तारीख और समय का स्लॉट बुक करें।",
    bg: "bg-green-100",
  },
  {
    icon: "🔢",
    title: "कतार स्थिति",
    description: "अपना टोकन नंबर और वर्तमान कतार की स्थिति देखें।",
    bg: "bg-red-100",
  },
  {
    icon: "🌾",
    title: "फसल खरीद स्थिति",
    description: "अपनी फसल की खरीद और सत्यापन की स्थिति ऑनलाइन देखें।",
    bg: "bg-pink-100",
  },
  {
    icon: "💰",
    title: "भुगतान स्थिति",
    description: "फसल बिक्री के बाद भुगतान की स्थिति ऑनलाइन ट्रैक करें।",
    bg: "bg-yellow-100",
  },
  {
    icon: "🔔",
    title: "सूचनाएँ",
    description: "अपनी बारी और फसल खरीद से जुड़ी महत्वपूर्ण सूचनाएँ पाएं।",
    bg: "bg-blue-100",
  },
];

const cardContainer = () => {
  return (
    <div className="flex gap-5 ">
      <div className="grid grid-cols-5 gap-4 p-6 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            bg={card.bg}
          />
        ))}
      </div>
      
    </div>
  );
};

export default cardContainer;
