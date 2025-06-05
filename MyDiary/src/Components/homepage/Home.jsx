import React from "react";
export default function Home() {

  const cards =[
    {
    image: "/Heart.png",
    title: "Save moments of your life",
    description: "Watch how you change ad grow"
    },
    {
    image: "/lock.png",
    title: "Keep your thoughts and ideas private",
    description: "The diary is for your eyes only"
    },
    {
    image: "/song.png",
    title: "Add melody to show the vibe",
    description: "Choice to add songs to your enteries"
    },
  ];
  return (
    <div>
    
    <div className="flex justify-center items-center mt-10">
      <div className="flex gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-rose-400 rounded-2xl w-[300px] p-2 gap-4 shadow-xs shadow-rose-900"
          >
            <img src={card.image} width={70} className="rounded-full" />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h1>
              <p className="text-sm text-white">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <hr className="m-6 text-rose-200"/>

    <div></div>
    </div>
  );
}
