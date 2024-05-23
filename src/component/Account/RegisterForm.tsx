import * as React from "react";
import { useForm } from "react-hook-form";
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

interface IRegisterFormProps {}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
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

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };

  return (
    <main className="w-6/12 h-screen justify-center items-center p-10">
      <div className="w-3/4 border m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>회원가입</span>
        </div>
        <Form {...form}>
          <div className="flex justify-center items-center ">
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4">
              {registerInputValue.map((item) => (
                <div className="p-2">
                  <FormField
                    control={form.control}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
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
              <div className="flex justify-center pt-5 pb-5">
                <Button variant="secondary" className="w-5/6">
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
