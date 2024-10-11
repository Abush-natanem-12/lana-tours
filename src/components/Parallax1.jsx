import { Button } from "@mui/material";

const Parallax = function () {
  return (
    <div className="w-[100%] min-h-screen bg-cover bg-center bg-parallax flex flex-col items-center text-center bg-fixed justify-center gap-10">
      <h2 className="text-6xl uppercase text-transparent  tracking-[5px] leading-[1.4] md:text-7xl lg:text-8xl xl:text-9xl bg-textClip2 bg-clip-text">
        IT'S time to travel
      </h2>

      <p className="text-2xl uppercase tracking-[3px] leading-[1.4] text-gray-500">
        Embark on a journey that transcends the ordinary. Explore exclusive
        tours, curated for travelers who seek the extraordinary.
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
  );
};

export default Parallax;
