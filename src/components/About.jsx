import { Button } from "@mui/material";

const About = function () {
  return (
    <div
      className="flex flex-col w-[100%] gap-7 bg-[rgba(45,253,52,0.03)] md:flex-row md:justify-evenly flex-wrap items-center py-10"
      id="about"
    >
      <h2 className="text-4xl primary-color font-extralight tracking-[2px] mb-20 w-[90%]">
        About Us
      </h2>

      <div className="bg-cover bg-top bg-aboutImage w-[100%] h-[50vh] relative md:w-[50%] lg:w-[40%]">
        <img
          src="images/multi-ethnic-young-couple-sitting-top-rock-looking-camera.jpg"
          alt="tourists"
          className="w-[60%] absolute top-[-10%] left-4 grayscale-[.2] custom-shadow1 md:w-[70%] sm:w-[55%]"
        />
      </div>

      <div className="md:w-[45%] lg:w-[50%] flex flex-col gap-14 items-center">
        <p className="text-[1rem] lg:text-xl tracking-[2px] px-4 leading-[1.2] text-gray-600  xl:text-2xl">
          At Lana Tours , we believe that travel is more than just a
          destination; it’s an adventure waiting to unfold. With a passion for
          exploration and a commitment to quality, we curate exclusive tours
          designed for every type of traveler. Our expert team meticulously
          selects each destination, ensuring unique experiences that transcend
          the ordinary. Whether you're seeking breathtaking landscapes, vibrant
          cultures, or hidden gems, we provide unforgettable journeys that
          inspire and rejuvenate. Our personalized service and attention to
          detail guarantee that every moment of your trip is tailored to your
          desires. Join us as we explore the world together—where every journey
          leads to extraordinary discoveries and lifelong memories.
        </p>

        <Button
          variant="outlined"
          sx={{
            color: "#2dfd35b3",
            padding: "8px 16px",
            fontSize: "1.3rem",
            letterSpacing: "2px",
          }}
        >
          EXPLORE ADVENTURE
        </Button>
      </div>
    </div>
  );
};

export default About;
