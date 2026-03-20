const statboticsApi = 'https://api.statbotics.io/v3'

async function getTeamStats(number, eventCode) {
  try {
    const response = await fetch(`${statboticsApi}/team_event/${number}/${eventCode}`);
    
    
   
    const data = await response.json();
    return {
      epa:  data.epa?.total_points?.mean ?? null,
      rank: data.record?.qual?.rank ?? null,
      name: data.team_name ?? null,
    }
    
  } catch (error) {
    console.error('Failed to fetch team:', error);
    return null; // fallback
  }
}

// Test it
getTeamStats(3937, '2026arli').then(stats => console.log(stats));
