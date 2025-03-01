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

## PS: memantau proses

Perintah ps adalah alat utama administrator sistem untuk memantau proses. Meskipun versi ps berbeda dalam argumen dan tampilannya, semua memberikan informasi yang serupa. ps dapat menampilkan PID, UID, prioritas, terminal kontrol, penggunaan memori, konsumsi CPU, dan status proses (seperti running, stopped, atau sleeping).

Untuk mendapatkan gambaran umum sistem, jalankan ps aux. Opsi a menampilkan proses semua pengguna, u memberikan informasi detail, dan x menampilkan proses yang tidak terhubung ke terminal. Contoh:

```bash
$ ps aux | head -8
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0  22556  2584 ?        Ss   2019   0:02 /sbin/init
root         2  0.0  0.0      0     0 ?        S    2019   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        I<   2019   0:00 [rcu_gp]
root         4  0.0  0.0      0     0 ?        I<   2019   0:00 [rcu_par_gp]
root         6  0.0  0.0      0     0 ?        I<   2019   0:00 [kworker/0:0H-kblockd]
root         8  0.0  0.0      0     0 ?        I<   2019   0:00 [mm_percpu_wq]
root         9  0.0  0.0      0     0 ?        S    2019   0:00 [ksoftirqd/0]
```

![process-explanation](./image/process-explanation.png)

Opsi lain yang berguna adalah lax, yang memberikan informasi teknis lebih rinci tentang proses. lax lebih cepat daripada aux karena tidak perlu mengurai nama pengguna dan grup. Contoh:

```bash
$ ps lax | head -8
F   UID   PID  PPID PRI  NI    VSZ   RSS WCHAN  STAT TTY        TIME COMMAND
4     0     1     0  20   0  22556  2584 -      Ss   ?          0:02 /sbin/init
1     0     2     0  20   0      0     0 -      S    ?          0:00 [kthreadd]
1     0     3     2  20   0      0     0 -      I<   ?          0:00 [rcu_gp]
1     0     4     2  20   0      0     0 -      I<   ?          0:00 [rcu_par_gp]
1     0     6     2  20   0      0     0 -      I<   ?          0:00 [kworker/0:0H-kblockd]
1     0     8     2  20   0      0     0 -      I<   ?          0:00 [mm_percpu_wq]
1     0     9     2  20   0      0     0 -      S    ?          0:00 [ksoftirqd/0]
```

Untuk mencari proses tertentu, gunakan grep untuk menyaring output ps. Contoh:

```bash
$ ps aux | grep -v grep | grep firefox
```

Untuk menentukan PID suatu proses, gunakan pgrep atau pidof. Contoh:

```bash
$ pgrep firefox
$ pidof /usr/bin/firefox
```

## Pemantauan Interaktif menggunakan top

Perintah top memberikan tampilan real-time yang dinamis dari sistem yang sedang berjalan. top menampilkan informasi ringkasan sistem serta daftar proses atau thread yang sedang dikelola oleh kernel Linux. Informasi yang ditampilkan, seperti jenis, urutan, dan ukuran data, dapat dikonfigurasi oleh pengguna dan disimpan agar tetap berlaku setelah restart. Secara default, tampilan top diperbarui setiap 1-2 detik, tergantung pada sistem.

Ada juga perintah htop, yang merupakan alat pemantau proses interaktif untuk sistem Unix. htop adalah aplikasi berbasis teks (untuk konsol atau terminal X) dan memerlukan ncurses. htop mirip dengan top, tetapi memungkinkan pengguna untuk menggulir secara vertikal dan horizontal, sehingga semua proses yang berjalan di sistem dapat dilihat, termasuk command line lengkapnya. htop juga memiliki antarmuka pengguna yang lebih baik dan lebih banyak opsi untuk operasi.

## Nice and Renice: Mengubah Prioritas Proses

Niceness adalah nilai numerik yang memberikan petunjuk kepada kernel tentang bagaimana suatu proses harus diperlakukan relatif terhadap proses lain yang bersaing untuk mendapatkan CPU. Nilai niceness yang tinggi berarti prioritas proses rendah (proses bersikap "baik"), sedangkan nilai rendah atau negatif berarti prioritas tinggi (proses tidak terlalu "baik"). Rentang nilai niceness bervariasi antar sistem, misalnya di Linux rentangnya adalah -20 hingga +19.

Proses dengan prioritas rendah akan mendapatkan waktu CPU lebih sedikit dibandingkan proses dengan prioritas tinggi. Misalnya, jika Anda menjalankan tugas yang intensif CPU di latar belakang, Anda dapat memulainya dengan nilai niceness tinggi agar tidak mengganggu proses lain.

Perintah nice digunakan untuk memulai proses dengan nilai niceness tertentu. Sintaksnya:

```bash
nice -n nice_val [command]

# Contoh
nice -n 10 sh infinite.sh &
```

Perintah renice digunakan untuk mengubah nilai niceness proses yang sedang berjalan. Sintaksnya:

```bash
renice -n nice_val -p pid

# Contoh
renice -n 10 -p 1234
```

Priority value adalah nilai prioritas sebenarnya yang digunakan kernel Linux untuk menjadwalkan tugas. Di Linux, rentang prioritas adalah 0 hingga 139, di mana 0-99 untuk tugas real-time dan 100-139 untuk pengguna. Hubungan antara nilai nice dan priority adalah:

> priotiry_value = 20 + nice_value

Nilai nice default adalah 0. Semakin rendah nilai nice, semakin tinggi prioritas proses.

## The /proc Filesystem

Direktori /proc adalah sebuah pseudo-filesystem di Linux yang digunakan oleh kernel untuk mengekspos berbagai informasi tentang status sistem, termasuk status proses. Meskipun namanya merujuk pada "process", /proc juga berisi informasi lain seperti statistik sistem.

Setiap proses direpresentasikan oleh direktori di /proc yang dinamai sesuai dengan PID-nya. Setiap direktori proses berisi berbagai file yang menyediakan informasi detail tentang proses tersebut, seperti command line, environment variables, file descriptors, dan lainnya. Tools seperti ps dan top membaca informasi status proses dari direktori /proc ini. Dengan demikian, /proc merupakan sumber informasi penting untuk memantau dan memahami proses serta kondisi sistem secara keseluruhan.

![process-information](./image/process-information.png)
