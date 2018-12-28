/**
 * 正则表达式有自己一套规则，跟具体编程语言无关，但是各语言在使用正则去匹配字符串时，有自己的类和方法
 * 这里介绍js使用正则的形式
 */

//先定义一些测试用的字符串
var str1 = 'wyh is being a better man'
var str2 = 'good good study,day day up'

/**
 * demo1:定义一个字面正则,匹配包含wyh的字符串
 */
var reg1 = /wyh/

/**
 * demo2:使用js的RegExp类实例化一个正则，匹配包含wyh的字符串
 */
var reg2 = new RegExp('be')

/**
 * js中使用正则有3种形式
 * 1、regx.test(str)
 * 2、regx.exec(str)
 * 3、str.match(regx)
 * 下面分别演示
 */

/**
 * 1、regx.test(str)
 */
var testDemo1 = reg1.test(str1)
console.log(testDemo1,str1+'中包含wyh')
var testDemo2 = reg1.test(str2)
console.log(testDemo2,str2+'中没有wyh')

/**
 * 2、regx.exec(str)
 */
var execDemo1 = reg1.exec(str1)
console.log(execDemo1)
var execDemo2 = reg1.exec(str2)
console.log(execDemo2)
var execDemo3 = reg2.exec(str1)
console.log(execDemo3)

/**
 * 3、str.match(regx)
 */
var matchDemo1 = str1.match(reg1)
console.log(matchDemo1)
var matchDemo2 = str1.match(reg2)
console.log(matchDemo2)
var matchDemo3 = str2.match(reg1)
console.log(matchDemo3)

/**
 * 以上演示了正则在js中的3中用法，下面开始系统的学习正则表达式本身
 */