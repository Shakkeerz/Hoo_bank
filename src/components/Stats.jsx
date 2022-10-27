import styles from "../style"
import {stats} from '../constants'
function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
      {stats?.map(stat=>{
      const {id,value ,title} = stat
       return <div  key={id} className={`flex-1 flex justify-start items-center m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{title}</p>
        </div>
      })}
    </section>
  )
}

export default Stats