import React from "react";
import { quotes } from "../assets";

function FeedbackCard({ content, name, title, img }) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 mr-0  feedback-card">
      <img
        src={quotes}
        alt="double_qoutes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p>{content}</p>

      <div className="flex flex-row mt-5">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4 ">
          <h4 className="font-poppins font-semibold text-[20px] leadig-[32-x]">
            {name}
          </h4>
          <p className="font-poppins font-semibold text-[16px] text-dimWhite leadig-[24-px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
