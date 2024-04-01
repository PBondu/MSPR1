export default function SocialMedia() {
  return (
    <div className="flex flex-col justify-around items-center bg-blue-500 h-44">
      <h3 className="text-center pt-3 text-xl text-white">Suivez-nous sur les réseaux sociaux !</h3>
      <ul className="flex flex-wrap justify-around items-center w-1/2 h-28">
        <li className="m-2"><a href="https://fr-fr.facebook.com/"><img className="h-10" src="./facebook.svg" alt="logo facebook" /></a></li>
        <li className="m-2"><a href="https://twitter.com/Accueil"><img className="h-10" src="./twitter.svg" alt="logo twitter" /></a></li>
        <li className="m-2"><a href="https://www.instagram.com/?hl=fr"><img className="h-10" src="./instagram.svg" alt="logo instagram" /></a></li>
        <li className="m-2"><a href="https://www.youtube.com/"><img className="h-10" src="./youtube.svg" alt="logo youtube" /></a></li>
        <li className="m-2"><a href="https://www.snapchat.com/"><img className="h-10" src="./snapchat.svg" alt="logo snapchat" /></a></li>
        <li className="m-2"><a href="https://fr.linkedin.com/"><img className="h-10" src="./linkedin.svg" alt="logo linkedin" /></a></li>
      </ul>
    </div>
  )
}