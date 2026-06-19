export default function CampaignCard({ campaign }) {
  return (
    <div className="bg-white rounded-3xl shadow p-5">

      <h2 className="font-bold text-xl">
        {campaign.title}
      </h2>

      <div className="mt-3 text-gray-600">
        Objective:
        <br />
        {campaign.objective}
      </div>

    </div>
  );
}