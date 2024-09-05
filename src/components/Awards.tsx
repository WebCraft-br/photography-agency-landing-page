import * as React from "react";
import { cn } from "@/lib/utils";
import { Headline, CardTitle, CardDescription } from "@/components/ui/WorkCard";
import { MdArrowBack, MdArrowForward, MdArrowForwardIos, MdArrowRight, MdArrowRightAlt, MdSkipNext } from "react-icons/md";

const awardsData = [
    {
        year: "2015",
        title: "Sony World Photography Awards",
    },
    {
        year: "2017",
        title: "Fotógrafo de Viagem do Ano",
    },
    {
        year: "2022",
        title: "Prêmios Magnum de Fotografia",
    },
    {
        year: "2023",
        title: "Prêmios Internacionais de Fotografia",
    },
];

const Awards = () => {
    return (
        <section className="bg-[#1C1A1F] pt-10 text-white mt-20">
            <CardDescription className="py-4 text-[#808080]">(04) <br/> Prêmios</CardDescription>
            <div className="flex flex-col lg:flex-row justify-end items-start mb-12">
                <div className="max-w-xl">
                    <Headline className="text-left">
                        <span className="text-white font-bold">Prêmio</span> é um pixel que <span className="text-white font-bold">reflete</span> nossa constante <span className="text-white font-bold">dedicação</span> à inovação e excelência
                    </Headline>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-14">
                <div className="flex flex-col lg:w-3/5">
                    {awardsData.map((award, index) => (
                        <div key={index} className="group relative">
                            <hr className="absolute top-0 left-0 right-0 border-t border-[#363733] transition-colors duration-200 group-hover:border-transparent" />
                            <div className="p-4 rounded-lg cursor-pointer transition-colors text-[#808080] hover:bg-[#363733] h-28">
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-2xl font-bold">{award.year}</p>
                                    <p className="text-2xl w-2/5">{award.title}</p>
                                    <button className="w-10 h-10 flex items-center justify-center border border-[#808080] rounded-full group-hover:bg-white group-hover:border-white transition-all duration-200">
                                        <MdArrowForward size={24} className="text-[#808080] group-hover:text-black group-hover:rotate-[-45deg] transition-all duration-200" />
                                    </button>
                                </div>
                            </div>
                            <hr className="absolute bottom-0 left-0 right-0 border-t border-[#363733] group-hover:border-transparent transition-colors duration-200" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:w-1/2 mt-6 lg:mt-0 text-left">
                    <img
                        src="/card/afternoon.jpg"
                        alt="Uma Tarde Tranquila no Campo"
                        className="w-full h-1/2 rounded-2xl mx-auto"
                    />
                    <CardTitle className="py-4">Uma Manhã Tranquila no Campo</CardTitle>
                    <CardDescription className="text-[#808080]">
                        Enquanto o sol desce suavemente no céu ocidental, lançando um brilho dourado quente sobre as colinas e campos ondulados, o campo se acomoda em uma serenidade tranquila.
                    </CardDescription>
                </div>
            </div>
        </section>
    );
};

export default Awards;
