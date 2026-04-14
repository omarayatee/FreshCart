"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { myRegisterSchema, RegisterSchemaType } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGoogle,
  FaShieldAlt,
  FaStar,
  FaTruck,
  FaUserPlus,
} from "react-icons/fa";
import image4 from "../../../assets/images/image4.png";
import { userRegister } from "@/actions/auth.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(myRegisterSchema),
  });

  const {register, handleSubmit, control } = form;

  async function mySubmit(data: RegisterSchemaType) {
    const isRegisterSuccessfully = await userRegister(data);

    if (isRegisterSuccessfully) {
      toast.success("Your Register Successfully ❤️", {
        duration: 3000,
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else {
      toast.error("We Can't Register Now! 🔴", {
        duration: 3000,
        position: "top-center",
      });
    }
  }

  return (
    <>
      <section className="py-10 text-[#364153]">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Welcome to <span className="text-green-600">FreshCart</span>
            </h1>
            <p className="text-xl mt-2 mb-4">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
              <li>
                <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <FaStar />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Premium Quality</h2>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <FaTruck />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Fast Delivery</h2>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <FaShieldAlt />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Secure Shopping</h2>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="review bg-white shadow-sm p-4 rounded-md">
              <div className="author flex items-center gap-4 mb-4">
                <Image
                  src={image4}
                  alt="avtar"
                  width={100}
                  height={100}
                  className="size-12 rounded-full"
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating *:text-yellow-300 flex gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div>
                <p className="italic text-gray-600">
                  &quot;FreshCart has transformed my shopping experience. The
                  quality of the products is outstanding, and the delivery is
                  always on time. Highly recommend!&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
            <h2 className="text-center text-3xl font-semibold mb-2">
              Create Your Account
            </h2>
            <p className="text-center">
              Start your fresh journey with us today
            </p>
            <div className="register-options flex gap-2 *:grow my-10">
              <button
                type="button"
                className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-4 py-2 rounded-md"
              >
                <FaGoogle className="me-2 text-red-600" />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-4 py-2 rounded-md"
              >
                <FaFacebook className="me-2 text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
            <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4">
              <span className="sr-only">or</span>
            </div>
            <form className="space-y-7" onSubmit={handleSubmit(mySubmit)}>
              <div className="flex flex-col gap-2">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="name">Name*</FieldLabel>
                      <Input
                        {...field}
                        id="name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Name..."
                        autoComplete="off"
                        className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">Email*</FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Email..."
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="password">Password*</FieldLabel>
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        aria-invalid={fieldState.invalid}
                        placeholder="Create a Strong Password..."
                        className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                      <div className="mt-1 flex items-center gap-2">
                        {/* bar */}
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          {/* <div
                            className={`h-full transition-all duration-500 ${strengthData?.color}`}
                            style={{ width: strengthData?.width }}
                          ></div> */}
                        </div>
                        {/* text */}
                        {/* <div className="flex justify-between mt-1 text-sm">
                          <span className={`font-medium ${strengthData?.bgt}`}>
                            {strengthData?.text}
                          </span>
                        </div> */}
                      </div>
                      <p className="text-gray-500 -mt-2 text-xs">
                        Must be at least 8 characters with numbers and symbols
                      </p>
                    </Field>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="rePassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="rePassword">
                        Confirm Password*
                      </FieldLabel>
                      <Input
                        {...field}
                        id="rePassword"
                        type="password"
                        aria-invalid={fieldState.invalid}
                        placeholder="Confirm your Password"
                        className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phone">Phone Number*</FieldLabel>
                      <Input
                        {...field}
                        id="phone"
                        type="tel"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Your Phone Number..."
                        className="py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="size-4 accent-green-600"
                    {...register("terms")}
                  />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link
                      className="text-green-600 hover:underline"
                      href="/terms"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-green-600 hover:underline"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>{" "}
                    *
                  </label>
                </div>
                {/* {form.formState.errors.terms && (
                  <span className="text-red-600 text-sm">
                    {form.formState.errors.terms.message}
                  </span>
                )} */}
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="btn bg-green-600 text-white hover:bg-green-700 py-5 w-full transition-colors cursor-pointer text-[16px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed!"
              >
                {loading ? (
                  <>
                    {/* <SpinnerCustom /> */}
                    <span>Creating Account</span>
                  </>
                ) : (
                  <>
                    <FaUserPlus className="me-1" />
                    <span>Create My Account</span>
                  </>
                )}
              </Button>
            </form>
            <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
              Already have an account?
              <Link
                className="text-green-600 ms-2 cursor-pointer hover:underline font-medium"
                href="/login"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
