import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Image, Input, Icon, Pressable, Button, ScrollView } from 'native-base';
import { Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik'
import { showMessage } from "react-native-flash-message";
import { useDispatch } from 'react-redux';

import usePost from "../../hooks/usePost";
const img = require("../../assets/auth.jpg");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Auth = ({ navigation }: any) => {


    const [show, setShow] = useState(false);

    const { resData, loading, error, postData } = usePost();

    const handleLogin = (values: any) => postData("/login", values)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading && resData) {
            if (error) {
                showMessage({
                    message: resData,
                    type: "danger"
                })
            }
            else {
                dispatch({ type: "ADD_TOKEN", payload: { token: resData.token } });
                dispatch({ type: "ADD_USERNAME", payload: { userName: resData.name } })
                navigation.navigate("Home", { screen: "HomePage" })
            }
        }
    }, [loading])



    return (
        <NativeBaseProvider>
            <ScrollView bgColor={"#905d17"}>
                <Box flex={1} justifyContent={"center"} alignItems={"center"} mt={3} mb={10}>
                    <Image source={img} alt={"Giriş Ekranı"} resizeMode={"cover"} height={windowHeight / 3} width={windowWidth / 1.2} borderRadius={25} />
                </Box>

                <Box flex={1} width={windowWidth / 1.2} alignSelf={"center"} mt={10} alignItems={"center"} justifyContent="center">

                    <Formik
                        initialValues={{ email: "durussalih@gmail.com", password: "asdf123" }}
                        onSubmit={handleLogin}
                    >
                        {({ handleChange, handleSubmit, values }) =>
                        (

                            <>
                                <Input variant="filled" mx={3} size="xl" placeholder={"Mail Adresinizi Giriniz"} w={"98%"} InputLeftElement={<Icon as={<MaterialIcon name="account-outline" />} size={5} ml="2" color="muted.400" />}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                ></Input>


                                <Input variant="filled" mx={3} my={3} size="xl" placeholder={"Şifrenizi Giriniz"} w={"98%"}
                                    type={show ? "text" : "password"}
                                    InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                        <Icon as={<MaterialIcon name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                                    </Pressable>}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                ></Input>

                                <Button size="lg" colorScheme="coolGray" w={"98%"} mt="5" onPress={() => {
                                    navigation.navigate("Register");
                                }}>KAYIT OL</Button>

                                <Button size="lg" colorScheme="success" w={"98%"} mt="3" onPress={handleSubmit}>GİRİŞ YAP</Button>
                            </>

                        )
                        }

                    </Formik>
                </Box>



                <Box flex={0.3} width={windowWidth / 1.2} alignSelf={"center"} mt={3} alignItems={"center"} justifyContent="center">

                </Box>
            </ScrollView>

        </NativeBaseProvider >
    );
}
export default Auth;