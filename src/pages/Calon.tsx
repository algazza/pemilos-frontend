import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import type { DetailsType } from "@/schema/details.schema";
import { Link, useParams } from "react-router-dom";
import { detailsMap } from "@/routes/userRoute";
import Error from "@/components/Error";
import { ChevronLeft } from "lucide-react";

const CalonPage = () => {
  const { orgz, number } = useParams<{ orgz: string; number: string }>();
  const key = `${orgz}-${number}`;
  const data: DetailsType = detailsMap[key as keyof typeof detailsMap];

  if (!data) {
    return <Error />;
  }

  const [indeximg, setIndeximg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndeximg((prev) => (prev + 1) % data.images.length);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center text-xs md:text-sm">
      <Link to='/' className="absolute top-8 left-4 lg:left-1/4 rounded-full bg-white p-2">
        <ChevronLeft className="text-[#648f9b]"/>
      </Link>
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
            {data.organization}
          </h2>
          <div className="mt-4 flex flex-col justify-center items-center">
            {data?.quote && (
              <p className="font-bold bg-gradient-to-r from-[#648f9b] to-[#6c7e83] bg-clip-text text-transparent">
                {data?.quote}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl paslon-name font-extrabold italic p-1 text-center">
              {data.name}
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
              className="relative "
            >
              <img
                src={data.background}
                alt=""
                className="w-full h-full object-contain"
              />
              <AnimatePresence>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={data.images[indeximg]}
                  alt={data.name}
                  className="absolute bottom-0 right-0 h-full w-auto max-w-none"
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
              dangerouslySetInnerHTML={{ __html: data.vision }}
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
              {data.mission.map((misi, idx) => (
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
                    dangerouslySetInnerHTML={{ __html: misi }}
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
              {data.programs.map((proker, idx) => (
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
                    dangerouslySetInnerHTML={{ __html: proker }}
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

export default CalonPage;
