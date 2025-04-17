import React from 'react';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div className="pt-10  px-4 sm:px-10 border-t min-h-[80vh]">
      <div className="text-center text-2xl mb-10">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      <div className="max-w-2xl mb-12 mx-auto">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 outline-none text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 outline-none text-sm"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="border border-gray-300 rounded px-4 py-2 outline-none text-sm resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
