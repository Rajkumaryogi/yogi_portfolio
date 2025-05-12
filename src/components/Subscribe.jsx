import React from "react";

function Subscribe() {
  return (
    <div className=" bg-textThemeColor">
      <div className="px-[150px] py-20">
        <div className="flex justify-between items-center">
          {/* left   */}
          <div>
            <h1 className="font-bold text-5xl text-white">Stay Connected!</h1>
            <p className="text-textWhiteColor pt-2">
              Stay connected and receive updates from anywhere
            </p>
          </div>
          {/* right  */}
          <div>
            <form className="flex justify-center items-center gap-2">
              <div className="">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="p-3 w-[350px] bg-inputColor rounded-xl text-textWhiteColor"
                />
              </div>
              <div>
                <button className="bg-textWhiteColor p-3 rounded-xl cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
