import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerStep2Schema,
  registerStep2Data,
} from "@/src/utils/RegisterSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { registerAuthInputvalue } from "@/src/utils/registerInputMappings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { cn } from "@/lib/utils";
import { CheckverifyEmailApi, verifyEmailApi } from "@/src/api/createUserApi";
interface IRegisterTwoStepProps {
  onSubmit: (data: registerStep2Data) => void;
  onBack: () => void;
}

const RegisterTwoStep: React.FunctionComponent<IRegisterTwoStepProps> = ({
  onSubmit,
  onBack,
}) => {
  const form = useForm<registerStep2Data>({
    resolver: zodResolver(registerStep2Schema),
    defaultValues: {
      email: "",
      code: "",
    },
  });

  const handleBack = () => {
    onBack();
  };

  const [emailAuthForm, setEmailAuthForm] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState("");
  const [checkVerifyCode, setCheckVerifyCode] = React.useState(false);

  const onVerificationCode = async () => {
    const isEmailValid = await form.trigger("email");
    if (isEmailValid) {
      try {
        const result = await verifyEmailApi({
          user_email: form.getValues("email"),
        });
        if (result.result_code == 201) {
          alert("인증번호가 메일로 발송되었습니다.");
          setEmailAuthForm(true);
        }
      } catch (errors) {
        console.error("Error checking user: ", errors);
      }
    }
  };

  const onVerificationCodeCheck = async () => {
    try {
      const result = await CheckverifyEmailApi(
        form.getValues("email"),
        verificationCode
      );

      if (result.result_code == 200) {
        alert("이메일 인증이 완료되었습니다.");
        setCheckVerifyCode(true);
      } else {
        alert("인증번호를 입력해주세요");
      }
    } catch (errors: any) {
      alert(errors.response.data.reason);
    }
  };

  const onVerify: SubmitHandler<registerStep2Data> = (data) => {
    if (checkVerifyCode) {
      onSubmit(data);
    } else {
      alert("이메일 인증을 해주세요");
    }
  };

  return (
    <Form {...form}>
      <div className="flex justify-center items-center">
        <form onSubmit={form.handleSubmit(onVerify)} className="w-3/4">
          <div className="p-2">
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <div className="flex">
                        <Input
                          type={"email"}
                          placeholder={"이메일"}
                          {...field}
                          className={classNames("rounded-md", {
                            [cn("border-primary")]:
                              form.formState.errors["email"],
                          })}></Input>
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={onVerificationCode}
                          className="mx-2">
                          인증번호 전송
                        </Button>
                      </div>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>
          </div>
          <div className="p-2">
            <FormField
              control={form.control}
              name={"code"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <div className="flex">
                        <Input
                          type={"text"}
                          placeholder={"인증번호"}
                          {...field}
                          className={classNames("rounded-md", {
                            [cn("border-primary")]:
                              form.formState.errors["code"],
                          })}
                          value={verificationCode}
                          onChange={(e) =>
                            setVerificationCode(e.target.value)
                          }></Input>
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={onVerificationCodeCheck}
                          className="mx-2">
                          인증하기
                        </Button>
                      </div>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>
          </div>
          <div className="flex justify-center pt-5 pb-5">
            <Button type="submit" variant="secondary" className="w-5/6">
              가입
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default RegisterTwoStep;
