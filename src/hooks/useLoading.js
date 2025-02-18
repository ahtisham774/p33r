import { useContext } from "react";
import { LoadingContext } from "@contexts/index";

const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  return { loading, setLoading };
};

export default useLoading;
