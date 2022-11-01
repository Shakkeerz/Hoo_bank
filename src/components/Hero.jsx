import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";
function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] text-slate-400">
          <img src={discount} alt={`discount`} className="w-[32px] h-[32px]" />
          <span className=" mr-2 text-white">20% </span>
          Discount For <span className="mr-2 text-white">1 Month</span>
          Account
        </div>

        <div className="flex justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
            {/* getstarted circle */}
          </h1>
          <div className="hidden ss:block">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradients */}
        <div className="absolute w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 pink__gradient" />
        {/* end gradients */}

        <div className={`ss:hidden absolute right-0 top-0 `}>
          <GetStarted/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
