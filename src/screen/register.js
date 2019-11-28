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
                      {/* <Input
                        borderless
                        placeholder="Federasi"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      /> */}
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected1}
                          onValueChange={this.onValueChange1.bind(this)}
                        >
                          <Picker.Item label="Pilih Federasi" value={undefined} color='grey'/>
                          <Picker.Item label="FSPMI" value="key0" />
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
                          <Picker.Item label="Pilih SP" value={undefined} color='grey'/>
                          <Picker.Item label="AMK" value="key0" />
                          <Picker.Item label="EE" value="key1" />
                          <Picker.Item label="LOGAM" value="key2" />
                          <Picker.Item label="SPAI" value="key3" />
                          <Picker.Item label="SPPJM" value="key4" />
                        </Picker>
                     </Item>
                    </Block> 
                    </Block>
                    <Block width={width * 0.8}>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={this.state.selected4}
                        onValueChange={this.onValueChange4.bind(this)}
                      >
                        <Picker.Item label="Pilih Hirarki Lembaga" value={undefined} color='grey'/>
                        <Picker.Item label="Dewan Pengurus Pusat" value="key0" />
                        <Picker.Item label="Pengurus Pusat" value="key1" />
                        <Picker.Item label="Pengurus Wilayah" value="key2" />
                        <Picker.Item label="Pengurus Cabang" value="key3" />
                        <Picker.Item label="Konsulat Cabang" value="key4" />
                      </Picker>
                    </Item>
                    </Block>
                    <Block width={width * 0.8}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected5}
                          onValueChange={this.onValueChange5.bind(this)}
                        >
                          <Picker.Item label="Pilih PUK" value={undefined} color='grey'/>
                          <Picker.Item label="PT A" value="key0" />
                          <Picker.Item label="PT B" value="key1" />
                          <Picker.Item label="PT C" value="key2" />
                        </Picker>
                      </Item>
                    </Block>
                    <Block width={width * 0.8}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected6}
                          onValueChange={this.onValueChange6.bind(this)}
                        >
                          <Picker.Item label="Pilih Wilayah" value={undefined} color='grey'/>
                          <Picker.Item label="Provinsi" value="key0" />
                          <Picker.Item label="Kabupaten/Kota" value="key1" />
                        </Picker>
                      </Item>
                    </Block>
                    <Block middle>
                      <Button color="primary" onPress={()=> this.props.navigation.push('Register2')} style={styles.createButton}>
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
