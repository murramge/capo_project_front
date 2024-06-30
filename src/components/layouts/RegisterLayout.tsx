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

interface IRegisterLayoutProps {}

const RegisterLayout: React.FunctionComponent<IRegisterLayoutProps> = (
  props
) => {
  const router = useRouter();

  const [step, setStep] = React.useState(1);
  const [step1Data, setStep1Data] = React.useState<registerStep1Data | null>(
    null
  );

  const handleStep1Submit = (data: registerStep1Data) => {
    setStep1Data(data);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleStep2Submit = async (data: registerStep2Data) => {
    const completeData = { ...step1Data, ...data };
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

  return (
    <main className="w-4/12 h-screen flex justify-center items-center ">
      <div className="w-3/4  m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>회원가입</span>
        </div>
        {step === 1 && (
          <RegisterOneStep onNext={handleStep1Submit}></RegisterOneStep>
        )}
        {step === 2 && (
          <RegisterTwoStep
            onSubmit={handleStep2Submit}
            onBack={handleBack}></RegisterTwoStep>
        )}
      </div>
    </main>
  );
};

export default RegisterLayout;
