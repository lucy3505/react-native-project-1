import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, ActivityIndicator} from 'react-native';
import {pxToDp} from 'utils/stylesKits';
import {Input, Icon} from '@rneui/themed';
import validator from 'utils/validator';

import {increment, multiply, incrementByAmount} from './loginSlice';
import {useDispatch, useSelector} from 'react-redux';

function Login() {
  const [number, setNumber] = useState('13022112163');
  const [phoneValid, setPhoneValid] = useState(true);
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.loginScreenSlice);
  //登陆框手机号输入
  const phoneNumberChangeText = num => {
    setNumber(num);
    console.log(number);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);
  //   手机号码点击 完成
  const phoneNumberSubmit = async () => {
    // 1.对手机号码的合法性做校验 -正则
    //  1 不通过 提示
    // 2.将手机号码发送到后台对应借口 ->获取验证码
    // 1.发送异步请求的时候 自动的显示等待框
    // 2 请求回来 等待框 自动隐藏
    // 3 关键
    //   1 等待框？
    //   2自动？ ->axios的拦截器
    // 3.将登陆页面切换成 填写验证码的界面
    const correctNumber = validator.validatePhone(number);
    setPhoneValid(correctNumber);
    if (!correctNumber) {
      console.log('correctNumber::', correctNumber);
      return;
    }
    // debugger;

    // dispatch(increment());

    dispatch(incrementByAmount(3));

    // const counter = useSelector(state => state.loginScreenSlice);

    // toast.globalLoading();
    // toast.show('success', {
    //   type: 'success',
    //   successColor: 'red',
    //   backgroundColor: 'blue',
    // });
    // const res = await request.post(ACCOUNT_LOGIN, {phone: number});
    // console.log('Res::', res);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
        <View>
          {/* 标题 */}
          <View>
            <Text
              style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
              手机号登陆注册{value}
            </Text>
          </View>
          {/* 输入框 */}
          <View style={{marginTop: pxToDp(30)}}>
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
          </View>
        </View>
        {/* 2.1 登陆 结束 */}
      </View>
    </View>
  );
}

export default Login;
