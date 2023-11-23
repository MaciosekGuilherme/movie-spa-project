import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Home } from './src/Pages/Home/Home';


function App() {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: 'G-ZPHDLTHG7E',
      },
    ]);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  const trackButtonClick = () => {
    ReactGA.event({
      category: 'Botão',
      action: 'Clique',
      label: 'Botão na Página Inicial',
    });
  };

  return (
    <React.StrictMode>
      <Home onButtonClick={trackButtonClick} />
    </React.StrictMode>
  );
}

export default App;
