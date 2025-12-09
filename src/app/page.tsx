/* eslint-disable @next/next/no-img-element */

import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-dvh bg-[#151515] items-center text-center gap-10 justify-center">
        <div className="flex w-28 h-28 border rounded-full items-center justify-center bg-green-400 border-none">
          <img
            src="haltere.png"
            alt="Dunbell design"
            className="w-16 h-16 rotate-45"
          />
        </div>
        <div>
          <h1 className="uppercase text-4xl">Fitweek</h1>
          <p className="mx-16 text-gray-400">
            Organize seus treinos semanais de forma simpels e eficaz
          </p>
        </div>
        <div className="flex my-16">
          <div className="flex flex-col w-20 items-center">
            <img src="chama.png" alt="Fire design" className="w-10 h-10" />
            <p className="text-gray-300">Sequências</p>
          </div>
          <div className="flex flex-col w-30 items-center border-l border-r mx-6">
            <img
              src="raio.png"
              alt="Lightning design"
              className="w-10 h-10 border-none bg-gree"
            />
            <p className="text-gray-300">Pontos</p>
          </div>
          <div className="flex flex-col w-20 items-center">
            <img src="trofeu.png" alt="Trophy design" className="w-10 h-10" />
            <p className="text-gray-300">Conquistas</p>
          </div>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="w-full h-full mt-10">
        <div className="flex flex-col m-10 text-center">
          <h2 className="uppercase text-3xl m-5">Tudo que você precisa</h2>
          <p className="mx-4 text-gray-400">
            Ferramenta poderosa para transformar sua rotina de treinos
          </p>
        </div>
        <div className="pb-3">
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="calendar.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl mt-4 mb-1">Planejamento Semanal</h3>
            <p className="text-gray-400">
              Organize seus treinos para cada dia da semana de forma clara e
              intuitiva.
            </p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="atuacao.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl mt-4 mb-1">Treino Progressivo</h3>
            <p className="text-gray-400">
              Programas adaptados ao seu nível: Iniciante, intermediário ou
              avançado.
            </p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="trofeu-icon.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl mt-4 mb-1">Gamificação</h3>
            <p className="text-gray-400">
              Conquiste pontos, mantenha sequências e desbloqueie conquistas.
            </p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5 mb-8">
            <div className="flex w-12 h-12 bg-green-500 items-center justify-center rounded-lg">
              <img
                src="batimento.png"
                alt="Calendar design"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl mt-4 mb-1">Musculação & Corrida</h3>
            <p className="text-gray-400">
              Escolha entre treinos de musculação estruturados ou registo de
              corridas.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full mb-10 pt-5 bg-[#151515] text-center items-center ">
        <div className="flex flex-col m-10 text-center justify-center">
          <h2 className="uppercase text-3xl m-5">Pronto para começar?</h2>
          <p className="mx-4 text-gray-400">
            Programas progressivos que evoluem com você
          </p>
        </div>
        <div className="pb-3">
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5 pt-8">
            <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto">
              <p className="text-green-400 text-2xl">1</p>
            </div>
            <h3 className="text-xl mt-4 mb-1">Iniciante</h3>
            <p className="text-gray-400">Full Body → ABC → ABCD</p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5 pt-8">
            <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto">
              <p className="text-green-400 text-2xl">2</p>
            </div>
            <h3 className="text-xl mt-4 mb-1">Intermediário</h3>
            <p className="text-gray-400">ABC → ABCD → Upper / Lower</p>
          </div>
          <div className="border border-gray-500 rounded-lg bg-neutral-900 h-48 m-5 p-5 pt-8">
            <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto">
              <p className="text-green-400 text-2xl">3</p>
            </div>
            <h3 className="text-xl mt-4 mb-1">Avançado</h3>
            <p className="text-gray-400">Push / Pull / Legs • Personalizado</p>
          </div>
        </div>
      </div>
      <div className="flex-col items-center justify-center w-full h-full mt-10">
        <div className="flex flex-col m-10 text-center">
          <h2 className="uppercase text-3xl m-5">Pronto para começar?</h2>
          <p className="mx-4 text-gray-400">
            Configure seu perfil em menos de 2 minutos e comece a organizar seus
            treinos hoje.
          </p>
        </div>
        <div className="flex justify-center my-12">
          <Button />
        </div>
        <div className="border-t py-8 flex-col text-center px-5">
          <div className="">
            <img src="haltere.png" alt="Dubble design" className="w-10 h-10" />
            <h4 className="uppercase">Fitweek</h4>
          </div>
          <p>pt2</p>
        </div>
      </div>
    </>
  );
}
