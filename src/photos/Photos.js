import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PerseveranceLatest from "./PerseveranceLatest.js";
import PerseveranceEarth from "./PerseveranceEarth.js";
import PerseveranceSol from "./PerseveranceSol.js";
import CuriosityLatest from "./CuriosityLatest.js";
import CuriosityEarth from "./CuriosityEarth.js";
import CuriositySol from "./CuriositySol.js";
import OpportunityEarth from "./OpportunityEarth.js";
import OpportunitySol from "./OpportunitySol.js";
import SpiritEarth from "./SpiritEarth.js";
import SpiritSol from "./SpiritSol.js";
import PhotosInfo from "./PhotosInfo.js";
import PerseveranceInfo from "./PerseveranceInfo.js";
import CuriosityInfo from "./CuriosityInfo.js";
import OpportunityInfo from "./OpportunityInfo.js";
import SpiritInfo from "./SpiritInfo.js";

function Photos() {
    return (
        <>
        <Tabs>
            {/* First nav bar  */}
            <TabList className="navBar">
                <Tab className="tab">Info</Tab>
                <Tab className="tab">Perseverance</Tab>
                <Tab className="tab">Curiosity</Tab>
                <Tab className="tab">Opportunity</Tab>
                <Tab className="tab">Spirit</Tab>
        </TabList>

        <TabPanel>
            <PhotosInfo />
        </TabPanel>


        {/* Perseverance nav bar  */}
        <TabPanel>
            <Tabs>
                <TabList className="navBar">
                    <Tab className="tab">Info</Tab>
                    <Tab className="tab">Latest</Tab>
                    <Tab className="tab">Search by Earth Date</Tab>
                    <Tab className="tab">Search by Martian Sol</Tab>
                </TabList>

            <TabPanel>
                <PerseveranceInfo />
            </TabPanel>
            <TabPanel>
                <PerseveranceLatest />
            </TabPanel>
            <TabPanel>
                <PerseveranceEarth />
            </TabPanel>
            <TabPanel>
                <PerseveranceSol />
            </TabPanel> 

            </Tabs>  
        </TabPanel>



        {/* Curiosity Nav Bar  */}

        <TabPanel>
            <Tabs>
                <TabList className="navBar">
                    <Tab className="tab">Info</Tab>
                    <Tab className="tab">Latest</Tab>
                    <Tab className="tab">Search by Earth Date</Tab>
                    <Tab className="tab">Search by Martian Sol</Tab>
                </TabList>

                <TabPanel>
                   <CuriosityInfo />
                </TabPanel>
                <TabPanel>
                    <CuriosityLatest />
                </TabPanel>
                <TabPanel>
                    <CuriosityEarth />
                </TabPanel>
                <TabPanel>
                    <CuriositySol />
                </TabPanel>

            </Tabs>
        </TabPanel>

        {/* Opportunity Nav Bar  */}

        <TabPanel>
            <Tabs>
                <TabList className="navBar">
                    <Tab className="tab">Info</Tab>
                    <Tab className="tab">Search by Earth Date</Tab>
                    <Tab className="tab">Search by Martian Sol</Tab>
                </TabList>

                <TabPanel>
                    <OpportunityInfo />

                </TabPanel>
                <TabPanel>
                    <OpportunityEarth />
                </TabPanel>
                <TabPanel>
                    <OpportunitySol />
                </TabPanel>

            </Tabs>
        </TabPanel>

        {/* Spirit Nav Bar  */}

        <TabPanel>
            <Tabs>
                <TabList className="navBar">
                    <Tab className="tab">Info</Tab>
                    <Tab className="tab">Search by Earth Date</Tab>
                    <Tab className="tab">Search by Martian Sol</Tab>
                </TabList>

                <TabPanel>
                    <SpiritInfo />
                </TabPanel>
                <TabPanel>
                    <SpiritEarth />
                </TabPanel>
                <TabPanel>
                    <SpiritSol />
                </TabPanel>

            </Tabs>
        </TabPanel>

        </Tabs>


        </>
    )
}

export default Photos;