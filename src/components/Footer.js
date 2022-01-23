import React from "react";


const Footer = () => {
  return (
    <footer class="row bg-light p-2">
      <div class="col">
        <h6>
          <b>Kurumsal</b>
        </h6>
        <br />
        <div>
          <p>Hakkımızda</p>
          <p>Kampanyalar</p>
          <p>Banka Hesap Numaraları</p>
          <p>Blog</p>
          <p>Haberler</p>
        </div>
      </div>
      <div class="col">
        <h6>
          <b>Müşteri Hizmetleri</b>
        </h6>
        <br />
        <div>
          <p>Sipariş Sorgulama</p>
          <p>Talimat ve Kargo</p>
          <p>İade ve Değişim</p>
          <p>Üyelik Sözleşmesi</p>
          <p>Gizlilik ve Güvenlik</p>
        </div>
      </div>

      <div class="col">
        <h6>
          <b>Yardım</b>
        </h6>
        <br />
        <div>
          <p>İletişim Bilgileri</p>
          <p>Sıkça Sorulan Sorular</p>
        </div>
      </div>

      <div class="col">
        <h6>
          <b>İletişim</b>
        </h6>
        <br />
        <div>
          <p>
            <b>Adres:</b>
          </p>
          <p>1376 Sok. No:1/43 Boran Plaza,Halkapınar,Konak,İzmir</p>
          <p>
            <b>Telefon: </b>08505555555
          </p>
        </div>
      </div>

      <div class="col">
        <h6>
          <div className="d-flex">
            <b>Bizi Takip Edin</b>
            <p className="mx-2">
              <a href="">
                <i class="bi bi-whatsapp text-success fs-5"></i>
              </a>{" "}
            </p>
          </div>
        </h6>
        <br />
        <div class="">
          <a class="navbar-brand">
            <i class="bi bi-facebook text-dark"></i>
          </a>
          <a class="navbar-brand">
            <i class="bi bi-twitter text-dark"></i>
          </a>
          <a class="navbar-brand">
            <i class="bi bi-instagram text-dark"></i>
          </a>
          <a class="navbar-brand">
            <i class="bi bi-youtube text-dark"></i>
          </a>
          <p>E-bültene abone olun,gelişmeleri kaçırmayın</p>
          <form action="" className="d-flex">
            <input type="text" />
            <button className="btn btn-danger text-light">
              <i class="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
      <hr />

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Copyright{" "}
                <b>
                  <em>akıllı</em>
                </b>{" "}
                ticaret © 2022. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
