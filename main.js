
button.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('GET', '/xxx')
    request.send()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求响应都完毕了')

            if(request.status >= 200 && request.status < 300){
                console.log('请求成功')
                let string = request.responseText
                let obj = window.JSON.parse(string)
                console.log(typeof obj)
                console.log(obj)
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
})