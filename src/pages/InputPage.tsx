import { Input } from "../components/ui-input/Input";

export default function InputPage() {
  return (
    <>
      <h3>아이디</h3>
      <Input />
      <h3>비밀번호</h3>
      <Input password />
    </>
  );
}
