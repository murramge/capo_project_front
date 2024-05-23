import * as React from "react";
import { cn } from "@/lib/utils";
import { IconInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IRegisterFormProps {}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  return (
    <main className="w-6/12 h-screen justify-center items-center p-10">
      <div className="w-3/4 border m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>회원가입</span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-3/4">
            <div className="p-2">
              <IconInput
                placeholder="아이디"
                className="rounded-md"></IconInput>
            </div>
            <div className="p-2">
              <IconInput
                placeholder="비밀번호"
                className="rounded-md"></IconInput>
            </div>
            <div className="p-2">
              <IconInput
                placeholder="이메일"
                className="rounded-md"></IconInput>
            </div>
            <div className="p-2">
              <IconInput
                placeholder="휴대폰번호"
                className="rounded-md"></IconInput>
            </div>
            <div className="flex justify-center pt-5 pb-5">
              <Button variant="secondary" className="w-5/6">
                회원가입
              </Button>
            </div>
            <div className="flex justify-between pt-5 pb-5">
              <Button variant="none">
                <span className={cn("text-xs text-primary")}>로그인</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
