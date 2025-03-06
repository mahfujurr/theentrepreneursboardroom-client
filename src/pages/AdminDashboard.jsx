import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Tag, Space, message } from "antd";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://sajag-patel-server-six.vercel.app/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data));
  }, []);

  const approveUser = (id) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://sajag-patel-server-six.vercel.app/api/auth/approve/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setUsers(
          users.map((u) => (u._id === id ? { ...u, isApproved: true } : u))
        );
        message.success("User approved successfully");
      })
      .catch((error) => {
        message.error(error.response?.data?.message || "Approval failed");
      });
  };

  const blockUser = (id) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://sajag-patel-server-six.vercel.app/api/auth/block/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setUsers(
          users.map((u) => (u._id === id ? { ...u, isBlocked: true } : u))
        );
        message.warning("User blocked");
      })
      .catch((error) => {
        message.error(error.response?.data?.message || "Blocking failed");
      });
  };

  const deleteUser = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://sajag-patel-server-six.vercel.app/api/auth/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setUsers(users.filter((u) => u._id !== id));
        message.error("User deleted");
      })
      .catch((error) => {
        message.error(error.response?.data?.message || "Deletion failed");
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "blue" : "geekblue"}>{role}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "isApproved",
      key: "status",
      render: (isApproved) => (
        <Tag color={isApproved ? "green" : "volcano"}>
          {isApproved ? "Approved" : "Pending"}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          {!record.isApproved && (
            <Button
              type="primary"
              style={{ backgroundColor: "#1890ff", color: "#ffffff" }}
              onClick={() => approveUser(record._id)}
            >
              Approve
            </Button>
          )}
          {/* <Button type="default" danger onClick={() => blockUser(record._id)}>
            Block
          </Button>
          <Button
            type="default"
            style={{ backgroundColor: "#ff4d4f", color: "#ffffff" }}
            onClick={() => deleteUser(record._id)}
          >
            Delete
          </Button> */}
        </Space>
      ),
    },
  ];

  return (
    <div className="pt-5">
      <h1 className="text-4xl pb-5 max-w-7xl mx-auto px-4 lg:px-0 text-gray-100 syncopate-regular">
        ADMIN DASHBOARD
      </h1>
      <div className=" max-w-7xl mx-auto px-4 lg:px-0 bg-white rounded-lg">
        <Table columns={columns} dataSource={users} rowKey="_id" />
      </div>
    </div>
  );
};

export default AdminDashboard;
