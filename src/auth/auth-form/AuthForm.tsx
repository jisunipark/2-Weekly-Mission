import classNames from "classnames/bind";
import styles from "./AuthForm.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

type AuthFormProps = {
  email: ReactNode;
  password: ReactNode;
  cta: ReactNode;
  onSubmit: any;
};

export const AuthForm = ({ email, password, cta, onSubmit }: AuthFormProps) => {
  let formData = new FormData();
  formData.append();

  return (
    <form method="post" action="/folder">
      <div className={cx("section")}>
        <label>이메일</label>
        {email}
      </div>
      <div className={cx("section")}>
        <label>비밀번호</label>
        {password}
      </div>
      {cta}
    </form>
  );
};
