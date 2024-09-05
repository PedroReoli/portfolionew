import React from 'react';
import { Skill } from '@/constants';

interface TooltipProps {
  skill: Skill;
  itemIndex: number;
  isCourse: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ skill, itemIndex, isCourse }) => {
  const item = isCourse ? skill.courses[itemIndex] : skill.certificates[itemIndex];
  // const duration = skill.courseDurations[itemIndex];
  const institution = skill.institutions[itemIndex];
  // const professors = skill.professors[itemIndex].join(', ');
  // const level = skill.courseLevels[itemIndex];
  const completionDate = !isCourse ? skill.completionDates[itemIndex] : undefined;

  return (
    <div className="absolute z-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-opacity duration-300 ease-in-out tooltip-box">
      <h4 className="font-bold text-lg mb-2 text-blue-400">{item}</h4>
      {/* <p className="text-sm"><strong>Duração:</strong> {duration}</p> */}
      <p className="text-sm"><strong>Instituição:</strong> {institution}</p>
      {/* <p className="text-sm"><strong>Professor(es):</strong> {professors}</p> */}
      {/* <p className="text-sm"><strong>Nível:</strong> {level}</p> */}
      {completionDate && <p className="text-sm"><strong>Data de Conclusão:</strong> {completionDate}</p>}
    </div>
  );
};

export default Tooltip;
