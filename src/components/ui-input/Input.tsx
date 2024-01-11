import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type InputProps = {
  password: boolean;
};

export const Input: any = ({ password }: InputProps) => {
  const inputType = password ? "password" : "email";

  // 타입별 placeholder
  const setPlaceholder: any = () => {
    if (inputType === "password") {
      return "비밀번호를 입력해 주세요";
    } else if (inputType === "email") {
      return "codeit@codeit.com";
    }
  };

  const placeholder = setPlaceholder();

  // focus 시 파란 테두리
  // const handleFocus = (e: any) => {
  //   e.target.classList.add("focused"); // TODO 클래스 추가 어떻게 해야 할지
  // };

  // 빨간색 테두리와 에러메세지
  // const showError = () => {
  //   if (input)
  // }

  return (
    <>
      <input
        className={cx("input")}
        type={inputType}
        placeholder={placeholder}
        // onFocus={handleFocus}
      />
      <p className={cx("error-message")}>에러 메세지</p>
    </>
  );
};
