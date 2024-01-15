import { SignInput } from "sharing/ui-sign-input/SignInput";

export default function InputPage() {
  return (
    <>
      <h3>아이디</h3>
      <SignInput password={undefined} />
      <h3>비밀번호</h3>
      <SignInput password />
    </>
  );
}
