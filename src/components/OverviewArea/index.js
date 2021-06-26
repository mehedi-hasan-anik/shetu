import React from 'react';
import './OverviewArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons'
import OverviewItem from './OverviewItem';

const OverviewArea = () => {
    return (
        <section className="overview_area hidden-xs">
                <div className="container">
                    <div className="row overview_inner">
                        
                        <OverviewItem 
                            title="Free Shipping"
                            subtitile="From 345/E NewYork"
                            icon={<FontAwesomeIcon  icon={faTruck} />}
                             />

                             <OverviewItem 
                            title="Cash on Delivery"
                            subtitile="The internet Tend To Repeat"
                            icon={<FontAwesomeIcon  icon={faMoneyBill} />}
                             />

                           <OverviewItem 
                            title="45 Days Return"
                            subtitile="Making it Look Like Readable"
                            icon={<FontAwesomeIcon  icon={faUndo} />}
                             />

                             <OverviewItem 
                            title="Opening All Week"
                            subtitile="8AM - 09PM"
                            icon={<FontAwesomeIcon  icon={faClock} />}
                             />

                    </div>
                </div>
            </section>
    );
};

export default OverviewArea;