import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
function Billing() {
  return (
    <section id="product" className={`  ${layout.sectionReverse}`}>
      <div className={` ${layout.sectionImgReverse}`}>
        <img src={bill} alt="" className={`w-[100%] h-[100%] relative `} />
        <div className="absolute white__gradient -left-1/2 w-[50%] h-[50%] z-[3] rounded-full" />
        <div className="absolute z-[0] -left-1/2 w-[50%] h-[50%] pink__gradient bottom-0 lef-0 right-0" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`text-5xl font-bold ${styles.heading2}`}>
          Easy control your <br className="sm:block hidden"/> billing & invoiceing
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          maxime reiciendis repellendus vitae obcaecati. Cum quidem asperiores
          nesciunt perferendis impedit obcaecati cumque sed aperiam assumenda,
          repellendus consectetur ipsum eos dolorem!
        </p>
        <div className="flex  flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className="w-[128ox] h-[42px] object-contain"/>
          <img src={google} alt="google" className="w-[128ox] h-[42px] object-contain"/>
        </div>
      </div>
    </section>
  );
}

export default Billing;
