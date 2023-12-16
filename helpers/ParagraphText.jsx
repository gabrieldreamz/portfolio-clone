export default function ParagraphText({ text }) {
  return (
    <p className="font-Inter text-lg mt-3  max-w-[375px] mobile:mx-auto mobile:text-center mobile:max-w-[500px] text-black/80 tracking-normal">
      {text}
    </p>
  );
}
