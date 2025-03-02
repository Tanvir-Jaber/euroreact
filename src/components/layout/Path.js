import { useLocation } from "react-router-dom";

const Path = () => {
  const location = useLocation();
  return <div>{location.pathname}</div>;
};

export default Path;
