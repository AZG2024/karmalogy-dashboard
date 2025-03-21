
import React, { useState } from 'react';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GoalsSection: React.FC = () => {
  const [goals, setGoals] = useState<string[]>(["", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Target className="mr-2 h-5 w-5 text-gem-primary" />
          3 Objetivos que cumpliré hoy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`goal-${index}`}>{index + 1}.</Label>
            <Input
              id={`goal-${index}`}
              value={goals[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Mi objetivo es..."
              className="border-gem-primary/30 focus-visible:ring-gem-primary"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GoalsSection;
