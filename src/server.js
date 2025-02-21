const express = require('express');
const app = express();

// Udostępnia folder public jako statyczne pliki
app.use(express.static(__dirname));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
