"use client";

import Header from "../components/Header";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { useState } from "react";

export default function PageUser() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(0);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const calcularIMC = () => {
    setIMC(Number((Number(weight) / (Number(height) / 100) ** 2).toFixed(1)));
  };

  return (
    <div className="w-full bg-neutral-950 flex text-center">
      {step === 1 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-5 lg:gap-5">
          <Header />
          <p className="mx-auto mb-6 text-gray-400">Vamos começar</p>
          <InputText
            text={"Nome"}
            value={name}
            onChance={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="">
            <Button text={"Começar"} onClick={handleNext} />
          </div>
        </div>
      ) : step === 2 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-5 lg:gap-5">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-left-icon lucide-arrow-left mr-2"
              onClick={() => setStep(step - 1)}
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <h1 className="uppercase text-2xl">Sua medidas</h1>
          </div>
          <p className="mx-auto mb-16 text-gray-400">Calcular IMC</p>
          <InputText
            text={"Peso (kg)"}
            value={weight}
            onChance={(e) => {
              setWeight(e.target.value);
            }}
          />
          <InputText
            text={"Altura (cm)"}
            value={height}
            onChance={(e) => {
              setHeight(e.target.value);
            }}
          />

          <div className={imc === 0 ? "hidden" : "flex"}>
            <div>Seu IMC</div>
            <div>
              <div>{imc}</div>
              <div>{imcClassification(imc)}</div>
            </div>
          </div>
          <div className="">
            <Button
              text={imc === 0 ? "Calcular" : "Próximo"}
              onClick={imc === 0 ? calcularIMC : handleNext}
            />
          </div>
        </div>
      ) : step === 3 ? (
        <div className="w-full h-dvh flex flex-col bg-[#151515] mx-auto items-center text-center justify-center gap-3">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-left-icon lucide-arrow-left mr-2"
              onClick={() => setStep(step - 1)}
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <h1 className="uppercase text-2xl">Seu nível</h1>
          </div>
          <p className="mx-auto mb-16 text-gray-400">
            Qual experiência com treinos
          </p>
          <div className="flex w-80 h-25 px-4 border rounded-2xl items-center transition hover:scale-105 hover:shadow-xl hover:border-green-500">
            <div className="w-15 h-15 border mr-2 bg-[#414141] border-none rounded-xl">
              img
            </div>
            <div className="flex-col text-left">
              <h2 className="text-md">Iniciante</h2>
              <p className="text-sm text-gray-400">Menos de 6 meses</p>
              <p className="text-xs pt-0.5 text-green-400">Treino Full Body</p>
            </div>
          </div>

          <div className="flex w-80 h-25 px-4 border rounded-2xl items-center transition hover:scale-105 hover:shadow-xl hover:border-green-500">
            <div className="w-15 h-15 border mr-2 bg-[#414141] border-none rounded-xl">
              img
            </div>
            <div className="flex-col text-left">
              <h2 className="text-md">Intermediário</h2>
              <p className="text-sm text-gray-400">6 meses a 2 anos de treino</p>
              <p className="text-xs pt-0.5 text-green-400">Treino ABC / ABCD</p>
            </div>
          </div>

          <div className="flex w-80 h-25 px-4 border rounded-2xl items-center transition hover:scale-105 hover:shadow-xl hover:border-green-500">
            <div className="w-15 h-15 border mr-2 bg-[#414141] border-none rounded-xl">
              img
            </div>  
            <div className="flex-col text-left">
              <h2 className="text-md">Avançado</h2>
              <p className="text-sm text-gray-400">Mais de 2 anos de treino</p>
              <p className="text-xs pt-0.5 text-green-400">Personalizado</p>
            </div>
          </div>
          <div className="">
            <Button
              text={"Continuar"}
              onClick={handleNext}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function imcClassification(imc: number) {
  if (imc < 18.5) {
    return <p className="text-orange-300">Abaixo do peso</p>;
  } else if (imc < 25) {
    return <p className="text-green-300">Peso Normal</p>;
  } else if (imc < 30) {
    return <p className="text-orange-400">Sobrepeso</p>;
  } else {
    return <p className="text-red-400">Obesidade</p>;
  }
}
