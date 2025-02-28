<h1 align="center">
  Chapter 4: Process Control
</h1>

<br>

## Komponen dalam sebuah proses

Sebuah proses dalam sistem operasi terdiri dari dua bagian utama, yaitu **address space** (ruang memori yang digunakan untuk menyimpan kode, data, dan stack program) dan **struktur data kernel** (yang menyimpan informasi seperti status proses, prioritas, dan sumber daya yang digunakan). Proses ini berfungsi sebagai wadah yang mengelola semua sumber daya yang diperlukan untuk menjalankan sebuah program, seperti memori, file yang dibuka, dan atribut lainnya.

### Thread

Thread adalah unit eksekusi yang berjalan di dalam sebuah proses. Sebuah proses dapat memiliki banyak thread, dan semua thread tersebut berbagi ruang memori dan sumber daya yang sama. Thread memungkinkan program untuk melakukan banyak tugas secara paralel, dan karena lebih ringan dibandingkan proses, pembuatan dan penghapusannya lebih efisien.

### PID (Process ID)

Setiap proses memiliki PID (Process ID) yang unik, yaitu nomor identifikasi yang diberikan oleh kernel saat proses dibuat. PID ini digunakan untuk mengidentifikasi proses dalam berbagai operasi sistem, seperti mengirim sinyal atau memantau proses.

### Namespaces

Namespaces adalah fitur yang memungkinkan beberapa proses memiliki PID yang sama tetapi dalam lingkungan yang terisolasi. Ini digunakan dalam teknologi container, di mana setiap container memiliki lingkungannya sendiri yang terpisah, memungkinkan beberapa aplikasi berjalan secara independen di sistem yang sama.

### PPID (Parent Process ID)

PPID (Parent Process ID) adalah PID dari proses induk yang membuat proses tersebut. Setiap proses (kecuali proses utama sistem) memiliki proses induk, dan PPID membantu sistem melacak hubungan hierarkis antara proses.

### UID (User ID) dan EUID (Effective User ID)

- UID (User ID) adalah ID pengguna yang menjalankan proses.
- EUID (Effective User ID) adalah ID yang digunakan oleh proses untuk menentukan izin akses ke sumber daya seperti file, port jaringan, atau operasi sistem lainnya. EUID ini memastikan bahwa proses hanya dapat mengakses sumber daya yang diizinkan.
