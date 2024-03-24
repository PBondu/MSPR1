import Image from "next/image"
import logo from "/public/logo.png"
import burger from "/public/HamburgerMenu.svg"

export default function Header(){
  return (
    <header className="flexRow spaceAround alignCenter bg-blue-500">
      <div className="flexRow centerAll w-2/6">
        <Image
          src={logo}
          width={96}
          height={64}
          alt="Logo du blog de voyage"
        />
      </div>
      <div className="flexRow centerAll w-1/2">
        <h1 className="text-2xl font-bold text-white">Zikos</h1>
      </div>
      <div className="w-1/6 flex centerAll">
        <Image
          src={burger}
          width={40}
          height={40}
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