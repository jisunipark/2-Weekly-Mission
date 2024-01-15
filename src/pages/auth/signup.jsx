import { SignUpLayout } from "page-layout/SignUpLayout/SignUpLayout";
import { AuthInput } from "auth/ui-auth-input/AuthInput";
import { Cta } from "sharing/ui-cta/Cta";
import { AuthHeader } from "auth/ui-auth-header/AuthHeader";
import { AuthSocial } from "auth/ui-auth-social/AuthSocial";

export default function SignUpPage() {
  return (
    <>
      <SignUpLayout
        header={<AuthHeader page="signup" />}
        email={<AuthInput />}
        password={<AuthInput password />}
        passwordCheck={<AuthInput password />}
        cta={<Cta page="signup">회원가입</Cta>}
        social={<AuthSocial page="signup" />}
      />
    </>
  );
}
