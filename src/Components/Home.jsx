import logo from "../assets/vot designs NEWBANDLOGO PNG.png";

function Home() {
  return (
    <>
      <header className="h-screen flex items-center justify-center z-10 relative w-full">
        <section className="align-center justify-center flex h-96">
          <div className="flex flex-col bg-blue-900 color w-60 p-10 text-white gap-5">
            <p className="text-sm ">
              <img src={logo} width={"200px"} className="mb-6" />
              Are you a new customer or an existing customer yet to set up your
              online account?
            </p>
            <button className="w-full bg-white text-blue-800 py-2 rounded-sm">
              Get Started
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-3/6 bg-white p-10 gap-10">
            <h1 className="text-xl">Log in To your account</h1>
            <div>
              <input
                type="text"
                className="w-full outline-none border border-gray-500 h-10 mb-5 px-2"
                placeholder="Username"
              />
              <input
                type="password"
                className="w-full border border-gray-500 h-10 mb-5 px-2 outline-none"
                placeholder="Password"
              />
              <button className="w-full bg-blue-800 p-2 text-white rounded-sm">
                Login
              </button>
              <p className="text-green-800 text-end cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Home;
