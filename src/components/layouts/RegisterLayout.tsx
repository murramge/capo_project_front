import * as React from "react";

import { cn } from "@/lib/utils";

import { createUserApi } from "@/src/api/createUserApi";
import { useRouter } from "next/router";
import RegisterOneStep from "../Account/RegisterStep/RegisterOneStep";
import {
  registerStep1Data,
  registerStep2Data,
} from "@/src/utils/RegisterSchema";
import RegisterTwoStep from "../Account/RegisterStep/RegisterTwoStep";
import WelcomeCapo from "../Account/WelcomeCapo";

interface IRegisterLayoutProps {}

const RegisterLayout: React.FunctionComponent<IRegisterLayoutProps> = (
  props
) => {
  const router = useRouter();

  const [step, setStep] = React.useState(1);
  const [step1Data, setStep1Data] = React.useState<registerStep1Data | null>(
    null
  );

  const [welcomeCapo, setWelcomeCapo] = React.useState(false);
  const [userid, setUserid] = React.useState<string | undefined>("");

  const handleStep1Submit = (data: registerStep1Data) => {
    setStep1Data(data);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleStep2Submit = async (data: registerStep2Data) => {
    const completeData = { ...step1Data, ...data };

    setWelcomeCapo(true);
    setUserid(completeData.userid);
    try {
      const result = await createUserApi({
        user_id: completeData.userid,
        password: completeData.password,
        phone_number: completeData.phoneNumber,
        user_email: completeData.email,
      });
      if (result.status === 200) {
        router.push("/auth/login");
      }
    } catch (errors) {
      console.error("Error creating user: ", errors);
    }
  };

  const InfoStateBar = ({ statenumber, infomation }: any) => {
    return (
      <>
        <div className="flex justify-center items-center ">
          <div className="relative border-2 w-[70%] mb-3 border-slate-100 rounded-xl ">
            <div
              className={
                statenumber == 50
                  ? cn(
                      `absolute border-2 w-[50%] mb-3 border-primary rounded-xl mt-[-2px] ml-[-2px]`
                    )
                  : cn(
                      `absolute border-2 w-[100%] mb-3 border-primary rounded-xl mt-[-2px] ml-[-2px]`
                    )
              }></div>
          </div>
        </div>
        <div className="pl-20 mb-5">
          <span>{infomation}</span>
        </div>
      </>
    );
  };

  return (
    <main className="w-4/12 flex justify-center items-center ">
      {welcomeCapo ? (
        <WelcomeCapo userid={userid}></WelcomeCapo>
      ) : (
        <div className="w-3/4 m-20">
          <div className="pl-20 pb-6">
            <span className={cn("text-xl text-primary font-[GalmuriBold]")}>
              Sign Up
            </span>
          </div>
          {step === 1 && (
            <>
              <InfoStateBar
                statenumber={50}
                infomation={"회원가입 정보를 입력해 주세요"}></InfoStateBar>
              <RegisterOneStep onNext={handleStep1Submit}></RegisterOneStep>
            </>
          )}
          {step === 2 && (
            <>
              <InfoStateBar
                statenumber={100}
                infomation={"이메일을 인증해주세요"}></InfoStateBar>
              <RegisterTwoStep
                onSubmit={handleStep2Submit}
                onBack={handleBack}></RegisterTwoStep>
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default RegisterLayout;
