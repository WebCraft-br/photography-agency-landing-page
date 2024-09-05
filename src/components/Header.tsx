import React from "react";
import HeaderButton from "./ui/HeaderButton";

const Header = () => {
  return (
    <section className="max-container px-4 sm:px-6 md:px-10 flex flex-col gap-10 sm:gap-16 md:gap-20 py-6 sm:py-8 md:py-10 pb-16 sm:pb-24 md:pb-32 lg:gap-28 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7px text-white leading-tight">
          Capturando momentos lindos <br className="hidden sm:inline" />
          dentro da lente e <br className="hidden sm:inline" />
          velocidade do obturador
        </h1>
        <div className="flex flex-col w-full sm:w-auto mt-10 sm:mt-16 md:mt-24 lg:mt-32">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <HeaderButton type="button" title="Paisagem" variant="btn_green" />
            <HeaderButton type="button" title="Vida Selvagem" variant="btn_white_text" />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3">
            <HeaderButton
              type="button"
              title="Arquitetural"
              variant="btn_white_text"
            />
            <HeaderButton type="button" title="Viagem" variant="btn_white_text" />
            <HeaderButton type="button" title="Retrato" variant="btn_white_text" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
