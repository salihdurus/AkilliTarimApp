import React from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './GardenCard.style';


export default function GardenCard({ name, description, onPress }: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.body}>
                <Image source={require("../../Assets/garden.png")} style={{ tintColor: "white" }} />
                <View style={styles.content}>
                    <Text style={styles.headerText}>{name}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}