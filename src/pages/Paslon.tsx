import React, { useEffect, useState } from "react";
import ImanSVG from "@/assets/paslon/Iman 1.svg";
import Iman2 from "@/assets/paslon/Iman 2.png";
import Iman3 from "@/assets/paslon/Iman 3.png";

import { AnimatePresence, motion } from "motion/react";

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
    `Speak Your Mind Day <br/> Hari khusus bagi siswa untuk menyampaikan aspirasi langsung kepada MPK`,
    "Peningkatan Kualitas Ekstrakurikuler melalui workshop dan kompetisi antar sekolah.",
    "Kampanye Lingkungan Hidup seperti penanaman pohon dan pengelolaan sampah.",
    "Program Kesehatan Mental dengan menghadirkan narasumber dan sesi konseling.",
    "Festival Seni dan Budaya untuk menampilkan bakat siswa dalam seni pertunjukan dan kerajinan.",
  ],
};

const images = [ImanSVG, Iman2, Iman3];

const PaslonPage: React.FC = () => {
  const [indeximg, setIndeximg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndeximg((prev) => (prev + 1) % images.length);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center text-xs md:text-sm">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
            OSIS
          </h2>
          <div className="mt-4 flex flex-col justify-center items-center">
            {candidateDetails?.quote && (
              <p className="font-bold bg-gradient-to-r from-[#648f9b] to-[#6c7e83] bg-clip-text text-transparent">
                {candidateDetails?.quote}
              </p>
            )}
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
              className="h-fit lg:h-100"
            >
              <AnimatePresence>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={images[indeximg]}
                  alt={candidateDetails.name}
                  className="object-center object-contain overflow-hidden"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
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
              className="opacity-75"
              dangerouslySetInnerHTML={{__html: candidateDetails.vision}}
            />
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
                    className="opacity-75"
                    dangerouslySetInnerHTML={{__html: misi}}
                  />
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
              {candidateDetails.programs.map((proker, idx) => (
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
                    className="opacity-75"
                    dangerouslySetInnerHTML={{__html: proker}}
                  />
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
