import React from "react";
import "@/css/footer.model.css";
import Icon from "@/assets/icon";
import { dataMenu } from "../header/type";
import Link from "next/link";
import { dataFooterContact, dataSocialNetwork } from "./type";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Icon name="icon-logo" />
        <h4>MINH PHÚ SOFA FACTORY</h4>
      </div>

      <div className="footer-menu">
        {dataMenu.map((i) => (
          <Link key={i.name} href={i.path}>
            <span>{i.name}</span>

            <span className="footer-menu__icon">
              <Icon name="icon-arrow" />
            </span>
          </Link>
        ))}
      </div>

      <div className="footer-contact">
        <div className="footer-contact__local">
          {dataFooterContact.map((i) => (
            <div className="footer-contact__local-item" key={i.name}>
              <div className="footer-contact__local-item--title">
                <Icon name={i.icon} />
                <h4>{i.name}</h4>
              </div>
              <p>{i.local}</p>
              <p>Số điện thoại: {i.phone}</p>
              <Link className="footer-contact__local-item--map" href={i.name}>
                <div className="footer-contact__local-item--map-icon">
                  <Icon name="icon-map" />
                </div>
                <span>Xem trên Google Maps</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="footer-contact__email-hotline">
          <div className="footer-contact__email-hotline--sub">
            <div className="footer-contact__email">
              <span>email</span>
              <p>sale@sofaminhphu.vn</p>
            </div>
            <div className="footer-contact__phone">
              <span>hotline</span>
              <p>0925.36.28.28</p>
            </div>
          </div>

          <div className="footer-contact__email-hotline--pagination" />

          <div className="footer-contact__content">
            <div className="footer-contact__content-connect">
              <span>Kết nối với</span>
              <p>MINH PHÚ SOFA FACTORY</p>
            </div>

            <div className="footer-contact__content-connect--pagination" />

            <div className="footer-contact__content-social--network">
              {dataSocialNetwork.map((i) => (
                <Link
                  key={i.icon}
                  href={i.link}
                  className="footer-contact__content-social--network--item"
                  target="_blank"
                >
                  <Icon name={i.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <h3>
          <span>Bản quyền thuộc về</span> Công Ty TNHH Sản xuất nội thất và
          Thương mại Minh Phú
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
