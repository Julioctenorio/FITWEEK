export default function Button(props: {text: string, onClick: () => void} ) {
  return (
    <>
      <button
        className="w-80 h-15 inline-block rounded-xl border border-current bg-green-400 px-8 py-3 text-lg font-medium text-neutral-800 transition hover:scale-110 hover:shadow-xl xl:w-64 xl:h-15 xl:text-2xl"
        onClick={props.onClick}
      >
        {props.text}
      </button>
{/* 
      <button
        className="inline-block rounded-sm border border-current px-8 py-3 text-sm font-medium text-green-400 transition hover:scale-110 hover:shadow-xl"
      >
        Download
      </button> */}
    </>
  );
}
