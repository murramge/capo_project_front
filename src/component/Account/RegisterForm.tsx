import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/src/utils/RegisterSchema";
import { registerInputValue } from "@/src/utils/registerInputMappings";
import classNames from "classnames";
import {
  CheckverifyEmailApi,
  createUserApi,
  idCheckDuplicatesApi,
  verifyEmailApi,
} from "@/src/api/createUserApi";
import { useRouter } from "next/router";

interface IRegisterFormProps {}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  const router = useRouter();

  const [checkDuplication, setCheckDuplication] = React.useState(false);
  const [emailAuthForm, setEmailAuthForm] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState("");
  const [checkVerifyCode, setCheckVerifyCode] = React.useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userid: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
  });

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    try {
      const result = await createUserApi({
        user_id: values.userid,
        password: values.password,
        phone_number: values.phoneNumber,
        user_email: values.email,
      });

      if (result) {
        router.push("/auth/login");
      }
    } catch (errors) {
      console.error("Error creating user: ", errors);
    }
  };

  const onCheckDuplicates = async () => {
    try {
      const result = await idCheckDuplicatesApi(form.getValues("userid"));
      if (result.result) {
        setCheckDuplication(true);
        alert("사용 가능한 아이디입니다.");
      } else {
        alert("이미 존재하는 아이디입니다.");
      }
    } catch (errors) {
      console.error("Error checking user ID: ", errors);
    }
  };

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
      }
    } catch (errors) {
      alert(errors.response.data.reason);
    }
  };

  return (
    <main className="w-6/12 h-screen flex justify-center items-center p-10">
      <div className="w-3/4 border m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>회원가입</span>
        </div>
        <Form {...form}>
          <div className="flex justify-center items-center">
            <form
              onSubmit={form.handleSubmit(handleRegister)}
              className="w-3/4">
              {registerInputValue.map((item, index) => (
                <div key={index} className="p-2">
                  <FormField
                    key={index}
                    control={form.control}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <div className="flex">
                              <Input
                                type={item.type}
                                placeholder={item.label}
                                {...field}
                                className={classNames("rounded-md", {
                                  [cn("border-primary")]:
                                    form.formState.errors[item.name],
                                })}></Input>
                              {item.name === "userid" && (
                                <button
                                  type="button"
                                  className={cn(
                                    "w-[20%] text-xs text-primary font-bold"
                                  )}
                                  onClick={onCheckDuplicates}>
                                  중복확인
                                </button>
                              )}
                              {item.name === "email" && (
                                <button
                                  type="button"
                                  className={cn(
                                    "w-[20%] text-xs text-primary font-bold"
                                  )}
                                  onClick={onVerificationCode}>
                                  이메일 인증
                                </button>
                              )}
                            </div>
                            {item.name === "email" && emailAuthForm && (
                              <div className="flex mt-2">
                                <Input
                                  type="text"
                                  placeholder="인증번호"
                                  value={verificationCode}
                                  onChange={(e) =>
                                    setVerificationCode(e.target.value)
                                  }
                                  className={classNames("rounded-md")}></Input>
                                <button
                                  type="button"
                                  className={cn(
                                    "w-[20%] text-xs text-primary font-bold"
                                  )}
                                  onClick={onVerificationCodeCheck}>
                                  확인
                                </button>
                              </div>
                            )}
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}></FormField>
                </div>
              ))}
              <div className="flex justify-center pt-5 pb-5">
                <Button type="submit" variant="secondary" className="w-5/6">
                  회원가입
                </Button>
              </div>
            </form>
          </div>
        </Form>
        <div className="flex justify-between pl-20 p-5">
          <Button variant="none">
            <span className={cn("text-xs text-primary")}>로그인</span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
