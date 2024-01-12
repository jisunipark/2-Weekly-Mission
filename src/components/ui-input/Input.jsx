import styles from "./Input.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";

const cx = classNames.bind(styles);

// type InputProps = {
//   password: boolean;
// };

export const Input = ({ password }) => {
  const inputType = password ? "password" : "email";

  const setPlaceholder = () => {
    if (inputType === "password") {
      return "비밀번호를 입력해 주세요";
    } else if (inputType === "email") {
      return "codeit@codeit.com";
    }
  };

  const placeholder = setPlaceholder();

  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (e) => {
    if (!e.target.value) {
      setErrorMessage("내용을 다시 작성해주세요");
    } else {
      setErrorMessage("");
    }
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.addEventListener("focusout", handleError);
  }, []);

  return (
    <>
      <input
        className={cx("input", { focused: isFocused, error: errorMessage })}
        type={inputType}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <p className={cx({ "error-message": errorMessage })}>{errorMessage}</p>
    </>
  );
};
