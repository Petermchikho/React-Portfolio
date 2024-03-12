import React from "react";
import { Link,useSearchParams } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
    }, [])
    const [searchParam,setSearchParam]=useSearchParams()
    const typeFilter=searchParam.get("type")
    console.log(typeFilter)
    const displayVans=typeFilter ? vans.filter(char=> char.type.toLowerCase()===typeFilter) : vans

    const vanElements = displayVans.map(van => (
        
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
        
        
    ))

    return (
        <div className="container min-height">
            <div className="van-list-container max-width">
                <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                    <Link to="?type=simple" className="van-type simple" >Simple</Link>
                    <Link to="?type=luxury" className="van-type luxury" >Luxury</Link>
                    <Link to="?type=rugged" className="van-type rugged" >Rugged</Link>
                    <Link to=" " className="van-type clear-filters" >Clear filter</Link>

                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}