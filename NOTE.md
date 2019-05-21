## 银花，这里的笔记

### constant目录，常量的目录

### 切换打包的环境，命令添加--dev配置

有bundle 打包时的  --dev 决定
let dev = true


## react-native

### 对应的标签说明

View -> div
Text -> span
TextInput -> input
FaltList -> list // 高性能的简单列表组件，支持下面这些常用的功能
ActivityIndicator 显示一个圆形的loading提示符号。
ScrollView // 滚动操作组件


## css in js
方式一：使用StyleSheet
```
<Image style={styles.arrowRight} source={require('../../assets/imgs/arrow_black.png')}/>

StyleSheet提供了一种类似CSS样式表的抽象。
const styles = StyleSheet.create({
  arrowRight: {
    width: px2dp(16),
    height: px2dp(25),
    resizeMode: 'contain'
  }
})
```

方式二：react使用style属性
style属性可以是一个普通的JavaScript对象。这是最简单的用法，因而在示例代码中很常见。你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。
```
<View style={{color: '#333'}}>
```

## px2dp
主要是适应屏幕的操作，类似操作rem。

Dimensions: 本模块用于获取设备屏幕的宽高。
初始的尺寸信息应该在runApplication之后被执行，所以它可以在任何其他的require被执行之前就可用。不过在稍后可能还会更新。

### 使用 defaultProps 来设置组件的默认值
对类添加defaultProps添加默认值
```
static defaultProps: {
visible: true
}
```


### 判断OS
Platform.OS在iOS上会返回ios，而在Android设备或模拟器上则会返回android。

### TouchableNativeFeedback
本组件用于封装视图，使其可以正确响应触摸操作（仅限Android平台）。在Android设备上，这个组件利用原生状态来渲染触摸的反馈。目前它只支持一个单独的View实例作为子节点。在底层实现上，实际会创建一个新的RCTView节点替换当前的子View，并附带一些额外的属性。

### TouchableWithoutFeedback
除非你有一个很好的理由，否则不要用这个组件。所有能够响应触屏操作的元素在触屏后都应该有一个视觉上的反馈（然而本组件没有任何视觉反馈）。


### TouchableOpacity

本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低。这个过程并不会真正改变视图层级，大部分情况下很容易添加到应用中而不会带来一些奇怪的副作用。

## class

### static

类中定义的静态方法，只能够被类调用，如utils中定义的方法，不会有实例生成，只能有这个类来调用。

### 实现区域内颜色渐变 LinearGradient

```
<LinearGradient colors={['#63B8FF', '#1C86EE', '#0000EE',]} style={{height: 150}}>
</LinearGradient>
```

https://www.jianshu.com/p/757dfeae5162

### NativeModules 原生模块

https://reactnative.cn/docs/0.21/native-modules-ios.html

有时候App需要访问平台API，但React Native可能还没有相应的模块封装；或者你需要复用Objective-C、Swift或C++代码，而不是用JavaScript重新实现一遍；又或者你需要实现某些高性能、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。

我们把React Native设计为可以在其基础上编写真正的原生代码，并且可以访问平台所有的能力。这是一个相对高级的特性，我们并不认为它应当在日常开发的过程中经常出现，但具备这样的能力是很重要的。如果React Native还不支持某个你需要的原生特性，你应当可以自己实现该特性的封装。

1. 在React Native中，一个“原生模块”就是一个实现了“RCTBridgeModule”协议的Objective-C类，其中RCT是ReaCT的缩写。
2. 你必须明确的声明要给Javascript导出的方法，否则React Native不会导出任何方法。声明通过RCT_EXPORT_METHOD()宏来实现：

3. 现在从Javascript里可以这样调用这个方法：
```
var CalendarManager = require('react-native').NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
```

4. 桥接到Javascript的方法返回值类型必须是void。React Native的桥接操作是异步的，所以要返回结果给Javascript，你必须通过回调或者触发事件来进行。（参见本文档后面的部分）

## src目录
### native文件目录
src目录下边的native是声明的react-native与原生交互的

## RN的发送和接受事件 DeviceEventEmitter
写原生的时候，我们经常会用到广播，接口，回调等方法来实现发送和接受通知以及通信的。

那么在RN中，也有一套发送和接收通知的方法，用的组件是DeviceEventEmitter。

https://blog.csdn.net/u011272795/article/details/74832835

```
2. 写一个发送消息的方法：


<Button title="发送通知" onPress={() => {
    DeviceEventEmitter.emit('left', '发送了个通知');
}}/>

3. 写一个接收这个消息的方法：

在你想要接收到这个消息的组件内写如下方法，别忘了要导入DeviceEventEmitter：

在didmount方法中写好监听/接收方法，当有消息发送时，这就会接收到，并执行相应方法


componentDidMount() {
    this.deEmitter = DeviceEventEmitter.addListener('left', (a) => {
        alert('收到通知：' + a);
    });
}
(a) 这个a 就是那边发送的消息，可以是对象，我在这里发了个字符串过来。

当然，别忘了要卸载：


componentWillUnmount() {
    this.deEmitter.remove();
}

```

## pod install 

目前看在当前的电脑上，使用`pod install --verbose --no-repo-update` 添加后边参数方式是可以正常安装ios的依赖的。


### Navigation.js就是当前的react-native的路由文件

使用导航器可以让你在应用的不同场景（页面）间进行切换。导航器通过路由对象来分辨不同的场景。利用renderScene方法，导航栏可以根据指定的路由来渲染场景。

可以通过configureScene属性获取指定路由对象的配置信息，从而改变场景的动画或者手势。查看Navigator.SceneConfigs来获取默认的动画和更多的场景配置选项。

### 事件触发，需要包裹一层Touchable开头的组件

在需要捕捉用户点击操作时，可以使用"Touchable"开头的一系列组件。这些组件通过onPress属性接受一个点击事件的处理函数。当一个点击操作开始并且终止于本组件时（即在本组件上按下手指并且抬起手指时也没有移开到组件外），此函数会被调用。