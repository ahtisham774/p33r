import Image from "next/image";
import logo from "../../assets/logo1.png"


export function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b backdrop-blur-sm">
        <div className="container flex items-center w-full justify-between mx-auto px-4">
            <div className="flex items-center w-fit">
                <div className="flex items-center space-x-4 ml-auto">
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                    About Us
                    </a>
                </div>
            </div>
          <div className="flex items-center flex-1 justify-center">
            <Image
              src={logo}
              width={200}
              height={50}
              alt="P33R Logo"
  
              className="h-16 -ml-20 mix-blend-multiply"
            />
          </div>
        </div>
      </nav>
    )
  }
  
  