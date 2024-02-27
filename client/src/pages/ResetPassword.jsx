import React , { useState } from "react";

const ResetPassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
  } = useState({ mode: "onChange", });
  return 
    <div>ResetPassword</div>;
  
};

export default ResetPassword;