import React from 'react'

function Loading(){
    return <div className="loader"></div>
}

export default function Information({location, loading}) {
    console.log(loading);
  return (
    <div className="information">
      {
      location === null && !loading ?
        <p className="information__error">Location not found.</p>
      :
      loading ?
        <Loading/>
        :
        <>
        <div className="information__row">
            <p className="information__title">IP ADDRESS</p>
            <p className="information__value">{location.ip}</p>
        </div>
        <div className="information__separator"></div>
        <div className="information__row">
            <p className="information__title">LOCATION</p>
            <p className="information__value">{location.location.city}</p>
        </div>
        <div className="information__separator"></div>
        <div className="information__row">
            <p className="information__title">TIMEZONE</p>
            <p className="information__value">UTC {" "+location.location.timezone}</p>
        </div>
        <div className="information__separator"></div>
        <div className="information__row">
            <p className="information__title">ISP</p>
            <p className="information__value">{location.isp}</p>
        </div>
        </>

        }
    </div>

  )
}
