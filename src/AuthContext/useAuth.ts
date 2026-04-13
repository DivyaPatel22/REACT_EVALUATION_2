import { useContext } from "react";
import { AuthContext } from "./Authcontext";


export default function useAuth() {
  return useContext(AuthContext)
}
