import { Inter } from "next/font/google";
const inter = Inter({ weight: "500", subsets: ["latin"] });
export default function Mainbutton(props) {
  let color;
  if (props.selected) {
    color = "#8819FD";
  } else {
    color = "#1E1E1E";
  }
  return (
    <button
      className={`${inter.className}   focus:border focus:border-solid focus:border-white hover:translate-x-1 transition ease-in-out delay-75 w-64 h-16  flex flex-col justify-center items-center gap-3 rounded-md`}
    >
      <props.icon size={128} />
      <span className="hidden lg:block lg:text-lg">{props.text}</span>
      <div className="hidden lg:block lg:grow" />
    </button>
  );
}
