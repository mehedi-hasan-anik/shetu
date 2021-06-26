import React from "react";

const HeaderMiddleMobile = () => {
  return (
    <div>
      <div className="col-xs-12">
        <div className="form-group has-feedback has-search">
          <span className="glyphicon glyphicon-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for products, brands and more"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddleMobile;
