import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

        <h1 className="text-4xl font-bold mb-10">
          CreatorBridge
        </h1>

        <div className="space-y-5">

          <button
            onClick={() => navigate("/brand")}
            className="w-full bg-indigo-600 text-white p-4 rounded-xl"
          >
            I'm a Brand
          </button>

          <button
            onClick={() => navigate("/creator")}
            className="w-full bg-green-600 text-white p-4 rounded-xl"
          >
            I'm a Creator
          </button>

        </div>

      </div>

    </div>
  );
}