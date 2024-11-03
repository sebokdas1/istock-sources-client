import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import MakingAdmin from "./MakingAdmin";
import RemoveUserModal from "./RemoveUserModal";

const MakeAdmin = () => {
  const [rmUser, setRMUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`${process.env.REACT_APP_serverLink}/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl mt-2 font-bold text-purple-500">
        Manage Your users
      </h2>
      <div className="overflow-x-auto mt-2">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <MakingAdmin
                index={index}
                key={user._id}
                refetch={refetch}
                user={user}
                setRMUser={setRMUser}
              ></MakingAdmin>
            ))}
          </tbody>
        </table>
      </div>
      {rmUser && (
        <RemoveUserModal
          rmUser={rmUser}
          setRMUser={setRMUser}
        ></RemoveUserModal>
      )}
    </div>
  );
};

export default MakeAdmin;
