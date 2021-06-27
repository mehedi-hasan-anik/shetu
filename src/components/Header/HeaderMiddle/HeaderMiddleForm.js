import React from "react";
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
            <option value="television">Televisions</option>
            <option value="home-theater-audio">Home Theater &amp; Audio</option>
            <option value="headphones">Headphones</option>
            <option value="digital-cameras">Digital Cameras</option>
            <option value="cells-tablets">Cells &amp; Tablets</option>
            <option value="smartwatches">Smartwatches</option>
            <option value="games-consoles">Games &amp; Consoles</option>
            <option value="printer">Printer</option>
            <option value="tv-video">TV &amp; Video</option>
            <option value="home-entertainment">Home Entertainment</option>
            <option value="tvs">TVs</option>
            <option value="speakers">Speakers</option>
            <option value="computers-laptops">Computers &amp; Laptops</option>
            <option value="laptops">Laptops</option>
            <option value="ultrabooks">Ultrabooks</option>
            <option value="notebooks">Notebooks</option>
            <option value="desktop-pcs">Desktop PCs</option>
            <option value="mac-computers">Mac Computers</option>
            <option value="all-in-one-pc">All in One PC</option>
            <option value="audio-music">Audio &amp; Music</option>
            <option value="pc-components">PC Components</option>
            <option value="speaker-systems">Speaker Systems</option>
            <option value="speaker-systems-headphones">Speaker Systems</option>
            <option value="virtual-reality">Virtual Reality</option>
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
