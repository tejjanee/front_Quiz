import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar, QuizCard } from "../../component/index";
import "./Home.css";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://quiz-backend-teal.vercel.app/api/v1/categories"
        );     
        setCategories(response.data);
       
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Navbar route="home" />
      <main className="main d-flex wrap gap-md align-center justify-center">
      {categories.length > 0 ? (
          categories.map((category) => (
            <QuizCard quizCategory={category} key={category.id} />
          ))
        ) }

      </main>
    </Fragment>
  );
};
