import hero from "../assets/heroBackground.jpg";

const Hero = () => {
  return (
    <section id="#" className=" h-screen  relative text-gray-700">
      <img src={hero} alt="hero" className="w-full h-full absolute" />
      <div className="backdrop w-full h-full absolute z-[1]" />
      <div className="container relative z-[2] flex flex-col justify-center items-center text-white gap-5">
        <h1 className="text-4xl font-bold">Tīrīšanas pakalpojumi</h1>
        <div className="bg-white w-[320px] h-[2px]" />
        <h2 className="text-2xl font-medium">Logi. Jumti. Bruģis.</h2>

        <a
          className="p-4 mt-10 border-solid border-white border-2 font-medium hover:border-yellow-400 hover:text-yellow-400"
          href="#par-mums"
        >
          Par mums
        </a>
      </div>
    </section>
  );
};

export default Hero;
