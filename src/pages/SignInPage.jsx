import { SignInLayout } from "page-layout/SignInLayout/SingInLayout";
import { SignInput } from "../sign/ui-sign-input/SignInput";
import { Cta } from "../sharing/ui-cta/Cta";
import { SignHeader } from "../sign/ui-sign-header/SignHeader";

export default function SignInPage() {
  return (
    <div>
      <SignInLayout
        header={<SignHeader />}
        email={<SignInput />}
        password={<SignInput password />}
        cta={<Cta>로그인</Cta>}
      />
    </div>
  );
}
