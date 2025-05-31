import { useState } from 'react';

export default function BrokerageCalculator() {
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [segment, setSegment] = useState('equity');
  const [results, setResults] = useState(null);

  const calculate = () => {
    const brokerage = segment === 'equity' ? Math.min(20, 0.0003 * (buyPrice * quantity + sellPrice * quantity)) : 20;
    const stt = 0.001 * sellPrice * quantity;
    const exchangeTx = 0.0000345 * (buyPrice + sellPrice) * quantity;
    const gst = 0.18 * (brokerage + exchangeTx);
    const sebiCharges = 0.000001 * (buyPrice + sellPrice) * quantity;
    const stampDuty = 0.00015 * buyPrice * quantity;

    const totalCharges = brokerage + stt + exchangeTx + gst + sebiCharges + stampDuty;
    const grossPnL = (sellPrice - buyPrice) * quantity;
    const netPnL = grossPnL - totalCharges;
    const breakevenPrice = (buyPrice * quantity + totalCharges) / quantity;

    setResults({
      brokerage,
      stt,
      exchangeTx,
      gst,
      sebiCharges,
      stampDuty,
      totalCharges,
      grossPnL,
      netPnL,
      breakevenPrice
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', color: '#1e40af' }}>🧮 Brokerage Calculator</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '0.25rem' }}>Buy Price (₹)</label>
            <input
              type="number"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
              value={buyPrice}
              onChange={e => setBuyPrice(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '0.25rem' }}>Sell Price (₹)</label>
            <input
              type="number"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
              value={sellPrice}
              onChange={e => setSellPrice(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '0.25rem' }}>Quantity</label>
            <input
              type="number"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '0.25rem' }}>Segment</label>
            <select
              value={segment}
              onChange={e => setSegment(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
            >
              <option value="equity">Equity</option>
              <option value="futures">Futures</option>
              <option value="options">Options</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculate}
          style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s ease-in-out' }}
          onMouseOver={e => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={e => e.target.style.backgroundColor = '#2563eb'}
        >
          Calculate
        </button>

        {results && (
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div><strong>Brokerage:</strong> ₹{results.brokerage.toFixed(2)}</div>
            <div><strong>STT:</strong> ₹{results.stt.toFixed(2)}</div>
            <div><strong>Exchange Tx:</strong> ₹{results.exchangeTx.toFixed(2)}</div>
            <div><strong>GST:</strong> ₹{results.gst.toFixed(2)}</div>
            <div><strong>SEBI Charges:</strong> ₹{results.sebiCharges.toFixed(2)}</div>
            <div><strong>Stamp Duty:</strong> ₹{results.stampDuty.toFixed(2)}</div>
            <hr />
            <div><strong>Total Charges:</strong> ₹{results.totalCharges.toFixed(2)}</div>
            <div><strong>Gross P&L:</strong> ₹{results.grossPnL.toFixed(2)}</div>
            <div><strong>Net P&L:</strong> ₹{results.netPnL.toFixed(2)}</div>
            <div><strong>Break-even Price:</strong> ₹{results.breakevenPrice.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}