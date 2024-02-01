import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import Loading from "../../Shared/Loading";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  //   const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [updateAvailable, setupdateAvailable] = useState(false);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://istock-sources-server.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  // console.log(users);
  if (isLoading) {
    return <Loading />;
  }

  const currentUser = users.filter((userr) => userr.email === user.email);

  const me = {
    displayName: "Sebok Das",
    photoURL: "https://i.ibb.co/Y0XWH6Y/User-Profile-PNG.png",
    phoneNumber: "01730661569",
    education: "bba",
    location: "dhaka, Bangladesh",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
  };
  const handleUpdate = (data) => {
    data.preventDefault();
    const newName = data.target.name.value;
    const education = data.target.education.value;
    const location = data.target.location.value;
    const phone = data.target.phone.value;
    const linkedin = data.target.linkedin.value;
    const github = data.target.github.value;
    const photo = data.target.photo.value;

    // fetch("http://localhost:5000/user", {
    //   method: "GET",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));

    const newUserDetails = {
      displayName: newName ? newName : me.displayName,
      photoURL: photo ? photo : me.photoURL,
      phoneNumber: phone ? phone : me.phoneNumber,
      education: education ? education : me.education,
      location: location ? location : me.location,
      linkedin: linkedin ? linkedin : me.linkedin,
      github: github ? github : me.github,
    };

    fetch(`http://localhost:5000/user/${currentUser.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newUserDetails),
    })
      .then((res) => {
        if (res.status === 403) {
          alert(`Failed to update profile`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          alert(`successfully update profile`);
        }
      });

    setupdateAvailable(false);
    // console.log(newUserDetails);
  };

  return (
    // <div>
    //   <div className="lg:flex  w-[90%] mx-auto gap-4 items-center">
    //     <div>
    //       <img
    //         width="120px"
    //         src={
    //           user.photoURL
    //             ? user.photoURL
    //             : "https://i.ibb.co/Y0XWH6Y/User-Profile-PNG.png"
    //         }
    //         alt=""
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <h2>
    //         <span className="text-xl font-bold text-gray-600">Name: </span>
    //         <span className="font-semibold">{me?.displayName}</span>
    //       </h2>
    //       <h3>
    //         <span className="text-xl font-bold text-gray-600">Education:</span>{" "}
    //         <span className="font-semibold">{me?.education}</span>
    //       </h3>
    //       <h4>
    //         <span className="text-xl font-bold text-gray-600">Location:</span>{" "}
    //         <span className="font-semibold">{me?.location}</span>
    //       </h4>
    //       <div className="flex gap-2 mt-2">
    //         <a
    //           href={`mailto:${user.email}`}
    //           target="_blank"
    //           className="text-yellow-700 text-2xl"
    //         >
    //           <AiOutlineMail />
    //         </a>

    //         <a
    //           href={me.linkedin}
    //           target="_blank"
    //           className="text-blue-700 text-2xl"
    //         >
    //           <AiFillLinkedin />
    //         </a>

    //         <a
    //           href={me.github}
    //           target="_blank"
    //           className="text-gray-700 text-2xl"
    //         >
    //           <AiFillGithub />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {!updateAvailable && (
    //     <h2
    //       className="flex items-center gap-1 text-green-500 justify-center cursor-pointer hover:underline"
    //       onClick={() => setupdateAvailable(true)}
    //     >
    //       Edit profile
    //       <span>
    //         <FaRegEdit />
    //       </span>
    //     </h2>
    //   )}

    //   {updateAvailable && (
    //     <div className="w-2/3 mx-auto mt-5">
    //       <form onSubmit={handleUpdate}>
    //         <span className="grid lg:grid-cols-2">
    //           <label className="block">
    //             <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    //               Name
    //             </span>
    //             <input
    //               type="text"
    //               name="name"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder={user.displayName}
    //             />
    //           </label>

    //           <label className="block">
    //             <span className=" text-sm font-medium text-slate-700">
    //               Education
    //             </span>
    //             <input
    //               type="text"
    //               name="education"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder="BBA/MBAschool/college/university"
    //             />
    //           </label>

    //           <label className="block">
    //             <span className=" text-sm font-medium text-slate-700">
    //               Location
    //             </span>
    //             <input
    //               type="text"
    //               name="location"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder="City, Country"
    //             />
    //           </label>

    //           <label className="block">
    //             <span className=" text-sm font-medium text-slate-700">
    //               Phone Number
    //             </span>
    //             <input
    //               type="text"
    //               name="phone"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder="01*****"
    //             />
    //           </label>

    //           <label className="block">
    //             <span className=" block text-sm font-medium text-slate-700">
    //               Linekedin
    //             </span>
    //             <input
    //               type="text"
    //               name="linkedin"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder="linkedin profile link"
    //             />
    //           </label>

    //           <label className="block">
    //             <span className=" block text-sm font-medium text-slate-700">
    //               Github
    //             </span>
    //             <input
    //               type="text"
    //               name="github"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder="github profile link"
    //             />
    //           </label>

    //           <label className="block">
    //             <span className=" block text-sm font-medium text-slate-700">
    //               Photo URL
    //             </span>
    //             <input
    //               type="text"
    //               name="photo"
    //               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
    //               placeholder="photo link"
    //             />
    //           </label>
    //         </span>
    //         <input
    //           type="submit"
    //           value="update profile"
    //           className="btn btn-primary  mt-3 text-white"
    //         />
    //       </form>
    //     </div>
    //   )}
    // </div>
    <div className="flex justify-center align-middle">
      <h1 className="text-2xl font-bold text-green-500">UNDER DEVELOPMENT</h1>
    </div>
  );
};

export default MyProfile;
