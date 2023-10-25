import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex bg-slate-200 p-3 flex-row items-center justify-between">
      <h1 className="text-black font-black text-3xl">Home</h1>
      <Link to={"/my-portfolio-gamified"}>
        <button className="px-3 py-2 border-2 border-solid border-blue-800 bg-blue-800 text-white font-semibold text-md shadow-md shadow-blue-300 rounded-md">
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default Home;
