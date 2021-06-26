import React from 'react';
import './AdvertiseArea2.css';
import AdvertiseArea2Photo1 from '../Image/add/banner16.jpg';
import AdvertiseArea2Photo2 from '../Image/add/banner17.jpg';
import AdvertiseArea2Photo3 from '../Image/add/banner18.jpg';
import AdvertiseItem from '../AdvertiseArea/AdvertiseItem';

const AdvertiseArea2 = () => {
    return (
        <div className="my-40">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 mb-2">

                              <AdvertiseItem
                                 image={AdvertiseArea2Photo1}
                              />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 mb-2">
                             <AdvertiseItem
                                 image={AdvertiseArea2Photo2}
                              />
                        </div>
                        <div className="col-md-4 hidden-sm hidden-xs mb-2">
                             <AdvertiseItem
                                 image={AdvertiseArea2Photo3}
                              />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AdvertiseArea2;