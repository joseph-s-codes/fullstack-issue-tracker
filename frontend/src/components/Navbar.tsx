import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="h-full flex items-center px-6 bg-gray-800">
      <h1 className="text-xl text-gray-400 font-semibold">
        Issue Tracker
      </h1>

      <div className="m-4"></div>

      <Link to="/dashboard" className="flex items-center justify-center  m-2  p-1.5 bg-gray-700 border-radius rounded">
        Dashboard
      </Link>

      <Link to="/issues" className="flex items-center justify-center  m-2  p-1.5 bg-gray-700 border-radius rounded">
        Issues
      </Link>

      <Link to="/projects" className="flex items-center justify-center  m-2  p-1.5 bg-gray-700 border-radius rounded">
        Projects
      </Link>


      <div className="ml-auto">
        <div className="flex items-center justify-center p-4 bg-white h-10 w-40 border-radius rounded">
          Joseph Salverda
        </div>  
      </div>
    </nav>
  );
}