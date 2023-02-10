import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import styles from './Fab.style';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Fab({ onPress }: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialIcon name="plus" size={25} color={"white"} />
        </TouchableOpacity >
    )
};