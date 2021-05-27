import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const handelClick = (e) => {
    setPage(parseInt(e));
  };

  const handelPageToggole = (toggoleBtn) => {
    const diraction = toggoleBtn.target.dataset.diraction;

    if (diraction === "next" && page < data.length - 1) {
      setPage((preVal) => {
        return preVal + 1;
      });
    } else if (diraction === "prev" && page > 0) {
      setPage((prevVal) => {
        return prevVal - 1;
      });
    }
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading" : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="btn-container">
          <div
            className="prev-btn"
            data-diraction="prev"
            onClick={handelPageToggole}
          >
            Prev
          </div>
          {!loading &&
            data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : ""}`}
                  onClick={() => handelClick(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          <div
            className="next-btn"
            data-diraction="next"
            onClick={handelPageToggole}
          >
            next
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
