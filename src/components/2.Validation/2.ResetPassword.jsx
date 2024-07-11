import Logo from "../../assets/Logo/Logo.png";

const ResetPassword = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <img src={Logo} alt="Logo" className="w-14 h-12" />
      </div>

      <div className="max-w-md w-full p-4 md:p-8 space-y-5">
        {/* Heading */}
        <div className="font-thin text-center md:text-start">
          <h1 className="text-3xl md:text-4xl tracking-wider">
            Reset Password
          </h1>
          <p className="text-gray-600 text-xs mt-2">
            Please select option to reset your password or retrieve your
            username.
          </p>
        </div>

        {/* Input and Button */}
        <div className="flex flex-col gap-20">
          <input
            type="email"
            className=" border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring focus:border-gray-300 flex-1"
          />
          <button className="h-[40px] min-w-[120px] bg-gray-700 text-white rounded-lg px-6 py-3 transition-colors duration-300 hover:bg-gray-600">
            <label className="w-full h-full flex items-center justify-center">
              Send Link
            </label>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
