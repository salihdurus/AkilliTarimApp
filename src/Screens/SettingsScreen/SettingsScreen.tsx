import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-svg';
import { useSelector } from 'react-redux';

import SettingsCard from '../../components/SettingsCard';
import useFetch from '../../hooks/useFetch';

export default function SettingsScreen() {
    const { fetchData, fetchLoading, fetchError, resFetchData } = useFetch();
    const token = useSelector((s: any) => s.userToken);
    const handleFetch = () => {
        fetchData("/get-garden-settings", token);
    }

    useEffect(() => {
        handleFetch();
    }, [])

    const handlePress = () => {
        console.log("Güncellendi");

    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={resFetchData.data}
                keyExtractor={item => item.gardenId}
                renderItem={({ item }) => {
                    return (
                        <SettingsCard
                            gardenName={item.gardenName}

                            getAutomaticScan={item.automaticScan}

                            getAutomaticSpraying={item.automaticSpraying}

                            onPress={handlePress}
                        />
                    );
                }}
                ListFooterComponent={<View style={{ margin: 10, }} />}
            />
        </View>
    );
}