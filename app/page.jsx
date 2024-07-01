import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grainy overflow-hidden">
      <Navbar/>
      <div className="h-full w-full flex items-center mt-14 md:mx-32">
        <h1 className="text-2xl">BIOMEDICAL ENGINEERING</h1>
      </div>
    </div>
  );
}
