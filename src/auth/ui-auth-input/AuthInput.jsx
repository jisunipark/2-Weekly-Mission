import styles from "./AuthInput.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  EYEOFF_IMAGE,
  EYEON_IMAGE,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "./constant";

const cx = classNames.bind(styles);

export const AuthInput = ({
  password,
  check,
  input,
  setInput,
  placeholder,
}) => {
  const initialType = password ? "password" : "email";

  const [inputType, setInputType] = useState(initialType);
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // 이메일, 비밀번호 유효성 검사
  const isValidEmail = (input) => {
    return EMAIL_REGEX.test(input) ? true : false;
  };

  const isValidPassword = (input) => {
    return PASSWORD_REGEX.test(input) ? true : false;
  };

  const handleEmailError = (e) => {
    if (!e.target.value) {
      setErrorMessage("이메일을 입력해 주세요");
    } else if (!isValidEmail(e.target.value)) {
      setErrorMessage("올바른 이메일 주소가 아닙니다");
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordError = (e) => {
    if (!e.target.value) {
      setErrorMessage("비밀번호를 입력해 주세요");
    } else if (!isValidPassword(e.target.value)) {
      setInput(e.target.value);
      setErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
    } else {
      setInput(e.target.value);
      setErrorMessage("");
    }
  };

  const handleCheckPasswordError = (e) => {
    if (!e.target.value) {
      setErrorMessage("비밀번호를 입력해 주세요");
    } else if (e.target.value !== input) {
      setErrorMessage("비밀번호가 일치하지 않아요.");
    } else {
      setErrorMessage("");
    }
  };

  const inputRef = useRef();

  useEffect(() => {
    if (!password) {
      inputRef.current?.addEventListener("focusout", handleEmailError);
    } else if (!check) {
      inputRef.current?.addEventListener("focusout", handlePasswordError);
    } else {
      inputRef.current?.addEventListener("focusout", handleCheckPasswordError);
    }
  }, [input]);

  // 비밀번호 보이기/숨기기
  const handlePasswordShown = (e) => {
    setIsVisible(!isVisible);
    isVisible ? setInputType("password") : setInputType("text");
  };

  // input focus시 파란 테두리
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
