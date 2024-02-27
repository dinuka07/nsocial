import React , { useState } from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors},
  } = useForm({ mode: "onChange", });
  return 
    <div>ResetPassword</div>;
  
};

export default ResetPassword;