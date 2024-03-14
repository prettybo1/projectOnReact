import { useState } from 'react'
import './Pre-Header.css';

const PreHeader = () => {
  const [showHours, setShowHours] = useState(false);

  return (
    <div className="pre-header">
      <ul>
        <li>Каталог</li>
        <li>Контактна інформація</li>
        <li>Оплата і доставка</li>
        <li>Про нас</li>
      </ul>
      <div className='phone' 
          onMouseEnter={() => setShowHours(true)}
          onMouseLeave={() => setShowHours(false)}
        >
          +380637130623
          {showHours && (
            <span className="hours">Режим роботи: 9:00 - 18:00</span>
          )}
        </div>
    </div>
  );
};

export default PreHeader;
