import React from "react";
const remoteJobs = [
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
  {
    head: "Associate Refresh Editor",
    para: "HomeLight",
    time: "Full Time",
  },
];

const Remotejobs = () => {
  return (
    <>
      <div className="row mx-0 my-3 remote border border-gray">
        <div className="col-12">
          <h5 className="pt-4 pb-3 px-2">Remote Jobs</h5>
          <div className="px-2">
            {remoteJobs.map((items) => (
              <>
                <div className="d-flex py-2 re px-2">
                  <img src="/assets/logo.png" height="45vh" className="mx-0"/>
                  <div className="ps-2">
                    <h6 className="mb-0">{items.head}</h6>
                    <p className="text-secondary">
                      {items.para}
                      <span className="p-3">.</span>
                      {items.time}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Remotejobs;
