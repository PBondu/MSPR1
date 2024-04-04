import Image from "next/image"
import logo from "/public/logo.png"
import burger from "/public/HamburgerMenu.svg"
import DropDown from "./dropDown";

export default function Header() {

  return (
    <header className="flexRow spaceAround alignCenter bg-blue-500 top-0 pr-3">
      <div className="flexRow centerAll w-full">
        <Image
          src={logo}
          width={96}
          height={64}
          alt="Logo du festival Zikos"
        />
      </div>

      <DropDown button={
        <div>
          <Image
            src={burger}
            width={30}
            height={30}
            alt="Menu Hamburger"
          />
        </div>
      }>
        <div className="flex flex-col right-0 absolute w-fit justify-around items-end px-5 mr-4 mt-2 h-56 rounded-lg select-none text-white text-lg bg-slate-700">
          <a href="#accueil">ACCUEIL</a>
          <a href="#prog">PROGRAMMATION</a>
          <a href="#billet">BILLETTERIE</a>
          <a href="#info">INFORMATIONS</a>
          <a href="#follow">NOUS SUIVRE</a>
          <a href="#map">CARTE INTERACTIVE</a>
        </div>
      </DropDown>
    </header>
  );
}