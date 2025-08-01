import React from "react";

export default function IntroCards(){

const cards =[
    {
    image: "/Heart2.png",
    title: "Save moments of your life",
    description: "Watch how you change and grow"
    },
    {
    image: "/Lock3.png",
    title: "Keep your thoughts and ideas private",
    description: "The diary is for your eyes only"
    },
    {
    image: "/Pic.png",
    title: "Attach photos to your memories",
    description: "Make entries more vivid with visual moments"
    }

  ];
  return (
    <div>
    
    <div className="flex justify-center items-center mt-7 ">
      <div className="flex gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-violet-300 rounded-2xl w-[330px] py-2  gap-4 shadow-xs shadow-lime-700"
          >
            <img src={card.image} width={50} className="rounded-full ml-2" />
            <div>
              <h1 className="text-lg font-semibold ">
                {card.title}
              </h1>
              <p className="text-sm text-white ">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    )}