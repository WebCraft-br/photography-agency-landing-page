import { Button, Tag } from "@/components/ui/WorkButton";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardOverlay, Headline } from "@/components/ui/WorkCard";
import { MdArrowForward } from "react-icons/md";

export default function Works() {
  const cards = [
    {
      image: "/card/card1.jpg",
      title: "Criaturas Majestosas da Savana Africana",
      description: "Capturando os padrões requintados e a energia dinâmica do grande felino mais icônico da África.",
      tags: ["Retratos de Vida Selvagem", "Natureza", "Mamíferos", "#2023", "#2023", "#2023", "#2023"],
    },
    {
      image: "/card/card2.jpg",
      title: "A Silhueta Sereno de um Templo",
      tags: ["Natureza", "Arquitetura", "#2023", "#2023", "#2023", "#2023"],
    },
    {
      image: "/card/card3.jpg",
      title: "Momentos Enquadrados em Retratos",
      tags: ["Retratos", "Arte", "#2023", "Arquitetura", "Arquitetura"],
    },
  ];

  return (
    <section className=" bg-[#1C1A1F] px-4 mt-20">
      <CardDescription className="py-4 text-[#808080]"> (03) <br/> Nosso Trabalho</CardDescription>
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
        <div className="max-w-xl lg:w-1/2">
          <Headline>
            <span className="text-white font-bold">Explore</span> a arte e a precisão por trás do <span className="text-white font-bold">nosso portfólio</span> de fotografia atemporal
          </Headline>
        </div>
        <div className="max-w-xl lg:w-1/2 mt-6 lg:mt-0 lg:text-left">
          <CardDescription className="mb-8 text-[#808080]">
            Embarque em uma jornada visual por nossos momentos preciosos capturados com criatividade e precisão.
            Cada imagem em nosso portfólio reflete nossa dedicação em preservar a beleza e o significado da vida.
          </CardDescription>
          <div className="buttons flex flex-row">
            <button className=" text-white capitalize border-2 border-[#8f8f8f] rounded-[50px] px-6 py-2 hover:bg-[#808080] hover:text-black hover:border-[#808080]">Explore Mais</button>
            <button className="bg-white rounded-[20px] w-10 h-10 flex flex-row items-center justify-center rotate-[-45deg]"> <MdArrowForward size={24} color="#000000" /></button>
          </div>
        </div>
      </div>

      {/* Seção de Cartões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Primeiro Cartão */}
        <Card variant="large" className="relative overflow-hidden rounded-2xl">
          <img
            src={cards[0].image}
            alt={cards[0].title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <CardOverlay>
            {cards[0].tags && (
              <div className="absolute top-2 pl-16 right-2 mt-2 flex gap-2 flex-wrap justify-end cursor-pointer">
                {cards[0].tags.map((tag, i) => (
                  <Tag key={i} className="mr-2">{tag}</Tag>
                ))}
              </div>
            )}
            <CardHeader>
              <CardTitle>{cards[0].title}</CardTitle>
              <CardDescription>{cards[0].description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button variant="outline" className="text-white hover:bg-white hover:text-black">
                Mais Detalhes <span className="ml-4 lg:ml-52 xl:ml-80">&gt;</span>
              </Button>
            </CardFooter>
          </CardOverlay>
        </Card>

        {/* Outros Cartões */}
        {cards.slice(1).map((card, index) => (
          <Card key={index} variant="medium" className="relative overflow-hidden rounded-2xl">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <CardOverlay>
              <CardHeader>
                {/* Renderizar Tags para os Outros Cartões */}
                {card.tags && (
                  <div className="absolute top-2 pl-8 right-2 mt-2 flex gap-2 flex-wrap justify-end cursor-pointer">
                    {card.tags.map((tag, i) => (
                      <Tag key={i} className="mr-2">{tag}</Tag>
                    ))}
                  </div>
                )}
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button variant="ghost">
                  Mais Detalhes <span className="ml-4 md:ml-6 lg:ml-8">&gt;</span>
                </Button>
              </CardFooter>
            </CardOverlay>
          </Card>
        ))}
      </div>
    </section>
  );
}
