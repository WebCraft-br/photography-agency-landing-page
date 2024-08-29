import React from "react";



const Expertise = () => {
  return (
    <>
      <div className="max-4 gap-20 py-10">
        <div className="bg-[#363733] text-gray-300 ps-10 py-7 rounded-2xl">

          <div className=" flex flex-row ">
            <div className="w-4/5">
              <p>(02)</p>
              <p>Our Expertise</p>
              <div className=" text-3xl w-[40%]">
                When moments captured every dreams crafted into beautiful
                reality
              </div>
            </div>

            <div className=" w-1/5">
              <ul className=" leading-10 text-2xl">
                <li>Landscapes</li>
                <li>WildLife</li>
                <li>Architectural</li>
                <li>Travel</li>
                <li>Portrait</li>
              </ul>
            </div>
          </div>


          <div className="lowerbody mt-3 grid grid-cols-4">
            <div className="box1 bg-red-700 col-span-1">
              <div className="">
                <p className="text-[24px]">
                  Chasing Clouds at Mont Blanc's Pinnacle{" "}
                </p>
                <p className="address text-[16px]">Mont Blanc, France</p>
              </div>
            </div>


            <div className="box2 bg-green-800 col-span-3">
            carousel start


            </div>
          </div>



        </div>
      </div>
    {/* // sample / */}
    

    </>
  );
};

export default Expertise;
