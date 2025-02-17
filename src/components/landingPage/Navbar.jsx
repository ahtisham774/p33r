import Image from "next/image";
import logo from "../../assets/logo.jpg"
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 border-b backdrop-blur-sm">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-center">
          <Link
            href="/"
          >
            <Image
              src={logo}
              width={100}
              height={50}
              alt="P33R Logo"
              className="h-8 mix-blend-multiply"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

