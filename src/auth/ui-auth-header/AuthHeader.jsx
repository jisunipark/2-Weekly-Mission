import classNames from "classnames/bind";
import { LOGO_IMAGE } from "./constant";
import Image from "next/image";
import Link from "next/link";
import styles from "./AuthHeader.module.scss";

const cx = classNames.bind(styles);

export const AuthHeader = ({ page }) => {
  const isSignIn = page === "signin" ? true : false;
  const message = isSignIn ? "회원이 아니신가요?" : "이미 회원이신가요?";
  const guide = isSignIn ? "회원 가입하기" : "로그인 하기";
  const guideLink = isSignIn ? "/auth/signup" : "/auth/signin";

  return (
    <div className={cx("auth-header")}>
      <Link href="/">
        <Image
          src={LOGO_IMAGE}
          width={210.583}
          height={38}
          alt="Linkbrary 로고"
        />
      </Link>
      <div className={cx("check")}>
        <p>{message}</p>
        <Link href={guideLink}>{guide}</Link>
      </div>
    </div>
  );
};
