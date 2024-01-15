import { SignInLayout } from "page-layout/SignInLayout/SingInLayout";
import { AuthInput } from "auth/ui-auth-input/AuthInput";
import { Cta } from "sharing/ui-cta/Cta";
import { AuthHeader } from "auth/ui-auth-header/AuthHeader";
import { AuthSocial } from "auth/ui-auth-social/AuthSocial";

export default function SignInPage() {
  return (
    <>
      <SignInLayout
        header={<AuthHeader page="signin" />}
        email={<AuthInput />}
        password={<AuthInput password />}
        cta={<Cta page="signin">로그인</Cta>}
        social={<AuthSocial page="signin" />}
      />
    </>
  );
}
