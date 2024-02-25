import React, { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  let checkLogin = () => {
    {
      isLogin ? setIsLogin(false) : setIsLogin(true);
    }
  };

  return (
    <div className="container h-screen font-serif overflow-hidden">
      <nav className="h-[80px] flex justify-between px-3 py-2 items-center font-medium">
        <div className="logo_container w-2/5">
          <img
            className="h-16 w-16 border rounded-full select-none"
            src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ298ZW58MHx8MHx8fDA%3D"
            alt="logo"
          />
        </div>
        <div className="menu_container w-2/5">
          <ul className="flex gap-5">
            <li className=" hover:border-b-2 hover:border-b-black outline-none">
              <a href="#">Products</a>
            </li>
            <li className=" hover:border-b-2 hover:border-b-black outline-none">
              <a href="#">Solution</a>
            </li>
            <li className=" hover:border-b-2 hover:border-b-black outline-none">
              <a href="#">Price</a>
            </li>
            <li className=" hover:border-b-2 hover:border-b-black outline-none">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="btn_container w-1/5 flex justify-end">
          {isLogin ? (
            <button
              className=" bg-red-500 border px-4 py-3 rounded-lg text-white hover:shadow-sm hover:shadow-black outline-none border-none"
              onClick={checkLogin}
            >
              Logout
            </button>
          ) : (
            <button
              className=" bg-green-500 border px-4 py-3 rounded-lg text-white hover:shadow-sm hover:shadow-black outline-none border-none"
              onClick={checkLogin}
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <div className="hero h-2/3 w-3/4 m-auto flex items-center flex-col bg-gray-400 justify-around">
        <p className=" font-medium">Trusted by over 2800+ companies</p>
        <h2 className="text-5xl -leading- ">
          Find your <span className=" text-green-600">Remote Job</span>
        </h2>
        <h2 className="text-5xl">Easy And Fast</h2>
        <p>A Platform where you can get your desired job without any hasse</p>
        <div className="msg_box">
          <input
            className=" w-80 py-1 border-none outline-none rounded-lg text-black"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="text-white bg-black px-2 py-1 rounded-lg hover:shadow-sm hover:shadow-white">
            Get Started
          </button>
        </div>
      </div>

    
  

    </div>
  );
};

export default App;
