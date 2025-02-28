<h1 align="center">
  Chapter 4: Process Control
</h1>

<br>

## Komponen dalam sebuah proses

Proses terdiri dari dua bagian utama, yaitu **address space** dan **Struktur data dalam kernel**.
Address space adalah kumpulan Memory pages yang telah dialokasikan oleh kernel untuk digunakan oleh proses. Memory pages adalah unit dasar dalam manajemen memori, biasanya berukuran `4KiB` atau `8KiB`. Halaman-halaman ini digunakan untuk menyimpan kode program, data, dan stack proses.
Disisi lain, Struktur data dalam kernel digunakan untuk melacak berbagai informasi tentang proses, seperti status proses, prioritas, parameter penjadwalan, dan sebagainya.

Bayangkan sebuah proses sebagai wadah yang berisi berbagai sumber daya yang dikelola oleh kernel atas nama program yang sedang berjalan. Sumber daya ini mencakup **memory pages** untuk kode dan data program, **file descriptor** yaitu referensi ke file yang sudah dibuka, **various attributes** yang menggambarkan keadaan proses.

Kernel menggunakan struktur data internal untuk mencatat berbagai informasi tentang setiap proses, seperti:

- Peta proses address space
- Status proses (running, sleep, dll)
- Prioritas proses
- Sumber daya yang digunakan (CPU, memorym dll)
- File dan port jaringan yang sedang dibuka oleh proses
- Signal mask, yaitu sinyal yang diblokir oleh proses
- Pemilik proses, yaitu UID dari pengguna yang menjalankan proses

Thread adalah unit eksekusi di dalam sebuah proses. Sebuah proses dapat memiliki banyak thread, dan semua thread berbagi address space serta sumber daya lainnya. Thread sering digunakan untuk menjalankan tugas secara paralel dalam sebuah proses. Karena thread lebih ringan daripada proses, thread lebih cepat dibuat dan dihancurkan dibandingkan proses. Oleh karena itu, thread sering disebut sebagai "lightweight process".

Contohnya, misal dalam sebuah web server, proses utama bertugas menerima request dari client. Setiap kali ada koneksi masuk, web server membuat thread baru untuk menangani request tersebut. Proses utama adalah web server itu sendiri. Setiap thread menangani satu request dari client. Karena memiliki banyak thread, web server bisa melayani banyak permintaan sekaligus.

### The PID: process ID number

Setiap proses memiliki nomor identifikasi unik, yang disebut PID (Process ID). PID adalah angka yang diberikan oleh kernel ketika sebuah proses dibuat. PID digunakan dalam berbagai sistem operasi, misalnya mengirim sinyal ke suatu proses, atau melacak proses yang sedang berjalan.

Dalam sistem modern, ada konsep "namespace", yang memungkinkan beberapa proses memiliki PID yang sama di lingkungan yang berbeda. Namespace ini digunakan dalam container, yaitu lingkungan yang terisolasi yang memiliki tampilan sistem sendiri.

### The PPID: parent process ID number

Setiap proses juga memiliki parent process, yaitu proses yang membuatnya. PPID adalah PID dari parent process. PPID sering digunakan untuk mengirim sinyal dari child process ke parant process, atau mengelola hubungan antara proses yang saling terkait.

### The UID and EUID: user ID and effective user ID

Setiap proses memiliki informasi tentang user yang menjalankannya, yaitu UID (User ID) adalah ID user yang memulai proses. Sedangkan EUID (Efective User ID) adalah ID yang digunakan untuk menentukan hak akses proses. EUID sangat penting dalam hak akses file, jaringan, dan sumber daya lainnya. Misalnya, program yang berjalan dengan EUID root bisa mengakses hampir semua sumber daya sistem, meskipun user yang menjalankannya bukan root.
