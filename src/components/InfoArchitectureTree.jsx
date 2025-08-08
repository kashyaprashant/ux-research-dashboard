import React from 'react';
export default function InfoArchitectureTree({root}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Information Architecture</h4>
      <ul className="space-y-2">
        {root.map((node,idx)=>(
          <li key={idx}>
            <div className="font-medium">{node.name}</div>
            <div className="text-sm text-gray-600 ml-4">{node.children.join(' • ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}