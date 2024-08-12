import React from "react";

const Nav = () => {
  return (
    <>
      <div className="row mx-0 nav">
        <div className="col-12 py-3 border border-gray">
          <div className="d-flex">
            <i className="fa fa-bars px-3 pt-3" />
            <h6 className="a px-3 pt-2">Home</h6>
            <h6 className="a px-3 pt-2">Jobs</h6>
            <h6 className="a px-3 pt-2">Community</h6>
            <h6 className="a px-3 pt-2">Explore</h6>
            <div className="mx-auto">
              <h5 className="pt-2">SHOWWCASE</h5>
            </div>
            <div className="ms-auto">
              {/* <div class="dropdown"> */}
                <button
                  class=" btn dropdown-toggle bg-white text-dark"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Employers
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              {/* </div> */}
              <button
                type="button"
                className="mx-2 btn btn-secondary px-4 py-2 bg-light text-dark"
              >
                Login
              </button>
              <button
                type="button"
                className="px-3 py-2 bg-dark text-light btn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
