import React from "react";
import "./style.css";
import AdvertisePhoto1 from "../Image/add/banner14.jpg";
import AdvertisePhoto2 from "../Image/add/banner15.jpg";
import AdvertiseItem from "./AdvertiseItem";

const AdvertiseArea = () => {
  return (
    <div className="mt-40">
      <div className="container">
        <div className="row">
          <div className="col-md-6 advertise-left">

            <AdvertiseItem
              image={AdvertisePhoto1}
            />

          </div>
          <div className="col-md-6 advertise-right">

              <AdvertiseItem
                  image={AdvertisePhoto2}
               />
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseArea;
