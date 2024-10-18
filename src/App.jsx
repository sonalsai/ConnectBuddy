import './App.css';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import LogRocketService from './services/LogRocketService';

const App = () => {
  useEffect(() => {
    LogRocketService.initLogRocket();

    LogRocketService.identifyUser('001', {
      name: 'Sonal Sai',
      email: 'sonalsai8593@gmail.com',
      subscriptionType: 'pro',
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
