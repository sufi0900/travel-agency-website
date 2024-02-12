import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useUpdateUserRoleMutation } from "../services/appApi";
import axios from "../axios";
import Loading from "./Loading";
function ClientsAdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateUserRole, { isLoading: isUpdating }] =
    useUpdateUserRoleMutation();
  const makeUserAdmin = async (userId) => {
    try {
      // Get token from local storage or your state management
      const token = localStorage.getItem("token") || null;

      // Making sure we have a token before making the request
      if (!token) {
        console.error("No token found, the user might not be logged in.");
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.patch(`/users/${userId}/make-admin`, {}, config);
      // Refresh the user list or show a success message
    } catch (error) {
      // Handle any errors
      console.error("Failed to update user role:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        setUsers(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  if (loading) return <Loading />;
  if (users?.length === 0)
    return <h2 className="py-2 text-center">No users yet</h2>;

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Client Id</th>
          <th>Client Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                onClick={() => makeUserAdmin(user._id)}
                disabled={isUpdating}
              >
                Make Admin
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ClientsAdminPage;
