import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post("https://quiz-backend-teal.vercel.app/api/auth/login", {
      number: number,
      password: password,
    });
    console.log("Logged IN");
    
    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);

    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
    return { error: "Login failed. Please try again." };
  }
};


