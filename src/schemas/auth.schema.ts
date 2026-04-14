import * as zod from "zod";


export const myRegisterSchema = zod.object({
  name: zod
    .string("Name Must Be Text")
    .nonempty("Name Is Required")
    .min(3, "min lenght is 3 chars")
    .max(15, "max length is 15 chars"),
  email: zod.email("invalid email").nonempty("email is Required"),
  password: zod
    .string()
    .nonempty("Password is Required")
    .regex(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
      `password must contain 1 number (0-9)
password must contain 1 uppercase letters
password must contain 1 lowercase letters
password must contain 1 non-alpha numeric number
password is 8-16 characters with no space`,
    ),
  rePassword : zod.string().nonempty("rePassword is Required"),  
  phone: zod
    .string()
    .nonempty("phone is Required")
    .regex(/^01[0125][0-9]{8}$/, "invalid phone number"),
}).refine( (object) => {
  return object.password === object.rePassword
}, {
  error : "Password & rePassword not Matched !",
  path : [`rePassword`]
})


export type RegisterSchemaType = zod.infer<typeof myRegisterSchema> 




export const LoginSchema = zod.object({
  email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
  password: zod
    .string()
    .nonempty('*Please enter your password')
    .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
    .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
    .refine((val) => /\d/.test(val), '*Password must contain at least one number')
    .refine(
      (val) => /[^\w\d\s:]/.test(val),
      '*Password must contain at least one special character',
    )
    .min(8, '*Password must be at least 8 characters long')
    .max(16, '*Password must not exceed 16 characters'),
});

export type LoginSchemaType = zod.infer<typeof LoginSchema>;


// UpdatePasswordSchema
export const UpdatePasswordSchema = zod
  .object({
    password: zod
      .string()
      .nonempty('*Please enter your password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });
// UpdatePersonalDetailsSchema
export const UpdatePersonalDetailsSchema = zod.object({
  name: zod
    .string()
    .trim()
    .nonempty('*Please enter your name')
    .min(3, '*Name is too short')
    .max(25, '*Name is too long'),
  email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
  phone: zod
    .string()
    .nonempty('*Please enter your phone number')
    .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, '*Only Egyptian phone numbers are allowed'),
});
// Add address
export const AddAddressSchema = zod.object({
  name: zod.string().max(20),
  details: zod.string().max(40),
  phone: zod.string().max(11),
  city: zod.string().max(20),
});
// NewPasswordSchema
export const NewPasswordSchema = zod
  .object({
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });

  // forgotPasswordSchema
export const forgotPasswordSchema = zod.object({
  email: zod.string().nonempty('*Please enter your email').email('Email is required'),
});
// otpSchema
export const otpSchema = zod.object({
  otp: zod
    .string()
    .length(6, '*OTP must be exactly 6 digits')
    .regex(/^\d+$/, '*OTP must contain only numbers'),
});
// ResetPasswordSchema
export const ResetPasswordSchema = zod
  .object({
    email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });



  // Types
export type OtpSchemaType = zod.infer<typeof otpSchema>;
export type UpdatePasswordSchemaType = zod.infer<typeof UpdatePasswordSchema>;
export type UpdatePersonalDetailsSchemaType = zod.infer<typeof UpdatePersonalDetailsSchema>;
export type forgotPasswordSchemaType = zod.infer<typeof forgotPasswordSchema>;
export type NewPasswordSchemaType = zod.infer<typeof NewPasswordSchema>;
export type ResetPasswordSchemaType = zod.infer<typeof ResetPasswordSchema>;
export type AddAddressSchemaType = zod.infer<typeof AddAddressSchema>;