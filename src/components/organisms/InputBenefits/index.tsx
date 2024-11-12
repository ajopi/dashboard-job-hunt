import React, { FC, useState } from "react";
import DialogAddBenefit from "./DialogAddBenefit";
import { PartyPopper, X } from "lucide-react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

interface InputBenefitProps {
  form: any;
}

const InputBenefit: FC<InputBenefitProps> = ({ form }) => {
  const [benefits, setBenefits] = useState<any[]>([]);

  const deleteBenefit = (item: any) => {
    const deleteBenefits = benefits.filter((benefit: any) => item !== benefit);
    setBenefits([...deleteBenefits]);
    form.setValue("benefits", deleteBenefits);
  };

  const updateBenefits = (item: any) => {
    const newValue: any[] = [...benefits, item];
    setBenefits(newValue);
    form.setValue("benefits", newValue);
  };
  return (
    <div className="block">
      <DialogAddBenefit updateBenefits={updateBenefits} />
      <div className="grid grid-cols-3 gap-5 mt-5 ">
        {benefits.map((item: any, i: number) => {
          return (
            <div
              className="border border-gray-200 rounded-sm p-3 relative w-[200px]"
              key={i}
            >
              <PartyPopper className="w-7 h-7 mb-5 text-primary" />
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => deleteBenefit(item)}
              >
                <X className="w-6 h-6" />
              </div>
              <div className="text-xl font-semibold mb-3">{item.benefit}</div>
              <div className="text-gray-500 text-sm">{item.description}</div>
            </div>
          );
        })}
      </div>
      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputBenefit;
