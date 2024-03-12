const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5500;


// Указываем директорию для сохранения файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Папка, куда сохраняем файл
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Оригинальное имя файла
  }
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});


// Обрабатываем загрузку изображений
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  res.send('File uploaded!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
