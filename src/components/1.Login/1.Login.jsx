import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/Logo/Logo.png";
import Right from "../../assets/Images/Right.png";
import MdiEye from "../../assets/Icons/MdiEye.png";
import OouiEyeClosed from "../../assets/Icons/OouiEyeClosed.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data", values);
    // Handle form submission
  };

  return (
    <section className="w-full h-screen bg-[#FFFFFF] flex flex-col md:flex-row justify-between items-center overflow-hidden">
      {/* Login form */}
      <div className="relative w-full h-full md:max-w-[50%] p-4 md:p-8 space-y-6">
        {/* Logo */}
        <div className="absolute top-2 left-4">
          <img src={Logo} alt="Logo" className="w-[59px] h-[49px]" />
        </div>
        {/* Centered content */}
        <div className="flex flex-col justify-center h-full max-w-[420px] mx-auto text-center md:text-left">
          {/* Heading and sub-heading */}
          <div className="mb-6">
            <h1 className="font-avenir text-3xl mb-2">Login</h1>
            <p className="italic font-inter text-[9px] md:text-[12px] font-bold tracking-2percent">
              Welcome To CHUSS Graduate Program Management System
            </p>
            <h3 className="font-inter text-[10px] md:text-[12px] text-[#ABAAAF]">
              Please enter your details to log into your admin account
            </h3>
          </div>
          {/* Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full space-y-6">
                <div>
                  <label htmlFor="username" className="block font-inter mb-1 text-[14px] font-semibold text-[#464F60] text-start">
                    User <span className="mx-1 text-[#A1080B]">*</span>
                  </label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your email address..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block font-inter mb-1 font-semibold text-[#464F60] text-start">
                    Password <span className="mx-1 text-[#A1080B]">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password..."
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                    >
                      {showPassword ? <img src={MdiEye} alt="Show" className="w-5 h-auto" /> : <img src={OouiEyeClosed} alt="Hide" className="w-5 h-auto" />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Checkbox */}
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="h-4 w-4 border-gray-300 rounded "
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block font-inter text-[#838389]"
                  >
                    Remember Password
                  </label>
                </div>
                {/* Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#20202A] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20202A]"
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Image to the right */}
      <div className="hidden md:block md:h-full">
        <img src={Right} alt="" className="h-full object-cover" />
      </div>
    </section>
  );
};

export default Login;
