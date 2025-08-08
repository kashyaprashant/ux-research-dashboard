import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const COLORS = ['#6366F1', '#EC4899', '#10B981', '#F59E0B'];
export default function SuccessCriteriaChart({data}) {
  return (
    <div style={{width:'100%',height:260}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
            {data.map((entry,idx)=>(<Cell key={idx} fill={COLORS[idx%COLORS.length]} />))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}