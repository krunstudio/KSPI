import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, StatusBar} from 'react-native';
import { Container, Item, Button,Input, Icon, Label, Picker, Textarea, Header } from 'native-base';
import * as actionAkun from '../redux/actions/actionAkun'

import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';



class formPendaftaran extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
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

  
  onValueChange7(value) {
    this.setState({
      selected7: value
    });
  }

  
  onValueChange8(value) {
    this.setState({
      selected8: value
    });
  }


  render() {
    console.disableYellowBox=true;
    return (
      <Container style={{backgroundColor:''}}>
        <Header style={{alignItems:'center', backgroundColor:'#3fc380'}}>
          <Text style={styles.header}>FORM PENDAFTARAN ANGGOTA</Text></Header>
        <View style={styles.content}>
        <StatusBar backgroundColor="#00b16a" barStyle="default-content" />
          <View style={styles.title}>
          {/* <Image
            style={{width: 100,height: 100,}}
              source={{ uri: 'https://i.ibb.co/fHTWCQ2/logo.png' }}/> */}
          </View>
          <SafeAreaView>
          <ScrollView>
          <View style>
          <Text>Federasi</Text>
            <Item regular style={styles.input}>
              <Input autoCapitalize='none' keyboardType='email-address' onChangeText={(text)=>{this.setState({emailValue:text})}} value={this.state.emailValue}/>
            </Item>
            <Text>SP</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Pilih SP" value={undefined}/>
                <Picker.Item label="AMK" value="key0" />
                <Picker.Item label="EE" value="key1" />
                <Picker.Item label="LOGAM" value="key2" />
                <Picker.Item label="SPAI" value="key3" />
                <Picker.Item label="SPPJM" value="key4" />
              </Picker>
            </Item>
            <Text>Hirarki Lembaga</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Dewan Pengurus Pusat" value="key0" />
                <Picker.Item label="Pengurus Pusat" value="key1" />
                <Picker.Item label="Pengurus Wilayah" value="key2" />
                <Picker.Item label="Pengurus Cabang" value="key3" />
                <Picker.Item label="Konsulat Cabang" value="key4" />
              </Picker>
            </Item>
            <Text>PUK</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected4}
                onValueChange={this.onValueChange4.bind(this)}
              >
                <Picker.Item label="PT A" value="key0" />
                <Picker.Item label="PT B" value="key1" />
                <Picker.Item label="PT C" value="key2" />
              </Picker>
            </Item>
            <Text>Wilayah</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected5}
                onValueChange={this.onValueChange5.bind(this)}
              >
                <Picker.Item label="Provinsi" value="key0" />
                <Picker.Item label="Kabupaten" value="key1" />
              </Picker>
            </Item>
            <Text>Nama</Text>
            <Item regular style={styles.input}>
              <Input autoCapitalize='none' keyboardType='email-address' onChangeText={(text)=>{this.setState({emailValue:text})}} value={this.state.emailValue}/>
            </Item>
            <Text>Jenis Kelamin</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected6}
                onValueChange={this.onValueChange6.bind(this)}
              >
                <Picker.Item label="Laki-laki" value="key0" />
                <Picker.Item label="Perempuan" value="key1" />
              </Picker>
            </Item>
            <Text>Status Karyawan</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected7}
                onValueChange={this.onValueChange7.bind(this)}
              >
                <Picker.Item label="PKWT" value="key0" />
                <Picker.Item label="Outsourcing" value="key1" />
              </Picker>
            </Item>
            <Text>Status PKB</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected8}
                onValueChange={this.onValueChange8.bind(this)}
              >
                <Picker.Item label="Ada" value="key0" />
                <Picker.Item label="Tidak Ada" value="key1" />
              </Picker>
            </Item>
            <Text>Alamat</Text>
            <Textarea rowSpan={5} bordered placeholder="Alamat" />
            <Text>HP/Telp</Text>
            <Item regular style={styles.input}>
              <Input autoCapitalize='none' keyboardType='number' onChangeText={(text)=>{this.setState({emailValue:text})}} value={this.state.emailValue}/>
            </Item>
            <Text>Email</Text>
            <Item regular style={styles.input}>
              <Input autoCapitalize='none' keyboardType='email-address' onChangeText={(text)=>{this.setState({emailValue:text})}} value={this.state.emailValue}/>
            </Item>
            <Text>Password</Text>
            <Item rounded style={styles.input}>
              <Input secureTextEntry = { this.state.hidePassword } onChangeText={(text)=>{this.setState({passwordValue:text})}} value={this.state.passwordValue}/>
              <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility }>
              <Icon name = { ( this.state.hidePassword ) ? 'eye-off' : 'eye' } />
              </TouchableOpacity>
            </Item>
            <Button disabled={(this.state.emailValue && this.state.passwordValue)=='' ? true:false}
             style={ ( this.state.emailValue && this.state.passwordValue )=='' ? styles.buttonDisabled : styles.button }
             onPress={() => this.loginUser() }>
            <Text style={{color:'white'}} > DAFTAR </Text>
            </Button>
          </View>
          </ScrollView>
          </SafeAreaView>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex : 1,
    justifyContent: 'center',
    margin:40
  },
  header: {
    color:'white',
    fontWeight:'bold'
  },
  input: {
    height: 50,
    marginBottom:15,
    borderRadius:10
  },
  button: {
    height: 50,
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:'#3fc380'   
  },
  buttonDisabled: {
    height: 50,
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:'#3fc380'   
  },
  title: {
    alignItems: 'center',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 30
  },
  login : {
    fontSize: 40,
  }
})


const mapStateToProps = state => {
  return {
      loginLocal: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      handleLogin: (email, password) => dispatch(actionAkun.handleLogin(email, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formPendaftaran);