const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Servidor Express rodando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
