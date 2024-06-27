import React, { useState } from 'react';
import './App.css';
import Tarif from './components/Tarif';
import TarifDetails from './components/TarifDetails';

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tarifs = [
    { name: "Безлимит 300", price: '300', speed: 'До 10 Мбит/сек' },
    { name: "Безлимит 450", price: '450', speed: 'До 50 Мбит/сек' },
    { name: "Безлимит 500", price: '500', speed: 'До 100 Мбит/сек' },
    { name: "Безлимит 1000", price: '1000', speed: 'До 200 Мбит/сек' }
  ];

  const handleDetailsClick = (tarif) => {
    setSelectedTariff(tarif);
  };

  const handleBackClick = () => {
    setSelectedTariff(null);
  };

  return (
    <div className='App'>
      <div className='tarifs'>
        {tarifs.map((tarif, index) => (
          <Tarif
            key={index}
            {...tarif}
            highlight={tarif.price === '500'} 
            onDetailsClick={() => handleDetailsClick(tarif)}
          />
        ))}
      </div>
      {selectedTariff && (
        <TarifDetails tarif={selectedTariff} onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default App;
