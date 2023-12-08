import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/framerAnimations";
import { AiFillGithub, AiFillLinkedin , AiFillBehanceCircle , AiOutlineDownload } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export const Socials = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 flex flex-col gap-8 text-xl text-neutral-400"
      {...fadeInAnimation}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Link href="https://github.com/subhanabdi" target="blank">
        <AiFillGithub className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://www.linkedin.com/in/subhan-abidi-front-end-developer/" target="blank">
        <AiFillLinkedin className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://www.behance.net/subhanabid1ea4n" target="blank">
        <AiFillBehanceCircle className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://matching.turing.com/developer-resume-preview/76ade02e3a0f47ea54b8b01523f70c905b9ee42f36f5" target="blank">
        <AiOutlineDownload className="transition-all duration-300 hover:scale-125" />
      </Link>

      <Link href="https://twitter.com/AbidiSubhan" target="blank">
        <FaXTwitter className="transition-all duration-300 hover:scale-125" />
      </Link>
    </motion.div>
  );
};
