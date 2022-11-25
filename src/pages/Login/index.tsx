import React, { useEffect } from 'react'
import {Image,Button } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

const  Login=()=>{
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})
  usePullDownRefresh(() => {})

  function goFirstPage(){
    Taro.navigateTo({ url: "/pages/FirstPage/index" });
  }
  return(
    <view className="loginPage">
      <view className="headline">
      <text className="title">附近有闲</text>
    </view>
    <view className="details">
    <text>在这里你可以找到附近</text>
    <text>有用的物品，有料的信息，有趣的人</text>
    </view>
    <Image src="https://p1.meituan.net/dpplatform/2389cab28596ff79cc24035534aaf59b60970.png" className="login-image"
    ></Image>
    <Button className="login-button" onClick={goFirstPage}>授权并登录</Button>
    </view>
  
  )
}
export default Login
