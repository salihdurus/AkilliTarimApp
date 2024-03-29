import React, { useState, useEffect } from "react";
import { NativeBaseProvider, ScrollView, Text, Modal, Button } from 'native-base';
import { useSelector } from 'react-redux'
import io from "socket.io-client";

import DetailCard from "../../components/DetailCard";
import ScanCard from "../../components/ScanCard";
import useFetch from "../../hooks/useFetch";

export default function ControlCenterScreen({ navigation, route }: any) {
    // const { token, id } = route.params;
    const token = useSelector((s: any) => s.userToken);
    const id = useSelector((s: any) => s.gardenId)
    const [modalVisible, setModalVisible] = useState(false);

    const { resFetchData, fetchLoading, fetchError, fetchData }: any = useFetch();

    const handleFetch = () => {
        fetchData("/get-garden-details", token, id);
    }

    useEffect(() => {
        handleFetch();
    }, [route.params])

    const handleDiseaseDetected = () => {
        navigation.navigate("Details", { data: resFetchData.data });

    }
    const handleScan = () => {
        console.log("Tarama Başlat");
        setModalVisible(true);

    }
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
                        onPress={handleDiseaseDetected}
                        onScan={handleScan}
                    />
                </ScrollView>

                <Modal isOpen={modalVisible} onClose={() => setModalVisible(!modalVisible)} safeAreaTop={true}  >

                    <Modal.Content>

                    </Modal.Content>
                </Modal>

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