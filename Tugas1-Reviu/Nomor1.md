# Analisa file http.cap dengan wireshark

---

### 1. Versi HTTP yang digunakan

Untuk mengidentifikasi versi HTTP yang digunakan, kita perlu mencari paket yang mengandung HTTP request (seperti GET atau POST) atau HTTP response (seperti 200 OK) terlebih dahulu. Hal ini dapat dilakukan dengan menggunakan filter http di Wireshark. Setelah itu, versi HTTP yang digunakan dapat dilihat pada kolom Info atau di bagian Hypertext Transfer Protocol di Packet Details.

![Versi HTTP](./image/versi-http.png)

Pada gambar di atas, terlihat bahwa versi HTTP yang digunakan adalah HTTP/1.1. Hal ini dapat dilihat pada kolom Info di beberapa paket:

- Pada paket nomor 4, tertulis: `GET /download.html HTTP/1.1`.
- Pada paket nomor 27 dan 38, tertulis: `HTTP/1.1 200 OK`.

Dengan demikian, dapat disimpulkan bahwa komunikasi HTTP tersebut menggunakan versi HTTP/1.1.

---

### 2. IP address dari client maupun server

---

### 3. Waktu client mengirim request

---

### 4. Waktu server menerima HTTP request dari client

---

### 5. waktu yang dibutuhkan untuk transfer dan response dari client ke server
