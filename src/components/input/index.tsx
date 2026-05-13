import { Func } from "@/types/global";
import React from "react";
import "@/css/input.model.css";

function Input({
  handleChange,
  value,
  placeholder,
  title,
  requi,
  type = "text",
  name,
}: {
  handleChange: any;
  value: string;
  placeholder: string;
  title: string;
  requi?: boolean;
  type?: React.HTMLInputTypeAttribute | "textarea";
  name: string;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const forbiddenKeys = ["e", "E", "+", "-"];
      if (forbiddenKeys.includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const pastedText = e.clipboardData.getData("text");
      if (/[eE\+-]/.test(pastedText)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="input-form__field">
      <label htmlFor={title}>
        {title} {requi && <span style={{ color: "#EF2020" }}>*</span>}
      </label>

      {type === "textarea" ? (
        <textarea name={name} id={title} placeholder={placeholder}/>
      ) : (
        <input
          id={title}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onPaste={handlePaste}
          inputMode={type === "number" ? "numeric" : "text"}
        />
      )}
    </div>
  );
}

export default Input;
