import React from "react";
import { MdArrowForward } from 'react-icons/md';

const About = () => {
  return (
    <>
      <div className="py-16">
        <div className="flex flex-row justify-center align-middle text-[#d0d0d0]">
          {/* Início da caixa esquerda */}
          <div className="left-box w-1/2">
            <div className="h-32 mt-10">
              <p className="text-[#808080]">(01)</p>
              <p>Sobre Nós</p>
            </div>
            <div className="w-[60%] py-10 text-justify text-[#969595]">
              Nos empenhamos arduamente em encapsular os momentos mais preciosos da vida, tecendo uma tapeçaria de arte e um toque de magia encantadora com a essência atemporal da experiência humana.
            </div>
          </div>
          {/* Início da caixa direita */}
          <div className="right-box w-1/2">
            <article className="text-[40px] mt-10 mb-5 leading-snug text-[#808080]">
              <span className="text-[#e7e7e7]">A fotografia</span> é movida por uma profunda paixão por <span className="text-[#e7e7e7]">capturar os momentos</span> mais
              <span className="text-[#e7e7e7]"> preciosos da vida </span> com arte e um toque de magia.
            </article>
            <div className="buttons flex flex-row">
              <button className="capitalize border-2 border-[#8f8f8f] rounded-[50px] px-6 py-2 hover:bg-[#808080] hover:text-black hover:border-[#808080]">Saiba Mais </button>
              <button className="bg-white rounded-[20px] w-10 h-10 flex flex-row items-center justify-center rotate-[-45deg]">
                <MdArrowForward size={24} color="#000000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
