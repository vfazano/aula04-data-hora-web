import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function App() {
  const [dateTime, setDateTime] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  async function loadDateTime() {
    setStatus('loading');
    setError('');
    try {
      const response = await fetch(`${apiUrl}/api/datetime`);
      if (!response.ok) throw new Error(`A API respondeu com HTTP ${response.status}.`);
      setDateTime(await response.json());
      setStatus('ready');
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível acessar a API.');
      setStatus('error');
    }
  }

  useEffect(() => { loadDateTime(); }, []);

  return (
    <main className="page-shell">
      <header className="topline"><span>AULA 04 / HTTP + JSON</span><span className="live-dot">CONEXÃO API</span></header>
      <section className="clock-panel" aria-labelledby="page-title">
        <p className="eyebrow">DADOS DO SERVIDOR</p>
        <h1 id="page-title">Agora,<br /><em>em tempo real.</em></h1>
        <p className="intro">O horário abaixo vem da resposta JSON do endpoint Express.</p>
        <div className="time-display" aria-live="polite">
          {status === 'loading' && <p className="message">Consultando a API...</p>}
          {status === 'error' && <p className="message error">{error}</p>}
          {status === 'ready' && <>
            <p className="date">{dateTime.data}</p>
            <p className="time">{dateTime.hora}</p>
            <p className="zone">FUSO {dateTime.fusoHorario}</p>
          </>}
        </div>
        <button type="button" className="refresh-button" onClick={loadDateTime}>↻ <span>Consultar novamente</span></button>
      </section>
      <footer><span>GET /api/datetime</span><span>{apiUrl}</span></footer>
    </main>
  );
}
