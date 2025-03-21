
import React from 'react';
import DailyMotivation from './DailyMotivation';
import SubscriptionTracker from './SubscriptionTracker';
import RewardProgress from './RewardProgress';
import GratitudeSection from './GratitudeSection';
import GoalsSection from './GoalsSection';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {/* Mensaje del día - Ancho completo */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <DailyMotivation />
      </div>
      
      {/* Gratitude Section - 50% en pantallas medianas y grandes */}
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <GratitudeSection />
      </div>
      
      {/* Goals Section - 50% en pantallas medianas y grandes */}
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <GoalsSection />
      </div>
      
      {/* Reward Progress - Ancho completo en pantallas grandes */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <RewardProgress />
      </div>
      
      {/* Subscription Tracker - Ancho completo */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <SubscriptionTracker />
      </div>
    </div>
  );
};

export default Dashboard;
