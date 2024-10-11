import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Community = function () {
  return (
    <div
      className="w-[100%] h-screen bg-cover bg-center bg-community my-16 gap-10 flex flex-col md:flex-wrap md:flex-row md:justify-evenly content-center pt-5"
      id="community"
    >
      <h2 className="text-4xl primary-color font-extralight tracking-[2px] mb-5 w-[90%] xl:mb-32">
        Join Our Community
      </h2>
      <p className="text-[.9rem] md:text-xl tracking-[2px] bg-[rgba(45,253,52,0.04)] text-gray-500 p-4 md:w-[50%] xl:text-2xl lg:text-2xl">
        We believe in building a vibrant community of passionate travelers who
        share a love for discovery and adventure. By joining us, you’ll connect
        with like-minded explorers, gain insider tips, and enjoy exclusive
        offers on our tours. We'd love to hear from you!
        <br /> <br />
        Fill out the form below to become part of our growing community and stay
        updated with the latest travel news, destinations, and deals.
      </p>

      <form className="w-[100%] flex flex-col gap-5 items-center bg-[rgba(45,253,52,0.04)] md:w-[40%] py-20">
        <div className="w-[100%] flex justify-evenly items-center">
          <label className="text-[.9rem] md:text-xl tracking-[2px] text-[#2dfd3468] ">
            Name
          </label>
          <input className="text-xl tracking-[2px] text-gray-300 bg-transparent outline-none border-b-[1px] w-[70%] border-b-[#2dfd3468] px-5 pb-2" />
        </div>

        <div className="w-[100%] flex justify-evenly items-center">
          <label className="text-[.9rem] md:text-xl tracking-[2px] text-[#2dfd3468]">
            Email
          </label>
          <input className="text-xl tracking-[2px] text-gray-300 bg-transparent outline-none border-b-[1px] w-[70%] border-b-[#2dfd3468] px-5 pb-2" />
        </div>

        <Button
          variant="outlined"
          sx={{
            color: "#2dfd35b3",
            padding: "8px 16px",
            fontSize: "1rem",
            letterSpacing: "2px",
          }}
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default Community;
