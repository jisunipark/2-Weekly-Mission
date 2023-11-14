//에러 발생 시 테두리 색 변경 및 에러 메세지 추가: 이메일
function addRedBorder(el) {
  el.classList.add("error-border");
}

// 이메일 유효성 검사
function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (!pattern.test(email)) {
    return false;
  } else {
    return true;
  }
}

// 비밀번호 유효성 검사
function isValidPassword(password) {
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  if (!pattern.test(password)) {
    return false;
  } else {
    return true;
  }
}

const inputEmail = document.querySelector("input.email"); //inputEmail: 이메일 입력란
const emailError = document.createElement("p"); //input 박스 밑 에러 메세지 요소 추가
emailError.classList.add("error-message"); //에러 메세지용 p태그에 빨간 글씨 클래스 추가
const userEmailInput = inputEmail.value; //사용자의 이메일 입력값

function addErrorMessageEmail() {
  let message = "";

  //상태 체크 후 상황에 맞는 메세지
  if (!userEmailInput) {
    addRedBorder(inputEmail);
    message = "이메일을 입력해주세요.";
  } else if (!isValidEmail(userEmailInput)) {
    addRedBorder(inputEmail);
    message = "올바른 이메일 주소가 아닙니다.";
  } else if (userEmailInput === "test@codeit.com") {
    addRedBorder(inputEmail);
    message = "이미 사용 중인 이메일입니다.";
  }

  //input 텍스트 요소에 에러 메세지 추가
  emailError.textContent = message;
}

inputEmail.addEventListener("focusout", () => {
  addErrorMessageEmail();
});

const inputPassword = document.querySelector("input.input-password"); //inputPassword: 패스워드 입력란
const passwordError = document.createElement("p"); //input 박스 밑 에러 메세지 요소 추가
passwordError.classList.add("error-message"); //에러 메세지용 p태그에 빨간 글씨 클래스 추가
const userPasswordInput = inputPassword.value; //사용자의 패스워드 입력값

function addErrorMessagePassword() {
  let message = "";

  //상태 체크 후 상황에 맞는 메세지
  if (!userPasswordInput) {
    addRedBorder(inputPassword);
    message = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else if (!isValidEmail(userPasswordInput)) {
    addRedBorder(inputPassword);
    message = "올바른 이메일 주소가 아닙니다.";
  }

  //input 텍스트 요소에 에러 메세지 추가
  passwordError.textContent = message;
}

inputPassword.addEventListener("focusout", () => {
  addErrorMessagePassword();
});

// 비밀번호 확인 입력값이 비밀번호와 일치하는지 확인

const inputPasswordCheck = document.querySelector("input.password-check");
const passwordCheckError = document.createElement("p"); //input 박스 밑 에러 메세지 요소 추가
passwordCheckError.classList.add("error-message"); //에러 메세지용 p태그에 빨간 글씨 클래스 추가
const userPasswordCheckInput = inputPassword.value; //사용자의 패스워드 확인 입력값

function checkPassword() {
  let message = "";

  if (inputPasswordCheck === inputPassword) {
    addRedBorder(inputPassword);
    message = "비밀번호가 일치하지 않아요.";
  }
}

inputPasswordCheck.addEventListener("focusout", () => {
  addErrorMessagePasswordCheck();
});
