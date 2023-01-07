import React from "react";

function SpiritInfo(){
    return (
        <>
        <div className="info-text-container">
                    <p className="info-text">The Spirit Rover is a completed mission.
                    <br/>
                    <br/>
                    Launch Date: 2003-06-10
                    <br/>
                    <br/>
                    Landing Date: 2004-01-04
                    <br/>
                    <br/>
                    Max Available Earth Date: 2010-03-21
                    <br/>
                    <br/>
                    Max Available Martian Sol: 2208
                    <br/>
                    <br/>
                    Total Photos: 124550
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
                            <td>Navigation Camera</td>
                            <td>NAVCAM</td>
                        </tr>

                        <tr>
                            <td>Panoramic Camera</td>
                            <td>PANCAM</td>
                        </tr>

                        <tr>
                            <td>Miniature Thermal Emission Spectrometer (Mini-TES)</td>
                            <td>MINITES</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
        </>
    );
}

export default SpiritInfo;