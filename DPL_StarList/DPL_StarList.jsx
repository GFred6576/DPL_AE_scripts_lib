/**
 * @author GFred
 * 1.0.0 适配DPL_AutoDF v1.7.1 列表
 * 1.0.1 调整UI
 * 1.2.0 增加文件读取按钮，调整UI显示
 * 1.2.1 fix bug
 * 1.2.2 item添加字体高亮，左对齐
 * 1.2.3 调整图标
 * 1.3.0 Match Module
 * 1.3.1 修改style
 * 1.4.0 Modulize
 * 1.5.0 添加双击面板关闭、ctrl点击按钮导入文件路径
 * 1.5.1 fix bug: 上下移动时失效按钮不能正确识别
 * 1.5.2 加一个判断，面板打开了就不再允许打开另一个
 * 1.5.3 fix bug: 加载文件到面板的读取序号写错了，修复。现在可以一次性读取多个文件到列表面板
 * 1.5.4 
 */
var DPLStarListModule = (function () {
    var info = {
        name: 'DPL_StarList',
        version: '1.5.3',
        date: "2026.03.24",
        copyright: '©️2026-' + (new Date().getFullYear()),
        author: "GFred",
        about: "配合DPL_AutoDF的三个列表使用，快捷添加收藏项目到此列表\n\nusage:\n配置文件分为三部分，exp,ffx,spt，每一项下为文件路径位置\n推荐配置：\n'exp'文件放入文件*.js存放表达式内容,\n'ffx'放入预设文件,\n'spt'放入脚本文件*.jsx和*.jsxbin\n\n\n",
        update: "1.0.0 适配DPL_AutoDF\n1.0.1 调整UI\n1.2.0 增加文件读取按钮，调整UI显示\n1.2.2 item添加字体高亮，左对齐\n1.4.0 Modulize\n1.5.0 添加双击面板关闭、ctrl点击按钮导入文件路径\n1.5.3 fix bug: 加载文件到面板的读取序号写错了，修复。现在可以一次性读取多个文件到列表面板"
    };
    var ICON = {
        exp: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00-%00%00%00-%08%06%00%00%00%3A%1A%C3%A2%C2%9A%00%00%037IDATX%C2%85%C3%AD%C2%96%C3%8F%C2%8B%1CE%14%C3%87%3F5%C3%9D%3B%C2%99%C3%9D%C2%9D%C3%A9%C3%A9%C2%99%C3%AD%C3%9D%C3%99%C2%95%15YP%C2%BCz1!%C2%84%40%C3%80l%C3%B0%20%C2%A8%C2%A0%04%04%C3%81%C3%84C%C3%A29%C3%A0!%C3%B9%07%C2%BC%19o%09%C2%92%2C%C3%81%15%C2%BC%C2%88H%0E%C3%A2A%C2%BC(J%40%10Q%C2%90%C3%B8%C2%83%C2%98%C2%90d%C3%A7W%C3%AF%C2%8F%C3%9E%C3%99%C3%99%C3%BEY%1E*%C3%9Bc%3B%10gf%C2%87%C3%BDe%7FO%5D%C3%B5%C2%AA%5E%7D%C3%AA%C3%B1%C3%9E%C2%AB%C2%86T%C2%A9R%C2%A5%1ADb%18N%C3%8E%C2%9E9%23%C2%87%C3%A1%C3%A7%C3%BA%C3%82BO%3C%C3%BAv%0E%19%16l%C2%BF%1A%08z%C2%B7%60%C2%B7%C2%94%C3%99%C3%8D%C3%83%07U%C3%9F%C3%90%C2%BB%1De%C3%A8%13z%2F%00C%1F%C3%90%7B%05%18z(%C3%84%C2%BD%04%C2%BB%C2%A5%C3%BFG!%C3%AE%05%C2%A5%C3%90%3B%C2%A5%7D%09%C3%9D%C3%9F3.%40%C2%B7F%C2%90%C2%A1j(%C2%A1%1D%24%C3%8D%C2%BA%40%06%C2%B2%7B.%C3%AA%C3%8C%09M%20%7D%C2%89%C3%88%C2%AAxe%C3%862%C2%84%C2%AB%01%C3%B4%C3%91%C2%A3z%C2%86%C3%8E%3D%3BJ%C3%B9%C3%8D%0AZ%C2%A9%C2%B3%C3%85%C2%BB%C3%AB%C3%92%C2%BC%C2%B6%C3%84%C3%98%C3%A1%02%00%C3%86%C2%BCI%C3%AD%C2%83%07xw6%01%C3%90%C3%8A%3A%C2%95%0B%C2%B3%C2%B8%C2%BF%C2%B5%09%C3%AA%3E%00c%C3%8F%17h%C3%9Dr0%5E%2C%C3%85%C2%97%08W%02%C2%9A7%C2%AA%C3%83%C2%83%C3%96%C3%8Bj%C2%89u%C3%BE%09B'%C2%A0%C2%B9P%25%C2%93S%7F%C2%90%C3%A6%C2%AB%16%C3%96%C3%B9%19V%3Em(%00%5D%60%C2%9D%C2%9B%C2%A1v%C3%B9%C2%BE%C3%9As%C2%B6%C2%82f%C3%AA%C2%B8%C2%BF%C2%B7%C3%91%C2%A7%C2%B3%C3%8A%C3%9F%C3%A4%08%C3%86%C2%A9%12%C3%8E%C2%97%C3%8B%C3%AA%C2%80%C2%8C%C2%A00ob%C2%9D%C2%9BA%5C%12S%002%C2%92%C2%B5mA%C2%8F%1D1%14PV%C3%A0%C3%BE%C3%9A~%C2%94%02%C3%8A%C3%A6%C3%9Ds9%C3%B4%C3%8C(Q%3B%02%C3%80%C3%BE%C2%A4N%C3%B9%C2%8D)%C2%A6%2F%3E%19_%C3%82%C3%B9j%C2%85%C3%B5o%C3%960_%C2%B3b%C2%9F%C2%AB%C2%9F7q%C2%BE%5E%C2%89%C3%87B%C2%83%C3%82%7C%C2%89%C2%89%C2%A7%C2%AD%C2%97%01%1A%C2%B7%C3%AB%1F%3E%C2%8E%C3%A9%60%16%C2%A2n%C2%8D%C3%84%C3%9F%C3%A3%C3%87%0C%C3%86%C2%8F%19%C3%89%05%11H_E%C2%BA%C3%B5%C3%AD%1A%C3%B9%C2%A3%06%C3%99%C2%B9%1C%00%C2%A1%13%C2%B2z%C2%B3%C3%99%C3%A5%C3%93%C3%BD%C2%A3%C2%9D%18%7Bw%5D%00%C2%8C%C3%99%C3%A2S%00%C2%8D%C3%9B%C3%B5%C3%ADA%C2%87%C2%AB%C2%9D%0Ea%2F%C3%96h%C3%BF%C2%B8%C2%9E%C2%B0%0B%5D%10%3A!%00%C2%85%C2%93%25%C2%B2s9%C2%A4%C2%AFZ%C2%81V%C3%90(%C2%9D%C2%9E%C3%84%5EL%C2%A6%C2%A8f%C3%A8%C2%80%C3%9B%C2%81%C2%98T%C2%81i%C3%9B%1B%C3%9D7%1C%04z%C3%A3%07%07%00%C3%A3T%C2%89%C3%A2Ked%20%09%C2%97%C3%95E%C3%B2%C3%87%0DF%C2%9F%C3%8Bc%7F%C2%AC%C2%A0%C3%8CW%26%08%C2%97%03j%C3%AF%C2%ABB%C2%9Cx%7B%C2%9A%C3%B1%C2%A3%06A%C3%8DO%C3%B84_%C3%AF%C3%A47%C2%BA%C2%A0%C3%B0%C2%82%C2%89%0C%24%C3%95%C2%9F%C2%97%3E%C3%AB%05%C3%BA%60%C3%A6%C2%B4%7F%C3%9F%03%C3%80%5E%C2%ACR%3A%3D%C3%85%C3%84%5B%C2%95%C2%84%C2%BD%C3%B5%C3%9D%1A%C3%B9%C3%A3E%40%C3%A5v%C3%BD%C3%8AC%C2%82%C2%A6%C2%8Al%C3%A3%C3%AAC*%C3%AF%C3%8ER8i%C3%92%C2%BA%C3%A5t6E%60%C2%BD3%13%0Fe%20%C2%B1%3F%C2%AA%11%05%C3%91%C2%9D%C2%A1%40%C3%87p%C3%9F%3B%C2%B4%7Fj%C2%91%C2%9D%C3%8B!t%C3%95%C2%A7%C3%BD%07%1EA%C3%9DG%2B*7B%1710%C2%A8z%C2%A8%C2%BEw%0Fq(C%C3%BED1%C2%9Eo%5E_B%C2%8C(%1Fb4%C2%83%C3%B7%C2%97K%C2%B4%1E%C3%B6%C2%8A%C3%92%C3%9F3%1EmDl%C3%BE%C2%B2%C3%915%C3%BF%C3%8Fb%C3%AD%C2%B29!8I%20)%C3%81%C3%BBs%C2%B3%C2%9F%C2%A3%13%3A%C2%989%3D%2Cm%C2%B5A%00%C2%B9%19m%C3%8B%C3%97%C2%8EA%C2%AF%7Da%03%C2%AAp%C2%83%C2%86%C3%BF%1F%C2%AB%1F%C2%AF%C2%9D%C2%8B%C2%B4%C2%A7%22%C3%BD%C3%AF%C2%9E%3D%C2%88%C3%B6eN%C2%A7%C3%90%3B%C2%A5%7D%09%C2%9D*U%C2%AAT%C2%83%C3%A9o%C2%9C%17%25i%C3%A9%16%C2%AEm%00%00%00%00IEND%C2%AEB%60%C2%82",
        ffx: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00-%00%00%00-%08%06%00%00%00%3A%1A%C3%A2%C2%9A%00%00%02%C2%BBIDATX%C2%85%C3%AD%C2%96%C3%8FO%13A%14%C2%80%C2%BF%C3%AE%C2%96vYJ%C2%8B%C2%85b%00%C2%A3%C3%86%C2%80%06%C2%88%1A%05%0D%C3%86%C2%831F%3D%C2%A8G%0F%1E%3C%60%C2%8C%5E%C3%B5O%C3%B0%C3%A0%5D%13%0F%26%24b%24%26z6%C2%9Ax%20%5E%09%01%C2%A5HbR%40LT%C2%94%C2%96n%C2%81%C3%92n%5B%C3%B6%C2%87%C2%87%C3%9A*!%24%C3%9DRK%2B%C3%BB%C2%9Df%C3%A7M%C3%9E%7C%C3%BB2ov%C3%81%C3%86%C3%86%C3%86%C2%A6%18%1C%C2%A5Hr%C2%A3%C2%BF%C3%9F%2CE%C2%9E'%C2%83%C2%83%05%C3%B98%C2%B7%C2%B2I%C2%A9d%C2%ADR%C2%94%C3%B4v%C3%89%C3%A6%10%C2%B6s%C3%B3b%C2%B1%2C%C2%BD%C3%9DU%06%C2%8B%C3%92%C2%95%20%0C%16%C2%A4%2BE%18%0Ah%C3%84J%C2%92%C3%8D%C2%B13%1A%C2%B1%12%C2%A8J%C3%A9%C2%A2%3E.u%7BO%03%C3%A0%3Dp%1E%C2%87%C3%A8%22%3E7%0C%40%C3%BC%C3%B30%C2%A2%C2%BB%1E%C3%BF%C3%91%C3%AB%00%C2%B8%7C%C3%BBX%C2%8B%C3%BF%40%09%3ECS%C2%95%12)%C3%AF%C2%94J%C2%8B%C2%92%0F%C3%BF%C3%A1k%00%C3%A8j%0C%3D%15%C3%83w%C3%B0%0A%00%C3%B1%C2%B9wx%3B.!%05%C2%BA%01P%17%26%C2%91%02%5D%C3%88m'X%C2%99y%C2%BB%7D%C3%92N9%40%C3%AE%C3%A70%C3%B1%7D%C2%94%C2%95%C3%90%1B%04%C2%97%C2%9C%0D%C2%9A%065%C2%9E%C3%9D%C3%B9%C2%B5%C2%8B%C3%A3%03%C2%88.%0Fzf%C2%B5%24%C2%B2y%C2%87B%17%0A%C2%AE%3A%C2%9AO%C3%9DE%C2%A8%C3%B1%C3%A4%C3%A7%3C%C3%BB%C3%8F%20%C2%B7%C2%9DDWc%00%C2%88%C2%B5%C2%BB%10%C3%9D%C3%9E%7C%C2%BC%C3%A5%C3%AC%3D04%C2%8C%C3%B4%0A%C2%B9%C3%8B%3E2%C3%BA%08S_%C3%83%C3%ADo%07%C2%A0%C2%A9%C3%B76%C3%8A%C3%A4s%C3%94%C2%9F%13%C2%A5%C2%976%C3%B5%0C%C3%A9%C3%A84N9%C2%80%18%C3%A8%04%40O*dV%C2%BEbd%C3%94%C3%AC%C2%8B%25%23H%C2%81nDw%3D%00%C3%A9h%08%0C%1D%C2%87%20%22%C3%AF%C3%A9%03%C3%80%7F%C3%A4%3A%C3%8B%C2%A1W4%C3%B5%C3%9E%02%C3%80!%C2%BA%C3%90SK%05%0B%C3%83%C3%BF%C3%9E%C2%88%C2%A6%C2%BEFl%C3%AA%25%C3%AE%C3%86%0E%C2%A4%C3%9F%C2%95V%17%C2%82%2C%C2%87%5E%C2%AF%5B%C3%97%C3%9Cw'_i%258%04%C2%80%C3%83!%22H%0D%00%C3%88%C2%AD%3DH%C3%8D%C3%9D%08N%09%C2%80%C3%A8%C2%87A2K_%C3%BE%C2%8D%C3%B4V0M%1De%C3%A2)%00-%C3%A7%C3%AE%238%25%C2%92%C3%B3%C3%A3%00%24%C3%A7%C3%87%2C%C3%A7%2B%C2%8B48h%C3%A8%C2%BA%C2%9A%1D9D0%0D%C3%A4%C2%96c%00%24%C2%BEu%C2%92%C2%8A%7C%C2%B2%C2%94%C2%AD*%C3%8FtY%C2%A4%7D%C2%87.%23%C2%B7%C3%B6%20%C2%B7%C3%B6%C2%90%C2%8EN%13%1Ey%C2%80i%C3%AA%C2%98%C2%A6N%C3%A3%C3%B1%C2%9B%C3%94%C3%94%C2%B7Z%C3%8Ag%5D%C3%9A4%C3%BE%1Aj%1B%C3%83%C2%A6%C2%91%17%02%10%C2%9C%C2%B5x%C3%9B%2F%C2%A2%25%22h%C2%89%08%C2%8B%C3%AF%07H%2B%C2%B3(%C3%81!%C2%94%C3%A0%10%C2%82S%C3%82%C3%9B~%C3%81%C2%92%C2%82%C3%A53%C2%9D%C2%8E%C3%8D%C2%B18%C3%B68%3B%C2%8E%C3%8El%C2%88%C3%87%C2%A6%5E%20%C2%BA%C3%BE%7C%C2%80%0CM%25%3C%C3%B2%10m5%C2%9C%7D%C3%8E%24%00%C3%B2%C2%8D%C2%A8%C2%A7%C2%96%C3%90%C2%92QK%0EUy%C2%A6%C2%AD%C3%9F%1E%C2%A6%C2%81%C2%BA%C3%B0q%C3%93%C2%B0%C2%96%08%C2%A3%25%C3%82%C3%AB%C3%A6%C3%92%C3%91%C3%A9M%C3%97%C2%A7%C2%95Y%C3%8B%0AUYi%5B%C2%BA%5C%C3%98%C3%92%C3%A5%C2%A2*%C2%A5mlll%C2%8A%C3%A3%17%C3%A0q%C3%B1uI%C2%93%C2%8C%02%00%00%00%00IEND%C2%AEB%60%C2%82",
        spt: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00-%00%00%00-%08%06%00%00%00%3A%1A%C3%A2%C2%9A%00%00%02%C2%8EIDATX%C2%85%C3%AD%C2%98%C3%8BO%13Q%14%C2%87%C2%BF%01Z%5B%C2%A0%04m(%C2%A2h%C2%88%C2%8F%05%C3%86G%C3%81G4%C3%91%C2%95%09%2B%C3%BF%02w%18%13%C2%A3F7.41%C3%B1Op%C2%A5Fc%C2%A4%C3%86%C2%8D%1A%C2%A3%7Bw%C3%86%40%5C%C2%A8%11IE%C2%A0%C3%95H%C3%80%C2%88%0F%2CT%11%C3%A8%C2%83%C3%AB%C3%A2L%C2%9D%16%C2%88%C3%8CL'%C2%B4%C3%8A%7C%C2%9B%3B3%C3%B7%C3%9C%7B~9%C3%B7%C3%9C%7Bn%0B....v%C3%90%C2%9C%C2%98%C3%A4Xg%C2%A7rb%C2%9E%C2%AEH%C3%84%C2%94%C2%9E%C2%AAb%C2%9C8%25%C3%96*%C2%B6D%C2%97Jl%C2%8E%C2%8AR%3A%C2%B7%C2%8Be%C3%91%C2%A5%C2%8E2X%14%5D%0E%C2%82%C3%81%C2%82%C3%A8r%11%0C%266b9%C2%89%C3%8D%C2%B126b9PTq)%C2%86%1A%C2%8F%C3%B1%3C%C2%95%C2%B66%C2%B6d%C2%A2%2F%C3%AC%C2%93%C2%8A%C2%AD%C2%80K%3D%C3%96%C2%B6%C3%8D%C3%8AH%C2%8FZ%2F%C3%94%C3%AAK%C2%9B%C2%98%C2%81%C3%99l%C3%9Ed%15%C2%A0%14d%C3%B5%C3%80U%7B%C2%A0J%C2%83dj%C3%A1%3C%C2%AB*%C3%AD%C3%88%C3%95%C3%BD%C2%985%C3%B4V%C3%82%C2%89%C2%9D%1A%C3%A1%C2%90%C3%B1M%01%2F%C3%86%C3%A0f%C2%9F%C2%A8%3C%C3%9B%C2%AE%C2%91%C3%8ABfN%C3%BA%C3%B7%C2%AE%C2%95v8%09%C3%97_%C2%8B%C3%8D%C3%91V%C2%8D-%C3%B5%C3%A0%C3%8B%C3%B3%7C%C3%A5%C2%B0F%2C%01%5D%11%C2%87E%1Fh%C2%82p%08%C2%9E%C2%8E%C3%82%C2%9Bq%11%10n%C3%90ho4%04%C3%94yaC%00%26g%C3%A5%C3%BD%C3%BE%C2%A0b%5D%C2%8D%C3%86%C2%A1f8%C3%93%269%C3%BCx%18%3EO%C3%81%C3%81%C3%B5%C3%86%C3%9C%3D%1Fa%C3%A4%C2%87%C3%B9%C2%BC6-%3A%C2%ADG%C2%AF9%00%C3%91o%C3%B2%7C%C2%A7_q%2B*)%C2%91%C3%8F%0D%3D%C3%B2%C2%83%C3%9F%01%14A%C2%BF%C3%86%C2%B6%C2%A0%C3%B4%C2%8D%24%15%C3%9D%C2%A3%C3%90%162%C2%AE%C3%8Ew%07%C3%9C%C2%8Dh%C3%B0%7C%0CZ%C2%83%C2%B0%C2%BF%09N%C2%85%25J3%19I%C2%97%07C%C2%85%C2%91%1AJ%14%C2%8E%C3%BD0%C3%89%C2%9FH%07%C3%BD%C2%92%C3%A3%C3%8B%22zN%C3%81%C3%AD%C2%A8%C3%A2%C3%9E%C2%80%C2%B1%C3%81%C2%8El%C3%92%C3%A8h%C2%81%C3%B8D%C2%A1m%C2%9DW%C3%9A%5Cn%C2%87%C2%AA%C2%8D%3E%C2%AB%C2%85d1L%C2%8B%3E%C2%BECcc%1D%3C%C2%8C)%C3%9E%C3%AB%22%C3%9FM%C3%82%1E%C3%9F%C3%82%C3%A3%C3%AB%C3%A4.Y%C2%89G1Es%00v7%C3%8A%C3%B1%08%10%C2%9F%C2%B7%0Av%C3%B8%C2%BFs%C3%BA%C3%99'%C3%85%C3%B6%06%C2%8D%C3%93%C3%A1%C3%82%1F%C3%8C%C3%83Ix%C3%B5E%C2%9E%3BZ%C2%A4%5D%C3%A3%C2%93%C3%B6%C2%BC%5E%C2%AA%C2%93)%C2%B8%C3%9A%2By%C2%9F%2B%3C%C2%B9%C3%93%C3%88%C3%8E%C2%BD%C3%97%C2%B4%C3%A8%C2%BE%C2%AFp%C3%AE%C2%89bs%3D%C3%B8%C3%B5Q%C2%89%19%C3%99d%C3%B3%1D_%C3%AC%C2%96%2F%5BW%C3%8B%7B%7C%02R%C3%99B%C2%9B%C3%8B%2F%C3%85%C3%86%C3%8E%7F%18%C2%96%C3%8Ax*%0Bo%C3%87%C2%97%C2%B6%C3%8BE%C2%B1%C3%BF%2F%C2%B6%C3%A3%C3%93V%3C%17%C3%B2O%C3%A6%C2%B4%C2%A3%C2%A2%7F%C2%A5a%3A%C3%A3%C3%A4%C2%8C%C2%8B%C3%A3%C3%A8%7D%C3%BAZ%C2%AF%C3%82S%C3%84%C3%AD%C3%8D%2C%C2%8E%C2%8A%C3%BE%C2%99%06%1C(%1EK%C3%A1%C3%A6%C3%B4r%C3%A1%C2%8Avqqq)o~%03%20%C2%93%C2%BE%C3%A3%C3%98%1D%C3%B9%3C%00%00%00%00IEND%C2%AEB%60%C2%82",
        // exp: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%02%C3%9DIDATHK%C3%AD%C2%96%3Fh%13Q%1C%C3%87%C2%BFw%C2%97%C3%8B%C3%9F%C3%9E5%C2%A9Ij4%C2%A2%0E%C3%A2%C3%A2%C3%A0%C3%A2%3F%5C%14%C3%BF%C3%A0%20%C3%A8%22%C2%BA8%C3%94E%C3%81Qq%C3%A8%22%C2%A2%C2%82%C2%8B%C2%83%C3%A2%C2%AAE%14t%13%11Q%07%C2%9D%14App%10%04%C2%B5%C2%B5%C2%AD%C2%ADMj%C2%92%26i%C3%BE%5C.%C2%B9%C3%B3%C2%BD_.%C3%BF%C2%BC%C2%A6M%24%C2%99%C3%AA%07%C2%8E%C3%9F%C3%BD%7B%C3%AF%C3%B3~%C3%AF%C3%BD%C3%AEqXu%08V%C2%ACsfd%C3%84%3A%5B%12%C3%93%C2%8A%5Dqol%C3%8C%C3%A6%11%C2%AD%C2%B8%12%5C%C3%B8O%C3%92vt%22%C3%AE%C2%A9%C2%B0%C3%86J%C3%A2%C2%BEH9%C3%8B%C2%89%C3%BB%26%C3%A5%C2%B4%13%C3%B7U%C3%8AYJ%C3%9Cw)%C2%A7%C2%93%C3%A2%C3%AA%0B%C3%BF%C3%85%0D%C3%98%5E%C3%A3%08%C3%89%C2%90%C2%86%1C%C3%96%C2%8D*%C2%82%C2%A3u%13%C2%A2k%C3%9E%0B%3B%04%C2%B9%C3%BALp%C2%8A%C2%90%C3%BC%C2%AC%C2%9Dm%C2%BFj%C3%90%C3%9A%C2%AB%C2%85%7B%C2%AB%07C%C2%A7%C2%87!%05%C2%AA%C2%8FKS%1A%12w%C3%A7%C3%A0%C3%9D%C2%A9%40%3D%C3%A4G%C3%BC%C3%96%2CJ%3F%C2%8A4%C2%A8%C3%A1%0BQh_%0B(%C3%8F%C3%AB%C3%B0%C3%AEP%C2%90%C3%BB%C2%90%C2%85z%24%00A%12PY(%23q%3FF%7D%C3%BC%C2%8D-c%07%C3%AB%2Cxn%1DL%C3%83Db%2C%C2%86%C3%94%C2%A38%C3%A4%C2%B0%C3%8C%C3%AEEP%C2%9A(R%C2%86%C3%81%C2%B3%118%C2%86%C2%9D%08%C2%B1%C3%883%C3%93%C2%BE%15%20xD%C2%9A!%C3%B5p%00%C3%99W)d%5E%C2%A6%20*%12%C2%BD%7B9%7F%3Dlu_%C3%87%26%C3%B6%C3%AER%C3%99T%09%C3%90%C2%BE%C2%B0%C3%8E%C2%98%C3%84%2C%C2%B3%C2%8C%C2%A75%C3%88%11'%C2%8C%C2%82%C2%81%C3%A4%C3%A3yH%C2%AA%C2%84%C2%B5%C2%A3%1B%20G%5D%C3%88%C2%BE%5E%C3%80%C3%A2%C3%9B%C2%8C%C3%95%1AH%3FM%20%C3%BD%3C%C2%89%C3%B4%C2%B3%04%16%C3%9F%2C%40t%C2%93%C3%A2%18%3Dl%C3%82%C2%9EqP%C2%A6%C3%A8%C3%9B%C2%AB%C2%B2%C3%A9%0E%C3%93%C3%A1%C3%9A%C3%A2%01%0C%C3%B6%C2%81%C3%AB%06r%C3%AF2%C3%B5%C3%8C%2B%C3%99%0A%09%C2%9A%C3%91%C2%BE%17%C2%AC%C2%B3%C3%AA%12Yl%C2%B4b%1D%C2%9B%C2%B8%C2%92f)2%C2%92%0F%C3%A3%C2%98%C2%B98%5E%3FfG'%C2%A0%C3%8F%C2%94%C2%A0%1C%0C%C3%80%C2%B9%C3%99%C3%8D%06aBbS%198%19%C2%A2%C3%B7kHj%C2%A3l%C3%B8%C3%94%5B%C2%B4%C2%8E%C2%8Ea%13%C3%A7%3Ffi%C3%AF%1A%3C%3A%04%C3%B76%1F%C3%A4%C3%B5.%04N%C2%85%10%C2%B9%C2%B6%C2%89%C2%8A%C3%8B%7F%7C%0D*%C2%A92%C3%A6%C2%AEN%C2%A14%C2%A9%C3%81%C2%B7G%C2%A5u%C2%AD%C3%A1%3F%11%C2%84%C2%87%C2%B5%C3%B3l%1F%C2%80r%C3%80%C3%8F%C2%96%C2%8A6%C3%82'%C3%B4%C2%B0%09%5B%C3%81%C2%B3%1F%01%C3%93%C2%B7%5Ba%C2%99%C2%84i%C2%ADk%C3%A4%C3%9Eg%C2%A8%C2%A0%C2%9CQ'b7g%C2%A0%C3%BF%C3%94%20%0D%C2%B2%C2%AA%C2%BE%14%C2%A5%C3%8F%C2%88W%C2%B3%C2%B2%C3%9F%C2%8Fr%5C%C2%87%C2%83%15%23%C2%87K%C2%93%0F%C3%A2%C2%B8s%C3%BE%C2%B6%C3%8D%C2%B3%C2%A4%C2%98G%C3%91%2B%C3%92%C2%94%C3%B2%C2%B5%C3%94gK%C3%B4%C2%B9p%11%C2%BF.'tz%C2%97%C3%83%C2%A7%5Bp%C2%89%18%C3%987H%C3%A2%C3%98%C2%8Di%1A%08%C2%AFr%3E%23%C3%86b%C2%A5%C2%BB%3F%10%23o%C2%A0%C3%B89%C2%8F%C3%82%C2%A7%1CI9%7C%C3%BD%C2%9B%C2%A5%1C%5E%60%C3%A5%C3%9F%C2%8D%7B%26%1B%C2%B66%5E%C2%A4%C2%B6%5C%C3%9A%C2%8E%C2%B6%C3%A2n%C3%A1%C3%85F%C2%B1%C3%88%C3%8A%C2%BF%03z%26%C3%8E%C2%BCH%C3%A2%C3%97%C2%95%C3%89%C2%96%C3%AC%C2%97%C2%A3w%19%C2%97L*%C2%ACN%C3%A9%C2%99%C2%B8%5BV%C2%9Fx%C2%B5%01%C3%BC%01%C3%ADu%034%1E%C3%B0%C3%A0%C2%8B%00%00%00%00IEND%C2%AEB%60%C2%82",
        // ffx: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%02pIDATHK%C3%AD%C2%96%C3%8Bk%13Q%14%C2%87%7F%C3%B3%C3%88%C3%BBeS%C2%93%C3%92%14%045UT%14%7C%C2%A2%C3%A8B(%C3%AAB%5D%C2%BAp%C3%A1%C2%A2%22%0A%C2%AEt%C3%A7%C2%A6%C3%A0Jp%23.%C3%9C%15%C2%AC%20%16%04%C3%BF%01%11t'R%C2%AC%C2%B4VP%C3%94%C2%8A%C2%88%C3%9A6M%261%C3%98L%C2%93%C3%8Cd%C2%BC%C3%A78)J'%2FI%C2%AAP%3FH%C3%8E%7DM%C2%BE%C2%B9%C3%B7%C2%9E%7B%09V%1D%C2%92%1D%C2%978%3B8h%C2%97%1C%C2%B1%C3%AC%C3%98%12%C2%B7GF%C2%96yd%3B6%C2%82%C2%84%7F%24%C2%ADE3%C3%A2%C2%B6%0A%C2%AB4%12wDJ%C3%94%13wLJ%C3%94%12wTJ8%C2%89%3B.%25%C2%9AI%C2%AE%C2%8E%C3%B0%C3%AF%C2%8A%03%C3%AB%0E%C2%A2%C3%B7%C3%B0U%24%06%C2%AE!%C2%B4a%C2%80%C3%9B%14O%08%C2%B1%7D%17%C3%91w%C3%A4%3A%C3%A2%C3%BB%2FA%C3%B5E%C2%B9%C2%BD%15%C3%AA%C2%8A%15o%04%C3%91%C3%AD%C2%A7!%C3%89%0A%C3%8C%C3%85%2C%22%C2%9BN%C2%8A%C2%BBNF%C2%B8%C3%BF8%C2%BC%C2%B1m(f%3F%C3%80%C3%9D%C2%B5%1E%C3%BE%C2%BE%C2%BD%C3%B6%13%C3%8DSW%C2%AC%C3%BAc%C3%A2%5B%C3%82%C3%82%C2%971%C2%A4%C2%9E%C3%9E%C3%80%C3%8C%C2%93!%C2%91z%15%C2%B8%C2%82%3D%C3%9C%C2%9F%1E%1F%C3%86%C3%8C%C3%A3!%C3%A4%C2%A7%1Fq%C2%BD%15%C2%9C%C3%AEjKv%07%10%3Fp%19%C2%B2%2B%C3%88%C3%8BZ1tT%C3%8A%3AL%3D%0B%C3%85%C3%97%25%C3%9A%C3%82b%C3%A2*%0C%5D%C2%83%C3%A8D%C2%A5%C2%98%C3%A7%C2%A30%3Fv%0B%C2%96Y%C2%86'%C2%9A%C3%84%C3%9A%3D%17%C2%A0%C2%BD%C2%BC%07%7Dv%C2%A2%C3%B9%C2%BB%C3%9A2K(f%C3%9E%C2%A1%C2%9C%C3%BF%C3%8Cu%C2%B3%C2%A0%C2%89%C3%BA%5B%C2%94r%C2%9F8%C3%92K%10T%C2%A6qF!%C3%8D%C2%B2%C3%A8%C2%8E3P%031!%3D%0FIq%C2%8B%C3%AD%C3%89%C3%B18'j%C2%88%C3%8B%C3%88%C2%BE%C2%BA%2F%C2%96%C3%B0!%C3%97%C3%B5%C2%B9Ih%C2%93w%C2%91%7B%C3%BD%C2%80%C2%A3%C3%B1%7D%C2%96%C3%9B%C2%A9%C2%ACM%C2%8D%C2%8A%C2%99%C2%8Db1%C3%BD%06%C3%BE%C3%84n%C3%B4%1C%C2%BA%22V*%C3%80%7D%C2%A5%C3%9CG%1E%C3%A7D%C3%83%C2%ACn%06%C3%8B2%C2%A1M%C3%9C%C3%A1(%C2%AB%5E%14%C2%BE%C2%8E%C2%8B%C3%8Fs%C2%BB%C3%97%C2%99%C2%B6%C2%88)U%C3%96l%3D%05IR8%C3%B9%C3%BC%C2%BD%3BE%C3%96o%C2%B1%C3%BB%C2%9Ci%C2%8B8%C2%B2%C3%B9%04%2F3%C3%ADw%C3%AA%C3%99M%C2%9Ey%C3%B7%C2%AEsp%C2%85%12%C3%B6%C2%88%C3%A5%C3%94%17%C2%8B%C2%B7%C3%BF%19%0C%C2%8EU%2C%C3%91N%3FN%C3%88%C2%AA%0F%C3%A1%C3%A41%18%0B%C3%B3H%C2%BF%18FQ%C2%9B%C3%A6%C3%BD%C2%A5%25%0F'%C2%8F%C3%B2%18'%1C%C2%8F%C2%93%5D%C3%A4%C3%8B%C3%82%17%17%17E%C3%A6%3D%1F%C2%A9*j%20%0E%C3%85%1D%C3%A4%0B%C2%84%C3%B0t%C3%B7%C2%8B%C2%84K%C3%81%2C~%C3%A3%3A%C3%A1%C2%89n%14%C3%99%C2%9E%C3%A1%C3%8Cn%C3%BD%C2%AF%C2%8F%C2%98%C2%99%3E7%C3%B5%C2%9B%C2%940%16RKR%C2%82%C2%96%C3%B8W)A3o%C3%B98%C2%AD%04%C3%BF%C3%85%2B%C3%86_%13%C2%AF6%C2%80%1FW%24%C3%B5%C3%A1%C2%B4%C3%A1%1CX%00%00%00%00IEND%C2%AEB%60%C2%82",
        // spt: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%02kIDATHK%C3%A5%C2%96%5BKUA%18%C2%86%C3%9FQ%C3%B3%C3%9C%26%C2%8D%C3%8C%C2%A2%C2%83%60%19%5D%C3%A4%01%2B(o%C2%A2%C2%8B~B%17ue%04%1DD%C3%AC%C2%AEn%C2%A4%C3%A8%0Fx%C3%95%C2%89%40%C3%85.%C2%A2%C2%BF%60DPY%C2%81%C2%96%15e'%2B%C2%A3%C2%A3%C2%A1XZyv%7C%C2%BF%3D%C2%B3ba%C2%B3%C3%B6%C3%9EK%5DW%C3%BB%C2%81a%C3%96%C2%9E53%C3%8F%C3%BE%C2%BE%C3%B9f%C2%B3%C2%91v(%C3%9B%C3%BF%C3%A3H%7D%C2%BD%7Dr%C2%A2m%1F%C2%8A%C3%96%C2%B6%C2%B6%C3%BF%3C%19%C2%B6O%C2%86%08%17%25%0D%22%15%C3%B1%C2%B2%0A%3D%C2%92%C2%89%23%C2%91%0A%C2%89%C3%84%C2%91I%C2%85%20q%C2%A4R%C3%81%25%C2%8E%5C*%C2%A4R%5C%C2%91%10%C2%89%C2%B8%60%C2%85i%C2%89%C2%88D%7Cf%C2%B7%C3%82i%C2%B6D%24%14%17f%03%C2%A5%05%40N%C2%A6%1D%20Y%5C%C2%91i%C3%B7%C3%8CgT1%C3%8EY%C2%88%C3%8C%C3%8F%C3%B5%C2%ADq%C3%A1%C3%BA%C3%89%C3%94%C3%99%5Ct%C2%ACR%C2%A1%C2%BA%C3%84%C2%8CI%C2%B5%C3%B5%7C%07%C2%AE%3E%C3%93h%C2%AAU%C2%98%C2%9A%05f%C3%A6%C2%80%5D%C2%A5%C3%A6%C3%BD%C3%87Q%C3%A0%C3%B2S%C2%8DC%C3%9B%15%C2%B6%C2%AC%C2%A24%C3%8B%C2%8CO%C3%8C%00oG%C2%80%C2%AA%C3%86%C3%96%C3%94~2%C3%B7%C2%ACC%5Cz%C3%A73p%C2%89%1B%3E%C3%BC%0AT%C2%AE1%1BJ%C2%845%7CWQ%04%C3%9Cx%C2%ADq%C2%97s6%C3%87%C2%80%C3%86%1A%C2%85%C2%9EA%C2%A0%C3%AB%0B0I%C2%A14y~4%C3%A8%C2%BE%24N%C3%B14%C2%A3%116%C2%ACd%C2%B4%5C%C3%97%C3%91%C2%A7%C3%91pK%C3%A3%C3%8F%C2%B4%19%17%C2%AE0%C3%BA%C3%8E%01%C2%A0%C3%BD%C2%85F%C3%9F0%C2%B0%C2%BE%10%C3%B84%C2%AAq%C3%BD%C2%95%C2%99'M%C2%9E%C3%AFQ%C3%AE%C3%82)%C3%AEfZ%C3%AF3%C3%8A2Fr%C2%B2Z%C2%A1e%C2%9F%C3%82%C3%81%0A%C2%85%0C_%C3%82%C3%9E0%C2%85%1E%03%C2%BFL%C2%BF%3A%C3%8F%C3%B4%C2%A9%C3%A0%14%C3%8F1%C3%8A%C3%B6%C3%A7%1A%C2%A7nk%5Cc%C2%B4%C3%A3L%C3%9B%C2%812%C2%93b%0F%7FQ%C2%95%C3%A4%C2%9B%C3%9E%C2%9F%C2%91d8%C3%85Gw(%C2%9C%C2%AFS%C3%98V%0C%C2%BC%C3%BF%09%C2%BC%C2%B3%11%C3%B9%C2%AB%C3%BBD%C2%95%C2%8A%C2%9F%C3%B3%C3%BEM%40%C3%ADZ%60d%02%C3%A8%C3%B7e!%19N%C3%B1%C2%83o%1A%C2%B1%1C%C2%A0%C2%81i%3E%C2%BBWa'7%C2%96%C3%8A%C3%AD%C3%BDa'%C2%90%C3%A2%5C%C3%84%C3%AF%C3%AAaV%C3%B2%18%23%C2%BD%C3%B0Dc%C3%96%C3%96%C2%91%C3%94%C3%88%C2%94%C2%AD%C2%93%20%C2%9C%C3%97Iz%C2%B9R%C3%A5%C2%BC%1Ay%C2%ACd%C2%89F%C3%8EQ%5E%C2%9C%C3%A3%17%C3%99%C3%88%C2%A2%3B~Sc%2B%23%16%C3%BA%C2%99%15%C2%B9b%1Er%C3%96%C2%B2%C3%B1%C3%90%C2%B8%C3%B9%1C%C3%AA%1F%C2%88l%C3%B4%C2%92%C3%95%C3%BA%C2%98W%C3%A4%C2%83%C2%95%C3%BA%C2%91%C2%A8%C2%A4%C2%9A%C2%A5%C3%B9%C2%A5%C3%820%C2%85%C2%9E4%C2%88%40q%10%7F%C2%99V)%C2%B6%C2%A5%12Z%7C%C2%91g%C3%99%C3%9C%C2%B50%C3%BE%C3%B0%C2%84%16%C3%BFf%C3%84r%C3%A6K%25%C2%B4x%C2%B9H%3Fq%C2%BA%01%C3%8C%03V%15%C3%83%1D%C3%963%C3%9E%23%00%00%00%00IEND%C2%AEB%60%C2%82"
        up: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%08%06%00%00%00%1E%C3%99%C2%B3Y%00%00%02%C2%9AIDATX%C2%85%C3%8D%C3%98%C2%B1n%C3%A20%00%06%60%C3%9B%C3%A7%C2%B8%C3%A4%C3%8C%02M%C2%A4%C2%A8%04%3A%C2%82Z%09%C2%A4v%608e%C2%A9%C2%94%C2%A5%11K%3B%20%06%C3%92%0A%C3%9A!%25B%C2%B4%11C%25%5E%C3%AE%16%C3%9E%C3%A3%0E%C3%90!%C2%95%C3%AD%C3%88!E%C2%91sC%C3%8F%14%C3%B5%C2%80%02%09%C3%90%7F%22%C2%B6%C2%B1%3Fa%13%C3%99%06%C3%A0%13%05%C3%8E%2BD%08!B%08%C2%81%10%C2%A2%C2%A8%07%0C%C2%82%C2%80y%C2%9E%C3%A71%C3%86%C3%98R%0C%C3%86%18K%C2%92%24SJ%C3%A3%10%C3%82%C2%B9%C3%90%C2%88%40%C2%81%C3%AB%C2%BA%C3%A3%C3%91h%C3%B4%C3%A2%C3%BB%C2%BE%C3%BF%1F%06c%C2%8CUU%C3%8D%60%C2%8C%C3%B1%C2%B6%10%C3%AF%C3%A3%C3%BB%C2%BE%C3%9F%C3%AF%C3%B7%7Fr%C3%90t%1A%24I%C2%92w%09%01%C3%A0m%26%C3%B83%02%C3%A0u%C2%8DPJ%C3%A3%C2%BB%C2%84%C3%B0PJ%C3%A3%08!4%C3%85%C3%BC%5B%C2%AC%1B%C2%AF%C2%91j%C2%B5z%C2%B7%C3%A9w!%C2%84%C2%90%10B%C2%A6%C2%980%C3%BF%1AM%C3%93.l%C3%9Bnk%C2%9Av%11%02%C3%B4%C3%B6%C3%8Bl%1AA%10%C2%84V%C2%AB%C3%B5%0C%00%00%C2%ADV%C3%ABY%10%04!L%7F%C2%A10%C2%95J%C3%A5VU%C3%95%0C%00%00%C2%A8%C2%AA%C2%9A%C2%A9T*%C2%B7%7B%C3%81%24%C2%93I%C2%A9V%C2%ABY%C2%B3e%C2%B5Z%C3%8DJ%26%C2%93%C3%92%C3%8E1%C2%8DF%C3%A3I%14E%3A%5B%26%C2%8A%22m4%1AO%3B%C3%85%C3%A4r%C2%B9S%C3%830%C2%AE%C3%A6%C3%95%19%C2%86q%C2%95%C3%8B%C3%A5Nw%C2%82%C2%81%10B%C3%87q%3A%C2%8B%5E%05%1F%C3%95G%C2%8A%C3%91u%C3%9D%C3%88%C3%A7%C3%B3g%C3%8B%C3%9A%C3%A4%C3%B3%C3%B93%5D%C3%97%C2%8D%C2%ADbb%C2%B1%C2%98%C3%98l6%C3%9B%C2%AB%C2%B4m6%C2%9B%C3%ADX%2C%26n%0DS%C2%ADV%C3%AFdYVVi%2B%C3%8B%C2%B2%C2%B2%C3%AE%C2%9Bye%C2%8C%C2%A2(G%C2%A6i%C3%9E%C2%AF%C3%93%C2%B9i%C2%9A%C3%B7%C2%8A%C2%A2%1CE%C2%8E%C2%B1m%C2%BBM%089X%07C%089%C2%B0m%7B%C2%A5i%5D%19S(%14%C3%8Eu%5D%C2%BF%5C%07%C3%82%C2%A3%C3%AB%C3%BAe%C2%A1P8%C2%8F%04%C2%83%10B%C2%8E%C3%A3t6%C2%81%C3%B08%C2%8E%C3%93%C3%A1%C3%9B%C2%84P%C2%98R%C2%A9t%C2%9D%C3%8DfO%C3%82%60%C2%B2%C3%99%C3%ACI%C2%A9T%C2%BA%0E%C2%85%C2%A1%C2%94%C3%86-%C3%8Bz%0C%03%C3%A1%C2%B1%2C%C3%AB%C3%B1%C2%A3%0D%C3%9CRL%C2%BD%5E%7FH%24%12%C2%87Q%60%12%C2%89%C3%84a%C2%BD%5E%7F%C3%98%08%C2%93N%C2%A7%C2%8F%C3%8B%C3%A5%C3%B2M%14%10%C2%9Er%C2%B9%7C%C2%93N%C2%A7%C2%8F%17%C3%95%2F%C3%9C%C2%80%17%C2%8B%C3%85o%C3%9Dn%C3%B7%7B%C2%94%18%C3%9Eo%C2%AF%C3%97%C3%BB1%C2%AF%0E%02%00%C2%80(%C2%8A_S%C2%A9%C2%94%1A%C3%B5%C3%80%C2%ABf0%18%C3%B4'%C2%93%C3%89%C2%9F%C3%88O%C2%8Ca%C2%82%00x%3Dr%C3%AE%13%C3%81%C3%87G%00%00%C3%A0y%C2%9E%17%04A%C2%B0'H%C3%A0y%C2%9E7%C3%850%C3%86%C2%98%C3%AB%C2%BA%C3%A3%7D%60%5C%C3%97%1D%C3%B3K%C2%80%C3%A9%C2%9Ay%7F%08%C3%9FE%7C%C3%9F%C3%B7G%C2%A3%C3%91%0B%7F%C3%BE%C3%82%3F0%C3%86%C3%98x%3C%C3%BE%C2%8D1%C3%86%C2%82%20%C2%84%3Aa~%14~%0B1%1C%0E%7F%C3%8D%C2%BD%C2%85%C2%98%C3%8D%C2%BE%C3%AEg%3EU%C3%BE%02he%C3%97%C3%BC%1F%C3%B2%23%10%00%00%00%00IEND%C2%AEB%60%C2%82",
        down: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%08%06%00%00%00%1E%C3%99%C2%B3Y%00%00%02%C3%8BIDATX%C2%85%C3%8D%C2%98MK%C3%A3%40%18%C3%87%C2%9F%C3%8C%C2%8E%C2%A1n%3C%C3%96%5Bp%3F%C2%95%C2%A7%C3%BD%08%5E%C3%B7%23%C2%88%08.%C3%83%C3%94b%C2%A5%C3%9DC%C3%95%C2%83%C2%AD%C2%87%C3%96SN%15%C2%A1%14%3D%C3%A4%20%C3%B4%20%14%C3%9CR%C3%94%C2%94%15%0Ce%C2%9B%C2%97%C2%B5%C2%84%C3%89d%0Fn%C2%BA%C3%85M_%C3%B2%C3%96%C3%B5%7F%C3%8A%C3%8C%C3%B3%C3%B0%C3%8C%0F%C3%A6%3F%C2%99%17%C2%80w%24!%C2%A8%13!%C2%84DQ%14%05A%40I%0F%C3%A8y%1Ew%1C%C3%87%C3%A1%C2%9C%C3%B3%C2%990%18c%C2%9C%C3%8Df%C3%97%25IZ%13%04!%104!%20%C3%8F%C2%B6mK%C3%97%C3%B5g%C3%86%18%C3%BB%07%06c%C2%8CeY%C3%9E%C3%80%18%C3%A3%C2%B4%20%C3%9E%C2%8A1%C3%864M%7B%C3%B0%C2%81%C3%86%C3%93%C2%90%C3%8Df%C3%97%C2%97%09%02%C3%B0w%26%C3%BC6%02x%C3%B5%C2%88%24Ik%C3%8B%04%C3%B1%25I%C3%92%1AB%08%C2%8Da%C3%BE%C2%9855%C2%8F%C3%8C%C2%92%20%08%C2%82(%C2%8A%C3%A2%18%26%C2%8DU%13%12%08%01%00L%C3%B5%C3%88%C3%AA%C3%AA%C3%AA%C3%874%3C%C3%84%18c%2F%2F%2F%C2%BF%C2%82bS%07%C3%9B%C3%9C%C3%9C%C3%BC%C2%BC%C2%B5%C2%B5%C3%B5%25i%C2%98%C2%83%C2%83%C2%83%C2%AF'''%C3%9F%C2%82bS%C2%A7%C2%A7Z%C2%AD%1E%C3%B7%C3%BB%C3%BD%C3%87%24A%C3%BA%C3%BD%C3%BEc%C2%B5Z%3D%C2%9E%16%C2%9F%0A%C3%A38%C2%8E%C2%93%C3%8B%C3%A5v%C2%93%C2%84%C3%89%C3%A5r%C2%BB%C2%8E%C3%A38%C2%A1a%00%00%C2%9A%C3%8D%C3%A6%C2%85%C2%AA%C2%AA%C3%97I%C2%80%C2%A8%C2%AAz%C3%9Dl6%2Ff%C3%A5%C3%8C%5DE%C2%94%C3%92%1D%C3%8E%C2%B9%1B%07%C2%84s%C3%AERJw%C3%A6%C3%A5%C3%8D%C2%85%C3%A9v%C2%BBw%C3%B5z%C3%BD%2C%0EL%C2%BD%5E%3F%C3%ABv%C2%BBw%C2%B1a%00%00%C2%8A%C3%85%225M%C3%93%C2%88%02b%C2%9A%C2%A6Q%2C%16%C3%A9%22%C2%B9%0B%C3%81%18%C2%861%2C%C2%95J%C3%BBQ%60J%C2%A5%C3%92%C2%BEa%18%C3%83%C3%84%60%00%00j%C2%B5%C3%9Ai%C2%AF%C3%97%C3%BB%1E%06%C2%A4%C3%97%C3%AB%7D%C2%AF%C3%95j%C2%A7%C2%8B%C3%A6%2F%0C%C3%A3%C2%BA%C2%AEK%08%C2%99k%C3%82I%11Bv%5C%C3%97%5D%C3%98%C3%BC%C2%A1%C3%B6%24UU%C2%AFZ%C2%AD%C3%96%C3%A5%22%C2%B9%C2%ADV%C3%ABRU%C3%95%C2%AB0%C3%B5Co%C2%90%C2%94%C3%92%C3%9D%C3%89%C3%93Y%C2%90%18c%C2%8CR%1A%C3%BA%C2%87%19%1AF%C3%93%C2%B4%C3%BBJ%C2%A5r4%2B%C2%A7R%C2%A9%1Ci%C2%9Av%C2%9F%3A%0C%00%40%C2%B9%5C%3E%1C%0C%06zPl0%18%C3%A8%C3%A5r%C3%B90J%C3%9DH0%C2%B6m%5B%C2%85B%C2%81%04%C3%85%0A%C2%85%02%C2%B1m%C3%9BZ%1A%0C%00%C2%80%C2%A2(%C3%A7%C2%9DN%C3%A7v%C2%B2%C2%AF%C3%93%C3%A9%C3%9C*%C2%8Ar%1E%C2%B5fd%18%C3%8E9'%C2%84lO%C3%B6%11B%C2%B6%C2%83%C3%AEC%C2%A9%C3%83%00%00%C2%B4%C3%9B%C3%AD%C2%9BF%C2%A3%C2%A1%00%004%1A%0D%C2%A5%C3%9Dn%C3%9F%C3%84%C2%A9%17%C3%BB%C3%AC%C2%9B%C3%8F%C3%A7%C3%B7%C2%86%C3%83%C3%A1%C3%8F%7C%3E%C2%BF%17%C2%B7%C2%96%00%00%C2%90%C3%89d2%C2%B2%2CoD-%22%C3%8B%C3%B2%C2%A7(K%C3%99%C2%97%C2%A6i%0F%C2%A3%C3%91h%C2%84%00%5EOu%C2%9E%C3%A7y1%C2%8AE%06%C3%B1%3C%C3%8F%C3%B3O%7F%08%C3%A0%C3%95%C2%8CQ%C2%97c%5C%C3%99%C2%B6m%C3%B9%C2%A6%1F%7B%C3%A6%C3%AD%25%7C%19b%C2%8C1%5D%C3%97%C2%9F%C3%BD%C3%B6%07%C3%BF%C2%83s%C3%8E-%C3%8B21%C3%86xee%25%C3%95%1B%C2%A6%C3%BF%0A%C3%B1%C3%B4%C3%B4%C3%B4%23%C3%B0%15bR%C3%BF%C3%AB%7D%C3%A6%5D%C3%A97Z%C3%ADt%C2%83S%06%C3%9CT%00%00%00%00IEND%C2%AEB%60%C2%82",
        del: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%08%06%00%00%00%1E%C3%99%C2%B3Y%00%00%01%C2%B9IDATX%C2%85%C3%95%C2%98KN%C3%830%10%C2%86gl'miwU7%C2%80%10%12%0B%0E%C3%80%C2%99%C2%B8%40%0F%C3%82%05z%C2%A6%1E%C2%A0%0B%24%C2%84x%08U%5D%C3%91%C3%90%26%C3%84%1E%16%C3%85%C2%A1%C2%94%3C%C3%BCjZ%C3%BEU%C2%9C83_%C3%86%C3%A3%C2%89m%C2%80%23%12%C2%96%C3%9Dd%C2%88%2CB%C2%8C%19%22%0B%C3%ADP%11%C2%A9O%C2%A2L%11%C2%A9Z%18%C2%81(%C2%86q%3C%C3%AAs%3E%C3%80%0A%C3%90%10%22%00J%C2%A4%5C.%C2%B2l%C2%9E%13%C3%A5%7F%60%04%C2%A28%C3%ABv%2F%04%C2%A2%C3%98%17%C3%84%C2%AEr%C2%A2%C3%BCy%C2%BD~%C3%94%40%C3%850%0C%C3%A3x%C3%94%26%08%C3%80%C3%8FH%C3%A86%03%C3%98%C3%A4H%C2%9F%C3%B3A%C2%9B%20Z%7D%C3%8E%07%3A7%19%00%40%C2%84%18W%C3%A5%C3%88t%3C%C2%99M%C3%87%C2%93%C2%99%C2%8F%C3%83%3A%1B%08%C2%80%11b%5C%C3%80T%C3%8D%C2%9Am%03%C2%AE%40%266~E%C2%A6%C3%89%C2%88%2B%C2%90%C2%AD%0D%C3%AB%3Ab%0A%C3%A4%12%C3%89J%C2%98%C2%9B%C2%BB%C3%9BkWGu%C3%8F%C3%AB%C3%AC%C3%96F%C3%86%05%C3%88%15%C2%A4%11%C3%86%16%C3%88%07%C3%84%08%C3%86%14%C3%88%17%04%C3%A0%C2%BB%C2%B6%C3%B48%3F9%C3%ADt%C3%8E%C2%9B%3A%C2%BB%24%C2%A5%09%C3%88K%C2%9A%3E%C2%AD%C2%A4%C3%BC%C2%B0%C2%9AM%C2%A6_%C3%A8%C3%9A%C3%9Fzj%C2%9B%3A%C2%B0%05q%C2%821q%C3%A4%02%C3%A2%0C%C3%A3Sg%C2%82%C3%82%1C%C2%A4%02%C2%87p%60%C3%9B%C3%9F%18%C3%86%C2%B5%C2%8E%C3%98%00%19%C3%81%C2%98%C2%80%C2%84%00j%C2%84%C2%B1%C2%89%C2%88%2FP-%C2%8C%C3%8B%C3%90%C3%B8%00Y-%C2%AEL%1C%C3%BA%00%C3%BD%C2%8F%0A%5Cf%2C%C3%84%C2%BF%C2%A9qqU%C2%B6%C3%95%C3%9C%7D%C3%91%C2%B5%C3%84%C2%9B%C3%98%C3%90%C3%BE%11%60%C2%B3%3A%C2%BF%C3%AC%C3%B5%C2%AE%C3%B6%C2%B9%C2%A5%C2%AD%12%01%C3%90%C3%83ju%C2%AF%C2%88T%11%C2%99D%C3%8Ae%C3%9B%20%00%00%C2%89%C2%94K%1D%C2%99%22gv7%C3%A1m('%C3%8A%17Y6%C3%97m%C2%AE%2F%14%C2%80J%C2%A4%7C%17%C2%8C%C2%89%C2%88%C2%B1%C3%8A%1Df%08%C3%A9S%C2%88%C2%B74%7D-%3D%C2%85%C3%98%C3%96%C2%A1%C3%8Eg%C2%8EJ_%3A%C3%88%15~%C2%98%C2%A6x%C2%B5%00%00%00%00IEND%C2%AEB%60%C2%82",

        folder: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%10%06%00%00%00%C3%9D%19%C3%81N%00%00%01%C2%BEIDATH%C2%89%C3%AD%C2%96%C3%8F%2B%04a%18%C3%87%C2%BF%C3%AF%C2%BB3cCZ%C2%B2~%C2%AC%C2%A2%C2%B4X%C3%91%C2%A2%C2%B4%25%25%07'7%C3%BE%00%07'%C3%84%C2%9DrD9%C3%AC%0D%07%17%C3%85%C2%81%0B%17r%40~%14%07%C2%AB6%06%C2%AD%C3%A2%C3%80%5E%24%C2%A2v%C3%96%C3%AC%C3%A2%C3%B5%C2%8E%C3%83%1A%5B%C3%96(M%3B.%C3%BB%C2%A9y%C2%9B%C3%A7%C2%99%C2%A7y%3F%C3%B3%C2%BE%C3%AF%C3%8C%C2%BC%40%06s%C2%90%C3%AF%C2%89v%C2%A5%C2%AE%C2%ACuafz%C3%AE%C2%AAOv%C3%A6%C3%B6%C3%B48%C3%9D%C2%9E%60%C3%A9FNn%C2%BAE40%C3%86%18%C3%A0%1B%C3%AB%3D%5E%C3%B26xC%C2%93%C2%B7%23%C3%8A%C2%90%7C*%7C%2Fl%C2%99p7%C3%97l%C3%B7%0F%14%0CW%C3%AC%03%00%C2%A5b%1E%C2%B1%C2%A7%5B%0F%00DA%14%C2%80%C2%A6%C2%95%C3%B2WG%C3%84%C3%A7%0B%C3%A1%16%0A%C3%A4SjTN%40(1%C2%BC%C2%9A%3EH%C2%90%C2%AC%C2%A1%C2%91~%C3%B5%C2%9C2%C2%82%7F%25%18%5C_%C2%97%C3%A5d%C2%AC%7D%1Ez%C3%BB%C2%95%C3%A7%1A%C3%97%2B%C3%B43%00%C3%A0%1CH%0CD%22K%1A%C3%91%C2%89aJ%01%1C%C3%BD*x%22om%C2%9D%C2%9F%01%C3%8FQU%7DyM%C3%9EV%C3%A3%C2%9Ck%1C%C2%88D%C3%AE%1F%C2%94(%C3%90%C3%95%3D%3E64h%C3%B61%C2%93%C3%8C%C3%96%1Ft%C3%BA%C3%9B%18%C3%93cC%C3%81%C3%A2%C2%A2%C2%9A%C3%AA%C2%AAj%C2%80%17JR%C2%96%04%10%C2%9A%C2%98r%02%1B%C2%A5%14%C2%A0%C3%94%26%C3%98%2CX%02%C2%86%C2%82.W%5D%7De%25%20J%C3%B9%C2%8E%7CG%C3%BAE%C2%8C%C3%B8%C2%87%C3%97%C3%A0od%04%C3%8D%C2%92%114KF%C3%90%2C)%C2%82%C3%AF%C2%8CsB%01%C3%8EcjL%C2%B5%5E(%1E%60Q%C2%9E%1D%C2%8F%C3%ABq%C3%8A%C2%87%C3%BA%26%C3%BC%C3%B4(I%C3%80a%60g7%1C%06j%3D%5E%C3%AF%C2%B3%25%C2%A2%C2%89_%C3%A8%C3%A6%C3%BCy%C3%87%5D%C3%87%C3%AA%1A%C2%80e%C2%84~%C3%98%0FJ%C2%97%C3%82%C2%A1%7D%C3%8F%C3%A9%C2%B4_H%C2%A3%C3%99BI%C2%89%15j%00%C3%80v%C3%9F%C3%ADoSJD%C3%B5%C2%BF%C2%AC*%C2%8B%C3%977V%C3%B5k%C2%9A%0F%3A1%C2%93%C3%B7%1C%C2%B0%C3%BA)%00%00%00%00IEND%C2%AEB%60%C2%82"

    };
    var setXML = {
        creatProfile: function () {
            var xml = new XML('<root></root>');
            xml.appendChild(new XML('<ScriptName>' + info.name + '</ScriptName>'));
            xml.appendChild(new XML('<version>' + info.version + '</version>'));
            xml.appendChild(new XML('<list></list>'));
            xml.list.appendChild(new XML('<exp/>'));
            xml.list.appendChild(new XML('<ffx/>'));
            xml.list.appendChild(new XML('<spt/>'));
            var profile = new File(scriptFolderPath + '/' + info.name + '.xml');
            writee(profile, xml);
        }
    };
    var helpTips = {
        exp: "LMB: Reveal Panel\nCtrl+LMB: Read new file path\n",
        ffx: "LMB: Reveal Panel\nCtrl+LMB: Read new file path\n",
        spt: "LMB: Reveal Panel\nCtrl+LMB: Read new file path\n"
    };

    var scriptFolderPath = Folder.userData.fullName + "/Aescripts/DumplingScript/" + info.name;
    var scriptFolder = Folder(scriptFolderPath);
    var profile = File(scriptFolderPath + '/' + info.name + '.xml');
    if (!scriptFolder.exists) scriptFolder.create();
    if (!profile.exists) { setXML.creatProfile(); }
    if (profile.exists) {
        if (readd(profile) == '') { setXML.creatProfile(); }
        var xml = new XML(readd(profile));
        xml.ScriptName = info.name;
        xml.version = info.version;
        writee(profile, xml);
    }


    /**functions */
    function UI(_parent) {
        // var w = _parent instanceof Panel ? _parent : new Window('palette', info.name + ' ' + info.version, undefined, { resizeable: true });
        var w = _parent.add('group', [0, 0, 50, 50]);
        w.alignment = ['fill', 'fill'];
        w.margins = w.spacing = 0;
        var g = w.add('group', [0, 0, 50, 50]);
        g.alignment = ['fill', 'fill'];
        g.margins = g.spacing = 0;

        // g.onDraw = drawG;

        var setting = g.add('statictext', undefined, undefined, { style: "toolbutton" });
        setting.text = '≡';
        setting.justify = 'center';

        var exp = g.add('customButton', undefined, undefined, { style: "toolbutton" });
        var ffx = g.add('customButton', undefined, undefined, { style: "toolbutton" });
        var spt = g.add('customButton', undefined, undefined, { style: "toolbutton" });
        exp.image = decodeURIComponent(ICON.exp);
        ffx.image = decodeURIComponent(ICON.ffx);
        spt.image = decodeURIComponent(ICON.spt);

        exp.alignment = ['fill', 'fill'];
        ffx.alignment = ['fill', 'fill'];
        spt.alignment = ['fill', 'fill'];

        setting.alignment = ['fill', 'fill'];
        setting.preferredSize = [25, 25];

        exp.onDraw = drawBtn;
        ffx.onDraw = drawBtn;
        spt.onDraw = drawBtn;
        btnHoverStyle(exp, helpTips.exp);
        btnHoverStyle(ffx, helpTips.ffx);
        btnHoverStyle(spt, helpTips.spt);

        function drawBtn() {
            var g = this.graphics;
            var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.8, 1, 1, .5], 1);
            var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.9, 1, 1, .02]);
            if (this.image == null) {
                var str = this.text;
                g.drawString(str, pen1, 0, 0);
                return;
            };
            g.newPath();
            g.rectPath(0, 0, this.size[0], this.size[1]);
            g.fillPath(brush1);
            // g.strokePath(pen1);
            var img = this.image;
            var w = this.size[0];
            var h = this.size[1];
            var s = w >= h ? h : w;
            var x = (w - s) / 2;
            var y = (h - s) / 2;
            g.drawImage(img, x, y, s, s);

        }
        function drawBtnHover() {
            var g = this.graphics;
            var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.8, 1, 1, .5], 1);
            var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.9, 1, 1, .07]);
            if (this.image == null) {
                var str = this.text;
                g.drawString(str, pen1, 0, 0);
                return;
            };
            g.newPath();
            g.rectPath(0, 0, this.size[0], this.size[1]);
            g.fillPath(brush1);
            g.strokePath(pen1);
            var img = this.image;
            var w = this.size[0] + 10;
            var h = this.size[1] + 10;
            var s = w >= h ? h : w;
            var x = (w - s) / 2 - 5;
            var y = (h - s) / 2 - 5;
            g.drawImage(img, x, y, s, s);

        }
        function drawG() {
            var g = this.graphics;
            var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.9, 1, .9, 1], 3);
            var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [1, 1, .8, .5]);
            g.newPath();
            g.rectPath(0, 0, this.size[0], this.size[1]);
            g.strokePath(pen1);
        }
        function btnHoverStyle(_obj, _helpTip) {
            _obj.addEventListener('mouseover', function (e) {
                this.onDraw = drawBtnHover;
                this.notify('onDraw');
            });
            _obj.addEventListener('mouseout', function (e) {
                this.onDraw = drawBtn;
                this.notify('onDraw');
            });
            _obj.helpTip = _helpTip;
        }
        /**
         * 列表底部点击，读取文件路径
         * @param {string} _listType "exp" | "ffx" | "spt"
         * @returns {string} fName
         */
        function loadNewFilePathToList(_listType, parent) {
            var fs = File.openDialog('Select File: ', '', true);
            if (fs == null) { return false; };
            var xml = new XML(readd(profile));
            var id;
            if (_listType == 'exp') { id = xml.list.exp.children().length(); }
            if (_listType == 'ffx') { id = xml.list.ffx.children().length(); }
            if (_listType == 'spt') { id = xml.list.spt.children().length(); }
            for (var i = 0; i < fs.length; i++) {
                var f = fs[i]; //fs[i] is a File object
                var filePath = f.fsName;
                var fileName = filePath.substring(filePath.lastIndexOf('\\') + 1, filePath.length);
                var fileType = filePath.substring(filePath.lastIndexOf('.') + 1, filePath.length);
                var newXML = new XML('<p>' + filePath + '</p>');
                // alert(fileType != 'jsx' && fileType != 'jsxbin');
                if (_listType == 'exp') {
                    if (fileType != 'jsx' && fileType != 'js') return;
                    xml.list.exp.appendChild(newXML);
                }
                if (_listType == 'ffx') {
                    if (fileType != 'ffx') return;
                    xml.list.ffx.appendChild(newXML);
                }
                if (_listType == 'spt') {
                    if (fileType != 'jsx' && fileType != 'jsxbin') return;
                    xml.list.spt.appendChild(newXML);
                }
                // print(fileName);
                //写入配置
                writee(profile, xml);
                (function (_id) { //动态获取index,不用iife会直接到最后一个index
                    UI_listGroupItem(parent, _id, fileName, _listType);
                })(id);
                id++;
            }
            return;
        }
        /**是否打开list面板 */
        var listPanelShow = false;
        /**
         * @param {string} type "exp" | "ffx" | "spt"  
         * @returns 
         */
        function UI_contextListMenu(type) {
            var type = type;
            var w = new Window('palette', undefined, undefined, { resizeable: true, borderless: true });
            w.alignment = ['fill', 'fill'];
            w.margins = 2;
            w.spacing = 0;
            var g = w.add('group');
            g.orientation = 'column';
            g.alignment = ['fill', 'fill'];
            g.margins = [2, 8, 2, 0];
            g.spacing = 0;

            var bottomGroup = w.add('group');
            bottomGroup.alignment = ['fill', 'bottom'];
            bottomGroup.spacing = bottomGroup.margins = 2;

            var close = bottomGroup.add('iconbutton', undefined, undefined, { style: "toolbutton" });
            close.text = 'close';
            close.alignment = ['fill', 'fill'];

            var revealFile = bottomGroup.add('iconbutton', undefined, undefined, { style: "toolbutton" });
            revealFile.image = decodeURIComponent(ICON.folder);
            revealFile.helpTip = 'Read File';
            revealFile.alignment = ['right', 'fill'];
            // revealFile.preferredSize[0] = 38 + 38 + 33;

            uiSetBgColor(w, [1, 1, 1, .8]);
            function loadList(_parent, _type) {
                var xml = new XML(readd(profile));
                var current = eval("xml.list." + _type);
                for (var i = 0; i < current.children().length(); i++) {
                    var path = String(current.children()[i]);
                    var name = path.substring(path.lastIndexOf('\\') + 1, path.length);
                    var btnGroup = UI_listGroupItem(_parent, i, name, _type);
                }
                return;
            }

            w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, [.9, 1, 1, .15]);
            loadList(g, type);

            w.layout.layout(true);
            w.onReisze = w.onResizing = function () { w.layout.resize(); };
            w.onShow = function () {
                listPanelShow = true;
            };
            w.onClose = function () {
                w.hide();
                listPanelShow = false;
            };
            w.addEventListener('keydown', function (e) {
                if (e.keyName == "Escape") w.notify('onClose');
            });
            close.onClick = function () { w.notify('onClose'); };
            g.addEventListener('click', function (e) {
                if (e.detail == 1) { w.notify('onClose'); }
            });
            return {
                w: w,
                g: g,

                revealFile: revealFile,
            };
        }
        /**
         * @param {*} _parent 
         * @param {*} _index 
         * @param {*} _text 
         * @param {*} _type 
         * @returns 
         */
        function UI_listGroupItem(_parent, _index, _text, _type) {
            var btnHeight = 38;

            var btnG = _parent.add('group');
            btnG.orientation = 'row';
            btnG.alignment = ['fill', 'top'];
            btnG.margins = 1;
            btnG.spacing = 0;
            btnG.preferredSize = [260, btnHeight];

            var id = btnG.add('statictext', undefined, (_index + 1));
            id.alignment = ['left', 'center'];
            id.margins = 0;
            id.spacing = 0;
            id.preferredSize = [15, btnHeight];

            var btn = btnG.add('customButton', undefined, undefined, { style: "toolbutton" });
            btn.alignment = ['fill', 'fill'];
            btn.margins = 0;
            btn.spacing = 0;
            btn.preferredSize = [280, btnHeight];


            btn.text = _text;

            var upBtn = btnG.add('iconbutton', undefined, undefined, { style: "toolbutton" });
            var downBtn = btnG.add('iconbutton', undefined, undefined, { style: "toolbutton" });
            var delBtn = btnG.add('iconbutton', undefined, undefined, { style: "toolbutton" });

            // upBtn.text = '▲';
            // downBtn.text = '▼';
            // delBtn.text = '×';
            upBtn.image = decodeURIComponent(ICON.up);
            downBtn.image = decodeURIComponent(ICON.down);
            delBtn.image = decodeURIComponent(ICON.del);

            upBtn.alignment = ['right', 'fill'];
            downBtn.alignment = ['right', 'fill'];
            delBtn.alignment = ['right', 'fill'];
            upBtn.preferredSize = [38, btnHeight];
            downBtn.preferredSize = [38, btnHeight];
            delBtn.preferredSize = [33, btnHeight];

            upBtn.margins = upBtn.spacing = 0;
            downBtn.margins = downBtn.spacing = 0;
            delBtn.margins = delBtn.spacing = 0;

            var xml = new XML(readd(profile));

            var btnFilePath = eval("xml.list." + _type + '.children()[' + _index + ']');
            btn.helpTip = btnFilePath + '\nRMB: Open File Folder'; //current.children()[index - 1].toString();

            btn.addEventListener('mousedown', function (e) {
                try {
                    var id = 0;
                    for (var i = 0; i < e.target.parent.parent.children.length; i++) {
                        if (e.target.parent.parent.children[i].children[1] == e.target) id = i;
                    }
                    var xml = new XML(readd(profile));
                    if (_type == 'exp') {
                        var f = File(String(xml.list.exp.children()[id]));
                        if (!f.exists) {
                            alert('File not exists!');
                            return;
                        }
                        if (e.button == 0) {
                            var content = readd(f);
                            var comp = getComp();
                            if (!comp) return;
                            var selL = getSelL();
                            if (!selL) return;
                            undo('set expression', function () {
                                var sp = comp.selectedProperties;
                                for (var i = 0; i < sp.length; i++) {
                                    if (sp[i].canSetExpression == false) continue;
                                    sp[i].expression = content;
                                }
                            });
                        }
                        if (e.button == 2) { system.callSystem('explorer ' + f.parent.fsName); }
                    }
                    if (_type == 'ffx') {
                        var f = File(String(xml.list.ffx.children()[id]));
                        if (!f.exists) {
                            alert('File not exists!');
                            return;
                        }
                        if (e.button == 0) {
                            var comp = getComp();
                            if (!comp) return;
                            var selL = getSelL();
                            if (!selL) return;
                            for (var i = 0; i < selL.length; i++) {
                                selL[i].applyPreset(f);
                            }
                        }
                        if (e.button == 2) { system.callSystem('explorer ' + f.parent.fsName); }
                    }
                    if (_type == 'spt') {
                        var f = File(String(xml.list.spt.children()[id]));
                        if (!f.exists) {
                            alert('File not exists!');
                            return;
                        }
                        if (e.button == 0) { $.evalFile(f); }
                        if (e.button == 2) { system.callSystem('explorer ' + f.parent.fsName); }
                    }
                } catch (e) {
                    alert(e.line + e.message);
                }
                this.parent.parent.parent.close();
            });
            upBtn.addEventListener('mousedown', function (e) {
                var xml = new XML(readd(profile));
                var id = 0;
                for (var i = 0; i < e.target.parent.parent.children.length; i++) {
                    if (e.target.parent.parent.children[i] == e.target.parent) id = i;
                }
                var current = eval("xml.list." + _type);
                if (id == 0) return;
                var newXML = new XML("<p>" + current.children()[id].toString() + "</p>");
                current.insertChildBefore(current.children()[id - 1], newXML);
                current.children()[id + 1].setLocalName('waitToDelete');
                delete current.waitToDelete;
                writee(profile, xml.toString());
                var newBtn = e.target.parent.parent.children[id - 1];
                var thisBtn = e.target.parent;
                var myName = thisBtn.children[1].text;
                var newName = newBtn.children[1].text;
                thisBtn.children[1].text = newName;
                newBtn.children[1].text = myName;
                var colNew = newBtn.graphics.backgroundColor.color;
                var colMy = thisBtn.graphics.backgroundColor.color;
                uiSetBgColor(newBtn, colMy);
                newBtn.children[1].onDraw = drawOut;
                // uiSetBgColor(newBtn.children[1], colMy);
                uiSetBgColor(thisBtn, colNew);
                // uiSetBgColor(thisBtn.children[1], colNew);
                var enbd = newBtn.enabled;
                newBtn.enabled = thisBtn.enabled;
                thisBtn.enabled = enbd;
                if (newBtn.enabled == false) { newBtn.children[1].onDraw = drawNotExists; }
                if (thisBtn.enabled == false) { thisBtn.children[1].onDraw = drawNotExists; }
            });
            downBtn.addEventListener('mousedown', function (e) {
                var xml = new XML(readd(profile));
                var id = 0;
                for (var i = 0; i < e.target.parent.parent.children.length; i++) {
                    if (e.target.parent.parent.children[i] == e.target.parent) id = i;
                }
                var current = eval("xml.list." + _type);
                if (id == current.children().length() - 1) return;
                var newXML = new XML("<p>" + current.children()[id].toString() + "</p>");
                current.insertChildAfter(current.children()[id + 1], newXML);
                current.children()[id].setLocalName('waitToDelete');
                delete current.waitToDelete;
                writee(profile, xml.toString());
                var newBtn = e.target.parent.parent.children[id + 1];
                var thisBtn = e.target.parent;
                var myName = thisBtn.children[1].text;
                var newName = newBtn.children[1].text;
                thisBtn.children[1].text = newName;
                newBtn.children[1].text = myName;
                var colNew = newBtn.graphics.backgroundColor.color;
                var colMy = thisBtn.graphics.backgroundColor.color;
                uiSetBgColor(newBtn, colMy);
                newBtn.children[1].onDraw = drawOut;
                // uiSetBgColor(newBtn.children[1], colMy);
                uiSetBgColor(thisBtn, colNew);
                // uiSetBgColor(thisBtn.children[1], colNew);
                var enbd = newBtn.enabled;
                newBtn.enabled = thisBtn.enabled;
                thisBtn.enabled = enbd;
                if (newBtn.enabled == false) { newBtn.children[1].onDraw = drawNotExists; }
                if (thisBtn.enabled == false) { thisBtn.children[1].onDraw = drawNotExists; }
            });
            delBtn.addEventListener('mousedown', function (e) {
                var xml = new XML(readd(profile));
                var current = eval("xml.list." + _type);
                var id = 0;
                for (var i = 0; i < e.target.parent.parent.children.length; i++) {
                    if (e.target.parent.parent.children[i] == e.target.parent) id = i;
                }
                delete current.children()[id];
                writee(profile, xml.toString());
                e.target.parent.parent.remove(e.target.parent);
                _parent.parent.layout.layout(true);
            });

            var randColor = [Math.random() / 7, Math.random() / 4, Math.random() / 5, 1];
            var drawOut = function () {
                var g = this.graphics;
                var pen1 = g.newPen(g.PenType.SOLID_COLOR, [1, 1, 1, .65], 2);
                var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, randColor);
                var font = ScriptUI.newFont('Segoe UI', ScriptUI.FontStyle.REGULAR, 17);
                var mss = g.measureString(this.text, font);
                g.newPath();
                g.rectPath(0, 0, this.size[0], this.size[1]);
                // g.fillPath(brush1);
                g.drawString(this.text, pen1, 3, 0, font);
            };
            var drawNotExists = function () {
                var g = this.graphics;
                var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.6, .6, .6, 1], 2);
                var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.3, .3, .3, 1]);
                var font = ScriptUI.newFont('Segoe UI', ScriptUI.FontStyle.REGULAR, 17);
                var mss = g.measureString(this.text, font);
                g.newPath();
                g.moveTo(0, 0);
                g.lineTo(0, this.size[1]);
                g.lineTo(this.size[0], this.size[1]);
                g.lineTo(this.size[0], 0);
                g.lineTo(0, 0);
                g.fillPath(brush1);
                g.drawString(this.text, pen1, 3, 0, font);
            };
            var drawHover = function () {
                var g = this.graphics;
                var pen1 = g.newPen(g.PenType.SOLID_COLOR, [1, 1, .45, 1], 3);
                var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [1, 1, 1, .2]);
                var font = ScriptUI.newFont('Segoe UI', ScriptUI.FontStyle.BOLD, 18);
                var mss = g.measureString(this.text, font);

                g.newPath();
                g.moveTo(0, 0);
                g.lineTo(0, this.size[1]);
                g.lineTo(this.size[0], this.size[1]);
                g.lineTo(this.size[0], 0);
                g.lineTo(0, 0);
                g.fillPath(brush1);

                g.drawString(this.text, pen1, 3, -1, font);
            };
            btn.addEventListener('mouseover', function (e) { this.onDraw = drawHover; });
            btn.addEventListener('mouseout', function (e) { this.onDraw = drawOut; });

            uiSetBgColor(btnG, randColor);
            uiSetForeColor(btn, [.7, .7, .7, 1], 2);

            if (!File(btnFilePath).exists) {
                uiSetBgColor(btn, [.8, 0, 0, 1]);
                btnG.enabled = false;
                btn.onDraw = drawNotExists;
            } else {
                btnG.enabled = true;
                btn.onDraw = drawOut;
            }


            return {
                btnG: btnG,
                btn: btn,
                upBtn: upBtn,
                downBtn: downBtn,
                delBtn: delBtn
            };
        }
        /**创建一个横向about栏
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

            openLink.text = "Link";

            slime.alignment = ['left', 'center'];
            myWord.alignment = ['left', 'center'];
            openLink.alignment = ['right', 'center'];

            myWord.margins = myWord.spacing = 1;
            openLink.margins = [3, 0, 3, 0];
            openLink.spacing = 1;
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
        /**
         * 更新信息窗口
         */
        function UI_updateMessage(_message) {
            var w = new Window("palette", "News", undefined, { resizeable: true });
            w.orientation = 'column';
            w.alignment = ['fill', 'fill'];
            w.spacing = 0;
            w.margins = 5;
            var p1 = w.add('group', undefined, 'news');
            p1.alignment = ['fill', 'fill'];
            p1.spacing = 0;
            p1.margins = 0;
            var ed = p1.add('edittext', undefined, _message, { multiline: true, readonly: true });
            ed.alignment = ['fill', 'fill'];
            w.onResize = w.onResizing = function () { this.layout.resize(); };
            w.onClose = function () { this.hide(); };
            return w;
        }

        /**events */
        setting.addEventListener('mousedown', function (e) {
            if (e.button == 0) {
                var updateWin = UI_updateMessage(info.about + '\n' + info.update);
                UI_aboutBar(updateWin, info.copyright + ' ' + info.author, info.date);
                updateWin.show();
            }
            if (e.button == 2) {
                system.callSystem("explorer \"" + profile.fsName + "\"");
            }
        });
        setting.helpTip = 'LMB: Help\nRMB: Setting file';
        exp.addEventListener('mouseup', function (e) {
            var xml = new XML(readd(profile));
            if (xml.list.exp.children().length() == 0) {
                var f = File.openDialog();
                if (f == null) { return false; };
                var filePath = f.fsName;
                xml.list.exp.appendChild(new XML('<p>' + filePath + '</p>'));
                writee(profile, xml);
                return;
            };
            var myPan = UI_contextListMenu('exp');
            myPan.revealFile.onClick = function () {
                loadNewFilePathToList('exp', myPan.g);
                myPan.w.layout.layout(true);
            };
            if (listPanelShow) { clearOutput(); writeLn('seems panel has shown'); return; };
            myPan.w.show();
            myPan.w.location = getScreenLoca(myPan.w, e.screenX - 5, e.screenY - 5);
            myPan.w.active = true;
        });
        ffx.addEventListener('mouseup', function (e) {
            var xml = new XML(readd(profile));
            if (xml.list.ffx.children().length() == 0) {
                var f = File.openDialog();
                if (f == null) { return false; };
                var filePath = f.fsName;
                xml.list.ffx.appendChild(new XML('<p>' + filePath + '</p>'));
                writee(profile, xml);
                return;
            };
            var myPan = UI_contextListMenu('ffx');
            myPan.revealFile.onClick = function () {
                loadNewFilePathToList('ffx', myPan.g);
                myPan.w.layout.layout(true);
            };
            if (listPanelShow) { clearOutput(); writeLn('seems panel has shown'); return; };
            myPan.w.show();
            myPan.w.location = getScreenLoca(myPan.w, e.screenX - 5, e.screenY - 5);
            myPan.w.active = true;
        });
        spt.addEventListener('mouseup', function (e) {
            var xml = new XML(readd(profile));
            if (xml.list.spt.children().length() == 0) {
                var f = File.openDialog();
                if (f == null) { return false; };
                var filePath = f.fsName;
                xml.list.spt.appendChild(new XML('<p>' + filePath + '</p>'));
                writee(profile, xml);
                return;
            };
            var myPan = UI_contextListMenu('spt');
            myPan.revealFile.onClick = function () {
                loadNewFilePathToList('spt', myPan.g);
                myPan.w.layout.layout(true);
            };
            if (listPanelShow) { clearOutput(); writeLn('seems panel has shown'); return; };
            myPan.w.show();
            myPan.w.location = getScreenLoca(myPan.w, e.screenX - 5, e.screenY - 5);
            myPan.w.active = true;
        });
        exp.addEventListener('mousedown', function (e) {
            e.preventDefault();
            if (e.ctrlKey) {
                var f = File.openDialog();
                if (f == null) return;
                var filePath = f.fsName;
                var xml = new XML(readd(profile));
                xml.list.exp.appendChild(new XML('<p>' + filePath + '</p>'));
                writee(profile, xml);
            }
        });
        ffx.addEventListener('mousedown', function (e) {
            e.preventDefault();
            if (e.ctrlKey) {
                var f = File.openDialog();
                if (f == null) return;
                var filePath = f.fsName;
                var xml = new XML(readd(profile));
                xml.list.ffx.appendChild(new XML('<p>' + filePath + '</p>'));
                writee(profile, xml);
            }
        });
        spt.addEventListener('mousedown', function (e) {
            e.preventDefault();
            if (e.ctrlKey) {
                var f = File.openDialog();
                if (f == null) return;
                var filePath = f.fsName;
                var xml = new XML(readd(profile));
                xml.list.spt.appendChild(new XML('<p>' + filePath + '</p>'));
                writee(profile, xml);
            }
        });
        var setResize = function (_obj) {
            var parent = _obj;
            while (parent != null && !(parent instanceof Panel) && !(parent instanceof Window)) {
                parent = parent.parent;
            }
            parent.onResize = parent.onResizing = function () {
                if (parent.size[0] > parent.size[1]) {
                    g.orientation = 'row';
                    setting.alignment = ['left', 'fill'];
                    setting.size[0] = 25;
                } else {
                    g.orientation = 'column';
                    setting.alignment = ['fill', 'top'];
                    setting.size[1] = 25;
                }
                if (parent instanceof Panel) { parent.layout.layout(true); }
                parent.layout.resize();
            };
        };

        return {
            w: w,
            g: g,
            exp: exp,
            ffx: ffx,
            spt: spt,
            setting: setting,
            setResize: setResize
        };

    }
    function undo(_name, _fn) {
        app.beginUndoGroup(_name);
        _fn();
        app.endUndoGroup();
        return;
    }
    /**
     * 
     * @param {FileObject} _file 
     * @returns {string} 文件内容
     */
    function readd(_file) {
        _file.open('r');
        var _content = _file.read();
        _file.close();
        return _content;
    }
    /**
     * 
     * @param {FileObject} _file 写入的文件
     * @param {string} _str 新的内容
     */
    function writee(_file, _str) {
        _file.open('w');
        _file.write(_str);
        _file.close();
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
    /**获取activeItem，如果获取失败返回false */
    function getComp() {
        var comp = app.project.activeItem;
        if (!comp || !(comp instanceof CompItem)) { alert('Select a comp!'); return false; }
        return comp;
    }
    /**获取选中的图层，如果没有选中图层返回false */
    function getSelL() {
        var comp = getComp();
        if (comp == false) return false;
        var selL = comp.selectedLayers;
        if (selL.length == 0) return false;
        return selL;
    }
    /**
 * 控件设置BG颜色
 * @param {object} _control 控件
 * @param {array} _Col [r,g,b,a]
 */
    function uiSetBgColor(_control, _Col) {
        _control.graphics.backgroundColor = _control.graphics.newBrush(_control.graphics.BrushType.SOLID_COLOR, _Col);
    }
    /**
     * 控件设置BG颜色
     * @param {object} _control 控件
     * @param {array} _Col [r,g,b,a]
     * @param {number} _StrokeWidth 线宽
     */
    function uiSetForeColor(_control, _Col, _StrokeWidth) {
        _control.graphics.foregroundColor = _control.graphics.newPen(_control.graphics.PenType.SOLID_COLOR, _Col, _StrokeWidth);
    }
    /**
     * 获取点击位置，并获取1/2
     * @param {Control} _obj 面板ui
     * @param {*} _eventX 
     * @param {*} _eventY 
     * @returns [x,y]
     */
    function getScreenLoca(_obj, _eventX, _eventY) {
        var screen = $.screens[0];
        var pos = [_eventX, _eventY];
        if (_eventX > 0 && _eventY > 0) {
            if (_eventY > screen.bottom / 2) {
                pos = [_eventX, _eventY - _obj.size[1]];
                return pos;
            }
            return pos;
        } else {
            return pos;
        }
    }
    /**$.writeln输出内容
     * @param {*} _str 
     */
    function print(_str) {
        $.writeln(_str);
    }

    return {
        info: info,
        UI: UI
    };
}
)();
//非模块化启动
if (!$.global.DPL_MODULE_MODE) {
    (function (_obj) {
        var info = DPLStarListModule.info;
        var w = (_obj instanceof Panel) ? _obj : new Window('palette', info.name + ' ' + info.version, undefined, { resizeable: true });
        w.alignment = ['fill', 'fill'];
        w.margins = w.spacing = 0;
        var ui = DPLStarListModule.UI(w);
        w.layout.layout(true);
        ui.setResize(w);
        if (w instanceof Window) {
            w.show();
            w.center();
            w.size = [180, 40];
            w.onResize();
        }
        return w;
    })(this);
}