import { useState } from "react";

import Navbar from "../components/Navbar";
import BriefCard from "../components/BriefCard";
import CreatorCard from "../components/CreatorCard";

import { creators } from "../data/seed";

export default function BrandDashboard() {

  const [campaign, setCampaign] = useState("");
  const [brief, setBrief] = useState(null);

  function generateBrief() {

    setBrief({
      objective: "Increase awareness",
      audience: "Women 18-30",
      tone: "Trendy",
      deliverables: "2 reels + 3 stories"
    });

  }

  return (
    <>
      <Navbar />

      <div className="grid md:grid-cols-3 gap-6 p-8">

        <div className="bg-white p-6 rounded-3xl shadow">

          <h2 className="font-bold text-xl mb-4">
            Campaign Idea Input
          </h2>

          <textarea
            className="w-full border rounded-xl p-4"
            rows="7"
            placeholder="Describe your campaign..."
            value={campaign}
            onChange={(e)=>setCampaign(e.target.value)}
          />

          <button
            onClick={generateBrief}
            className="w-full mt-5 bg-indigo-600 text-white p-3 rounded-xl"
          >
            Generate Brief
          </button>

        </div>

        <BriefCard brief={brief} />

        <CreatorCard creator={creators[0]} />

      </div>

    </>
  );
}