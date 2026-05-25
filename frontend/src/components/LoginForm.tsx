import { Link } from "react-router-dom";
export default function LoginForm() {
    return (
        <div className="bg-gray-800 p-8 rounded-lg w-80">
            {/* Title */}
            <h1 className="text-white text-2xl mb-6">Sign In</h1>

         {/* Enter Email */}
            <input className="w-full p-2 mb-3 rounded bg-gray-700 text-white" placeholder="Email" />

            {/* Enter Password */}
            <input className="w-full p-2 mb-4 rounded bg-gray-700 text-white" placeholder="Password" />

            {/* Press to Login */}
            <Link to="/dashboard">
            <button className="w-full bg-blue-600 p-2 rounded text-white">
                Login
                </button>
                </Link>
         

         {/* Forgot Password*/}
            <a className="text-grey" href="https://media.tenor.com/SP05MWh2XroAAAAi/hamostor.gif">
            Forgot Password
            </a>
          </div>
    )
}