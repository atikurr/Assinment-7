import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // Timeline
  const [timeline, setTimeline] = useState(() => {
    const savedTimeline = localStorage.getItem('keen_timeline');
    return savedTimeline ? JSON.parse(savedTimeline) : [];
  });

  
  const [toast, setToast] = useState(null);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/friends.json')
        .then((res) => res.json())
        .then((data) => {
          setFriends(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching friends:", err);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  
  const addTimelineEntry = (entry) => {
    setTimeline((prev) => {
      const updated = [entry, ...prev];
      localStorage.setItem('keen_timeline', JSON.stringify(updated));
      return updated;
    });
  };

  const showToast = (message, color = "green") => {
    setToast({ message, color });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const value = {
    friends,
    timeline,
    loading,
    addTimelineEntry,
    toast,
    showToast,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;