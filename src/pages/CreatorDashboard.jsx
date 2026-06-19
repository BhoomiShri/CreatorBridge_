import Navbar from "../components/Navbar";
import CampaignCard from "../components/CampaignCard";
import MatchScoreCard from "../components/MatchScoreCard";

import { campaigns } from "../data/seed";

export default function CreatorDashboard() {

  return (
    <>
      <Navbar />

      <div className="grid md:grid-cols-2 gap-8 p-8">

        <CampaignCard campaign={campaigns[0]} />

        <MatchScoreCard />

      </div>

    </>
  );
}