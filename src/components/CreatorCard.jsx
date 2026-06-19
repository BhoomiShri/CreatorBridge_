export default function CreatorCard({ creator }) {
  return (
    <div className="bg-white rounded-3xl shadow p-5">

      <h2 className="text-xl font-bold">
        {creator.name}
      </h2>

      <div className="mt-4">

        <div className="bg-green-100 text-green-700 rounded-xl p-2 inline-block">
          Match Score: {creator.score}
        </div>

      </div>

      <h3 className="mt-5 font-semibold">
        Reasons
      </h3>

      <ul className="mt-2 space-y-2">
        {creator.reasons.map((reason,index)=>(
          <li key={index}>
            ✓ {reason}
          </li>
        ))}
      </ul>

      <div className="mt-5 bg-yellow-50 p-3 rounded-xl">
        <strong>Concern:</strong>
        <p>{creator.concern}</p>
      </div>

    </div>
  );
}