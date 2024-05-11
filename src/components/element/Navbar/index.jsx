import { Link } from "react-router-dom";
import { MenuBar } from "./Menu";



const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <div className="w-full flex shadow-md fixed z-10 h-[70px] bg-white">
      <div className="md:w-[90%] my-0 mx-auto flex justify-between items-center">
        <div className="w-[40%] flex justify-between items-center">
          <Link to="/" className="absolute z-20 left-10 md:left-20 lg:left-32">
            <div className="text-green-500 text-[30px] font-bold">
              <span className="text-cyan-400 font-bold">
                ℂ𝕙𝕖𝕝𝕝-𝔼𝕕𝕦𝕨𝕠𝕣𝕜-𝕣𝕖𝕒𝕔𝕥
              </span>
            </div>
          </Link>

          <MenuBar>Link Tugas</MenuBar>
        </div>
        <div className="hidden  w-[60%] lg:flex items-center justify-end  ">
          <ul className="flex justify-between items-center gap-5">
            <li
              className={`hover:text-red-400 ${
                pathname === "/" ? "text-red-500 text-[18px]" : "text-black"
              } font-bold`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`hover:text-red-400 ${
                pathname === "/lifecycle"
                  ? "text-red-500 text-[18px]"
                  : "text-black"
              } font-bold`}
            >
              <Link to="/lifecycle">lifecycle</Link>
            </li>
            <li
              className={`hover:text-red-400 ${
                pathname === "/form"
                  ? "text-red-500 text-[18px]"
                  : "text-black"
              } font-bold`}
            >
              <Link to="/auth">form-regis</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
