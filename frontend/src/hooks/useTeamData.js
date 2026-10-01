import { useState, useEffect } from "react";

// Import team member images
import member1 from "../assets/moin.png";
import member2 from "../assets/Hr4.png";
import member3 from "../assets/hr5.png";

const useTeamData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const teamData = [
        {
          serial: 1,
          name: "Moin",
          position: "Director",
          photoUrl: member1,
        },
        
       {
          serial: 2,
          name: "S Aafreen",
          position: "HR Manager",
          photoUrl: member2,
        },
         {
          serial: 3,
          name: "SK Naim",
          position: "Marketing Head",
          photoUrl: member3,
        },

        
      ];

      setData(teamData);
    } catch (err) {
      console.error("Failed to load team data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export default useTeamData;