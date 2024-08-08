import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="bg-white">
                <Link to="/">
                    <h1 className="text-6xl font-bold p-3">Projects</h1>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
