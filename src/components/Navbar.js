import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand">
              <i class="bi bi-facebook "></i>
            </a>
            <a class="navbar-brand">
              <i class="bi bi-twitter"></i>
            </a>
            <a class="navbar-brand">
              <i class="bi bi-instagram"></i>
            </a>
            <a class="navbar-brand">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
          <div>
            <button type="button" class="btn btn-light">
              Yardım
            </button>
            <button type="button" class="btn btn-danger border-0">
              Blog
            </button>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid d-flex">
          <div>
            <a class="navbar-brand btn text-danger">Karma</a>
          </div>
          <div>
            <form class="d-flex">
              <input
                class="form-control input "
                type="search"
                placeholder="Ne aramıştınız"
                aria-label="Search"
              />
              <button class="btn btn-danger" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="p-1">
            <a href="" className="navbar-brand mx-1 ">
              <i class="bi bi-person-circle fs-3"></i>
            </a>
            <a href="" className="navbar-brand ">
              <i class="bi bi-cart-fill fs-3"></i>
            </a>
          </div>
        </div>
        {/* <div></div> */}
      </nav>
    </nav>
  );
};

export default Navbar;
