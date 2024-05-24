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
import { createUserApi } from "@/src/api/createUserApi";

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

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    try {
      const result = await createUserApi({
        user_id: values.userid,
        password: values.password,
        phone_number: values.phoneNumber,
        user_email: values.email,
      });
      console.log("User created successfully:", result);
    } catch (errors) {
      console.error("Error creating user: ", errors);
    }
  };

  return (
    <main className="w-6/12 h-screen justify-center items-center p-10">
      <div className="w-3/4 border m-20">
        <div className="p-10 pl-20">
          <span className={cn("text-xl text-primary font-bold")}>회원가입</span>
        </div>
        <Form {...form}>
          <div className="flex justify-center items-center ">
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
