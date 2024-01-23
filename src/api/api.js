const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const postSignIn = async (data) => {
  const response = await fetch(`${BASE_URL}/sign-in`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("로그인 다시 입력해라");
  }
  const body = await response.json();
  return body;
};

export const postSignUp = async (data) => {
  const response = await fetch(`${BASE_URL}/sign-up`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("회원가입 다시 해라");
  }
  const body = await response.json();
  return body;
};
