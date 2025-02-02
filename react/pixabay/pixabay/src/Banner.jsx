import { useState } from "react";
import Card from "./Card";
import Video from "./Video";
function Banner() {
    let [images,SetImages]=useState([])
    let [videos,SetVideos]=useState([])
    let [query,SetQuery]=useState("")
    let [srch,SetSearch]=useState("")
    
    let key="47635507-7ce5810e13154770e69cba1c3";
    let iurl="https://pixabay.com/api/"+"?key="+key+"&q=";
    let vurl="https://pixabay.com/api/videos/"+"?key="+key+"&q=";

    const imageUrl = (e) => {
        e.preventDefault();
        SetSearch("Image");
        fetch(iurl+query)
        .then((data)=>data.json())
        .then((data)=>SetImages(data.hits))
        .catch((err)=>console.log(err)) 
       
    }
    const videoUrl = (e) => {
        e.preventDefault();
        SetSearch("Video");
        fetch(vurl+query)
        .then((data)=>data.json())
        .then((data)=>SetVideos(data.hits))
        .catch((err)=>console.log(err)) 
    }
    return (
        <>
            <section className="text-center bgimg">
                <div className="py-5 text-white" style={{ backgroundColor: "rgba(67,140,133,0.7)" }}>
                    <p className="display-6 fw-bold mt-5">Search Images and Videos</p>
                    <form>
                        <div className="input-group w-75 m-auto mb-5 py-4">
                            <input type="text" name="" className="fs-6 form-control" placeholder="Enter keyword to search"
                            value={query} onChange={(e)=>{SetQuery(e.target.value)}} />
                            <button className="btn btn-dark"  onClick={ (e)=>imageUrl(e)} >Images</button>
                            <button className="btn btn-dark" onClick={(e)=>videoUrl(e)}>Videos</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="container">            
            <div className="row">
                { 
                srch=="image" ?
                images.map((record,i)=><Card record={record} key={i}/> ) 
                :
                videos.map((record,i)=><Video record={record} key={i}/> ) 
                }
                

            </div>
            </div>
        </>
    );
}
export default Banner;
