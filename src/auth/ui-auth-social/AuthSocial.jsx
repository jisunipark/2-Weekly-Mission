import styles from "./AuthSocial.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import {
  KAKAOTALK_IMAGE,
  GOOGLE_IMAGE,
  KAKAOTALK_URL,
  GOOGLE_URL,
} from "./constant";

const cx = classNames.bind(styles);

export const AuthSocial = ({ page }) => {
  const message = page === "signin" ? "소셜 로그인" : "다른 방식으로 가입하기";

  return (
    <div className={cx("box")}>
      <p>{message}</p>
      <div className={cx("buttons")}>
        <Link href={GOOGLE_URL}>
          <Image
            src={GOOGLE_IMAGE}
            width={42}
            height={42}
            alt="구글 로고 버튼"
          />
        </Link>
        <Link href={KAKAOTALK_URL}>
          <Image
            src={KAKAOTALK_IMAGE}
            width={42}
            height={42}
            alt="카카오톡 로고 버튼"
          />
        </Link>
      </div>
    </div>
  );
};
