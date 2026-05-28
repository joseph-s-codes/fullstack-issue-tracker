import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Projects from "../components/Projects";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16 border-b-3">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div className="w-52 bg-gray-700">
          <Sidebar />
        </div>

        <main className="w-full border-l-3 bg-gray-700">
          <Projects />
        </main>
      </div>
      

    </div>
  );
}