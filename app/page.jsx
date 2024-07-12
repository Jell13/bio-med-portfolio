import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-full w-full grainy overflow-x-hidden overflow-y-auto md:px-32 px-12">
      <div className="h-full w-full flex flex-col justify-center items-center mt-20 pb-10">
        <h1 className="text-3xl mb-10 font-medium">BIOMEDICAL ENGINEERING</h1>
        <div className="flex md:flex-row flex-col justify-center mt-10 gap-4">
          <div className="w-[50%] h-[50%]">
            <img src={"/home.png"} className="rounded-2xl"/>
          </div>
          <div className="md:w-[50%]">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quo voluptatum est, perspiciatis quaerat eos magni velit dicta nesciunt nihil, exercitationem illum deleniti sequi. Sapiente neque itaque consequuntur ipsa illo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum in quisquam porro illo magni consequatur cupiditate, aliquam nam molestiae ratione mollitia modi cum. Omnis, explicabo. Odit inventore minus quod.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur voluptatum consequuntur accusantium! Amet quia iusto sint sit unde minima, omnis maxime itaque quae impedit, quisquam beatae, obcaecati cum aperiam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur voluptatum consequuntur accusantium! Amet quia iusto sint sit unde minima, omnis maxime itaque quae impedit, quisquam beatae, obcaecati cum aperiam?</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
