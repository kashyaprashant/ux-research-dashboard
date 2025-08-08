import React, {useState} from 'react';
import generateAIData from './utils/generateAIData';
import PersonaCard from './components/PersonaCard';
import GoalsChart from './components/GoalsChart';
import SuccessCriteriaChart from './components/SuccessCriteriaChart';
import UserJourneyChart from './components/UserJourneyChart';
import SankeyUserMatrix from './components/SankeyUserMatrix';
import InfoArchitectureTree from './components/InfoArchitectureTree';

export default function App(){
  const [form,setForm] = useState({
    productName: 'Prajati Wildlife Hub',
    userGroup: 'Casual wildlife learners (18-40), social sharers, educators',
    problem: 'Users want bite-sized, trustworthy animal facts and short videos but find content scattered and hard to validate.',
    domain: 'Education / Content Platform'
  });
  const [data,setData] = useState(null);

  function handleGenerate(e){
    e && e.preventDefault();
    const d = generateAIData(form);
    setData(d);
  }

  // simple IA mock
  const iaMock = [
    {name:'Home', children:['Feed','Trending','Topics']},
    {name:'Explore', children:['Search','Filters','Collections']},
    {name:'Learn', children:['Short Lessons','Quizzes','Download Pack']},
    {name:'Create', children:['Save Fact','Create Lesson']},
    {name:'Profile', children:['Saved','Contributions','Settings']}
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">UX Research Dashboard</h1>
        <p className="text-sm text-gray-600">Live AI-like generation (mock) — replace with OpenAI hook when ready.</p>
      </header>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" onSubmit={handleGenerate}>
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input value={form.productName} onChange={e=>setForm({...form,productName:e.target.value})} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">User Group (comma-separated)</label>
          <input value={form.userGroup} onChange={e=>setForm({...form,userGroup:e.target.value})} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Problem Statement</label>
          <input value={form.problem} onChange={e=>setForm({...form,problem:e.target.value})} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Domain</label>
          <input value={form.domain} onChange={e=>setForm({...form,domain:e.target.value})} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div className="flex items-end">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Generate</button>
        </div>
      </form>

      {!data && <div className="bg-white p-6 rounded shadow text-gray-600">No data yet — fill the fields and click Generate.</div>}

      {data && (
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Personas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.personas.map(p=><PersonaCard key={p.id} p={p} />)}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">User Goals</h3>
              <GoalsChart data={data.goalsData} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Success Criteria</h3>
              <SuccessCriteriaChart data={data.successCriteria} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">User Journey</h3>
              <UserJourneyChart data={data.journeyData} />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Information Architecture</h3>
              <InfoArchitectureTree root={iaMock} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">User Matrix (Sankey)</h3>
              <SankeyUserMatrix links={data.iaLinks} />
            </div>
          </section>
        </div>
      )}

      <footer className="mt-6 text-sm text-gray-600">Opinion: This scaffold is a practical foundation — connect it to a real AI backend for richer outputs.</footer>
    </div>
  );
}