import React from 'react'

const OverviewItem = ({title, subtitile, icon}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="single_overview">
                <div className="overview_icon">
                    {icon}
                </div>
                <div className="overview_details">
                    <h4>{title}</h4>
                    <h6>{subtitile}</h6>
                </div>
            </div>
        </div>
    )
}

export default OverviewItem
