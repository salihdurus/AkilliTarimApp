import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Image, VStack, Input, Icon, Pressable, Button, ScrollView } from 'native-base';
import { Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const img = require("../../Assets/register.jpg");
import usePost from "../../Hooks/usePost";
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


const RegisterScreen = ({ navigation }: any) => {
    const [show, setShow] = useState(false);
    const { resData, loading, error, postData } = usePost();
    const handleRegister = (values: any) => {
        postData("/register", values)
    }

    useEffect(() => {
        console.log(resData)
        if (resData) {
            if (error) {
                showMessage({
                    message: resData,
                    type: "danger"
                }
                )
            }

            if (!error) {
                showMessage({
                    message: "Başarıyla Kayıt Oldunuz !",
                    type: "success"
                }
                )
                navigation.navigate("Auth");

            }
        }
    }, [resData])



    return (
        <NativeBaseProvider>
            <ScrollView bgColor={"#905d17"}>

                <Box flex={1} bgColor={"#905d17"} justifyContent={"center"} alignItems={"center"} >
                    <Box flex={1} width={windowWidth / 1.2} alignSelf={"center"} mt={3} alignItems={"center"} justifyContent="center" >
                        <VStack justifyContent={"center"} alignItems={"center"} mt={3}>
                            <Image source={img} alt={"Giriş Ekranı"} resizeMode={"cover"} height={windowHeight / 3} width={windowWidth / 1.2} borderRadius={25} />
                        </VStack>

                        <Formik
                            initialValues={{ name: "", lastName: "", email: "", password: "" }}
                            onSubmit={handleRegister}
                        >
                            {({ handleSubmit, handleChange, values }) => (
                                <>
                                    <Input
                                        variant="filled"
                                        mx={3} mt={3} size="xl" placeholder={"Adınızı Giriniz"} w={"98%"}
                                        value={values.name}
                                        onChangeText={handleChange("name")} />

                                    <Input variant="filled" mx={3} mt={5} size="xl" placeholder={"Soyadınızı Giriniz"} w={"98%"}
                                        value={values.lastName}
                                        onChangeText={handleChange("lastName")} />

                                    <Input variant="filled" mx={3} mt={5} size="xl" placeholder={"Mail Adresinizi Giriniz"} w={"98%"}
                                        value={values.email}
                                        onChangeText={handleChange("email")} />

                                    <Input variant="filled" mx={3} mt={5} size="xl" placeholder={"Şifrenizi Giriniz"} w={"98%"}
                                        type={show ? "text" : "password"}
                                        InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                            <Icon as={<MaterialIcon name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                                        </Pressable>}
                                        value={values.password}
                                        onChangeText={handleChange("password")}
                                    ></Input>
                                    {/* 
                                <Input variant="filled" mx={3} my={5} size="xl" placeholder={"Şifrenizi Yeniden Giriniz"} w={"98%"}
                                    type={show ? "text" : "password"}
                                    InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                        <Icon as={<MaterialIcon name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                                    </Pressable>}
                                ></Input> */}

                                    <Button size="lg" colorScheme="coolGray" w={"98%"} mt="3" onPress={handleSubmit}>KAYIT OL</Button>
                                </>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider >
    );
}
export default RegisterScreen;