import { h } from "preact";

const Domain = () => {
  return (
    <div
      className="w-full border border-white shadow-lg rounded"
      style={{ backgroundColor: "#3a3e4d" }}
    >
      <a href="https://genshin-impact.fandom.com/wiki/Hidden_Palace_of_Lianshan_Formula">
        <div className="w-full p-4 bg-white font-bold text-black flex flex-row">
          <img
            src="/assets/game/domain.png"
            className="inline mr-2 pointer-events-none object-contain"
          />

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-lg">Hidden Palace of Lianshan Formula</div>
            <div className="text-xs text-gray-600">Domain of Forgery</div>
          </div>
        </div>
      </a>

      <div className="p-4">Mona, Lisa</div>
    </div>
  );
};

export default Domain;