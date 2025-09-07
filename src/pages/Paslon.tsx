import React from "react";
import ImanSVG from "@/assets/Iman.svg";

import { motion } from "motion/react";

const PaslonPage: React.FC = () => {
  const candidateDetails = {
    number: 1,
    quote: "Suara Kita, Aksi Kita, Masa Depan Kita!",
    name: "M. Iman Sigma",

    vision:
      "Mewujudkan OSIS sebagai wadah kreatif, inovatif, dan solid yang mampu mengembangkan potensi siswa serta menciptakan lingkungan sekolah yang nyaman, berprestasi, dan berkarakter.",
    mission: [
      "Meningkatkan partisipasi siswa dalam kegiatan OSIS melalui program-program yang menarik dan relevan.",
      "Mengembangkan bakat dan minat siswa melalui berbagai ekstrakurikuler dan pelatihan keterampilan.",
      "Menciptakan lingkungan sekolah yang inklusif, aman, dan nyaman",
    ],

    programs: [
      "Pelatihan Kepemimpinan dan Manajemen Organisasi untuk anggota OSIS.",
      "Peningkatan Kualitas Ekstrakurikuler melalui workshop dan kompetisi antar sekolah.",
      "Kampanye Lingkungan Hidup seperti penanaman pohon dan pengelolaan sampah.",
      "Program Kesehatan Mental dengan menghadirkan narasumber dan sesi konseling.",
      "Festival Seni dan Budaya untuk menampilkan bakat siswa dalam seni pertunjukan dan kerajinan.",
    ],
  };

  

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-center p-6 gap-16">
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
            OSIS
          </h2>
          <div className="mt-4 flex flex-col justify-center items-center">
            <p className="text-xs font-bold bg-gradient-to-r from-[#648f9b] to-[#6c7e83] bg-clip-text text-transparent">
              {candidateDetails.quote}
            </p>
            <h1 className="text-4xl md:text-5xl paslon-name font-extrabold italic p-1">
              {candidateDetails.name}
            </h1>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 13,
              }}
              className="w-100 h-fit lg:h-100"
            >
              <img
                src={ImanSVG}
                alt={candidateDetails.name}
                className="object-center object-contain overflow-hidden"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 13,
            }}
            className="bg-[#2A303D] p-6 rounded-xl shadow-lg w-full max-w-96 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Visi</h3>
              <span>🌟</span>
            </div>
            <hr className="opacity-20" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 13,
                delay: 0.1,
              }}
              className="text-xs opacity-75"
            >
              {candidateDetails.vision}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 13,
              delay: 0.1,
            }}
            className="bg-[#2A303D] p-6 rounded-xl shadow-lg w-full max-w-96 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Misi</h3>
              <span>🎯</span>
            </div>
            <hr className="opacity-20" />
            <div className="flex flex-col gap-1">
              {candidateDetails.mission.map((misi, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 overflow-hidden"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      mass: 1,
                      stiffness: 100,
                      damping: 13,
                      delay: 0.1 * idx + 0.2,
                    }}
                  >
                    ⭐
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.75, x: 0 }}
                    transition={{
                      type: "spring",
                      mass: 1,
                      stiffness: 100,
                      damping: 13,
                      delay: 0.1 * idx + 0.5,
                    }}
                    className="text-xs opacity-75"
                  >
                    {misi}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 13,
              delay: 0.2,
            }}
            className="bg-[#2A303D] p-6 rounded-xl shadow-lg w-full max-w-96 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Program Kerja</h3>
              <span>🌈</span>
            </div>
            <hr className="opacity-20" />
            <div className="flex flex-col gap-1">
              {candidateDetails.programs.map((progker, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 overflow-hidden"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      mass: 1,
                      stiffness: 100,
                      damping: 13,
                      delay: 0.1 * idx + 0.2,
                    }}
                  >
                    ⭐
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.75, x: 0 }}
                    transition={{
                      type: "spring",
                      mass: 1,
                      stiffness: 100,
                      damping: 13,
                      delay: 0.1 * idx + 0.5,
                    }}
                    className="text-xs opacity-75"
                  >
                    {progker}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaslonPage;
