import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>find a better car deal <br className='sm:block hidden' />
          easy staps.
        </h2>
        <p  className={`${styles.paragraph} max-[470px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium consectetur possimus quam deleniti consequatur nobis beatae vel. Magni nam dolor aliquid, maiores quidem corrupti. Error nostrum assumenda ad? Illo.</p>
        <Button style="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />
      </div>
    </section>
  )
}

export default CardDeal