
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GratitudeSection: React.FC = () => {
  const [gratitudes, setGratitudes] = useState<string[]>(["", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newGratitudes = [...gratitudes];
    newGratitudes[index] = value;
    setGratitudes(newGratitudes);
  };

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Heart className="mr-2 h-5 w-5 text-gem-primary" />
          3 Cosas por las que estoy agradecido hoy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`gratitude-${index}`}>{index + 1}.</Label>
            <Input
              id={`gratitude-${index}`}
              value={gratitudes[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Estoy agradecido por..."
              className="border-gem-primary/30 focus-visible:ring-gem-primary"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GratitudeSection;
