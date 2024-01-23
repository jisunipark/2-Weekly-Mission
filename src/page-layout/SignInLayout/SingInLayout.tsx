import { ReactNode } from "react";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignInLayoutProps = {
  header: ReactNode;
  form: ReactNode;
  social: ReactNode;
};

export const SignInLayout = ({ header, form, social }: SignInLayoutProps) => {
  return (
    <div className={cx("auth-page")}>
      <div className={cx("container")}>
        {header}
        {form}
        <div className={cx("social")}>{social}</div>
      </div>
    </div>
  );
};
