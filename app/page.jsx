import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-full w-screen grainy overflow-x-hidden overflow-y-auto">
      <div className="h-full w-full flex flex-col mt-14 md:px-32 px-12">
        <h1 className="text-2xl mb-10">BIOMEDICAL ENGINEERING</h1>
        <div className="flex flex-col md:flex-row w-full mt-10 gap-5">
          <div className="md:w-[50%] w-full">
            <Image src={"/home.png"} width={350} height={350}/>
          </div>
          <div className="md:w-[50%] w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ducimus cum, tempore in aliquid numquam perspiciatis quidem non quas vero vitae suscipit. Pariatur incidunt dignissimos laborum, alias culpa asperiores nulla?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nihil consectetur officia, unde eveniet quia temporibus asperiores harum porro rem est soluta quidem fugiat reprehenderit, sint, hic deleniti quibusdam molestias!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint eligendi quidem ex, totam esse ratione, impedit explicabo corrupti sunt ullam laboriosam cum dicta veritatis corporis! Ex odit delectus asperiores?
          </div>
        </div>
      </div>
    </div>
  );
}
