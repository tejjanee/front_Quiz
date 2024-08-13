import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    const data1 = await axios.post("https://quiz-backend-teal.vercel.app/api/auth/register", {
      username: username,
      number: number,
      email: email,
      password: password,
    });
    const {
      data: { accessToken },
    } = await axios.post("https://quiz-backend-teal.vercel.app/api/auth/login", {
      number: number,
      password: password,
    });

    console.log("Signed Up");
    localStorage.setItem("token", accessToken);
    // localStorage.setItem("username", username);
    if (accessToken) {
      console.log("login");
    }
    return { accessToken };
  } catch (err) {
    console.log("error adding user to database");
    return { error: "Signup failed. Please try again." };
  }
};
