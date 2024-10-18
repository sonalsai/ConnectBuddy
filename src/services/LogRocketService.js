import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

const initLogRocket = () => {
  LogRocket.init(import.meta.env.VITE_LOGROCKET_ID); 
  setupLogRocketReact(LogRocket);
};

const identifyUser = (userId, userDetails) => {
  LogRocket.identify(userId, userDetails);
};

export default {
  initLogRocket,
  identifyUser,
};
