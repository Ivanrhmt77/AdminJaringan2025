<h1 align="center">
  DNS and IP Forwarding
</h1>

<br/>

## 1. Topology

![image](./image/Topology.png)

Pada topologi ini, VM1 berperan sebagai gateway yang menghubungkan VM2 ke internet dengan menggunakan IP forwarding. Selain itu, VM1 juga dikonfigurasi sebagai DNS server untuk domain `www.kelompok08.home`. Sementara itu, VM2 berfungsi sebagai klien jaringan yang menggunakan layanan dari VM1.

## 2. Konfigurasi VM 1

### Setting network VM 1 dengan 2 adapter

![image](./image/NAT_VM1.png)

Adapter 1 menggunakan NAT agar VM1 bisa mengakses internet melalui IP host. Pada mode NAT ini, dilakukan port forwarding dengan pengaturan berikut:

![image](./image/port_forwarding.png)

Pengaturan ini digunakan agar bisa mengakses VM1 via SSH dari host. Jadi, meskipun NAT menyembunyikan IP VM dari luar, tetap bisa mengakses terminal VM1 lewat port yang sudah diteruskan (port forwarding).

![image](./image/intnet_VM1.png)

Adapter 2 disetting ke Internal Network agar bisa berkomunikasi langsung dengan VM2 tanpa akses ke luar. Adapter ini membentuk jaringan lokal antar VM di dalam VirtualBox.

### [Opsional] Akses SSH ke VM melalui NAT dengan Port Forwarding

Untuk akses VM dari host via SSH, gunakan perintah berikut:

```bash
ssh -p 2222 user@127.0.0.1
```

- `-p 2222`: Menentukan port 2222 pada host yang telah diforward ke port 22 (SSH) di VM.
- `user`: Ganti dengan username di dalam VM (Student jika menggunakan VM debian-nogui).
- `127.0.0.1`: Merupakan alamat localhost dari host karena koneksi dilakukan melalui port forwarding.

![image](./image/SSH_VM1.png)

## 3. Konfigurasi VM 2

### Setting network VM 2

![image](./image/intnet_VM2.png)

Pada VM2 hanya menggunakan 1 adapter yaitu Internal Network agar VM2 bisa berkomunikasi langsung dengan VM1 dalam jaringan lokal. Karena hanya menggunakan internal network, VM2 tidak memiliki akses langsung ke internet. Akses ke internet akan dilakukan melalui VM1 sebagai gateway.
