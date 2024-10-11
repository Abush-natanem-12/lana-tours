import { Button } from "@mui/material";
import { useState } from "react";

const testimonials = [
  {
    name: "Emma J. - New York, NY",
    idea: "This was the best trip I've ever experienced! The attention to detail and personalized service were outstanding. Every moment felt like a dream come true. I can’t wait to book my next adventure with them!",
  },
  {
    name: "Liam P. - London, UK",
    idea: "The tours are perfectly curated and took us to places we would never have discovered on our own. The guides were knowledgeable, friendly, and made every experience unforgettable. Highly recommend!",
  },
  {
    name: " Sofia M. - Sydney, AUS",
    idea: "Absolutely phenomenal! From the seamless booking process to the amazing destinations, everything exceeded my expectations. I’ve made memories that will last a lifetime, all thanks to this amazing team",
  },
];

const imagePaths = [
  "pexels-niraj-lama-3511278-11105035.jpg",
  "pexels-atahandemir-13920817.jpg",
  "pexels-introspectivedsgn-9524671.jpg",
];

let change;

const Testimonials = function () {
  const [center, setCenter] = useState(0);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(2);

  return (
    <div
      className="w-[100%] bg-[rgba(45,253,52,0.04)] flex flex-col items-center h-screen justify-evenly"
      id="testimonial"
    >
      <h2 className="text-4xl primary-color font-extralight tracking-[2px] w-[90%] ">
        Testimonials
      </h2>

      <div className="w-[90%] flex flex-col md:flex-row md:justify-evenly justify-evenly items-center h-[85%] ">
        <div className="w-[100%]  md:w-[50%] h-[50%] flex items-center relative">
          {imagePaths.map((el, ind) => {
            return (
              <img
                src={`/images/${el}`}
                alt="testimonial"
                onClick={() => {
                  if (center !== ind) {
                    if (ind === left) {
                      change = left;
                      setLeft(center);
                      setCenter(change);
                    } else if (ind === right) {
                      change = right;
                      setRight(center);
                      setCenter(change);
                    }
                  }
                }}
                className={`${
                  center === ind &&
                  "w-[43%] absolute top-0 left-[50%] translate-x-[-50%] z-10 transition-all duration-500 custom-shadow1 sm:w-[40%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
                } ${
                  left === ind &&
                  "w-[43%] absolute top-10 left-0 rotate-[-10deg] transition-all duration-500 grayscale sm:w-[40%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
                } ${
                  right === ind &&
                  "w-[43%] absolute top-10 right-0 rotate-[10deg] transition-all duration-500 grayscale sm:w-[40%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
                }`}
              />
            );
          })}
        </div>

        <div className="w-[100%] flex flex-col md:w-[45%] p-5 gap-5 bg-[rgba(0,0,0,0.4)] custom-shadow1">
          <span className="xl:text-4xl tracking-[2px] primary-color animate-testNameAnimation text-xl">
            {testimonials[center].name}
          </span>
          <p className="xl:text-3xl tracking-[2px] text-gray-500 animate-testIdeaAnimation text-xl">
            {testimonials[center].idea}
          </p>

          <div className="w-[100%] flex justify-between ">
            <Button
              variant="outlined"
              size="lg"
              onClick={() => {
                if (center > 0) {
                  setCenter((curr) => curr - 1);
                  if (center === 2) {
                    setRight(0);
                    setLeft(2);
                  } else {
                    setRight(1);
                    setLeft(2);
                  }
                }
              }}
            >
              {/* {<ArrowBackIosIcon variant="outlined" />} */}
              left
            </Button>
            <Button
              variant="outlined"
              size="lg"
              onClick={() => {
                if (center < 2) {
                  setCenter((curr) => curr + 1);
                  if (center === 1) {
                    setRight(1);
                    setLeft(0);
                  } else {
                    setRight(2);
                    setLeft(0);
                  }
                }
              }}
            >
              {/* {<ArrowForwardIosIcon />} */}
              right
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
