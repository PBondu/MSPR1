import Image from "next/image"

export default function Billeterie() {

  return (
    <div className="flex flex-col justify-around items-center h-fit py-5 bg-blue-500 text-white">
      <a className="flex flex-col justify-center items-start bg-slate-700 w-fit h-fit p-2 text-2xl text-white rounded-xl" href="https://www.ticketmaster.fr/fr/festival">ACHAT BILLETS</a>
      <Image width={50} height={50} className="my-3" src="./arrow-up-solid.svg" alt="" />
      <p className="text-lg text-center px-4">Réservez vite vos places sur notre plateforme partenaire en y accèdant par le lien ci-dessus</p>
    </div>
  )
}