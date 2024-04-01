import Image from "next/image"
import logo from "/public/logo.png"
import burger from "/public/HamburgerMenu.svg"

export default function Header(){
  return (
    <header className="flexRow spaceAround alignCenter bg-blue-500 sticky top-0">
      <div className="flexRow centerAll w-full">
        <Image
          src={logo}
          width={96}
          height={64}
          alt="Logo du festival Zikos"
        />
      </div>
      <div className="flex flex-row justify-center bg-slate-700 h-fit w-fit py-2 px-3 text-m items-center rounded-xl absolute right-3">
        <Image
          src={burger}
          width={30}
          height={30}
          alt="Menu Hamburger"
        />
      </div>
      <div className="hidden w-2/6 spaceAround">
        <a>ACCUEIL</a>
        <a>INFORMATIONS</a>
        <a>PROGRAMMATION</a>
        <a>CARTE INTERACTIVE</a>
      </div>
    </header>
  );
}