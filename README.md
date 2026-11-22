# Aula 04: consumidor de data e hora

Frontend React + Vite que consulta a API Express `GET /api/datetime` e mostra data, hora, fuso, carregamento e erros.

## Executar

```bash
npm install
npm run dev
```

Por padrão, a API local é `http://localhost:3000`. Para outra URL, crie `.env.local` com:

```env
VITE_API_URL=https://SUA-API.onrender.com
```

Não inclua barra final na URL. Faça deploy do frontend na Vercel e configure `VITE_API_URL` nas variáveis do projeto. Ainda é necessário publicar a API no Render e informar a URL real; não há URL ou print simulado.
