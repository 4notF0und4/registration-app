const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');

const app = express();

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/registration-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Statik faylları təqdim etmək üçün middleware
app.use(express.static(path.join(__dirname, 'views')));

// Auth routeları
app.use('/auth', authRoutes);

// Serveri başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işləyir`);
});
