import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "black" // Dark Background
    }}>
      <Result
        status="403"
        title={<span style={{ color: "white" }}>403 - Access Denied</span>}
        subTitle={<span style={{ color: "white" }}>Sorry, you are not authorized to access this page.</span>}
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        }
      />
    </div>
  );
};

export default Unauthorized;
