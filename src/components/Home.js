import React, { useState, useContext } from "react";
import { CommerceContext } from "../context/Commerce";

const Home = () => {
  const { item, category, changeCategory, filteredCategory } =
    useContext(CommerceContext);
  //   console.log(item);
  const [main, setMain] = useState(true);
  const [baslik, setbaslik] = useState("");
  const handleChange = (categoryItem) => {
    setbaslik(categoryItem);
    changeCategory(categoryItem);
    setMain(false);
  };
  const handleChangeHome = () => {
    setMain(true);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
        <div class="container-fluid ">
          <a onClick={handleChangeHome} href="#" class="navbar-brand">
            Anasayfa
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              {category.map((categoryItem, index) => (
                <li class="nav-item">
                  <a
                    onClick={() => handleChange(categoryItem)}
                    key={index}
                    class="navbar-brand btn text-light"
                    style={{ textTransform: "capitalize" }}
                  >
                    {categoryItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="navbar navbar-light bg-light p-3">
        <div>
          {main ? (
            "Anasayfa"
          ) : (
            <div style={{ textTransform: "capitalize" }}>
              {" "}
              Anasayfa {">"} <b> {baslik}</b>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="container text-center p-2 ">
          {main ? (
            ""
          ) : (
            <div>
              {" "}
              <b style={{ textTransform: "capitalize" }}>{baslik}</b> kategorisi
              içerisindeki ürünler sergileniyor
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <div className="list d-flex">
          <div>
            <div className="dropdown d-grid gap-2 col-6 ">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                En son eklenenlere göre
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="dropdown d-grid gap-1 col-6 ">
              <button
                class="button btn  btn-light dropdown-toggle mx-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tüm ürünler
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div className="row">
          {main
            ? item.map((items) => (
                <div className="col-xl-4 col-sm-12">
                  <div
                    className="card text-center  d-flex flex-column align-items-center justify-content-center mt-3 mb-3"
                    style={{ minHeight: 300 }}
                  >
                    <img
                      src={items?.image}
                      className="card-img-top center img-fluid mt-2"
                    />
                    <p className="card-text">
                      {items?.title}
                      <h5 className="card-title">{items?.price}$</h5>
                    </p>
                  </div>
                </div>
              ))
            : filteredCategory.map((items) => (
                <div className="col-xl-4 col-sm-12 text-center">
                  <div
                    className="card text-center mt-3 mb-3 d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 300 }}
                  >
                    <img
                      src={items?.image}
                      className="card-img-top center img-fluid mt-2"
                      alt="..."
                    />
                    <p className="card-text">
                      {items?.title}
                      <h5 className="card-title">{items?.price}$</h5>
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
