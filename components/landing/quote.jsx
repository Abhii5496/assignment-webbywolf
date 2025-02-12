import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from "../ui/form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "motion/react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Please enter name.",
  }),
  email: z
    .string({
      required_error: "Please enter an email.",
    })
    .email(),
  phone: z
    .string()
    .min(10, {
      message: "Please enter correct phone number.",
    })
    .max(10)
    .max(10),

  size: z.string().min(1, { message: "Please select time frame." }),
  quantity: z.string().min(1, { message: "Please select time frame." }),
  time: z.string().min(1, { message: "Please select time frame." }),
  description: z
    .string()
    .min(25, {
      message: "Please describe your project atleast in 25 characters .",
    })
    .max(255, {
      message: "Please describe your project in 255 characters .",
    }),
});
export default function Quote() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      time: "",
      size: "",
      quantity: "",
      description: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    toast.success("Form submitted succesfully.", {
      description: "We'll connect you through your email, Thank you.",
    });
    form.reset();
  }
  return (
    <div className="flex justify-center items-center  py-10 sm:py-20 relative">
      <div className="w-full sm:max-w-5xl px-10 sm:px-16 py-10 rounded-3xl bg-muted">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-2xl sm:text-4xl uppercase text-center font-bold pb-10"
        >
          request a quote
        </motion.h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">Name</FormLabel>
                  <FormControl className="">
                    <Input placeholder="Abhii" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">Email</FormLabel>
                  <FormControl className="">
                    <Input placeholder="Abhii" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">Phone Number</FormLabel>
                  <FormControl className="">
                    <Input placeholder="918009090" {...field} type="number" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">
                    Time Frame <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="">
                      <SelectTrigger className="">
                        <SelectValue placeholder="Choose Time Frame" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">10:00 AM - 11:00 AM</SelectItem>
                      <SelectItem value="2">12:00 AM - 1:00 PM</SelectItem>
                      <SelectItem value="3">1:00 PM - 2:00 PM</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">
                    Size<span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="">
                      <SelectTrigger className="">
                        <SelectValue placeholder="Choose Size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Small</SelectItem>
                      <SelectItem value="2">Medium</SelectItem>
                      <SelectItem value="3">Large</SelectItem>
                      <SelectItem value="4">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">
                    Quantity<span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="">
                      <SelectTrigger className="">
                        <SelectValue placeholder="Choose Size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1-5</SelectItem>
                      <SelectItem value="2">6-10</SelectItem>
                      <SelectItem value="3">11-15</SelectItem>
                      <SelectItem value="4">16-20</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[750px] col-span-2">
                  <FormLabel className="">
                    Please Describe Your Project*
                  </FormLabel>
                  <FormControl className="">
                    <Textarea
                      placeholder="Describe your project."
                      className="resize-none min-h-40 "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="w-full text-center col-span-2">
              By submitting this form you agree to our{" "}
              <Link href={"/"} className="underline">
                Terms of Service
              </Link>
              <span className="px-1">and</span>
              <Link href={"/"} className="underline">
                Privacy Policy.{" "}
              </Link>
               
            </p>
            <div className="col-span-2 flex justify-center items-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
