import React from 'react'
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineBathroom } from 'react-icons/md'
import {AiOutlineAreaChart} from 'react-icons/ai'

const Card = ({ card, image }) => {

  return (
    <div className="flex flex-col w-1/3 max-w-sm overflow-hidden font-sans rounded-md">
      <img className="object-cover h-72" src={image} alt="no image" />

      <div>
        <p className="text-lg font-bold text-indigo-800">{card.price}</p>
        <p className="text-lg font-semibold">{card.name}</p>
        <p className="text-base italic font-light">{card.address}</p>
      </div>
      <div className="flex pt-2 mt-4 gap-x-4 outline outline-2 outline-slate-200">
        <div className="flex items-center gap-2">
          <LuBedSingle />
          <p className="text-sm font-light">{card.beds} Beds</p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineBathroom />
          <p className="text-sm font-light">{card.bathroom} Bathroom </p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineAreaChart />
          <p className="text-sm font-light">{card.area} Area</p>
        </div>
      </div>
    </div>
  );
}

export default Card