export default function BriefCard({ brief }) {

  if (!brief) {
    return (
      <div className="bg-white rounded-3xl shadow p-5">
        Generate a campaign brief.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow p-6 space-y-4">

      <div>
        <h3 className="font-bold">Objective</h3>
        <p>{brief.objective}</p>
      </div>

      <div>
        <h3 className="font-bold">Target Audience</h3>
        <p>{brief.audience}</p>
      </div>

      <div>
        <h3 className="font-bold">Tone</h3>
        <p>{brief.tone}</p>
      </div>

      <div>
        <h3 className="font-bold">Deliverables</h3>
        <p>{brief.deliverables}</p>
      </div>

      <div>
        <h3 className="font-bold">Do's</h3>
        <ul>
          <li>✓ Authentic content</li>
          <li>✓ Highlight product</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Don'ts</h3>
        <ul>
          <li>✗ Over edit</li>
          <li>✗ Fake claims</li>
        </ul>
      </div>

    </div>
  );
}