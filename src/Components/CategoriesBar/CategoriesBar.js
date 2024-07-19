import styles from "./CategoriesBar.module.css";
import { NavLink } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { useVideo } from "../../Contexts/VideoProvider";
import url from "../../config";

const CategoriesBar = () => {
  const activeStyle = {
    color: "#000",
    backgroundColor: "#c4b5fd",
  };
  const { categories } = useVideo();

  useCategory("get", `${url}categories`);

  return (
    <div className={styles.categoriesContainer}>
      <NavLink
        to="/"
        activeStyle={activeStyle}
        end
        className={styles.categoryItem}
      >
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category._id}
          to={`/categories/${category._id}`}
          activeStyle={activeStyle}
          end
          className={styles.categoryItem}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoriesBar;
