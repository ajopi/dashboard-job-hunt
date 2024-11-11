import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { jobFormSchema } from "@/lib/form-schema";
import { PlusIcon } from "lucide-react";
import React, { FC, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface InputSkillsProps {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
}

const InputSkills: FC<InputSkillsProps> = ({ form }) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    const value = inputRef.current?.value;
    if (value === "") {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newValue: any = [...values, value];
    setValues(newValue);
    form.setValue("requiredSkills", newValue);
  };

  const handleDeleteValue = (item: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const skills: any = values.filter((value: string) => item !== value);
    setValues(skills);
    form.setValue("requiredSkills", skills);
  };
  return (
    <FormField
      control={form.control}
      name={"requiredSkills"}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="skill-input" className="block">
            Add Skill
          </FormLabel>
          <FormControl>
            <div>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setHide(!isHide)}
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input
                    ref={inputRef}
                    id="skill-input"
                    className="w-[246px]"
                  />
                  <Button type="button" onClick={handleSaveValue}>
                    Save
                  </Button>
                </div>
              )}
              <div className="space-x-3">
                {values.map((item: string, key: number) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={key}
                      onClick={() => handleDeleteValue(item)}
                    >
                      {item}
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSkills;
