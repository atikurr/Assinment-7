import SummaryCard from './SummaryCard';

export default function StatsSummary({ total, onTrack, needAttention, interactions }) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <SummaryCard label="Total Friends" value={total} />
        <SummaryCard label="On Track" value={onTrack} />
        <SummaryCard label="Need Attention" value={needAttention} />
        <SummaryCard label="Interactions This Month" value={interactions} />
      </div>
    </div>
  );
}