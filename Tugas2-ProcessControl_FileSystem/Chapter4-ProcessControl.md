<h1 align="center">
  Chapter 4: Process Control
</h1>

<br>

## Komponen dalam sebuah proses

Sebuah process terdiri dari address space dan struktur data dalam kernel. Address space adalah kumpulan halaman memori yang ditandai oleh kernel untuk digunakan oleh process. Halaman ini digunakan untuk menyimpan code, data, dan stack dari process. Kernel juga menyimpan berbagai informasi tentang process dalam struktur data internalnya, seperti status process, priority, scheduling parameters, dan resources yang digunakan. Resources yang dikelola kernel untuk sebuah process meliputi Halaman memori yang menyimpan code dan data program, File descriptors untuk file yang terbuka, dan Attributes yang menggambarkan keadaan process.

Kernel mencatat beberapa informasi penting tentang process, termasuk:

- Address space map dari process
- Current status process (running, sleeping, dll.)
- Priority process
- Resource usage (CPU, memory, dll.)
- Files dan network ports yang dibuka
- Signal mask (signals yang diblokir)
- Process owner (user ID yang menjalankan process)

Thread adalah execution context dalam process. Sebuah process bisa memiliki banyak thread yang berbagi address space dan resources yang sama. Thread lebih ringan daripada process karena lebih cepat dibuat dan dihancurkan.

Contohnya dalam web server, process utama mendengarkan koneksi masuk dan membuat thread baru untuk menangani setiap request. Setiap thread menangani satu request, tetapi web server dapat menangani banyak request sekaligus karena memiliki banyak thread. Di sini, web server adalah process, sementara tiap request diproses oleh thread terpisah dalam process tersebut.

### The PID: process ID number

Setiap process memiliki PID unik yang diberikan oleh kernel saat process dibuat. PID digunakan dalam system calls, seperti mengirim signals ke process.

Dalam sistem modern, ada konsep "namespace", yang memungkinkan beberapa process memiliki PID yang sama dalam lingkungan terisolasi seperti containers, yang digunakan untuk menjalankan beberapa instance aplikasi secara independen.

### The PPID: parent process ID number

Setiap process memiliki parent process yang membuatnya. PPID adalah PID dari parent process dan digunakan dalam system calls, misalnya untuk mengirim signals ke parent.

### The UID and EUID: user ID and effective user ID

- UID adalah user ID dari pengguna yang memulai process.
- EUID menentukan hak akses process terhadap files, network ports, dan resources lainnya.

## Siklus hidup sebuah proses

### Signals

### kill: mengirim sinyal

## PS: proses pemantauan

## Pemantauan interaktif dengan top

## Nice and renice: mengubah prioritas dari sebuah proses

## The /proc filesystem

## Strace and truss

## Runaway processes

## Periodic processes

### cron: schedule command

### format of crontab

### Systemd timer

### Common use for scheduled tasks
