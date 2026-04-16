export default function Toast({ message, color = "green" }) {
  const colors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
  };

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-9999 ${colors[color]} text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium`}
    >
      {message}
    </div>
  );
}