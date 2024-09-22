import Image from "next/image";
import Navbar from "./navbar";
import Slides from "./slides";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slides/>
    </div>
  );
}
