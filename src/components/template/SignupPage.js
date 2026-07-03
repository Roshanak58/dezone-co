import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from "./SigninPage.module.css"

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState('');
  const router = useRouter();
   const {status}=useSession()
  useEffect(()=>{
     if (status !== "authenticated") router.replace("/");
  },[status])
  
    // تابعی برای مدیریت تغییر انتخاب
    const handleChange = (event) => {
      setLevel(event.target.value);
    };

   const signupHandler = async () => {
    
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, password, level }),
      headers: { "Content-Type": "application/json" },
    });
      if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/dashboard");
    }
  };
  

  return (
    <div className={styles.signinForm}>
      <h3>ثبت نام کاربر جدید</h3>
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
      <select id="options" value={level} onChange={handleChange} className={styles.drop}>
        <option value="">سطح دسترسی</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <button onClick={signupHandler}>ثبت کاربر جدید</button>
      {/* <div>
        <p>ثبت نام کاربر جدید : </p>
        <Link href="/signup">ثبت نام </Link>
      </div> */}
      <Toaster/>
    </div>
  );
}

export default SignupPage