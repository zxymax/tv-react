import hyUrl from './url'
import hyTitles from './titles'


const getTitles = () => {
  const titles = hyTitles.split('p-item')
  const arrTitles = titles.map(item => {
    if(item.includes('href')) {
      const sub = item.indexOf('target="_blank"')
      const str = item.slice(sub)
      const sub2 = str.indexOf('>')
      const str2 = str.slice(sub2+1)
      const sub3 = str2.indexOf('<')
      const str3 = str2.substr(0, sub3)
      return str3
    }
  })
  arrTitles.shift()
  return arrTitles
}


const getResource = () => {

  const titlesArr = getTitles()
  const _pre = 'https://jx.jxbdzyw.com/m3u8/?url='
  const arrUrl = hyUrl.split('#')
  const params = arrUrl.map((item, index) => {
    if(item.includes('$')) {
      const sub = item.indexOf('$')
      return {
        id: index,
        url: _pre + item.slice(sub+1),
        episode: item.substr(0, sub),
        subTitle: titlesArr[index]
      }
    }
  })
  return params
}

const lists = getResource()

export default lists
