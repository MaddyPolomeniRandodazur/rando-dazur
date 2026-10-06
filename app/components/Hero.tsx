export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-700 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Découvrez les plus belles randonnées de la Côte d'Azur
        </h1>

        <p className="mt-6 text-xl">
          Randonnées accompagnées au départ de Cannes
        </p>

        <button className="mt-8 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
          Réserver une randonnée
        </button>
      </div>
    </section>
  );
}