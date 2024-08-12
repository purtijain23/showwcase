import React from "react";
const trendingData = [
  {
    question: "Why Accurate Code Similarity Detection Matters?",
    head: "Codequiry",
    views: "9 views",
  },
  {
    question: "Why Accurate Code Similarity Detection Matters?",
    head: "Codequiry",
    views: "9 views",
  },
  {
    question: "Why Accurate Code Similarity Detection Matters?",
    head: "Codequiry",
    views: "9 views",
  },
  {
    question: "Why Accurate Code Similarity Detection Matters?",
    head: "Codequiry",
    views: "9 views",
  },
  {
    question: "Why Accurate Code Similarity Detection Matters?",
    head: "Codequiry",
    views: "9 views",
  },
  {
    question: "Why Accurate Code Similarity Detection Matters?",
    head: "Codequiry",
    views: "9 views",
  },
];

const Trending = () => {
  return (
    <>
      <div className="row mx-0 border border-gray trending">
        <div className="col-12 ">
          <h5 className="pt-4 pb-2 px-2">Trending on Showwcase</h5>
          <div className="px-1">
            {trendingData.map((items) => (
              <>
                <div className="py-1 tr px-2">
                  <p className="mb-0">{items.question}</p>
                  <h6 className="py-1">
                    {items.head}
                    <span className="mb-0 px-3">.</span>
                    {items.views}
                  </h6>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
