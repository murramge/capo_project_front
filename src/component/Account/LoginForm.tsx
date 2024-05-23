import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SocialLogin from "./SocialLogin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/src/utils/LoginSchema";
import { loginInputValue } from "@/src/utils/loginInputMappings";
import classNames from "classnames";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userid: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <main className="w-6/12 h-screen justify-center items-center p-10">
      <div className="w-3/4 border m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>로그인</span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-3/4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {loginInputValue.map((item) => (
                  <div className="p-2">
                    <FormField
                      control={form.control}
                      name={item.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              icon={`/icons/${item.name}.png`}
                              type={item.type}
                              placeholder={item.label}
                              {...field}
                              className={classNames("rounded-md", {
                                [cn("border-primary")]:
                                  form.formState.errors[item.name],
                              })}></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}></FormField>
                  </div>
                ))}
                <div className="custom-checkbox-container flex items-center">
                  <input
                    type="checkbox"
                    id="check1"
                    className="custom-checkbox hidden-checkbox"
                  />
                  <label
                    htmlFor="check1"
                    className="inline-block w-4 h-4 bg-gray-200 rounded-full relative mr-1.5"></label>
                  <span className="text-gray-400 text-xs">
                    로그인 상태 유지
                  </span>
                </div>
                <div className="flex justify-center pt-5 pb-5">
                  <Button variant="secondary" className="w-5/6">
                    로그인
                  </Button>
                </div>
              </form>
            </Form>

            <div className="border-t">
              <SocialLogin></SocialLogin>
              <div className="flex justify-between pt-5 pb-5">
                <Button variant="none">
                  <span className={cn("text-xs text-primary")}>회원가입</span>
                </Button>
                <div className="flex">
                  <Button variant="none" className="pr-0">
                    <span className="text-xs">아이디찾기</span>
                  </Button>
                  <span className="p-2 ">·</span>
                  <Button variant="none" className="p-0">
                    <span className="text-xs">비밀번호찾기</span>
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
