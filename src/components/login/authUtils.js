import { Cookies } from "react-cookie";

// 사용자 브라우저 쿠키에서 인증토큰 조회 반환 재사용 함수
const getUserToken = () => {
    const cookies = new Cookies();
    const userToken = cookies.get("usertoken");

    return userToken;
};

export { getUserToken };
