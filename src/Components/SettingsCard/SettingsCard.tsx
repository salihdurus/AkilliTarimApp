import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Select } from "native-base";
import { Formik } from 'formik';

import styles from './SettingsCard.style';
import Button from '../Button';

export default function SettingsCard({ gardenName, getAutomaticScan,
    getScanPeriode,
    getAutomaticSpraying, getPesticides, getSlots, handlePress, gardenId }: any) {

    const handleScanPeriode = (periode: string) => {
        const scanPeriods = ["Saatlik", "Günlük", "Haftalık", "Aylık", "Belirtilmemiş"];
        if (!periode) periode = scanPeriods[4]
        const index = scanPeriods.indexOf(periode);

        if (index + 1 > scanPeriods.length - 1) {
            periode = scanPeriods[0];
        }
        else {
            periode = scanPeriods[index + 1];
        }

        return periode;

    }

    return (
        <Formik

            initialValues={{
                gardenId: gardenId,
                automaticScan: getAutomaticScan,
                automaticSpraying: getAutomaticSpraying,
                scanPeriode: getScanPeriode,
                slot1: (getSlots && getSlots.slot1) ? getSlots.slot1 : "63eae7048cf96b9cd73cd051",
                slot2: (getSlots && getSlots.slot2) ? getSlots.slot2 : "63eae7048cf96b9cd73cd051",
                slot3: (getSlots && getSlots.slot3) ? getSlots.slot3 : "63eae7048cf96b9cd73cd051",
                slot4: (getSlots && getSlots.slot4) ? getSlots.slot4 : "63eae7048cf96b9cd73cd051",
            }
            }
            onSubmit={values => { handlePress(values) }}
        >
            {({ handleChange, handleSubmit, values, setFieldValue }) => (
                <NativeBaseProvider>
                    <View style={styles.container}>
                        <Text style={styles.headerText}>{gardenName} Ayarları</Text>
                        <View style={styles.body}>
                            <View style={styles.content}>
                                <Text style={styles.bodyText}>Otomatik Tarama    :   {values.automaticScan === true ? "Açık" : "Kapalı"}</Text>
                                <View style={styles.change}>
                                    <TouchableOpacity onPress={() => {
                                        setFieldValue("automaticScan", !(values.automaticScan))
                                    }}>
                                        <Text style={styles.changeText}>Değiştir</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.content}>
                                <Text style={styles.bodyText}>Tarama Aralığı         :   {values.scanPeriode || "Belirtilmemiş"}</Text>
                                <View style={styles.change}>
                                    <TouchableOpacity onPress={() => { setFieldValue("scanPeriode", handleScanPeriode(values.scanPeriode)) }}>
                                        <Text style={styles.changeText}>Değiştir</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.content}>
                                <Text style={styles.bodyText}>Otomatik İlaçlama   :   {values.automaticSpraying === true ? "Açık" : "Kapalı"}</Text>
                                <View style={styles.change}>
                                    <TouchableOpacity onPress={() => {
                                        setFieldValue("automaticSpraying", !(values.automaticSpraying))
                                    }}>
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
                                        <Select selectedValue={values.slot1} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                            bg: "#C28B52",
                                        }} fontSize={15} mt={1} onValueChange={handleChange("slot1")}>
                                            {
                                                getPesticides.map((item: any, index: any) => {
                                                    const pesticide = item;
                                                    return <Select.Item key={index} label={pesticide.pesticideName} value={pesticide.pesticideId} />
                                                })
                                            }

                                        </Select>
                                    </View>
                                    <View>
                                        <Text style={styles.divisionText}>Bölüm 3: </Text>
                                        <Select selectedValue={values.slot3} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                            bg: "#C28B52",
                                        }} fontSize={15} mt={1} onValueChange={handleChange("slot3")}>
                                            {
                                                getPesticides.map((item: any, index: any) => {
                                                    const pesticide = item;
                                                    return <Select.Item key={index} label={pesticide.pesticideName} value={pesticide.pesticideId} />
                                                })}

                                        </Select>
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <Text style={styles.divisionText}>Bölüm 2: </Text>
                                        <Select selectedValue={values.slot2} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                            bg: "#C28B52",
                                        }} fontSize={15} mt={1} onValueChange={handleChange("slot2")}>
                                            {
                                                getPesticides.map((item: any, index: any) => {
                                                    const pesticide = item;
                                                    return <Select.Item key={index} label={pesticide.pesticideName} value={pesticide.pesticideId} />
                                                })}

                                        </Select>
                                    </View>
                                    <View>
                                        <Text style={styles.divisionText}>Bölüm 4: </Text>
                                        <Select selectedValue={values.slot4} minWidth="150" accessibilityLabel="İlaç Seçiniz" placeholder="İlaç Seçiniz" color={"white"} placeholderTextColor={"white"} _selectedItem={{
                                            bg: "#C28B52",
                                        }} fontSize={15} mt={1} onValueChange={handleChange("slot4")}>
                                            {
                                                getPesticides.map((item: any, index: any) => {
                                                    const pesticide = item;
                                                    return <Select.Item key={index} label={pesticide.pesticideName} value={pesticide.pesticideId} />
                                                })}


                                        </Select>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <Button name="Güncelle" onPress={handleSubmit} />
                        </View>
                    </View >
                </NativeBaseProvider>
            )}
        </Formik >
    );
}