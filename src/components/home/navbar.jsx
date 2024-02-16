import navLogo from "@/assets/dimas-logo.jpg";
import Image from "next/image";
function Navbar() {
  return (
    <div className="navbar text-black border-b bg-gray-100 border-gray-300 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 text-black rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Summary</a>
              <ul className="p-2">
                <li>
                  <a>Portofolio</a>
                </li>
                <li>
                  <a>About Me</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Social Media</a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl flex gap-2 items-center hover:bg-transparent"
          href="/"
        >
          <Image
            src={navLogo}
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-black italic">Dimas</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3 text-[17px]">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Summary</summary>
              <ul className="p-3 bg-gray-200 w-[150px] text-black">
                <li>
                  <a>Portofolio</a>
                </li>
                <li>
                  <a>About Me</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Social Media</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="px-2 py-1 rounded-md text-black hover:text-gray-100 hover:bg-base-200 font-bold transition duration-150">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
