<h1 align="center">
  Instalasi dan Konfigurasi Samba
</h1>

<br>

## 1. The software sources

Debian GNU/Linux menggunakan metodologi repository untuk mendistribusikan aplikasi. Metodologi ini memungkinkan sentralisasi perangkat lunak dan penggunaan antarmuka yang sederhana untuk mengelola dan memperbarui sistem. Dengan cara ini, pengguna tidak perlu mengunjungi situs-situs perangkat lunak secara langsung untuk mengunduh atau memperbarui aplikasi. Repository menyediakan cara yang terorganisir dan efisien untuk mengakses dan mengelola paket-paket perangkat lunak.

### 1.1 The sources.list file

File sources.list pada Debian GNU/Linux berisi alamat Internet dari repository yang digunakan untuk mengelola dan memperbarui sistem. File ini dapat ditemukan di /etc/apt/sources.list atau file dengan format /etc/apt/sources.list.d/xxx.list. Untuk mengedit file ini, pengguna dapat menggunakan perintah seperti di bawah ini.

```bash
apt edit-sources
nano /etc/apt/sources.list
```

![image]

Dalam file sources.list, terdapat beberapa komponen penting:

- “deb”: Menunjukkan repository biner (berisi software yang sudah dikompilasi).
- “deb-src”: Menunjukkan repository sumber (berisi kode program yang digunakan untuk mengkompilasi software).
- “http:...” atau “https:...”: Alamat Internet dari server repository.
- “bookworm” atau “bookworm-security”: Cabang (branch) dalam repository.
- “main” atau “non-free-firmware”: Bagian (section) dari repository.

Pertanyaan umum adalah mengapa menggunakan "bookworm" dan bukan "stable". bookworm adalah nama spesifik dari versi sistem yang terinstal, yang menentukan versi tertentu dari setiap paket dalam repository. Sementara itu, stable adalah nama generik untuk versi stabil saat ini. Saat ini, Debian 12 "bookworm" adalah versi stable, tetapi ketika Debian 13 "Trixie" dirilis, "bookworm" akan berubah status menjadi oldstable. Dengan menggunakan nama spesifik versi seperti "bookworm", pengguna dapat mengontrol kapan ingin melakukan pembaruan ke versi berikutnya, berbeda dengan sistem yang memaksakan pembaruan otomatis.

### 1.2

### 1.3

### 1.4

## 2. APT in a terminal

### 2.1

### 2.2

## 3. Software: the simplified package manager

### 3.1

### 3.2

### 3.3

### 3.4

### 3.5

### 3.6

## 4. Discover: the KDE package manager

### 4.1

### 4.2

### 4.3

### 4.4

### 4.5

## 5. Synaptic: the comprehensive package manager

### 5.1

### 5.2

### 5.3

### 5.4

### 5.5

### 5.6

### 5.7

### 5.8

## 6. Cleaning the system

### 6.1

### 6.2

### 6.3

### 6.4

### 6.5

## 7. Installing external “.deb” packages

### 7.1

### 7.2

## 8. Installing Flatpak applications

### 8.1

### 8.2

### 8.3

### 8.4

### 8.5

### 8.6

## 9. Who is this Sid guy?

Debian memiliki beberapa cabang distribusi yang berjalan secara paralel, masing-masing dengan tujuan dan tingkat stabilitas yang berbeda. Stable distribution adalah versi resmi Debian yang saat ini dirilis. Versi ini hanya menerima pembaruan keamanan dan perbaikan bug, sehingga sangat direkomendasikan untuk penggunaan umum.

Oldstable distribution adalah versi stabil sebelumnya. Biasanya, versi ini didukung selama satu tahun setelah rilis versi baru. Namun, jika ada dukungan dari komunitas atau perusahaan, masa dukungan dapat diperpanjang menjadi LTS (Long Term Support).

Testing distribution adalah versi yang dipersiapkan untuk menjadi stabil di masa depan. Di versi ini, semua fitur dan perbaikan bug diselesaikan sebelum diresmikan sebagai versi stabil baru. Setelah melalui proses pembekuan perangkat lunak dan perburuan bug, versi pengujian ini akan menjadi versi stabil berikutnya.

Unstable distribution, yang dijuluki Sid, adalah versi yang selalu mendapatkan pembaruan paket terbaru dan berada di garis depan inovasi. Meskipun kurang stabil, beberapa pengguna berani menggunakannya sehari-hari untuk mencoba fitur-fitur terbaru.

Experimental distribution bukanlah distribusi resmi Debian, melainkan repositori tempat versi alpha atau beta perangkat lunak diuji. Ini adalah tempat untuk menguji perangkat lunak yang masih dalam tahap pengembangan awal.

Setiap distribusi ini memiliki nama panggilan berdasarkan karakter film Toy Story. Saat ini, versi stabil disebut Bookworm, versi pengujian disebut Trixie, dan versi stabil lama disebut Bullseye. Distribusi eksperimental tidak memiliki nama panggilan khusus.
