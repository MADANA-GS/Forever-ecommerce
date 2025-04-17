import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      {/* About Us Header */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      {/* About Content */}
      <div className="my-6 flex flex-col sm:flex-row gap-16 px-4">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px] object-cover rounded-lg"
          alt="About"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            perspiciatis sapiente ipsa dolores. Recusandae, quos accusantium a
            pariatur quidem fugiat?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, quae a velit veniam optio enim pariatur dolorum fuga ab
            cupiditate exercitationem laudantium, doloribus accusamus
            laboriosam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            perspiciatis sapiente ipsa dolores. Recusandae, quos accusantium a
            pariatur quidem fugiat?
          </p>
        </div>
      </div>

      {/* Why Choose Us Header */}
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row text-sm gap-6 px-4 mb-20">
        <div className="border px-10 md:px-16 sm:py-20 py-8 flex flex-col gap-5 rounded-md shadow-md flex-1">
          <b>Quality Assurance</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            dolorum ab dolorem quod vero eaque aspernatur dolores unde, quas
            nihil.
          </p>
        </div>

        <div className="border px-10 md:px-16 sm:py-20 py-8 flex flex-col gap-5 rounded-md shadow-md flex-1">
          <b>Fresh Ingredients</b>
          <p>
            We believe great food starts with great ingredients. Our chefs
            source fresh, local produce to ensure every dish is packed with
            flavor and nutrition.
          </p>
        </div>

        <div className="border px-10 md:px-16 sm:py-20 py-8 flex flex-col gap-5 rounded-md shadow-md flex-1">
          <b>Fast & Reliable Delivery</b>
          <p>
            Timely service is our priority. Enjoy hot, delicious meals delivered
            right to your doorstep—fast, secure, and hassle-free.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
