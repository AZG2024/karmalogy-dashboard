
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const motivationalQuotes = [
  "Las piedras preciosas son como tú: únicas y valiosas en su manera especial.",
  "Tu energía está alineada con las estrellas hoy. Brilla con todo tu esplendor.",
  "Como el diamante, tu verdadero valor se revela bajo presión.",
  "Las piedras tienen memoria. Tus acciones de hoy forman tu destino de mañana.",
  "Tu camino está iluminado por las mismas estrellas que guiaron a los antiguos.",
  "La transformación más hermosa ocurre en la oscuridad, como el nacimiento de una gema.",
  "Tu energía es magnética hoy. Atrae lo que deseas con la fuerza de un cristal.",
  "Como la luna, tienes fases. Todas son necesarias y hermosas.",
  "La paciencia es la virtud que transforma el carbón en diamante.",
  "Tu luz interior es más brillante que cualquier piedra preciosa.",
];

const DailyMotivation: React.FC = () => {
  // Get a deterministic quote based on the day of the year
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const quoteIndex = dayOfYear % motivationalQuotes.length;
  const todaysQuote = motivationalQuotes[quoteIndex];

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Sparkles className="mr-2 h-5 w-5 text-gem-primary" />
          Mensaje del día
        </CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="border-l-2 border-gem-primary pl-4 italic text-muted-foreground">
          "{todaysQuote}"
        </blockquote>
        <div className="mt-2 text-right text-sm text-muted-foreground">
          {today.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyMotivation;
