# Dokumentasi Arsitektur Sistem

## 1. Arsitektur Bisnis

### Tujuan Bisnis

- Mengelola data pelanggan secara efisien dan terstruktur
- Memudahkan proses pencarian dan pembaruan data pelanggan
- Meningkatkan efektivitas pelayanan pelanggan
- Menyediakan informasi pelanggan yang akurat dan real-time

### Proses Bisnis

1. Manajemen Data Pelanggan

   - Pencatatan data pelanggan baru
   - Pembaruan informasi pelanggan
   - Penghapusan data pelanggan
   - Pencarian dan filter data pelanggan

2. Monitoring dan Reporting
   - Pemantauan aktivitas pelanggan
   - Pelaporan status pelanggan
   - Analisis data pelanggan
   - Ekspor data untuk keperluan reporting

## 2. Arsitektur Layanan

### Frontend Service

- Single Page Application dengan React
- Material UI untuk antarmuka pengguna yang modern
- Responsive design untuk akses multi-device
- State management untuk data handling
- Form validation dan error handling

### Backend Service

- RESTful API dengan Express.js
- Data validation dan sanitization
- Error handling dan logging
- Business logic separation
- Database abstraction dengan Sequelize ORM

### Database Service

- MySQL untuk penyimpanan data relasional
- Data persistence dengan Docker volumes
- Backup dan recovery management
- Data integrity dan referential integrity
- Connection pooling untuk performa optimal

## 3. Arsitektur Aplikasi

### Frontend (React)

#### Teknologi:

- React 18
- Material-UI v5
- React Router v6
- Axios untuk HTTP requests

#### Komponen Utama:

- CustomerList: Menampilkan daftar pelanggan
- CustomerForm: Form untuk tambah/edit pelanggan
- Navbar: Navigasi aplikasi

#### State Management:

- React Hooks (useState, useEffect)
- Props untuk component communication
- Context API (jika diperlukan)

### Backend (Express.js)

#### Teknologi:

- Express.js
- Sequelize ORM
- MySQL2 driver
- CORS middleware

#### Struktur Aplikasi:

- Models: Definisi model data
- Controllers: Business logic
- Routes: API endpoint definitions
- Config: Konfigurasi database dan aplikasi

#### API Endpoints:

- GET /api/customers - List semua customer
- GET /api/customers/:id - Detail customer
- POST /api/customers - Tambah customer
- PUT /api/customers/:id - Update customer
- DELETE /api/customers/:id - Hapus customer

## 4. Arsitektur Infrastruktur

### Docker Container Architecture

1. Frontend Container

   - Base image: Node.js 18 Alpine
   - Port: 3000
   - Volume: Source code mapping
   - Environment variables:
     - REACT_APP_API_URL
     - NODE_ENV
     - CHOKIDAR_USEPOLLING
     - WATCHPACK_POLLING

2. Backend Container

   - Base image: Node.js 18 Alpine
   - Port: 5000
   - Volume: Source code mapping
   - Environment variables:
     - DB_HOST
     - DB_USER
     - DB_PASSWORD
     - DB_NAME

3. MySQL Container
   - Image: MySQL 8.0
   - Port: 3307
   - Volumes:
     - Data persistence
     - Initialization scripts
   - Environment variables:
     - MYSQL_ROOT_PASSWORD
     - MYSQL_DATABASE

### Network Configuration

- Internal Docker network untuk komunikasi antar container
- Port mapping untuk akses eksternal:
  - Frontend: 3000:3000
  - Backend: 5000:5000
  - MySQL: 3307:3306
