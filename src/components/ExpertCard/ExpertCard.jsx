import { FaShareNodes } from "react-icons/fa6";

const ExpertCard = () => {
  return (
    <div>
        <div >
            <h2 className="text-xl md:text-5xl fontBricolage font-bold text-center mb-10 animate__animated animate__backInDown mt-10">Meet Our  <span className="text-[#F8721F] fontPacifico">Pets</span> Expert</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* expert 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center relative">
          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/23ZKfkt3/photo-1615592704797-3f3e0498b958.jpg" // replace with your image URL
              alt="Profile"
              className="rounded-xl w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-95"
            />

            {/* Rating badge */}
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow">
              ⭐ 4.9
            </div>
          </div>

          {/* Info */}
          <div className="text-center mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Shihab Kabir
            </h3>
            <p className="text-sm text-gray-500">Pet Expert</p>
          </div>

          {/* Share icon */}
          <button className="absolute bottom-3 right-3 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition">
            <FaShareNodes size={16} className="text-orange-500" />
          </button>
        </div>
        {/* expert 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center relative">
          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/yF3Z0Dz8/photo-1596058939740-516d0d71f3d4.jpg"
              alt="Profile"
              className="rounded-xl w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-95"
            />

            {/* Rating badge */}
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow">
              ⭐ 4.9
            </div>
          </div>

          {/* Info */}
          <div className="text-center mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Sifat Rahman
            </h3>
            <p className="text-sm text-gray-500">Pet Expert</p>
          </div>

          {/* Share icon */}
          <button className="absolute bottom-3 right-3 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition">
            <FaShareNodes size={16} className="text-orange-500" />
          </button>
        </div>
        {/* expert 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center relative">
          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/zHNChXyF/photo-1619451683243-b629e920805d.jpg"
              alt="Profile"
              className="rounded-xl w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-95"
            />

            {/* Rating badge */}
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow">
              ⭐ 4.9
            </div>
          </div>

          {/* Info */}
          <div className="text-center mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Tahzia Prona
            </h3>
            <p className="text-sm text-gray-500">Pet Expert</p>
          </div>

          {/* Share icon */}
          <button className="absolute bottom-3 right-3 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition">
            <FaShareNodes size={16} className="text-orange-500" />
          </button>
        </div>
        {/* expert 4 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center relative">
          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/S4dR5d4g/photo-1712804671163-15727f817c89.jpg"
              alt="Profile"
              className="rounded-xl w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-95"
            />

            {/* Rating badge */}
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow">
              ⭐ 4.9
            </div>
          </div>

          {/* Info */}
          <div className="text-center mt-3">
            <h3 className="text-lg font-semibold text-gray-800">Iqbal Karim</h3>
            <p className="text-sm text-gray-500">Pet Expert</p>
          </div>

          {/* Share icon */}
          <button className="absolute bottom-3 right-3 bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition">
            <FaShareNodes size={16} className="text-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
