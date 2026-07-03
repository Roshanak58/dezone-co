import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import Breadcrumb from "@/components/elements/Breadcrumb";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

function Layout({ children }) {
  const { status } = useSession();
  const logoutHandler = () => {
    signOut();
  };
  return (
    <div className="container">
      

        <Header />
        
      
      <div className="container--main">
        <main className="content">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
