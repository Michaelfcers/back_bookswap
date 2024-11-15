require('dotenv').config();
const express = require('express');

// Imprimir variables de entorno para verificar
console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Key:', process.env.SUPABASE_KEY ? 'Cargada correctamente' : 'No cargada');
console.log('Puerto:', process.env.PORT);

const app = express(); // Inicializa la aplicación de Express

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('¡Backend funcionando!');
});

// Configura el puerto y escucha las solicitudes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
