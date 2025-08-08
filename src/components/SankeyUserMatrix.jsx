import React from 'react';
import { ResponsiveContainer, Sankey, Tooltip } from 'recharts';
export default function SankeyUserMatrix({links}) {
  const nodeNames = Array.from(new Set(links.flatMap(l=>[l.source,l.target])));
  const nodes = nodeNames.map(name => ({ name }));
  const formattedLinks = links.map(l => ({
    source: nodeNames.indexOf(l.source),
    target: nodeNames.indexOf(l.target),
    value: l.value
  }));
  return (
    <div style={{width:'100%',height:260}}>
      <ResponsiveContainer>
        <Sankey data={{nodes,links:formattedLinks}} nodePadding={20}>
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
}