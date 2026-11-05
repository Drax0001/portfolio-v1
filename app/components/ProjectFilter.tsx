"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  technologies: string[];
  selectedTechnologies: string[];
  onFilterChange: (technologies: string[]) => void;
}

export default function ProjectFilter({
  technologies,
  selectedTechnologies,
  onFilterChange,
}: ProjectFilterProps) {
  const handleTechnologyClick = (technology: string) => {
    if (selectedTechnologies.includes(technology)) {
      // Remove technology from selected
      onFilterChange(
        selectedTechnologies.filter((tech) => tech !== technology)
      );
    } else {
      // Add technology to selected
      onFilterChange([...selectedTechnologies, technology]);
    }
  };

  const handleClearAll = () => {
    onFilterChange([]);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-lg font-inter font-semibold text-white">
          Filter by technology
        </h3>
        {selectedTechnologies.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => {
          const isSelected = selectedTechnologies.includes(technology);

          return (
            <motion.button
              key={technology}
              onClick={() => handleTechnologyClick(technology)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-satoshi font-medium
                transition-all duration-200
                ${
                  isSelected
                    ? "bg-reddish text-white shadow-lg"
                    : "bg-black-high-opacity text-gray-300 hover:bg-gray-600 hover:text-white"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {technology}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
