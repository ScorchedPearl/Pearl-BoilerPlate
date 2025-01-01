"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const SignInPage: React.FC = () => {
 const { theme,setTheme } = useTheme();
 useEffect(() => {
  setTheme('light');
 }, [setTheme]);
 return (
  <motion.div initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 50 ,x:50}}
  transition={{ duration: 1,ease:"backIn" }
 }
  className="flex items-center justify-center min-h-screen bg-primary">
   <motion.div
    initial={{ opacity: 0 ,x:-200,y: -200 }}
    animate={{ opacity: 1, y: -50,x:-50 }}
    transition={{ duration: 1.5 }}
    className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-lg"
   >
          <div className="flex justify-center items-end h-1/6">
            <h1 className="text-4xl font-bold italic  ">
              Welcome
            </h1>
          </div>
          <div className="flex justify-center items-end ">
            <h1 className="text-3xl italic font-sans ">
              We Are{" "}
              <span className="text-3xl italic font-sans text-yellow-500">
                Happy
              </span>{" "}
              To See You
            </h1>
          </div>
          <div className="flex justify-center items-end ">
            <button
              type="button"
              className="text-white bg-black hover:bg-muted-foreground focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30  m-4"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Github
            </button>
            <button
            // onClick={()=>googlelogin()}
            type="button"
            className="text-destructive-foreground bg-[#4285F4] hover:bg-[#0d2e63]focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 m-4"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
          </div>
          <div className="flex justify-center items-end ">
            <h1 className="text-1xl italic font-sans">
              <span className="text-1xl italic font-sans">-------</span> Use You
              Own Email
              <span className="text-1xl italic font-sans ">-------</span>{" "}
            </h1>
          </div>
          <form action="">
          {/* <form action={loginAction}> */}
            <div>
              <label htmlFor="email" className=" block text-sm font-medium">
                E-Mail Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John@123.com"
              />
              <br />
              {/* {state?.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
              )} */}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block  text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe1232"
              />
              {/* {state?.errors?.password && (
                <p className="text-red-500">{state.errors.password}</p>
              )} */}
            </div>
            <SubmitButton></SubmitButton>
          </form>

          <div className="flex justify-center items-end hover:underline">
            <h1 className="text-1xl italic font-sans">
              <span className="text-1xl italic font-sans ">-------</span>{" "}
              <Link href="/signup">Create An Account</Link>
              <span className="text-1xl italic font-sans  ">-------</span>{" "}
            </h1>
          </div>
   </motion.div>
  </motion.div>
 );
};

export default SignInPage;
function SubmitButton() {
 // const { pending } = useFormStatus();

 return (
   <button
     // disabled={pending}
     type="submit"
     className="ml-8 bg-green-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
   >
     SignUp
   </button>
 );
}