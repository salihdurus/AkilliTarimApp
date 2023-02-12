
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Select } from "native-base";

import styles from './SettingsCard.style';
import Button from '../Button';



export default function SettingsCard({ gardenName, getAutomaticScan, getScanPeriode, getAutomaticSpraying, getPesticides, onPress }: any) {
    //Silinecek
    gardenName = "Bahçe 1"
    getAutomaticScan = false;
    getScanPeriode = ["Günlük", "Aylık", "Saatlik"];
    getAutomaticSpraying = false;
    getPesticides = [
        {
            id: 1,
            name: "Boş"
        }, {
            id: 2,
            name: "Bayer İlaç"
        }, {
            id: 3,
            name: "x İlaç"
        }, {
            id: 4,
            name: "y  İlaç"
        }, {
            id: 5,
            name: "z  İlaç"
        },
    ];
    const [automaticScan, setAutomaticScan] = useState(getAutomaticScan);
    const [automaticSpraying, setAutomaticSpraying] = useState(getAutomaticSpraying);
    const [service, setService] = React.useState("");
    return (
        <NativeBaseProvider>

            <View style={styles.container}>
                <Text style={styles.headerText}>{gardenName} Ayarları</Text>
                <View style={styles.body}>
                    <View style={styles.content}>
                        <Text style={styles.bodyText}>Otomatik Tarama    :   {automaticScan ? "Açık" : "Kapalı"}</Text>
                        <View style={styles.change}>
                            <TouchableOpacity onPress={() => { setAutomaticScan(!automaticScan) }}>
                                <Text style={styles.changeText}>Değiştir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.content}>
                        <Text style={styles.bodyText}>Tarama Aralığı         :   Günlük</Text>
                        <View style={styles.change}>
                            <TouchableOpacity onPress={() => { setAutomaticScan(!automaticScan) }}>
                                <Text style={styles.changeText}>Değiştir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.content}>
                        <Text style={styles.bodyText}>Otomatik İlaçlama   :   {automaticSpraying ? "Açık" : "Kapalı"}</Text>
                        <View style={styles.change}>
                            <TouchableOpacity onPress={() => { setAutomaticSpraying(!automaticSpraying) }}>
                                <Text style={styles.changeText}>Değiştir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.slotsContainer}>
                    <Text style={styles.bodyText}>İlaç Bölümleri</Text>
                    <View style={styles.slotsContent}>
                        <View>
                            <View>
                                <Text style={styles.divisionText}>Bölüm 1: </Text>
                                <Select selectedValue={service} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                    bg: "#C28B52",
                                }} fontSize={15} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    {
                                        getPesticides ?
                                            getPesticides.map((item: any, index: any) => {
                                                const pesticide = item;
                                                return <Select.Item key={index} label={pesticide.name} value={pesticide.id} />
                                            })
                                            : <></>
                                    }

                                </Select>
                            </View>
                            <View>
                                <Text style={styles.divisionText}>Bölüm 3: </Text>
                                <Select selectedValue={service} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                    bg: "#C28B52",
                                }} fontSize={15} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    {
                                        getPesticides ?
                                            getPesticides.map((item: any, index: any) => {
                                                const pesticide = item;
                                                return <Select.Item key={index} label={pesticide.name} value={pesticide.id} />
                                            })
                                            : <></>
                                    }

                                </Select>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.divisionText}>Bölüm 2: </Text>
                                <Select selectedValue={service} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                    bg: "#C28B52",
                                }} fontSize={15} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    {
                                        getPesticides ?
                                            getPesticides.map((item: any, index: any) => {
                                                const pesticide = item;
                                                return <Select.Item key={index} label={pesticide.name} value={pesticide.id} />
                                            })
                                            : <></>
                                    }

                                </Select>
                            </View>
                            <View>
                                <Text style={styles.divisionText}>Bölüm 4: </Text>
                                <Select selectedValue={service} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                    bg: "#C28B52",
                                }} fontSize={15} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    {
                                        getPesticides ?
                                            getPesticides.map((item: any, index: any) => {
                                                const pesticide = item;
                                                return <Select.Item key={index} label={pesticide.name} value={pesticide.id} />
                                            })
                                            : <></>
                                    }


                                </Select>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <Button name="Güncelle" />
                </View>
            </View >
        </NativeBaseProvider>
    );
}