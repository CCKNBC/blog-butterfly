---
title: Uptime免费网站存活监控
comments: false
tags:
  - 工具
  - 网站存活监控

categories:
  - 工具
  - 网站存活监控

description: 本篇文章简单介绍了利用Uptime实现免费网站存活监控
keywords: 网站存活监控,Uptime
cover: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-05~11_19_11.webp"
photos: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-05~11_19_11.webp"
copyright_author: 大白萝卜
copyright_author_href: "https://dabailuobo.com"
copyright_url: "https://blog.dabailuobo.com/ba779920"
copyright_info: 来源于大白萝卜（CC康纳百川获授权转载）
id: 5
translate_title: uptime-free-website-survival-monitoring
date: 2020-08-20 09:58:09
updated: 2020-08-20 09:58:09
---

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820100301.png#align=left&display=inline&height=633&margin=%5Bobject%20Object%5D&originHeight=633&originWidth=1341&status=done&style=none&width=1341)

## 前言

对于静态托管网站来说，如果你放在不同的仓库，或者是托管服务商，那么有一个必要的网站存活监控是非常重要的，实时监控哪个仓库存活，哪个仓库无法访问，以便及时调整自己的线路。

UptimeRobot 是一个免费提供网站存活监控的服务商，免费版本可以同时监控 50 个站点，最高频率可以达到 5 分钟一次，而且还可以自己生成公共页面以便访问，还可以绑定自定义域名。

## 正文

网站地址：[https://uptimerobot.com/](https://uptimerobot.com/)

注册什么的就不用说了吧

## 创建监视器

注册完成之后登录会直接进入控制台

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820104637.png#align=left&display=inline&height=631&margin=%5Bobject%20Object%5D&originHeight=631&originWidth=1343&status=done&style=none&width=1343)

创建新的监视器

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820104721.png#align=left&display=inline&height=499&margin=%5Bobject%20Object%5D&originHeight=499&originWidth=808&status=done&style=none&width=808)

选择你要监视的方式，`https` 是通过访问的形式，`ping` 就是 ping 你的地址，`port` 就是监视端口

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820105159.jpg#align=left&display=inline&height=623&margin=%5Bobject%20Object%5D&originHeight=623&originWidth=788&status=done&style=none&width=788)

这就创建好一个监视器啦

## 生成公共页面

我们要访问监视器总不能每次都登录吧，Uptime 贴心的准备了可以生成公共页面，还可以绑定自定义域名哦

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820105358.png#align=left&display=inline&height=456&margin=%5Bobject%20Object%5D&originHeight=456&originWidth=1144&status=done&style=none&width=1144)

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820105432.png#align=left&display=inline&height=155&margin=%5Bobject%20Object%5D&originHeight=155&originWidth=767&status=done&style=none&width=767)

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820105544.png#align=left&display=inline&height=269&margin=%5Bobject%20Object%5D&originHeight=269&originWidth=536&status=done&style=none&width=536)

选择要显示的监视器，是全部显示还是只显示选中

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820105833.png#align=left&display=inline&height=621&margin=%5Bobject%20Object%5D&originHeight=621&originWidth=516&status=done&style=none&width=516)

创建完成之后就可以使用你的自定义域名来访问啦，或者使用默认域名

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820105936.png#align=left&display=inline&height=283&margin=%5Bobject%20Object%5D&originHeight=283&originWidth=734&status=done&style=none&width=734)

在这里进行访问

这里是我的例子：[大白萝卜の网站监控](https://status.dabailuobo.com/)

## API

如果你不喜欢他生成的页面，或者想要自己部署，那么你可以使用别人制作的主题，地址：

- [https://github.com/Flexiston/uptime-status](https://github.com/Flexiston/uptime-status)
- [https://github.com/zykjofficial/uptime-status](https://github.com/zykjofficial/uptime-status)

两个一样，随便选一个

fork 到自己仓库后，修改相关配置即可

![](https://cdn.jsdelivr.net/gh/laugh0608/CDN/img/20200820110242.png#align=left&display=inline&height=383&margin=%5Bobject%20Object%5D&originHeight=383&originWidth=738&status=done&style=none&width=738)

三种 APIkey 自己按照需要任选其一生成即可，在配置文件中进行修改，之后自己部署完毕就 OK 啦

大佬的例子：[Flexiston  的网站状态](https://status.flexiston.com/)   [卓越科技-  的网站状态](https://status.zykjofficial.top/)
