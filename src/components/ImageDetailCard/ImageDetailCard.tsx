import React from 'react';
import { View, Text, Image } from 'react-native';
import Config from 'react-native-config';

import styles from './ImageDetailCard.style';

export default function ImageDetailCard({ name, photoURL, sprayingStatus, number }: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{number}. Ağaç</Text>
            <Text style={styles.descriptionText}>Hastalık Adı : {name}</Text>

            <Text style={styles.descriptionText}>İlaçlandı Mı? : {sprayingStatus === true ? "Evet" : "Hayır"}</Text>
            <Text style={styles.descriptionText}>Hastalık Fotoğrafı</Text>
            <Image style={styles.image} source={{ uri: Config.API_URL_UPLOAD + photoURL }} />
        </View>
    )
}