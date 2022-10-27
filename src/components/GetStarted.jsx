import styles from "../style";
import { arrowUp } from "../assets/index";
function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer relative`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <p className="font-poppins font-medium text-[18px] leading-[23px] relative">
          <span className="text-gradient">Get</span>
          <img src={arrowUp} alt="arrow icon" className="absolute top-0 -right-7" />
        </p>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span>Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
