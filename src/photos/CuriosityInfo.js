import React from "react";

function CuriosityInfo(){
    return (
        <>
         <div className="info-text-container">
                    <p className="info-text">The Curiosity Rover is one of two active rover missions.
                    <br/>
                    <br/>
                    Launch Date: 2011-11-26
                    <br/>
                    <br/>
                    Landing Date: 2012-08-06
                    </p>

                    <table>
                        <thead>
                        <tr>
                            <th>Camera</th>
                            <th>Abbreviation</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Front Hazard Avoidance Camera</td>
                            <td>FHAZ</td>
                        </tr>

                        <tr>
                            <td>Rear Hazard Avoidance Camera</td>
                            <td>RHAZ</td>
                        </tr>

                        <tr>
                            <td>Mast Camera</td>
                            <td>MAST</td>
                        </tr>

                        <tr>
                            <td>Chemistry and Camera Complex</td>
                            <td>CHEMCAM</td>
                        </tr>

                        <tr>
                            <td>Mars Hand Lens Imager</td>
                            <td>MAHLI</td>
                        </tr>

                        <tr>
                            <td>Mars Descent Imager</td>
                            <td>MARDI</td>
                        </tr>

                        <tr>
                            <td>Navigation Camera</td>
                            <td>NAVCAM</td>
                        </tr>
                        </tbody>
                    </table>
                    

                    </div>
        </>
    );
}

export default CuriosityInfo;