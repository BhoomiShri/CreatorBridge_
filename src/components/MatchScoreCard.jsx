export default function MatchScoreCard() {

  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <h2 className="text-2xl font-bold">
        Match Score: 91
      </h2>

      <div className="mt-3 text-green-600 font-semibold">
        Strong Match
      </div>

      <h3 className="mt-5 font-bold">
        Reasons
      </h3>

      <ul className="mt-2 space-y-2">
        <li>✓ Audience alignment</li>
        <li>✓ Content relevance</li>
      </ul>

      <div className="mt-5 bg-blue-50 p-4 rounded-xl">

        <h3 className="font-bold">
          Suggestions
        </h3>

        <p>Create more beauty content</p>

      </div>

    </div>
  );
}