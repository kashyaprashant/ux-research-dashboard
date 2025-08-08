import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
const COLORS = ['#6366F1', '#EC4899', '#10B981', '#F59E0B'];
export default function GoalsChart({data}) {
  return (
    <div style={{width:'100%',height:260}}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, idx)=><Cell key={idx} fill={COLORS[idx%COLORS.length]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}