
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Moon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { useIsMobile } from '@/hooks/use-mobile';

const LUNAR_CYCLE = 29.53; // Average lunar cycle in days

// Accurate moon phase calculation
const getMoonPhase = (date: Date): number => {
  const newMoon = new Date('2000-01-06').getTime(); // Known new moon date
  const elapsed = date.getTime() - newMoon;
  const days = elapsed / (1000 * 60 * 60 * 24);
  return (days % LUNAR_CYCLE) / LUNAR_CYCLE;
};

// Get moon phase name
const getMoonPhaseName = (phase: number): string => {
  if (phase < 0.025 || phase >= 0.975) return "Luna nueva";
  if (phase < 0.25) return "Luna creciente";
  if (phase < 0.275) return "Cuarto creciente";
  if (phase < 0.475) return "Luna gibosa creciente";
  if (phase < 0.525) return "Luna llena";
  if (phase < 0.725) return "Luna gibosa menguante";
  if (phase < 0.775) return "Cuarto menguante";
  return "Luna menguante";
};

// Get moon phase icon
const getMoonPhaseIcon = (phase: number): string => {
  if (phase < 0.025 || phase >= 0.975) return "🌑";
  if (phase < 0.25) return "🌒";
  if (phase < 0.5) return "🌓";
  if (phase < 0.525) return "🌕";
  if (phase < 0.75) return "🌖";
  return "🌘";
};

// Get specific details about each moon phase
const getMoonPhaseDetails = (phaseName: string): string => {
  const details: { [key: string]: string } = {
    "Luna nueva": "Tiempo de nuevos inicios y establecer intenciones. Ideal para empezar proyectos.",
    "Luna creciente": "Fase de construcción y crecimiento. Momento para tomar acción y avanzar.",
    "Cuarto creciente": "Momento de decisión y compromiso. Supera obstáculos con determinación.",
    "Luna gibosa creciente": "Refinamiento y ajuste. Evalúa tu progreso y realiza ajustes necesarios.",
    "Luna llena": "Culminación y claridad. Momento de celebración y manifestación plena.",
    "Luna gibosa menguante": "Gratitud y abundancia. Agradece los logros y comparte con otros.",
    "Cuarto menguante": "Liberación y perdón. Deja ir lo que ya no te sirve.",
    "Luna menguante": "Descanso y reflexión. Prepárate para un nuevo ciclo.",
  };
  return details[phaseName] || "";
};

const LunarCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const moonPhase = getMoonPhase(date);
  const phaseName = getMoonPhaseName(moonPhase);
  const phaseIcon = getMoonPhaseIcon(moonPhase);
  const phaseDetails = getMoonPhaseDetails(phaseName);
  const isMobile = useIsMobile();
  
  // Generate phases for visualization
  const phasePercentage = Math.round(moonPhase * 100);

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Moon className="mr-2 h-5 w-5 text-gem-primary" />
          Calendario Lunar
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col items-center justify-center p-3">
          <div className="text-4xl mb-2 animate-float">{phaseIcon}</div>
          <p className="text-sm font-medium text-center">{phaseName}</p>
          <p className="text-xs text-muted-foreground text-center mt-1">{phaseDetails}</p>
          
          <div className="w-full mt-4 bg-secondary/30 rounded-full h-2.5">
            <div 
              className="bg-gem-primary h-2.5 rounded-full animate-pulse-subtle" 
              style={{ width: `${phasePercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {phasePercentage}% del ciclo lunar
          </p>
        </div>
        
        <div className="border-t pt-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => newDate && setDate(newDate)}
            className="max-w-full rounded-md border p-0 sm:p-3 pointer-events-auto overflow-x-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LunarCalendar;
