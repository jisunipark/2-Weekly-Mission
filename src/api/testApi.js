export const createSubmit = async (data) => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("보내기 실패");
  }
  const body = await response.json();
  return body;
};
