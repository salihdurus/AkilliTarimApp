import React from 'react';
import { View, FlatList } from 'react-native';
import ImageDetailCard from '../../components/ImageDetailCard';

export default function DetailsScreen({ route }: any) {
    const { data } = route.params;
    const plants = data.plants;


    const renderPlant = (plant: any) => {
        if (plant.diseaseStatus) {
            return (
                <ImageDetailCard name={plant.disease.name} photoURL={plant.disease.photoURL} sprayingStatus={plant.disease.sprayingStatus}
                    number={plant.number}
                />
            );
        }
        else {
            return <></>
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={plants}
                keyExtractor={item => item._id}
                renderItem={({ item }) => renderPlant(item)
                }
                ListFooterComponent={<View style={{
                    margin: 10
                }} />}
            />

        </View>
    );
}