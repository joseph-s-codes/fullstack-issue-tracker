import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16 bg-gray-800">
        <Navbar />
      </div>
      <div className="h-1 bg-black"></div>
      

      <div className="flex flex-1">
        <div className="w-52 bg-gray-700">
          <Sidebar />
        </div>

        <div className="w-1 bg-black"></div>

        <div className="w-full bg-gray-700">
          This will be the main page to interact with stuff
          </div>
      </div>
      

    </div>
  );
}