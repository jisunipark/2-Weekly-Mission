import styles from "./AuthInput.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { EYEOFF_IMAGE } from "./constant";
import { EYEON_IMAGE } from "./constant";

const cx = classNames.bind(styles);

// type InputProps = {
//   password: boolean;
// };

export const AuthInput = ({ password }) => {
  const initialType = password ? "password" : "email";

  const [inputType, setInputType] = useState(initialType);

  const isInput = inputType === "password" || inputType === "text";
  const placeholder = isInput
    ? "비밀번호를 입력해 주세요"
    : "codeit@codeit.com";

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
    setIsVisible(!isVisible);
    isVisible ? setInputType("password") : setInputType("text");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <div className={cx("container")}>
        <input
          className={cx("input", { focused: isFocused, error: errorMessage })}
          type={inputType}
          placeholder={placeholder}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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
      <p
        className={cx({
          "error-message": errorMessage,
          hidden: errorMessage == false,
        })}
      >
        {errorMessage}
      </p>
    </div>
  );
};
