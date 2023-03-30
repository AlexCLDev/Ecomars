import React from "react";

export const NovalRivers = () => {
  return (
    <div className="ml-[10%] mt-[4%] max-w-[1080px]">
      <h1 className="text-[#333333] text-[45px]">
        AN EXCLUSIVE REAL ESTATE INVESTMENT PROPOSAL
      </h1>
      <div>
        <h2 className="text-[#333333] text-[35px] mt-2">
          Discover River Island
        </h2>
        <p className="text-[#8f908f] text-[19px]">
          A residential project in Bávaro - Punta Cana made up of 540 apartments
          with 1, 2 and 3 bedrooms, overlooking a majestic pool that
          interconnects all the buildings, has a BBQ area and tropical gardens.
        </p>
        <p className="text-[#8f908f] text-[19px] mt-5">
          A project with 5-star amenities and all the communities you need, such
          as: GYM, Rooftop lounge with panoramic views and its infinity Jacuzzi
        </p>
      </div>
      <div>
        <h2 className="text-[#333333] text-[35px] mt-2">
          Inside the universe of Atlantis
        </h2>
        <p className="text-[#8f908f] text-[19px]">
          An exceptional apartment complex for vacations or investment, which
          shares the five-star amenities of the majestic Atlántida project such
          as: Gym, tennis club, running circuit that together with its
          commercial area and its restaurants, will put you right in the center
          of everything you need to enjoy life.
        </p>
      </div>
      <div className="flex space-x-24 mt-8 ml-6 text-[18px]">
        <div className="text-center">
          <img
            src="https://novalproperties.com/images/projects/icon-location.jpg"
            className="w-[90px]"
          />
          <span className="block">Located</span>
          <span>Punta Cana</span>
        </div>
        <div className="text-center">
          <img
            src="https://novalproperties.com/images/projects/icon-apartaments.jpg"
            className="w-[90px]"
          />
          <span className="block">540</span>
          <span>Apartments</span>
        </div>
        <div className="text-center">
          <img
            src="https://novalproperties.com/images/projects/icon-rooms.jpg"
            className="w-[90px]"
          />
          <span className="block">1 - 2 - 3</span>
          <span>Rooms</span>
        </div>
        <div className="text-center">
          <img
            src="https://novalproperties.com/images/projects/icon-bbq.jpg"
            className="w-[90px]"
          />
          <span className="block">BBQ Area</span>
        </div>
        <div className="text-center">
          <img
            src="https://novalproperties.com/images/projects/icon-seguridad.jpg"
            className="w-[90px]"
          />
          <span className="block">Security</span>
          <span>24H</span>
        </div>{" "}
        <div className="text-center">
          <img
            src="https://novalproperties.com/images/projects/icon-vistapiscina.jpg"
            className="w-[90px]"
          />
          <span className="block">Jacuzzi</span>
        </div>
      </div>

      <a
        href="https://www.dropbox.com/scl/fo/rs1kojuyvrc4mg8xral73/h?dl=0&rlkey=fpo95kfyifbwywdmap3w4t3w0"
        target="_blank"
      >
        <button className="btn btn-sm lg:btn-lg btn-blue mx-auto mt-10">
          Descargar Brochur
        </button>
      </a>
    </div>
  );
};
