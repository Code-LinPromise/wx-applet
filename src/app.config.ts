import { TabBar } from "@tarojs/taro";

export default defineAppConfig({
  pages: [
    'pages/Login/index'
    ,"pages/FirstPage/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
})
