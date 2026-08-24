import {
  Dumbbell,
  Utensils,
  SportShoe,
  ChartColumn,
  Users,
  User,
  NotebookPen,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function QuickInfo() {
  const quickInfo = [
    {
      label: "Treinos personalizados",
      icon: <Dumbbell size={24} strokeWidth={2} />,
      description: "Planos adaptados ao seu nível",
    },
    {
      label: "Refeições planejadas",
      icon: <Utensils size={24} strokeWidth={2} />,
      description: "Cardápios balanceados para você",
    },
    {
      label: "Registro de corridas",
      icon: <SportShoe size={24} strokeWidth={2} />,
      description: "Monitore seu desempenho",
    },
    {
      label: "Evolução contínua",
      icon: <ChartColumn size={24} strokeWidth={2} />,
      description: "Acompanhe seu progresso",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 p-2 md:p-4 max-w-8xl mx-auto md:bg-neutral-900">
        {quickInfo.map((item) => (
          <div
            key={item.label}
            className="flex flex-col text-center items-center justify-center text-white bg-white/5 backdrop-blur-md border 
          border-[#DFFF00]/20 rounded-2xl shadow-lg shadow-[#DFFF00]/5 p-6 gap-2 hover:bg-white/10 hover:border-[#DFFF00]/40 
          hover:shadow-[#DFFF00]/20 transition-all duration-300 ease-in-out cursor-default group md:bg-transparent md:border-none 
          md:shadow-none md:hover:bg-transparent md:hover:border-none md:hover:shadow-none"
          >
            <span className="text-[#DFFF00] group-hover:scale-110 transition-transform duration-300 md:size-">
              {item.icon}
            </span>
            <span className="text-xs md:text-[15px] font-medium leading-tight lg:text-xl">
              {item.label}
            </span>
            <span className="text-[10px] text-white/50 hidden sm:block lg:text-sm">
              {item.description}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center px-6 py-16 md:py-20 bg-neutral-950 text-center">
        <div className="w-12 h-1 bg-[#DFFF00]/60 rounded-full mb-2"></div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Feito para sua{" "}
          <span className="text-[#DFFF00]">melhor performance</span>
        </h3>
        <p className="text-sm md:text-base text-white/50 max-w-md leading-relaxed">
          Sua rotina merece mais. Performance em cada segundo.
        </p>
      </div>
      <div className="w-full mx-auto flex pb-10 ">
        <div className="w-fill h-fill flex flex-col items-center justify-center mt-12 bg-neutral-900/60 rounded-2xl mb-2 mx-auto md:w-184 md:flex-row md:mt-0 shadow-xs shadow-white/20 lg:w-auto">
          <div className="w-sm h-fill justify-center items-start gap-3 md:w-lg">
            <div className="flex flex-col gap-2 p-8">
              <div className="w-12 h-12 flex items-center justify-center border border-[#DFFF00] rounded-lg p-2">
                <Users color="#DFFF00" strokeWidth={1.25} />
              </div>
              <h3 className="text-md text-[#DFFF00] my-2 uppercase">
                Feito para ti.
              </h3>
              <h1 className="text-3xl font-semibold">Uma app,</h1>
              <h2 className="text-3xl font-medium text-neutral-400">
                duas jornadas.
              </h2>
              <p className="text-neutral-400 my-2.5 md:w-96">
                Criamos o FitWeek a pensar em cada pessoa. Treinos, linguagem e
                progressão adaptam-se ao teu corpo e aos teus objetivos - com
                uma versão pensada para elas e outra pensada para eles.
              </p>
              <div className="flex gap-2 m-2">
                <div className="flex w-16 h-13 px-12 flex-col justify-center items-center text-center text-sm text-pink-400 bg-neutral-800/50 border border-pink-400/10 rounded-full hover:bg-pink-400 hover:text-neutral-800 hover:shadow-white" >
                  Versão Feminina
                </div>
                <div className="flex w-16 h-13 px-12 flex-col justify-center items-center text-center text-sm text-[#DFFF00] bg-neutral-800/50 border border-[#DFFF00]/10 rounded-full hover:bg-[#DFFF00] hover:text-neutral-800 hover:shadow-white">
                  Versão Masculina
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 h-full flex items-center bg-neutral-950/70 p-4">
            <Image
              className="w-full"
              width={6}
              height={6}
              src="/fitweek_mockup.svg"
              alt="fitweek app mockup feminine and masculine"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 m-6 pb-10 items-center justify-center md:flex-row">
        <div className="flex flex-col w-full p-7 h-56 bg-neutral-900/30 rounded-2xl lg:h-56">
          <User color="#00d0ff" strokeWidth={1.25} />
          <h3 className="text-lg my-3">Treino Personalizado</h3>
          <p className="text-md font-extralight text-neutral-400">Planos feitos para você.</p>
          <p className="text-md font-extralight text-neutral-400">Treinos personalizados para ele, para ela e opções rápidas</p>
        </div>
        <div className="flex flex-col w-full p-7 h-56 bg-neutral-900/30 rounded-2xl lg:h-56">
          <SportShoe color="#DFFF00" strokeWidth={1.25} />
          <h3 className="text-lg my-3">Caminhada / Corrida</h3>
          <p className="text-md font-extralight text-neutral-400">Acompanhe suas caminhadas e corridas, monitore seu progresso e supere seus limites</p>
        </div>
        <div className="flex flex-col w-full p-7 h-56 bg-neutral-900/30 rounded-2xl lg:h-56">
          <NotebookPen color="#ffc800" strokeWidth={1.25} />
          <h3 className="text-lg my-3">Registrar Números</h3>
          <p className="text-md font-extralight text-neutral-400">Anote e acompanhe dados:</p>
          <p className="text-md font-extralight text-neutral-400">peso corporal, cargas, repetições e tudo que importa para sua evolução.</p>
        </div>
      </div>
      <div className="flex flex-col text-center align-center justify-center items-center px-4 py-12 bg-neutral-900/20">
        <p>Pronto para</p>
        <p className="text-[#DFFF00] pb-10">Transformar seu Potencial?</p>
        <p className="font-extralight text-neutral-300">Seu treino. Seu ritmo. Sua evolução. Comece hoje com o FitWeek.</p>
        <Button className="w-full h-16 px-4 py-2 my-8 bg-[#DFFF00] text-black text-md font-medium rounded-lg hover:bg-[#d4f000] transition-all duration-300 hover:shadow-lg hover:shadow-[#DFFF00]/20 hover:-translate-y-0.5 md:text-lg md:w-2/3 lg:w-1/3">
              Começar agora
            </Button>
      </div>
    </div>
  );
}
