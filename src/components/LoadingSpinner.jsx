export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6 bg-[#F8FAFC]">

      {/* Spinning Circle */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#244D3F] animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-[#244D3F] rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="text-sm text-gray-400 font-medium tracking-wide">Loading friends...</p>
      </div>

      {/* Skeleton Cards */}
      <div className="w-full max-w-7xl px-6">

        {/* Heading skeleton */}
        <div className="h-7 w-36 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-3"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-4 w-28 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-3 w-16 bg-gray-100 rounded-full animate-pulse"></div>
              <div className="flex gap-2">
                <div className="h-5 w-14 bg-gray-100 rounded-full animate-pulse"></div>
                <div className="h-5 w-14 bg-gray-100 rounded-full animate-pulse"></div>
              </div>
              <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}