import React from 'react'
import TodayCard from './todaycard';

const info = [
  {
    title: "आज के स्लॉट",
    value: "24",
    label: "उपलब्ध",
    icon: "📅",
  },
  {
    title: "कतार में किसान",
    value: "18",
    label: "किसान",
    icon: "👥",
  },
  {
    title: "खरीद जारी",
    value: "12",
    label: "किसान",
    icon: "🌾",
  },
  {
    title: "भुगतान लंबित",
    value: "05",
    label: "किसान",
    icon: "₹",
  },
]
const Todayinfo = () => {
  return (
    <div className='flex flex-col gap-3 '>
        {info.map((item,index) => (
            <TodayCard
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
            label={item.label}
            />
        ))}
      
    </div>
  )
}

export default Todayinfo
