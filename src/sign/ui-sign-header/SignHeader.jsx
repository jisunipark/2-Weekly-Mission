import classNames from "classnames/bind";
import { LOGO_IMAGE } from "./constant";
import Image from "next/image";
import Link from "next/link";
import styles from "./SignHeader.module.scss";

const cx = classNames.bind(styles);

export const SignHeader = () => {
  return (
    <div className={cx("sign-header")}>
      <Link href="/">
        <Image
          src={LOGO_IMAGE}
          width={210.583}
          height={38}
          alt="Linkbrary 로고"
        />
      </Link>
      <div className={cx("check")}>
        <p>회원이 아니신가요?</p>
        <Link href="/SignUpPage">회원 가입하기</Link>
      </div>
    </div>
  );
};
