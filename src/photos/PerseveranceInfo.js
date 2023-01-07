import React from "react";

function PerseveranceInfo(){
    return (
        <>
         <div className="info-text-container">
            <p className="info-text">The Perseverance rover is one of two currently active rover missions.
            <br/>
            <br/>
            Launch Date: 2020-07-30
            <br/>
            <br/>
            Landing Date: 2021-02-18
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
                    <td>Rover Up-Look Camera</td>
                    <td>EDL_RUCAM</td>
                </tr>

                <tr>
                    <td>Rover Down-Look Camera</td>
                    <td>EDL_RDCAM</td>
                </tr>

                <tr>
                    <td>Descent Stage Down-Look Camera</td>
                    <td>EDL_DDCAM</td>
                </tr>

                <tr>
                    <td>Parachute Up-Look Camera A</td>     
                    <td>EDL_PUCAM1</td>                
                </tr>

                <tr>
                    <td>Parachute Up-Look Camera B</td>
                    <td>EDL_PUCAM2</td>
                </tr>

                <tr>
                    <td>Navigation Camera - Left</td>
                    <td>NAVCAM_LEFT</td>
                </tr>

                <tr>
                    <td>Navigation Camera - Right</td>
                    <td>NAVCAM_RIGHT</td>
                </tr>

                <tr>
                    <td>Mast Camera Zoom - Right</td>
                    <td>MCZ_RIGHT</td>
                </tr>

                <tr>
                    <td>Mast Camera Zoom - Left</td>
                    <td>MCZ_LEFT</td>
                </tr>

                <tr>
                    <td>Front Hazard Avoidance Camera - Left</td>
                    <td>FRONT_HAZCAM_LEFT_A</td>
                </tr>

                <tr>
                    <td>Front Hazard Avoidance Camera - Right</td>
                    <td>FRONT_HAZCAM_RIGHT_A</td>
                </tr>

                <tr>
                    <td>Rear Hazard Avoidance Camera - Left</td>
                    <td>REAR_HAZCAM_LEFT</td>
                </tr>

                <tr>
                    <td>Rear Hazard Avoidance Camera - Right</td>
                    <td>REAR_HAZCAM_RIGHT</td>
                </tr>

                <tr>
                    <td>MEDA Skycam</td>
                    <td>SKYCAM</td>
                </tr>

                <tr>
                    <td>SHERLOC WATSON Camera</td>
                    <td>SHERLOC_WATSON</td>
                </tr>
                </tbody>
            </table>
            </div>
        </>
    );
}

export default PerseveranceInfo;