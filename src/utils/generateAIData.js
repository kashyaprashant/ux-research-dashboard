// Mock AI data generator - replace with real API call later
export default function generateAIData({productName, userGroup, problem, domain}) {
  const groups = userGroup.split(',').map(s=>s.trim()).filter(Boolean);
  const personas = groups.length ? groups.map((g,i)=>({
    id: `${g.replace(/\s+/g,'-').toLowerCase()}-${i}`,
    name: g,
    role: i===0? 'Learner':'Educator',
    ageRange: i%2===0?'18-35':'30-50',
    img: `https://i.pravatar.cc/150?img=${i+5}`,
    motivations: ['Quick facts','Verified content','Share with peers'],
    frustrations: ['Scattered content','No verification','Too long'],
  })) : [{
    id: 'persona-1', name: 'Curious Learner', role: 'Learner', ageRange:'18-35',
    img:'https://i.pravatar.cc/150?img=5', motivations:['Quick facts'], frustrations:['No verification']
  }];

  const goalsData = [
    { name: 'Quick Learn', value: 80 },
    { name: 'Share Facts', value: 65 },
    { name: 'Curate Lessons', value: 50 },
  ];

  const successCriteria = [
    { name: 'Time to fact', value: 80 },
    { name: 'Share ratio', value: 60 },
    { name: 'Satisfaction', value: 75 },
  ];

  const journeyData = [
    { stage: 'Discover', value: 25 },
    { stage: 'Consume', value: 50 },
    { stage: 'Act', value: 25 },
  ];

  const iaLinks = [
    { source: 'Home', target: 'Feed', value: 4 },
    { source: 'Home', target: 'Trending', value: 3 },
    { source: 'Explore', target: 'Search', value: 5 },
    { source: 'Explore', target: 'Collections', value: 2 },
    { source: 'Profile', target: 'Saved', value: 3 },
  ];

  const matrixData = [
    { name: 'High Mot, Low Exp', value: 30 },
    { name: 'High Mot, High Exp', value: 25 },
    { name: 'Low Mot, Low Exp', value: 20 },
    { name: 'Low Mot, High Exp', value: 25 },
  ];

  return { personas, goalsData, successCriteria, journeyData, iaLinks, matrixData, meta:{productName,domain} };
}