const pptxgen = require("pptxgenjs");
const { iconPng } = require("./icons.js");

const NAVY = "21295C";
const BLUE = "065A82";
const TEAL = "1C7293";
const CYAN = "4FD1C5";
const LIGHT_BG = "F7FAFC";
const WHITE = "FFFFFF";
const GRAY = "4A5568";
const CARD_BG = "EDF2F7";

const FONT = "Calibri";
const FONT_HEAD = "Cambria";

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";

  const icUbuntu = await iconPng("FaUbuntu", WHITE, 300);
  const icUbuntuBlue = await iconPng("FaUbuntu", BLUE, 300);
  const icDocker = await iconPng("FaDocker", WHITE, 300);
  const icDockerBlue = await iconPng("FaDocker", BLUE, 300);
  const icServer = await iconPng("FaServer", WHITE, 300);
  const icServerBlue = await iconPng("FaServer", BLUE, 300);
  const icCloud = await iconPng("FaCloud", WHITE, 300);
  const icGlobeBlue = await iconPng("FaGlobe", BLUE, 300);
  const icCheck = await iconPng("FaCheckCircle", TEAL, 300);
  const icArrowRight = await iconPng("FaArrowRight", TEAL, 300);
  const icLaptop = await iconPng("FaLaptopCode", WHITE, 300);
  const icKey = await iconPng("FaKey", BLUE, 300);
  const icWarning = await iconPng("FaExclamationTriangle", "B7791F", 300);
  const icUsers = await iconPng("FaUsers", BLUE, 300);

  // ---------- Slide 1: Title ----------
  {
    const s = pres.addSlide();
    s.background = { color: NAVY };
    s.addImage({ data: icServer, x: 10.9, y: 0.9, w: 1.7, h: 1.7, transparency: 15 });
    s.addText("INSTALASI UBUNTU, DOCKER &\nSET UP WEB SERVER", {
      x: 0.8, y: 2.4, w: 10.8, h: 1.8, fontFace: FONT_HEAD, bold: true,
      fontSize: 36, color: WHITE, align: "left", valign: "bottom", isTextBox: true
    });
    s.addText("Praktikum Jaringan Komputer", {
      x: 0.8, y: 4.25, w: 10, h: 0.5, fontFace: FONT, fontSize: 20, color: CYAN, align: "left", isTextBox: true
    });
    s.addText("Program Studi Informatika  •  Fakultas Teknik  •  Universitas Tanjungpura  •  2026", {
      x: 0.8, y: 6.7, w: 11, h: 0.4, fontFace: FONT, fontSize: 12, color: "8CA3C4", align: "left", isTextBox: true
    });
  }

  // ---------- Slide 2: Agenda hari ini ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Agenda Hari Ini", { x: 0.7, y: 0.5, w: 10, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 32, color: NAVY, isTextBox: true });

    s.addShape("roundRect", { x: 0.7, y: 1.6, w: 5.6, h: 4.7, fill: { color: BLUE }, line: { type: "none" }, rectRadius: 0.1 });
    s.addText("Bagian 1", { x: 1.0, y: 1.85, w: 5, h: 0.5, fontFace: FONT, bold: true, fontSize: 18, color: CYAN, isTextBox: true });
    s.addText("Instalasi Ubuntu & Docker", { x: 1.0, y: 2.3, w: 5, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: WHITE, isTextBox: true });
    [
      "Install VirtualBox + Ubuntu",
      "Verifikasi Apache2 (localhost)",
      "Install Docker Engine"
    ].forEach((t, i) => {
      s.addText("•  " + t, { x: 1.0, y: 3.0 + i * 0.55, w: 5.0, h: 0.5, fontFace: FONT, fontSize: 14, color: "E2E8F0", isTextBox: true });
    });

    s.addShape("roundRect", { x: 6.6, y: 1.6, w: 5.9, h: 4.7, fill: { color: TEAL }, line: { type: "none" }, rectRadius: 0.1 });
    s.addText("Bagian 2", { x: 6.9, y: 1.85, w: 5, h: 0.5, fontFace: FONT, bold: true, fontSize: 18, color: WHITE, isTextBox: true });
    s.addText("Set Up Web Server (Lokal & VPS)", { x: 6.9, y: 2.3, w: 5.4, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: WHITE, isTextBox: true });
    [
      "Web server lokal via Docker",
      "Konsep VPS & Coolify",
      "Deploy web server ke VPS publik"
    ].forEach((t, i) => {
      s.addText("•  " + t, { x: 6.9, y: 3.0 + i * 0.55, w: 5.4, h: 0.5, fontFace: FONT, fontSize: 14, color: WHITE, isTextBox: true });
    });

    s.addText("Istirahat di antara kedua bagian", {
      x: 0.7, y: 6.5, w: 11.6, h: 0.5, align: "center", fontFace: FONT, italic: true, fontSize: 14, color: GRAY, isTextBox: true
    });
  }

  // ---------- Slide 3: Section divider BAGIAN 1 ----------
  {
    const s = pres.addSlide();
    s.background = { color: NAVY };
    s.addImage({ data: icUbuntu, x: 0.9, y: 2.6, w: 1.8, h: 1.8 });
    s.addText("BAGIAN 1", { x: 3.0, y: 2.7, w: 9, h: 0.6, fontFace: FONT, bold: true, fontSize: 18, color: CYAN, isTextBox: true });
    s.addText("Instalasi Ubuntu & Docker", { x: 3.0, y: 3.2, w: 9, h: 1.0, fontFace: FONT_HEAD, bold: true, fontSize: 34, color: WHITE, isTextBox: true });
  }

  // ---------- Slide 4: Konsep OS & Ubuntu ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Sistem Operasi & Ubuntu", { x: 0.7, y: 0.5, w: 10, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 30, color: NAVY, isTextBox: true });

    s.addShape("roundRect", { x: 0.7, y: 1.6, w: 5.5, h: 4.6, fill: { color: CARD_BG }, line: { type: "none" }, rectRadius: 0.1 });
    s.addText("Sistem Operasi", { x: 1.0, y: 1.85, w: 5, h: 0.5, fontFace: FONT, bold: true, fontSize: 17, color: NAVY, isTextBox: true });
    s.addText("Program yang mengatur dan mengelola seluruh komponen komputer, memberi layanan (system calls) agar sumber daya komputer bisa dipakai dengan mudah dan aman.", {
      x: 1.0, y: 2.4, w: 4.9, h: 3.5, fontFace: FONT, fontSize: 14, color: GRAY, valign: "top", isTextBox: true
    });

    s.addShape("roundRect", { x: 6.6, y: 1.6, w: 5.9, h: 4.6, fill: { color: BLUE }, line: { type: "none" }, rectRadius: 0.1 });
    s.addImage({ data: icUbuntu, x: 6.9, y: 1.85, w: 0.6, h: 0.6 });
    s.addText("Ubuntu", { x: 7.7, y: 1.9, w: 4.5, h: 0.5, fontFace: FONT, bold: true, fontSize: 17, color: WHITE, isTextBox: true });
    s.addText("Distribusi Linux berbasis Debian, open source dan gratis. Tersedia versi desktop maupun server, dipakai luas untuk kebutuhan pribadi hingga infrastruktur server.", {
      x: 6.9, y: 2.6, w: 5.3, h: 3.3, fontFace: FONT, fontSize: 14, color: "E2E8F0", valign: "top", isTextBox: true
    });
  }

  // ---------- Slide 5: Alur Kerja Bagian 1 ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Alur Kerja: Instalasi Ubuntu & Docker", { x: 0.7, y: 0.5, w: 11.5, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 28, color: NAVY, isTextBox: true });

    const steps = ["Install\nVirtualBox", "Install\nUbuntu", "Verifikasi\nApache2", "Install\nDocker"];
    const n = steps.length;
    const boxW = 2.4, gap = (11.6 - boxW * n) / (n - 1);
    let x = 0.87;
    steps.forEach((t, i) => {
      s.addShape("roundRect", { x, y: 2.8, w: boxW, h: 1.6, fill: { color: i % 2 === 0 ? BLUE : TEAL }, line: { type: "none" }, rectRadius: 0.1 });
      s.addText(String(i + 1), { x, y: 2.8, w: boxW, h: 0.45, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 14, color: CYAN, isTextBox: true });
      s.addText(t, { x, y: 3.25, w: boxW, h: 1.05, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 14, color: WHITE, isTextBox: true });
      if (i < n - 1) s.addImage({ data: icArrowRight, x: x + boxW + gap / 2 - 0.18, y: 3.42, w: 0.36, h: 0.36 });
      x += boxW + gap;
    });

    s.addText("Detail langkah demi langkah ada di modul praktikum — slide ini hanya peta alurnya.", {
      x: 0.7, y: 5.0, w: 11.6, h: 0.5, align: "center", fontFace: FONT, italic: true, fontSize: 14, color: GRAY, isTextBox: true
    });
  }

  // ---------- Slide 6: Verifikasi & Docker ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Kenapa Verifikasi Dulu Sebelum Docker?", { x: 0.7, y: 0.5, w: 11.5, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 26, color: NAVY, isTextBox: true });

    s.addShape("roundRect", { x: 0.7, y: 1.7, w: 5.6, h: 4.5, fill: { color: CARD_BG }, line: { type: "none" }, rectRadius: 0.1 });
    s.addImage({ data: icServerBlue, x: 1.0, y: 1.95, w: 0.6, h: 0.6 });
    s.addText("Verifikasi Apache2", { x: 1.75, y: 2.0, w: 4.3, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: NAVY, isTextBox: true });
    s.addText("Memastikan VM dan jaringan dasar sudah benar (systemctl status, akses via IP di browser) sebelum menambah lapisan Docker di atasnya.", {
      x: 1.0, y: 2.7, w: 5.0, h: 3.3, fontFace: FONT, fontSize: 14, color: GRAY, valign: "top", isTextBox: true
    });

    s.addShape("roundRect", { x: 6.6, y: 1.7, w: 5.9, h: 4.5, fill: { color: NAVY }, line: { type: "none" }, rectRadius: 0.1 });
    s.addImage({ data: icDocker, x: 6.9, y: 1.95, w: 0.6, h: 0.6 });
    s.addText("Install Docker Engine", { x: 7.65, y: 2.0, w: 4.6, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: WHITE, isTextBox: true });
    s.addText("Docker Engine diinstal dari repository resmi, lalu diuji dengan container percobaan pertama:", {
      x: 6.9, y: 2.7, w: 5.3, h: 1.0, fontFace: FONT, fontSize: 14, color: "E2E8F0", valign: "top", isTextBox: true
    });
    s.addText("sudo docker run hello-world", { x: 6.9, y: 3.75, w: 5.3, h: 0.55, fontFace: "Consolas", fontSize: 15, color: CYAN, isTextBox: true });
    s.addText("Kalau pesan sambutan Docker muncul, Docker Engine sudah siap dipakai.", {
      x: 6.9, y: 4.45, w: 5.3, h: 1.5, fontFace: FONT, italic: true, fontSize: 13, color: "AEC4D9", valign: "top", isTextBox: true
    });
  }

  // ---------- Slide 7: Section divider BAGIAN 2 ----------
  {
    const s = pres.addSlide();
    s.background = { color: NAVY };
    s.addImage({ data: icCloud, x: 0.9, y: 2.6, w: 1.8, h: 1.8 });
    s.addText("BAGIAN 2", { x: 3.0, y: 2.7, w: 9, h: 0.6, fontFace: FONT, bold: true, fontSize: 18, color: CYAN, isTextBox: true });
    s.addText("Set Up Web Server (Lokal & VPS)", { x: 3.0, y: 3.2, w: 9, h: 1.0, fontFace: FONT_HEAD, bold: true, fontSize: 32, color: WHITE, isTextBox: true });
  }

  // ---------- Slide 8: Konsep Web Server ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Apa itu Web Server?", { x: 0.7, y: 0.5, w: 10, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 32, color: NAVY, isTextBox: true });
    s.addText(
      "Perangkat lunak yang menerima permintaan (request) dari client lewat HTTP/HTTPS, lalu mengirim kembali respons berupa halaman web, file, atau data lain.",
      { x: 0.7, y: 1.5, w: 5.3, h: 2.0, fontFace: FONT, fontSize: 17, color: GRAY, valign: "top", isTextBox: true }
    );
    s.addShape("roundRect", { x: 0.7, y: 3.7, w: 5.3, h: 1.6, fill: { color: CARD_BG }, line: { type: "none" }, rectRadius: 0.08 });
    s.addText([
      { text: "Apache & Nginx\n", options: { bold: true, color: NAVY, fontSize: 16 } },
      { text: "Dua web server open source paling umum. Praktikum ini pakai Apache (image httpd:alpine).", options: { color: GRAY, fontSize: 13 } }
    ], { x: 1.0, y: 3.9, w: 4.7, h: 1.3, fontFace: FONT, valign: "middle", isTextBox: true });

    s.addShape("roundRect", { x: 7.1, y: 1.9, w: 2.3, h: 1.3, fill: { color: TEAL }, line: { type: "none" }, rectRadius: 0.1 });
    s.addText("Client\n(Browser)", { x: 7.1, y: 1.9, w: 2.3, h: 1.3, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 15, color: WHITE, isTextBox: true });
    s.addShape("roundRect", { x: 7.1, y: 4.6, w: 2.3, h: 1.3, fill: { color: BLUE }, line: { type: "none" }, rectRadius: 0.1 });
    s.addText("Web Server", { x: 7.1, y: 4.6, w: 2.3, h: 1.3, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 15, color: WHITE, isTextBox: true });
    s.addShape("line", { x: 8.25, y: 3.2, w: 0, h: 1.4, line: { color: NAVY, width: 2, endArrowType: "triangle" } });
    s.addText("Request / Response", { x: 9.6, y: 3.7, w: 2.4, h: 0.5, fontFace: FONT, italic: true, fontSize: 12, color: GRAY, isTextBox: true });
  }

  // ---------- Slide 9: Konsep VPS ----------
  {
    const s = pres.addSlide();
    s.background = { color: NAVY };
    s.addText("Apa itu VPS (Virtual Private Server)?", { x: 0.7, y: 0.5, w: 11.5, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 28, color: WHITE, isTextBox: true });
    s.addText("Server virtual dengan sumber daya (CPU, RAM, storage, IP publik) sendiri, hak akses root penuh, terisolasi dari pengguna lain di server fisik yang sama.", {
      x: 0.7, y: 1.35, w: 11.5, h: 0.7, fontFace: FONT, fontSize: 15, color: "C3D2E8", isTextBox: true
    });

    s.addShape("roundRect", { x: 0.8, y: 2.4, w: 5.6, h: 4.3, fill: { color: "2A3670" }, line: { type: "none" }, rectRadius: 0.1 });
    s.addImage({ data: icLaptop, x: 1.1, y: 2.65, w: 0.6, h: 0.6 });
    s.addText("VM Lokal (Development)", { x: 1.85, y: 2.7, w: 4.4, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: CYAN, isTextBox: true });
    s.addText("Bikin dan uji coba web server dulu di laptop sendiri — belum bisa diakses dari luar.", {
      x: 1.1, y: 3.4, w: 5.0, h: 1.2, fontFace: FONT, fontSize: 14, color: WHITE, valign: "top", isTextBox: true
    });

    s.addShape("roundRect", { x: 6.9, y: 2.4, w: 5.6, h: 4.3, fill: { color: TEAL }, line: { type: "none" }, rectRadius: 0.1 });
    s.addImage({ data: icCloud, x: 7.2, y: 2.65, w: 0.6, h: 0.6 });
    s.addText("VPS (Cloud Deployment)", { x: 7.95, y: 2.7, w: 4.4, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: WHITE, isTextBox: true });
    s.addText("Pindahkan berkas & jalankan container di server publik — bisa diakses siapa saja lewat internet.", {
      x: 7.2, y: 3.4, w: 5.0, h: 1.2, fontFace: FONT, fontSize: 14, color: WHITE, valign: "top", isTextBox: true
    });

    s.addImage({ data: icArrowRight, x: 6.05, y: 4.35, w: 0.5, h: 0.5 });
  }

  // ---------- Slide 10: Alur kerja Bagian 2 ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Alur Kerja: Web Server Lokal → VPS", { x: 0.7, y: 0.5, w: 11.5, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 28, color: NAVY, isTextBox: true });

    const steps = ["Buat\nindex.html", "Jalankan via\nDocker (lokal)", "Verifikasi\nlokal", "Login\nCoolify", "Deploy ke\nVPS publik"];
    const n = steps.length;
    const boxW = 1.95, gap = (11.6 - boxW * n) / (n - 1);
    let x = 0.87;
    steps.forEach((t, i) => {
      s.addShape("roundRect", { x, y: 2.9, w: boxW, h: 1.6, fill: { color: i % 2 === 0 ? BLUE : TEAL }, line: { type: "none" }, rectRadius: 0.1 });
      s.addText(String(i + 1), { x, y: 2.9, w: boxW, h: 0.4, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 13, color: CYAN, isTextBox: true });
      s.addText(t, { x, y: 3.3, w: boxW, h: 1.1, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 12.5, color: WHITE, isTextBox: true });
      if (i < n - 1) s.addImage({ data: icArrowRight, x: x + boxW + gap / 2 - 0.16, y: 3.53, w: 0.32, h: 0.32 });
      x += boxW + gap;
    });

    s.addText("Langkah 1-3 dikerjakan di laptop sendiri. Langkah 4-5 dikerjakan di server VPS lewat browser.", {
      x: 0.7, y: 5.1, w: 11.6, h: 0.5, align: "center", fontFace: FONT, italic: true, fontSize: 14, color: GRAY, isTextBox: true
    });
  }

  // ---------- Slide 11: Demo Web Server Lokal ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Web Server Lokal (Docker)", { x: 0.7, y: 0.5, w: 10, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 30, color: NAVY, isTextBox: true });

    const cmds = [
      "mkdir ~/web-lokal && cd ~/web-lokal",
      "nano index.html",
      "docker run -d --name web-lokal -p 8080:80 \\",
      "  -v $(pwd)/index.html:/usr/local/apache2/htdocs/index.html httpd:alpine",
      "curl http://localhost:8080"
    ];
    s.addShape("roundRect", { x: 0.7, y: 1.5, w: 7.3, h: 3.2, fill: { color: NAVY }, line: { type: "none" }, rectRadius: 0.08 });
    let y = 1.75;
    cmds.forEach((c) => {
      s.addText(c, { x: 1.0, y, w: 6.8, h: 0.55, fontFace: "Consolas", fontSize: 13, color: CYAN, valign: "middle", isTextBox: true });
      y += 0.58;
    });

    s.addText([
      { text: "Verifikasi:\n", options: { bold: true, color: NAVY, fontSize: 15 } },
      { text: "Buka browser ke http://localhost:8080 — halaman index.html buatan sendiri harus tampil.\n\n", options: { color: GRAY, fontSize: 13 } },
      { text: "Setelah selesai, jangan lupa:\n", options: { bold: true, color: NAVY, fontSize: 14 } },
      { text: "docker stop web-lokal\ndocker rm web-lokal", options: { fontFace: "Consolas", color: BLUE, fontSize: 13 } }
    ], { x: 8.2, y: 1.5, w: 4.3, h: 5.0, fontFace: FONT, valign: "top", isTextBox: true });
  }

  // ---------- Slide 12: Demo Web Server Publik (Coolify) ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Web Server Publik via Coolify", { x: 0.7, y: 0.5, w: 11, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 28, color: NAVY, isTextBox: true });

    const flow = ["Login\nCoolify", "Buat\nProject", "Add Resource:\nDockerfile", "Isi Dockerfile\n+ Set Domain", "Deploy"];
    const n = flow.length;
    const boxW = 2.05, gap = (11.6 - boxW * n) / (n - 1);
    let x = 0.87;
    flow.forEach((t, i) => {
      s.addShape("roundRect", { x, y: 1.7, w: boxW, h: 1.3, fill: { color: i % 2 === 0 ? BLUE : TEAL }, line: { type: "none" }, rectRadius: 0.1 });
      s.addText(t, { x, y: 1.7, w: boxW, h: 1.3, align: "center", valign: "middle", fontFace: FONT, bold: true, fontSize: 13, color: WHITE, isTextBox: true });
      if (i < n - 1) s.addImage({ data: icArrowRight, x: x + boxW + gap / 2 - 0.16, y: 2.17, w: 0.32, h: 0.32 });
      x += boxW + gap;
    });

    s.addShape("roundRect", { x: 0.7, y: 3.4, w: 11.6, h: 2.9, fill: { color: CARD_BG }, line: { type: "none" }, rectRadius: 0.08 });
    s.addText("FROM httpd:alpine\nRUN echo '<h1>...isi HTML kelompok...</h1>' > /usr/local/apache2/htdocs/index.html", {
      x: 1.0, y: 3.6, w: 11.0, h: 1.0, fontFace: "Consolas", fontSize: 13, color: BLUE, isTextBox: true
    });
    s.addImage({ data: icWarning, x: 1.0, y: 4.75, w: 0.4, h: 0.4 });
    s.addText("Domain WAJIB diisi sesuai nomor kelompok masing-masing (contoh: /jarkom01, /jarkom02) — jangan sama dengan kelompok lain, atau deploy bisa saling menimpa.", {
      x: 1.55, y: 4.75, w: 10.5, h: 1.4, fontFace: FONT, bold: true, fontSize: 14, color: "92400E", valign: "top", isTextBox: true
    });
  }

  // ---------- Slide 13: Reminder Penting ----------
  {
    const s = pres.addSlide();
    s.background = { color: LIGHT_BG };
    s.addText("Hal Penting Saat Akses VPS", { x: 0.7, y: 0.5, w: 11, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 30, color: NAVY, isTextBox: true });

    const rows = [
      [icUsers, "Akses bergilir", "VPS diakses bergiliran per kelompok (5-10 kelompok/gelombang) karena keterbatasan giliran praktik."],
      [icKey, "Nama & domain unik", "Gunakan nama project dan path domain sesuai nomor kelompok sendiri — jangan menyamai kelompok lain."],
      [icWarning, "Jangan sentuh project orang lain", "Semua kelompok berada di Team Coolify yang sama. Jangan edit/hapus project yang bukan milik kelompok sendiri."]
    ];
    let y = 1.7;
    rows.forEach(([icon, title, desc]) => {
      s.addShape("roundRect", { x: 0.7, y, w: 11.6, h: 1.35, fill: { color: CARD_BG }, line: { type: "none" }, rectRadius: 0.08 });
      s.addImage({ data: icon, x: 1.0, y: y + 0.35, w: 0.65, h: 0.65 });
      s.addText(title, { x: 1.9, y: y + 0.15, w: 10.2, h: 0.5, fontFace: FONT, bold: true, fontSize: 16, color: NAVY, isTextBox: true });
      s.addText(desc, { x: 1.9, y: y + 0.62, w: 10.2, h: 0.65, fontFace: FONT, fontSize: 13, color: GRAY, isTextBox: true });
      y += 1.55;
    });
  }

  // ---------- Slide 14: Rangkuman ----------
  {
    const s = pres.addSlide();
    s.background = { color: NAVY };
    s.addText("Rangkuman", { x: 0.7, y: 0.5, w: 10, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 34, color: WHITE, isTextBox: true });

    const items = [
      "Ubuntu di-install di VM, diverifikasi dengan web server Apache2",
      "Docker Engine terinstal dan siap menjalankan container",
      "Web server dijalankan sebagai container Docker, bukan diinstal langsung ke sistem",
      "VPS = server dengan IP publik, kontrol penuh, terpisah dari VM lokal",
      "Coolify jadi cara mengelola & men-deploy container ke VPS lewat browser"
    ];
    let y = 1.6;
    items.forEach((t) => {
      s.addImage({ data: icCheck, x: 0.8, y: y + 0.03, w: 0.32, h: 0.32 });
      s.addText(t, { x: 1.3, y, w: 10.8, h: 0.5, fontFace: FONT, fontSize: 16, color: "E2E8F0", valign: "middle", isTextBox: true });
      y += 0.68;
    });

    s.addText("Selamat Praktik!", { x: 0.7, y: 6.2, w: 10, h: 0.6, fontFace: FONT_HEAD, bold: true, fontSize: 22, color: CYAN, isTextBox: true });
  }

  await pres.writeFile({ fileName: "/home/claude/ppt_fullday_jarkom.pptx" });
  console.log("done");
}

main().catch((e) => { console.error(e); process.exit(1); });