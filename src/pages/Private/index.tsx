import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Private page</h2>
      Hello {auth.user?.name}, are you ok?
    </div>
  );
};
