import { useState } from "react";
import { Form, Input, Button, Card, message, Spin } from "antd";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ✅ লোডিং স্টেট

  const onFinish = async (values) => {
    setLoading(true); // ✅ লোডিং শুরু
    try {
      await login(values);
      message.success("Login Successful!");
      navigate("/");
    } catch (error) {
      message.error(error.response?.data?.message || "Login failed");
    }
    setLoading(false); // ✅ লোডিং শেষ
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <Card title="Login" className="w-96">
        <Spin spinning={loading}> 
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
        </Spin>
      </Card>
    </div>
  );
};

export default Login;
