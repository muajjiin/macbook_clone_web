import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center py-10">
        <h1 className="text-2xl"></h1>
      </div>
    </div>
  );
};

export default App;
