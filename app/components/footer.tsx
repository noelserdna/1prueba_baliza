import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import { FaTiktok, FaTelegram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white gap-8 py-10">
      <Link className="flex items-center gap-1 cursor-pointer" href={'#'}>
        Volver arriba <AiOutlineArrowUp />
      </Link>
      <div className="flex gap-4">
        <Link href={'/'}>
          <AiOutlineInstagram size={40} />
        </Link>
        <Link href={'/'}>
          <AiFillLinkedin size={40} />
        </Link>
        <Link href={'/'}>
          <AiFillYoutube size={40} />
        </Link>
        <Link href={'/'}>
          <FaTiktok size={40} />
        </Link>
        <Link href={'/'}>
          <FaTelegram size={40} />
        </Link>
        <Link href={'/'}>
          <AiOutlineTwitter size={40} />
        </Link>
        <Link href={'/'}>
          <FaFacebookF size={40} />
        </Link>
      </div>
      <p>Copyright&copy; 2023 Inmobalize </p>
    </div>
  );
};

export default Footer;
