// api.js
async function getData(number, eventCode) {
  const statboticsApi = 'https://api.statbotics.io/v3';
  try {
    const response = await fetch(`${statboticsApi}/team_event/${number}/${eventCode}`);
    const data = await response.json();
    return {
      epa:  data.epa?.total_points?.mean ?? null,
      rank: data.record?.qual?.rank ?? null,
      name: data.team_name ?? null,
    };
  } catch (error) {
    console.error('getData failed:', error);
    return null;
  }
}
