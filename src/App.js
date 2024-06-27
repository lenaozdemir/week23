import './App.css';
import Tariff from './components/Tarif';


function App() {
  const tarifs = [
    {name: "Безлимит 300", price: '300', speed: 'До 10 Мбит/сек', background: 'blue'},
    {name: "Безлимит 450", price: '450', speed: 'До 50 Мбит/сек', background: 'green'},
    {name: "Безлимит 500", price: '500', speed: 'До 100 Мбит/сек', background: 'red'},
    {name: "Безлимит 1000", price: '1000', speed: 'До 200 Мбит/сек', background: 'black'}
  ];

  return (
    <div className='tarifs'>
      {tarifs.map((tarif, index) => (
        <Tariff 
        key={index}
        name={tarif.name}
        price={tarif.price}
        speed={tarif.speed}
        background={tarif.background}
        highlight={tarif.price === '500'}
        />
      ))}
    </div>
  );
}

export default App;
