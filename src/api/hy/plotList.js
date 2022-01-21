import hyPlots from './plot'

/**
 * return {
 *    imgSrc
 *    title
 *    time
 * }
 *
 * **/



const getPlot  = () => {
  const plots = hyPlots.split('p-list')
  const arrPlots =  plots.map((item, index) => {
      if(item.includes('<img')) {
        const sub = item.indexOf("title") 
        const str = item.slice((sub))
        const sub2 = str.indexOf('="')
        const str2 = str.slice(sub2)
        const sub3 = str2.indexOf('"')
        const str3 = str2.slice(sub3+1)
        const sub4 = str3.indexOf('target=')
        const str4 = str3.substr(0, sub4)
        const sub5 = str4.indexOf('"')
        const plotTitle = str4.substr(0, sub5)

        const plotSub = item.indexOf('item-intro c999">')
        const plotStr = item.slice(plotSub)
        const plotSub2 = plotStr.indexOf('>')
        const plotStr2 = plotStr.slice(plotSub2+1)
        const plotSub3 = plotStr2.indexOf('</div>')
        const plotContent = plotStr2.substr(0, plotSub3)

        const timeSub = item.indexOf('<i class="ibg">')
        const timeStr = item.slice(timeSub)
        const timeSub2 = timeStr.indexOf('<span>')
        const timeStr2 = timeStr.slice(timeSub2)
        const timeSub3 = timeStr2.indexOf('>')
        const timeStr3 = timeStr2.slice(timeSub3+1)
        const timeSub4 = timeStr3.indexOf('<')
        const plotTime = timeStr3.substr(0, timeSub4)

        const imgSub = item.indexOf('src=')
        const imgStr = item.slice(imgSub)
        const imgSub2 = imgStr.indexOf('"')
        const imgStr2 = imgStr.slice(imgSub2)
        const imgSub3 = imgStr2.indexOf('alt')
        const plotImgSrc = imgStr2.substr(1, imgSub3-2)

        return {
          plotTitle,
          plotContent,
          plotTime,
          plotImgSrc
        }
    }
  })

  arrPlots.shift()
  return arrPlots
}


const plotList = getPlot()


export default plotList
