import Logo from "../components/svg/logo";

export default function Login() {
  return (
    <div className="flex flex-col px- bg-pinkm">
      <div className="flex flex-col justify-center px-10 h-screen">
        <div className="flex justify-center pb-8">
          <Logo />
        </div>
        <form className="">
          <div>
            <label
              for="identifier"
              className=" tracking-widest text-xs text-pinkt font-light antialiased"
            >
              Email or Username
            </label>
            <div className="mt-1">
              <input
                id="identifier"
                name="identifier"
                type="email"
                required
                className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="">
            <label
              for="password"
              className="tracking-widest text-xs text-pinkt font-light antialiased"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-pinkt rounded-lg py-1.5 text-sm font-semibold text-putih tracking-widest"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-10 text-xxs text-pinkt font-light tracking-wider">
          Need Account?
        </div>
        <div className="my-2">
          <button className="w-full bg-pinkss rounded-lg py-1.5 text-sm font-semibold text-pinkt tracking-widest">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
