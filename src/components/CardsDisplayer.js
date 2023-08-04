import React from 'react'
import Card from './Card'
import { linksArray } from '../imagesAndFlat';

const CardsDisplayer = ({filteredProperties}) => {
  return (
    <div className="max-w-[1300px] mx-auto py-5">
      <h1 className='font-sans text-5xl text-center underline underline-offset-2'>Our choice of popular real estate</h1>
      <div className="flex flex-row flex-wrap justify-center w-full gap-4 py-5 gap-y-8">
        {filteredProperties.map((card, index) => {
          const randomIndex = Math.floor(Math.random() * linksArray.length);
          const imageLink = linksArray[randomIndex];
          return <Card key={index} card={card} image={imageLink} />;
        })}
      </div>
    </div>
  );
}

export default CardsDisplayer