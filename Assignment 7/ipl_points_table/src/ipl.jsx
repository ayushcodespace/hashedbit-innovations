import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR (ascending)
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>IPL 2022 Points Table</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>No.</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
                <tr>
                <td>{team.No}</td>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.Points}</td>
                <td>{team.NRR}</td>
                </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IPLPointsTable;
