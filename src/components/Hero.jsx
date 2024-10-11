import Header from "./Header";

const ideas = [
  "Your next unforgettable journey starts here",
  "Experience breathtaking tours tailored just for you",
  "From mountains to beaches",
];

const Hero = function () {
  return (
    <div className="w-[100%] bg-heroImage bg-cover min-h-screen pt-14 bg-center flex flex-col items-center text-center justify-evenly relative">
      <Header />
      <h1 className="uppercase text-5xl tracking-[5px] font-extrabold text-transparent xl:text-[10rem] xl:tracking-[13px] bg-textClip2 bg-clip-text md:text-8xl lg:text-9xl">
        adventure
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 tracking-[2px]">
        Create Your Outdoor Adventure Discover With Us{" "}
      </p>
      <div className="w-[100%] flex flex-col gap-7 items-center relative md:flex-row md:justify-evenly xl:w-[90%]">
        {ideas.map((el) => (
          <div className="w-[70%] h-40 bg-[rgba(37,100,235,0.1)] flex justify-center items-center relative custom-shadow1 md:w-[30%] lg:w-[25%]">
            <p className="text-[1.2rem] uppercase tracking-[5px] font-bold text-gray-500">
              {el}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
