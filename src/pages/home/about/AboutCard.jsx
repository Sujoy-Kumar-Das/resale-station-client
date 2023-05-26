import { Card } from "flowbite-react";
import React from "react";

const AboutCard = ({teamMember}) => {
  return (
    
      <Card>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={teamMember.image}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {teamMember.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {teamMember.post}
          </span>
          
        </div>
      </Card>
    
  );
};

export default AboutCard;
