"use client";
import Icon from "@/assets/icon";
import SearchButton from "@/components/search/SearchButton";
import "@/css/contact.model.css";
import { PathName } from "@/router/path";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Contact({
  handleToogleMenu,
  showMenu,
}: {
  handleToogleMenu: () => void;
  showMenu: boolean;
}) {
  return (
    <div className="contact">
      <h3 className="none-mobile">Catalogues</h3>
      <div className="contact-separation none-mobile" />
      <Link href={PathName.CONTACT} className="contact-link">
        <h3 className="none-mobile">Liên hệ</h3>
      </Link>
      <div className="contact-separation none-mobile" />
      <SearchButton />
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-menu-header"
        onClick={handleToogleMenu}
      >
        <AnimatePresence mode="wait">
          {showMenu ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="icon-close" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="icon-menu" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Contact;
