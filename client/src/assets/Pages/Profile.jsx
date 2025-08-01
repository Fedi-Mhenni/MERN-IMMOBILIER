import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 w-full max-w-sm mx-auto flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold text-center my-4">Profile</h1>

      <form className="w-full flex flex-col gap-4 items-center">
        <img  src={currentUser.avatar} alt="profile"  className="rounded-full h-24 w-24 object-cover cursor-pointer mt-2" />

        <input type="text" placeholder="username"  id="username" className="border p-3 rounded-lg w-full"/>

        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg w-full"/>

        <input type="password" placeholder="password"  id="password" className="border p-3 rounded-lg w-full" />
        
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 w-full"> Update</button>
      </form>

      <div className="flex justify-between w-full mt-2 text-red-700 text-sm">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}

