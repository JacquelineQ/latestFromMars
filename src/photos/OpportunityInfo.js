import React from "react";

function OpportunityInfo() {
    return (
        <>
        <div className="info-text-container">
                    <p className="info-text">
                    Opportunity is a completed rover mission.
                    <br/>
                    <br/>
                    Launch Date: 2003-07-07
                    <br/>
                    <br/>
                    Landing Date: 2004-01-25
                    <br/>
                    <br/>
                    Max Earth Date: 2018-06-11
                    <br/>
                    <br/>
                    Max Martian Sol: 5111
                    <br/>
                    <br/>
                    Total Photos: 198439
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

export default OpportunityInfo;