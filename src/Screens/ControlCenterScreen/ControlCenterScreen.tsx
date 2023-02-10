import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { NativeBaseProvider, ScrollView, Text } from 'native-base';

import DetailCard from "../../Components/DetailCard";
import ScanCard from "../../Components/ScanCard";
import useFetch from "../../Hooks/useFetch";

export default function ControlCenterScreen({ navigation, route }: any) {
    const { token, id } = route.params;
    const { resFetchData, fetchLoading, fetchError, fetchData }: any = useFetch();

    const handleFetch = () => {
        fetchData("/get-garden-details", token, id);

    }

    useEffect(() => { handleFetch();console.log("tetiklendi");
     }, [])

    if (!fetchLoading && !fetchError && resFetchData) {
        console.log(resFetchData.data)
        return (
            <NativeBaseProvider>
                <ScrollView bgColor={"#F1EBEB"}>
                    <ScanCard 
                    lastScan={resFetchData.data.garden.scan.time} 
                    scanType={resFetchData.data.garden.scan.type} />


                    <DetailCard 
                    numberOfTrees={resFetchData.data.plants.length} 
                    numberOfDiseasedTrees={resFetchData.data.diseasedPlants.length} 
                    diseasesDetected={resFetchData.data.diseasedPlants}
                    usedMedicinesToBe={resFetchData.data.usedMedicinesToBe}
                    automaticSpraying={resFetchData.data.garden.automaticSpraying} 
                    status={resFetchData.data.garden.status}
                    nextAutomaticScreeningTime={resFetchData.data.garden.scan.next}
                    sprayedTrees={null}
                    />
                </ScrollView>
            </NativeBaseProvider>
        )

    }
    else {
        return (
            <>
            </>
        )
    }


}