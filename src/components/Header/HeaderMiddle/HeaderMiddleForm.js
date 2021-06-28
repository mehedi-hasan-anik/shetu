import React from "react";
import categores from "../../../data/categores.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const HeaderMiddleForm = () => {
  // const [query, setQuery] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="navbar-search" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group input-group-area">
        <input
          defaultValue=""
          ref={register}
          type="text"
          id="search"
          className="form-control search-field product-search-field"
          dir="ltr"
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          name="search-value"
          placeholder="Search for products, brands and categories"
        />
        <div className="input-group-addon search-categories hidden-sm">
          <select
            ref={register}
            name="product_cat"
            id="product_cat"
            className="postform resizeselect"
            style={{ width: "101px" }}
          >
            <option value="0" selected="selected">
              All Categories
            </option>
            {categores.map((singleItem, i) => (
              <option key={i} value={singleItem.values}>
                {singleItem.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group-btn">
          <input
            type="hidden"
            id="search-param"
            name="post_type"
            value="product"
          />
          <button type="submit" ons className="btn searchBtn">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderMiddleForm;
