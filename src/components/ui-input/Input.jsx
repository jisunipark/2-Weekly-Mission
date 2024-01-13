import styles from "./Input.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { EYEOFF_IMAGE } from "./constant";
import { EYEON_IMAGE } from "./constant";
// import { ReactComponent as EyeOffIcon } from "./eye-off.svg";
// import { ReactComponent as EyeOnIcon } from "./eye-on.svg";

const cx = classNames.bind(styles);

// type InputProps = {
//   password: boolean;
// };

export const Input = ({ password }) => {
  const [inputType, setInputType] = useState("email");

  useEffect(() => {
    if (password) setInputType("password");
  }, []);

  const setPlaceholder = () => {
    if (inputType === "password" || inputType === "text") {
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

  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordShown = (e) => {
    if (isVisible) {
      setIsVisible(!isVisible);
      setInputType("password");
    } else {
      setIsVisible(!isVisible);
      setInputType("text");
    }
  };

  return (
    <>
      <div className={cx("container")}>
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
        {/* {password && <EyeOffIcon />} */}
        {password &&
          (isVisible ? (
            <Image
              src={EYEON_IMAGE}
              width={16}
              height={16}
              alt="비밀번호 보이기 아이콘"
              className={cx("eye-icon")}
              onClick={handlePasswordShown}
            />
          ) : (
            <Image
              src={EYEOFF_IMAGE}
              width={16}
              height={16}
              alt="비밀번호 숨김 아이콘"
              className={cx("eye-icon")}
              onClick={handlePasswordShown}
            />
          ))}
      </div>
      <p className={cx({ "error-message": errorMessage })}>{errorMessage}</p>
    </>
  );
};
