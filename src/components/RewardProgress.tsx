
import React from 'react';
import { Gift, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock subscription data - shared with SubscriptionTracker
const subscriptions = [
  { id: 1, status: 'active', date: '2023-11-25', nextRenewal: '2023-12-25' },
  { id: 2, status: 'active', date: '2023-12-25', nextRenewal: '2024-01-25' },
  { id: 3, status: 'active', date: '2024-01-25', nextRenewal: '2024-02-25' },
  { id: 4, status: 'active', date: '2024-02-25', nextRenewal: '2024-03-25' },
  { id: 5, status: 'pending', date: '2024-03-25', nextRenewal: '2024-04-25' },
  { id: 6, status: 'pending', date: '2024-04-25', nextRenewal: '2024-05-25' },
];

const RewardProgress: React.FC = () => {
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const targetSubscriptions = 6;
  const progressPercentage = (activeSubscriptions / targetSubscriptions) * 100;
  const remainingSubscriptions = targetSubscriptions - activeSubscriptions;
  
  // Check if reward is unlocked
  const rewardUnlocked = activeSubscriptions >= targetSubscriptions;

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <Trophy className="mr-2 h-5 w-5 text-gem-primary" />
          Progreso de Recompensa
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col items-center text-center">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 ${
            rewardUnlocked 
              ? 'bg-gem-primary/20 animate-pulse-subtle' 
              : 'bg-muted/20'
          }`}>
            <Gift 
              className={`h-12 w-12 ${
                rewardUnlocked 
                  ? 'text-gem-primary animate-float' 
                  : 'text-muted-foreground'
              }`} 
            />
          </div>
          
          <h3 className="text-lg font-semibold mb-1">
            Buddha con 7 Chakras
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            {rewardUnlocked 
              ? '¡Felicidades! Has desbloqueado tu recompensa.' 
              : `Completa ${remainingSubscriptions} suscripciones más para desbloquear.`
            }
          </p>
          
          <div className="w-full bg-secondary/30 rounded-full h-4 mb-2">
            <div 
              className={`h-4 rounded-full ${rewardUnlocked ? 'bg-gem-primary animate-pulse-subtle' : 'bg-gem-primary/60'}`} 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <p className="text-sm font-medium">
            {activeSubscriptions} de {targetSubscriptions} suscripciones consecutivas
          </p>
        </div>
        
        {rewardUnlocked && (
          <div className="mt-2 p-3 rounded-lg border border-gem-primary/30 bg-gem-primary/5">
            <p className="text-sm font-medium">¡Tu recompensa está lista!</p>
            <p className="text-xs text-muted-foreground mt-1">Contacta con servicio al cliente para coordinar la entrega de tu Buddha con 7 Chakras.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RewardProgress;
