const Tours = function () {
  return (
    <div
      className="w-[100%] flex flex-col items-center gap-16 my-24 md:flex-row xl:gap-0 md:justify-evenly flex-wrap "
      id="tours"
    >
      <h2 className="text-4xl primary-color font-extralight tracking-[2px] mb-5 w-[90%]">
        Some Of Our Tours
      </h2>
      <div className="w-[100%] h-[40rem] relative xl:w-[24%] custom-shadow1 sm:w-[90%] md:w-[45%]">
        <img
          src="/images/nature-landscape-with-beach-view.jpg"
          alt="land scape"
          className="w-[100%] h-[100%] bg-cover bg-center"
        />

        <div className="absolute inset-0 w-[100%] h-[100%] flex flex-col items-start justify-end bg-[rgba(0,0,0,0.8)]">
          <div className="bg-[rgba(37,100,235,0.1)] p-8">
            <h4 className="text-3xl uppercase tracking-[1px] font-semibold text-gray-200">
              Tokyo Japan
            </h4>
            <p className="text-2xl text-gray-200 tracking-[2px]">23:03:2024</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[40rem] relative xl:w-[24%] custom-shadow1 sm:w-[90%] md:w-[45%]">
        <img
          src="/images/woman-enjoying-rural-surroundings.jpg"
          alt="land scape"
          className="w-[100%] h-[100%] bg-cover bg-center"
        />

        <div className="absolute inset-0 w-[100%] h-[100%] flex flex-col items-start justify-end bg-[rgba(0,0,0,0.8)]">
          <div className="bg-[rgba(37,100,235,0.1)] p-8">
            <h4 className="text-3xl uppercase tracking-[1px] font-semibold text-gray-200">
              Bale Ethiopia
            </h4>
            <p className="text-2xl text-gray-200 tracking-[2px]">23:03:2024</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[40rem] relative xl:w-[24%] custom-shadow1 sm:w-[90%] md:w-[45%]">
        <img
          src="/images/pexels-pixabay-34098.jpg"
          alt="land scape"
          className="w-[100%] h-[100%] bg-cover bg-center"
        />

        <div className="absolute inset-0 w-[100%] h-[100%] flex flex-col items-start justify-end bg-[rgba(0,0,0,0.8)]">
          <div className="bg-[rgba(37,100,235,0.1)] p-8">
            <h4 className="text-3xl uppercase tracking-[1px] font-semibold text-gray-200">
              Nairobi Kenya
            </h4>
            <p className="text-2xl text-gray-200 tracking-[2px]">23:03:2024</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[40rem] relative xl:w-[24%] custom-shadow1 sm:w-[90%] md:w-[45%]">
        <img
          src="/images/danilo-calic-DlgFZG0MvaU-unsplash.jpg"
          alt="land scape"
          className="w-[100%] h-[100%] bg-cover bg-center"
        />

        <div className="absolute inset-0 w-[100%] h-[100%] flex flex-col items-start justify-end bg-[rgba(0,0,0,0.8)]">
          <div className="bg-[rgba(37,100,235,0.1)] p-8">
            <h4 className="text-3xl uppercase tracking-[1px] font-semibold text-gray-200">
              Sydney Australia
            </h4>
            <p className="text-2xl text-gray-200 tracking-[2px]">23:03:2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
