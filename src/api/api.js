const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const postSignIn = async (signinInfo) => {
  const response = await fetch(`${BASE_URL}/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signinInfo),
  });
  if (!response.ok) {
    throw new Error("메세지를 생성하는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
};
