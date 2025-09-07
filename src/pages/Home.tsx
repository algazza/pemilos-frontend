import snapan from "../assets/Logo Sekolah.svg";
import mpk from "../assets/Logo MPK.svg";
import osis from "../assets/Logo Osis.svg";
import Paslon from "../assets/paslon/mas yesking.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center mb-8">
        <div className="grid gap-3 lg:gap-6 lg:w-[950px]">
        <div className="flex justify-center items-center gap-3">
          <div className="rounded-full p-1 bg-white">
            <img src={snapan} alt="" className="w-10 lg:w-20" />
          </div>
          <div className="rounded-full p-1 bg-white">
            <img src={mpk} alt="" className="w-10 lg:w-20" />
          </div>
          <div className="rounded-full p-1 bg-white">
            <img src={osis} alt="" className="w-10 lg:w-20" />
          </div>
        </div>
        <h1 className="bg-gradient-to-r from-[#92D1E1] to-[#fff] bg-clip-text text-transparent text-3xl font-semibold lg:text-5xl">
          Hanoman
        </h1>
        <p className="max-w-[400px] lg:max-w-[600px]">
          Ayo, jangan lewatkan kesempatan ini untuk berkontribusi. Pilihanmu
          adalah langkah awal menuju masa depan yang lebih baik untuk SMK Negri
          8 Semarang. Bijaklah dalam memilih untuk menciptakan perubahan yang
          berarti
        </p>
        <Button className="bg-[#d9d9d9] text-[#242633] w-fit">
          Cek Visi Misi Mereka
        </Button>
        </div>
      </section>

      <section className="flex flex-col lg:justify-center lg:items-center gap-6 lg:flex-row lg:gap-20">
        <div className="">
          <h2 className="text-4xl mb-4 font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
            OSIS
          </h2>
          <div className="flex gap-4">
            <Link
              to={"/paslon"}
              className="w-full px-4 pt-3 rounded-[20px] bg-gradient-to-b from-[#232741] to-[#161A20] lg:w-[210px]"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
                Rafif
              </h2>
              <img src={Paslon} alt="paslon 1" className="w-full" />
            </Link>
            <Link
              to={"/paslon"}
              className="w-full px-4 pt-3 rounded-[20px] bg-gradient-to-b from-[#232741] to-[#161A20] lg:w-[210px]"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
                Rafif
              </h2>
              <img src={Paslon} alt="paslon 1" className="w-full" />
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl mb-4 font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
            MPK
          </h2>
          <div className="flex gap-4">
            <Link
              to={"/paslon"}
              className="w-full px-4 pt-3 rounded-[20px] bg-gradient-to-b from-[#232741] to-[#161A20] lg:w-[210px]"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
                Rafif
              </h2>
              <img src={Paslon} alt="paslon 1" className="w-full" />
            </Link>
            <Link
              to={"/paslon"}
              className="w-full px-4 pt-3 rounded-[20px] bg-gradient-to-b from-[#232741] to-[#161A20] lg:w-[210px]"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r to-[#648f9b] from-[#92D1E1] bg-clip-text text-transparent">
                Rafif
              </h2>
              <img src={Paslon} alt="paslon 1" className="w-full" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
