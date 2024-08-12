import React from "react";
const threadData = [
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
  {
    image: "/assets/image 5.png",
    userid: "@reqwed . 1d",
    head: "Temu Coupon $100 Off[ACT200019] For New User",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis odit dicta deserunt corrupti fugit laborum sit mollitia deleniti dolor cum perspiciatis laboriosam temporibus. Iure earum architecto quis fuga accusantium.",
  },
];

const Thread = () => {
  return (
    <>
      <div className="row mx-0 thread">
        <div className="col-12 px-0">
          {threadData.map((items) => (
            <>
              <div className="py-2 px-3 tr">
                <div className="d-flex px-0 ">
                  <img src={items.image} height="40vh" />
                  <h6 className="px-3 pt-1 text-secondary">{items.userid}</h6>
                  <div className="ms-auto">
                    <i className="fa fa-bars text-secondary pt-1" />
                  </div>
                </div>
                <div>
                  <h3>{items.head}</h3>
                  <p className="mb-0 pb-2">{items.description}</p>
                  <a href="#" className="">read more</a>
                </div>
                <img src="/assets/upvote.png" height="30vh" className="mt-2" />
              </div>
              <hr/>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Thread;
