"use client"
import { styles } from "../styles"; 
import { staggerContainer } from "@/utils/motion";
import { MotionSection } from "../motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <MotionSection
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </MotionSection>
    );
  }; 

export default StarWrapper;
