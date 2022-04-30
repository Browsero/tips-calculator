import TipsCard from "./components/TipsCard";

function App() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 md:max-w-2xl md:mx-auto">
      <div className="text-4xl">
        <h1 className="font-bold text-very-dark-cyan tracking-widest">
          SPLI
        </h1>
        <h1 className="font-bold text-very-dark-cyan tracking-widest">
          TTER
        </h1>
      </div>
      <TipsCard />
    </div>
  );
}

export default App;
