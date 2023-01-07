import React from "react";

function PhotosInfo() {
    return (
        <div className="info-text-container">
            <p className="info-text">Use this section to explore photos from all four of the NASA Mars Rovers!
                The quickest way to get started is to click on either of the two active rover missions,
                Curiosity and Perseverance, and click "Latest" to see the latest photos sent directly from Mars!
                Be aware that these photos refresh daily.
                <br/>
                <br/>

                You can also search through photos from any rover by Earth Date or Martian Sol, and further filter 
                by camera.
            </p>
            <br/>
            <p>ATTENTION SAFARI MOBILE USERS: The Safari Mobile Browser does not support minimum and max date inputs, be sure to check the dates that photos are available for the rover you are searching</p>
            </div>
    )
}

export default PhotosInfo;