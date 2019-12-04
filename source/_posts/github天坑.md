---
title: GitHub天坑
categories: 
    - Git
tags: 
	- 人在屋檐下，不得不低头
cover: https://s2.ax1x.com/2019/10/02/uw9LIH.jpg
---

# 与远程仓库失联了？

为什么起个标题叫**天坑**呢，因为隔三差五就塌个坑出来...  

Ps: 昨天刚联上，没想到这二愣子...
  
刚才还好好的，突然说\"Could not read from remote repository\",这一天天的瞎整什么玩意？？  

<img src="https://s2.ax1x.com/2019/09/29/u8kTRU.png" width="50%" />  

但莫得办法哩，谁让人家东西这么好，还免费  
失联，就再联呗  
  
# 记录下免得天天查
在本地文件处打开**\"Git Bash\"**，然后输入一下命令  

```
git config --global user.name "Caiij404"

git config --global user.emaim "1061690773@qq.com"

ssh-keygen -t rsa -C "1061690773@qq.com"

```

然后出现了  

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/啊伊梭喔/.ssh/id_rsa):
```
  
敲回车

```
Created directory '/c/Users/啊伊梭喔/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

再敲两次回车  
然后就出现

```
Your identification has been saved in /c/Users/啊伊梭喔/.ssh/id_rsa.
Your public key has been saved in /c/Users/啊伊梭喔/.ssh/id_rsa.pub.
```

那么来到本地**/C/Users/啊伊梭喔/.ssh**(记得要删除本来的.ssh文件😑)  
进去就有两个文件，用文本打开**id_rsa.pub.**  
将内容复制  
  
  
来到[GitHub](https://github.com/)，进入**settings**，点击**SSH and GPG keys**  
新建密钥**NEW SSH key**，**title**随意，将刚复制的内容粘贴在**key**框，**Add SSH key**!!  
  
再次来到刚才的**\"Git Bash\"**,输入：  

```
ssh -T git@github.com
```


然后就出现  


```
The authenticity of host 'github.com (13.229.188.59)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

输入**yes**  

<br/>

再然后


<img src="https://s2.ax1x.com/2019/09/29/u8ZhXF.png" width="50%" />  

此时，就联系上远程仓库了!!!!  
  

再上传本地文件  

<img src="https://s2.ax1x.com/2019/09/29/u8em7j.png" width="50%" />  

<br/>
<br/>
<br/>

<img src="https://s2.ax1x.com/2019/09/29/u8etHJ.jpg" width="30%" />  


<br/>
<br/>
<br/>

我在想，是不是自己老是用localhost:4000查看文章效果而导致失联的...

<br/>
<br/>

Ps: 也可能是网络不太行，像我一般是使用热点，有时就会说\"失联\",但我换上校园网就没问题🙃🙃🙃




