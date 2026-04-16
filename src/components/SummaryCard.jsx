export default function SummaryCard({ label, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center w-full">
      <p className="text-3xl font-bold text-[#244D3F] mb-1">{value}</p>
      <p className="text-sm text-[#64748B]">{label}</p>
    </div>
  );
}