import Navbar from "./components/Navbar";
import Router from "./route/Router";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
