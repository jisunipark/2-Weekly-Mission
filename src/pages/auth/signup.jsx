import { useState } from "react";
import { SignUpLayout } from "page-layout/SignUpLayout/SignUpLayout";
// import { AuthInput } from "auth/ui-signin-input/AuthInput";
import { Cta } from "sharing/ui-cta/Cta";
import { AuthHeader } from "auth/ui-auth-header/AuthHeader";
import { AuthSocial } from "auth/ui-auth-social/AuthSocial";

export default function SignUpPage() {
  const [input, setInput] = useState("");

  return (
    <>
      <SignUpLayout
        header={<AuthHeader page="signup" />}
        email={<AuthInput placeholder="이메일을 입력해 주세요" />}
        // password={
        //   <AuthInput
        //     placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
        //     password
        //     setInput={setInput}
        //   />
        // }
        // passwordCheck={
        //   <AuthInput
        //     placeholder="비밀번호와 일치하는 값을 입력해 주세요"
        //     password
        //     check
        //     input={input}
        //   />
        // }
        cta={<Cta page="signup">회원가입</Cta>}
        social={<AuthSocial page="signup" />}
      />
    </>
  );
}
