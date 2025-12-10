export default function Card(props: {
  text: string;
  paragraph: string;
  onClick: () => void;
}) {
  return (
    <>
      <div className={`w-88 h-${27} border border-gray-700 mx-auto`}>
        <div>
          {props.text}
          {props.text}
          {props.text}
        </div>
      </div>
    </>
  );
}
