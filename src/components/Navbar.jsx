import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-5 flex justify-between">
      <h1 className="font-bold text-2xl text-indigo-600">
        CreatorBridge
      </h1>

      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/brand">Brand Dashboard</Link>
        <Link to="/creator">Creator Dashboard</Link>
      </div>
    </nav>
  );
}