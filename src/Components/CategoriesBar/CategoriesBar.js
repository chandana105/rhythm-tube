import styles from "./CategoriesBar.module.css";
import { NavLink } from "react-router-dom";
const CategoriesBar = () => {
  const activeStyle = {
    color: "#000",
    backgroundColor: "#fff",
  };
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
      <NavLink
        to="/categories"
        activeStyle={activeStyle}
        end
        className={styles.categoryItem}
      >
        Arijit Singh
      </NavLink>
      <NavLink
        to="/categories/video"
        activeStyle={activeStyle}
        end
        className={styles.categoryItem}
      >
        Papon
      </NavLink>
    </div>
  );
};

export default CategoriesBar;
