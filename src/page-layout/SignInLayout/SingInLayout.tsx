import { ReactNode } from "react";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignInLayoutProps = {
  header: ReactNode;
  email: ReactNode;
  password: ReactNode;
  cta: ReactNode;
  social: ReactNode;
};

export const SignInLayout = ({
  header,
  email,
  password,
  cta,
  social,
}: SignInLayoutProps) => {
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
        {cta}
        <div className={cx("social")}>{social}</div>
      </div>
    </div>
  );
};
