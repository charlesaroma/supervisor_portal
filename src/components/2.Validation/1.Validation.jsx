import Logo from "../../assets/Logo/Logo.png";
import Icon1 from "../../assets/Icons/Frame 3584.png";
import Icon2 from "../../assets/Icons/Frame 3585.png";

const Validation = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <img src={Logo} alt="Logo" className="w-14 h-12" />
      </div>
      
      {/* Validation Container */}
      <div className="max-w-md w-full p-4 md:p-8 space-y-5">
        {/* Heading */}
        <div className="font-thin text-center md:text-start">
          <h1 className="text-3xl md:text-4xl tracking-wider">Reset Password</h1>
          <p className="text-gray-600 text-xs mt-2">
            Please select an option to reset your password or retrieve your username.
          </p>
        </div>

        {/* Reset Password Option */}
        <div className="flex items-center p-4 border border-red-500  active:bg-red-200 rounded-lg focus:bg-red-200">
          <img src={Icon1} alt="Reset Password" className="w-14 h-14 mr-4" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Reset Password via Email</h3>
            <p className="text-gray-600 text-sm">
              A reset link will be sent to your email.
            </p>
          </div>
        </div>

        {/* Retrieve Username Option */}
        <div className="flex items-center p-4 border border-yellow-500  active:bg-yellow-200 rounded-lg focus:bg-yellow-200">
          <img src={Icon2} alt="Retrieve Username" className="w-14 h-14 mr-4" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Retrieve Username via Email</h3>
            <p className="text-gray-600 text-sm">
              Your username will be sent to your email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;
