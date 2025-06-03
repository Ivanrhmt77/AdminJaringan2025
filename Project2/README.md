# Customer Management System

Sistem manajemen data pelanggan yang dibangun menggunakan teknologi modern dan dideploy menggunakan Docker.

## Deskripsi Proyek

Customer Management System adalah aplikasi web yang memungkinkan pengguna untuk mengelola data pelanggan dengan fitur CRUD (Create, Read, Update, Delete). Aplikasi ini dibangun dengan arsitektur microservices dan menggunakan Docker untuk deployment.

## Teknologi yang Digunakan

### Frontend

- React.js
- Material-UI (MUI)
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- Sequelize ORM

### Database

- MySQL 8.0

### Infrastructure

- Docker
- Docker Compose

## Fitur Utama

1. Menampilkan daftar pelanggan
2. Menambah data pelanggan baru
3. Mengubah data pelanggan
4. Menghapus data pelanggan
5. Pencarian dan filter data pelanggan

## Cara Menjalankan Aplikasi

### Prasyarat

- Docker dan Docker Compose terinstall
- Git (optional)

### Langkah-langkah

1. Clone repository (jika menggunakan Git)

   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Jalankan aplikasi menggunakan Docker Compose

   ```bash
   docker compose up -d
   ```

3. Akses aplikasi
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MySQL Database: localhost:3307

### Menghentikan Aplikasi

```bash
docker compose down
```

## Struktur Proyek

```
.
├── frontend/                 # React frontend application
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── backend/                  # Node.js backend application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   └── package.json
├── database/                # Database initialization scripts
│   └── axon/
├── docker-compose.yml       # Docker compose configuration
└── README.md
```

## API Endpoints

### Customers

- GET `/api/customers` - Mendapatkan semua data customer
- GET `/api/customers/:id` - Mendapatkan data customer berdasarkan ID
- POST `/api/customers` - Membuat customer baru
- PUT `/api/customers/:id` - Mengupdate data customer
- DELETE `/api/customers/:id` - Menghapus data customer

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.
