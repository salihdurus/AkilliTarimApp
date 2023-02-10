import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.style';

export default function Button({ name, icon, onPress }: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <MaterialIcon name={icon} style={styles.icon} size={30} /> : <></>}

            <View style={styles.body}>
                <Text style={styles.text}>
                    {name}
                </Text>
            </View>

        </TouchableOpacity>
    )
}