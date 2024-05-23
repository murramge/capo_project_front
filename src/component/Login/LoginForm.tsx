import * as React from "react";
import { cn } from "@/lib/utils";
import { IconInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  return (
    <main className="w-6/12 h-screen justify-center items-center p-10">
      <div className="w-3/4 border m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>로그인</span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-3/4">
            <div className="p-2">
              <IconInput
                icon="/icons/email.png"
                placeholder="이메일"
                className="rounded-md"></IconInput>
            </div>
            <div className="p-2">
              <IconInput
                icon="/icons/password.png"
                placeholder="비밀번호"
                className="rounded-md"></IconInput>
            </div>
            <div className="custom-checkbox-container flex items-center">
              <input
                type="checkbox"
                id="check1"
                className="custom-checkbox hidden-checkbox"
              />
              <label
                htmlFor="check1"
                className="inline-block w-4 h-4 bg-gray-200 rounded-full relative mr-1.5"></label>
              <span className="text-gray-400 text-xs">로그인 상태 유지</span>
            </div>
            <div className="flex justify-center pt-5 pb-5">
              <Button variant="secondary" className="w-5/6">
                로그인
              </Button>
            </div>
            <div className="border-t">
              <span className="flex text-xs text-gray-400 justify-center pt-5">
                또는 아래 계정으로 간편 로그인하기
              </span>
              <div className="flex justify-center p-5">
                <Button variant="none">
                  <img
                    src="/icons/google.png"
                    alt="google"
                    width={110}
                    height={48}></img>
                </Button>
                <Button variant="none">
                  <img
                    src="/icons/kakao.png"
                    alt="kakao"
                    width={110}
                    height={48}></img>
                </Button>
                <Button variant="none">
                  <img
                    src="/icons/naver.png"
                    alt="naver"
                    width={110}
                    height={48}></img>
                </Button>
              </div>
              <div>
                <Button variant="none">회원가입</Button>
                <div>
                  <Button variant="none" className="pr-0">
                    아이디찾기
                  </Button>
                  <span>.</span>
                  <Button variant="none" className="p-0">
                    비밀번호찾기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
