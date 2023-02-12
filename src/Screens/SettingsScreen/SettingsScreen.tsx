import React from 'react';
import { View } from 'react-native';

import SettingsCard from '../../components/SettingsCard';

export default function SettingsScreen() {
    return (
        <View style={{ flex: 1 }}>
            <SettingsCard />
        </View>
    );
}