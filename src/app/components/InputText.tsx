import { ChangeEvent } from "react";

export default function InputText(props:{text:string, value: string,onChance: (e: ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <>
      <label htmlFor="name" className="relative w-80 h-15">
        <input
          type="name"
          id="text"
          placeholder=""
          className="peer m-0.5 w-full h-12 pl-4 rounded-lg border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-neutral-800 dark:text-white"
          value={props.value}
          onChange={props.onChance}
        />

        <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-transparent dark:text-white">
          {props.text}
        </span>
      </label>
    </>
  );
}
