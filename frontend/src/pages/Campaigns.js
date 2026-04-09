import { useEffect, useState } from "react";
import { getCampaigns } from "../api/campaignApi";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns().then(setCampaigns);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Campaigns</h2>

      {campaigns.map((c) => (
        <div key={c.id} className="p-4 border mb-2">
          <h3 className="font-bold">{c.title}</h3>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}