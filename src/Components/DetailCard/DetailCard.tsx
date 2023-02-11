import React from 'react-native';
import { View, Text, Image } from 'react-native';
import styles from './DetailCard.style';
import Button from '../Button';

export default function ScanCard({ numberOfTrees, numberOfDiseasedTrees, diseasesDetected, usedMedicinesToBe, automaticSpraying, status, nextAutomaticScreeningTime, sprayedTrees }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image source={require("../../Assets/tree.png")} style={{ tintColor: "white" }} />
                <View style={styles.content}>
                    <Text style={styles.descriptionText}>Ağaç Sayısı: {numberOfTrees > 0 ? numberOfTrees : "Tarama Gerekli"}</Text>
                    <Text style={styles.descriptionText}>Hastalık Tespit Edilen Ağaç Sayısı: {numberOfDiseasedTrees ? numberOfDiseasedTrees : "Tarama Gerekli"}</Text>
                </View>
            </View>

            {diseasesDetected && diseasesDetected.length > 0 ? <View style={styles.body}>
                <Image source={require("../../Assets/virus.png")} style={{ tintColor: "white" }} />
                <View style={styles.content}>
                    <Text style={[styles.descriptionText, { marginBottom: 5, }]}>Tespit Edilen Hastalıklar:</Text>
                    {diseasesDetected ?
                        diseasesDetected.map((item: String, index: any): any => {
                            return <Text key={index} style={styles.descriptionText}>{item}</Text>
                        })
                        : <></>
                    }

                </View>
            </View> : <></>}

            {diseasesDetected && diseasesDetected.length > 0 ? <View style={styles.body}>
                <Image source={require("../../Assets/medical.png")} style={{ tintColor: "white" }} />
                <View style={styles.content}>
                    <Text style={[styles.descriptionText, { marginBottom: 5, }]}>Kullanılacak İlaçlar:</Text>
                    {
                        usedMedicinesToBe ?
                            usedMedicinesToBe.map((item: String, index: any) => {
                                return <Text key={index} style={styles.descriptionText}>{item}</Text>
                            }) : <></>}
                </View>
            </View> : <></>}


            <View style={styles.body}>
                <Image source={require("../../Assets/vaccines.png")} style={{ tintColor: "white" }} />

                <View style={styles.content}>

                    <Text style={[styles.descriptionText, { marginBottom: 5, }]}>Otomatik İlaçlama - {automaticSpraying === true ? "Açık" : "Kapalı"}</Text>
                    {
                        sprayedTrees ?
                            sprayedTrees.map((item: String, index: any) => {
                                return <Text key={index} style={styles.descriptionText}>{item}</Text>
                            }) : <></>}
                </View>
            </View>

            <View style={[styles.body, { borderBottomWidth: 0 }]}>
                <Image source={require("../../Assets/pending.png")} style={{ tintColor: "white" }} />
                <View style={styles.content}>
                    <Text style={[styles.descriptionText, { marginBottom: 15 }]}>Durum:</Text>
                    <Text style={[styles.descriptionText, { marginBottom: 20 }]}>{status}</Text>
                    <Text style={styles.descriptionText}>Sonraki Otomatik Tarama Tarihi:</Text>
                    <Text style={styles.descriptionText}>{nextAutomaticScreeningTime ? nextAutomaticScreeningTime : "İlk tarama gerçekleşmedi"}</Text>
                </View>
            </View>

            <View style={[styles.body, { borderBottomColor: "#707070", justifyContent: "center", paddingLeft: 0, paddingRight: 0 }]}>
                <Button name="Tarama Başlat" />
            </View>

        </View>
    );
}