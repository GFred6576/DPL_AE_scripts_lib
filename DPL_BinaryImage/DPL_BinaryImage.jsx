/**
 * @author ByGFred
 * @createTime 2024.09.22
 * @description 本地图片转换为二进制代码
 * 2.0.2 加入encodeURIComponent()函数，解决中文路径问题
 * 2.0.3 获得路径自动增加引号
 * 2.0.4 修改UI控件
 * 2.1.0 修复读取BUG，调整UI
 * 2.1.1 修复bug
 * 2.1.2 修复bug,优化代码结构
 * 2.1.3 调整ui
 * 2.1.4 增加按钮，支持导出当前二进制为图片文件
 * 2.2.0 Modulize
 * 2.3.0 添加保存字符到新文件并导入功能
 */
var DPLBinaryImageModule = (function () {
    var info = {
        name: "DPL_BinaryImage",
        version: '2.3.0',
        date: "2024/10/23",
        author: 'GFred',
        about: "",
        update: "1.0.0 ?\n2.0.2 加入encodeURIComponent()函数，解决中文路径问题\n2.0.3 获得路径自动增加引号\n2.0.4 修改UI控件\n2.1.0 修复读取BUG，调整UI\n2.1.1 修复bug\n2.1.2 修复bug,优化代码结构\n2.1.3 调整ui\n2.1.4 增加按钮，支持导出当前二进制为图片文件\n2.2.0 Modulize",
        biliLink: 'https://space.bilibili.com/67956004',
    };
    var ICON = {
        nullImg: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%07IDATx%C3%9A%C3%AC%C2%96%C3%BD%0D%C2%83%20%10%C3%85%C3%85t%00Fp%04Gh7p%04%C2%BBA%3B%C2%89%23t%C2%85n%C2%A0%1B%C3%98%11%C2%BA%C2%81n%40%1F%0D%C2%B4h%3DA%22%C3%B8G%7D%C3%89%C2%8B%17%14%7F%7C%C3%9C%11%C2%98%C2%80%C2%92%0D%C2%94%26%1B%C3%A9%60%C3%84W%C3%B8%11%C2%98%C2%97%C3%83%C3%95%3B%12_%1D%5Dz%C3%A2%C2%BB%1C%C3%A6%3ET%C3%89%C3%90%C2%B0tA%C2%A7%02%C3%AE%10%C2%B6p%C2%87%C3%B8%C3%A6%3B%00%C3%A7%19%C3%A3%5D%26%C2%A1%C3%A2WU%C3%A8%19%170'%C3%9A7%C3%89j%1E%1A%7C_%C3%98%C2%BE%0E%C2%981%C3%B6%C3%84%C3%A3%0C%C3%B7Fs%C2%A3J0%5Cr%19%C3%9Fr%C2%95%20Y%C2%B4rR3%C3%AF%C3%A1F%C2%AD%C2%809%C2%98Z%C3%96w%C2%B4%C3%A4Ru%5C%C3%83r%C2%B5%16%C3%81S%C3%8B%C2%8F%2B%C2%B8%C2%B4%40s%23%C3%83%C3%9D%C3%A1%C3%94%1E%C2%AB%C2%93I%C2%AB%C2%9C%C3%98%C3%ABVL%C2%AB%C2%A3%C3%A0%C3%A6%1EO%C2%82G%C3%90%01%C3%9C%02%C2%9D%C2%85%C3%8F%C2%82%09%C2%A8%C3%96%C3%85%01J%C3%82I%C2%B0%05%C3%AA%C2%A3%01%C2%9C%02%C2%B7%22%C2%8C%3Ep%13%C3%8C%22%5D%7D%C3%A4%C2%89w%C3%92%C2%99%1F%C3%B3%C3%AA3.%C2%BD%C2%84%C3%BD%C3%9Deo%07%C3%AF%C3%A0%1D%C2%BC%C2%9A%5E%02%0C%00u%C2%82%C2%98%3D%C3%8A%C2%8D%C3%B4%C2%B0%00%00%00%00IEND%C2%AEB%60%C2%82",
        smallDumpling: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%19%00%00%00%19%08%06%00%00%00%C3%84%C3%A9%C2%85c%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%8BIDATHKc%C2%A0%07%60%C2%84%C3%92X%C3%81%C2%9A%C2%B0%C2%95%C3%BF%C2%A1L%C2%82%20dU8N%C2%B3%C2%B0J%C2%90b86%C2%80n!%0A%07%C2%9B%C3%A1*FvP%16np%C3%A7%C3%9C!(%0B%01%C2%90-%C2%823%C3%90-%20%C3%86p%10%C3%90%C2%B5%10%01%C3%93%C2%97O%C2%BC%C3%81%C2%B0%0Cf%11%13%C2%98%C2%87%06%C2%88%C2%B5%00%1D%04f%05%C2%811%0C%C3%80%1C%0E%C2%B6%04%C3%99%17%C3%A4Z%C2%80%0F%C2%A0%C3%B8%C2%84%1C%0B%40%C3%81%04%C3%82%C3%88lts%C2%B0%06%17%08%C2%80%C3%82%17%C2%86%C3%B1%01b%C3%94%C3%A1%C2%B4%C2%84%C2%9A%60%C3%94%12%C2%92%00%5D%2C%01%C3%A7HX%3E%C2%A1f%1E%C2%81%C2%A56P%C2%AE%1F%C2%8D%13%C2%92%00%C2%8A%25%C2%84r7%C2%B1%00%C3%9D%1C%C2%ACE%3D%25%09%00%C3%99%02%C2%BCE%3D%C2%B9%3E%C3%82%C2%A5%0F%C3%AE%13%10%40%C2%AF%C2%B8(%01XkFd%40%C2%89e%C3%88%C2%86%0F7%C3%80%C3%80%00%00%C2%AC%C3%B3%5B7(%C2%AA%3B%2B%00%00%00%00IEND%C2%AEB%60%C2%82",

        download: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%10%06%00%00%00NIo%1A%00%00%01oIDATh%C2%81%C3%AD%C2%98%3D%2CCQ%18%40_%7F%C2%98%14%09%C2%8BH%19TD%1B%C2%A3%18%C3%85%C3%8Cn%C2%AE%C2%95%C2%84D%C3%8Ce%10v-%23%5B-fV1%C2%9Bj%115a%C2%AB%C3%84%C3%90NE%0D%C3%A7%C2%BE%0EO%C2%BE%C2%A0%C2%B9%C2%B7%C2%97%C3%B8%C3%8E%C3%99n_n%C2%BF%C3%AF%24%7DC%C2%83%40Q~B%C3%8C%C3%95%C3%85%C3%B1%18%C2%8E%19l%C3%9D%5B7%C3%94%C2%9E%C3%91%C3%96%C2%BD%5Dcp%00%5B%C2%9699F%C3%97%C3%B3%C3%87%5D%7F%C3%81_E%C3%83%08h%18%01%0D%23%C2%A0a%044%C2%8C%C2%80%C2%86%11%C3%900%02%1AF%40%C3%83%08h%18%01%0D%23%C2%A0a%044%C2%8C%40%C3%B2%C2%BB%0F%C2%AE%C2%ADb%C3%86%10%C2%9E7%C3%AA%C3%98%7C%C3%85%C3%B0%3C%11G%C3%9B%03%C3%A7%C2%B2%C2%B8%5D%C3%80%C3%A8%C3%A7%C2%A9%3EL%241%3C%2F%1A%C2%AA%C3%B7hm%C2%A0%C3%B4(%3E%3E%C2%A0%C3%AD%C3%BFY%5C%C2%B1S%40k!%242%13%C3%B84%C2%82%C2%BE%17%C2%97%C3%98%C3%9FC%C3%A7A%C3%84%40%C2%BB%C3%A8%3BD%C2%88%C2%B7%20Q%C2%B2%C3%93X%C3%8Bc%C3%97%0A4%C2%8D%C2%86%C3%A2%01%C3%BA%C3%AE%C3%B1%C2%89%C2%99%1C%3A%0F%C3%B4f4%1C%C2%950h%19%7F%2B%C3%AD%40%C2%B7%C3%B8%C3%AF%C2%83D%C2%99%C2%9B%C3%85%C3%865%C3%9A%C3%AAsZ%C3%86D%0C%7D%C3%AF%C3%991K%C2%8B%C3%B8%C2%BE%C2%8C%C2%9D%06%C2%B9%C2%BA%C3%84%C3%9E%1E%C3%B4%C2%BD%C2%9756%C3%96%C2%B1%C2%BDi%C3%A4%C2%A7!Q%C2%BD%C3%83%C3%A1!%C3%B4%C2%BD%C2%873%0EK%C3%B8U%C2%90%C2%973%C2%9C%C2%9AD%C3%9Fs%3B'%7C7%5C%C2%9Cc4H%C2%B3%C2%8C%0B%C3%B3%C3%A8%7B%C3%9E%C2%AE%C3%93%C2%9F%C3%82%C2%9B%0A%C2%86aV%C3%B2%C3%A8%7B%3E%C3%AF%C2%8C%C2%A7qk%13%7D%C3%8F%C2%A3(%C2%8AU%3E%00%C2%B3%C2%99%0A%C3%9D%C2%BB%00%C3%BCB%00%00%00%00IEND%C2%AEB%60%C2%82",
        strToImgFile: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%10%06%00%00%00NIo%1A%00%00%03%18IDATh%C2%81%C3%AD%C2%9AKH%15Q%18%C3%87%C2%BD%C3%97%C2%9B%C3%A0%23%C3%B5%06%C2%B9P%7C%C2%84%C2%B6%C3%A9%C2%81.j%C2%A5%C2%ABZ%24-Z%C3%B4Zd%05%3DW%06.%C2%AC(%220%C2%88Z%06E%C3%94%C2%A6'%04Q%C2%90%C2%B52%08j%11%14%14(E%C2%AB4%C2%82%C2%88%2C%C2%A1%C3%B2y%7D%C3%9B%C3%A2%C3%BF%C3%BF%C2%BB8%C2%97a%C2%9C%C3%A3%C2%99%C3%91%1B%C3%B7%C3%B7%C3%9B8w%C2%8E%C3%9F%C2%9C%C3%AF%C2%9B9%C3%A7%C3%8C%C3%8C%C2%BD%C2%B1%1C%C2%83%C2%BC%15%C2%B0%C2%8D%1C8%08%C3%97%C2%918%C3%B9M%C2%BAH%0B1%C3%A3%C3%A9%C3%B3%C2%93%C3%AD%C3%90%C3%9C%C2%BFPn%C2%88%C2%9B%C3%90%C3%9C%7F%C2%A1%03%C3%AE%20%C3%A6%C3%BE%C2%99Y%C3%B8%C2%95%C3%9C%C2%BF%07%3B%C2%9FB%C2%B3%7DB%7F%C3%84%C3%88%C2%93N%C2%B8%C2%9Dt%C2%92%5Bdf%1A%C2%AE%C3%9F%007o%C2%82%5E%09%0D%C3%BC%C2%82%3D%C3%84%C3%9C%C3%9FL%C3%B2%C3%883b%C2%B6%C3%AB'%5E%C3%87%C2%A9%22%3A%C2%81%0F%C2%88%C3%B6%C2%AF%2C%C2%86Md'9G.%C2%92%C2%B4%C3%80M%C2%8Dp%C2%8Et%10%C2%AF%C2%8E%C2%88%7C%C3%A2%C3%97%C3%8E%C2%8BW%2FaO7%C2%B4%C2%8Ds%C3%A76%C3%BC%C3%BB%07z%C2%B5%2B*%C2%84%C2%9F%C3%88%04)%24j%17%C3%97%1F%C2%B5uP%C3%9Bo%C2%89_%C2%87R%C3%846%C2%A1%C2%A8%19%19%C2%85%C2%8F%C2%89%C2%AE%C3%9455P%C3%AD%C3%A6%0B%C3%B3%C3%B1%03%C3%94%C2%B6%C3%A6%C2%98%C2%82%7C%18m%C3%B7%C3%83%C2%A7%C2%8Ch%C3%9Bo%C2%A8%C3%A6%5C%C2%BB%0A5%C2%A4z%3F%C3%83%C3%9D%C2%BB%C2%A0%C3%A6%22W%1D%C2%8Cz(m%25c%C2%A3%C3%B0!%C3%B1%3D%C2%80%12%3F%7C%08%C3%B6%C3%BF%C2%80*%C3%94%C3%BBw%C2%B0%C2%91%C3%98%26%22%5C%17f%C2%86(%C2%9E%C3%BCN%C2%B4%C3%BF.%C2%B1%1E%11%C2%9A%C2%AC%C3%8E%C2%9E%C2%81C%C2%83P%078~%0C%C3%9A%26%C3%A4%C2%BA0%C2%93%13P%C3%9B%C2%8F%C3%88%C3%880%C3%94%C2%A4%5BMl%C2%8F%C2%97F%25%C3%91%01%C2%A6%C2%A7%20%C3%A7%C3%AE%C3%9A%C2%A0%C3%B1%C2%A2%1AJ%C3%AA%C3%9F%00%C3%A9%26%C2%89%5Ch%C2%B6%C2%8F%C2%9B%1F%C3%B8%C3%B1%C2%8D%C2%9C%3E%05%197%C2%B1%C2%85%C3%98%26%166%C2%BD%7D%C2%B0%C2%954%C2%90vb%C2%B6%C2%9F%2FL%C3%99j%C2%B8%C3%90%C3%89%C2%95C%C2%B3%40%C3%9B%1CaC%C3%AER%09%07M%C2%B6%2F%C3%88yRS%0D%C3%95n%C2%BE0%C3%BB%C3%88kr%C3%B4%08l%C2%A8%C2%87%1B%C3%89%C3%BE%16x%C2%85%C3%A8%C3%8E%C3%B6y%17%5C%C2%9At%C2%83s%C2%A2%15%26%C3%88u%C2%92%C3%96%C2%B0y%1B%C3%BCI%C3%A6%7CxC%C3%AA%C2%89m%07%C2%A3%5E%C2%AEM._%C2%82%C3%8Ak%C3%AF%1E%C2%986d4%C2%94%C3%96%C3%96%C3%81%C3%8A*85%09%C3%BB%C2%BE%40-%7F%C2%B6%C2%89%08%C2%ADz%C2%B18%1C%26A%C3%A3h%C3%99%C3%A53p%C3%9E%20%C3%B1%C3%BB%3FM%C2%BEEd%C2%92%C3%98e%C2%93%25K%C2%96%2C%C3%8B%C2%8C%C3%92%12%C3%A8%C3%AA!%C3%94u%C2%BC%C3%88Q%02~%C3%8B%C2%BF-%C2%8A%C3%AF%C2%BA%C3%9F%C2%81%1F%09%C2%82%C2%92)w%C3%84%26%C2%A1%17Fg6%C3%AC%C3%A3%C2%B8%26%C3%B4%C3%82d*%C3%99%C3%82x%C2%90-%C2%8C%07%C2%91-s%C2%B3s0%C2%96%03%5D%C2%91%1B%C2%87%C2%8A%C3%AF*%C3%AE%C2%A2%C2%AF%C2%98%C2%85%C3%9EO%C2%A4%C3%86%C3%A0b%C2%8Fg%C2%A2%C2%AF%3F%C3%BC%C3%BA%174%C2%AE%C3%B5%C2%A9%C3%93%C3%93%2C_%C2%B6%3BO%C3%985Ao%04%C2%AD%C2%AF%C2%98%C3%948L%C2%96%C3%82%C2%8Arh%1B%C3%8F5%C3%AA%C2%8F%C3%BA%C2%B7d%1D%C3%91%19%C2%A9%20z%C3%8F%12%C3%96%1D%C2%AFI%C2%92%C3%A8%C2%AB%C3%96e%C3%BB%C2%A8%C2%A0%C2%8E%C2%ADJ%C3%82%C2%B0%0A%C2%A2%C3%B8%C2%AE%0B%11zE%C3%95%C3%A1%C2%92b%C2%A87u%C3%BA%19I%C3%90xz%C3%93%C3%86EhVCZ%C2%85%0A%23%C2%87HP%C2%A1%C2%B4Zh%08x%5D%11%1A%1A%C2%9A%C3%AC%C2%A3%1A%22K%3E%06%C2%95h9%19'%C3%BA%1D%C2%8E%1EB3%C3%BE%C2%8A%C3%B8_%C3%B8%07%C2%B5%C2%AE%C2%AC%C2%8B%2BD%C3%81z%00%00%00%00IEND%C2%AEB%60%C2%82",
        strToImportFile: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%10%06%00%00%00NIo%1A%00%00%07%C2%99IDATh%C2%81%C3%AD%C2%98%7FL%C2%93w%1E%C3%87%C3%9F%7D(%05j)%C2%B5tX%C2%99%22%22rE%C3%99%C3%868D%C2%A2%C2%88d!%1Dc%C2%860fH%0F7%C2%86%3B%C3%A61%C3%86q%1C%C3%B1%C2%8C1%C2%841%C3%A28B%C2%8CA%C2%B2%10%C3%93%C2%AB%C3%9E%C2%85%10%C3%83%C2%91%C2%8E%20a%06%1Dn%C3%98p%1C%12%C2%82%1C%22v%C3%AC%C3%84%02%C2%A5V%0A%C2%B5%C2%94R%C2%9E%C3%BE%C3%A0y%C3%AE%0F-%C3%A5ZQ%148w%C2%81%C3%97%7F%C2%9F%C3%8F%C3%A7%C3%BB%C3%BD%7C%3F%C3%8F%C2%BB%C3%8F%C3%A7%C3%BB%C3%B4%C3%BB%05%C3%96Yg%C2%9DuV%0F%C3%86%C3%8BN%7C%C3%B7%C3%9C%C3%9E%C2%BF%C2%8B%C2%B6g%C3%BC%26%C2%B6~%C3%B7%C2%A1m%C2%B1b1%C3%B1)1%C3%88H%C3%B7%20%C3%98%12o%0E%C2%AB%C3%9B%C2%97%C2%BB%C3%94%3CD5%11%C3%87P%13%C3%84%C2%86%10%C3%AF%3AV%3Cw%C3%89%C3%B3%18%C3%9D%C2%8C%C2%8B%C2%8CB%068z%C2%9F%24V%C2%A3%1Fo%C2%B1qw%2F%C2%A9%06%1E%C3%B6vw%C2%9F%C2%9E%C3%BE%C3%9B%C3%97%C3%9F%C3%BF1%C3%BB%C2%B3%C2%A5%C3%A6g.u%C2%A0%2B%C2%BB%0D!%C3%87%C2%84%C2%82%C2%98%C2%98%C3%B7%C3%8F%C3%AE%C2%AF%C3%9F%C2%95%C3%B9I%C2%96%C3%83%C3%AF%C2%9D%C3%8E%C3%AD%14%C2%A4%01%1B%C3%8B%C2%83%C2%B3%C3%9E%1A%02%C2%98%11%C3%9EW6%C2%88%00%0B%C3%9F%C2%98%C2%A1%C3%AB%06%C3%86%5B%C2%94M%C3%BF%14%02%01%C3%9A%C3%B0%13%C3%BB%C2%AB%01BFt15O%26%C3%B7%C2%BB%C2%AF3%1Bg%C3%A8%C3%93V%01%C2%A6T%5D%C3%AEp%1B%C3%B0%C3%9A%C3%B1%C2%9D%C3%AD%7B%1B%00%00%C2%A7%11%0AP%C3%81s%15%C2%B6%02%C3%80T%C2%A6%C3%AB%1EN%05%C3%8C%C3%B6%C3%89%C3%92%C2%B1X%C3%A7%C3%BCi%C2%B19%C3%91%C3%825%18%C3%B0!%C2%BE~%C2%91%C3%A7%23%5ET%C2%90%C3%85%C3%A04%04%7C%C2%B3-%1E%10%C2%89%C2%93%3F%C3%8Dk%04h%13%C3%8D%C2%9F%C2%8B%01%C3%88BC%C3%94%C3%83%60%C2%80%C3%8D%C3%A4%C2%97%C2%BC%C3%9E%C2%B9%C3%B8%7C~%C3%A7%C2%8E%C3%86%C2%A8X%C3%80'%C2%9B%2F%C3%99%C2%BC%C3%85%3D%C3%8ETx%19%C3%98%1C%200%C3%B9%C3%ADJq%C2%8A%C3%93%C3%AFu%C3%88%C2%B7%C3%88%C2%BF%0C%10%C3%ADK%3A%C3%BE%C2%B9%1A%C3%A0%C2%B7nWD%C3%A6-%C3%BFy%5E%C3%BA%C2%8Dq%C2%85%C3%87%C3%9F*%C3%9Fm%06%C3%B4%C2%B5%C3%B7%03ni%00m%C3%AC%C3%AD%C3%86%C2%B6%01%00%12%0C%02%C2%80N2%18u3%C3%959~%5Cx%C2%B7%C3%A2%1F%C2%B9%00j%C2%A0%04%00v%C2%9C%7Fo%60%22%60H%199%7C'%13xT3%C2%AC%C2%BC%7D%1A%00%C3%80%C2%82%11%C3%B0%C2%92%C3%BB%C2%82%0F%60N%60%C2%93%C2%92%C2%91%C2%80%C2%B6%C3%A6N%C3%92%C2%8D%18g%3E%C2%8B%C3%8A%C2%A4%C3%91%C2%9F%04%C3%B8%C3%96%C2%90%C3%B1%C2%B7%07%01%C2%BD%C3%B6%3Ez%01l%C3%AE%C3%99T%C2%BF%C2%A9%C3%BE%60B%C3%B6o%C2%8F%5C%3Dr%C2%95%C2%A6%5D%C3%ABV%C2%95%C2%8C%C3%86%C2%8E%C3%8666%C2%B4nU%C3%B8)%C3%BC%3E%C3%B8%C3%90%C3%A1_%C2%B17fZ%C3%BC%C2%B0x%C2%88%04%C3%BC%C3%AD%3B%C3%B8%C2%BF%C3%AE%00%C2%B8%C2%95%C2%9B9%C2%A1%C2%89%2B%C2%95%C3%BD%C3%B9%C3%B8H%C3%BCr7%C2%A5%01%C2%96%24c%C2%AB.c%C3%A9%C3%B3%C2%ACB%C2%9B%C3%94%26%C2%9D2%C2%BA%C3%BAWL%C2%98)%C2%AB%C3%BA%1De%3F%C2%A0j%C3%AE%C2%88%C2%94%C2%A7%00%C3%9B%C3%8F%C3%87s2%C3%BA%C2%81%C2%B0vq%C3%9Bg%14%C3%A05%C3%A2%C3%9B%C3%A2%C2%9F%C2%BB%C3%BCu%3C%09%C2%9F%04n6%20%C3%A2%25S_%04%03%11%C2%B2%0F*%C3%BE%24%7B%C3%92jl%40%C2%93%C3%9E%2B%C3%BD%3Ek%C3%B9%C3%AB%C2%AC%C2%980%0E%1E%C2%A9U9%7D%09%C3%80m%C2%A1%3C%C2%A6%2C%01%C2%98i%C3%95E%C2%8E%0C%01%C3%A1%C2%9A%C3%B7%C3%8B%7F%C3%BF%11%C3%80%3C%C3%A3u%C2%86%5D%C3%B4%C3%B2%C3%B9%C3%AD%09%16%C2%9E%C3%99%0C%C2%8Cf%C3%9E%14_n%07%C2%A6y%C3%9A-%C3%B7r%00%C2%8Ft%C2%AF%08%1F%3D0Wl%C3%8F%C2%B2%C2%A6%3C%3F%C2%8F%03k%C2%B35%C3%81%C2%9A%600%C2%B8%C3%BA%C3%9D%C3%B6%18%C2%BF%C3%AB%C3%9C%C2%A3%C3%9C%C2%A3%C2%A2_%C3%AD%C2%B8%14%5C%17%5C'%C2%910%C2%AA%18%05%C2%8C%02%26%C3%93%C3%B3%1A3%C2%8D%C2%99%C3%86%C3%A18%C3%86%C2%BD%C2%9E%25%2C%136%26%C2%B6%22%09%00P%C3%A0%C2%9A%C2%87j%C2%9Bk%C2%B2%C3%97%01c%C2%B8%C2%85%C2%AB%00x%C3%B6m!%11%02%60C%C2%9F%C3%A0%C3%BC%C3%96%24%60%0Ac%C3%B8%C3%89%C3%AD%05~%3E%C3%B4%0FT%C2%A3%C3%BD%120S5%C3%99%C2%AAf%01%C3%A6%C3%9C%C3%8E%C2%A01!%10%C2%BE%C3%A5PZ%C2%BE%14%10%C3%B4%C2%87%C2%A6%C3%AC)%07%26%C3%B03%C2%BA%5E%3C%C3%BD%3Cn%C3%82%C3%B0%C3%9A%C2%B8%C3%99%C3%9Cl%C2%91(%0AoH%C3%9E%C2%90%7CY%C2%82%C3%BC%C3%B9%C2%90%1Ez%C3%A7%C2%B8%C2%8Da~r%C3%9F%3A%14%00hE%1C%20%C3%AC%C2%8C%C3%90'H%01%3A%C2%82%3EAu%00%C2%B3%C3%87%C3%B4b%C3%8Da%C3%80%5B%C3%A2%C2%97%1B%C2%90%06x)8%C2%A6%C2%8D%C2%87%00%C3%B3Y%7D%C3%A2%03%11%00%0A%0A%C3%88%C2%96Q%C3%B9%13%C3%A8j%3A%C2%8EV%03%C3%83%C2%B1%1D%23%C3%9F%C2%A6%03a%C3%82w%C2%BB%C2%8F%C3%95%03%C2%86%C2%B3%C2%A3%C3%A3wD%00%C2%9A%00%C2%B7%C3%97a%01O%C3%B6%18%C2%B7!%2B%C2%B7%C3%B9%C3%BE%5B%C3%9Bro%10%C3%B0%12%C3%BA%06%C3%BA%C2%93%40%40P%C2%B8r%7F%18%C3%A0%C2%AD%C3%B7%C2%AB%7D-%1A%C2%B8%7B%C3%BA%C2%BB%C2%B8o%14%C2%80%C2%8D%C2%9AU%18%C2%9F%22%C3%88T%C3%B6%18%C3%AB'%23%60i%C2%9E.%C2%9D8%C3%A5%1E%C2%9F%13X%C2%A5d%240qv0%C2%AE%2B%C3%8D%3D%3E%C3%939%19%C2%A4%C2%AE%07%C3%86T%3D%C3%9A%C2%96%C2%93%C3%80%C2%86%7C%7F%C3%B1%16%C2%8D%C3%BB87d%C2%A8E%C2%AD%C3%9B%C3%87j%C3%A5%3E%C3%973%1FMd%C2%8C%C2%9E%01fL%13%18%05%C2%80%C3%B2%05%C3%81%0E%00%40%C3%92%C2%B3~%C2%86%C3%89%7D%C3%B7%C3%92z%C2%BA%00%C3%AC%C3%83S%1E%1B%C2%B0'X%C3%B8f30%C2%96p%C2%AB%C3%B0j%C3%B3%C3%A2y%C3%86K%C2%95)%1D%C2%8E%C2%B5%C2%8D%00%C2%9A%C2%9E%5D%C2%B7%C2%B5%C3%88j%C2%B6%C2%9A%C2%8DF%5C%00c%C3%A19%60%C3%857%C3%9F%C3%BF%3Bb%C2%90%C2%84%24%C2%8Aru%C2%AFyalI%C2%B6F%5B%C2%A3%C3%89%C3%A4%C3%AA_%C3%B3%C3%82Pyt%25%5Di%C2%B7%C2%BB%C3%BAWl%C2%8Fy%1E%C2%96%5E%C2%9Bl%C2%AE%14%C2%90%C2%9Bn%C3%A4%2B%01%C2%8C%C3%97M%C3%99I%C3%A9%C3%BF%60%C3%9DP%C3%BB8%C3%8D%07tA%C3%86P%5B%C2%A8%7B%C3%9C%C2%83%C3%AD%C3%81%C3%B2%60%C3%BD!%C2%95%C3%AB%C3%89%C2%B9%C3%81%C2%B9%C3%A1A%18m%C2%A6%C2%83%C2%A6%C2%83%17%C3%BE%C2%BA%C3%AA%C3%82%C3%9Ck%C3%96T%3ER%01%C3%95U%C2%97%25%C2%B74%C2%80%C3%9E%3E%C3%9DI%0A%C2%80%23%C3%99%1FG%7F%3C%01%C3%B0%C3%AC%C2%BCx%5E%C3%BC%C2%AA%C2%96%10%C2%8FZ%00.%C3%8D%C2%A2%C3%B2V%C2%95%C2%A9%C3%8A%C2%80%C2%86Ty%C2%A6%3C32%C2%95%C3%99%C3%A7%C2%99%C3%A8%C2%99%18%C3%92%C2%8F%C3%B0%C3%87%C3%B1%15%17%C2%86b%C3%93%C3%A54%07%C2%B8%2Cn%17%0F%1E%06%C2%BE%C2%8DP%C3%A4%2BS%C2%80%C2%9D%C3%97%C3%82%C3%B8a%C3%89%40U%C3%84_%C3%BA%C3%BE%C3%8C%06%C2%82%C3%89%C3%A07%C2%83%C3%9F%04%00%18%C2%9E%C3%B9Gc%C2%95h%C3%A3%C3%BFx%C3%A2%C3%87%13%40C%C2%A3%5C%2B%C3%97%02%C3%B4%10M%C3%92%24I%3A%C3%A2%C3%B3%C3%820%3Eg%C2%BC%C3%87x%C2%8F%C3%AD%C3%83(%24%C2%92%C2%89%C3%A4%C2%BDA%C3%9Av%1D%C2%A9%23%01%14%C3%93%15t%C2%853!UL_%C2%A4%2F%02%5D%C3%91%C2%B6%C3%AA%C3%89%26%60%C2%B4G%C2%B3%C2%8B%C2%95%C3%A5%C2%8C%C3%9F%3C%C2%A5d%3F%C3%A0%02%3FW%C2%A9%3B%26%03%C2%81O%C2%A2%C2%8F%C2%9E%3Fz%0D%C3%B8%C2%9D0%C2%A7-%C2%A7%0D%60%C2%92%C3%8CS%C3%8C%25_G%C2%AD%1Ed4%C3%89%23%1F_o)%C2%A1%04(%11%C2%95F%C2%A5M%C2%9B%00%C2%9C%C3%83%C2%B9%05%C2%9B%C2%AFG%C2%90%C3%87%C2%80%C3%87%40%40%003%C2%9A%C3%A8%23%C3%BANVi%C2%8Bu%3C%1D%0F%60%C3%8A%C2%BC%C3%B3%C2%BD%C3%B3%01%C2%96%C2%90M%C2%B0%09%60%C3%A31A%C2%B2%20%19%20%C2%A5%2C%C2%81%C2%BF%00%18%1E%C2%B7%14%C3%B0b%00%C3%B5.%7B%C2%8F%7F-%C2%B0S%C3%B6%C2%96j%C3%AFq%40%C2%9A~A%7B%C2%81%09%7C%11%C2%90%C3%97%C2%93%C3%97%030)%26%C3%B7%C2%97%20%C2%88%03%C2%8B%C3%8CRj)u%C3%9At5%7D%C2%85%C2%BEb6%3B%C3%ACE%5B)n%C3%A8%C3%80%C3%84%C2%81%09%C3%A0%C3%8B%C3%A0%C2%AF%C3%B4_%C3%A9%01%C3%94%22%03O%3F%C3%8EKQ%C3%BA_%C2%B6%02%02%3C%C3%AE%C3%A9%C2%96e%C3%95%C2%BE%C2%AA%C2%98e3%C2%853%C2%85%00%005%C3%94%C3%AE%C2%AD%C2%B4f%3F%C3%97%C2%B31%24%C2%9F%C3%A4%3Bm%C2%8AIEQQ%C3%86%C3%B9c%C3%AD%C2%9A%15%C3%86%C2%96cM%C2%B5.%C2%B8Q%C2%A4%5B%C3%A8%01z%60v%C2%BE%C2%95%C3%96%C2%AC0%C2%A6%C3%9E%C2%99%C2%9A%C2%99%1A%C2%A7M%C2%AD%C2%B7%C3%92cHbvdv%C3%84iS*%C2%8AO%C3%B1%C2%A7%C3%96%5B%C3%89%C2%96cK%C2%B5-l%C2%A5k%C3%AB%C2%AD%04%000%11%C2%A6%3ES%C2%9F%C3%93%C2%A6%09%3A%C2%90%0E%C2%B4X%1D%C3%B6%C2%9A%15%C3%86%C3%92C6%C2%91%0B%C3%AEj%C2%A8V%C3%8A%40%19%C2%9Cw%C2%BFkW%18%C2%99%C2%B5%C3%84Z%C3%A2%C2%B4%17%3D%12%C2%B8%C3%B2%C3%83%C2%95%C3%AB-%C3%97%5B%C3%A6%06%C3%BF%25%C3%AB5%C3%B5%C2%9Al%C2%85%C2%ABZ%C3%A5%2B%40%2B%7D%C3%90%C3%BE%C2%A0%C3%9D%2B%16%C2%80%06%1AF%11%7D%C2%9F%C2%B6%C3%90%16%C3%92%C3%A2%C2%88%C3%8F_%C3%A69%C3%8EJ%C3%AC%09%1F%C2%96%0FK%2C~%25%C3%95%C2%BE%02%C3%A8%7C%C2%BA%C2%88.%C2%B2%C3%9B%C3%8D%07f%C3%B7%C3%8C%C3%AEi%C3%BE%C3%AEU%C3%97%C3%B3%C2%8B%C3%A7%3F%C2%A6%24%1Bn%C3%B9%C2%AF)O%00%00%00%00IEND%C2%AEB%60%C2%82",

    };

    if (app.settings.haveSetting(info.name, 'chosePage') == false) app.settings.saveSetting(info.name, 'chosePage', 2);

    function UI(_parent) {
        var w = _parent.add('group', [0, 0, 50, 50]);
        w.width = 450;
        w.preferredSize.height = 350;
        w.orientation = "stack";
        w.alignment = ["fill", "fill"];
        w.alignChildren = ["center", "top"];
        w.spacing = 0;
        w.margins = 0;

        var tabMain = w.add("tabbedpanel", undefined, undefined, { name: "MainTab" });
        tabMain.alignment = ["fill", "fill"];
        // MainTab.preferredSize.width = 405.03;
        tabMain.spacing = 0;
        tabMain.margins = 0;

        // ================================================================================================================================
        // TAB1
        // ====
        var tab1 = tabMain.add("tab", undefined, undefined, { name: "tab1" });
        tab1.text = "1_IconView";
        tab1.orientation = "row";
        tab1.alignChildren = ["fill", "fill"];
        tab1.alignment = ['fill', 'fill'];
        tab1.spacing = 0;
        tab1.margins = 0;

        //总组
        var t1MainGup = tab1.add("group", undefined);
        t1MainGup.orientation = "column";
        t1MainGup.alignment = ["fill", "fill"];
        t1MainGup.spacing = 0;
        t1MainGup.margins = 2;

        //图片
        var pImg = t1MainGup.add("panel", undefined, 'PanelImg');
        pImg.alignment = ["fill", "fill"];
        //填色
        var myImg = pImg.graphics;
        myImg.backgroundColor = myImg.newBrush(myImg.BrushType.SOLID_COLOR, [.3, .3, .3, .6], 1);

        var viewIconImg = pImg.add('image');
        viewIconImg.alignment = ["fill", "fill"];

        var t1g1 = t1MainGup.add("panel", undefined, undefined, { name: "'PanelG'" });
        t1g1.orientation = "column";
        t1g1.alignment = ["fill", "bottom"];
        t1g1.spacing = 3;
        t1g1.margins = 3;

        //大按钮组
        var gBigBtn = t1g1.add("group");
        gBigBtn.orientation = "row";
        gBigBtn.alignment = ['fill', 'center'];
        gBigBtn.spacing = 3;
        gBigBtn.margins = 3;

        //Get图片大按钮
        var revealImgToBinaey = gBigBtn.add("iconbutton", undefined, undefined, { style: 'toolbutton' });
        revealImgToBinaey.alignment = ["fill", "bottom"];
        revealImgToBinaey.text = "▶ get_binary   ";
        revealImgToBinaey.helpTip = 'L-Click: Read\nR-Click: Clear';

        var revealBinaryToImage = gBigBtn.add("iconbutton", undefined, undefined, { style: 'toolbutton' });
        revealBinaryToImage.alignment = ["fill", "bottom"];
        revealBinaryToImage.text = "reveal_binary";

        var saveToImgFile = gBigBtn.add("iconbutton", [0, 0, 35, 35], undefined, { style: 'toolbutton' });
        saveToImgFile.image = decodeURIComponent(ICON.strToImgFile);
        saveToImgFile.alignment = ["right", "bottom"];
        saveToImgFile.helpTip = "this str file save to img file";

        var importFileFromSrc = gBigBtn.add("iconbutton", [0, 0, 35, 35], undefined, { style: 'toolbutton' });
        importFileFromSrc.image = decodeURIComponent(ICON.strToImportFile);
        importFileFromSrc.alignment = ["right", "bottom"];
        importFileFromSrc.helpTip = "this img save to file & import to activeComp";

        var t1g2path = t1g1.add("group");
        t1g2path.alignment = ['fill', 'top'];
        t1g2path.spacing = 0;
        t1g2path.margins = 1;
        //使用原生二进制还是完全字符？
        var t1g1CheckBox = t1g2path.add("checkbox");
        t1g1CheckBox.alignment = ['left', 'center'];
        t1g1CheckBox.size = [15, 15];
        t1g1CheckBox.value = true;

        //路径
        var t1g1filet1g2path = t1g2path.add('edittext {properties: {name: "t1g1filet1g2path"}}');
        t1g1filet1g2path.text = "\\Path";
        t1g1filet1g2path.alignment = ["fill", "top"];
        t1g1filet1g2path.preferredSize.height = 30;
        //Get路径按钮
        var getBinaryFromFilePath = t1g2path.add("iconbutton", undefined, undefined, { style: 'toolbutton' });
        getBinaryFromFilePath.text = "Get";
        getBinaryFromFilePath.alignment = ["right", "center"];
        getBinaryFromFilePath.size = [30, 30];

        //二进制代码框
        var binaryCodeContent = t1g1.add('edittext {properties: {name: "BinaryText",  multiline: true, scrollable: true}}');
        binaryCodeContent.alignment = ["fill", "bottom"];
        binaryCodeContent.preferredSize[1] = 70;

        //滑块
        // var t1scroll = tab1.add("scrollbar");
        // t1scroll.alignment = ["right", "fill"];
        // t1scroll.preferredSize.width = 14;   //设置滑块宽度


        // TAB2
        var tab2 = tabMain.add("tab", undefined, undefined, { name: "tab2" });
        tab2.text = "2_Batch_Tool";
        tab2.orientation = "row";
        // tab2.alignChildren = ["left", "top"];
        tab2.alignment = ["fill", "fill"];
        tab2.spacing = 0;
        tab2.margins = 0;

        var gList = tab2.add("group", undefined, undefined, { name: "listGroup" });
        gList.orientation = "column";
        gList.alignment = ["fill", "fill"];
        gList.spacing = 0;
        gList.margins = 0;

        var t2p1 = gList.add("panel", undefined, undefined, { name: "t2p1" });
        t2p1.text = "*";
        t2p1.orientation = "column";
        t2p1.alignChildren = ["fill", "center"];
        // t2p1.alignment = ["fill","fill"];
        t2p1.spacing = 0;
        t2p1.margins = 0;
        t2p1.alignment = ["fill", "top"];
        // ================================================================================================================================
        //读取文件 | 添加组件
        t2p1.gup1 = t2p1.add('group');
        t2p1.gup1.spacing = 3;
        var chkTab2 = t2p1.gup1.add("checkbox");
        chkTab2.size = [20, 20];
        chkTab2.value = true;
        chkTab2.helpTip = 'Use Full Binary?';
        var bReadFiles = t2p1.gup1.add("button", undefined, 'ReadFiles');
        var bAddBtn = t2p1.gup1.add("button", undefined, "+", { name: "btnAddBtn" });
        bReadFiles.preferredSize[1] = 30;
        bAddBtn.size = [30, 30];
        bReadFiles.alignment = ['fill', 'top'];
        bAddBtn.alignment = ['right', 'top'];

        //定义图片大小
        var ImageSize = [38, 38];

        var bSizeContrGup = t2p1.add("group");
        bSizeContrGup.orientation = "row";
        bSizeContrGup.alignment = ['fill', 'top'];
        bSizeContrGup.spacing = bSizeContrGup.margins = 0;
        bSizeContrGup.preferredSize[1] = 25;
        var bSizeContrNum = bSizeContrGup.add("statictext");
        bSizeContrNum.alignment = ['left', 'center'];

        var bSizeContr = bSizeContrGup.add("scrollbar");
        bSizeContr.alignment = ['fill', 'center'];
        bSizeContr.preferredSize[1] = 14;
        bSizeContr.value = ImageSize[0];

        bSizeContr.onChanging = function () {
            //显示数值
            bSizeContrNum.text = bSizeContr.value;
            //
            var ThreeDAlignToolWinWidth = w.size;
            // $.write(gup.image1.size);
            for (var i = 2; i < t2p1.children.length; i++) {
                t2p1.children[i].children[0].size = [this.value, this.value];
            }
            // gup.image1.size = [this.value, this.value];
            w.layout.resize();
            w.layout.layout(true);
            w.size = ThreeDAlignToolWinWidth;
        };
        //复制五组
        for (var i = 0; i < 5; i++) { createGroup(i + 1); }
        //显示数值
        bSizeContrNum.text = ImageSize[0];

        var about = UI_aboutBar(gList, "©2024 | " + info.author + ' ' + info.date, 'v' + info.version);
        uiSetBgColor(about.panAbout, [.22, .22, .22, 1]);

        //scrolling
        var scroll = w.add("scrollbar");
        scroll.alignment = ['right', 'fill'];
        scroll.preferredSize[0] = 8;



        //functions
        /**
         * 创建一个横向about栏
         * @param {Control} 父级控件 
         * @param {string} _about 
         * @param {string} _iconHelptip 
         */
        function UI_aboutBar(_parent, _about, _iconHelptip) {
            var ICON = {
                smallDumpling: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%19%00%00%00%19%08%06%00%00%00%C3%84%C3%A9%C2%85c%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%8BIDATHKc%C2%A0%07%60%C2%84%C3%92X%C3%81%C2%9A%C2%B0%C2%95%C3%BF%C2%A1L%C2%82%20dU8N%C2%B3%C2%B0J%C2%90b86%C2%80n!%0A%07%C2%9B%C3%A1*FvP%16np%C3%A7%C3%9C!(%0B%01%C2%90-%C2%823%C3%90-%20%C3%86p%10%C3%90%C2%B5%10%01%C3%93%C2%97O%C2%BC%C3%81%C2%B0%0Cf%11%13%C2%98%C2%87%06%C2%88%C2%B5%00%1D%04f%05%C2%811%0C%C3%80%1C%0E%C2%B6%04%C3%99%17%C3%A4Z%C2%80%0F%C2%A0%C3%B8%C2%84%1C%0B%40%C3%81%04%C3%82%C3%88lts%C2%B0%06%17%08%C2%80%C3%82%17%C2%86%C3%B1%01b%C3%94%C3%A1%C2%B4%C2%84%C2%9A%60%C3%94%12%C2%92%00%5D%2C%01%C3%A7HX%3E%C2%A1f%1E%C2%81%C2%A56P%C2%AE%1F%C2%8D%13%C2%92%00%C2%8A%25%C2%84r7%C2%B1%00%C3%9D%1C%C2%ACE%3D%25%09%00%C3%99%02%C2%BCE%3D%C2%B9%3E%C3%82%C2%A5%0F%C3%AE%13%10%40%C2%AF%C2%B8(%01XkFd%40%C2%89e%C3%88%C2%86%0F7%C3%80%C3%80%00%00%C2%AC%C3%B3%5B7(%C2%AA%3B%2B%00%00%00%00IEND%C2%AEB%60%C2%82"
            };
            var panAbout = _parent.add('group');
            panAbout.orientation = 'row';
            panAbout.alignment = ['fill', 'bottom'];
            panAbout.margins = panAbout.spacing = 0;

            var slime = panAbout.add('iconbutton', undefined, decodeURIComponent(ICON.smallDumpling), { style: 'toolbutton' });
            var myWord = panAbout.add('statictext', undefined, _about);
            var openLink = panAbout.add('iconbutton', undefined, undefined, { style: "toolbutton" });

            openLink.text = "Find Link";

            slime.alignment = ['left', 'center'];
            myWord.alignment = ['left', 'center'];
            openLink.alignment = ['right', 'center'];

            myWord.margins = myWord.spacing = 1;
            openLink.margins = openLink.spacing = 1;
            slime.preferredSize = [25, 25];

            slime.helpTip = _iconHelptip;
            myWord.helpTip = String(new Date);
            openLink.helpTip = 'Open Bilibili Page';

            openLink.addEventListener('mousedown', function (e) {
                var biliLink = 'https://space.bilibili.com/67956004';
                system.callSystem("explorer " + biliLink);
            });
            return {
                panAbout: panAbout,
                slime: slime,
                myWord1: myWord,
                openLink: openLink
            };
        }
        function createGroup(id) {
            var group1 = t2p1.add("group", undefined, { name: "group1" });
            group1.orientation = "row";
            group1.alignChildren = ["left", "center"];
            group1.alignment = ["fill", "center"];
            group1.spacing = 0;
            group1.margins = 0;

            var image1 = group1.add("image", undefined, File.decode(ICON.nullImg), { name: "image1" });
            image1.size = ImageSize;

            var edittext1 = group1.add('edittext {properties: {name: "edittext1"}}');
            edittext1.text = "\\Path";
            edittext1.preferredSize[1] = 30;
            edittext1.alignment = ["fill", "center"];

            var button2 = group1.add("iconbutton", [0, 0, 50, 30], undefined, { style: 'toolbutton', name: "button2" });
            var button3 = group1.add("iconbutton", [0, 0, 30, 30], undefined, { style: 'toolbutton', name: "button3" });
            button2.alignment = ["right", "center"];
            button3.alignment = ["right", "center"];
            button2.text = "READ " + id;
            button3.text = "×";

            //读取单个文件
            button2.onClick = function () {
                var f = File.openDialog(undefined, undefined, 0);
                f.open('e');
                f.encoding = 'binary';
                var ree = f.read();
                var context = ree.toSource();
                f.close();
                //图片
                this.parent.children[0].image = f;
                //填入文本框
                if (chkTab2.value == true) this.parent.children[1].text = '"' + encodeURIComponent(ree) + '"';
                if (chkTab2.value == false) this.parent.children[1].text = context;
            };
            button3.onClick = function () {
                if (this.parent.children[2].text != 'read 1') {
                    this.parent.parent.remove(this.parent);
                    w.layout.layout(1);
                }
            };
            return group1;
        }
        /**
         * 撤销组 
         * @param {string} _name 
         * @param {function} _fn 
         * @returns 
         */
        function undo(_name, _fn) {
            app.beginUndoGroup(_name);
            _fn();
            app.endUndoGroup();
            return;
        }
        /**
         * alert弹出错误 
         * @param {function} fn 要执行的函数
         * @example
         * ```
         * try1(function(){
         *  var a=number('hello')
         * })
         * ```
         *  */
        function try1(fn) {
            try {
                fn();
            } catch (e) { alert(e.line + '\n' + e.message); }
        }
        /**
         * writeLn输出错误
         * @param {function} fn 要执行的函数
         * @example
         * ```
         * try2(function(){
         *  var a=number('hello')
         * })
         * ```
         *  */
        function try2(fn) {
            try {
                fn();
            } catch (e) { writeLn(e.line + '\n' + e.message); }
        }
        /**
     * 控件设置BG颜色
     * @param {object} _control 
     * @param {array} _Col [r,g,b,a]
     */
        function uiSetBgColor(_control, _Col) {
            _control.graphics.backgroundColor = _control.graphics.newBrush(_control.graphics.BrushType.SOLID_COLOR, _Col);
        }
        /**
         * 控件设置BG颜色
         * @param {object} _control 
         * @param {array} _Col [r,g,b,a]
         * @param {number} _StrokeWidth 
         */
        function uiSetForeColor(_control, _Col, _StrokeWidth) {
            _control.graphics.foregroundColor = _control.graphics.newPen(_control.graphics.PenType.SOLID_COLOR, _Col, _StrokeWidth);
        }
        /**切换页面 */
        function changePage() {
            tabMain.selection = app.settings.getSetting(info.name, 'chosePage') == 1 ? tab1 : tab2;
        }
        /**$.writeln输出内容
         * @param {*} _str 
         */
        function print(_str) {
            $.writeln(_str);
        }

        //events
        //打开文件并转码为二进制
        revealImgToBinaey.addEventListener('mousedown', function (e) {
            if (e.button == 0) {
                try {
                    //读取照片
                    var imgFile = File.openDialog();
                    if (imgFile != null) {
                        var format = imgFile.fsName.substring(imgFile.fsName.lastIndexOf('.'), imgFile.fsName.length);
                        if (format.match(/\.(png|jpg|jpeg)$/gm) == null) {
                            alert('没有检测到文件格式符合.jpg/.jpeg/.png。请确认文件格式。');
                            return;
                        }
                        imgFile.open("e");
                        imgFile.encoding = "binary";
                        //读取内容，获得内容
                        var content = imgFile.read();
                        //因为读取的是图片，用toSource获得内容
                        var context = content.toSource();
                        imgFile.close();

                        //**获得读取文件的路径
                        //**fsName去掉奇怪的字符
                        t1g1filet1g2path.text = imgFile.fsName;
                        // t1g3BinaryText.text = context;

                        //使用完全字符？
                        if (t1g1CheckBox.value == true) {
                            binaryCodeContent.text = '"' + encodeURIComponent(content) + '"';
                        }
                        if (t1g1CheckBox.value == false) {
                            //照片编码放入文本框
                            binaryCodeContent.text = context;
                        }
                        //显示图片
                        viewIconImg.image = imgFile;
                        // if (ICONIMG.size[0] > ICONIMG.size[1]) { var langSize = this.size[1]; };
                        // if (ICONIMG.size[0] < ICONIMG.size[1]) { var langSize = this.size[0]; };
                        // ICONIMG.onDraw = function () {
                        //     this.graphics.drawImage(ICONIMG.image, 0, 0, langSize, langSize);
                        // }
                        // ICONIMG.onDraw = ICONIMG.graphics.drawImage(ICONIMG.image, 0, 0, 35, 60);
                    }
                } catch (e) {
                    alert(e.line + '  ' + e.message);
                }
            }
            if (e.button == 2) {
                viewIconImg.image = {};
                viewIconImg.image = decodeURIComponent(ICON.nullImg);
                binaryCodeContent.text = '';
            }
        }
        );
        revealBinaryToImage.onClick = function () {
            if (binaryCodeContent.text == '' || binaryCodeContent.text == null) {
                viewIconImg.image = {};
                viewIconImg.image = decodeURIComponent(ICON.nullImg);
                return;
            };
            // var f=File("~Desktop\\temp_AEscript_icon_sp_set_comp.png");
            // var content = binaryCodeContent.text.substring(1, binaryCodeContent.text.length - 1);
            // f.open('b')
            // f.encoding = "binary";
            // f.write(content);
            // f.close();
            // alert(content)

            //此时字符串自身有“”,去掉
            viewIconImg.image = {};
            var content = binaryCodeContent.text.substring(1, binaryCodeContent.text.length - 1);
            try {
                viewIconImg.image = decodeURIComponent(content);
            } catch (e) { print(e.line + e.message); }
        };
        saveToImgFile.onClick = function () {
            var imgStr = binaryCodeContent.text;
            if (imgStr == '') return;
            var f = new File('myIcon.png');
            f = f.saveDlg('save this file:', "*.png,*.jpg,*.*");
            if (f == null) return;
            f.encoding = 'BINARY';
            f.open('w');
            f.write(decodeURIComponent(imgStr.substring(1, imgStr.length - 1)));
            f.close();
        };
        importFileFromSrc.onClick = function () {
            undo('import file from src', function () {
                var content = binaryCodeContent.text;
                if (content == '') return;
                content = content.substring(1, content.length - 1);
                var f = new File(Folder.desktop.fsName + '\\temp_AEscript_icon_sp_set_comp.png');
                try {
                    f.open("w");
                    f.encoding = "BINARY";
                    f.write(decodeURIComponent(content));
                    f.close();
                    viewIconImg.image = {};
                    viewIconImg.image = decodeURIComponent(content);
                    var itm = app.project.importFile(new ImportOptions(f));
                    var comp = app.project.activeItem;
                    if (comp && (comp instanceof CompItem)) comp.layers.add(itm);
                    // var w = itm.width;
                    // var h = itm.height;
                    // print(w + ' ' + h);
                } catch (e) { print(e.line + e.message); }
            });
        };
        //获取路径的图片
        getBinaryFromFilePath.onClick = function () {
            try {
                var imgFile = File(t1g1filet1g2path.text);
                viewIconImg.image = imgFile;
                if (imgFile != null) {
                    imgFile.open("e");
                    imgFile.encoding = "binary";
                    //读取内容，获得内容
                    var ree = imgFile.read();
                    //因为读取的是图片，用toSource获得内容
                    var context = ree.toSource();
                    imgFile.close();

                    //使用完全字符？
                    if (t1g1CheckBox.value == true) { context = '"' + encodeURIComponent(ree) + '"'; }
                    binaryCodeContent.text = context; //填充文本
                }
            } catch (e) { alert(e); }
        };
        //滑块
        // var t1scrollOreValue = t1scroll.value;
        // t1scroll.onChanging = function () {

        //     // t1g3BinaryText.size[1] += Math.abs(t1MainGup.location.y);
        //     // ICONIMG.size[0] > ICONIMG.size[1] ? langSize = ICONIMG.size[1] : langSize = ICONIMG.size[0];
        //     // ICONIMG.onDraw = function () {
        //     //     this.graphics.drawImage(ICONIMG.image, 0, 0, langSize, langSize);
        //     // }
        //     // if (t1scrollOreValue < t1scroll.value) {
        //     // $.write('UP')
        //     //     ICONIMG.size[0] += t1scroll.value;
        //     //     ICONIMG.size[1] += t1scroll.value;
        //     //     t1scrollOreValue = t1scroll.value;
        //     // }
        //     // if (t1scrollOreValue > t1scroll.value) {
        //     //     $.write('DOWN')
        //     //     ICONIMG.size[0] -= t1scroll.value;
        //     //     ICONIMG.size[1] -= t1scroll.value;
        //     //     t1scrollOreValue = t1scroll.value;
        //     // }
        // }
        //Tab2
        //读取文件
        bReadFiles.addEventListener('mousedown', function (e) {
            if (e.button == 0) {
                var f = File.openDialog(undefined, undefined, 1);
                if (f == null) return;
                // try {
                var numFile = f.length;
                if (numFile < 1) return;
                if (f.length > t2p1.children.length - 2) {
                    alert('数量超出' + (f.length - t2p1.children.length + 2) + '。 读取了' + f.length + '个文件。');
                    numFile = t2p1.children.length - 2;
                }
                for (var i = 0; i < numFile; i++) {
                    //跳过非图片格式文件
                    var format = f[i].fsName.substring(f[i].fsName.lastIndexOf('.'), f[i].fsName.length);
                    if (format.match(/\.(png|jpg|jpeg)$/gm) == null) {
                        alert('文件: \n' + f[i].fsName + '\n没有检测到格式符合.jpg/.jpeg/.png。请确认文件格式。');
                        continue;
                    }
                    f[i].open('e');
                    f[i].encoding = 'binary';
                    var ree = f[i].read();
                    var context = ree.toSource();
                    f[i].close();
                    //图片
                    t2p1.children[i + 2].children[0].image = f[i];
                    //填入文本框 //完全二进制？
                    if (chkTab2.value == true) t2p1.children[i + 2].children[1].text = '"' + encodeURIComponent(ree) + '"';
                    if (chkTab2.value == false) t2p1.children[i + 2].children[1].text = context;
                }
                // } catch (e) { alert(e); return }
            }
            if (e.button == 2) {
                for (var i = 2; i < t2p1.children.length; i++) {
                    t2p1.children[i].children[0].image = File.decode(ICON.nullImg);
                    t2p1.children[i].children[1].text = '';
                }
            }
        });
        bAddBtn.onClick = function () {
            var numChild = t2p1.children.length - 2;
            createGroup(numChild + 1);
            //修正显示位置
            t2p1.children[t2p1.children.length - 1].children[0].size = [bSizeContr.value, bSizeContr.value];
            w.layout.layout(1);
            //
            //添加控件
            // var newGup = t2p1.add("group", undefined);
            // newGup.orientation = "row";
            // newGup.alignChildren = ["left", "center"];
            // newGup.spacing = 10;
            // newGup.margins = 0;
            // var image3 = newGup.add("image", undefined, File.decode(ICON.nullImg), { name: "image3" });
            // var edittext3 = newGup.add('edittext {properties: {name: "edittext3"}}');
            // edittext3.text = "EditText";
            // edittext3.preferredSize.width = 200;
            // edittext3.alignment = ["left", "fill"];
            // var button6 = newGup.add("button", undefined, undefined, { name: "button6" });
            // button6.text = "Button" + btnNum;
            // btnNum++
            // var button7 = newGup.add("button", undefined, undefined, { name: "button7" });
            // button7.text = "-";

        };
        bReadFiles.helpTip = 'LMB: Read Files\nRMB: Clear items\n\n' + info.about;

        scroll.onChanging = function () {
            // $.write(ThreeDAligbTool.size[1])
            t2p1.location.y = this.value * -10;
        };
        viewIconImg.image = decodeURIComponent(ICON.nullImg);
        var langSize;
        tabMain.onChange = function () {
            if (this.selection == null) return;
            if (this.selection == tab1) {
                app.settings.saveSetting(info.name, 'chosePage', 1);
                scroll.visible = false;
                return;
            }
            if (this.selection == tab2) {
                app.settings.saveSetting(info.name, 'chosePage', 2);
                scroll.visible = true;
                return;
            }
        };
        changePage();

        var setResize = function (_obj) {
            var parent = _obj;
            while (parent != null && !(parent instanceof Panel) && !(parent instanceof Window)) {
                parent = parent.parent;
            }
            parent.onResize = parent.onResizing = function () {
                viewIconImg.size[0] > viewIconImg.size[1] ? langSize = viewIconImg.size[1] : langSize = viewIconImg.size[0];
                viewIconImg.onDraw = function () {
                    //重绘制，计算控件宽高，位置除以2然后减去自身宽高二分之一进行居中
                    this.graphics.drawImage(viewIconImg.image, viewIconImg.size[0] / 2 - langSize / 2, viewIconImg.size[1] / 2 - langSize / 2, langSize, langSize);
                };
                if (tabMain.selection == tab1) {
                    scroll.visible = false;
                } else { scroll.visible = true; }
                this.layout.resize();
            };
            parent.layout.layout(true);
            parent.onResize();

            if (parent instanceof Window) {
                parent.show();
                parent.onResize();
            };
        };

        return {
            w: w,
            setResize: setResize
        };
    }

    return {
        info: info,
        UI: UI
    };
})();
//非模块化启动
if (!$.global.DPL_MODULE_MODE) {
    (function (_obj) {
        var info = DPLBinaryImageModule.info;
        var w = (_obj instanceof Panel) ? _obj : new Window('palette', info.name + info.version, undefined, {
            resizeable: true
        });
        w.alignment = ['fill', 'fill'];
        w.margins = w.spacing = 0;
        var ui = DPLBinaryImageModule.UI(w);
        ui.setResize(w);
        if (w instanceof Window) {
            w.show();
            w.center();
        }
        w.layout.layout(true);
        w.layout.resize();
        return w;
    })(this);
};