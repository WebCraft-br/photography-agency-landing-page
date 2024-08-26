import { NAV_LINKS } from "../../constants";

import Link from "next/link";
import  Button  from "./ui/button";

import { MdArrowForward } from 'react-icons/md';
const Navbar = () => {
  return (
    <nav className=" navbar flexBetween max-container padding-container relative z-30 py-5">
    <div className="flex items-center space-x-2">
  <Link href="/">
    <img src="./logo.png" alt="CREACY" width={44} height={20} />
  </Link>
  <p className="text-white mb-2">CREACY</p>
</div>

<ul className="hidden h-10 gap-4 lg:flex border border-gray-200 rounded-[18px] p-4">
  {NAV_LINKS.map((link, index) => (
    <li key={link.key} className="flex items-center">
      <Link
        href={link.href}
        className={`regular-16 text-white flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-gray-600 rounded-sm px-4 py-1 border-transparent hover:border-gray-400 ${index < NAV_LINKS.length - 1 ? 'pr-4' : ''}`}
      >
        {link.label}
      </Link>
      {/* Add a vertical line */}
      {index < NAV_LINKS.length - 1 && (
        <div className="w-[2px] h-6 bg-gray-400 mx-2"></div> 
      )}
    </li>
  ))}
</ul>
      <div className="lg:flexCenter hidden">
          <Button 
          type="button"
          title="BOOK A CALL"
          
          variant="btn_dark_green"
         
          />
        <div className="bg-white rounded-[20px] w-10 h-10 flex items-center justify-center">
    <MdArrowForward size={24} color="#000000" />
  </div>
      </div>
    
    </nav>
  );
};

export default Navbar;
