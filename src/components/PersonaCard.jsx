import React from 'react';
export default function PersonaCard({p}) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-center">
      <img src={p.img} alt={p.name} className="w-20 h-20 rounded-full object-cover" />
      <h3 className="mt-3 font-semibold text-center">{p.name}</h3>
      <div className="text-sm text-gray-500">{p.role} • {p.ageRange}</div>
      <div className="mt-2 text-xs text-gray-600">
        <strong>Motivations:</strong> {p.motivations.join(' • ')}
      </div>
    </div>
  );
}