console.log('我是main.js');

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './style.css')//readyState = 1
  request.onreadystatechange = () => {
    //下载完成
    if (request.readyState === 4) {
      //console.log('下载完成');
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement('style')
        //添加style内容
        style.innerHTML = request.response
        //插入到head里
        document.head.appendChild(style)
      } else {
        alert('下载失败')
      }

    }
  }
  request.send()//readyState = 2
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './2.js')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //console.log('下载完成');
      if (request.status >= 200 && request.status < 300) {
        //创建script标签
        const script = document.createElement('script')
        //添加script内容
        script.innerHTML = request.response
        //插入到body里
        document.body.appendChild(script)
      } else {
        alert('下载失败')
      }
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './3.html')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //console.log('下载完成');
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      } else {
        alert('下载失败')
      }
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim());
      }
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response)
        myName.textContent = object.name
      }
    }
  }
  request.send()
}

let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response)
        array.forEach(item => {
          const li = document.createElement('li')
          li.textContent = item.id
          xxx.appendChild(li)
        })
        n += 1
      }
    }
  }
  request.send()
}