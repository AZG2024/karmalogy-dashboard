
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Diamond } from 'lucide-react';

// Data for gemstones and their properties with updated softer colors
const gemstones = [
  {
    name: "Amatista",
    color: "#D6BCFA", // Softer purple
    properties: "Calma, protección, claridad mental",
    description: "La amatista promueve la paz interior y ayuda a equilibrar las emociones."
  },
  {
    name: "Cuarzo Rosa",
    color: "#FED7E2", // Soft pink
    properties: "Amor, compasión, sanación",
    description: "El cuarzo rosa abre el corazón a todas las formas de amor y promueve la paz."
  },
  {
    name: "Jade",
    color: "#C6F6D5", // Soft mint green
    properties: "Armonía, equilibrio, suerte",
    description: "El jade atrae la buena fortuna y ayuda a mantener un espíritu sereno."
  },
  {
    name: "Lapislázuli",
    color: "#BEE3F8", // Soft blue
    properties: "Sabiduría, intuición, verdad",
    description: "El lapislázuli despierta el deseo de conocimiento y verdad interior."
  },
  {
    name: "Citrino",
    color: "#FEEBC8", // Soft yellow
    properties: "Abundancia, creatividad, energía",
    description: "El citrino atrae prosperidad y estimula la creatividad y motivación."
  }
];

const GemstoneInfo: React.FC = () => {
  const [currentGemIndex, setCurrentGemIndex] = useState(0);
  const currentGem = gemstones[currentGemIndex];

  const nextGem = () => {
    setCurrentGemIndex((prev) => (prev + 1) % gemstones.length);
  };

  const prevGem = () => {
    setCurrentGemIndex((prev) => (prev - 1 + gemstones.length) % gemstones.length);
  };

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Diamond className="mr-2 h-5 w-5 text-purple-400" />
          Piedra del Día
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col items-center justify-center p-3">
          <div 
            className="w-16 h-16 rounded-full mb-3 animate-pulse-subtle shadow-md"
            style={{ backgroundColor: currentGem.color }}
          />
          <h3 className="text-lg font-semibold text-center text-purple-700">{currentGem.name}</h3>
          <p className="text-sm font-medium text-center mt-1 text-pink-600">{currentGem.properties}</p>
          <p className="text-xs text-blue-600 text-center mt-2">{currentGem.description}</p>
        </div>
        
        <div className="flex justify-between mt-2">
          <button 
            onClick={prevGem}
            className="text-xs px-3 py-1 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors"
          >
            Anterior
          </button>
          <button 
            onClick={nextGem}
            className="text-xs px-3 py-1 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors"
          >
            Siguiente
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GemstoneInfo;
