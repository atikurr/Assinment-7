import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Banner from "../components/Banner";
import StatsSummary from "../components/StatsSummary";
import FriendCard from "../components/FriendCard/FriendCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const { friends, timeline, loading } = useContext(AppContext);
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const overdue = friends.filter((f) => f.status === "overdue").length;

  
  const now = new Date();

  const interactions = timeline.filter((item) => {
    if (!item.date) return false;

    const d = new Date(item.date);

    return (
      !isNaN(d) &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    );
  }).length;

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Banner */}
      <Banner />

      {/* Summary Cards */}
      <StatsSummary 
        total={friends.length} 
        onTrack={onTrack} 
        needAttention={overdue} 
        interactions={interactions} 
      />

      {/* Friend List */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-8">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>

    </div>
  );
}