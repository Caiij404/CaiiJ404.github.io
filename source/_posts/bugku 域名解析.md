---
title: Bugku 域名解析
categories: 
    - CTF
tags: 
    - 
cover: https://s2.ax1x.com/2019/11/02/Kbjscq.jpg
---

# em...

![Kbjscq.jpg](https://s2.ax1x.com/2019/11/02/Kbjscq.jpg)

# 域名解析  

**[题目](https://ctf.bugku.com/challenges#%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90)**  

<br/>
<br/> 

![KBCUIA.png](https://s2.ax1x.com/2019/10/26/KBCUIA.png)  

<br/>
<br/>  

网上大多教程是修改本地文件  
*打开 C:\Windows\System32\drivers\etc\hosts 文本*  
*在最后一行添加 123.206.87.240 flag.baidu.com，然后保存*  
*flag.baidu.com，回车之后，网页爆出了flag*  

<br/>
<br/>

但自个的电脑好像不太聪明的亚子  
这法子没用啊  

<br/>
<br/>

# 使用burp suite找出flag

对**123.206.87.240**拦截  

<br/>
<br/>

![KBPmy8.png](https://s2.ax1x.com/2019/10/26/KBPmy8.png)  

<br/>
<br/>

**Repeater**一下  

<br/>

**Go**一下  
并没什么flag的影子  

<br/>
<br/>

将**Host**的**123.206.87.240**修改成**flag.baidu.com**  
再**Go**一下  
flag出来了  

<br/>
<br/>

![KBioE4.png](https://s2.ax1x.com/2019/10/26/KBioE4.png)







