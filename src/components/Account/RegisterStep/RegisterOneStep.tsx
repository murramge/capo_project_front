import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerStep1Schema,
  registerStep1Data,
} from "@/src/utils/RegisterSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { registerInputValue } from "@/src/utils/registerInputMappings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { cn } from "@/lib/utils";
import { idCheckDuplicatesApi } from "@/src/api/createUserApi";

interface IRegisterOneStepProps {
  onNext: (data: registerStep1Data) => void;
}

const RegisterOneStep: React.FunctionComponent<IRegisterOneStepProps> = ({
  onNext,
}) => {
  const [checkDuplication, setCheckDuplication] = React.useState(false);

  const form = useForm<registerStep1Data>({
    resolver: zodResolver(registerStep1Schema),
    defaultValues: {
      userid: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
  });

  const onCheckDuplicates = async () => {
    try {
      const result = await idCheckDuplicatesApi(form.getValues("userid"));

      if (!result.result) {
        setCheckDuplication(true);
        alert("사용 가능한 아이디입니다.");
      } else {
        alert("이미 존재하는 아이디입니다.");
      }
    } catch (errors) {
      console.error("Error checking user ID: ", errors);
    }
  };

  const onSubmit: SubmitHandler<registerStep1Data> = (data) => {
    if (checkDuplication) {
      onNext(data);
    } else {
      alert("아이디 중복확인을 해주세요");
    }
  };

  return (
    <Form {...form}>
      <div className="flex justify-center items-center">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4">
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
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={onCheckDuplicates}>
                              중복확인
                            </Button>
                          )}
                        </div>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}></FormField>
            </div>
          ))}
          <div className="flex justify-center pt-5 pb-5">
            <Button type="submit" variant="secondary" className="w-5/6">
              다음
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default RegisterOneStep;
