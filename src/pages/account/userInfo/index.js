import {Box, Text, TouchableOpacity} from 'palette';
import {Flex} from 'palette/Flex';
import React, {Component, useEffect, useRef, useState} from 'react';
import {pxToDp} from 'utils/stylesKits';
import {SvgXml} from 'react-native-svg';
import {male, female} from 'src/res/fonts/iconSvg';
import {Button, TextInput} from 'react-native-paper';
// import {TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';

import moment from 'moment';
import {getAddress} from '../login/loginSlice';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
// import {
//   init,
//   Geolocation,
//   setAllowsBackgroundLocationUpdates,
// } from 'react-native-amap-geolocation';

const UserInfo = () => {
  const [nickName, setNickName] = React.useState('');
  const [birthDay, setBirthday] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [city, setCity] = React.useState('');
  // const [location, setLocation] = React.useState('');
  const {loc} = useSelector(state => state.loginSlice);
  const dispatch = useDispatch();
  const handleSex = v => {
    setGender(v);
  };
  let location = useRef({});
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  Geolocation.getCurrentPosition(
    info => {
      console.log('info;:::', info);
      // location.longitude = info.coords.longitude;
      // location.latitude = info.coords.latitude;
      location.longitude = 121.55190612870233;
      location.latitude = 31.198586627291043;
      dispatch(getAddress(location));
      // setLocation({longitude: info.coords.longitude});
    },
    err => {
      console.log('err:::', err);
    },
  );
  // const handleGetAddress = () => {
  //   dispatch(getAddress(121.45298, 31.17156));
  // };

  const handleAddress = () => {
    dispatch(getAddress(location));
  };
  useEffect(() => {
    console.log('loccc:::', loc);
    setCity(loc);
  }, [loc]);
  return (
    <Box bg="#fff" p={pxToDp(20)}>
      <Text fontSize={20} color="primary" fontWeight="bold">
        填写资料
      </Text>
      <Text fontSize={20} color="primary" fontWeight="bold">
        提升我的魅力
      </Text>
      <Flex variant="center" mt={20} mb={20}>
        <TouchableOpacity
          mr={40}
          bg={gender === 'male' ? 'tertiary' : 'secondaryContainer'}
          borderRadius={50}
          width={80}
          height={80}
          variant="center"
          onPress={() => handleSex('male')}>
          <SvgXml xml={male} width="50" height="50" />
        </TouchableOpacity>
        <TouchableOpacity
          bg={gender === 'female' ? 'tertiary' : 'secondaryContainer'}
          borderRadius={50}
          width={80}
          height={80}
          variant="center"
          onPress={() => handleSex('female')}>
          <SvgXml xml={female} width="50" height="50" />
        </TouchableOpacity>
      </Flex>
      <TextInput
        label="昵称设置"
        mode="outlined"
        value={nickName}
        onChangeText={nickName => setNickName(nickName)}></TextInput>
      <TouchableOpacity onPress={() => setOpen(true)} mt={10} variant="center">
        <TextInput
          style={{flex: 1}}
          mode="outlined"
          value={birthDay}
          pointerEvents="none"
          placeholder="设置生日"
        />
      </TouchableOpacity>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          const res = moment(date).format('YYYY-MM-DD');
          setBirthday(res);
          setDate(new Date(res));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TouchableOpacity mt={10} variant="center">
        <TextInput
          style={{flex: 1}}
          mode="outlined"
          value={`当前定位：${city}`}
          pointerEvents="none"
          placeholder="设置城市"
        />
      </TouchableOpacity>
      <Button onPress={handleAddress}>get addredd</Button>
    </Box>
  );
};

export default UserInfo;
