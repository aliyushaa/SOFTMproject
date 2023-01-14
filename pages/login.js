import React from "react";
export default function loginPage(){
  return(
  <div style={{
  backgroundImage:"url(/img5.png)",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

 } }>
  <div class=" min-h-screen flex flex-col">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 class="mb-8 text-3xl text-center">Login to SOFTM</h1>
                            <form action = "auth/signin" method="post">
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <button
                            type="submit"
                             class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                                 > Login up </button>
                            </form>
                        </div>

                        <div class="w-full text-center bg-black rounded text-white mt-2">
                                                <p> Go to the registration <a class="no-underline" href="../login/"> Sign up </a></p>
                                                </div>
                    </div>
                </div>
                </div>

     )
     }



