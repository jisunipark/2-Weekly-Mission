import classNames from "classnames/bind";
import styles from "./SignInForm.module.scss";
import { useState } from "react";
import { SignInInput } from "auth/ui-signin-input/SignInInput";
import { Cta } from "sharing/ui-cta/Cta";
import { createSubmit } from "../../api/api";
import { INITIAL_VALUES } from "./constant";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export const SignInForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSubmit(values);
    try {
      setValues(INITIAL_VALUES);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={cx("section")}>
        <label>이메일</label>
        <SignInInput
          placeholder="이메일을 입력해 주세요"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className={cx("section")}>
        <label>비밀번호</label>
        <SignInInput
          placeholder="비밀번호를 입력해 주세요"
          password
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <Cta>로그인</Cta>
    </form>
  );
};
