import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import  toast, { Toaster } from "react-hot-toast";

import styles from "./SigninPage.module.css"
function SigninPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
   const {status}=useSession()
  useEffect(()=>{
     if (status === "authenticated") router.replace("/dashboard");
  },[status])
  
  
   const loginHandler = async () => {
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
      if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className={styles.signinForm}>
      <h3>فرم ورود</h3>
      <input
        type="text"
        placeholder="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="رمزعبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>ورود</button>
      {/* <div>
        <p>ثبت نام کاربر جدید : </p>
        <Link href="/signup">ثبت نام </Link>
      </div> */}
      <Toaster/>
    </div>
  );
}


export default SigninPage