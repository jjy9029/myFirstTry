let stop, staticx // eslint-disable-line no-unused-vars
const img = new Image()
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAEwCAYAAADVZeifAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABRLSURBVHhe7d39j1zVfcfxe+7cu7M7c+dpvWsbCG3Vqq2qqhRoAJtnAYWQYBobbPBjcStBf6C0f0alSm1DmgBRKdiAzaNJvNBgcAgPpbEifkijSpUqBUWtUmpY7+48rR/mzj29Z3xsbOOHXe+dmXvOfb8UvHMukZK9nvnM9zzccxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgA2E/glklpx665B+eU5izdeW6ZfIEAISVllI2H1JpzquX52bPzcT//ceEetWvaqvIAMISFjhZDAuJOyWZj0hmR0EJIx1WrXY/2D8QlxN0uXOBgISxhlgtXhu/txsHJLD+9/HQBCQMEYqgvFUfn1OrLmrpluwEAGJVBtaN3qhCEmrEZBIJbnnwP1xN/apVIbiGWQUbXbvv36XbsIiBCRSp1c1GhCMp5JSPujet/ol3YQlCEgMVa9SPJUhVePZyQ1i3epXdAMWICDRF18KvtiJ9YNn/DuLAoWAtA0BicRcMPjU0yiKsRXiBbD0xzoEJJbkZCga3TVOFE/aWISAxEXpBSOh+GVUkVYhILFgJ0NRIRjPhyrSEq7+CZyTCka9YPuVXjASjsgIKkicFWOLS8Fsti0ISJyGscUE8PihNQhIUC32B+OQFiAgM+xkMFq1WDsdePTQDgRkRulwJBj7hW62FQjIjGGMcXDiKnJjXEW+qJswEAGZEQTjsDCjbTICMgNM3D7MLoSkqVgobjnCMQX8xvf0KxiGgLSU6lLH4ajOciYch61Tqco9P1mvWzAIXWwL6WBkBjVNmNU2EhWkZQjHlFJVpPq7gVEISIvIqX2zhGOKxX830Ws/eUC3YAC62BaQew5siLtw34urlIq+hFRjVtsUBKTh6FIbiPFIY9DFNhjhaKhOpUpX2wxUkAY6+MxrYvlEEIdjpaovwUzs+JNyVJCGUesb43CcJRwt4M+xgDzlCEiD9CZjesceMBljhU61xgLydCMgDRGHoxqzYn9B2/AYYqoxBmmA4+sb6VJbi6NiU4sKMsVUl5pwzAJBoZJS/MWklB5vpEudFVSRqUQFmUKMN2YQEzapRAWZMjoc2aY/u1gbmSJUkCkSVxCEY8ZJKXP6JVKACjIFpnfuFcuCyU3xX8fz+hIyTT4g1q1+WTcwRFSQQza34wdiPJjcSjjiC+IlPUmHISMgh6xSWr5ZOGKHbgInqJBUZ5djiAjIIZrZOZVzvPaTugmcjme1h46AHJLZuGtdq47OOmFQ1JeA0/WW/tDVHiYCcghmn94jquNjc05YKulLwNn59af0KwwBATkEleolW51OuaybwHkI95d/810+p0PCjR+wz3a/4Qq/9R3dBM5Pul5BjuR/+bdP8lkdAm76AB3c+X13MhiZjbvWgb4EnF8YFCZ//zem88L3f/H4P7FuecAIyAGpP/0DMVlcsY2uNRYtDsmVv/Nr0yMyx1M2A0ZADkiptnyzEOIZ3QQWJ+51XHbZ7247+Hf/zGd2gLjZAzCz642c8FpP6CZwUcRI+/EcVeRAEZB9Vt85JWqlkRnGHbFkYam47LcvnfnVt57hczsg3Og+KwUTLOlBcuIv2kt/87JZ3UKfEZB99D8vvxl3rdvf1U0gGVK4nz3zmqdb6COWDfTJ/70wlVtRUo8S8rQM+sBvNBvTrWpl+7pIX0EfUEH2Qf25KZdwRF9J15WeTxXZZwRkH5SKE1sIR/RVGBQrldFDB5/dw2e4j7i5CZN7Dmxkf0cMhnD9nEcV2UeMQSZoevc+d1ngzjkdqkcMiN9oNj9vV8p/tlbqK0gQFWRCZne/Lcbz5S2EIwZKCiElhU6/EJAJEUK4wmOXHgyaEE6Oz3G/cGMTUhkpbVSLeHUTGIwwKJbKK7foFhJGaZ6A5gv7RFByGwQkhsJrtj6baVRWPHQfayITRgW5RDOvvCOKY+U/JRwxPML1hcdnuQ+4qUskPSGE1/q2bgJD4Tmu23j6+/QIE0ZALtG4F7FDOIYrDApBMLFVhh19AUkhIJdgZupdV20coJvA0IiR5t87DkOQSePDvQS1TmEz1SNSQa2H9Fw+zwnjhl6kaM+BrfGPncdbwLCpdbgjbv3Z1xmHTBABeRGOP29NOCJFwqBQHh+bdnjgMFEE5CI1X33bdbzmU7oJpImIIsYhk0RALpJwc/E9ExychFQKBQGZJAJykYpOcZPqzugmkB5SCMHGFYkiIBdJcs+QYl5Xv0Ai+LAvQn3vj1zhNXlqBmkV1498pJPE3VyEclhkxx6kmXDzI/olkkBALtDBfe8Lx28+oZtAKom8xxhkggjIBfJD6cYdGO4XUkwINU+jG0gAH/gFqh0d3RR3r4u6CaRPGBQDr7JJt5AAvm0WoD71nig7nTrnzSD1/EajedipljfcyTM1CaCCXIByJ64eCUeYQPWxu5LCJyEE5AW0Xt8v4m9lJmdgCuGwL2RiCMgLEuz5CKN0REQFmRA++OfR2Pu+KMqi2vORyRkYIu5h86lODLfyfNy4u+I3/1G3ACO4jksFmRAC8jxKx/IbmZyBaYQjmMFOCAF5ftwfGIfyMTkEwPn4DbrXME6ut2cpksCNPIfG1HvMXsNEcQ+bGjIpBMA5HN/3kXcazCMlQ5BJISDP4tC+D9WjhTPq2VZ9CTBHREImhYA8i/G2t5XZa5hKcDx2YriTZ2jtfU84XovJGZgpDAqlkcpG3cISEZBnEmpihskZmCvuX3PqZkIIgjNItzcxw+QMjCX85uP6JZaIgDzF3A8/FMWjI9s41hVGk47b2P0vfLYTwE08TSSE1/yWbgDGEjyPnQgC8hSVw3m1cw+nFsJ4HE2TDAJSm3nnX4XjNb+jm4DRuiyFTAQBqdWa3pa4emTtI2wgu05EQiaAgNRYGgGbiEi/wJIQkJrwGyyNgC0kH+xkcB9j9TfeVzv3MKoNK8gweKyy+evUkAkgIGOlY3k1/sjsNawQf9MTjgnJfEBO7//IFR7nzsASXmu+Hc3v1i0sUeYD0o16wzVU0rBEXD+yCDIxmQ+GWsvbxLGusEZYLBREYZNuYYkyHZBz+z7kWFdYR41B1l95hyoyAZkOyFxXCrUAErCG15qvy+auyvo/5p2dgEwHZOT3vmT5poVFpBQcuZCYTAekdNkcF9aR0iUfk5LpcCjX1fPX7P0Iq0jXFSRkQjIbkM23PlTrH7+tm4AdetlIQCYlswEZzPs8PQPryE75MZd9VxKTyYBsvP2R6/D0DCyklvgEa2+jgkxIJgMyEr3HDTI9/grgwjIaEpxcCDvFpSNf/AnK5M0UbLYMYAEyGZCldo7lPbCSGoPUL5GAzAVkc/9HOZb3wEpea76Va7HVWYIyF5BBI6d272F5DywkZfwfKsgEZSogZz84oHbv4WhX2CoSXY7rSlKmAjJSk9eS2WtYjL1yE5WpgPSOqd3DWf8IS8XZSD4mK1NhUa47m5i9hq1kp/Roce3trGFLUGYCsvFjNf7YYPwR1uoNICFRmQnI3NGuUBtB6SZgF6/ZbvmHd+kWEpKZwCjM5zbH3WsO54KdhIxExBKfpGViSPfQhx+L8bmZutMpl/QlwB5x9dh2/Epw761dfQUJyUQF6XUj15HM78FSQnYdGVE99kEmAtINw/j3JCBhIfV4YTc3HvwJe0D2QyYCMmi4DzL+CCvF1aPsUj32i/V7s7fe/ViMdOc+cKJ8Xl8C7BHlHx6975Z/1y0kzP4KUu0eLnl6BhbyWu22e/QF3UIfWB8cxdlwI7v3wE5q2JFDsPvJ6oBsqqdnvOaTuglYRYalR4Nv3sT4Yx9ZHZAiiuLfj+41LBR3r+e9zk7dQp9YGx7N9z8SxYbL0QqwUxg8GtxL9dhv9lZXnfi9k+Psa1hIPTnjHXtOt9BH1gakPL4xLovDYR819njvzTxWOAD2BqTnEo6w1VH9E31mbUDGv1gckDxeCMv4jWbb776oW+gzawMyaLUPMUEDq3jN9rwYqwVrbmDt44BYGZCHfv4xu/fAOmrdY/Gemxh7HCArA7L2i3CzE5bY+xH26FWPR1n3OGDWVVmze98RVcepE5CwSdyn3u6uW/WsbmJArKsgpSdyPD0Dq3it+fkcm1IMg30BKRmigWXUjuHC4Y09BNYFZO1oWZ19zea4sIM6rdAbHQ/uvYXHCofAqoD8fO8PhfB5vBD2kN3SY1SPw2NVQAoR/z6cfQ1beM1Wu9B9VnKa69DYFSbHn78G7BCW/rJ01w1R+e5bWBg+JFYF5HhYZfwRdoirx/lCl3WPQ2ZNxTXz9tuidtSpO50y6x9hNtW1zgfV4K7VjD0OmT0VZCjU4Vx0sWE2wjFVrAlIz5NqnIaAhNnC0l8QjulhTwWZU+FIPsJgfqMh1q3iiZkUsSYgZRiRjjCX6lqPBTXdQkpYE5DldoUZbJhJzViPlqrBHdez4DFlrKi6GvvfFKXD/pzTKZf1JcAMqnIcLVeDO69j3DGFrKgghcp5ZrBhGnU6YYFwTDMrAjKKetubWTNcgIwIS48EdxCOaWZFqHSORfHvQQEJgwhnGzPW6WdFQI4fG9/IBA2MIZw/r6/wntctpBjdUmCQ/GZzftTZUb3+q2xAYQACEhgUtZynWK0W717FuKMhCEhgEOLKsVUoV4q3XcNaR4PYEpCe/gmkj99otCvVaumO6whHw9gSkIznIJ3icGwVa9XgZipHE1kRkMJv/oN+CaSH12w1a5O10m3X8AVuKOMDcnpqn1oAySJIpEtvQqZSK994FZWjwYwPyEg9Z8hjhkiTOBwPV5dVi7dfG+orMJQFXWwZhyMBiRQJSw8Xbr6apTwWMD8giUakiXAeEutW7dYtGM74gJQREYmUEM72wxMjnERoEfMryA4ThEiBOBzby4s7CzddzRvSIsYHpIicKK4jeVNiePxGs72ysCO44Q+YsbaM8QHpevGvIAhIDInXbB0pT1aD1VfwHrSQ+V3sSl7KTumvdAsYrLD08NgtrHW0lfkBKRxnbnR+l+O15/UVYDCEs4UZa7sZH5ATt96qujaMQ2KwhLOtPZHfpVuwlPkVpCIJRwyQcLaLtaueC266ived5awIyCjHUkgMiKocl/k7dAuWsyIghUdAYgCEs2XmtwrPBzf/EZVjRlgRkNKVjEGiv4SzKe5Wv7DsCpbzZIkdFeTxApI3LvpDHdG6ltnqLLKjgjzWy0b62UiecLa3LityfnVGWRGQrtp1T1BBImFqX8fJ0R2la3mEMKvs6GLnHCk7wWO6CSyd32geqU5UCjdeyRdvhlnTLZ3Zt3+kdtSZdcKgoC8BFycOx/nJldXiqiuoHDPOigpSkVI9TUM3G0ukKseJyQrhCMWigIzUUh/e1Lh4fqNxpDZRHVvNEzI4zpqAdGRXsu0ZLlocjuqgrbEbr+ZLFidZE5ATX79bfh4enXS8Frv6YHHicGwvW14r3MQTMjidPRVkLIzCLt1sLIo6v3rZilpw/ZW8b/AlVgWkFGEkO8W/1k3g/HrnV49Xi9f/IeGIs7Lu6ZP/ffkl/5LR8RknLAX6EvBlcbe6tXJlrXQNs9U4N6sqSCU3JsJP52cm2WEc5xSH4+yvX14lHHEh1gXkijUbpDsqOo6jlv0AZ/AbzcMTk9XxK36PCRlckHUBqaz85obur2anJ6gicZq4cqxffnmlwDpHLJCVAam4+VxIFYmT/HpdrLmzUr2SyhELZ21AXvrghu6nnXbN8VptfQlZpU4fXHNXVbeABbM2IBWRz3U/PdxexuLxDNM7gesWsChWB+Ql96yRuV5Xm8XjGbWRncCxFFYHpCI8EU2LY+NUkZnzgFi36kX9Grgo1gfk8nu+IZ24q612s9CXYDsRV47rVr2sW8BFsz4glcjx5cFuqMYimbCxnxpzpHJEIjIRkCvuvF06QkRxFckSD1v5jWb8p6ocGXNEYjIRkFokQ86tsZLay/HSr1QYc0TSMnNU6sE39wsRRrlJ4c45YVDUl2G63gJw1jiiPzJTQa74xh3S8XNdR/B0jUUeIBzRT5k7bP/Q1Lv+uIzU6YdUkWZbH3epX9Wvgb7I0hhkjxz12HXcZH59Lv6TcMRAZK6CVGb2vpuvOXLGCYucoW2SOBzjLnVNt4C+y1wFqcgRlvwYxZ+bjf+ZIRwxaJkMSJGnm22MXjB+bTz+Z5m+AgxMNitIJ5Kzvj/B89kppsYaj4cjwYihyeQYpDL9ow9y7nw3X5PRtBMWx/RlpEHcpVZVo24BQ5PJClKZuP3mriyPHXGcKNSXMGxfVI2EI1IhsxXkCY0Pfpor1euzTqdU0pfSRTgPxX9GTq75hBOW7F27SXcaKZT5gFRm3vupW2vU62k7S1sKZ3vzK/kdI0ciMTo7k7r/f4mIg1H9IByRRpntYp9q/NZro+Z4uer4TbUjTDoIZ1v98vyOyjVXyfi1nV9kumokHJFWBKRWvvG6brNcikMyriSHb71Yu+q52lePH08qhYgDUtjzd3W8alxPMCLt6GKfhdxz4MH4x+D3FVTB0ak+cuZjdPL1A1sd6ezUTdPxmCCMQQV5FnpfwfUnxscG4kR38+zhkdM/TbZe/UM4wiRUkBcgp9461HvRqSa39OTM4D1L1XhC+6OfuYVDn5s8QaOCUX3pEIwwDgG5QHG3+/442J7SzSVZzNjb/I8/dseas2YFpB4qUC8JRpiMgDRA+99+7hemP58zYPchqkVYhYA0xJH/+MTLf/JJWo+LIBhhJQLSIEc+/k83/+l/x93XSkVfGh660cgAAtIwR372XyL/ycx98ctXjl8ZgEVMKgE2ISANdXLSKMnZ9RPOCEQWdCOrCEjDJTm7fgKBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA4hzn/wGBICya/MXKzQAAAABJRU5ErkJggg=='
function Sakura (x, y, s, r, fn) {
  this.x = x
  this.y = y
  this.s = s
  this.r = r
  this.fn = fn
}
 
Sakura.prototype.draw = function (cxt) {
  cxt.save()
  // 这个数值是花瓣大小,电脑端网页 40 效果最好
  const xc = 40 * this.s
  cxt.translate(this.x, this.y)
  cxt.rotate(this.r)
  cxt.drawImage(img, 0, 0, xc, xc)
  cxt.restore()
 
}
 
Sakura.prototype.update = function () {
  this.x = this.fn.x(this.x, this.y)
  this.y = this.fn.y(this.y, this.y)
  this.r = this.fn.r(this.r)
  if (this.x > window.innerWidth ||
    this.x < 0 ||
    this.y > window.innerHeight ||
    this.y < 0
  ) {
    this.r = getRandom('fnr')
    if (Math.random() > 0.4) {
      this.x = getRandom('x')
      this.y = 0
      this.s = getRandom('s')
      this.r = getRandom('r')
    } else {
      this.x = window.innerWidth
      this.y = getRandom('y')
      this.s = getRandom('s')
      this.r = getRandom('r')
    }
  }
}
 
// let SakuraList
const SakuraList = function () {
  this.list = []
}
SakuraList.prototype.push = function (sakura) {
  this.list.push(sakura)
}
SakuraList.prototype.update = function () {
  let i = 0; const len = this.list.length
  for (; i < len; i++) {
    this.list[i].update()
  }
}
SakuraList.prototype.draw = function (cxt) {
  let i = 0; const len = this.list.length
  for (; i < len; i++) {
    this.list[i].draw(cxt)
  }
}
SakuraList.prototype.get = function (i) {
  return this.list[i]
}
SakuraList.prototype.size = function () {
  return this.list.length
}
 
function getRandom (option) {
  let ret, random
  switch (option) {
    case 'x':
      ret = Math.random() * window.innerWidth
      break
    case 'y':
      ret = Math.random() * window.innerHeight
      break
    case 's':
      ret = Math.random()
      break
    case 'r':
      ret = Math.random() * 6
      break
    case 'fnx':
      random = -0.5 + Math.random()
      ret = function (x) {
        return x + 0.5 * random - 1.7
      }
      break
    case 'fny':
      random = 1.3 + Math.random() * 0.7
      ret = function (x, y) {
        return y + random
      }
      break
    case 'fnr':
      random = Math.random() * 0.03
      ret = function (r) {
        return r + random
      }
      break
  }
  return ret
}
 
export function flowerDropPink () {
  const requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame
  const canvas = document.createElement('canvas')
  // const cxt
  staticx = true
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;z-index: 9999')
  canvas.setAttribute('id', 'canvas_sakura')
  document.getElementsByTagName('body')[0].appendChild(canvas)
  const cxt = canvas.getContext('2d')
  const sakuraList = new SakuraList()
  for (let i = 0; i < 50; i++) {
    // let sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny, randomFnR
    const randomX = getRandom('x')
    const randomY = getRandom('y')
    const randomR = getRandom('r')
    const randomS = getRandom('s')
    const randomFnx = getRandom('fnx')
    const randomFny = getRandom('fny')
    const randomFnR = getRandom('fnr')
    const sakura = new Sakura(randomX, randomY, randomS, randomR, {
      x: randomFnx,
      y: randomFny,
      r: randomFnR
    })
    sakura.draw(cxt)
    sakuraList.push(sakura)
  }
  stop = requestAnimationFrame(function reverse () {
    cxt.clearRect(0, 0, canvas.width, canvas.height)
    sakuraList.update()
    sakuraList.draw(cxt)
    stop = requestAnimationFrame(reverse)
  })
}
 
window.onresize = function () {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

// 此函数在点击时改变 是否背景播放
export function stopPink () {
  if (staticx) {
    const child = document.getElementById('canvas_sakura')
    child.parentNode.removeChild(child)
    window.cancelAnimationFrame(stop)
    staticx = false
  } else {
    flowerDropPink()
  }
}