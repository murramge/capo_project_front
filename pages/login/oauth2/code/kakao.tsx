import React from "react";

const RedirectURI = () => {
  React.useEffect(() => {
    // 백엔드로 코드값을 넘겨주는 로직
    // 요청 성공 코드값
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    // 요청이 성공하면 navigate('/main')
  });

  return <div>확인</div>;
};

export default RedirectURI;
