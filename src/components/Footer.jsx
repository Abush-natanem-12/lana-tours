const Footer = function () {
  return (
    <footer className="w-[100%] flex flex-col md:flex-row gap-10 items-center py-16 md:justify-evenly text-center">
      <div className="flex flex-col w-[90%] gap-3 items-center md:w-[45%] text-center">
        <span className="text-3xl text-gray-200 tracking-[2px] uppercase">
          For More Information
        </span>
        <span className="text-[1rem] text-gray-400 tracking-[2px] uppercase">
          Telephone &nbsp; &nbsp; +113-4848-909
        </span>
        <span className="text-[1rem] text-gray-400 tracking-[2px] uppercase">
          Instagram &nbsp; &nbsp; @lana_tours1
        </span>
        <span className="text-[1rem] text-gray-400 tracking-[2px] uppercase">
          Twitter &nbsp; &nbsp; @lana_tours1
        </span>
      </div>

      <p className="text-3xl uppercase tracking-[2px] primary-color md:w-[45%]">
        Lana Tours For Better Moments
      </p>
    </footer>
  );
};

export default Footer;
