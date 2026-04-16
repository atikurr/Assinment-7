import { useNavigate } from "react-router-dom";
import "./FriendCard.css";

const statusClass = {
  overdue: "badge overdue",
  "almost due": "badge almostDue",
  "on-track": "badge onTrack",
};

const statusLabel = {
  overdue: "Overdue",
  "almost due": "Almost Due",
  "on-track": "On-Track",
};

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/friend/${friend.id}`)} className="card">
      <img src={friend.picture} alt={friend.name} className="photo" />
      <h3 className="name">{friend.name}</h3>
      <p className="days">{friend.days_since_contact}d ago</p>
      <div className="tags">
        {friend.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
      <span className={statusClass[friend.status]}>
        {statusLabel[friend.status]}
      </span>
    </div>
  );
}