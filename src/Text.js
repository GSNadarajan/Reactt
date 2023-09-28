import React from "react";
import cartoon from './assets/images/cartoon.png'

const Text = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-10">
      <div className="w-full bg-blue-400 p-8 text-center">
        <div className="flex ">
          <div>
            <h1 className="ml-8 text-2xl justify-left text-left center mt-12">
              {" "}
             <img src={cartoon} alt="cartoon"/>
            </h1>
          </div>
          <div>
            <h1 className=" mt-1 ml-8 text-2xl justify-left text-left">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. minus
              veritatis aut!
            </h1>
          </div>
        </div>
      </div>

      <div class="flex">
  <div class="w-1/2 p-4">
    Hello
  </div>
  <div class="w-1/2 p-4">
    Nattu
  </div>
</div>

      
    </div>
  );
};

export default Text;
