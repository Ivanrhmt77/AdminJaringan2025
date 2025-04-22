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

- Protocol: TCP
- Host IP: 127.0.0.1
- Host Port: 2222
- Guest IP: 10.0.2.15
- Guest Port: 22

Pengaturan ini digunakan agar kita bisa mengakses VM1 via SSH dari host menggunakan perintah:

```bash
ssh -p 2222 user@127.0.0.1
```

Jadi, meskipun NAT menyembunyikan IP VM dari luar, kita tetap bisa mengakses terminal VM1 lewat port yang sudah diteruskan (port forwarding).

![image](./image/intnet_VM1.png)

Adapter 2 disetting ke Internal Network agar bisa berkomunikasi langsung dengan VM2 tanpa akses ke luar. Adapter ini membentuk jaringan lokal antar VM di dalam VirtualBox.

## 3. Konfigurasi VM 2

### Setting network VM 2

![image](./image/intnet_VM2.png)

Pada VM2 hanya menggunakan 1 adapter yaitu Internal Network agar VM2 bisa berkomunikasi langsung dengan VM1 dalam jaringan lokal. Karena hanya menggunakan internal network, VM2 tidak memiliki akses langsung ke internet. Akses ke internet akan dilakukan melalui VM1 sebagai gateway.
