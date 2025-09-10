import Rafif from "@/assets/Caketos 1/Rafif-1-1.svg";
import Zahra from "@/assets/Caketos 2/Zahra-2-1.svg";
import Alden from "@/assets/Caketum 1/Alden-1-1.svg";
import Seva from "@/assets/Caketum 2/Seva-2-2.svg";
import type { DetailsType } from "@/schema/details.schema";

export const candidateDisplay = {
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
};

export const aldenDetails: DetailsType = {
  number: 1,
  organization: "MPK",
  quote: "Bersama 01, melangkah maju",
  name: "Alden Fathin Hanif",

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

export const SevaDetails: DetailsType = {
  number: 2,
  organization: "MPK",
  name: "Seva Adinda Purwadani",

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
