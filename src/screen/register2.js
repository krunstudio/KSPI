import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Textarea, Picker, Item } from 'native-base';





import { Button, Icon, Input, Select } from "../../components";
import { Images, argonTheme } from "../../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  onValueChange3(value) {
    this.setState({
      selected3: value
    });
  }

  onValueChange4(value) {
    this.setState({
      selected4: value
    });
  }

  onValueChange5(value) {
    this.setState({
      selected5: value
    });
  }

  onValueChange6(value) {
    this.setState({
      selected6: value
    });
  }




  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={14}>
                    Form Pendaftaran Anggota
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Nama"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected1}
                          onValueChange={this.onValueChange1.bind(this)}
                        >
                          <Picker.Item label="Jenis Kelamin" value={undefined} color='grey'/>
                          <Picker.Item label="Laki-laki" value="key0" />
                          <Picker.Item label="Perempuan" value="key1" />
                        </Picker>
                     </Item>
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected2}
                          onValueChange={this.onValueChange2.bind(this)}
                        >
                          <Picker.Item label="Status Karyawan" value={undefined} color='grey'/>
                          <Picker.Item label="PKWT" value="key0" />
                          <Picker.Item label="Outsourcing" value="key1" />
                        </Picker>
                     </Item>
                    </Block>
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected3}
                          onValueChange={this.onValueChange3.bind(this)}
                        >
                          <Picker.Item label="Status PKB" value={undefined} color='grey'/>
                          <Picker.Item label="Ada" value="key0" />
                          <Picker.Item label="Tidak Ada" value="key1" />
                        </Picker>
                     </Item>
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Textarea rowSpan={2} bordered placeholder='Alamat'></Textarea>
                    </Block>
                    <Block middle>
                      <Button onPress={()=> this.props.navigation.push('Register3')}  color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Selanjutnya
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
