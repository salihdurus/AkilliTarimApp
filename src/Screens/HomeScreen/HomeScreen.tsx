import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Text, Box, FlatList, Modal, Input, Button } from 'native-base';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import Fab from './../../components/Fab';
import GardenCard from '../../components/GardenCard';
import usePost from '../../hooks/usePost';
import useFetch from '../../hooks/useFetch';

interface IGarden {
    id: String;
    name: String;
    status: String;
    data: any,
}

export default function HomeScreen({ navigation, route }: any) {
    const dispatch = useDispatch();
    const token = useSelector((s: any) => s.userToken);
    const name = useSelector((s: any) => s.userName);
    const { resData, loading, error, postData } = usePost();
    const { fetchData, fetchLoading, fetchError, resFetchData }: any = useFetch();
    const handleSelectedGarden = (id: String, name: String) => {
        dispatch({ type: "ADD_GARDEN", payload: { gardenId: id, gardenName: name } });
        navigation.navigate("ControlStack", { screen: "ControlCenter", params: { token, id, name } })
    }
    const handleData = async () => {
        await fetchData("/get-gardens", token);
    }
    const [modalVisible, setModalVisible] = useState(false);
    const handlePress = () => {
        setModalVisible(true);
    }
    const handleAddGarden = (values: any): void => {
        const reqData = { "name": values.name, "border": { "x": values.x, "y": values.y } };
        postData("/add-garden", reqData, token);
        setModalVisible(false);
        fetchData("/get-gardens", token);
    }

    useEffect((): void => {
        handleData();
        navigation.addListener('beforeRemove', (e: any): any => {
            e.preventDefault();
        }
        )
    }, [])

    return (
        <NativeBaseProvider>

            <Box flex={1} bgColor={"#F1EBEB"}>
                {
                    resFetchData.data && resFetchData.data.length > 0 ?
                        <FlatList ListFooterComponent={<Box mt={9} />} ListHeaderComponent={<Text fontSize={"lg"} mt={3}>Hoşgeldin {name}</Text>} data={resFetchData.data} renderItem={({ item }: any) => <GardenCard name={item.name} description={item.status} onPress={() => handleSelectedGarden(item.id, item.name)} />} />

                        :
                        <>
                            <Text fontSize={"lg"} mt={3}>Hoşgeldin {name}</Text>
                            <Box flex={1} justifyContent={"center"} alignSelf={"center"}>
                                <Text fontSize={"md"} textAlign={"center"}>Henüz kayıtlı bahçen bulunmamaktadır.</Text>
                                <Text fontSize={"md"} textAlign={"center"}>Hemen yeni bir tane eklemek için + ikonuna  dokun...</Text>
                            </Box>
                        </>
                }

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

        </NativeBaseProvider >
    )
}