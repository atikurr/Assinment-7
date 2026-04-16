import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
      <div className="max-w-md w-full text-center">

        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-[#1E293B] mb-4 tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-[#2D4F40] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#244033] transition-all shadow-sm"
        >
          <FiArrowLeft />
          Back to Home
        </button>

      </div>
    </div>
  );
}