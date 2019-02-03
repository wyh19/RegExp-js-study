//原始语句
let text = '我用的手机是苹果，我想上网买一袋苹果吃'
//关键字
let words = ['手机', '苹果', '上网', '苹果']
//颜色库，实际可能很大，这里是写了4个
let colors = ['#111', '#222', '#333', '#444']

//先将关键字替换成标识符
words.forEach((item, index) => {
    if (item) {
        //做if判断防止替换空字符串
        text = text.replace(item, `%${index}%`)
    }
})
//构造正则
let regx = new RegExp('%(\\d+)%', 'g')
//使用正则替换，第二个参数i为匹配的索引，依次对上关键字以及颜色值
text = text.replace(regx, (item, i) => {
    let color = colors[i%4]
    return `<span style="background-color:${color}">${words[i]}</span>`
})

console.log(text)