'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavIsOpen] = useState(false);

  return (
    <>
      <div className="h-16 md:h-20 lg:h-24 flex justify-between items-center px-5 mb-8">
        <div className="flex gap-2 items-center text-xl">
          <div className="cursor-pointer" onClick={(prev) => setMobileNavIsOpen(!prev)}>
            {isMobileNavOpen ? <AiOutlineClose /> : <HiMenu />}
          </div>
          <h1>INMOBALIZE</h1>
        </div>
        <div className="hidden md:flex gap-4">
          <Link href={'/auth/login'} className="hover:underline">
            Log in
          </Link>
          <Link href={'/auth/register'} className="hover:underline">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
