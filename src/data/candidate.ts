import Rafif from "@/assets/Caketos 1/Rafif-1-1.svg";
import Rafif1 from "@/assets/Caketos 1/Rafif-osis-1.svg";
import Rafif2 from "@/assets/Caketos 1/Rafif-osis-2.svg";
import Rafif3 from "@/assets/Caketos 1/Rafif-osis-3.svg";
import Zahra from "@/assets/Caketos 2/Zahra-2-1.svg";
import Zahra1 from "@/assets/Caketos 2/Zahra-osis-1.svg";
import Zahra2 from "@/assets/Caketos 2/Zahra-osis-2.svg";
import Zahra3 from "@/assets/Caketos 2/Zahra-osis-3.svg";
import Alden from "@/assets/Caketum 1/Alden-1-1.svg";
import Alden1 from "@/assets/Caketum 1/Alden-mpk-1.svg";
import Alden2 from "@/assets/Caketum 1/Alden-mpk-2.svg";
import Alden3 from "@/assets/Caketum 1/Alden-mpk-3.svg";
import Seva from "@/assets/Caketum 2/Seva-2-2.svg";
import Seva1 from "@/assets/Caketum 2/Seva-mpk-1.svg";
import Seva2 from "@/assets/Caketum 2/Seva-mpk-2.svg";
import Seva3 from "@/assets/Caketum 2/Seva-mpk-3.svg";
import type { DetailsType } from "@/schema/details.schema";

export const candidateDisplay = {
  MPK: [
    {
      id: 1,
      name: "Alden",
      img: Alden,
    },
    {
      id: 2,
      name: "Seva",
      img: Seva,
    },
  ],
  OSIS: [
    {
      id: 1,
      name: "Rafif",
      img: Rafif,
    },
    {
      id: 2,
      name: "Zahra",
      img: Zahra,
    },
  ],
};

export const MPK01Details: DetailsType = {
  number: 1,
  organization: "MPK",
  quote: "Bersama 01, melangkah maju",
  name: "Alden Fathin Hanif",
  images: [Alden1, Alden2, Alden3],

  vision:
    "Mewujudkan MPK sebagai lembaga perwakilan siswa yang aspiratif, transparan, dan bertanggung jawab dalam mengawal kinerja OSIS serta membangun budaya sekolah yang aktif, kreatif, dan demokratis",
  mission: [
    "Membangun serta meningkatkan komunikasi antara MPK dengan OSIS",
    "Menampung, mengelola, dan menyampaikan aspirasi siswa secara terbuka dan bertanggung jawab",
    "Memanfaatkan media digital untuk publikasi dan transparansi kinerja MPK",
  ],

  programs: [
    "Studi banding (kegiatan belajar atau bertukar pikiran dengan MPK dari sekolah lain)",
    "Linkspiration (sebuah link berbasis google form/ngl yang dimana link tersebut akan dijadikan sebagai wadah untuk menampung aspirasi)",
    "MPK Goes to class (kegiatan menampung aspirasi dengan cara menyebarkan linkspiration ke setiap kelas melalui mpk dari kelas tersebut, proker ini dilaksanakan setiap setelah kegiatan atau 1 bulan sekali)",
    "Survei pra-acara (sebuah survei yang dilakukan sebelum kegiatan/acara dimulai guna untuk mengetahui apa harapan siswa tentang acara yang akan dilaksanakan)",
    "Buletin MPK (pengoptimalan media sosial MPK demi mewujudkan transparansi tentang kinerja MPK, contoh nya seperti live report)",
  ],
};

export const MPK02Details: DetailsType = {
  number: 2,
  organization: "MPK",
  name: "Seva Adinda Purwadani",
  images: [Seva1, Seva2, Seva3],

  vision:
    "Menjadikan organisasi MPK sebagai wadah untuk menampung dan melaksanakan aspirasi serta inspirasi, dengan memegang teguh nilai BINTANG (Berkkompeten, berlandaskan Iman, dan bertanggung jawab).",
  mission: [
    "Mengedepankan iman dan takwa serta tidak lupa menerapkan sopan santun dan etika",
    "Mewujudkan MPK sebagai organisasi teladan yang progresif terhadap perkembangan",
    "Mendengarkan, menyaring, dan mengevaluasi aspirasi dari seluruh warga sekolah",
    "Mengembangkan potensi siswa siswi melalui program yang efektif dan menarik,",
  ],

  programs: [
    "Speak Your Mind Day <br/> Hari khusus bagi siswa untuk menyampaikan aspirasi langsung kepada MPK",
    "Re Action <br/> Menyalurkan aspirasi bukan hanya lewat karya seperti lewat puisi, mural, poster, short movie yang dipajang di sekolah.",
    "Review and Reach <br/> MPK membentuk tim evaluasi yang tidak hanya mengecek progres program OSIS, tapi juga turun langsung ke kelas untuk mendengarkan aspirasi dan feedback dari siswa siswi smkn 8 .Hasil dari suara siswa akan dirangkum jadi laporan, lalu disampaikan ke OSIS secara berkala sebagai bahan evaluasi dan perbaikan bersama",
  ],
};

export const OSIS01Details: DetailsType = {
  number: 1,
  organization: "OSIS",
  name: "Rafif Firza Putra",
    images: [Rafif1, Rafif2, Rafif3],


  vision:
    "Mendorong OSIS dan siswa di SMKN 8 Semarang menjadi lebih KARSA ( KOLABORATIF, AMANAH, RUKUN, SINERGI, AKTIF ) dan memiliki etos kerja yang tinggi dan memiliki daya saing tinggi.",
  mission: [
    "Berkolaborasi, membantu, mengawasi,seluruh kegiatan ekstrakurikuler dan organisasi",
    "Memberikan tempat berkembang bagi seluruh siswa yang memiliki potensi dalam bidang akademik dan non akademik",
    "Membangun lingkungan yang inklusif dan nyaman untuk seluruh siswa berkembang",
    "Mewujudkan sekolah go green dan bebas dari sampah, dengan melaksanakan kebersihan sebulan sekali"
  ],

  programs: [
    "Melanjutkan program kerja yang telah ada dari Angkatan sebelumnya",
    "Memaksimalkan grup koordinator ekstrakurikuler dan organisasi untuk bertukar informasi tentang lomba",
    "Mengadakan kegiatan pertemuan dengan koordinator ekstrakurikuler untuk berkoordinasi tentang program kerja yang akan terlaksana 1 tahun kedepan",
    "Melaksanakan pertemuan dengan waka kurikulum untuk membentuk jadwal event untuk seluruh organisasi dan ekstrakurikuler",
    "Mengadakan kegiatan bersih bersih setiap sebulan sekali yang diikuti semua siswa guru dan seluruh warga sekolah"
  ],
};

export const OSIS02Details: DetailsType = {
  number: 2,
  organization: "OSIS",
  name: "Zahra Rizky Megasaputri",
  images: [Zahra1, Zahra2, Zahra3],

  vision: 
    "Mewujudkan OSIS SMK Negeri 8 Semarang sebagai organisasi aktif, kreatif, dan inovatif melalui kegiatan yang positif dan juga berdampak bagi siswa siswi. Untuk membentuk siswa siswi yang berkarakter, berprestasi, dan berjiwa sosial",
  mission: [
    "Menyediakan wadah bagi siswa siswi SMK Negeri 8 Semarang untuk memberi inpirasi dan edukasi melalui konten kreatif di media sosial (Snapan Talk)",
    "Menumbuhkan kepedulian sosial dan kesadaran lingkungan melalui kegiatan yang kreatif, edukatif, serta ramah lingkungan (Ecocraft)",
    "Mengembangkan program kerja OSIS sebelumnya, seperti studi banding dan dukungan penuh terhadap proker tiap sekbid, agar tercipta kesinambungan organisasi",
    "Menjadi fasilitator dalam membangun perilaku positif di sekolah, baik dalam aspek akademik maupun non-akademik"
  ],

  programs: [
    "<span className='font-bold'>Snapan Talk</span> adalah program kerja yang akan menayangkan konten dengan memanfaatkan platform media sosial seperti IG dan TikTok. Dengan mengundang siswa siswi berprestasi di bidang akademik maupun non-akademik. Snapan Talk juga akan membahas topik seputar anak sekolah atau remaja yang pastinya menarik, menginspirasi, dan mengudakasi pada setiap episode nya",
    "<span className='font-bold'>EcoCraft (Karya Ramah Lingkungan)</span> adalah kegiatan membuat kerajinan tangan dengan memanfaatkan barang bekas yang dapat diolah atau di daur ulang, agar nantinya dapat digunakan kembali menjadi barang yang lebih bermanfaat dan memiliki nilai jual",
    "Melanjutkan program kerja yang sebelumnya sudah dibawa oleh ketua sebelumnya, yaitu Studi Banding & Mendukung Proker Setiap Sekbid"
  ],
};
