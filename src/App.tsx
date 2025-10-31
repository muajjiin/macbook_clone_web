import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center py-10">
        <h1 className="text-2xl">Welcome to MacBook Clone</h1>
      </div>
    </div>
  );
};

export default App;
