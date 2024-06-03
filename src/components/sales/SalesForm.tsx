"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ProductSchema } from "@/src/utils/ProductSchema";
import { useFormStore } from "../../utils/store";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORY } from "@/src/utils/constants";

interface ISalesFormProps {}

const SalesForm: React.FunctionComponent<ISalesFormProps> = (props) => {
  const { formData, setFormData } = useFormStore();
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: formData,
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      setFormData(values as z.infer<typeof ProductSchema>);
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  const selectedTransactionType = form.watch("transaction");
  console.log(selectedTransactionType);

  return (
    <Form {...form}>
      <form>
        <div className="pb-5">
          <FormField
            control={form.control}
            name="productname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-[#7D7D7D]">상품명</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="상품명을 입력하세요"
                    {...field}
                    className="rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pb-5">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  <span className="text-[#7D7D7D]">카테고리</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리를 선택하세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORY.map((item) => (
                      <SelectItem key={item.engname} value={item.engname}>
                        {item.korname}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pb-5">
          <FormField
            control={form.control}
            name="transaction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-[#7D7D7D]">거래방식</span>
                </FormLabel>
                <FormControl>
                  <div>
                    <Button
                      type="button"
                      className={`
                    ${
                      selectedTransactionType === "판매하기"
                        ? "text-white"
                        : "bg-gray-200 text-gray-400 hover:text-white"
                    } 
                     p-2 rounded-full mr-2
                  `}
                      onClick={() => field.onChange("판매하기")}>
                      판매하기
                    </Button>
                    <Button
                      type="button"
                      className={`
                    ${
                      selectedTransactionType === "나눔하기"
                        ? " text-white"
                        : "bg-gray-200 text-gray-400 hover:text-white"
                    } 
                   p-2 rounded-full mr-2
                  `}
                      onClick={() => field.onChange("나눔하기")}>
                      나눔하기
                    </Button>
                    <Button
                      type="button"
                      className={`
                    ${
                      selectedTransactionType === "교환하기"
                        ? "text-white"
                        : "bg-gray-200 text-gray-400 hover:text-white"
                    } 
                   p-2 rounded-full
                  `}
                      onClick={() => field.onChange("교환하기")}>
                      교환하기
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pb-5">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="가격을 입력하세요"
                    {...field}
                    className="rounded-md"
                    disabled={
                      selectedTransactionType === "판매하기" ? false : true
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-[#7D7D7D]">설명</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="설명을 입력하세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SalesForm;
