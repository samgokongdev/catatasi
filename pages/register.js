import Logo from "../components/svg/logo";

export default function Register() {
  return (
    <div className="flex flex-col px- bg-pinkm">
      <div className="flex flex-col justify-center px-10 h-screen">
        <div className="flex justify-center pb-8">
          <Logo />
        </div>
        <form className="">
          <div>
            <label
              for="username"
              className=" tracking-widest text-xs text-pinkt font-light antialiased"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              className=" tracking-widest text-xs text-pinkt font-light antialiased"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-pinkss rounded-lg px-3 py-2 text-xs text-pinkt focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              className=" tracking-widest text-xs text-pinkt font-light antialiased"
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

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-pinkt rounded-lg py-1.5 text-sm font-semibold text-putih tracking-widest"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-10 text-xxs text-pinkt font-light tracking-wider">
          Already have an account
        </div>
        <div className="my-2">
          <button className="w-full bg-pinkss rounded-lg py-1.5 text-sm font-semibold text-pinkt tracking-widest">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
