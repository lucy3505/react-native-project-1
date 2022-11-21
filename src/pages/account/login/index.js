import React, {useEffect, useState} from 'react';
import {Image, StatusBar, ActivityIndicator} from 'react-native';
import {pxToDp} from 'utils/stylesKits';
import {Input, Icon} from '@rneui/themed';
import validator from 'utils/validator';
import {getLogin} from './loginSlice';
import {useDispatch, useSelector} from 'react-redux';
import {LinearButton} from 'components/Button';
import {LoginStyle} from './loginStyle';
import {Box as View, Text} from 'palette';
// import {Box} from 'palette/Box';
// import {Text as MyText} from 'palette/Text';
function Login() {
  const {inputVcodeText} = LoginStyle;
  const [number, setNumber] = useState('13022112163');
  const [phoneValid, setPhoneValid] = useState(true);
  const dispatch = useDispatch();

  const {sendVerifyCode} = useSelector(state => state.loginSlice);

  //登陆框手机号输入
  const phoneNumberChangeText = num => {
    setNumber(num);
    console.log(number);
  };

  // useEffect(() => {
  //   console.log('value::::', value);
  //   console.log('v:::', v);
  // }, [value, v]);
  //   手机号码点击 完成
  const phoneNumberSubmit = async () => {
    const correctNumber = validator.validatePhone(number);
    setPhoneValid(correctNumber);
    if (!correctNumber) {
      console.log('correctNumber::', correctNumber);
      return;
    }
    dispatch(getLogin({phone: number}));
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
      <View mt={10}>
        <LinearButton
          onPress={phoneNumberSubmit}
          style={{height: 40, with: '85%', borderRadius: 20}}>
          重新获取
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
        {sendVerifyCode ? vCodePage : getVerifyCodePage}
        {/* 2.1 登陆 结束 */}
      </View>
    </View>
  );
}

export default Login;
