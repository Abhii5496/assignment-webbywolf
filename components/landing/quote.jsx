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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export default function Quote() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center  py-10 sm:py-20 relative">
      <div className="w-full sm:max-w-5xl px-10 sm:px-20 py-10 rounded-3xl bg-muted">
        <h1 className="text-4xl uppercase text-center font-bold pb-10">
          request a quote
        </h1>
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
                    <Input placeholder="Abhii" {...field} />
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
                  <FormLabel className="">Time Frame</FormLabel>
                  <FormControl className="">
                    <Input placeholder="Abhii" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="">Size</FormLabel>
                  <FormControl className="">
                    <Input placeholder="Abhii" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[300px] col-span-2 sm:col-span-1">
                  <FormLabel className="" required>
                    Quantity
                  </FormLabel>
                  <FormControl className="">
                    <Input placeholder="Abhii" {...field} required />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full sm:w-[750px] col-span-2">
                  <FormLabel className="">
                    Please Describe Your Project*
                  </FormLabel>
                  <FormControl className="">
                    <Textarea
                      required
                      placeholder="Describe your project."
                      className="resize-none "
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
