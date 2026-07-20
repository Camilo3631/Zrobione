import "./App.css";
import underConstruction from "./assets/under_construction.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-orange-600 flex flex-col items-center justify-center">
      <img
        src={underConstruction}
        alt="Construcción"
        className="mb-8"
        className="mt-8"
        style={{ maxWidth: "900px" }}
      />

      <h1 className="text-5xl font-bold text-white mb-4 text-center">
        Estamos en Obra
      </h1>

      <p className="text-xl text-white mb-8 text-center max-w-md">
        Zrobione está siendo construido. Vuelve pronto para ver algo increíble.
      </p>

      <div className="text-white text-sm opacity-75 text-center">
        <p>Gracias por tu paciencia</p>
      </div>
    </div>
  );
}

export default App;