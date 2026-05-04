import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/assets/icon";
import "@/css/search.model.css";

function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleBlur = () => {
    // Chỉ đóng nếu không có value
    if (!searchValue.trim()) {
      setIsOpen(false);
    }
  };

  return (
    <div className="search-container">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="icon"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="search-button"
          >
            <Icon name="icon-search" />
          </motion.button>
        ) : (
          <motion.div
            key="input"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="search-input-wrapper"
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              autoFocus
              className="search-input"
              onChange={(e) => setSearchValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Xử lý search
                  console.log("Search:", e.currentTarget.value);
                  //   setIsOpen(false);
                }
              }}
            />
            <Icon name="icon-search" className="search-input-icon" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchButton;
