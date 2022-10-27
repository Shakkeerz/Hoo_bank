import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 flex flex-col`}>
          <img
            src={logo}
            alt="boobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={styles.paragraph}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
      </div>

      <div className="flex-[1.5] flex w-full justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks?.map((footerlink) => (
          <div
            key={footerlink.id}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h3 className="font-poppins font-medium text-[18px] leading-[27px]  ">
              {footerlink.title}
            </h3>
            <ul className="list-none mt-4">
              {footerlink.titleLinks?.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.titleLinks.length - 0 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}{" "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* scoial media icon and cpy right */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] " >
        <p className=" font-poppins font-medium text-[18px] leading-[27px]  ">
          Copyright @ 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex md:mt-0 mt-6">
          {socialMedia?.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={ `w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"} `} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
