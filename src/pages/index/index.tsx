import { Component, PropsWithChildren } from 'react'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <view className="index">
        <text>123</text>
        <text>456</text>
      </view>
    )
  }
}
