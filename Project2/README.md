# Dokumentasi Sistem Manajemen Axon

## 1. Arsitektur Bisnis

### Tujuan Bisnis

- Mengelola dan memantau infrastruktur Axon secara efisien
- Memudahkan tracking dan maintenance Axon
- Meningkatkan efektivitas pengelolaan sumber daya
- Menyediakan informasi real-time tentang status Axon

### Proses Bisnis

1. Manajemen Axon

   - Pencatatan lokasi dan kapasitas Axon
   - Pemantauan status Axon
   - Penjadwalan maintenance
   - Pengelolaan kapasitas

2. Monitoring dan Reporting
   - Pemantauan status real-time
   - Pelaporan performa
   - Analisis penggunaan
   - Notifikasi masalah

## 2. Arsitektur Layanan

### Frontend Service

- Single Page Application dengan React
- Material UI untuk antarmuka pengguna
- Responsive design untuk akses multi-device
- Real-time data updates

### Backend Service

- RESTful API dengan Express.js
- Data validation dan sanitization
- Error handling dan logging
- Authentication dan authorization

### Database Service

- MySQL untuk penyimpanan data
- Data persistence dengan Docker volumes
- Backup dan recovery management
- Data integrity checks

## 3. Arsitektur Aplikasi

### Frontend (React)

- **Teknologi:**

  - React 18
  - Material-UI
  - Axios untuk HTTP requests
  - React Router untuk navigasi

- **Fitur:**
  - Dashboard untuk monitoring
  - CRUD operasi untuk Axon
  - Filtering dan searching
  - Visualisasi data

### Backend (Express.js)

- **Teknologi:**

  - Express.js
  - Sequelize ORM
  - MySQL2 driver
  - CORS middleware

- **Endpoints:**
  - GET /api/axons - List semua Axon
  - GET /api/axons/:id - Detail Axon
  - POST /api/axons - Tambah Axon
  - PUT /api/axons/:id - Update Axon
  - DELETE /api/axons/:id - Hapus Axon

## 4. Arsitektur Infrastruktur

### Docker Container Architecture

1. **Frontend Container**

   - Node.js 18 Alpine base image
   - Port 3000 exposed
   - Hot-reload untuk development
   - Environment variables untuk API

2. **Backend Container**

   - Node.js 18 Alpine base image
   - Port 5000 exposed
   - Connection pooling
   - Auto-restart capability

3. **MySQL Container**
   - MySQL 8.0 image
   - Port 3307 exposed
   - Persistent storage
   - Automatic initialization

### Network Configuration

- Internal Docker network
- Port mapping:
  - Frontend: 3000:3000
  - Backend: 5000:5000
  - MySQL: 3307:3306

### Security Measures

- CORS protection
- Environment variables untuk credentials
- Secure connection strings
- Container isolation

## 5. Deployment

### Prerequisites

- Docker Engine
- Docker Compose
- Git (optional)

### Installation Steps

1. Clone repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Build dan jalankan:

   ```bash
   docker-compose up --build
   ```

3. Akses aplikasi:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Database: localhost:3307

### Maintenance

- Regular backups
- Log monitoring
- Performance optimization
- Security updates
