import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native'

import SettingsCard from '../../components/SettingsCard';
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';

export default function SettingsScreen() {

    const { fetchData, fetchLoading, fetchError, resFetchData } = useFetch();
    const { resData, loading, error, postData } = usePost();
    const token = useSelector((s: any) => s.userToken);
    const handleFetch = async () => {
        await fetchData("/get-garden-settings", token);
    }
    const isFocused = useIsFocused();
    useEffect(() => {
        handleFetch();
    }, [isFocused])

    const handlePress = async (values: any) => {
        console.log(values);
        await postData("/update-garden-settings", values, token);
        console.log(resData);
    }

    if (!fetchLoading && resFetchData) {
        console.log(resFetchData);
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={resFetchData.data.gardens}
                    keyExtractor={item => item.gardenId}
                    maxToRenderPerBatch={2}
                    initialNumToRender={2}
                    renderItem={({ item }) => {
                        return (
                            <SettingsCard
                                gardenId={item.gardenId}

                                gardenName={item.gardenName}

                                getAutomaticScan={item.automaticScan}

                                getAutomaticSpraying={item.automaticSpraying}
                                getScanPeriode={item.scanPeriode}
                                onPress={handlePress}
                                getPesticides={resFetchData.data.pesticides}
                                getSlots={item.slots}
                                handlePress={handlePress}
                            />
                        );
                    }}
                    ListFooterComponent={<View style={{ margin: 10, }} />}
                />
            </View>
        );
    }
}