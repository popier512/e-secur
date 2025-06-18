import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from "./Home";
import Facture from "./Facture";

function CaptchaPage() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === '2') {
      navigate('/home');
    } else {
      setError('Réponse incorrecte. Essayez encore.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Veuillez répondre à cette question pour continuer :</h2>
        <p>1 + 1 = ?</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)} 
            style={{ padding: '8px', marginRight: '8px' }}
          />
          <button type="submit" style={{ padding: '8px 16px' }}>Valider</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaptchaPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/votre-facture" element={<Facture />} />
      </Routes>
    </Router>
  );
}

export default App;