export default function Billeterie() {

  return (
    <div className="flex flex-col justify-around items-center h-60 py-5 bg-blue-500 text-white">
      <a className="flex flex-col justify-center items-start bg-slate-700 w-fit h-fit p-2 text-2xl text-white rounded-xl" href="https://www.ticketmaster.fr/fr/festival">ACHAT BILLETS</a>
      <img className="h-12" src="./arrow-up-solid.svg" alt="flèche pointant vers le lien de billetterie" />
      <p className="text-lg text-center px-4">Réservez vite vos places sur notre plateforme partenaire en y accèdant par le lien ci-dessus</p>
    </div>
  )
}