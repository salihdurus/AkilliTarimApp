import React from 'react-native';
import { View, Text, Image } from 'react-native';

import styles from './ScanCard.style';


export default function ScanCard({ lastScan, scanType }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image source={require("../../Assets/scan.png")} style={{ tintColor: "white" }} />
                <View style={styles.content}>
                    <Text style={styles.descriptionText}>Son Kontrol Tarihi: {lastScan ? lastScan : "Henüz Kontrol Edilmemiş !"}</Text>
                    <Text style={styles.descriptionText}>Kontrol Türü: {scanType ? scanType : "Henüz Kontrol Edilmemiş !"}</Text>
                </View>
            </View>
        </View>
    );
}