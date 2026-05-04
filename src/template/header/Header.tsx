"use client";
import React, { useRef, useState } from "react";
import "@/css/header.model.css";
import Icon from "@/assets/icon";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import Language from "./Language";
import Contact from "./Contact";
import { dataMenu, dataSocialNetwork } from "./type";
import Link from "next/link";
import { PathName } from "@/router/path";

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);
  const [scrollButton, setScrollButton] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const headerHeight = headerRef.current?.offsetHeight || 122;

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 100) {
      setHidden(true);
      setScrollButton(true);
    } else if (current < previous) {
      setHidden(false);
      setScrollButton(false);
    } else if (current <= 50) {
      setHidden(false);
    }
  });

  const handleToogleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        animate={{
          y: hidden ? -headerHeight : 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className={`header header-sticky ${showMenu ? "show-menu-sub" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.3,
          }}
          className="header-menu-sub my-container"
        >
          <Language />
          <div className="icon-logo">
            <Link href={PathName.HOME}>
              <Icon name="icon-logo" />
              <h5 className="header-menu_item-title">MINH PHÚ SOFA FACTORY</h5>
            </Link>
          </div>
          <Contact handleToogleMenu={handleToogleMenu} showMenu={showMenu} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.3,
            delay: 0.2,
          }}
          className="header-menu my-container  none-mobile"
        >
          <div className="header-menu_item">
            {dataMenu.slice(0, 3).map((i) => (
              <motion.div key={i.name} className="">
                <Link href={i.path}>{i.name}</Link>
              </motion.div>
            ))}
          </div>
          <h5 className="header-menu_item-title">MINH PHÚ SOFA FACTORY</h5>
          <div className="header-menu_item">
            {dataMenu.slice(3, dataMenu.length).map((i) => (
              <motion.div key={i.name} className="">
                <Link href={i.path}>{i.name}</Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {showMenu && (
            <motion.div
              className="contact-sub"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "91dvh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="">
                <div className="header-menu-mobile">
                  {dataMenu.map((i) => (
                    <Link key={i.name} href={i.path}>
                      <span>{i.name}</span>

                      <span className="header-menu-mobile__icon">
                        <Icon name="icon-arrow" />
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="header-menu-mobile__contact">
                  <h3>Catalogues</h3>
                  <h3>Liên hệ</h3>
                </div>
              </div>

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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="contact-social-network">
        {dataSocialNetwork.map((i) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={i.name}
          >
            <Link
              href={i.path}
              className={`contact-social-network__link ${i.color}`}
            >
              <Icon name={i.icon} />
            </Link>
          </motion.div>
        ))}

        <AnimatePresence>
          {scrollButton && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="contact-social-network__link button-scroll-top"
              initial={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollTop}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="icon-arrow" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Header;
