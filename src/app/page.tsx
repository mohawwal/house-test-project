import { Nav } from "@/components/Nav";
import Home from "@/pages/home/page";


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f2f1]">
      <Nav />
      <Home/>
    </div>
  );
}
