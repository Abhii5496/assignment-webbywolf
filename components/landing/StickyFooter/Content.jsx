import React from "react";

export default function Content() {
  return (
    <div className="bg-[#171E2B] p-5 gap-4  lg:p-30 h-full w-full flex flex-col text-background overflow-hidden">
      <div className="w-1/5 sm:pt-20">
        <p className="bg-gray-500 w-fit text-white text-foreground h-fit p-3 text-3xl font-bold">
          LOGO
        </p>
      </div>
      <div className="flex w-4/5 flex-wrap">
        <div className="w-1/5 hidden sm:block" />
        <div className="flex flex-col gap-2 w-2/5 sm:w-1/5 ">
          <h3 className="mb-2 uppercase ">About</h3>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Home
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Projects
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Our Mission
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Contact Us
          </p>
        </div>

        <div className="flex flex-col gap-2 w-2/5 sm:w-1/5 ">
          <h3 className="mb-2 uppercase ">Education</h3>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            News
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Learn
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Certification
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Publications
          </p>
        </div>

        <div className="flex flex-col gap-2 w-2/5 pt-10 sm:pt-0 sm:w-1/5 ">
          <h3 className="mb-2 uppercase ">Education</h3>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            News
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Learn
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Certification
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Publications
          </p>
        </div>

        <div className="flex flex-col gap-2 w-2/5 pt-10 sm:pt-0 sm:w-1/5 ">
          <h3 className="mb-2 uppercase ">Education</h3>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            News
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Learn
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Certification
          </p>
          <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
            Publications
          </p>
        </div>
      </div>
    </div>
  );
}
// export default function Content() {
//   return (
//     <div className="bg-[#171E2B] p-5 gap-4  lg:p-30 h-full w-full flex flex-col  text-background overflow-hidden">
//       <p className="bg-gray-500 text-white text-foreground w-fit h-fit p-3 text-3xl font-bold">
//         LOGO
//       </p>
//       <div className="flex flex-col gap-5 w-full lg:flex-row ">
//         <div className="flex justify-between lg:max-w-xl">
//           <div className="flex flex-col gap-2">
//             <h3 className="mb-2 uppercase ">About</h3>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Home
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Projects
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Our Mission
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Contact Us
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="mb-2 uppercase ">Education</h3>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               News
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Learn
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Certification
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Publications
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-between ">
//           <div className="flex flex-col gap-2">
//             <h3 className="mb-2 uppercase ">Education</h3>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               News
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Learn
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Certification
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Publications
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="mb-2 uppercase ">Education</h3>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               News
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Learn
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Certification
//             </p>
//             <p className="text-gray-400 hover:text-button-secondary transition-all duration-200 hover:cursor-pointer">
//               Publications
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
