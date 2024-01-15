import { ReactNode } from "react";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignUpLayoutProps = {
  header: ReactNode;
  email: ReactNode;
  password: ReactNode;
  passwordCheck: ReactNode;
  cta: ReactNode;
  social: ReactNode;
};

export const SignUpLayout = ({
  header,
  email,
  password,
  passwordCheck,
  cta,
  social,
}: SignUpLayoutProps) => {
  return (
    <div className={cx("auth-page")}>
      <div className={cx("container")}>
        {header}
        <div className={cx("section")}>
          <label>이메일</label>
          {email}
        </div>
        <div className={cx("section")}>
          <label>비밀번호</label>
          {password}
        </div>
        <div className={cx("section")}>
          <label>비밀번호 확인</label>
          {passwordCheck}
        </div>
        {cta}
        <div className={cx("social")}>{social}</div>
      </div>
    </div>
  );
};
