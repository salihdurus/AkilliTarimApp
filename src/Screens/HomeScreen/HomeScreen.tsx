import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Text, Box, FlatList, Modal, Input, Button, ScrollView } from 'native-base';
import { Formik } from 'formik';

import Fab from './../../Components/Fab';
import GardenCard from '../../Components/GardenCard';
import ScanCard from '../../Components/ScanCard';
import DetailCard from '../../Components/DetailCard';
import SettingsCard from '../../Components/SettingsCard';
import usePost from '../../Hooks/usePost';
import useFetch from '../../Hooks/useFetch';

interface IGarden {
    id: String;
    name: String;
    status: String;
}

export default function HomeScreen({ navigation, route }: any) {

    const { resData, loading, error, postData } = usePost();
    // const { token } = route.params;
    const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2RjNTRlOWUzYzI1MTk1ODhiZjYzMjciLCJuYW1lIjoiU2FsaWgiLCJpYXQiOjE2NzYwNzAyNDAsImV4cCI6MTY3NjA3MTE0MH0.KXwPPVATgrBmghJoBWDKKBkOcgcu2ollP33Z-4Mqc1bXq1VEAaCAebVaMkeJBfhtntkyRFEGHFzAK-9S3SUP8w"
    const { fetchData, fetchLoading, fetchError, resFetchData } = useFetch();
    const handleSelectedGarden = (id: String, name: String) => {
        navigation.navigate("ControlCenter", { token, id, name })
    }
    const handleData = () => {
        fetchData("/get-gardens", token);
    }
    const [modalVisible, setModalVisible] = useState(false);
    const handlePress = () => {
        setModalVisible(true);
    }
    const handleAddGarden = (values: any) => {
        const reqData = { "name": values.name, "border": { "x": values.x, "y": values.y } };
        postData("/add-garden", reqData, token);
        setModalVisible(false);
        fetchData("/get-gardens", token);
    }

    useEffect((): void => {
        handleData();
    }, [])
    return (
        <NativeBaseProvider>

            <Box flex={1} bgColor={"#F1EBEB"}>
                {
                    resFetchData.data && resFetchData.data.length > 0 ?
                        <FlatList ListFooterComponent={<Box mt={9} />} ListHeaderComponent={<Text fontSize={"lg"} mt={3}>Hoşgeldin Salih</Text>} data={resFetchData.data} renderItem={({ item }: any) => <GardenCard name={item.name} description={item.status} onPress={() => handleSelectedGarden(item.id, item.name)} />} />

                        :
                        <>
                            <Text fontSize={"lg"} mt={3}>Hoşgeldin Salih</Text>
                            <Box flex={1} justifyContent={"center"} alignSelf={"center"}>
                                <Text fontSize={"md"} textAlign={"center"}>Henüz kayıtlı bahçen bulunmamaktadır.</Text>
                                <Text fontSize={"md"} textAlign={"center"}>Hemen yeni bir tane eklemek için + ikonuna  dokun...</Text>
                            </Box>
                        </>
                }


                {/* <GardenCard name={"Bahçe 1"} description={"Durum: Tarandı ve 3 Ağaç Başarıyla İlaçlandı."} onPress={handleGardenContent} />
                 */}
                {/* <ScanCard lastScan={"25/05/2022"} scanType={"Kullanıcı İstekli Tarama"} onPress={handleGardenContent} />

                <DetailCard
                    numberOfTrees={"20"}

                    numberOfDiseasedTrees={"3"}

                    diseasesDetected={["3. Ağaç - Elma Küllemesi", "7. Ağaç - Kara Leke", "16. Ağaç - Ateş Yanıklığı"]}

                    usedMedicinesToBe={["3. Ağaç - Luna Experience ® SC 400", "7. Ağaç - BASF Activus®", "16. Ağaç - %80 Fosetyl-Al"]} automaticSpraying={"Açık"}
                    status={"Ağaçlar Başarıyla Tarandı ve İlaçlandı Sonraki Tarama Bekleniyor"} nextAutomaticScreeningTime={"29/05/2022"} sprayedTrees={["3. Ağaç Başarıyla İlaçlandı","7. Ağaç Başarıyla İlaçlandı",,"16. Ağaç Başarıyla İlaçlandı"]} /> */}

                <Fab onPress={handlePress} />
                <Modal isOpen={modalVisible} onClose={() => setModalVisible(!modalVisible)} avoidKeyboard safeAreaTop={true}  >

                    <Modal.Content>
                        <Formik
                            initialValues={{ name: "", x: "", y: "" }}
                            onSubmit={handleAddGarden}
                        >{({ handleChange, handleSubmit, values }) => (
                            <>
                                <Modal.CloseButton />
                                <Modal.Header>Bahçe Ekle</Modal.Header>
                                <Modal.Body>

                                    <Input variant="filled" mx={3} size="xl" placeholder={"Bahçe Adını Giriniz"} w={"98%"}
                                        value={values.name}
                                        onChangeText={handleChange("name")}
                                    />
                                    <Input variant="filled" mx={3} size="xl" placeholder={"Bahçe Enini Giriniz (Metre)"} keyboardType={"numeric"} w={"98%"}
                                        value={values.x}
                                        onChangeText={handleChange("x")}
                                    />
                                    <Input variant="filled" mx={3} size="xl" placeholder={"Bahçe Boyunu Giriniz (Metre)"} keyboardType={"numeric"} w={"98%"}
                                        value={values.y}
                                        onChangeText={handleChange("y")}
                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setModalVisible(false);
                                        }}>
                                            İptal
                                        </Button>
                                        <Button bgColor={"#C28B52"} onPress={handleSubmit}>
                                            Kaydet
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </>
                        )}
                        </Formik>
                    </Modal.Content>
                </Modal>
            </Box>

        </NativeBaseProvider>
    )
}