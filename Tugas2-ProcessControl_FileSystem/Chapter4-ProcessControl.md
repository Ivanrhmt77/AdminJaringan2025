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

## Lifecycle suatu proses

Untuk membuat proses baru, sebuah proses menggunakan system call fork untuk menyalin dirinya sendiri. fork menghasilkan proses anak yang identik dengan proses induk, tetapi memiliki PID yang berbeda. Pada Linux, fork sebenarnya memanggil clone, yang lebih canggih dan mendukung thread. Saat sistem boot, kernel membuat beberapa proses secara otomatis, termasuk init atau systemd (PID 1), yang bertanggung jawab menjalankan skrip startup. Semua proses lain adalah turunan dari proses utama ini.

### Signals

Signals adalah notifikasi yang dikirim ke proses untuk memberi tahu terjadinya suatu peristiwa. Ada sekitar 30 jenis signal, digunakan untuk berbagai tujuan seperti komunikasi antar proses, menghentikan proses, atau memberi tahu kondisi tertentu.

![Signals](https://liujunming.top/images/2018/12/71.png)

Beberapa signal penting termasuk:

- **KILL**: Menghentikan proses secara paksa (tidak bisa diabaikan).
- **INT**: Dikirim saat <Control-C> ditekan, meminta proses berhenti.
- **TERM**: Meminta proses berhenti dengan bersih.
- **HUP**: Biasanya digunakan untuk meminta daemon restart.
- **QUIT**: Mirip TERM, tetapi menghasilkan core dump jika tidak ditangani.

### `kill`: mengirim signals

Perintah kill digunakan untuk mengirim signal ke proses. Secara default, kill mengirimkan signal TERM. Sintaksnya adalah:

```bash
kill [-signal] pid
```

- `[-signal]`(opsional) adalah sinyal yang ingin dikirim ke proses. Sinyal dapat ditulis dalam bentuk angka(misalnya, `-9` untuk KILL) atau nama sinyal(misalnya, `-TERM`). Jika tidak ada sinyal yang ditentukan, secara default `kill` mengirimkan sinyal TERM (terminate), yang meminta proses untuk berhenti dengan bersih.
- `pid` adalah Proses ID(PID) dari proses yang menjadi target. PID dapat ditemukan menggunakan perintah seperti `ps`, `top`, atau `htop`.

`killall` dan `pkill` adalah alternatif untuk menghentikan proses berdasarkan nama atau pengguna.

```bash
killall firefox  # Menghentikan semua proses Firefox
pkill -u abdoufermat  # Menghentikan semua proses milik pengguna abdoufermat
```
