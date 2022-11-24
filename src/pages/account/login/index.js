import React, {useEffect, useState} from 'react';
import {Image, StatusBar} from 'react-native';
import {pxToDp} from 'utils/stylesKits';
import {Input, Icon} from '@rneui/themed';
import validator from 'utils/validator';
import {
  getLogin,
  setSendVerifyCodeSuccess,
  sendVcode,
  setUserContent,
} from './loginSlice';
import {useDispatch, useSelector} from 'react-redux';
import {LinearButton} from 'components/Button';
import {Box as View, Text} from 'palette';
import {CodeField} from 'components';
import {useToast} from 'react-native-toast-notifications';

function Login(props) {
  const [number, setNumber] = useState('13022112263');
  const [phoneValid, setPhoneValid] = useState(true);
  const [btnTxt, setBtnTxt] = useState('重新获取');
  const [countDowning, setCountDowning] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const dispatch = useDispatch();
  const toast = useToast();
  const {sendVerifyCodeSuccess, userContent} = useSelector(
    state => state.loginSlice,
  );

  //登陆框手机号输入
  const phoneNumberChangeText = num => {
    setNumber(num);
    console.log(number);
  };

  useEffect(() => {
    if (sendVerifyCodeSuccess) {
      // setCountDowning(true);
      countDown();
    }
  }, [sendVerifyCodeSuccess]);
  //   手机号码点击 完成

  useEffect(() => {
    if (userContent?.code === 10001) {
      toast.show(userContent.msg);
      dispatch(setUserContent({}));
    }
    if (userContent?.code === '10000') {
      // setCountDowning(true);
      console.log('props---', props);
      if (userContent.data.isNew) {
        dispatch(setUserContent({}));
        props.navigation.navigate('UserInfo');
      } else {
        alert('laoyoonghu');
      }
    }
  }, [userContent]);

  const phoneNumberSubmit = async () => {
    setShowLogin(false);
    const correctNumber = validator.validatePhone(number);
    setPhoneValid(correctNumber);
    if (!correctNumber) {
      console.log('correctNumber::', correctNumber);
      return;
    }
    dispatch(getLogin({phone: number}));
  };

  const countDown = () => {
    if (countDowning) {
      return;
    }
    setCountDowning(true);
    console.log('count::::');
    // setCountDowning(true)
    let count = 5;
    setBtnTxt(`重新获取(${count}s)`);
    const id = setInterval(() => {
      count--;
      setBtnTxt(`重新获取(${count}s)`);
      if (count === 0) {
        clearInterval(id);
        dispatch(setSendVerifyCodeSuccess(false));
        setCountDowning(false);
        setBtnTxt(`重新获取`);
      }
    }, 1000);
  };

  const handleRepGetVerifyCode = () => {
    dispatch(getLogin({phone: number}));
  };

  const onVcodeSubmitEditing = v => {
    dispatch(sendVcode({phone: number, vcode: v}));
  };
  const vCodePage = (
    <View>
      <View>
        <Text fontSize={pxToDp(25)} color="secondary" fontWeight="bold">
          输入6位验证码
        </Text>
      </View>
      <View mt={25}>
        <Text color="secondary">已发到：+86{number}</Text>
      </View>
      <View>
        <CodeField
          // onSubmitEditing={onVcodeSubmitEditing}
          onVcodeSubmitEditing={onVcodeSubmitEditing}
        />
      </View>

      <View mt={10}>
        <LinearButton
          disabled={countDowning}
          onPress={handleRepGetVerifyCode}
          style={{height: 40, with: '85%', borderRadius: 20}}>
          {btnTxt}
        </LinearButton>
      </View>
    </View>
  );

  const getVerifyCodePage = (
    <View>
      {/* 标题 */}
      <View>
        <Text style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
          手机号登陆注册
        </Text>
      </View>
      {/* 输入框 */}
      <View mt={pxToDp(30)}>
        <Input
          placeholder="请输入手机号码"
          leftIcon={{
            type: 'font-awesome',
            name: 'phone',
            color: '#ccc',
            size: pxToDp(20),
          }}
          maxLength={11}
          keyboardType="phone-pad"
          value={number}
          inputStyle={{color: 'green'}}
          errorMessage={phoneValid ? '' : '手机号码不正确'}
          onSubmitEditing={phoneNumberSubmit}
          onChangeText={phoneNumberChangeText}
        />
        <View>
          <LinearButton
            onPress={phoneNumberSubmit}
            style={{height: 40, with: '85%', borderRadius: 20}}>
            获取验证码
          </LinearButton>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      {/* 0.0状态栏开始 */}
      <StatusBar backgroundColor="transpar ent" translucent={true} />
      {/* 0.0状态栏结束 */}
      {/* 1.0 背景图片 开始 */}
      {/* 200单位 dp单位 单位px=>dp */}
      <Image
        source={require('../../../res/profileBackground.jpg')}
        style={{width: '100%', height: pxToDp(200)}}
      />
      {/* 1.0背景图片  结束 */}
      {/* 2.0 内容 开始 */}

      <View style={{padding: pxToDp(20)}}>
        {/* 2.1  登陆开始*/}
        {!showLogin ? vCodePage : getVerifyCodePage}
        {/* 2.1 登陆 结束 */}
      </View>
    </View>
  );
}

export default Login;
