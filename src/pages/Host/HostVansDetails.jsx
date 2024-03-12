import React from "react";
import { useParams,NavLink,Outlet,Link } from "react-router-dom";
export default function HostVansDetails(){
    const param=useParams();
    const [currentVan,setVan]=React.useState(null);

    React.useEffect(()=>{
        fetch(`/api/host/vans/${param.id}`)
           .then(res => res.json())
           .then (data => setVan(data.vans))
    },[param.id])
    
    if (!currentVan) {
        return (
           <section className="container">
                <div className="max-width"> 
                    <h1>Loading...</h1>
                </div>
           </section>
        )
    }
    const style={
        fontWeight:"bold",
        textDecoration:"underline",
        color:"#161616",
      }
    return (
        <div>
            <section className="container">
                <div className="max-width">
                    <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    >&larr; <span>Back to all vans</span></Link>
                    <div className="host-van-detail-layout-container">
                        <div className="host-van-detail">
                            <img src={currentVan.imageUrl} />
                            <div className="host-van-detail-info-text">
                                <i
                                    className={`van-type van-type-${currentVan.type}`}
                                >
                                    {currentVan.type}
                                </i>
                                <h3>{currentVan.name}</h3>
                                <h4>${currentVan.price}/day</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="container">
                <div className="max-width">
                    <nav className="host-van-detail-nav">
                        <NavLink to="." end style={({isActive})=>isActive ? style : null}>Details</NavLink>
                        <NavLink to="pricing" style={({isActive})=>isActive ? style : null}>Pricing</NavLink>
                        <NavLink to="photos" style={({isActive})=>isActive ? style : null}>Photos</NavLink>
                    </nav>
                    <Outlet context={{currentVan}}/>
                </div>

            </section>
        </div>
    )
}