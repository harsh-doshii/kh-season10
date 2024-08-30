import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [{ name: "Home", href: "/home" }];

export default function Navbar() {
  return (
    <div className="w-full max-w-7xl mt-5 mx-auto items-center justify-between px-5 sm:px-6 py5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="logo" priority />
        </Link>
      </div>
    </div>
  );
}
