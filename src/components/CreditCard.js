import React from 'react';

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props; // src/assets/images/visa.png
  const cardType = type === 'Visa' ? './visa.png' : './master-card.svg';
  const lastFourDigits = number.slice(-4);
  const cardNumber = `**** **** **** ${lastFourDigits}`;
  const expirationDate = `${expirationMonth.toString().padStart(2, '0')}/${expirationYear.toString().slice(-2)}`;

  return (
    <div style={{ backgroundColor: bgColor, color: color, padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <img src={cardType} alt={type} style={{ height: '30px', marginBottom: '20px' }} />
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        {cardNumber}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
        <div style={{ fontSize: '16px' }}>
          Expires {expirationDate}
        </div>
        <div style={{ fontSize: '16px' }}>
          {bank}
        </div>
      </div>
      <div style={{ fontSize: '16px' }}>
        {owner}
      </div>
    </div>
  );
}

export default CreditCard;