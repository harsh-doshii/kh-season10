import { ReactNode } from "react";
import Image from "next/image";
import BackgroundImage from "../../public/login.jpg";
import Logo from "../../public/logo.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      {/* <h1>Hello</h1> */}
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="logo"
        width={200}
        height={200}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
}
