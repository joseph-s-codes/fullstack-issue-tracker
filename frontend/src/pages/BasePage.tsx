import { Link } from "react-router-dom";

export default function BasePage() {
    return (
        <div>
            <Link to="/login">
                <button>Login Page</button>
            </Link>
        </div>
    );
}
