# Laporan Konfigurasi DNS Server dengan BIND9

---

Mata Kuliah : Workshop Administrasi Jaringan

Dosen Pengampu : Dr Ferry Astika Saputra ST, M.Sc

Kelompok 5

Anggota :

1. Raihan Malano Arrasyid (3123600019)
2. Ivan Rahmat Prakasa (3123600005)
3. Muhammad Zaky Mubarok
   (3123600028)

---

## Tujuan

Melakukan konfigurasi DNS server menggunakan BIND9 pada sistem operasi Debian, disertai dengan verifikasi konfigurasi dan pengujian menggunakan perintah dig terhadap beberapa domain kelompok. Selain itu, dilakukan juga pengujian akses halaman web berdasarkan domain yang telah dikonfigurasi.

### Topologi

![topologi](./image/topologi.jpg)

### Langkah-Langkah Pengerjaan

### 1. Pengaturan Wired Settings

Set IP address secara manual melalui pengaturan Wired Settings sesuai dengan gambar berikut:

### 2. Verifikasi IP Address

Cek IP address menggunakan perintah ip a, hasil yang relevan:

```bash
2: enp2s0: <BROADCAST,MULTICAST,UP,LOWER_UP>
inet 192.168.5.10/24 brd 192.168.10.249 scope global noprefixroute enp2s0
```

### 3. Instalasi Paket yang Diperlukan

Pertama-tama dilakukan instalasi paket BIND9, Apache2, dan utilitasnya:

```bash
sudo apt update
sudo apt install bind9 bind9utils apache2 -y

```

### 4. Konfigurasi File named.conf

Buka file konfigurasi utama:

```bash
sudo nano /etc/bind/named.conf

```

Sehingga jadi seperti ini:

![namedconf](./image/namedconf.jpg)

Pastikan file ini berisi include ke file konfigurasi tambahan seperti:

```bash
include "/etc/bind/named.conf.options";
include "/etc/bind/named.conf.local";
include "/etc/bind/named.conf.default-zones";
include "/etc/bind/named.conf.internal-zones

```

### 5. Konfigurasi File named.conf.options

File ini diatur agar DNS server dapat melakukan forward query:

```bash
sudo nano /etc/bind/named.conf.options

```

Contoh konfigurasi:

![namedconfopt](./image/namedconfopt.jpg)

### 6. Membuat File Zona

Buat file zona berdasarkan konfigurasi di atas:

```bash
sudo nano /etc/bind/kelompok10.home

```

Sesuaikan isi file zona:

![kel10home](./image/kel10home.jpg)

### 7. Pemeriksaan Konfigurasi

Setelah konfigurasi dilakukan, lakukan pengecekan sintaks dengan:

```bash
sudo named-checkconf
sudo named-checkzone
```

### 8. Restart Layanan BIND9

```bash
sudo systemctl restart bind9

```

### 9. Pengujian dengan Perintah `dig`

Pengujian dilakukan untuk nama domain beberapa kelompok:

```bash
dig kelompok5.home
dig kelompok3.home
```

### 10. Hasil Output `dig`

### Output dari `dig kelompok5.home`

![digkel10](./image/digkel10.jpg)

### Output dari `dig kelompok3.home`

![192168db](attachment:794a036a-e179-4d69-a0b8-01b8eba15ac5:WhatsApp_Image_2025-04-29_at_13.03.07_e9cd2536.jpg)

### 11. Menampilkan Website Berdasarkan Domain

Setelah DNS berhasil mengarahkan domain seperti `kelompok10.home`, langkah selanjutnya adalah menampilkan halaman web menggunakan domain tersebut.

1. Buka folder web root:

```bash
cd /var/www/html

```

1. Buat atau edit file `index.html`
2. Pastikan Apache sudah berjalan:

```bash
sudo systemctl restart apache2
```

1. Akses web melalui browser dengan URL:

```bash
http://kelompok10.home/
```

Jika konfigurasi DNS dan Apache sudah benar, maka akan tampil halaman HTML dari `index.html`.

![tampilanweb](./image/tampilanweb.jpg)

Website kelompok lain seperti `http://kelompok2.home/` juga dapat diakses jika DNS telah mengarahkannya dengan benar ke server yang menjalankan layanan web.

![tampilanweb2](./image/tampilanweb2.jpg)

### 10. Kesimpulan

Konfigurasi DNS server menggunakan BIND9 berhasil dilakukan dengan benar. Hal ini dibuktikan dengan hasil pengecekan konfigurasi tanpa error, pengujian query DNS menggunakan `dig`, serta kemampuan untuk menampilkan halaman web dengan menggunakan domain `kelompok5.home` dan domain kelompok lain.

Selain konfigurasi DNS, layanan web seperti Apache juga perlu dikonfigurasi dan dijalankan untuk memastikan domain yang diarahkan dapat menampilkan halaman web sesuai yang diinginkan.
