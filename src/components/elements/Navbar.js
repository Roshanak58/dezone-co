import Link from "next/link";

import { TiHomeOutline } from "react-icons/ti";
import { MdWaterDrop } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const { status } = useSession();
  const logoutHandler = () => {
    signOut();
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="navbarWrapper">
      {/* <nav className="navbar"> */}
      <nav className={`navbar ${open ? "open" : ""}`}>
        <ul className={`menu ${open ? "open" : ""}`}>
          <li>
            <TiHomeOutline />
            <Link className="fontLink" href="/" onClick={() => setOpen(!open)}>
              خانه
            </Link>
          </li>
          <li>
            <FaPeopleRoof />
            <Link
              className="fontLink"
              href="/aboutus"
              onClick={() => setOpen(!open)}
            >
              درباره ما{" "}
            </Link>
          </li>

          <li>
            <MdWaterDrop />
            <Link
              className="fontLink"
              href="/services"
              onClick={() => setOpen(!open)}
            >
              خدمات ما{" "}
            </Link>
          </li>

          <li>
            <MdConstruction />
            <Link
              className="fontLink"
              href="/projects"
              onClick={() => setOpen(!open)}
            >
              پروژه ها{" "}
            </Link>
          </li>

          <li>
            <IoCallOutline />
            <Link
              className="fontLink"
              href="/contactus"
              onClick={() => setOpen(!open)}
            >
              تماس با ما{" "}
            </Link>
          </li>
          <li>   </li>
          <li>   </li>
          <li>   </li>
          <li>
            <div className="lang">
              <Link href="/">En</Link>/<Link href="/">fa</Link>
            </div>
          </li>
          <li>
            <div>
              {status === "authenticated" ? (
                <div>
                  <button className="buttonClass" onClick={logoutHandler}>
                    <FiLogOut />
                    <span className="overlayText">خروج</span>{" "}
                  </button>
                </div>
              ) : (
                <Link href="/signin">
                  <h4>ورود</h4>
                </Link>
              )}
            </div>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <a>منو</a>
      </div>
    </div>
  );
}

export default Navbar;
