import { MotionH1, MotionLi, MotionNav, MotionUl } from "../motion";

const CyberNavbar = () => {
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } },
  };

  return (
    <MotionNav
      className=" bg-zinc-900 fixed w-full flex justify-between items-center h-[60px] px-4 text-white z-10 shadow-xl z-20"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionH1 className="text-2xl font-bold" variants={linkVariants}>
        Cyber
      </MotionH1>
      <MotionUl className="hidden md:flex" variants={linkVariants}>
        {["Designing", "About", "Goverment Services", "Programes", "Contact"].map((link, i) => (
          <MotionLi key={i} className="p-4 text-base font-semibold text-zinc-300 cursor-pointer" variants={linkVariants}>
            {link}
          </MotionLi>
        ))}
      </MotionUl>
    </MotionNav>
  );
};

export default CyberNavbar;