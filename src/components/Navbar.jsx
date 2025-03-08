import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-green-400 text-2xl font-bold">📚 Learning Pathway</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-green-400 transition">About</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-green-400 transition">Dashboard</Link>
          <Link to="/create-path" className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition">+ Create Path</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
