
import React from 'react';
import { Clock, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Mock subscription data
const subscriptions = [
  { id: 1, status: 'active', date: '2023-11-25', nextRenewal: '2023-12-25' },
  { id: 2, status: 'active', date: '2023-12-25', nextRenewal: '2024-01-25' },
  { id: 3, status: 'active', date: '2024-01-25', nextRenewal: '2024-02-25' },
  { id: 4, status: 'active', date: '2024-02-25', nextRenewal: '2024-03-25' },
  { id: 5, status: 'pending', date: '2024-03-25', nextRenewal: '2024-04-25' },
  { id: 6, status: 'pending', date: '2024-04-25', nextRenewal: '2024-05-25' },
];

// Calculate days remaining to next renewal
const daysToNextRenewal = (nextRenewal: string): number => {
  const today = new Date();
  const renewal = new Date(nextRenewal);
  const timeDiff = renewal.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
};

const SubscriptionTracker: React.FC = () => {
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const totalSubscriptions = subscriptions.length;
  const percentComplete = (activeSubscriptions / totalSubscriptions) * 100;
  
  // Get the next pending subscription
  const nextSubscription = subscriptions.find(sub => sub.status === 'pending');
  const daysRemaining = nextSubscription ? daysToNextRenewal(nextSubscription.nextRenewal) : 0;

  return (
    <Card className="overflow-hidden border border-border/40 glass-card hover-lift">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          <CreditCard className="mr-2 h-5 w-5 text-gem-primary" />
          Seguimiento de Suscripciones
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-medium">{activeSubscriptions} de {totalSubscriptions}</span>
          </div>
          <Progress value={percentComplete} className="h-2 w-full" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {subscriptions.map((subscription, index) => (
            <div 
              key={subscription.id} 
              className={`flex items-center p-3 rounded-lg border ${
                subscription.status === 'active' 
                  ? 'border-gem-primary/30 bg-gem-primary/5'
                  : 'border-muted bg-muted/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                subscription.status === 'active'
                  ? 'bg-gem-primary text-white'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  subscription.status === 'active' ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {subscription.status === 'active' ? 'Suscripción Activa' : 'Suscripción Pendiente'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {subscription.status === 'active' 
                    ? `Renovación: ${formatDate(subscription.nextRenewal)}`
                    : `Fecha prevista: ${formatDate(subscription.date)}`
                  }
                </p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                subscription.status === 'active' ? 'bg-green-500' : 'bg-muted'
              }`}></div>
            </div>
          ))}
        </div>

        {nextSubscription && (
          <div className="bg-muted/20 rounded-lg p-3 flex items-center">
            <Clock className="h-5 w-5 text-muted-foreground mr-2" />
            <div>
              <p className="text-sm">Próxima suscripción en {daysRemaining} días</p>
              <p className="text-xs text-muted-foreground">
                {formatDate(nextSubscription.nextRenewal)}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionTracker;
