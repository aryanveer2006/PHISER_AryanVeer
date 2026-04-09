import { useEffect, useState } from "react";
import { getCampaigns } from "../api/campaignApi";
import Navbar from "../components/Navbar";

export default function Campaigns() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCampaigns().then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {data.map((c, i) => (
          <div key={i} className="p-4 bg-white shadow mb-2">
            {c.title}
          </div>
        ))}
      </div>
    </div>
  );
}