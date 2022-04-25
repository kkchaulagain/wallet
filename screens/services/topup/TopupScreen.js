import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../../../constants"

import { findServiceByNumber } from '../../../helpers/common'



const TopUp = ({ navigation }) => {
    const [showAmount, setShowAmount] = useState(false);
    const [selectedService, setSelectedService] = useState('ntc');
    const onMobileInput = (input) => {
        const allowedProviders =['ntc','ncell','postpaid','smartcell'];
        if (input.length >= 3) {
            let service = findServiceByNumber(input);
            if (allowedProviders.includes(service)) {
                setSelectedService(service);
            }else{
                setSelectedService(null);
            }
        }
        if (input.length >= 10) {

            setShowAmount(true);
        } else {
            setShowAmount(false);
        }

    }
    function renderBackButton() {
        return (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: SIZES.width * 0.1,
                    height: SIZES.height * 0.1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.width * 0.05,
                    backgroundColor: COLORS.white,
                    position: "absolute",
                    top: SIZES.width * 0.05,
                    left: SIZES.width * 0.05,
                    zIndex: 100
                }}
            >
                <Image
                    source={icons.back}
                    style={{
                        width: SIZES.width * 0.07,
                        height: SIZES.height * 0.07,
                        resizeMode: "contain"
                    }}
                />
            </TouchableOpacity>
        )
    }

    function renderServiceHeader() {
        return (
            <View style={{
                width: SIZES.width,
                height: SIZES.height * 0.1,
                backgroundColor: COLORS.white,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: COLORS.lightGray,
                borderBottomWidth: 1
            }}>
                <Text style={{
                    ...FONTS.h3,
                    color: COLORS.black,
                    flex: 1,
                    marginTop: SIZES.width * 0.1,
                }}>Mobile Topup</Text>
            </View>
        )
    }

    function renderInputForm() {
        return (
            <View style={{
                width: SIZES.width,
                marginTop: SIZES.padding * 2,
                // height: SIZES.height * 0.25,
                backgroundColor: COLORS.lightGray,
                paddingBottom: SIZES.padding,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    width: SIZES.width * 0.9,
                    height: SIZES.height * 0.06,
                    borderWidth: 1,
                    borderColor: selectedService === null ?COLORS.red :COLORS.gray,
                    borderRadius: SIZES.base,
                }}>
                    <TextInput
                        style={{
                            ...FONTS.body3,
                            color: COLORS.black,
                            padding: SIZES.padding,
                            letterSpacing: 1,
                            flex: 1,
                        }}

                        placeholder="Mobile"
                        placeholderTextColor={COLORS.gray}
                        keyboardType="number-pad"
                        maxLength={10}
                        onChangeText={(input) => onMobileInput(input)}
                    />
                </View>
                {/* amount input */}
                {showAmount ? (
                    <View style={{
                        width: SIZES.width * 0.9,
                        height: SIZES.height * 0.06,
                        justifyContent: "center",
                        alignItems: "center",
                        borderColor: COLORS.gray,
                        marginTop: SIZES.base,
                        borderRadius: SIZES.base,
                        borderWidth: 1
                    }}>
                        <TextInput
                            style={{
                                ...FONTS.body3,
                                width: SIZES.width * 0.9,
                                color: COLORS.black,
                                padding: SIZES.padding,

                                letterSpacing: 1,
                                flex: 1,
                                // marginTop: SIZES.width * 0.1,
                            }}
                            placeholder="Amount"
                            placeholderTextColor={COLORS.gray}
                            keyboardType="number-pad"
                            maxLength={10}
                        />
                    </View>
                ) : null}
                {/* submit button */}



            </View>
        )
    }

    const service = (name, color,code) => {
        
        return (
            <View style={{
                width: selectedService == code? SIZES.width * 0.3: SIZES.width * 0.2,
                height: selectedService == code? SIZES.height * 0.06:SIZES.height * 0.058,
                borderColor: COLORS.gray,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: SIZES.padding,
                backgroundColor: color,
                color: COLORS.white,
                elevation: selectedService == code? 5: 0,
                borderRadius: SIZES.base,
            }}>
                <Text
                    style={{
                        color: COLORS.white,
                        
                        ...FONTS.body5,
                    }}
                >{name}</Text>
            </View>
        )
    }
    function renderServiceLabels() {
        // render service labels
        return (
            <View style={{
                width: SIZES.width,
                flexDirection: "row",
                justifyContent: "center",
                marginTop: SIZES.base * 2,
                // flex:1,
            }}>
                {service("NTC", COLORS.ntc,'ntc')}
                {service("Ncell", COLORS.ncell,'ncell')}
                {service("SmartCell", COLORS.smartcell,'smartcell')}
                {service("Postpaid", COLORS.postpaid,'postpaid')}
            </View>
        )

    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.base,
            paddingVertical: SIZES.base,
        }}>
            {renderBackButton()}
            {renderServiceHeader()}
            {renderServiceLabels()}
            {renderInputForm()}
        </SafeAreaView>
    )

}

export default TopUp;