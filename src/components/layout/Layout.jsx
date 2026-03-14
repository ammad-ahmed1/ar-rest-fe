import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-[95px] md:h-[110px] lg:h-[90px] xl:h-[90px]" />

      {/* Main Content */}
      <main className="flex-1 w-full bg-background">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;