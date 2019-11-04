---
title: Java内存小记
categories: 
	- 墙
tags: 
	- 砖
cover: https://s2.ax1x.com/2019/10/03/uwwwxH.png
---

# <font color=#B22222 >Java中的变量方法在内存中是怎么分配的？</font>

4类8种基本数据类型  
* 整型： byte short int long
* 浮点： float double  
* 布尔： boolean  
* 字符： char  
这8种**基本数据类型**定义的变量或者方法，都存储在**栈内存**中  
  
<br/> 

除此之外，还有**引用类型**，*String*，自己定义的*类* 等都属于引用类型  
而引用类型的内存分配分为两块，在栈内存和堆内存各占一块  
引用类型定义的变量的真正内容存储在堆内存，而在栈内存存储着能找到堆内存的\"地址\"  
  
# <font color=#CDB38B >引用类型</font>

对引用类型用个比喻，就相当于故宫，大门及各个楼房都有🔒  
而这些个钥匙以及故宫的路线，还有每个楼房具体在故宫哪里的信息都存储在一个箱子里，箱子也有🔒  
  
一般来说，我们只能访问\"箱子\"，然后再去故宫  
  
<font color=#CD5555 >引用类型一般会用到**关键字new** </font>

```
class Birthday {

	private int day;
	private int month;
	private int year;

	Birthday(int d, int m, int y) {
		day = d;
		month = m;
		year = y;
	}

	static void changeDay(Birthday i, int k) {
		i.day = k;
	}

	static void showBirth(Birthday i) {
		System.out.println(i.day + "-" + i.month + "-" + i.year);
	}

	public static void main(String[] args) {
		Birthday Tom = new Birthday(01, 04, 1999);
		showBirth(Tom);
		changeDay(Tom, 02);
		showBirth(Tom);
	}
}
```

上面提及的**而在栈内存存储着能找到堆内存的\"地址\"**，明显\"地址\"不是真的地址  
我们不能说栈内存里的内容就是堆内存的地址  

<br/>

如上面的代码，在类里，有成员变量，各种方法  
然后我们定义一个对象**Tom**
Tom这个对象是存放在栈内存里，而<font color=#EEAD0E >Tom的day,month,year,Birthday(),changeDay()等等都是存放在**堆内存**中</font>
对象的基本类型成员变量和方法都**堆**在一起，放在**堆内存**里，而普通的基本类型变量则只是放在栈内存中  
那我们能说栈内存里存的就是堆内存的地址吗？  
答案是不能！  

<br/>

通过Tom可以访问到每个成员变量及方法，那Tom还只是堆内存的地址吗？  
  
<br/>
<br/>
<br/>
  
```
static void changeDay(Birthday i, int k) {
		i.day = k;
	}
	
changeDay(Tom, 02);
```

分析一下这几行代码  
在主函数中  
运行到**changeDay(Tom,02)**
调用方法**changeDay(Birthday i, int k)**
在栈内存会定义一个Birthday变量i，一个整型k，在堆内存中会有i的各个成员变量和方法(或许是没有这个堆内存，紧跟着后面i就指向Tom了)  
然后i指向Tom  
i再引用day，并将k的值赋值给i引用的day  
刚说的i指向Tom，所以修改的day是Tom的day  

运行结果:  

```
1-4-1999
2-4-1999
```

<br/>

在调用方法的同时也可以new一个对象，当作形参传值！！  
```
showBirth(new Birthday(01 , 03 , 1999));

Birthday Jack = new Birthday(01 , 03 , 1999);
showBirth(Jack);
```




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

---
  
这里既然提及了4类8种基本类型  
那就顺便讲讲在怎么**区分整型中的byte,short,int,long的方法重载**  

```
public static void main(String[] args) {

	void max(int a, int b) {
		System.out.println(a > b ? a : b);
	}
	
	void max(short a,short b) {
		System.out.println(a > b ? a : b);
	}
	
	max(4 , 9);
	
	short a = 4;
	short b = 9;
	
	max(a , b);
	
}
```

<br/>

再说一句，**仅仅返回值不一样不构成重载**	


































