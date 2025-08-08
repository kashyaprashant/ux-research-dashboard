import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function UserJourneyChart({data}) {
  return (
    <div style={{width:'100%',height:220}}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}