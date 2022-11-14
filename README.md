ios: https://www.zhihu.com/question/35928898 安装 homebrew

1.然后参照 react-native 官网的安装

2.进入 iOS 终端： pod install(可能多次失败，多次 install 直到成功)

# android：参照 react-native 官网

安装 gradle https://blog.csdn.net/LNF568611/article/details/124910009

第一步，下载 gradle 的安装包
当前 gradle 的最新版本是 7.4.2，下载链接如下：

gradle-7.4.2 https://gradle.org/releases/

下载完成后，双击解压压缩包：

第二步，配置 gradle 环境变量
① 先进入到用户根目录 ~

确实是不是根目录，可以通过 pwd 命令查看，目录格式一般：/Users/{你的用户名}

② 编辑.bash_profile 文件

vim .bash_profile //这里改为 vi ~/.zshrc
然后把以下内容复制到文件中：

（注意：GRADLE_HOME 是你的 gradle 解压包目录）

# gradle 配置

GRADLE_HOME=/Users/ericli/small-workshop/tools/gradle-7.4.2
export GRADLE_HOME
export PATH=$PATH:$GRADLE_HOME/bin
比如我的解压包目录是这个：

至于怎么显示上面圈红的文件目录，可以安装 TinkerTool 工具，详细请参考《文章》。

当然，也可以在控制台敲入 pwd 命令来显示：

③ 退出保存.bash_profile 文件的配置。

:wq!
④ 刷新.bash_profile 文件使 scala 配置生效

source .bash_profile
⑤ 验证 scala 环境是否生效

gradle -v
如果出现以下类似文案说明 scala 安装成功！

1 cd android
2 ./gradlew clean
3 cd ..
4 npm cache clean --force
5 yarn android

# 图标库

https://reactnative.directory/?search=react-native-vector-icons
https://github.com/oblador/react-native-vector-icons
