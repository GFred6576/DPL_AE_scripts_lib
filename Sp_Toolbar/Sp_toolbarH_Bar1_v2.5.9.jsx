/**
 * 名称：Sp_toolbar
 * 功能：自定义快捷工具栏
 * 版本：V2.0.2
 * 
 * 
 * V 2.0.0  修复导入jsx文件撤销组问题  code318：自定义撤销列表
 * V 2.0.1  
 * V 2.0.2  新增一个小提示，如果新建按钮没名称，则会提醒 code1370
 * V 2.0.3  多写了一个alert 删掉了
 * ==============
 * change: GFred
 * @version
 * 2.0.3 面板拉长
 * 2.0.4 多栏的下拉按钮改小
 * 2.0.5 增加切换工具栏的按钮，修改图标
 * 2.0.6 增加调整高度滑块，按钮变回边框
 * 2.0.7 多写了一个substring，按钮显示的字只能三个，改掉了
 * 2.0.8 增加了夸组复制移动
 * 2.0.81 修复弹出按钮OK和Cancel的错位
 * 2.0.9 列表加图标
 * 2.0.10 增添按钮会紧接在 列表选中项 的后面
 * 2.0.11 修复列表没有图标的按钮显示错误问题
 * 2.0.12 增加移动组按钮
 * 2.0.13 双击列表2取消选择，修复:新建按钮后列表2不显示图标问题
 * 2.0.14 增加单栏导入导出功能
 * 2.0.15 配置修改：按钮大小的设置后加自定义BarID，若使用多个脚本，不再使用同一份配置
 * 2.1.0 UI调整,修复导出单个工具栏的问题(XML内容必须全部在一对标签内)
 * 2.1.1 增加跨组导入单个按钮XML信息
 * 2.1.2 增加导入配置/导入工具栏头标签判断，区分导入单个工具栏和整个脚本配置
 * 2.1.3 导入按钮增加头标签判断
 * 2.1.4 新增滑竿切换不同工具栏
 * 2.1.5 修复滑块工具条
 * 2.1.6 列表高度写入配置文件，下次打开是上次的高度
 * 2.1.7 记录jump和keep
 * 2.1.8 修复面板调整颜色功能
 * 2.1.9 调整调整颜色功能
 * 2.1.10 添加设置窗口存在判断，如果存在就阻止显示
 * 2.1.11 微调界面
 * 2.1.12 增加ctrl右键键强制更新设置窗口显示记录
 * 2.1.13 添加图片二进制提取
 * 2.1.14 ctrl 右键双击面板可打开设置面板,也增加hasSetting判断
 * 2.1.15 导入配置查看有没有多列列表
 * 2.1.16 修改格式
 * 2.1.17 修改格式(将writee和readd方法改名)
 * 2.1.18 修改样式,UPDOWN按钮添加监听,浮动条修改文字到前面
 * 2.1.19 增加自定义代码编辑器
 * 2.1.20 修改控件
 * 2.2.0 鼠标放到按钮上添加缩放响应
 * 2.3.0 重写函数，将原型写法去掉,因为会导致数据写入错乱。猜测是其他扩展修改了原型或者原型写法对AE本身有问题
 * 2.3.1 重写函数，尝试修复切换按钮时数据错误
 * 2.3.3 格式调整，代码完全去掉三引号。切换按钮时代码框信息自动篡改待解决...
 * 2.3.4 调整格式，撤销组按钮修改
 * 2.3.5 修了浮动条的位置，现在打开脚本会自动出现
 * 2.3.6 添加一键创建合成用于做图标
 * 2.3.7 调整图标
 * 2.3.81 目前可以编码图标保存到桌面并获得二进制编码。可以中键▽按钮建立图标模板（仅限AE23，因为蒙版模式更改了）。鼠标放上图标会放大。脚本文件自动裁切文件名获得序号id
 * 2.3.9 scrollbar位置信息存入AE，现在可以自动记录滚动条位置
 * 2.3.91 漏写了保存设置的id信息
 * 2.3.92 修复多个工具栏滚动条位置一样（序号写错了）
 * 2.3.10 重新计算右边scrollbar的距离，现在最下排的按钮移动到最顶上会贴合脚本的窗口
 * 2.3.101 修复滚动条记录位置
 * 2.4.0 增加了脚本可以转为文件的功能。因AE25的onDraw函数drawString不会再使得文字错位，所以判断AE版本号高于25就采用onDraw文字。新增js代码转存为本地jsx文件功能。
 * 2.4.1 追加效果可以批量选区然后追加了
 * 2.4.2 设置按钮图案修改，此按钮长宽不一致的时候图案变为"·"
 * 2.4.3 添加效果后自动选中效果,记录过程也加入选中效果
 * 2.4.4 最后一个按钮alt左键会切换滚动条
 * 2.4.5 右边滚动条自动隐藏,编辑框有亮色和暗色可调节
 * 2.4.6 工具条加上鼠标拖拽，拖动时位置可能会出现抖动q问题。调整UI。
 * 2.4.7 按钮文字没设置图标的情况下文字可以高亮显示
 * 2.4.8 修了粘贴图标失败的错误
 * 2.4.9 按钮右键按钮弹出位置识别屏幕位置，点击位置靠下则面板上移一段距离
 * 2.5.0 调整对齐位置
 * 2.5.1 修复以前旧版本有的图标角标显示
 * 2.5.2 选择的效果有多行表达式不能正常识别，目前修复识别\r?\n后替换掉字符
 * 2.5.3 调整显示bug，设置面板延迟方式调整
 * 2.5.4 菜单尺寸调整
 * ...修复bug
 * 2.5.7 调ui,margins改小
 * 2.5.8 调整ui位置
 * 2.5.9 按钮加个高亮
 * 
 */
(function (obj) {
    try {
        $.appEncoding = 'GBK'; //设置编码为GBK，防止中文乱码
        Sp_toolbar(obj);
    } catch (err) { alert(err.line.toString() + "\r" + err.toString()); }
    function Sp_toolbar(thisObj) {
        //$.global.cout =
        var cout = new OperatorOverload(function (operand, rev) {
            if (!rev) $.writeln(operand); else alert(operand);
        }, '<<');
        function OperatorOverload(call, operator) {
            var meta = [
                //Unary operator
                '+', '-', '~',
                //Binary operator
                '*', '/', '%', '^', '<', '<=', '==', '<<', '>>', '>>>', '&', '|', '==='
            ];
            var toObject = function () {
                for (var i = 0; i < arguments.length; i++)
                    this[arguments[i]] = true;
                return this;
            };
            var metaObj = toObject.apply({}, meta);
            if (!metaObj.hasOwnProperty(operator))
                return alert('Operator not supported.');

            this.call = call;
            this[operator] = function (operand, rev) {
                return this.call(operand, rev);
            };
            return this;
        }
        /**截取文件名的id号， ！明确区分大小写 ！*/
        function scriptName() {
            var name = decodeURI($.fileName);
            name = name.substring(name.lastIndexOf("/") + 1, name.length);
            return name;
        }
        function getTheFileNameStrIndex(sptName, str) { //裁切文件名获得Bar序号
            var id = sptName.indexOf(str);
            return id;
        }
        /**用户参数 */
        var BarID = getTheFileNameStrIndex(scriptName(), 'Bar') == -1 ? 1 : scriptName()[getTheFileNameStrIndex(scriptName(), 'Bar') + 3];
        // alert(scriptName()[getTheFileNameStrIndex(scriptName(),'Bar') + 3])
        var floatBarPos = [800, 500];
        var gf = { // <| 各项参数定义 |>
            change: String(new Date()),
            version: "2.5.8",
            news: '\
            # By GFred: \n\
            # 更新: \n \
            *修复工具栏间隙\n \
            *增加设置面板高度可调节\n \
            *增加夸组复制功能\n \
            *配置文件双重备份\n \
            *列表加图标\n \
            *增添按钮会紧接在 列表选中项 的后面\n \
            \n\
            # 记录:\n \
            * 2.0.3 面板拉长\n \
            * 2.0.4 多栏的下拉按钮改小\n \
            * 2.0.5 增加切换工具栏的按钮，修改图标\n \
            * 2.0.6 增加调整高度滑块，按钮变回边框\n \
            * 2.0.7 多写了一个substring，按钮显示的字只能三个，改掉了\n \
            * 2.0.8 增加了夸组复制移动\n \
            * 2.0.81 修复弹出按钮OK和Cancel的错位\n \
            * 2.0.9 列表加图标\n \
            * 2.0.10 增添按钮会紧接在 列表选中项 的后面\n \
            * 2.0.11 修复列表没有图标的按钮显示错误问题\n \
            * 2.0.12 增加移动组按钮\n \
            * 2.0.13 双击列表2取消选择，修复；新建按钮后列表2不显示图标问题\n \
            * 2.0.14 增加单栏导入导出功能\n \
            * 2.0.15 配置修改: 按钮大小的设置后加自定义BarID，若使用多个脚本，不再使用同一份配置\n \
            * 2.1.0 UI调整,修复导出单个工具栏的问题(XML内容必须全部在一对标签内)\n \
            * 2.1.1 增加跨组导入单个按钮XML信息\n \
            * 2.1.2 增加导入配置/导入工具栏头标签判断，区分导入单个工具栏和整个脚本配置\n \
            * 2.1.3 粘贴按钮代码增加判断是否有头标签\n \
            * 2.1.4 新增滑竿切换不同工具栏\n \
            * 2.1.5 修复滑块工具条\n \
            * 2.1.6 列表高度写入配置文件，下次打开是上次的高度\n \
            * 2.1.7 记录jump和keep\n \
            * 2.1.8 修复面板调整颜色功能\n \
            * 2.1.9 调整调整颜色功能\n \
            * 2.1.10 添加设置窗口存在判断，如果存在就阻止显示\n \
            * 2.1.11 微调界面\n \
            * 2.1.12 增加ctrl右键强制更新设置窗口显示记录\n \
            * 2.1.13 添加图片二进制提取\n \
            * 2.1.14 ctrl 右键双击面板可打开设置面板,也增加hasSetting判断\n\
            * 2.1.15 导入配置查看有没有多列列表\n\
            * 2.1.16 修改格式\n\
            * 2.1.17 修改格式\n\
            * 2.1.18 修改样式,UPDOWN按钮添加监听,浮动条修改文字到前面\n\
            * 2.1.19 增加自定义代码编辑器\n\
            * 2.1.20 修改控件\n\
            * 2.2.0 鼠标放到按钮上添加缩放响应\n\
            * 2.3.3 格式调整，代码完全去掉三引号。切换按钮时代码框信息自动篡改待解决...\n\
            * 2.3.4 调整格式，撤销组按钮修改\n\
            * 2.3.5 修了浮动条的位置，现在打开脚本会自动出现\n\
            * 2.3.6 添加一键创建合成用于做图标\n\
            * 2.3.7 调整图标\n\
            * 2.3.81 目前可以编码图标保存到桌面并获得二进制编码。可以中键▽按钮建立图标模板（仅限AE23，因为蒙版模式更改了）。鼠标放上图标会放大。脚本文件自动裁切文件名获得序号id\n\
            * 2.3.9 scrollbar位置信息存入AE，现在可以自动记录滚动条位置\n\
            * 2.3.100 重新计算右边scrollbar的距离，现在最下排的按钮移动到最顶上会贴合脚本的窗口\n\
            * 2.3.101 修复滚动条记录位置\n\
            * 2.4.0 增加了脚本可以转为文件的功能。因AE25的onDraw函数drawString不会再使得文字错位，所以判断AE版本号高于25就采用onDraw文字。新增js代码转存为本地jsx文件功能。\n\
            * 2.4.1 追加效果可以批量选区然后追加了\n\
            * 2.4.2 设置按钮图案修改，此按钮长宽不一致的时候图案变为"·"\n\
            * 2.4.3 添加效果后自动选中效果,记录过程也加入选中效果\n\
            * 2.4.4 最后一个按钮alt左键会切换滚动条\n\
            * 2.4.5 右边滚动条自动隐藏,编辑框有亮色和暗色可调节\n\
            * 2.4.6 工具条加上鼠标拖拽，拖动时位置可能会出现抖动问题。调整UI。\n\
            * 2.4.7 按钮文字没设置图标的情况下文字可以高亮显示\n\
            * 2.4.8 修了粘贴图标失败的错误\n\
            * 2.4.9 按钮右键按钮弹出位置识别屏幕位置，点击位置靠下则面板上移一段距离\n\
            * 2.5.1 修复以前旧版本有的图标角标显示\n\
            * 2.5.2 选择的效果有多行表达式不能正常识别，目前修复识别\'\\r\\n\'后替换掉字符\n\
            * 2.5.3 调整显示bug，设置面板延迟方式调整\n\
            * 2.5.4 菜单尺寸调整\n\
            * ...修复bug\n\
            * 2.5.7 调ui,margins改小\n\
            * 2.5.8 调整ui位置\n\
            \n\n',
            listSize: [33, 33]
        };
        var ICON = { //小人图标
            // nullImg: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x01\u00F6IDATHK\u00AD\u0096\u00EBv\u00820\x10\u0084\u0097\b\b\u00B4V}\u0089\u00FE\u00E89}\u00FF\u00B7\u00EA\u00BD\x18\x11\u00A1Lv\u00A5\\\u0092\u00D0\x02\u00DF\x1F\u00D9\x1C\u00E3\u008C\u0099uM\u00F0\u00F8\u00F4\\\u0093\u00B0\u00D9D\u0094e\u00C7\u00E6)\u00E0\x05\x0BUUR\u009E\u00BFP]\u00B7\u00DB\x1A\x02\u00B3\x0F\u00FB}\u00E4\u00F9+]\u00AF\x05)\u00A9)\b6\u0094\u00A6\x07<\u00F1\u0082\u0085\u00BA\u00AE\u00E8tz\x1B\b\x12%\u00C9\u00C3\u00A4\u00A0\u00D6\x1FF\x10\x18\u00D1 \u0080\u00D3C\u00F3\u00DAz\u00B0P\x1B\u00C1\u00AA\u00BAJ\u00CD\u00C4\u00F1\x1DEQ\"\u0095\u009D\u00A2\u00C8\u00E9r9I%\u00A2I\u00B2'\u00A5B\u00B3\u00E0\u0082\u009D^\u00A4b\u00C20\u00A1\u00ED\u00F6^*;ey\u00A6\u00F3\u00F9S*FaS\x18n\u00A5\u00B4S\x14\u00DF\u008DS-\x15\u0083\u00E3L\u00D3\x07\u00A9\u00EC \x7F\u00AD\u00DF\u00A5\u00BA\x11\u0090\u00C2\u00F1\u00F8(K\u00DD8\u00FD\u0092\u008AA\fK\u00F2\u00F7\u0085h\u008E\x13\u00C7\u00DA\u0085\u00F3?.\u00CA\u00DF\u00B9\u00D3\u00EDty\u00FEVQ\b\u00B1`%+\u00CCZ\u00F9[E\x11\u00FE\u00D0)\u008Ee:\x7Ft\u00EAt\u00FE#Ql\u00C2\u00E6.p\u008A\x06\u00F0\u00C1\u00F9\u00F7;\x15\u00F9Cp\u0098\x7F\u00AF\u00C2\u00B1\u00E0x\u00BA(\u00B5dR\u00ED\u00AD\u0093\u00AA\x15uu\u00AA\u00CDi\u00979\u00F9\u009BOCkc#Z\u00BD\u00CB\u00DCN\u009D\u00CA_\u00B9\u009D\u00EE&;\u0095\u00F3\x1Fw\u00EAT\u00FE\n\u00E1c\\u\u0089\u00A2\u00B4q\u009AIegI\u00FEj\u00DC\u00A9\u00F1\x1F;u~\u00FE\u00BDw\u00B0\u00D3\u00BDTv\u00D6\u00C8\u00BF\x15\u00E5\x1F\u00B1\x7F\u00A6\u00AE\u0095\x7F\u00AB\u0080o\u0088o\u00EAc\u00AD\u00FC\u008D(_7b\u00B3\u00E0\x02\x7F\u00C4k\u00E5\u00DF\u00FC\u009Ff\u00C6\u00AD\x0F\\5p\u00E5\u00E8\u00B2$\u00FF\u00E6\u00E6\u00B0\u0093G;\u00B8Li\u00DD\u00BFnp\u00FEs'\u00D5\u00AE\u00DF\u00BDC\u00D8)\u0086x\u00DF)\u00E7?\u00D5\u00A9\u00EE\u00FC\u009D\u00A2.\u00A7k\u00E4\u00EF\x14\u0085\u00E0\u00D0\u00E9Z\u00F9[E\u0091\u00E1\u00EDb|\x03\u00BF\u00C3y\u00F9\u008F'\u00D5H\u0094/\u00C6C\u00A7\u00A1\u00998>\u00DC\u00F9\x1FF\u00F9\u00F7D\u00CB\u00B20yt\u00F9\u00EDT\u00DF\x10\u00FFO\u00FED?F\u00CF\u008E\u00D0\x00\u00E6Bj\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            nullImg: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1D%00%00%00%1D%08%06%00%00%00V%C2%93g%0F%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%C3%B6IDATHK%C2%AD%C2%96%C3%ABv%C2%820%10%C2%84%C2%97%08%08%C2%B4V%7D%C2%89%C3%BE%C3%A89%7D%C3%BF%C2%B7%C3%AA%C2%BD%18%11%C2%A1Lv%C2%A5%5C%C2%92%C3%90%02%C3%9F%1F%C3%99%1C%C3%A3%C2%8C%C2%99uM%C3%B0%C3%B8%C3%B4%5C%C2%93%C2%B0%C3%99D%C2%94e%C3%87%C3%A6)%C3%A0%05%0BUUR%C2%9E%C2%BFP%5D%C2%B7%C3%9B%1A%02%C2%B3%0F%C3%BB%7D%C3%A4%C3%B9%2B%5D%C2%AF%05)%C2%A9)%086%C2%94%C2%A6%07%3C%C3%B1%C2%82%C2%85%C2%BA%C2%AE%C3%A8tz%1B%08%12%25%C3%89%C3%83%C2%A4%C2%A0%C3%96%1FF%10%18%C3%91%20%C2%80%C3%93C%C3%B3%C3%9Az%C2%B0P%1B%C3%81%C2%AA%C2%BAJ%C3%8D%C3%84%C3%B1%1DEQ%22%C2%95%C2%9D%C2%A2%C3%88%C3%A9r9I%25%C2%A2I%C2%B2'%C2%A5B%C2%B3%C3%A0%C2%82%C2%9D%5E%C2%A4b%C3%820%C2%A1%C3%AD%C3%B6%5E*%3Bey%C2%A6%C3%B3%C3%B9S*FaS%18n%C2%A5%C2%B4S%14%C3%9F%C2%8DS-%15%C2%83%C3%A3L%C3%93%07%C2%A9%C3%AC%20%7F%C2%AD%C3%9F%C2%A5%C2%BA%11%C2%90%C3%82%C3%B1%C3%B8(K%C3%9D8%C3%BD%C2%92%C2%8AA%0CK%C3%B2%C3%B7%C2%85h%C2%8E%13%C3%87%C3%9A%C2%85%C3%B3%3F.%C3%8A%C3%9F%C2%B9%C3%93%C3%ADty%C3%BEVQ%08%C2%B1%60%25%2B%C3%8CZ%C3%B9%5BE%11%C3%BE%C3%90)%C2%8Ee%3A%7Ft%C3%AAt%C3%BE%23Ql%C3%82%C3%A6.p%C2%8A%06%C3%B0%C3%81%C3%B9%C3%B7%3B%15%C3%B9Cp%C2%98%7F%C2%AF%C3%82%C2%B1%C3%A0x%C2%BA(%C2%B5dR%C3%AD%C2%AD%C2%93%C2%AA%15uu%C2%AA%C3%8Di%C2%979%C3%B9%C2%9BOCkc%23Z%C2%BD%C3%8B%C3%9CN%C2%9D%C3%8A_%C2%B9%C2%9D%C3%AE%26%3B%C2%95%C3%B3%1Fw%C3%AAT%C3%BE%0A%C3%A1c%5Cu%C2%89%C2%A2%C2%B4q%C2%9AIegI%C3%BEj%C3%9C%C2%A9%C3%B1%1F%3Bu~%C3%BE%C2%BDw%C2%B0%C3%93%C2%BDTv%C3%96%C3%88%C2%BF%15%C3%A5%1F%C2%B1%7F%C2%A6%C2%AE%C2%95%7F%C2%AB%C2%80o%C2%88o%C3%AAc%C2%AD%C3%BC%C2%8D(_7b%C2%B3%C3%A0%02%7F%C3%84k%C3%A5%C3%9F%C3%BC%C2%9Ff%C3%86%C2%AD%0F%5C5p%C3%A5%C3%A8%C2%B2%24%C3%BF%C3%A6%C3%A6%C2%B0%C2%93G%3B%C2%B8Li%C3%9D%C2%BFnp%C3%BEs'%C3%95%C2%AE%C3%9F%C2%BDC%C3%98)%C2%86x%C3%9F)%C3%A7%3F%C3%95%C2%A9%C3%AE%C3%BC%C2%9D%C2%A2.%C2%A7k%C3%A4%C3%AF%14%C2%85%C3%A0%C3%90%C3%A9Z%C3%B9%5BE%C2%91%C3%A1%C3%ADb%7C%03%C2%BF%C3%83y%C3%B9%C2%8F'%C3%95H%C2%94%2F%C3%86C%C2%A7%C2%A1%C2%998%3E%C3%9C%C3%B9%1FF%C3%B9%C3%B7D%C3%8B%C2%B20yt%C3%B9%C3%ADT%C3%9F%10%C3%BFO%C3%BED%3FF%C3%8F%C2%8E%C3%90%00%C3%A6Bj%00%00%00%00IEND%C2%AEB%60%C2%82",
            littleMan: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1D%00%00%00%1D%08%02%00%00%00%C3%99%C3%B1%C3%B0X%00%00%00%09pHYs%00%00%0E%C3%84%00%00%0E%C3%84%01%C2%95%2B%0E%1B%00%00%0C6iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.6-c145%2079.163499%2C%202018%2F08%2F13-16%3A40%3A22%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3Atiff%3D%22http%3A%2F%2Fns.adobe.com%2Ftiff%2F1.0%2F%22%20xmlns%3Aexif%3D%22http%3A%2F%2Fns.adobe.com%2Fexif%2F1.0%2F%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%20CC%202019%20(Windows)%22%20xmp%3ACreateDate%3D%222019-10-29T11%3A12%3A45%2B08%3A00%22%20xmp%3AMetadataDate%3D%222019-10-29T12%3A15%3A28%2B08%3A00%22%20xmp%3AModifyDate%3D%222019-10-29T12%3A15%3A28%2B08%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3Af1d946b6-eb1a-b346-a75d-7d616ffc6dfe%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Acc390909-4591-924e-ac58-c9f828cecded%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3A14a14579-45ad-624d-b8cc-e3ecd93ca0cc%22%20photoshop%3AColorMode%3D%223%22%20tiff%3AOrientation%3D%221%22%20tiff%3AXResolution%3D%22960000%2F10000%22%20tiff%3AYResolution%3D%22960000%2F10000%22%20tiff%3AResolutionUnit%3D%222%22%20exif%3AColorSpace%3D%2265535%22%20exif%3APixelXDimension%3D%2229%22%20exif%3APixelYDimension%3D%2229%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A14a14579-45ad-624d-b8cc-e3ecd93ca0cc%22%20stEvt%3Awhen%3D%222019-10-29T11%3A12%3A45%2B08%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%20CC%202019%20(Windows)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A3edd453c-3f45-2442-87ee-0f2b6921cf80%22%20stEvt%3Awhen%3D%222019-10-29T11%3A14%3A13%2B08%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%20CC%202019%20(Windows)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A1fc9d275-be3f-6645-a7c7-a8fd19e46984%22%20stEvt%3Awhen%3D%222019-10-29T12%3A15%3A28%2B08%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%20CC%202019%20(Windows)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22converted%22%20stEvt%3Aparameters%3D%22from%20application%2Fvnd.adobe.photoshop%20to%20image%2Fpng%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22derived%22%20stEvt%3Aparameters%3D%22converted%20from%20application%2Fvnd.adobe.photoshop%20to%20image%2Fpng%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3Af1d946b6-eb1a-b346-a75d-7d616ffc6dfe%22%20stEvt%3Awhen%3D%222019-10-29T12%3A15%3A28%2B08%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%20CC%202019%20(Windows)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3A1fc9d275-be3f-6645-a7c7-a8fd19e46984%22%20stRef%3AdocumentID%3D%22xmp.did%3A14a14579-45ad-624d-b8cc-e3ecd93ca0cc%22%20stRef%3AoriginalDocumentID%3D%22xmp.did%3A14a14579-45ad-624d-b8cc-e3ecd93ca0cc%22%2F%3E%20%3Cphotoshop%3ATextLayers%3E%20%3Crdf%3ABag%3E%20%3Crdf%3Ali%20photoshop%3ALayerName%3D%22%C3%A5%C2%9B%C2%9B%C3%A4%C2%B8%C2%AA%20%C3%A6%C2%96%C2%87%C3%A5%C2%AD%C2%97%22%20photoshop%3ALayerText%3D%22%C3%A5%C2%9B%C2%9B%C3%A4%C2%B8%C2%AA%20%C3%A6%C2%96%C2%87%C3%A5%C2%AD%C2%97%22%2F%3E%20%3Crdf%3Ali%20photoshop%3ALayerName%3D%22%C3%A9%C2%AB%C2%98%C3%A6%C2%96%C2%AF%22%20photoshop%3ALayerText%3D%22%C3%A9%C2%AB%C2%98%C3%A6%C2%96%C2%AF%22%2F%3E%20%3C%2Frdf%3ABag%3E%20%3C%2Fphotoshop%3ATextLayers%3E%20%3Cphotoshop%3ADocumentAncestors%3E%20%3Crdf%3ABag%3E%20%3Crdf%3Ali%3Eadobe%3Adocid%3Aphotoshop%3Ad51c7ff8-9701-11e7-9e74-ecd6ecacbc24%3C%2Frdf%3Ali%3E%20%3Crdf%3Ali%3Eadobe%3Adocid%3Aphotoshop%3Afad180c6-96fb-11e7-9e74-ecd6ecacbc24%3C%2Frdf%3Ali%3E%20%3C%2Frdf%3ABag%3E%20%3C%2Fphotoshop%3ADocumentAncestors%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C3%A8DD%5B%00%00%01LIDATH%C2%89%C3%85%C2%95%C2%B1J%03A%10%C2%86%C3%B3T%C3%B6%C2%B6%C2%82%C2%87%C2%8D%C2%A5%06T%C3%8C%1B%C2%88p%C2%AD%C2%B5%C2%B6%16b%11%C2%85%C2%80b%24p%26%C3%B8%0E%C2%A2%C2%85%C2%82%20%C2%A2%C2%86%13D%C2%83%24%C2%85%C3%A6v%C3%83%C2%85%C3%B3%C2%979%C3%8F%C2%91q%C2%B7%10%C3%A7r%7C%C2%81a%C3%A6%C2%9F%0F%C2%92%C3%9D%23%C2%95L%C3%A7%C2%A9%C3%A0S%0DV%1F%C2%AB%C3%9B%20%C3%99o%15%C3%88%C2%8E%C3%ACS%C2%8D%C3%B5%02%C3%AA%C3%A4%C3%9E%C3%8F*I%C2%81%C2%B4%C3%B8!%C2%8B%C2%B4%2B%7B%07%C2%8DN%C2%96%C2%8E%C3%80xd%C3%81%C3%9F%C3%AC%C3%AF7!(%C3%85%C3%AB9%C2%9F%C3%AC%C3%8D%02%C3%AAd%C3%86%C2%80A%23%02%C2%B6%C3%9E%06yf%C2%98%00%C3%B2%12%C3%8A%5E%C3%8Fi%C2%B8%C3%AE%C3%9F%C2%8F%C3%A9%C3%9E%09%C2%A0%C2%BA%7B%3A%0B%C3%8A%C3%B2%C3%B2%C2%B4%C2%A9%C2%B7%C3%8D%C3%977%C3%A5S%C3%AA%C3%B3%C2%A9D%C3%99%5Bl%C3%B2%C2%BB-7%C2%A9%C3%833%C2%AE%C2%A4%C2%B2%C3%B7%C3%BBV%C3%B5%C3%AE%C3%81%C3%B4%C3%94%0C%18%C2%BF%C3%84%C2%80v%C2%A8%C3%8F%C2%A1%0C%C3%AF%C3%B0_%C3%8C%C3%A7%C2%A5%C3%BA%3F%C2%BD%C3%B9%C2%BB(%5C%1C%C2%99%C2%99%C2%9C%C3%B7*%C3%9C%02~%C3%AF%C3%AD%C3%9A%26%C2%90%C3%86R%C2%BC%C3%A8.%055%C3%A0%3A%25%17%C2%AE%C3%B7%5B%C3%99%C2%BB0W%5B%C2%89%3A%40%C3%9Ey%C3%8ES%C3%B3%08%C2%BC%1E%1E%039%C3%A5%C3%BFF%C3%8A%5E%C2%92%C3%BE%0A%C3%A5%C3%96w%C2%9B%C3%A0%C3%B2%2C%00%17%C3%A7%C3%B3%20%C3%9Ci%01%C2%9A%C3%B2%24%C3%95%C2%93%C3%B0R%C3%AE%C3%B9%20%02%C2%B6%17%03s%C2%BD%01%C3%A2%C2%B8%0Bl%C3%BF%0E%C2%A4%C3%BD%07%C2%B0%18%2C%03%C2%BE%C2%AB%C3%AC%C3%95x%3E%00i%C3%BA2A%40%C2%A5s%C2%80%00%00%00%00IEND%C2%AEB%60%C2%82",
            Click: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\\IDATHK\u00ED\u00D7\u00A1\x15\u00800\x10\u0083\u00E1\u0094-\u00B8QA\u00F0\x10\u00B0\rs \x18\x02\u00D5\x0E\u0081\t\u00E6VHk\u00F2\u00A9\u00BC3\u00BF\u00BEr\u00B7\u008F\u00ADV\u00F42G\u00A0\\\u00CF\u00CBc\u00D9\u00F2\x04\u0090\u00CC\u00A5\u00B1\u009E;\u00A6\u00DC]9*\u00E5\u00A8\u0094\u00A3R\u008EJ9*\u00E5\u00A8\u0094\u00A3R\u008EJ\r\u0089\x0E\u00F8e\x02?re\x16\u00D1x\n\u00B4\u00C6\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            Ctrl: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x03\u00A5IDATHK\u00ED\u0097YH\u0094Q\x14\u00C7\u00FF\u00DF\u008C\u00DB\u00B8\u00E4\u008C\u00D9f\x0F\x11\u00D2b\x0B\x19\u00D1\u008Ed\x16m\u00D8\u0086FJAj\u00A1\u00B4<\u00B4\u0088\u00ED\u0094\u0095\x1A-\x0F\u00EDPD\u00D0\u00A3mP\u00F4\x12\u00D9nA\u00D2\u00A2efee6f\u008B\u009A\u00CB\u00CC\u00A8\u00E3\u00CCt\u00CE\u0099\u00EF\u00B3!\u0094\u008A0\x1F\u00EA\x073\u00F7\u00DEs\u00EF\u00FD\u00CE=\u00FF{\u00CE\u00C7\u008Cr\u00AF\u00B2\u00C5Ui6\u00E3o\u00D1',\f\u00CA\u00B9\u00827\u00AE\u00ACM\u00DBT\x13\u00E0r\u00B9\u00D4^\u00E7\u00B09;\x13:\u00B5\u00FFW\u00F9\u00EF\u00B4S\u00E9z\u00A7>>\u00DE\x183r(fM\u0099\u0080\u00D1\u0091C\u00E0\u00E3\u00ED\u00A5\u00CE\u00FC\x19A\u0081\u00FEj\u00CFM\u009B\u00D3\u00E9\u00D1\u00E3\u0090w\u00E60\x0E\u00EEZ\u008B\x1D\x19\u00A98\u0094\u00B5\x0Eyg\u008Fbi\u00E2\x1Cu\u0085\x1B>\u00D0\u008A\u00A48u\u00F4sF\f\x1D\u0080\x1B\u00E7\u008Faq\u00FC\f\u00D5\u00A2:\r\u00EB\x15\u008A\u00ADkS`\u00F0\u00F3\u0085\u00AD\u00B9\x05\u0085\u00C5/Q\u00D7\u00D0H\u0091{aEr\x1C\u0082\u0083\x02\u00DC\u008Bu:l]\u0093\u0082Eq3`\f\x0E\x12\u00DB\u00CF\u00E8\u00D1\u00DD\u0088V\u0087\x03\t\u00F3\u00A6\u00A9\x16@\u00F4KN\u009C\r__\x1F4\u00B7\u00D8\x11\u00BFl\x03\u00AAk\u00EAdr\u00D8\u00E0p\u0098\u008CAt\x00\x0BB\u008C\u00DD\u0090\u00B40\x16\x0E\u00A7\x13\u008A\u00A2\u00E0\u00C2\u00A9=\u00A8\u00A9\u00ADCjz\x0E\u00AA\u00A9\u00ED\u00DB\u00BB\x07j\u00EB\x1A`\u00B55\u00C9^//=Z[\x1Dp8\u009C\u00D2\u00F2~\rq:i\u00DCH\u00E8\u00E8A\u008F\u009F\u00BEhs\u00C8<}^\u00A6\u00F6\u0080\u00D5\u00A9\t\u00985u\u00A2\u00AC\u00E3\u00B7\x16\u00B7\u00EC\u0088\u00EF\u00AB\x1B)\u0091{<\x0B\u0085\u00CF^\u00A1\u00EAS5\u00A2\u00C6FJ\x10\u00E9\u00DB\x0F\u00A0\u00D1b\u0083\u0093\x0E\u00CA*\u00F1A\x18\u0091W\u00BB\u00E8\u00FB\u008F\u009EI\u00DB\x1E\u0097\u00AE\u00DC\u00C6\u00FB\u00CA\u008Fh\"\u00F9-V\x1B\u00B6\u00ED;\u00819K\u00D2\u00F1\u00B6\u00E2\x03\u00BA\u009B\u0082\u00C9n\u00C7\u00F0\u0088p\u00CC\u008C\x19/\th\u00B7\u00DB\u00A1\u00D7\u00EB\u00E5\u0080\u00DA\u0087\u00AF\u008F\u00D1\u00F1\u0089\u009Ddp\u0090\u00EE_I\u009E\u008E(x\\\u0082\u00F5;\x0F\u00A3\u0085\x1E\u00C6<))\u00C3\u00A7/\u00B5\u00D2\u00E7kq\u00B9\u009C\u00E2\u00A4\u0082\x0E\u0096\u0096\u00B1\x1BQs\u00D3p\u00F3\u00DEC\u0099g8\u00DA6\u00A7\u00ECP\u00A1\u008EB\u00E1\x1B\fncG8\u009C\u00BC\u0096\u00E5\u00A5{!\x07\x1A\x1C9\u00DB\u00AC\u00D4n\u00CA>\u0086\"\u0092YC\u009B\u00F3\u00DC#\u00F2\u0096\u009B\u00AB\u00E4\u008E\u00A6E\u008F\x15cG\u00F0Ci\u0099|\x02\x03\f\u00AA\x15\u00A8\u00A7D#\u00C9$\u00C1\x02\u00FC\u00FDT\u00AB\x1B\u008EP\u00C3O\u008B\u0094\u00BF\u00AE\u00E7?\x10y\x07\u0085\u00F7\u00C3\u00E4\u0089\u00A3d\u00A2=,\u0094\u0099\u008A\u00A2\x13\x19CC\u008C\u00AA\x15h\u00B0X\u00DD\u0089Bv\u0093G\u00962V[\u00B3\u00DA\x03\u00BC=\x13)\u00F7b\u009EL\u00FAQ\u00C6em\\\u008E\u00F8\u00D8\x18\u0089\u009C\u00EBwtd\u0084,d8\"\u00BD^\x07_zsq\u00D2\u00F8\x1B\u00DCQ5Sr\u00F1zoJ\u00A0@\u00FF\u00EF\n0\\F\u00BC\u00C7\x13\x19q\x02\u00AD\u00DC\u00B8W\u00F4g\u00C7k\u00D2\x12q\u00F7\u00F2I\u00E4\u009E\u00C8\u00C6\u0091\u009C\f\f\x19\u00D8_\x16s\x06>\x7F\u00F9V\u00A2J\u009C?\x1D\u00D7\u00CE\x1EArB\u00AC\u00CC\u00E5\x17\x14I\r\u00D77Zd\u00AC\u00D1H*\u00F0>.\x17V\u008Ai;Bq\u00E9k$\u00A4m\u00A1\u00DA|-c>=_~Y\u00B9\x19\u00AF\u00DET\u0088\u008D\u00D9}\u00E8\u00B4Z\u00CB\u0094\u00F1\u00E4D\u00CB\u00E0\u00F4\u00CC\u0083\u0098\u00BA`\x15\u00AE\u00DE*\u0090\u00B1';\u00F6\u009F\u00A4\u0092\u00BB\u0083\u00CA\x0F\u009Fe\u00DC\u00EE\u00CF\x15\x13\u00BD\u00E2z\u0086\u009A\u00A4\x14\u00CA\u00DFW\u0089\u00CD\x13\u0096\u00B2\x0FI_\u00F3\u00B5\x1E\u00B6\u00A6\u00EFw\u00F6+t\u00F8s\u0085\u00EF\u00A1\u00B4\u00EC\u009D\x14\u00FE\u008F\x0E\x19.3s\u00D5\u00E7\u00DFv\u00A8\u00D1\u00AE\u00D3\u00CE\u00E6\u00BF\u00D3N\u00E5\u00DFq\u00DA\x05\u00FFe\u00C2\u00F0\rpY\u008C\u00B1\u0080\u00A1/7\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            Shift: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x03\u0094IDATHK\u00ED\u0097yH\u0093a\x1C\u00C7\u00BF\u00EF\u00F6n\u00DA\u00D4\u00E9f\u009A\u00ADeZ\u00D9eEd\x07\x19\x1D\u0096\u0091aa\u0097\x1D\u00A4`AE\x07(\u00A5XJ\u00A5T\u00D2i\x07RV\u00E2\x1Fe\tEA\u00D9\x05\u00DDT\x1AdR !\x15\u00DD\u00AE\u00E61\u009D\u00E9\u009C\u00EE\u00EA\u00F9=\u00BD\u00EB\u0084\u00FAk\u00F5G~\u00C6\u00CB\u00DE\u00E7x\u009F\u00DF\u00F5}\u009Ew\x13*\f\u009D.Cm-\u00FE\x16=u:\bg\x1F\u00BErm\u00CF\u00DA\"u\x01.\u0097K\u00BA\u00F3\f\u00D9y\u00B9\u0090I\u00F7\x7F\u0095.\u00A3\x1E\u00A5\u00CB\u00A8G\u00E1FEQ\u008E\u00C8\u0081}\u00D1/L\u008Fn\u00DE^|\u0080\u00F0\u00F3U!+5\x05\u00C1\u00DD5R\u00CF\u00EF\u00D1\u00EB\u0082qxg&\u00CE\x15\u00EF\u00C4\u00DAe\u0089R\u00EF\u00AF\u00C8\x02TJ\u0094\x1D\u00DF\u008B\u00C2]\u0099(\u00CA\u00CF\u00C2\u0085\u00E3{\u00B02y\x0E\x1F\u008C\u0089\u008E\u00C2\u00BC\u00F8\x18\u00CCe\u00D7\u00CF\u00F8\u00A8\u00BCq\u00B5\u00F4\x00\u00D2W/\u0091z\u0080\u00FC\u00DC4\u008C\x1E1\u0098\u008FY;:\u00A5^ 7c\x05\u0092\u00E6\u00C7I-ftx\u00A8\x16\x01j_46\u0099\u00D1h2C\u0094\u00CB\u0091\u009C8\x03\u0081\x1A\x7F\u0084\u00EAC \b\x02LM-\u00D2\u00F4o\u00C8d2~z\u00B9\u009C\u00DFN0?\x1F\x15\u008C\u00F5&\u00CCLZ\u008F\u00A2\u0093\u00E7y\x1F9\x10=j\x18\x16\u00CC\u008AE\u00CC\u00F8(\u00C8e\x02\u00E4\x1B\u00B37\u00E58\u00ED6,O\u00CFc\x13/\u00E0\u00C6\u00DDJ\u0098[Z\u00F1\u00E0Q5b'\u008E\u00C1\u0090\x01\u00E1xPU\r\u00A5B\u0081\u00F0P\x1D>\u00B5Yx\x14v\u009B\x1D\u0081\u00DA\x00\u0094]\u00BB\x07\u00BB\u00DD\u0081\u00FD[\u00D7A\x17\x12\x04\u0085R\u00C4\u008C)\u00D1\u00D0j\u00D4<\u0088\u00D2\u00C2m<\u00A8\x00\x7F?Lc\u00EBu\u00D8\u009D\u0090'.O\u00CD\u00E9\u00A5\u00F5E\u00EC\u0084\u00D10|\u00AC\u00C7\u0093\u00A7\u00CF\u00F1\u00B8\u00FA\x19\u00C8\x7F\u00F2lPD\x18\u00BF\u00E6\u00C6OF\u00FC\u00D4h$\u00C4MB]}\x13\u00EC\x0E\x07\u00B2\u00D3\u0096\u00A2\x0F\u00CB\u00C6\u008B\u00D7\u00EF\u0090\u00B2p&\u00D7\u0086\u00C0\u009E\u00A3\u00EC\u00BC7\x18Q\u00C1\x1C\u009F<n$\u008BV\u0085\u00A6\u00E6\x16l\u00D8V\x00MX\x04do\x1AZq\u00EB~%\u00D4~>\u00D8\u00BEq\x15N\x1F\u00CBC\u00FF\u00F0\u00DE<5$$7\u00B7\u00CB\u00ABp\u00F9F9\u008BX\u00E4\u00E9\u00A7o\u0082\u00CAQ]\u00F3\x12\t)\x19\u00B0X\u00ACh`\u00D1\u00C5-N\u00C5\u00DE\u00C2Sh6\x7FBz\u00EEA\u00D8l6n\u0094\u009C\u00A0\u0092p\u00F5f\u00E5\x1DF\u00DA\u00E6}x\u00F9\u00A6\x16\u00BDX\u008A\u008E\u00EE\u00DE\u0080\x1EAZ\u00BE(QP|\x06\u0099[\x0B\u00B0\u00FBP\t\u00DA\u00D8\u00C2\x14\u008D7S\u00B9\u0082E\u00D6fi\u00E7s\u00C8\x00\u00F1\u00F3[\u008A\u00C6\x1DN'\u00CF\u0082\u009B\u00AF\u00FB\u00F4\u00D1\u0093\x1A$\u00AF\u00CDAqi\x19\u00D4\u00AC\x06T\u0097vk\x07\u009C\u00EC\x01c]\u00A34\u008B\x04$@dQ*D\x11\x02\u00BB\u00FF\u00D3\u009B\u00D0\u00DAic\u009E\u00D0\u00B6\u00FC\u0092\x19\u00E2\u0087\u00C3\u0081\x14\u00A9\u00EF\x19\u00CC#!\u0083\u0096v+\u00F7\u00D2\u00C6\u0084B\u00D8\u0098x\x04\u00F6q8\u009C\u00BCM\u00D0\u00BC\u00DF\u00D1A\u00A2c\u00F5\u00A7\u00FDOJ&D\u00BD\u00D6\x07\u00D7\u00CF\x14\u00A0\u0095\u00A9\u00D2K\u00A9d[E\r\u0083\u00B1\x01Wo\u0096cl\u00D4P$L\u009F\u0088\x0F\u00ACM\u0090j\u00D9&\u00E1)4\u00B1\x1A\u0091j\u00DF\u00BE\u00FF\u00C8\u00C7\u00DC|\u00EF\u0090\u009BZ&\u00D0\x11\u0091\x11\u00B8x\"\x1F\u00AD\x0E\u00E6\u00F6\u00A5\u00C7o]Z\u00BB\u0099\u009F:\u00F4\u00C0\u00CD{\u0095(9{\u0085\u00D7\u008EP*\x15\u00E8\u00A4\x14I,\u009A=\u008D9\u00D1\u0088;\x15U\u00E8\u00CFN\u00B0w\x1F\u00EAx4\u00C4\u008E\u00EC506\u0098\u00B0\u00EFH)o\u00BB\t\n\u00D4 cu\x12B\u0082\x03\u00D1,Su\u00FD\\\u00F1,]F=\u00CA\u00FFc\u00F4\x1F\u00FC\u0097\u00D1\u00E134Rq\u00A0bv\u00D2w\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            Alt: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x03dIDATHK\u00ED\u0097iHTQ\x14\u00C7\u00FF\u00B3:\u008E\u00DA\u00CE\u00A4\u0093d\u008Be\u009Af\u0096Z\u0083\u00A2mf\u00B6\u0099F\u00B4H\u00D1\u0097(\u008A(\u00B0OIeB\x12-\x14-\u0086TB!\u0086-\u00B4\u0080\u0085\x15d\x0B-D\x11\x16e\x1B\u00DA2\u00B6o\u00B8\u008C\u00A3\u00B3t\u00CF\u00F1\u00CD8\u00CF%\u00EA\u00C3\u00D8\u0087\u00FA\u00C1\u00E3\u00DE9\u00F7\u00BE\u00FB?\u00E7\u00DEs.o\x14\u00B7j\u009B\u009D\u00B5f3\u00BA\u008B \u00A3\x11\u008ASw\u00AB\u009D[\u00D6o\u0092L\u0080\u00D3\u00E9\u0094z\u00DE!'\x7F3\u0094R\u00BF[\u00F9/\u00EAU~)\x1A\x13\x15\u0086]yk1:r\u00B8d\u0091\u00A3R\u00A90%)\x0E:\x1F\u00ADd\u00F9=\u00BA\x14\r\u00F0\u00D7c\u00EF\u0096l$\u009B\u00C6`_\u00FE:\x04\x1A\u00FAJ#m\u00A4M2ak\u00CE*\u00E4\u00AE[&YZ\u00A1\u00B9%\x05yX0'E\u00B2\u00C8\u00E9Rt\u00F9\u0092\fh5\x1A\u00EE\u00EBt>\u00C8\u00CAL\u00E5\u00BE'j\u00B5\u008A\u00DB\u0084\u00F8hn]\u00CC\u0098\u0092\u0080\u00B0\u00D0\u0090?\x13\u00F5\x11\u00DB\u0095\u009E\u009A\u00EC^T\u00A9P`vj\x12\u00B7\u009E8\u00EC\x0E\u00D8\u00C4\u00A3T*\u00A0\u00F7\u00D5\u00B1\u00CD46\x123S\x12\u00A1\x10s\u0083\u0083\f\u00B8P\u00B2\x1BE\u00BB7\u00C0O\u00EF\u00CB\u00E3D\u00A7\u00A2\u0093\x13c\u00C5y)\u00D1hi\u00C2\u00D1\x13\u00E7ai\u00B2\u008A\u0085\u0095\u0088nw\u00B6u\r\u008Dp8\u0084\u00B0\u00CD\u008E^=\u00FC\x11\x15\x1E\u008A\x1D\u00B9k\x10\x12\x1C\u00C8\u00E3\u00F4\u008E\u00A1_oD\f\x1F\u008C~}z\u00B2\u008D\u00E8Tta\u00C6TN\x0E\u008B\u00C5\u008A\u00FDE'\u00D9k?\u00BD\x0E\u0099\u00D3'H3\u00DA Q\u0082r\u00E0\u00C3\u00A7/hnnq\u00DB\u00EA\u0085S{\x0E\x1F\u00C7\u00B2\u00EC|\u00BCz\u00FB\u009EmD\x07Q\u00DA\u00A6\u00D0A\u00C1p\u0088\u00EB\u00F0l\u00F95\u00B4\u00D8l\u00A8z\u00F1\u008A\u00C7\u0092M1\u00EC\u00BD\x0B\u00CF+S\u00ADV\u00E3\u00E3\u00E7o\u00988w%*\u009F\u00BCd\u00DB\u00F7\x1F\u00F58RZ\u0086\u0087O^\u00F0o\x17\x1DDM\u00B1Q\u00A0\u00A5,bk/]\u00BD\u00C3\u00B6\u00B2\u00CB78\x02\x12L\u0088\x1B\u00C56\u00A2\u00BE\u00C1\u00C2Q\u00D1Q\u00FB\u008Adk\u008FF\u00A3\u0096zr:\u0088\u00CE\u009A\u009A\u00C8[\u00AB\u00D5jpdo.n\u009F/B\u00F6\u008A,\u008E\u008Ava\u00F1\u00BC4if\x1B\u00E4\u008C\u00A7h]]\x03\u00B7]\u00D5\u00AFL\u0094^\u008E\u008D\x0E\u00E7\u00BEFl\u0097V\u00F2\u0094\u00EC\x1A\u00E1\x04\x119b(z\u00F7\f\u00E0~\u0093\u00B5Y8\u00C3]w\u00A6\x13MV+\u00B7\u00E4xg\u00C8\u00E2\u008F\u008E\x18\u00C6\u008B\u00D0b\u00E7\u00CA\u00AF\u00E3\u00A98K\u00BB\u00DD\u00CEc\u00FD\r}\u00B0t\u00FEL^|\u00F6\u00B4$>+\u009A\u00D7\x19\u00DF\u00C4Y\x12Tb\u00F4P~x\"\u008Bt\u00DA\u00C4\u00F1\u009C\u00A5\u00C4\u009EC\u00A58}\u00A1\x02\u00E7.^\u00E7\u00E7`\u00F1YN\x14\u00DA\u0081\x05\u00E9\u00ADE\u00FF\u00E5\u00EBwYb\u00B9x\u00FC\u00AC\u009A\x13\u00D0&\x1C\x1E7f\u00A4{\u00C7\\\u00C8\u00DE\u0088\x17\x13\u0088\u00BB\x0F\x1Es\u008D\u00B6\u00E7`\u00F1\x19\u008E\u00CE\u00DFO\u008F`\u00A3ADT\u00C7I\u00A4\x12\u00C2\u009EQ\u00DF\u00AB\u00AC\u00E2\u00DA\u00A5\x0Ba\u00DB\u00C6\u00D5\u00B8v\u00A6\x10\u008B2\u00DAn4\u0099\u00E8\u00AE\u00C2c\u00A8z^\u0083\u00ED\x05\u00C5\u0092ENy\u00C5\x1D\u00D4\u00BCy\u00C7\u00F5G\u00E5@\u00EC<P\u00C2%\u00F2\u00A8\u00AA\u00B5L\b\u00F3\u00BB\u008F(\u00BFr\u00DB}\u00A9P\u00C4\u00F0\u00B8\u00CC\u00BC\u00FA\u00B92p@ \u0086\u0084\x18\u00F1\u00B2\u00C6\u008C7\u00B5\x1F\u00D8\u00E6\u00F5\u00CF\u0095\u00D7\u00E6\u00F7\u00A8\u00B8y\u00DF-\u00E8\u00C2\u00AB\u00A2]\u00F1_\u00D4\u00AB\u00FC;\u00A2\x7F\u00E1\u00BF\u008C\x11?\x01\u00FE]6\x7F\r\x00\u00F8\u0097\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            CtrlShift: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x05\u00A1IDATHK\u00E5W{P\u0094U\x14\u00FF\u00B1,\u00CBS\u00E4\u008D\u00AE\u00A0\u00A02j\u00BE\u00CA\u00F7\u00BBA\u00D3\u00D4\u00B4T4\u0095IRs|!c\u0086\u0083O\x14%4\u00B2\x04\u00CCd\u00CA\u00D2,\u00D3\u00C9RK\u00C71m\u00D4\u00B1\u00ECe6Fj(&&\n!\b\x02\u00BA\u00EC.\u00FB\u00EA\u009C\u00B3\u00DF\u0082\x0B\u008B3\u00FE\u0091\u00FD\u00D1o\u0087\u00F9\u00EEw\u00BF{\u00EF\u00B9\u00F7w\u00CE\u00F9\u009D\u008B\u00DB\u008F%u\u00B6\u0092\u00E2b<.\u00B4\u00D6j\u00E1\u00B6\u00FF\u0097\u00EB\u00B6\u008C\u0095k\u0095.\u00C0f\u00B3)\u00AD\x7F\x07\u00AB6\u00AC\u0083Ji?V41\u00AAR\u00A9\u00908k2\x0E\u00EC\u00C8\u00C4W\u00BB6\u00E1\u0093\u00ADi\x18:\u00E0I\u00E5+\u00E0\u00E6\u00E6\u0086.1Q\u00F2|\x18\u00DC\u00DD\u00DD\u00F1fj\x12\u00C2C\u0083\u0094\u009E\x0641\u009A\u00928\x033\u00A7>\x07o/O\u00D4\u00D5\u0099\x11\u00A1\r\u00C7\u00DBk\x17\u00A3M\u00EB0\u00F9>f\u00F8@\u00EC\u00CCY\u0083\u00AE\u009D\u00A2\u00E5\u00BD9\u0084\u0085\x04bp\u00BF\x1EX03N\u00E9i\u0080Zy\n4\x1Ej\f\x1F\u00D2\x1BU5\u00F71cQ\x1A\u00EETV\u0089\u00F1\u00EE]:\u00A2\u00A4\u00B4\x1C=\u00BB\u00C6`^\u00C2D\x19\u00F7\u00C6\u00EAE(-\u00AB\u00C0\u009C\u00D72\u00D0:<\x04\u009E\x1A\x0F\u00FCu\u00F3o\u0084\x04\x05\u00C0d6\u00E3\u00BE\u00AE\x16z\u0083\x11\x1D\u00A3\"\u0094\u00D5\x1B\u00E0d\u00F4\u0089N\u00ED\u00E1\u00E3\u00ED\u0085\u00A2[\u00A5b\u0090\u00C1\x13\u00CF\u009E\u00BF$\u00ED\u00F9\t\u0093\u0088\u00AE`X\u00ADVy\u00BFw_'\u00CF\u00CC\u00D5\u0089h\x15\x16,cC\u0083\x03Qq\u00B7\x1A\u00F1\x0BR%(5\u00B4\u0099\u00C6p\u00A27\u00C0\u00BF\u0085\x18-\u00AB\u00B8\u00AB\u00F48c\u00E9\u00BA\x1C\u00FC\u00FE\u00C7U\u0098-V\u00A4m\u00DA\u008E%k\u00B2\u00A5_M\u00FE\u00E3\x13\u00FA\u00FB\u00F9\u00E2\u00E8\u00C9\x1F\u00B04-\x07:\u009D^\u008C\u00BAS\u008C4\u0086S\u008F\u00C9d\u0092S4\x17$\u00BAZ\u0083P\u00EA\u00A1v\u0087\u0097\u00A7F\u00E9\u00A5yD\u00A7\u00C1X\u0087e\u00AF\u00BF\u008B\u00F4\u00CD;p\u00E5Z\x11\u00ACd\u00D0\u008D\x7F.\u00D6r2\u009A\u00FF\u00E7\rT\u00DF\u00D3!&:\u00B2Y\u00C3\u00BC8\x7Fk\u00E1\u00E7\u00A3\u00F4@\u00E6p\u00D4\u00DBlv\u00DA\x1D\u00B0\u00D1\u008F7\u00D8\x18NF+\u00C9\x17U\u00D5\u00F7\x10\x14\u00E0\u008F\u00E4\x05\u00F1J\u00AF3\u00CA\u00EE\u00D8\u00A9\u008F\u008A\u00D4\u00CA\u0093QM\u0081\u00C7\u00C1\x15H\u00F3\x1E\u0084\u00D9lQZ\u00CEhBxz\u00D6\x0E\u00D4\u00EA\r\u0088\x1B\x1B\u008B\u008F(5\u0092\u00E7\u00C7cgv*\")u\x18y\u0097\n(\u0095L\x18?j\u0088|\u00F3\u00F5\u00F1\u00C2\u00A5+\u0085\u00E2\x16\u008E\u0089\x07\u00C1\u00B43\u00CD\u008D\u00D1\u00C4\u00E8o\x17\x0B\u00B085\x0B\x15U5\u0088i\x1F\u0089\u00A9/\u008CD\u00BB\u0088V\u00F5t\u00FF\u009Aw\x19E%\u00B7\u0085\u00DE\u00B8q\u00C3\x11A\u00F9\u00FB\u00F9\u00E1\u0093HI\u00DF\u008A\u00C3\u00C7\u00BF\u00931\x0E\x1C\u00F9\u00E6{\\\u00C8\u00BF\u00A6\u00BC5\u00A0Y\u00EDeE\u0089\u0089\u008E\u0080\u009F\u00AF\x0F\u00AE\x16\x16\u0089\u00DF\x1CP\u00D1\x06\u00A2\u00DAj\u00C5\x15\u0095\u00B4\u00B9G\u00C1C\u00B5\u00D7b\u00B1\u00E02\x05\u00D6\u00B9\u00BC|'\u0083\f\u00A6\u00AC\u00F0F\u00F1#\x1Bt@\u008C\u00F2\u00A9\u00FA\u00F7\u00EA\u0086\u00B1#\x06\u0089\u00FA\u00F0\u00BB\x03\u00CB\u0093^\u00C6\u00ACi\u00E3\u00947g\u00F08\u00CEk\x07<)\u008D\u00B2\u00D6\u00BF\u008A#\u00BB7\u00E3\u00D0\u00AE\u00B7D\u00CD\\A\u00E5\u00AEr\u00C3\u00BE\u00F73\u0090\u009D\u00BE\x04\u00E9\u00CB\u00E6!73\x05\u00FB?\u00DC(\u00C9\u00CE~dY\x1C?j\u00A82\u00DC\x19\u00EFd$\u00E3\u00E0\u00CEL\u00A8\u0095\u00B4x)n4\x15\u0087\u00A7\u00E0A\u0091|\u00F5\u00FAM\x18)\u00BD\x18\x13\u00C6<\u008D/>\u00D8(na\u00A8\u00C2\u00FC\u00BD\u00D1\u0096\x02\u0085\u00FDs\u00FE\u00E2\x15\u00DC\u00A5'ki\u00C2\u0094\u00B1\x14\u008D~\u0092\x7Ff\u00A2\u00DA\x15\u008A\u008AKq\u00AB\u00A4\u00AC>5X\u009B\u00CD&3Vn\u00C8E2\u00A9\x12\u00BB\u0081\u00A3\u00FB\u00C5\u00E7\u009FAHp\x00\u0096\u00CC\u009B\u008EP\u00B2\u00A7\u0096\u0090\u00A6?\u00967V\x14\u00C6\u00E0\u00BE=p\u00E1\u00F25\u00F8\x12u\u00BC;\u0096\u00B2\u0091\u00C3\u00FA\u00A1m\u009BV(,*\u00C6\u0099\u009F\u00F3$\x1D\u00D8\u00AF\x14\u008B2\u0087Y\u00EA\u00DE\u00B9\x03\u00D7>\u00ACO\u0099+:\u009C\u0090\u0094\u0086O\u00B7\u00AD\u00876<T\u00D8\u0098B\u00C6\u00F5&+T\u00E55\x06I\u00F8Adh\x0B\u00D1\u00C5\u00F5\u00EF\u00CC\u00D9<Ix\u00F6\x19S\u00AC\u00A5\u0093o\\\u00B5\x10\u0089\u00B3'\u0093\u00B8/\u00C2\u00C7Tc\x19\u00D3&\u008CB\u00EC\u00E0^\u00D2\u00EE\u00D0\u00AE\u008D\u00B0\u00C2\f\u00F2A\u00CAI\u00BF\u00F5\u0086:\u00EC;tB6\u00C0E i\u00E5&\u009C\u00CA/\u0081\u008A\x07\u00B0p\u00D7P\u0084\x0E\u00EC\u00DD\r{s\u00D3\u00B1j\u00F1,Y\u00C0\u00C7\u00DB\u0093\f\u00AB` 18q\u00E6\x1CVl\u00D8&\u00D5'$\u00A8e\u00BD\fZ\u00AD\u00F6\x14\u008B_\u00B8F\u00A2\u009Dkp\u00F2\u00DAl\u00CCO\u00C9\x14\u00C1\u00D8s\u00E0\x18n\u00DF\u00A9\u00941\u00FC\u00DDB\u00E3%z\x0B(\x0F'\u00BD\u00B2\x1C9\u00DB?\u0083\u0091\fL\x183\f+(j\x1D(+\u00AF\u00C42J\u00FEc\u00A7~B)\u00B5\x19\x1Ej5m\u00CC\u00B5>7\x06\u00FB\u0099]\u00D4\u0082r\u009EQ\u009F\u00A7\x1Ci\u00BB\u00F7\x7F\u008D\u00C9sV\x10\x155\u00E8\u00DD\u00B3\u00B3\u00D0\u00C3L\u00E8j\u00F5\u00CA({\u00A1\u00E7\x05\u00B8\u00CA\u00B8*[\u00AE\u00C0\x07\u00E1\u00BA\u00DA\u0092\x02\u0093!\u00B3x!\u00A6\u0093\u0083f\x18\u00DD\u00878\u00BFx\u00A0\u00C1h\u00E4\x18\u0093\u00A0q\u0080E\u00837\u00C2\u00D5\u0086\u00E1(\u00E8\x0F\u00C3M\u0092M^s`\u009F\u00EE\u00D0\u00A8UPs\u00A0\u009C:\u0090+\"n\u00A1\x05\u0098\x02\u00BEjd\u00BD\u00B7WNlO\u00A5\x02e\u00BA\u00BD\u00CA\u00B4o\x17\u0081:\u00A2\u008C\u00AF5\u00CE\u00A7\u00A5bF\u00E5\u00ADVoT\u00DE\u00ED\u00F8\u00F2\u00E8i\u00CA\u00F7>\u0098;c\"\t\x03\x05'k\u00EF\u00C5\u00D3'\u00F0ll\x7F\u00BA\u00E7hD\u00F6\u00F6\x1C<.\u00C6\\\u0081\u00AF#\u00BC\u00E3C\u00C7\u00BE\x15\u00BFj4j)\u00EE\fV\u00B3\u00D9\u00D3\u00C7Q\u008Eni\u00C2\u00C0\u0088\u00A1}1:v\x00\x02#\u00A3\u00FFG\u0097\u00ED\u00FF\u00E0\x7F\x19-\u00FE\x01\x1E\u00F4qR\u00F0\x02\u00A2\u00B9\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            CtrlAlt: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x04\u00C7IDATHK\u00E5\u0097kPTe\x18\u00C7\u00FF\x0B\x0B\u00BB\\\u0096\u00AB@\x10\x12\x17\u00B9\u0085L\u00858@#\x041\u00C0x\x01d\fP\x1A\u00C5\u0091\x19s\x1C\u00E82\u00C3\u00D0\u0085@\u00AC\u00C9\u00CC\u00CC\x0F\u0089c5\u00D5\fQ}\u00C8)\u00B3\u008C\u0089J\u0083AD\x01\u00C1\x11\u009D\u00F0\u0096\u0089\u0081x\u0089\u00B8\u00B3\\v\u00E9y\u00DE=\u00DB\u00EE\x11\x16\u00F8\u00A2}\u00E8\u00C7\u00EC\u009Cs\u009Es\u00CE\u00FB\x7F\u00DF\u00F7y\u00DE\u00FF{P4\u00F5LL\u00F7tw\u00E3A\u00E1\u00ED\u00E3\x03\u00C5\u00D7-\u00D7\u00A6\u00DFzm\u0087\x14\x02\u00A6\u00A7\u00A7\u00A5\u00B3\u00FBC\u00E9\u00AE\u009D\u00B0\u0092\u00CE\x1F(\u00B3\u008A\u00C6EGbOY\x11*w\x15#?g\x15\u00EC\u00ED\u00D4\u00D2\u009D\u0085cmm\u008D\u00F4\u00D4\x15\u00B0\u00B2\u009A)1#RT\u0090\u0083}\x15/\b\u00E1\u0088\u00B0 \x14n\u00C9\u00C6\u00F7\u00D5\u00EFA\u00A9\u00B4\x16\u00F7\u00B3V&\u00A2\u00EE\u00F0A8\u00D8\u00DB\u0089kKD\u0086\x07\u00A1\u00EC\u00A5\x02\u00A4%\u00C6H\x11\x132Q\x1EQFj<F\u00C6\u00B4xv{9Rr\nQ\u00F2f%~<\u00DE\x04\u00BDN\x0F\x0FwWd\u00A7?\r\u0095\u008D\r\u00DE-/B^V\u009Ax\u008FG\u00C5?s\u00C6\u00C7'\u00A0\u00D3\u00E9\x10\u00BB,R\u008A\u0098PJGALT\x044\x1A\x07\u009C\u00EF\u00BC\u008A\u00AE\u00EE^\x11\u00FB\u00B5\u00F1\u008C\u00F81\x1F\u00ECy\x19\x01~>\u00D0\u00EB\u00F5\u0088\b\r\u0084\u008B\u0093#\u00BE<\\\u008B\u00CF\u00F6\u00EF\u00C0\u00F8\u00C4$\u0086\u0086G\x10\x12\u00E8\u00873\u00E7:Q}\u00A8\x06S\u00D4\u00D1\u0087<\u00DD\u00C5\u00BB\u00E6\u00C8F\x1A\u00B6\u00E4\x11\u00D8\u00DA(\u00D1y\u00F9\x0F)\"\u00E7\u009D\u00CAj\u00F4\x0F\faph\x04\u00DBJv#\u008Ff\u0083\u00B1S\u00AB\u00B0\u0094:\x11\u00FDX8\u00FA\x07\u0087\u00D1\u00DCv\x01Z\x1E\u00A9^\x07\u00B5\u00CAF<c\u008ELTG#`\u00F8\u0085\u00D9hn\u00BF\u0080?o\u00DE\u0081\u0082\u008Ac\u0094R`\u008Ev|\u009CR\u00B1\x1F\x1B\u00B6\u00BD\u008E\u00EF~j\u00C0\u00E4\u00E4\u0094H\u0089\u008DR6\u0099\x02\u0099(O\u00EB\u00D4\u0094\u008E\u008A`\u0089\x14\u0099\u00C9\u0098v\x1CJ\u00CA\u009F\u009DYE\u00B3\u00C0\x04\u00FD.^\u00E9\u0092\"&\u008C\x05h\u008EL\u00B4\u00BD\u00E3\x12M\u00CF\x10\u0082\x03|\x11\x1A\u00E4'E\u00E5\u008C\u008C\u008E\u00D1t\u00DA\u00C2\u00CD\u00C5I\u008A\u0080\x04'EZ\u00DC]M1~N\u00CC\u009CB!EL\u00C8Dy\x14\u00C7O\u00B4\u00C2\u009E\u0096\u00C3\u0081\u00DD%X\u00B7&\tQ\u0091\u00A1\u00C8\u00CF]\u00FDo\u008F9\u00DF\u00BC\u00F62\u00D3\u00E2E\r0\u00BD\u00B7\u00FF\u0082Je\x0B\u008D\u00A3\u0083\u00B8f\u0086\u0086G-\u00BA\u009BL\u0094\u00E1b9J9\u00E1\u009E\u00BFR\u00B8\t\x07\u00A9b\u009F\u00DB\u0098E\u00A3p\x16\u00F7\u008F\u00FE|\x02\x03T,)O\u00C5\u00A0\u008A\u00AA\u00D6s\u0091+*?=\u0084c\r-\u00B8\u00D6\u00D5#\u009Ea\u00F4$\u00D8{\u00BBOt\u00E8^,zoX\u00B0?-\u00ECXZ\u00BB*\x12jD\u00C7oWD\u009C\u00F1_\u00EC\u008D\u00B4\u00A4X\u008A]\u00C5\u00C9\u0096sRt&\u00C2\u008D\u00A8=\u00EE\u0080\x11\u00F6\u00DE\x05\x19>\u008F&8p1\x1A\u009B\u00E5\x02\u00BCT\u00D8\x14\u0086GF\u00A5\u00C8\u00FC,\u00C8\u00F0\u00B9\u00D1O\u00F6\u0095bo\u00F9\u00F3\u00D8\u009C\u00BBF\u008A\x1Ax\u00BBt;\u00AA\u00DE7\u00ACU\u00C6\u00D7\u00C7\x13\u00D5\u0095\x15pw3\u00A4\u00C2\x12\u00F3\u008A\u00AEJ\u008E\u0083\u0097\u0087\u00C1U\u00D6\u00ADN\x14G#vj\u00B5\u00A8b\x17g\u008D\u00B8\u00CELK\u00C0\u00A3!\x01X\u009F\u0099\"\x1C\u00CB\x12\u00F3\u008An|f%F\u00B5Z\u00F4\u00DE\u00E9\u00A3\u00C6\u009D\x10N\u00B96\u00C2v\u00C8U\u00ED\u00E1\u00EE\u00827J\u00B6\";#\u0099V\u0088\x02\x05y\x19\u00F8h\u00EF\u00AB\u00E2|6\u00E6\x14\u00F5\u00F6Z\x04O\x0F7\u00DC\u00A2*\u00FC\u00F8\u008B#d\b*\u00AC_\u009B*\u00DD\u0085\u00C8\u00A5\r\u0099\u00BF\u00A3\u0083=\u00CE\u009E\u00BF\x04+\x12as\u00A9\u00FA\u00AA\u0086\u009C\u00A9l\u00E1K\u00C6\u009C\u00F4\u0094\x15\u00D0P\u0083?\u00FC\u00D2\u0088\u0086Sg\u00F1w\u00FF \u0096?\x1E.\x1A7\u00C2\u00E7lu\u00DF\u00D4\u00D4\u00A1\u00BE\u00A9\u009D*V!\u00EC\u00D2\u00B8a\u00CC\u00C6\u009C\u00A2\u00C9\u00F1\u00CB1I=g\u0093\u00F8\u00FC\u00C0Na\x7F\u00CE\u00B4\u00B3\u00C4,[*\u00EE\u00EB\u00C8[yz\x1D\u00EC\r\u0096\u00A8\u00D5N\u0088e\u00A2&\u00A3\u0098\x0B\u008B\u00A2<e\\$cd\u00EC\n\u00FE\u00A3\u00C1\r\u0093\u00B5\u00B1il\u00D9\u0090.\u009Ea\u00D71g\u0090\u00B66\u00C6\u00D7\u00DBS\x1C-aQ4\u00F1\u00C9(\u00B8\u0092\u0097\u00D6\u009FjGF~1\u00D27\x15c\u00ED\u00E6\x12\u00DC\u00ED\x1B\u0080\u00BF\u00AF\u00B7\u00E8T\x1FM\u00B79\u00D7o\u00DC\x14y\f\x0F\u00F1\u0097\u00A5\u00E0^,\u008AFS\u00EE&hc\u00E6\x022\u00C2_\x02l\u0083\u00AE.\x1A\u00C4\u00D1\x14\u00B7ut\u008A\u00C21n\u0085'[;\u00C4^\u009B\x10\u00FB\x04\u00EA\u00BF\u00FDPV\u00E9\u00E6X\u00E7n}\u00B1\u00A2\u00E1X\u009Dti\u00E24m\u00C4M\u00D4\u00C8\u00E5\u00DFoH\x11\x03\\\u00A5c\u00B4w\u00D6\u00D6\u009D\x16^\u00DBJ_\tm\x1D\x17\u00C5\by\u008F\u00ED\u00B9u\x17~\x0F{\u00D16w\x1DGj\r\u00FB\u00AA9\t\u00C9I\u00FF\u00F7\u00EF\u00DE\u00FB\u00CD\x7F\u00F0\u00BF\u008C\x0F\u00FE\x01\u00FC\u008A\u00DDm\tl\u00CE\x11\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            ShiftAlt: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x058IDATHK\u00E5W\tLTW\x14=3\f\u00C3&\u00FB&\b\x02\u0085\x1A\u00DBJ\u00B1\u00A2\u0082 \x1Ajq\u00A5-\u00B8P\u00B1-Dm\u00C4\u00DARKL@@\u00D1\u008AJ\u00A8\u008D \u00B5b7\r\u008Dbk\n4D\u00A34A\u00A2!A\u00ADQi\u00A5.\u00B4X\u00A1LE\u0091M\u0081\u0099a\x18\u00FA\u00EE\u009D?\x04\u00CAf\u00D25\u00E9I&\u00F3\u00FF{\u00F7\u00FF\u00FB\u00DEy\u00E7\u009E;#\u00ABRi\u00FBT\u008D\u008D\u00F8\u00A7\u00E0\u00E6\u00EE\x0EY\u00D1w\u00B7\u00FBv\u00A5m\u0093\u0086\u0080\u00BE\u00BE>\u00E9\u00EA\u00EFA\u00FA\u00EE\u00F7 \u0097\u00AEG\u0085\\.\u0087\u0085\u00B9\u0099t\u00F7\u00E71fR\x13\x13\x13\x1C\u00FFd\x17J\x0B>\u0080\u009F\u00B7\u00874j\u00C0\u009E\u008CD\u00A4\u00BE\x13/\u00DD\x01N\x0EvHx=\x1Ar\u0099L\x1A\x19\x1Ec&\u008DZ4\x07\x13'\u008C\u0087\u0083\u00BD\r\u0092\x12b\u00A5Q\x03\u00BC<\u00C6#,h\u00AAt\x07\u00AC\u008F\u008BF\u00FC+K0\u00C9\u00CF\x0B\n\u0085\u00894:\x14c&]\x15\u00BD\x00]j5\x1E\u00B4\u00B6\u00C3\u00CF\u00C7\x03ffJiF@\u00EC\u00C8T\u00A1\u0080\u00B9\x18\u00A3\x05\u0085\u00CF\u009E\x0E\u00A5\u00A9\x02\x07\u00DFO\u00C1\u00D7\u009FeIAC1jRoO7\u00B88\u00D9\u00E3W\u00D5=\\\u00B8\\\x03\x07;\x1B\u0084\u0087\x04J\u00B3@O\u008F\x0E2\u00B9\f\u00E3\u00AC,\u00E1\u00ED\u00E1&\x12\u009A\u00A2[\u00AD\u00C5\u00CD\u009F\u00EE\u00E0`A\u0089\x145\x14\u00A3&]\u00B6$\x1C\x16\x16\u00E6(>Y\u0081\u00D2\u00B2s\u00E8\u00ED\u00D5#\u00E6\u00E5\x17\u00A4Y\u00DA\u00A8\u008C\u00CF\u008Fv\u00B7q\u00EB^\u00FC\u00D2\u00A0\u0082N\u00A7Cf\u00CE!\u009C\u00AE\u00A8\u0092\u00A2\u0086b\u00D4\u00A4\u00A13\x03\u00D0\u00DD\u00ADA\u00C4\u00DC $\u00C4-\u0085F\u00DB\x03Ow\x17\u00D8Z[I\x11\u00E0\u00B3\u00A3\u009D\x12\u00BAD\u00ACB\u00D0m%\x16:\x1AFL\u00EA\u00E8`\x0B[\u009Bq\u00A2\\dxz\u0092\x0F|\u0085r\u00F5\u00A2\u0086\u0089\u00E2\x15/\x19v\u00FB\u00A8\u00B3\u008Bwk\x14\u00ABF\u00AB\u0085\u00A9\u00D8\u00B5\u00A5\u00A5\u0085a`\x04\u008C\u0098t\u00C1\u00DC`\u00D8\u0089\u00A4\u00A7\u00CET!v\u00FD\x16\u00BC\u00FA\u00E6V$\t\n;\x1Eu!2\"\u0094c\u00BA\u00D5\x1ANj\u00C4\u0083\u0096v\u00A6\u00DA\u00D3\u00CDE\x1A\x19\x1E#'\r\x0FBgW7\x0E\x15\u0096B\u00D5\u00D4\u00CC\u009F\u00AB5\u00B5\u00B8\u00D3\u00F0\x1B\x1C\u00ED\u00EDXd$\x18\u00A2\u0093\x18 \u009C\u00AD\u00BA\f\u00AD\x10W\u00E2\u00DA\x18\x14\u00E4e\u00F4\u00D3\u00FEG\u008C\u0098t\u00DF\u00A7_\u00E1\u00F0\u0097'8\u00D9@\u00EC\x14\"\u00A9\u00AD\u00ABGk[\x07\u008E\x16\u0097\u00A1\u00E8\u00C4\x19\u00DC\u00AEW\u00F1\u00DC\u00B9\u00F3Wq\u00F1J\rt\u00BD\u00BD,\u00C0\x01$\f\u00C2\x7F\u00D7{\u00FFjpR\u00F2\u00D7\u00A0iS\u00B0x^\b\u00FC\u009F\u00F2\u00E3{#6'\u00C6c\u00F5\u00CAH\u00E9n0(\u00CEr@y\u0090[\u00E5\u00ECx\x17'\u008F\u00ECe\u00AF\x1E\u00A9I\u00C8MDI\u0090\u00A1\u00E7f&!3%\x01\u00F9\u00D9\u00C9(\u00FA<\u008B\u00CD\u009B\u0094\u00F9\u00FC\u00EC@\u00BC8?L\n\x1F\u008C\x0FwmB\u00C9\u00E1\u00EC~\u009F}m\u00D9B\u0084\x05?\u00C7eS{\u00BB\x01\x1A\u008D\u0096\u00C7\u00A3\x16\u00CDe[46\x02\u00B9\u008B\u008D\x05&\n\u00E3nk\x7F\u0088+\u00D7n\u00A2U|\u00BB\u00B9:!n\u00C5b.\x19jk$\u008C\u00E1P\u00DFx\u0097-R\u00A73\u00CC\x07<\u00F3$tB\u00BDi\u00BB\u00F3\u00B1i\u00FB>V\u00B5\u0095\u00A59bD];9\u00DA\u00B1?;\u008B|\n\u0096\u00BB\u00F8|\u00FFc-Rv~\u00C4\x0F\u0087\u00CEx\x16?\u00DC\u00F8\u0099\u009D\u0085Vg\"\x12G\u00CC\u0099\u00C9\u00DD\u00A6\u00AE\u00BE\x11\u0095\x17\u00AA\u00D1#\u00EC\u00AE\u00EE\x0E\u00FD\u00E20\u00AC\u009EX\u00F2\u009F\u00EC\u00CBM`G\u00F2:\u00AE\u00E1\u00B8\u00C4\u00ED8z`\x07\u00DC]\u009D\u0099\r2\u0095\u00EE\x1E=\u00E4\u00F7;\u00D4\u00B8\u00D7\u00DC\u008A\x10\u0091(O\u00D0\u00E5\u00EA\u00EC\u0080\u00CA\u008B\u00D5h\u00EFx\u00C4gF\x14\u00BB\u008B\u009Dg\u00A5o\u00C0[k\u0096#{\u00CB\u00DB\u00F8b\u00FFvN\u00B42j>\u00C2C\u00A7\u00F1\u00B5\u00AF\u00D7\x04f\u0085\x18\u00A4\u008D\u00DC\x7F\u00D0\u00CA\u00E6\x7F\u00BC\u00B4\u009C\x17@]*1m\x0F*\u00AE\u00AB \u00A7\u0080\u00A4\u008C\\t<\u00EC\u00C4\u00AC\u00C0)8\u0096\u009F\u0089\u00F4\u008D\u00AB\u00F9\x05\u0096\x16f\"\u00B1\x1Cj\u00E1\u00B9\u00E5\u0095\u0097\u0090\u00BA\u00FB\x00\u009A[\u00DA\u00C4y\u00DB\u00C2z\u009C\u00A1\u00F0\u00F5zC\u0089\u00AD\u00DA\u0090\u0081\x1B\u00C2,\u00B4Z\x1D6m\u00CB\u00C5\u00FA\u00E4l1\u00A7G\u00A1\u00A8\u00E5\u00A6\u00E6\x16\u008E\u00A1\u00F9^\x11\u00CF\u00EA\u00BD%\u008A}\u00E9\u00DA\u00CDl\bd\u00EA\u00D4\u00B8S\u0085j\u008D\u00B8w\u00BF\x05)\u0099\u00FBQVq\x1Ew\u00C55\u0081\u00FA(\u00F9\u00F2\u00E3\u0080\u00CE\u0099\u008E\u00C8Zr\u00A8\u00FE:%\u00A5\x1D):\u008D\u00E5o\u00A4\n*:\x10\x180\u0099\u00E9!&\u00C8\x0E\u008D o\u00A5\x17P\u00E3\u00A6\u00EF\u00C7\x01mD\u00A94\u00E5\x06B\u00E0\u00A7\u00E8ED'\u0089fN\u00F0T\u00AE/\nTk4\u00A41\x16\u008D\x11\u00BDB\u00C9\u00B4\x10\u00B5T\x0ED\u00E1XhP5\u00F1;gM\u00F7\u0087R!\u0087\u0082\u0084RQ\u009C/\u00CE\u00A2G\u00F0\u00ADg\n\u00A8e\u00E5||\u008Cwl(\u00A5[\u00D2\u00E3\u0082j!\u00BA'\u00BC<\u00D8\u00D8\u00DBHl\u0083v\u00DB'\x16\u00A9\u00E7\u00BE:\x10\u00DF\u009C:+\u00EA}:\u00D6\u00D1\u008F6\x12'y\u00EF\u00B5\u00B3\u00E5\u00DCU\u00CC\u0094J\\\u00AA\u00BE\u008E\u00C2\u0092o9\u00D9ppv\u00B4\u00E7\x15\u00D3/\t:W\u00A5R!\u00E8W\u00F3\x1C\u00B9\u00D9\u009A\u00D8HQ\u00A3yC\x18\u0098\x176\x03\x0B\u00C3\u0083a\u00EF\u00E9\u00F3?2\u00FC\x7F\u00E1\u00BF\u008C;~\x07\u00D7i\x19\u0088j\u00D1\x0E\u00E8\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            CAS: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1D\x00\x00\x00\x1D\b\x06\x00\x00\x00V\u0093g\x0F\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x06GIDATHK\u00B5\u0097wPTW\x14\u00C6?\x16\x16\u00E9H\u008D\x14A\x01\x15;&6\u00D4\u00D8\x05kFT\x14\u00D1\x18\u00BB\u00C4`\x04+j\u00D4\u00D8\u0090\u00E0$\u00C4X\x0211b4f,\u00B1\x10\x19\u008D\x1A\u00A2h`Pt\x1C\u00E3X\b\"]Dzg\u0097\u00DD\u00DCs\u00F6-\u00A1\u00AE\x7F\u00E57\u00E3\u00EC{\u00E7^\u00DE\u00B9\u00F7\u00DC\u00EF\u009Cs\u00D5K\u00CA\u00ABW\u00E7\u00E5\u00E6\u00A2%.6f\u00E8lm\n\u00B5x\u00CE.\u00AADNq\x15?\x13r}\x19\x14\r*\u00E9\u00AD5Fr}\u00D8[\x18#K\u00FC]K\x1C\x1C\x1D\u00A1w\u00EEn\u0086z\u00CF\u00E6\u00ED\u0092\tP\u00AB\u00D5X\u00BD,\x00\u00F3f\u00F8\u00A2\u00B2\u00AA\x1Azzz077\u00C5\u00B1_~\u00C3\u00C1\u00A3g0e\u00FCpl\tY\x04\u009F9\u009F\u00F2x[,\u009F?\x1D\u008B\u00E7N\u00C3\u00C4\u00C0\x10\u0094\u0096UHV\r[\u00C2w@&=7\"\x13N&\u008D\u00F5FQI\x19\u00FF\u00D1\u00B8Y\u009F h}\x04\u00CE\u00C4\u00DD@\u00DF\u009E\x1E\b^\u00EC\u00CFs\u00CE\x1C\t\u00C7\u008A\x05~016\u0082\u00EF\u0098\u00A1\u00D0\u00D7\u00D7G\u00EF\x1En\u00E8do\u0083\u00D2\u00F2J\u00F1.\u0083\u00ABs'\u00E9\u00AB\u00CDi\u00E5\u00D4\u00BD\u00AB3\u00CCL\u008D\u00F1\u00FCE\x16\u00EA\u00EB\x15P\u0089\u009D\u00DF{\u00F8\x04\x05\u0085\u00C5\x18\u00E9\u00ED%\u00C6L\u00D8V\\Z\u008E\u00A7i\u0099\x18\u00D8\u00BF'\u00F6\u0084\x05\u00E1\u00FA\u00E9\x03\u0088\u00FDf\x1B\"\u00B7\u00AE\x12_Q\u00F3\"\u00AC;Zh>\u00DA\u0082VN-\u00CD\u00CD \u0097\x1B\u00E0ua\u0089d\u00F9\u008FCG\u00CF\"\u00E5\u00C1c(\u0095J\u00AC\u00D9\u00FE5n&\u00DD\u00E7\x1D\u00C9d2\u00D4\u0089\x05~\x16\x11\u0083e\u00EB\u00C2Q]S\u00C7\u00F3\u008D\u008D:\u00F0oKZ9-,*\x11;T\u00C2\u00D6\u00C6R\u00B24\u00A7\u00BA\u00A6V\u009C\u00B3\u008C\x17FTV\u00D5\u00A0\u00A1\u00A1\x01q\u00BF'\u00E2JB\x12\u00EA\u00EA\u00EAQU]\u00C3c\x14\u00B1\u00B6h\u00E54+\u00B7\u0080\x05\u00D2\u00C7\u00D3\u009D\u00CF\u00A7%\x15\u0095\u00D5\u00ECP\x1B\u00BA\u00F2\u008AJ(\u0094\r\u00B0\u00B7\u00B5\u00E6wB)\x16\u00A1\u008BVNI\u00BD\u00BF\u00C6'\u00C0\u00DCL(v\u00FF6L\x1C\u00E3\u008Dy3'b\u00D8\u00A0~<\u00FE,=\x13r\x03}\u00CC\u009C2\x16\u00DD\u00DC:\u00E3\u00D5\u00EB\"\u00DE\u00A9\u00A5\u0085)\u008F\x13%\u00E2\u00BC\u0095b!\u00ED\u00D1\u00CA)q\u00E4\u00C4E\u009C<w\u0085\u00CFd\u00F7\u00A6 \u0084.\x0F\u00C0\u00D8\x11\x03y,\u00E1v*+\u009B\x14\x1E\u00B53\x14e\x15U\u00F8\u00FE\u00E4E\x1C?\x1D\u00CF\u00E3\u00C4\u00F3\u00F4,\u00BC).EFV\u00BEdiN\u009By\u00AA\u00C5\u00CE\u00C6\n=\u00DC]D!h\u00C0\u00B0\u0081}\x11w5\x11\u00FF\u00BC\u00CC\u0081\u00A9\u00891<=\\acm\u00C9\u008BP\ba\x11\u0094J\u00A4l]\u00B4\u0099\u00A7M!Q\u00DDNy\u00C8\x0E)\u00C4_\u00ED\ba;\t\u00E5\u00D1\u00D3t\u00EC\u00DE\x18\u0084\u00C0\x19>l\u00F3\x16s\x12/}\u00C7)\u00F56t:%(\u00DF(\u0094J\u0085\x12\u00F6v\u00D6\u00E8\u00D7\u00CB\u0083\u00ED\u0094\u00C3\u00D5\u00B5\u00B5xO\u00E4i\u0097\u00CE\x0E\u00D8\x18\u00FC!\u00CF=\x15\u00BD\x0B\x0B\u00FC'\u00F3\u009C\u00F6x\u00AB\u00D31\u00C3\u00DF\u0085\u0095\u00A59\u00CE^\u00FE\u0083\x05\x13\u00E8\u00E7+\u008D\x00\n\u0091Z\x1D-\u00CC0\u00CA{\x00\x1F\u0085J\u00A5B\u008DH\u00A9\u00EC\u00BC\x02iF\u00DB\u00BC\u00D5\u00A9\u00FF\u00B4q\u009C\u00EC\u00D1\u00B1\u00E7Q,\x04\u00D4\u00BFw7.\x06D\u00BDB\x01\x03\u00B1\u00BBX!\u00A2k\u00B7R\u00C4\u00A2T\b\u00D9\x1A\u0085\u0084;\u00A9<\u00DE\x1E:\u009D\u00D2\u00C7]\u009C4\u00F5\u00F3\u00F8\u0081\u00ED|^\u00B4\u00B3\x11\u0083\u00FB\u00B3\u008D\u00C6\rD\u00FA\x10\u00B4k\u0099L\x0F\u0086\u0086r~\u00D7\u0085N\u00A7\x03\u00FAt\u0087\u00B5\u0095\x05W!J\u00F8B\u0091\x06\u00F4\u00BB0`\u00AA4C \x14K\u0094\u0094\u0095\u00F3\x02\u00AC\u00DA\u00A9\u00B7M\u00D1\u00E9\u00D4o\u00F2h\x0EY\u00D0\u0086\b\u00CC^\u00B6\u0099\u00FF\u00A5\u00BF\u00CC\u0085\u00BB\u00AB\u0093\u00A8\u00D1\u00A6\x1C^-O\u00D2^\u00B2\u0090\u0096\x06~\u0080A^=%k\u00DB\u00E8t\u009A\u0096\u0091\u008D\u00A4{\u008F\u0090\u0099\u00F3J\u00B2\x00\u00FB\x0E\u009F`A\u0099\u0088\\\u00BD\u009A\u0090\u008CT\u00D1\u0081\u0088\u00BF\u00C4\u00BC\u00BC\u00FCBx\u0089\u00E8\u00AC\u00FBx>\u00DB\u00DACgq (dn.N\u00DC\u00EAta\u00D4\u00C1\x10\u00BE\u00A3\u0087\u00C2E\u00F4\u00D0#\u00A2B\u00D5\u00D6j:MK\u009A\x15\x07J\x0B\u00EA\u0087WN\u00EDG\u00DCO_b\u00B7\u00E8\u0091\x14\u00AE\u0080\u00E9\x13XDN\u009D\u00EC\u00A4\u0099\x1A\u00FAx\u00BA\u00F1|S\x13#~?\u00B4w=>\x0B]\u0084\u00B9~>,6b\u0089\bu\u00AF\u00EE]\u00F9\u00B9)\u008DNW.\u009A\u0085\u00EE\u00EE\u00AE\u00A8\x11+\u00D4\x17\u00AA\u00F4\x195\x04\u00D3'\u008D\u0084G\x17g\u00EE\"-#\u00E0`o\x0B'\x07{\x18I=\u0093\u009E\u00B3\u00F3^c\u00C2\u00EC`n\x02\u00B6\u00D6\x1D\u00B1p\u00CE\x14\u0084\u00AD\u00FA\b\u00EF\x0F\u00F1\u00E29Z\x1A\u009DR\u00DDT\u008B\u00E4\u00DE\x14~\x18S\u00E7\u00AF\u00C1\u0096\u0088h\\\u00BF\u0099\u00C2uV\u00ADV\u00B1\u00A8>_\u00B7\u0094wn(Z[^\u00C1\x1Bdf\u00E7\u00A3\u00BA\u00BA\x16'\x0E\u00ED\u00E0\x1DS\u00B4.\x1C\u00DB\u00C7iv\u00FE\u00C7H\u00BE\u00CAP\u008D\u00DE\u00B9q\u0085\u00E4EC\u00A3\u00D3\x1F~\u00BE\u00C4;\u008A\u0089\f\u00C3\u00B6\u00B5KX@\u00D4A\f\u00E5r\x16\r\u00ADz\u00FC\u00C8\u00C1X\x1B\x14\u0088]\"\u00F4\x13F\r\u0086g\u00B7.\\\u00F4\u00AB\u0084c\u00BA\u00C0\u00D1-\"9\u00F5o\x14\u00BC)\u00C6\u00B7\u00C7\u00CE\u00F1m\u0082\u008A\u00C6x\u00FF`\u00C9\u008B\u0086F\u00A7\u00B4\u00F2\u0095a\u0091\u00DC\u0092&\u008D\x1B\u0086\u008B\u00B1\u00FB8\u00B4\x14>\x12E\u00C4\u00C1\u00E3\u00F0\rX-\u009A@):\u008BP\u009A\x1AS\x04\u00D4P\u0089\u0094Z\u00B1~/\u00D7\u00E2'\u00E2\u00CE\u00B4\u00F5\u008B\x18\u00BE=\u00C4]K\u0084B\u00D4k\u00B9\u0081\x01\u00AB\u00BD)\u008DN\u0089\u00C7\u00CF^`\u00E6\u00920l\u00D8y\u0090C\x18*vE\x1F\u00A3\b\\\u00BEv\u0087\u00BB\x0B}\u00C0@\u008CQM\u00A0c&\r\u00B4E\u00BDpHmN+\u00B4\u00A64sJg@\x14\u0095\u0094\u008A\u00E2-nt\u00A2\u00ACQ'\u00A1\u00DFZ\u00B1z\u00A2A\u009C;\x15vK\u00A1P.\u00F0\u00ED8\u00A5\u00DDR\u0084\x1C\u0085\u00EAITMitJW\u00C9\u009B\x17\u00A2\u0091\x1C\x7F\u0094\u00AF)DT\u00CC)\u00FC)\u008A7\u00A9Q\x0B\u00ED\u0080\u00C2v\u00FF\u00D13~\u00D7.\u0086\u00F2\u00B9\u00AE^\u00F3\u00AC%3'\x1F\u00CE\x0Ev\u0088?\x19\x05gG{\u00C9\u00DA\u00A48P\u00F1\u00F6\x19=\u0084\u00D5\u0096\u00F6\"\x1B7\x12\u00EF\u00B6\u00B9\u008BwDO%\u00D1\u00D0B\u009A\u00DE\x14\u00A8\u00E7f\b5?\x15\u00E5PK\x07Q0\u00C8^\\R\u008E[\u00C9\x0F\u00D8F\u00C5\u00A1\u00DD\u00FF\u00CB\u00FC_88:\u00E2_\u0097\x05\u00B7_P\u00EF@\u00FE\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            //列表图标
            inBar: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\u00F8IDATHK\u00ED\u0096I\n\u00C20\x00E\x7FG\u00EBB\u00B1N+G\u00D0\u008DXD-\"^ xk\u00F1\x00\"\u00E8\x15tcuQEWU\u00DB\x10D\u00EA\u0098V\u00BB\u00EA\u0083\x10\u00F8\x10^\u00F2\x03!\x02!\u00E4\u0082?\x13H\u00A2(\n4M\u0083(\u008A,y\u00E4\u00EC88\u009ENp\u00DC\u0099[\"I\x12:\u0086\u0081z\u00AD\u00F6Vb\u00DB6f\u00F396\u0096\u00C5'\x11\x04\x01\u00CDF\x03\u00A3\u00E1\x10\u00E9T\u008A\u00A5\u00CF\u00D9\u00EEv\u0098L\u00A7X\u00AD\u00D7x\u00BD\x15\x1F\u009E\u00A0\\*a`\u009A\x1F\x05~n\x12UUi\u00CF\u00CFF\u00D2\x1D\u00C5B\x01\u00FDn\x17Y]g+\u00BE\u0087\u00D6%\u00CB2\u00DA\u00AD\x16\u00F4L\u0086\u00C5>\u00DCSx\u00BB\u00AFV*,\u00F8\u00CC}]T\u00A2%\x12\x18\x13B\u00EB\u00F8\x15\u0081\u00EE$\f\u00B1\u0084\u008BX\u00C2E,\u00E1\"\u0096p\x11\u0089\u0084>\u00F5\u00DE\u00C7\u00C0\u00EC\u00F5\u0090\u00CF\u00E5X\x1C\u009E\u00FD\u00E1\u0080\u00C5rI\u009F|\u00EE\u008FD\x10\"\u00A8\x0B\u00B8\x021\u00F4G\u00AD_<zQ\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            OutBar: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x01\u00A8IDATHK\u00ED\u0096\u00DBN\u00C2@\x10\u0086\u00FFr.\b\x01D\x04\u00C1\u0080I!H\fH\u0090\u0080h\x02\u00D1\x0B^\u00CB\u00F72<\u0083\u00E1\u00CAp/W\u0092\u00C8!%\u00E5\x10p\u00A7,\x18\u0084\u0096V\u00A3W|I\x03\u009Dm\u00F9:\u00C3\u00CEn\u0085F\u00A3\u00B1\u00C0\x1Fc\u00E1\u009F\u0086p8\x1C\u00F0\u00F9|\u00B0\u00D9l<b\f\u00C3\u0092#\u008F\x07\u0085|\x1E\x0F\u00B5\x1A.3\x198\u009DN>\u00B2\x1F\u00AB$IO\u00FC\u00BB&\x01\u00BF\x1F\u00D5J\x05Y\u00F6\u00E3\u00C1@\x00\u0091p\x18\u00A2(\u00E2\u00BD\u00DB\u00C5t:\u00E5Wi\u00B3Wr\x1E\u008F\u00E3\u00BEZE2\u0091\u0080\u00D5jUcv\u00BB\x1D'\u00A1\x10\x02L\u00F8\u00D1\u00EBa4\x1A\u00A9q-4%T\u008E\u00ABl\x16wLp\x1C\fB\x10\x04>\u00B2\u00C4b\u00B1\u00A8\x19\u00C6c1(\u00E31\x06\u00C3!\u00E6\u00F39\x1F\u00DDd\u00A7\u0084n\u00BE)\x16Q,\x14 \u00BA\\[\u0082\x15\x14\u00A7\u00B2\u00C5Y\u00B66&\u00ED\u00F7\u00FB\u0098L&|\u00F4\u008B\r\t\u00DDt\x16\u008D\u00E2\u00B6\\F:\u0095Z\u0097g\x1F4\u00DB\u00A2\u0091\b<lr\fYF\u00F2\u00B7\u00F2\u00AD%T\u00E7\u00B4$\u00A1\\*\u00A9\"\u00AD\u00A7\u00D7\u0082\u00AE\u00A7\u00B2\u00D2\u00C4\u00A0l\x06\u0083\x01\x16\u008Be\x0B\u00AE\u009B\u0091$T&\u00B7\u00DB\u00BD\x16P_\\\u00E7r8e\u00B3I\u008B\u00B7N\x07/\u00AD\x16?\u0083\u00FA\u00BF\u00C8\u00B2\u008C\x1E+\u00DDl6Sc\u00BA\x1DO\u00C2\u00C7z\x1D\x17\u00C9$\u008Fl\u00F3\u00DAn\u00E3\u00B9\u00D9\u00E4g\u00BB\u00D1m\u00C6U\u00BA\u00BF\u00C5\u00D4\u00B2\u00F2S\x0E\x12S\x1C$\u00A68HL\u00A1/a\u00CB\nm\u00AF\u00B4)i\x1DF\u00B6_\u00DD\x05\u0092v?\u009F\u00D7\u00AB\u00FB\u00D2\u00A0(\n\u00FAlY\u00D7\u00E3\x1F\u00DE\u00BB\u0080ON|\u0082W\x1DQ:\u00C5\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            viewImg: (new String("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x02HIDATHK\u00DDV\u00DBJ[Q\x10]\u00B9\u00DF\u00EFi\x1E\u00AC\u00B5\u00A0\u00F6\u00C1&T*}\x10\u00FA\x01\u00F9\u00F6\u0082\x0Fj\u00F1A\u0083M,\u00A9\x0F\nI\u00CC\u00FD\u009E\u00CE\x1Ar\u00B6\u009E\u0093\r\u0085B\u008At\u00C1 \u00CC\x1Eg\u009D\u00D9{\u00CDL|\u00D5ju\u0085-\u00C3\u0090\u00F8\u00FD~\x04\u0083A\u00FD\u009BN\u00A5\u00F4\u00D0\u008B\u00E5r\u0089\u00D1h\u0084\u00F9b\u00B1\u00F6\u00B8\u0091L$\x10\b\x04\u00B0\u0090\u00B8~\u00BF\u008F\u00C9d\u00A2~C\x12\u008F\u00C7\u00F1\u00A6XD4\x1A\u00C5\u00E7\u00E3c%\u00F3\u0082\x04\u008D\u00BB;t{\u00BD\u00B5\u00C7\u008D\u00F2\u00D1\x11\u0092\u00C9$\u00C6\u00E31\u00CE//\u00F1\u00A3^W\u00BF\u00C9\u00C4*\x12B\u0094N\u00A7Q,\x14\u00ACV\u00C8\u00E7\u0091\u00C9d\u0090\u0092Jm\u0096\u0097s\u008D\u0095\u008FeU\x0E6?w\x0B0$\u00BC\u00CBp(\u0084\u0090\u00D8t6\u00C3t:\u00DD\u00B0\u00F9|\x0E?\u00E3\u00C2a\u00AB\u00F1\u009Cq3\u00B1\u00C5\u008Bw3orxp\u0080/''\u0088D\"\u00A87\x1AX\u00AD6E\u00C7D|\u00B7X,\u00B6\u00F6\u00B8\u00F1\u00B3\u00D9\u00C4T\x1E\u009BD\u00CC\u00F1\u00F0\u00F8\u00A8~S\t\x13\u00A4\u00E4\u00D1\u00E2\u0092\u00A0?\x18\u00A0'\u00EA\u00F0\u00DAH\x1E\u00D4\u0089\u00B3\x19+`\x1C\u0095E\"\x07\u00FF\u00F6M\u00B6\u0089\u00FF\u0090\u0084#\u0083\u00B2\u00A3\u00A6\x02\u00D2\u00ED\u0094\u00B4\u00D78\x05\u00A8:\u00C6\u00D9L\u00FFw\x1D\u00EB\u00F3\u00F94/a$\\*\u0095\u00F0Ad\u009C\u0090N\u00A5L\u009FC\u009E1\u0093>\u00E8v\u00BB\u0098H\x1F\u00D9\u0090\u00CF\u00E5\x10\x15\u00F5MDY\u00E7\x17\x17\u00A8\u00DD\u00DE\u00AA\u00DFT\u00C2y\u00D3n\u00B7\u00D1\u00EEt\u0090\u00CBfuDx\u008D2\u00A5\u008C[\u00AD\u0096\u00D58J\x18\u0097\x13\u00B2\u0097\u00BD\u00F4:\x1F~s\x0E\u00FC\x19\u00AF\u00B3\u0092\u00BF\u0081\u008B\u0084\u00B2\u00A3\u00AA(S\u00AB1\u00C6\u0089\u00B3\u0098\x04\u00B9b\x1D\x18\t\u00BF\u00DF\u00DB\u00C3\u00A7JE\u00A7\u00F0`8\u00D4C/\u00FC\u0092\u0088\u00E7\u00EC\x03\x1B\u0086\u00B29\u00D9o\u009C\u00C4\u00D777h\u00DE\u00DF\u00AB\u00DF\u0090|\u0094\u00D5\u00F9\u00F5\u00F4T7\u00E4\u00B7\u00B33\r\u00F6\u0082+\u00FAp\x7F\x1FY\u00D9\u008E6p\u00E5r5s\x1A\u00FF\x12\u0082\u00CE\u00D3\u0093\u00FA\r\u00C9\u00DB\u009D\x1DT\u00CAe]\\\u00DF\u00AF\u00AE\u00B4d/\u00B8\u00FF\u00DF\u00ED\u00EEj\u00BF\u00D8p]\u00ABa k\u0082\u00CB\u00AB%=\u00C7\u00DF\x04\u0084!a\x05L\u00C2;g\u00C3\u00D9\u00C0\u00B1\u00C2\u00CD\u00C9\u00B1c\u00C3X\u00AE\u00C9\u00B9\x01\x1D3\u00EB\x0F5$\u00DB\x03\u00F0\x1B<\u00A4FN\u00D2}x9\x00\x00\x00\x00IEND\u00AEB`\u0082")),
            //底部获取图标二进制
            importImg: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%18%08%06%00%00%00%C3%A9%C2%9C%C2%9D%C2%82%00%00%02%C3%A9IDATH%C2%89%C2%BD%C2%95%C3%8DJ%C3%A3P%14%C3%87%7F7IM%C3%9AH%5B5%C2%B4%C2%A2V%C2%8A%C2%8Bl%C2%BA%C3%B0%C2%83%11%C3%84%C2%9D%C2%AF%20%C3%B8%02%3A%C3%A0%C3%9A%C2%85%0B%C3%9D%C3%BB%08%C2%82%C2%8F%C3%A0C%C2%B8%11w%16%06a%C3%90E%C3%87%C2%82%08R%22%0E%C3%8A4S%3B%C3%98%C3%A4%C3%8E%22%26%C2%93%C2%B6%C2%A9_%C3%83%C3%8C%1F.4'%C2%B7%C3%A7w%C3%8F9%C3%B7%C2%9C%C2%88%C3%9D%C3%9D%5D%C3%89%7F%C2%94%C3%A6%C3%BB~%C2%9FQ%08%C3%B1%C3%AF%C2%80R%06%01z%C2%9E%C3%87%C2%97j%C3%B5%C2%AF%60%C2%AA%C2%AA2%C3%BF%C3%A9%C3%93%C3%9B%C2%80RJ%C3%B4t%C2%9A%C2%8D%C3%8F%C2%9F%3F%0C%3C%C3%98%C3%9F'%C3%B47%10%C3%98%C3%A9t8%3D%3DEJI%26%C2%9D%C3%BE%18%C3%A8%C3%A0%C2%80z%C2%BD%C3%8E%C3%B7%C2%BB%3B%C2%BE%5E%5C%24%C3%AE)%C2%95J%C2%AC%C2%AC%C2%AC%045%C3%B4%7D%C2%9FN%C2%A7%03%C2%86%01%045%C2%B4%2C%C2%8Bl6%C2%8B%C3%A7y8%C2%8E%C3%83%C3%A3%C3%A3%C3%A3%40%60%C2%A3%C3%91%C3%A0%C3%AA%C3%AA%0A)%25%3F%C2%9A%C3%8D%C3%88%1E%2FO6%C2%9B%C3%85%C3%B7%C3%BD%3F)%0D%C2%A5%C2%AA*%0B%0B%0B%C2%8C%C2%8E%C2%8EF6%C3%9B%C2%B69%3F%3F%C3%A7%C3%A6%C3%A6%C3%A6C%19%C2%80%C2%A0dRJ%14%C3%9F%C3%B7%C2%A3%07%C3%B9%C3%AC%3C%0E%0BOZ%C2%A9T0M%C3%B3%C3%83%C3%80%10%C2%AAE0)AJ%26%26%26%127%0B!%18%1F%1F%C2%A7%5E%C2%AF%0Ft%18%C2%A60%C2%95JQ(%14%C2%BA%C3%9E%C2%8D%C2%8D%C2%8D%25%C2%A7T%C3%93%C2%B4%C2%81%0ES%C2%A9%C3%94%C2%9B%22%C3%89%C3%A5r%C2%AC%C2%AE%C2%AE%C3%B6%C3%99%C3%BBR%0A%C3%90%C2%8C%15%C2%BDW%2F%C2%BDKr%C2%9E%C2%B4%C2%948%0C%C3%A0%C3%B2%C3%B22%C3%91%C2%81%C3%AB%C2%BA4%1A%C2%8D7%03%C3%83%C3%9B%C3%9F%C2%BB%C2%94x%C3%A3%03%C3%9C%C3%9E%C3%9ErvvF%C2%AB%C3%95%C2%8A%C3%AC%C2%8E%C3%A3P%C2%ADVI%1A%C2%83%C3%AF%C2%8DP%C3%AB%C2%8D%10%C3%80q%1C%1C%C3%87A%C3%93%C2%B4%C3%A8d%00%C2%8A%C2%A2%60%C2%9A%26%C3%87%C3%87%C3%87%C2%A8%C2%AA%C2%8A%C3%AF%C3%BB%C2%B4Z-%1E%1E%1E%C2%BA%C3%BE%C3%9Fn%C2%B7%C2%A9%C3%95j%5D5%2F%C2%95J%C2%A8%C2%AA%1A4~%12%14%08%C2%86%C3%81%C2%B32%C2%99%0C%C3%A5r%19%5D%C3%97%C3%99%C3%9B%C3%9B%C3%A3%C3%A4%C3%A4d%C3%A0%18k6%C2%9B%1C%1D%1DE%C2%B7vrr%C2%92%C3%A9%C3%A9%C3%A9%C3%A4%C2%94%C3%B6jhh%C2%88%C2%A9%C2%A9)l%C3%9BF%C3%97u%00vvvP%14%C3%A5%C3%85%C2%94%C2%86R%14%C2%85%C3%A5%C3%A5%C3%A5%3F)%0D%23%C2%84%C2%A0W%C3%8A%C3%A52%C2%9E%C3%A7%C2%A1i%1A%C2%86a%60%3C%C2%8F%C2%BB%C2%B8l%C3%9Bfmm%C2%8D%C3%83%C3%83%C3%83W%C2%81%C2%95J%C2%85%5C.%171%C2%940%3A)%25%19%C3%93ddd%04%C3%8B%C2%B2%C3%88%C3%A7%C3%B3%C2%89%C2%B0P%5B%5B%5B%C2%98%C2%A6%C2%89%10%22Z%C2%BDJ%C2%A7%C3%93%C3%8C%C3%8F%C3%8F%C3%B7%C3%9F%C3%92%C3%97%3E)I%C2%B2%2C%C2%8B%C3%8D%C3%8D%C3%8D%17%C3%B7%2C..%C2%A2%C2%AAjw%1F%C3%B6%C3%8E%C3%92%C3%B7hcc%C2%83b%C2%B1%18%3D%C3%87%C2%A3-%14%0A%C3%8C%C3%8C%C3%8C%247%3E%04i%C3%BD%C3%99l%C3%B2p%7F%1F-%C3%97u%C3%B9%C3%95nG%C3%8B%C3%B3%C2%BC.%C2%A0a%18loo%C3%B7%1DD%08%C3%81%C3%92%C3%92Rb%C3%A3w%0D%C3%AF%C3%9A%C2%B7o%C2%AC%C2%AF%C2%AF%C2%BF9%C3%82t%26%C2%83%10%C2%82%C3%A1%C3%A1a%5C%C3%97%C2%8D%C3%AC%C2%B6m%C2%93%C3%8F%C3%A7%13K%C2%A5%C3%85%1B%C3%9B%7B%C3%87%24%01%22H%C2%B1X%C2%8C~%C3%AB%C2%BA%C3%8E%C3%AC%C3%AC%C3%AC%C3%80%7B%C2%A1%09!%C2%B0m%C3%BB%5D%C2%A0x%2BA%C3%B0%C3%91~zz%C3%A2%C3%BA%C3%BA%C2%9A%C2%B9%C2%B9%C2%B9hB%25%C3%A97%C3%95%C2%80%C3%B0%0FF%1Fq-%00%00%00%00IEND%C2%AEB%60%C2%82",//"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%19%00%00%00%19%08%06%00%00%00%C3%84%C3%A9%C2%85c%00%00%01UIDATH%C2%89%C3%AD%C3%96%C2%BFK%C3%83%40%14%C3%80%C3%B1o.%C3%B7%C2%A0%C2%83%C3%A6%C2%AF%10ts%C2%B1%1D%C3%85A%1A%1D%14tv%2F%0E%C3%A2%22J%11W%07%07%C2%A98H%07%17%C2%BBj%05AD%C2%A8%20%C2%A2%C2%83(%C3%B8%C3%A7%C2%B4%C2%B5%C3%B9%C3%A1P%C3%A8%60%C2%93%C2%BB%C2%B4%C2%B6%C3%A8%C3%A0%C2%83%C3%80%C2%91%7B%C2%97%0F%C2%B9%C2%97%7B%C3%84%C3%B1%7D%3Ff%C3%8C%C2%A1%C2%B3%24y%C3%9E%04%3B%C2%BB%C2%9Bx%C3%9EdjNy%C3%AF%C2%90f%C2%B35%1C%C3%A2j%C2%97%C3%BD%C2%83m%C2%A6g%C2%A6%C2%8CyJ%C2%A9%C3%B49%1BR*mX%01%5B%18%C2%91%C2%B9%C3%BC%2C%C3%85%C2%A5%C2%85%1F%01Vde%C2%B5%C3%B8c%C3%80%C2%8Ah%C3%AD%C2%8E%1F%19U%C3%BC%23%7F%0F%C3%89%C3%94V%00%C2%A8%C3%9F%C3%B5%C3%9F%5B_%1E1rv1%1E%C3%A4%C3%AA%C3%B2%C2%96%C2%87%C3%863%00%5B%09%C3%B3%C2%A7%C2%95%C3%B3%C3%9E%C2%B8%C3%9D%C3%BEL%7D%C2%8E%C2%93%C2%B5%C3%95_%C2%B7%C3%BA%3B%C3%ACZ.%C2%97e%C3%A9%2F%17~1%C2%8A%C3%88%C2%87%C2%A1qq%C2%B9%C3%93%C3%A9%0E%C3%A2%C2%98%C2%86%C3%AB%C3%B2%C3%A6%26%C2%B7%C2%A1T%C3%A4Q)%0Aa%C3%98%C2%85%C3%A2%C3%A4%1D-%04%01%00%C3%B7Z%C3%B3%C2%9E%02%C2%80a%C2%BB%02%C3%A0H%C2%84%C2%97%C2%A4%C3%85%C2%8E%C3%93%C2%BBnD%C2%A8%C2%8A%60*%C2%AC%C3%B1%C3%AB%0A%C2%80c%11B%60%3Ea%C3%AB%C3%AAZS%C3%93%C3%B6S%60-%7C%04%C2%9C%C2%88%C3%B0%C3%B4%C3%AD%C2%8D%C2%B2%02%C2%90%C3%B10F%40E%C2%84%C2%A6%C3%A3%C3%A0%07%015%11%C3%AA%C2%86%1A%0C%C2%85%00%C3%84%40Uk%5E%C2%95%C3%A2%C3%83%C3%B0%C3%93%C2%90%14%03e%C3%8700%00%C3%B0%05%C3%9DlO%3D%0Al%16%C2%AE%00%00%00%00IEND%C2%AEB%60%C2%82",
            getImg: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%18%08%06%00%00%00%C3%A9%C2%9C%C2%9D%C2%82%00%00%04%26IDATH%C2%89%C2%BD%C2%95%C3%8BK%5BY%18%C3%80%7F%C3%B7%C3%A6a%C2%A2%22%26%C2%8D%C2%A1Z%1F-%C3%B5Q%C2%AD%C2%A0V7%C2%A5%C2%A5n%0C%C3%85%C3%AAB%C2%A1%08jW%C2%9D%C2%88%08%C2%AE%C2%B2%C2%B4%08.%C2%A4tQ%11%175%C3%B3%2Ft%23%14%5D(%C2%B4%C3%9BB%12%18%03C%C3%80%C2%8E%22%C2%85%C3%B8%C3%A0%1Ah%C2%85%C2%A8%C2%89%C3%A9%3D%C3%B7%C3%8C%C3%82%C3%A6%C2%9A%C3%B8h%C2%9D%0E3%1F%1C%C3%AE%C2%BD%C3%A7%C3%B1%C3%BD%C3%8E%C3%B7%C2%BC%C3%8A%C3%84%C3%84%C2%84%C3%A4%7F%14%C2%ABa%18%C3%A7%26%15E%C3%B9%C3%AF%C2%80R%C2%9E%18(%C2%84%C3%A0%C2%8FH%C3%A4_%C3%81%2C%16%0Bm%1D%1DW%03J))p%3A%C3%B9%C3%8D%C3%AF%C3%BFe%C3%A0%C3%AFo%C3%9E%C2%90%C3%95w)P%C3%97u%C3%82%C3%A10RJ%0A%C2%9D%C3%8E_%C2%86e%C3%A5%C2%A7%40%C3%8300%0C%03%5D%C3%97%C3%81%C3%A1%00Nb%C3%A8%C3%B1x())A%08%C2%81%C2%A6i%C2%A4R%C2%A9%2B%01%2F%C3%8A%C2%89%3C%C3%A0%C3%99%1BY%2C%16%C3%AE%C3%9D%C2%BB%C2%87%C3%9B%C3%AD6%C3%A7%C3%AA%C3%AB%C3%AB%C2%89%C3%85bloo_%C2%AA(%16%C2%8B%C3%B1g%2C%C2%86%C3%8B%C3%A3%C2%A1%C2%AA%C2%AA%C3%AAr%C2%A0a%18H)O%C3%86w%C3%A5%C2%B908%C2%B1%C3%B8%C3%AE%C3%9D%C2%BB%C3%AC%C3%AF%C3%AFsxxh%C3%8E%0B!%C3%98%C3%9A%C3%9A%C3%82%C3%ADv%C3%B3%C3%AA%C3%95%2B%7C%3E%1F%C2%A1P%08EQ%C3%98%C3%9A%C3%9A%C2%A2%C2%A0%C2%A0%C2%80%C2%96%C2%96%C2%96%C2%BCDTM%C2%98%C2%94%20%25%15%15%15%17%C3%9ELQ%14%C2%AE_%C2%BF%C2%9E%07%1B%1C%1C%C3%A4%C3%B5%C3%AB%C3%97%C2%8C%C2%8D%C2%8DQ%5C%5C%C2%8C%C3%9F%C3%AF%C3%A7%C3%B6%C3%AD%C3%9B%2C%2C%2C%60%C2%B1X%C3%B8%C3%B2%C3%A5%0Bsss%08!%C3%88%C2%86N%3D%C3%ABR%C2%AB%C3%95z%C2%A9%3Bl6%C2%9B%C3%B9%C3%BE%C3%A1%C3%83%07%C3%9A%C3%9A%C3%9A%C2%98%C2%9E%C2%9E6%C2%AD%C2%B0%C3%99l%C2%A8%C2%AA%C2%8A%C3%97%C3%AB%25%10%08%C3%B0%C3%B4%C3%A9S%C3%ACv%3B%C3%A9t%C3%9A4J%C3%8Du)%402%C2%99%C2%BC%14%C2%98%C2%BB%C2%B6%C2%B2%C2%B2BSS%13%C3%A5%C3%A5%C3%A5%C3%A7B%C2%A0%C2%AA*%0E%C2%87%C2%83h4%C3%8A%C2%B7o%C3%9F%C2%88D%22D%C2%A3Qt%5D%3FuiV666.%C2%84%1D%1C%1C%C2%B0%C2%BB%C2%BBk~%3F~%C3%BC%C2%98%C2%A5%C2%A5%25%C2%84%10%C3%B4%C3%B4%C3%B4%C3%A0r%C2%B9%C3%8C%C2%B5'O%C2%9E%00%C2%A0i%1A6%C2%9B%C2%8D%C2%8A%C2%8A%0A%C3%92%C3%A94%C3%81%60%C3%B0%C3%94%C2%A5%C3%99%C3%A7%C3%9E%C3%9E%1E%C3%91h%C2%94%C2%A3%C2%A3%23s%5E%C3%934%22%C2%91H%5E%C3%8A%C3%9F%C2%BF%7F%C2%9FL%26%C3%83%C3%8E%C3%8E%0E%C3%95%C3%95%C3%95455%C2%99k%5E%C2%AF%C3%97%C2%8C%C3%99%C2%A3G%C2%8F%C3%B0%C3%BB%C3%BD444%C2%A0(%C3%8AIY%C2%9C%C2%8D%C2%A3%C2%A6ih%C2%9A%C2%86%C3%95j5%0Ff%5D%C2%B5%C2%BA%C2%BA%C3%8A%C3%92%C3%92%12%C3%8F%C2%9E%3D%23%C2%95J%C2%B1%C2%B2%C2%B2%C3%82%C3%88%C3%88%08%03%03%03%00tuuq%C3%A3%C3%86%0D%C2%8E%C2%8E%C2%8E8%3E%3Efhh%C2%88L%26%C3%83%C3%AA%C3%AA*%C3%9D%C3%9D%C3%9D%C3%A7c%C2%98%2B%C2%BA%C2%AE%C2%9B%C2%B0%C3%82%C3%82B%3E%7D%C3%BA%C3%84%C3%9B%C2%B7o%C3%A9%C3%A8%C3%A8%C3%A0%C3%A5%C3%8B%C2%97%04%02%01%C2%B6%C2%B7%C2%B7I%C2%A5R%C2%94%C2%96%C2%96%02%C3%90%C3%9A%C3%9AJYY%19v%C2%BB%C2%9D%C3%91%C3%91QjjjX%5E%5E%C3%860%0C*%2B%2B%C3%B3%7B%C3%A9Eb%C2%B7%C3%9B%C3%B1z%C2%BDx%3C%1E%5E%C2%BCxA__%1F%C2%9D%C2%9D%C2%9DTWW%13%0A%C2%85%C3%B2%3Cp%C3%B6%5CUU%15%C2%89D%C2%82P(%C3%84%C2%AD%5B%C2%B7%C2%90R%C2%9E%16%3E%C3%80%C2%B5k%C3%97%C2%B8y%C3%B3%26B%08%C2%ACV%2B%0E%C2%87%03%C3%87%C3%B7v%070%3C%3C%C3%8C%C3%AC%C3%AC%2C%C2%8D%C2%8D%C2%8D%C2%B4%C2%B7%C2%B7%C3%93%C3%9C%C3%9CL%22%C2%91%C3%80%C3%B9%C2%83%1E%1C%C2%8F%C3%87%C3%914%C2%8D%07%0F%1E%C2%9C%C2%94E%C3%96%3A)%25%C2%85EE%C2%B8%5C.%3C%1E%0F%C2%A5%C2%A5%C2%A5y0%C2%80%C3%BE%C3%BE~%7C%3E%1FSSS%C2%AC%C2%AD%C2%AD%C2%99V%C2%A8%C2%AAz!LJ%C3%89%C3%BB%C3%B7%C3%AF)%2B%2B%C3%8B%2F%C3%BC%C2%9Fu%C3%B8%5C%C2%99%C2%9C%C2%9Cdpp%C2%90%600%C3%88%C3%A6%C3%A6%C3%A6%0F%C3%B7%26%C2%93I%C3%82%C3%A10w%C3%AE%C3%9C%C2%B9%C2%B8%C3%B0%C2%AF%C2%8A%1D%19%19%C2%A1%C2%B7%C2%B7%C2%97%C2%99%C2%99%19%12%C2%89%C3%84%C2%A5%C3%BB%3E%7F%C3%BE%C2%8C%10%C2%82%C2%A2%C2%A2%C2%A2S%60n%C3%92%1C%26%C2%93%C3%AC%7F%C3%BDj%C2%8E%C2%83%C2%83%03%C2%8E%C3%93is%08!Le%C3%A3%C3%A3%C3%A3%C3%B8%7C%3E%C2%82%C3%81%20%C2%99L%C3%A6%1CL%08%C3%81%C2%BBw%C3%AF%C2%A8%C2%AD%C2%AD%C3%8D%2B%2F%C2%B3%0E%C2%A5%C2%94%C3%BC%C2%B5%C2%BE%C3%8E%C3%B3%C3%A7%C3%8F%C2%AFh'(%C2%AAJ%3C%1E%C3%A7%C3%A3%C3%87%C2%8F%3C%7C%C3%B8%C3%90%C3%AC%C3%83%C2%86a%10%0E%C2%87%C3%99%C3%98%C3%980%C2%93%25%2B%C3%96%C3%9C%C2%B4%16%3F%C3%B9y%C2%9E%13%C3%83%C3%80%C3%A9t2%3F%3F%C3%8F%C3%82%C3%82%02%3D%3D%3D%C2%A8%C2%AA%C3%8A%C3%A2%C3%A2%22%C2%9A%C2%A6%C3%91%C3%92%C3%92Bqqq%1EP%19%1E%1E%C2%96%C3%A9t%C3%BA%1Fr%C2%8C%3C%25%C2%BA%C2%AE%13%C2%8F%C3%87Y__%07%C2%A0%C2%AE%C2%AE%C2%8E%C3%9A%C3%9A%C3%9AsY%0E%C3%B07X%C3%A2U%C2%A3%C3%A2RL4%00%00%00%00IEND%C2%AEB%60%C2%82",//"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%19%00%00%00%19%08%06%00%00%00%C3%84%C3%A9%C2%85c%00%00%02%C3%B4IDATH%C2%89%C3%95%C2%96MH%14a%18%C3%87%7F%C3%AFl%C2%93Zi%3B%C3%AB%22%C2%B5%19%C3%82n%C2%99%C3%A2(%09%11%1DJA%C3%85%C2%A5%2FDJ(%C3%A9%C2%B4%C3%9DJ(%C2%8C%3E5%C2%8A(%C3%ABd%C2%87%C2%A2%C2%A0K%C2%9D%C2%82%C3%B0%C3%92'%C3%95%C3%85%C2%A5CTD%14)%C3%99f%03m%C2%8D%C2%95%11%C2%8E%C3%AEb%C2%BB%C3%9Bn%3B%1D%C3%8A%C2%ADiw%C2%B3%C3%88%C2%88%C3%BE%C3%B0%1Ef%C3%9E%C3%A7%7D~%C3%8F%C3%B3%C2%9F%C3%B7%C3%A5%1D%C3%A1%C3%B5zM%C3%BE%C2%B2%C2%A4%C2%A9JTYYI%7D%7D%C3%BD%C3%94C%C2%8A%C2%8B%C2%8B-%C2%90%C2%B2%C2%B22%00Z%5B%5B%C2%A7%06%C2%A2i%1AMMM%C3%B8%7C%3E4M%C2%B3%C2%BCW%14%C3%85%12%3B-%5B%12%C2%B7%C2%BB%C2%84%C2%A5%C3%8B%C2%AA3%C3%8E%5D%C2%BAx%0D%C2%B5%C2%B2%0C%C3%830%C3%92%12%C3%BE%C2%A8%C3%A6%C3%A6%C3%A6%C3%8C%C2%90%C2%85%C2%A5n%C2%BA%C2%8E%C3%ADE%C2%963%C3%97%C2%B0ac%13G%0Ew%C3%93%C3%9F%C3%9FOMM%0D%5E%C2%AF%C3%972o%18%06%00%C2%B5%C2%B5%C2%B5%C2%B8%5C%C2%AEt%C2%BB%C3%AC%C3%B6%02%C3%B6%C3%ACkC%C3%92%C3%9F0~%C3%B2%2C%C2%B1%C3%9E%C3%9BY%C2%AB%0C%04%02%00%C3%94%C3%95%C3%95%C2%A5%3A%C3%B2%C3%B9%7C%0C%0F%0F%03%C2%A0%C2%AA*%C2%A1P%C3%88%C3%9A%C2%89%C3%8D%26%C2%B1s%C3%B7%16%0A%0B%15%C2%8C%C3%AD%07H%04u%C2%90%04%C3%8E%25U%24%C2%9E%0C%C2%B2%C3%AB%C3%BCU%1C%0E%07%C3%BB%0F%C2%B6%01P%C2%B5%C2%B8%C2%94x%3C%C2%8E%2C%C3%8B%C2%A9%1C%C2%AA%C2%AAb%18%06---%00%C3%B8%C3%BD~%2B%C3%84%C2%B7y%23%15%C3%AA%22%00%C2%84%C2%BD%00%C2%82%40%C3%92dt%C3%87!%12%01%C2%8Dy%C2%ABV%C2%B1%C2%B8%C2%BA%C2%9A%C3%ABW%C3%AF2%3A%12%C3%85%C3%AE%C3%88%25%12%C2%89%C2%90%C2%9F%C2%9Fo%C3%A9p%C2%A2%C2%ABP(%C2%84%C2%AE%C3%AB%C3%9F%20%C2%8A2%C2%9B%C3%95k%1B%08w%C2%9D%C3%A0%C3%A3%C2%9D%07%20%09L%C3%B3%C3%8B9%C2%8D%3F%7D%0E%C3%80%C3%88%C2%993%18%5D%5D(%C2%8ABcccV%1B'%C3%A4%C3%B7%C3%BB%C2%81%C3%AF%C2%B6%C2%B0k%C3%9E%1C%C2%88%C3%85%C2%88%C3%9E%C3%B0%C2%93%1C%0B%C2%914%C3%86%10B%C2%A4%C2%86%C2%94%C2%9B%C2%83%5C%C2%B1%C2%88g%C2%81G%C2%A9%0F%C3%BB3E%22%11t%5D%C2%B7B%C2%84%10%C2%90%C2%93%C2%83%C3%BC%C3%95.%00%C3%934S%23%19%C2%8D%01%26H%C2%82g%C3%8F%1FO%0A%C3%BA%C3%BE%C3%AC%C2%A4%C3%AF%C2%AESGq%5E%3E%C2%87%C3%A4t%C2%A4-%C3%9C%3A%3A%C2%8E%19%0A%030%C2%A8%C3%B5%11%0E%C2%87%C2%BF%14%C3%B7%C2%BB%10%C2%80%C3%84%C2%8BW%7Cz%3F%02%02D%C2%89%C2%8B%C2%BC%C2%86%15%08!%C2%90%C3%8B%17%C3%90yl%3F%1D%C2%9D%C3%AD%00%0C%04%1E%12%0C%06%C3%93%C3%96%C3%B7%C3%B6%C3%B6%C2%A6%C2%AC%C2%82%2C'%5E.u%C2%A3%C3%8D%C2%B1%C3%A1~%C2%97%C2%A4%60C3%C2%B9k%1A%C2%98%C2%B1i%1D%C3%92%7C%17%C3%98l%C2%96%C3%98%C2%B7%C3%AF%5E044%C2%84%C3%87%C3%A3%C2%A1%C2%A8%C2%A8%08M%C3%93%18%18%18%C2%B0%C3%84d%C2%84%0C~xM%C3%BB%C3%B2%11%C2%AE%C3%B8.%C2%90%3B%C3%8B%09%C2%80%C3%8DSb%C2%89%C3%A9%C3%A8l%C3%A7%C3%88%C3%A1n%00zzz%2Cs%1E%C2%8F%C3%87%C3%B2%C2%9C%C3%91%C2%AE%C2%97%C3%86%2B%0Ag8p~%05d%C3%93%C2%84m%C2%93)%C2%B3%5D6%C2%99h%22%C3%BAK%09%3A%3A%C3%9B%C2%B9%7F%C2%AF%C3%AF%C2%A71%19%3B%C2%A9%C2%9A%C2%AB%12%C2%8DG%C2%B9%1B%C2%BC%C3%BFK%C2%A0%C3%89%C2%94%11b%C3%8F%C2%9B%C3%8D%C3%8A%C3%B2F%C2%BAo%C2%9D%24%1C%0B%C3%BF%1D%08%C3%80%C2%B6%C2%9A-%C3%886%C2%99%C2%837%C2%8F%C3%BE1%24%C3%AB%C2%A55k%C3%BALN%C2%AF%3F%C2%8E%3E%3A%C3%B4%C3%87%10%C3%B1_%C3%BD%C2%AD%C3%BCs%C3%88g%C2%BA%C2%AC%03%C2%90c%C2%B6%26)%00%00%00%00IEND%C2%AEB%60%C2%82",
            //
            Smallpath: "%C3%BF%C3%98%C3%BF%C3%A0%00%10JFIF%00%01%01%00%00%01%00%01%00%00%C3%BF%C3%9B%00C%00%03%02%02%03%02%02%03%03%03%03%04%03%03%04%05%08%05%05%04%04%05%0A%07%07%06%08%0C%0A%0C%0C%0B%0A%0B%0B%0D%0E%12%10%0D%0E%11%0E%0B%0B%10%16%10%11%13%14%15%15%15%0C%0F%17%18%16%14%18%12%14%15%14%C3%BF%C3%9B%00C%01%03%04%04%05%04%05%09%05%05%09%14%0D%0B%0D%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%C3%BF%C3%80%00%11%08%00%20%00%20%03%01%11%00%02%11%01%03%11%01%C3%BF%C3%84%00%1F%00%00%01%05%01%01%01%01%01%01%00%00%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%C3%BF%C3%84%00%C2%B5%10%00%02%01%03%03%02%04%03%05%05%04%04%00%00%01%7D%01%02%03%00%04%11%05%12!1A%06%13Qa%07%22q%142%C2%81%C2%91%C2%A1%08%23B%C2%B1%C3%81%15R%C3%91%C3%B0%243br%C2%82%09%0A%16%17%18%19%1A%25%26'()*456789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%C2%83%C2%84%C2%85%C2%86%C2%87%C2%88%C2%89%C2%8A%C2%92%C2%93%C2%94%C2%95%C2%96%C2%97%C2%98%C2%99%C2%9A%C2%A2%C2%A3%C2%A4%C2%A5%C2%A6%C2%A7%C2%A8%C2%A9%C2%AA%C2%B2%C2%B3%C2%B4%C2%B5%C2%B6%C2%B7%C2%B8%C2%B9%C2%BA%C3%82%C3%83%C3%84%C3%85%C3%86%C3%87%C3%88%C3%89%C3%8A%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A1%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%A8%C3%A9%C3%AA%C3%B1%C3%B2%C3%B3%C3%B4%C3%B5%C3%B6%C3%B7%C3%B8%C3%B9%C3%BA%C3%BF%C3%84%00%1F%01%00%03%01%01%01%01%01%01%01%01%01%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%C3%BF%C3%84%00%C2%B5%11%00%02%01%02%04%04%03%04%07%05%04%04%00%01%02w%00%01%02%03%11%04%05!1%06%12AQ%07aq%13%222%C2%81%08%14B%C2%91%C2%A1%C2%B1%C3%81%09%233R%C3%B0%15br%C3%91%0A%16%244%C3%A1%25%C3%B1%17%18%19%1A%26'()*56789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%C2%82%C2%83%C2%84%C2%85%C2%86%C2%87%C2%88%C2%89%C2%8A%C2%92%C2%93%C2%94%C2%95%C2%96%C2%97%C2%98%C2%99%C2%9A%C2%A2%C2%A3%C2%A4%C2%A5%C2%A6%C2%A7%C2%A8%C2%A9%C2%AA%C2%B2%C2%B3%C2%B4%C2%B5%C2%B6%C2%B7%C2%B8%C2%B9%C2%BA%C3%82%C3%83%C3%84%C3%85%C3%86%C3%87%C3%88%C3%89%C3%8A%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%A8%C3%A9%C3%AA%C3%B2%C3%B3%C3%B4%C3%B5%C3%B6%C3%B7%C3%B8%C3%B9%C3%BA%C3%BF%C3%9A%00%0C%03%01%00%02%11%03%11%00%3F%00%C3%BD%0B%C3%B1f%C2%B3%C3%BF%00%08%C2%B6%C2%9B9%C2%82%08g%C2%BEx%C3%98%C3%86%C2%B2%1E7v%C3%8F%C2%B5o%C2%88%C2%AD%7F%C2%8Bdq%C3%A5%C2%98(Q%C2%8F%3B%C3%9D%C2%9Eg%C3%A1%C3%9F%C2%88Z%C2%B3%C3%B8%C3%894%C3%9D_Y%C3%93Df%C3%9B%C3%AD%12C%2CF%19Nx%00%2F%C3%B7G%C3%B7%C2%8Dp%C2%ACE%C3%AF(%C2%ABE%C3%A8z%C3%98%C2%9A1%C2%9C%5C%1CW7%C3%A2%7C%C3%81%C3%BBD%7C%26%C3%97c%C2%BF%C2%B8%C3%95%C3%B5Y%60%C2%81o.w%C3%9BE%13%7C%C3%92%C2%B18%C3%A0%03%C3%93%18%C3%A7%3D%C3%AB(%C3%90%C2%A5%C2%84%C2%8AnW%C2%93%C3%AC%C2%8F%C2%8F%C3%84a%C2%A4%C2%96%C2%B2%C3%97%C2%B1%C3%A31%C3%A8%C3%8D%15%C2%B9%17%C2%B1%C2%AF%C3%9A%06P%C2%AF%C3%9E%20g%C2%BB%1E%C3%B4%C3%BD%C2%B4%C2%A2%C3%9D%C2%9D%C3%82%C2%86H%C3%AA%C2%BEj%C3%AE%C3%8B%C2%B1%C3%BAe%C3%B1%C3%93EK%C3%BD%12%5D6%C3%90%C3%8F%15%C3%9E%C2%A07%19%C3%A0o%C3%9E(B%09%0B%C3%B5%06%C2%BA%C2%AA%C3%BB%C2%A9Tq%C2%BAM%5Dw%3E%C2%96%C2%92s%C2%BCT%C2%AC%C3%AD%C2%A3%C3%AD%C3%A6x%C3%AF%C3%84%C3%BF%00%C2%88%5E%11%C3%93t%C3%9D%1A%C3%96HQ%7CD%C3%86-%22y%C3%AE%C3%93e%C3%A6%C3%80%C2%80%C3%B9%C2%8A%C2%83%25%C2%94%1Cd%C3%A7%C2%A1%3Dh%C2%A5C%11%C2%8BN%C2%94%15%C2%A0%C3%AF%24%C2%BA%5D%7F%C3%80%1F%C3%AE0%C3%B2U%C2%A7.j%C2%89(%C2%B7%C3%96%C3%9D%C3%BE%C3%B3F%C3%A2%C3%9BMo%04h%C3%96%C2%9A%C3%B4%C2%B1j1%09L%C2%B6%C3%B3%3E%5Db*p%C2%A47n%3BW%2C%C3%A9%3AqW%C3%95%1A5%0A%C3%B3rq%C3%95%1Eo%C3%A2%C2%AF%C2%83%C3%9E%15%C3%96%C2%BE%C3%93%7Bi%C2%AA%1B%16's%10%C3%81%C3%A3%C3%8F%C2%A9%C3%AE%3F*%C3%8F%C2%966*%C3%B5%2Fu%C2%A9%C3%9Dx%5B%C3%A2%1E%C2%A1%C2%A9%C3%B8%C2%97%C3%82%C3%B7%C2%B7%C3%9A%C2%93%C3%9DX%5CH%C3%88%10%C3%87%C2%B9%C2%84%C3%8C%0F%00%C3%A4%C3%AD%18%3D%C3%8D%7B%14%C2%A7%0A%C3%B4Z%C2%8B%C3%94%C3%B8%C3%8C%15Z%C3%B1%C3%A4%C2%A996%C2%9E%C3%A7_%C3%A2%C3%8F%C2%84%C2%9A%07%C2%8Fg%C2%B8%C3%96u%16c%7Bd%C3%83d%C2%91%C3%A0%C3%89m2%C2%8E7q%C3%B3)%C3%BEY%C2%AE%C2%9C%06.%C2%A55%C3%AC%C2%96%C3%97%C3%9B%C3%BC%C2%8F_%1D%C2%85%C2%8C%C2%9F%C2%B5%5B%C2%B5k%C3%BEW*%C3%B8%C2%9A%2B%3F%10x%1A%C3%B6%18-%C3%92%C3%8A%C3%AE%C3%9C%C2%B4%C2%96%C3%90%C3%85%C2%80%1E%40%17r(%3D%7B%C3%B1Zb%C3%B0%C3%A97%14%C3%AF%7DI%C3%81V%C2%AB8%C3%B3%C2%B8%C3%9A%C3%9A%1E%3B%C2%A6I%C3%A2%C2%BF%0Ciwq%C3%AB6%C3%96%C3%91%C3%A9%1A%C2%84%C2%82%01%C2%8BpDg%C3%B8I%C3%8F%03%C2%9E%3F*%C3%B0%C3%95)I5%C2%B1%C3%A9%C2%AA%C3%B2%C2%A56%C2%AA%C3%AEx%C3%86%C2%91%C3%A3k%C2%9F%09%C3%9F%5C%5B%5C%C2%BB%C3%BD%C2%8De%C3%BD%C3%8D%C2%BD%C2%B3e%22%C2%98%1D%C3%98%C3%9Ey%C3%88%C3%A8H%C3%B5%C2%AF%C2%9F%C3%83c%5E%16z%C2%AB%C2%BE%C2%A7%C3%8CA%3AI%C3%87%C2%A7c%C3%A8%C3%BF%00%C2%85%C2%9E0%C3%B1%19%C3%97.5%0B%7B)_N%C2%9D%1AYac%C2%B9%C2%A6F%3B%C2%89%C3%87l%12y%C3%AD%C3%8D%7B%C2%B4%C2%9C%C2%BD%C2%AF%3E%C3%88%C3%BAx%C3%8F%C2%9A%C2%82RGu%C3%A1%C2%8DV%C3%9B%C3%87%C2%BAN%C2%9D%C3%A2kf%C2%84%C3%A8%C2%B0%C3%8B%24%02%C3%96%15'%C3%88%C2%97'%26Q%C3%AB%C2%83%C2%8C%0E%C2%9E%C3%B5%C3%AEb%23%2C%3C%C2%9C%25%C2%BB%C3%96%C3%BE%5EGv_V%C2%95Zv%C2%A7%C2%BA%C3%90%C3%AF%26%C3%B0%7C3%C3%9B%00%22%C2%8AX%26%C3%A5%C2%ADe%3B%C3%A0%C2%97%C3%A9%C3%BE%06%C2%B8%14%C2%BB%C2%9DSP%C2%9B%C3%B7%C3%A3%7F%C3%8C%C3%BF%C3%99",
            Dump: "%C3%BF%C3%98%C3%BF%C3%A0%00%10JFIF%00%01%01%00%00%01%00%01%00%00%C3%BF%C3%9B%00C%00%03%02%02%03%02%02%03%03%03%03%04%03%03%04%05%08%05%05%04%04%05%0A%07%07%06%08%0C%0A%0C%0C%0B%0A%0B%0B%0D%0E%12%10%0D%0E%11%0E%0B%0B%10%16%10%11%13%14%15%15%15%0C%0F%17%18%16%14%18%12%14%15%14%C3%BF%C3%9B%00C%01%03%04%04%05%04%05%09%05%05%09%14%0D%0B%0D%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%14%C3%BF%C3%80%00%11%08%00%20%00%20%03%01%11%00%02%11%01%03%11%01%C3%BF%C3%84%00%1F%00%00%01%05%01%01%01%01%01%01%00%00%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%C3%BF%C3%84%00%C2%B5%10%00%02%01%03%03%02%04%03%05%05%04%04%00%00%01%7D%01%02%03%00%04%11%05%12!1A%06%13Qa%07%22q%142%C2%81%C2%91%C2%A1%08%23B%C2%B1%C3%81%15R%C3%91%C3%B0%243br%C2%82%09%0A%16%17%18%19%1A%25%26'()*456789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%C2%83%C2%84%C2%85%C2%86%C2%87%C2%88%C2%89%C2%8A%C2%92%C2%93%C2%94%C2%95%C2%96%C2%97%C2%98%C2%99%C2%9A%C2%A2%C2%A3%C2%A4%C2%A5%C2%A6%C2%A7%C2%A8%C2%A9%C2%AA%C2%B2%C2%B3%C2%B4%C2%B5%C2%B6%C2%B7%C2%B8%C2%B9%C2%BA%C3%82%C3%83%C3%84%C3%85%C3%86%C3%87%C3%88%C3%89%C3%8A%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A1%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%A8%C3%A9%C3%AA%C3%B1%C3%B2%C3%B3%C3%B4%C3%B5%C3%B6%C3%B7%C3%B8%C3%B9%C3%BA%C3%BF%C3%84%00%1F%01%00%03%01%01%01%01%01%01%01%01%01%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%C3%BF%C3%84%00%C2%B5%11%00%02%01%02%04%04%03%04%07%05%04%04%00%01%02w%00%01%02%03%11%04%05!1%06%12AQ%07aq%13%222%C2%81%08%14B%C2%91%C2%A1%C2%B1%C3%81%09%233R%C3%B0%15br%C3%91%0A%16%244%C3%A1%25%C3%B1%17%18%19%1A%26'()*56789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%C2%82%C2%83%C2%84%C2%85%C2%86%C2%87%C2%88%C2%89%C2%8A%C2%92%C2%93%C2%94%C2%95%C2%96%C2%97%C2%98%C2%99%C2%9A%C2%A2%C2%A3%C2%A4%C2%A5%C2%A6%C2%A7%C2%A8%C2%A9%C2%AA%C2%B2%C2%B3%C2%B4%C2%B5%C2%B6%C2%B7%C2%B8%C2%B9%C2%BA%C3%82%C3%83%C3%84%C3%85%C3%86%C3%87%C3%88%C3%89%C3%8A%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%A8%C3%A9%C3%AA%C3%B2%C3%B3%C3%B4%C3%B5%C3%B6%C3%B7%C3%B8%C3%B9%C3%BA%C3%BF%C3%9A%00%0C%03%01%00%02%11%03%11%00%3F%00%C3%BDS%C2%A0%04%C3%88%C3%B5%C2%A0%03p4%01%C3%8FY%C3%AA%C2%B7rx%C2%82%C3%A2%C3%9EO.%5BI2b1%C3%BD%C3%A8B%C3%B1%C3%B3z%C3%A4%C3%A7%1D%C3%874%C3%8Bir%C3%9D%13x%C2%AF%C3%85%10xcM%C3%B3%C3%9D%0C%C2%B3HvC%08%C3%A0%C2%BB%7D%7B%0E%C3%A4%C3%95B%0En%C3%88%C3%A8%C3%83a%C2%A7%C2%8A%C2%A8%C2%A9%C3%80%C3%B1%C3%BDo%C3%A2%06%C2%AFs%C2%A9Z%5B%C3%9C%5E%C3%8F%00%C2%BBgX%C3%A3%C2%B3%5D%C2%B1%C2%AE%17v%19%C2%BA%C3%B4%07%C2%92z%C3%97%C2%A3%1C%3D5d%C3%8F%C2%B2%C2%A5%C2%95a%C2%A8%C3%9A3%5C%C3%8D%C3%B7'%C3%B0%C2%A7%C2%8Com%C3%8D%C3%ABKs%7D%04%C2%90%C3%8A%C3%91E%1C%C3%AD%C3%A6%24%C2%98%C3%A8%C3%84%1EH%3E%C3%86%C2%A6t%14%C2%97%C2%BB%C2%A1%C2%86%2F%2BUR%C3%B60Q%3D%13%40%C2%82%C3%9FW%7D7X%C2%B6%C2%B3T%C2%8EDvu%C3%9F%C2%81%0C%C2%999%20c%C2%92Ny%C3%B4%C2%AF%3D%C3%87%C2%95%C3%98%C3%B9%1A%C3%90%C2%95%09%C3%8A%C2%94%C2%B7Fw%C3%85%5D2%C3%A6%C3%A2-%3E%C3%B2%14y%C2%A3%C2%81%C2%9D%24D%19%C3%80la%C2%B1%C3%B8c%C3%B1%C2%AE%C2%8C4%C2%94g%C2%A9%C3%AB%C3%A4%C3%95%C3%A1J%C2%B3Sv%C2%BA%3C%C3%88%C3%B9%3Fi%C3%B3%7C%C3%B0%1Cq%C2%B7w%15%C3%A8%C3%B3F%C3%B7%C2%B9%C3%B7J%C2%BC%1Cl%C2%9A-%5B%C3%98%C2%9DN%60-%C3%A2i%C3%A4%1F%C3%B3%C3%8C%12hs%C2%8A%C3%9D%C2%91%2CE%3Ak%C3%9E%C2%92_3%C3%97%C2%BC%03%C2%A3%5C%C3%A8%C2%9E%1FX.%C3%BEY%5EW%C2%93frT%13%C3%80%C2%AF%26%C2%A3R%C2%9Bh%C3%BC%C3%A70%C2%AD%0A%C3%B8%C2%89N%1B%1D1P%7BVG%C2%9E3%C3%AC%C3%B1%7F%C3%8F4%C3%BF%00%C2%BEh%1D%C3%98%C2%AB%12%2FD%03%C3%A8(%10%C3%AD%C2%A3%C3%92%C2%80%3F%C3%BF%C3%99",
            //UpDown Button
            Setting: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%04cIDATH%C2%89%C3%85%C2%97%C3%9FOSg%18%C3%87%3F%C2%A7%C2%A7%C3%A54i!%C2%82%03%C2%BB%C2%A0i%C2%8Bae%C2%93B%0Da%14%01%C2%91E%C3%B9%C2%A9%C3%86%C3%9B%C2%99%C2%99%C2%999%C3%BF%0F%C3%BF%C2%8Bm%C2%97%C3%AEj%C3%AAfH%C3%A6O0%13%14%C2%A2Q%12h%C2%AB%13%C2%AC%C3%9AV%C2%8A%03%C2%B5%60J!-%3Dmw%C3%A1Z9%7BO%01%C2%B9%C3%B1%7Bu%C3%8E%C3%B7y%C2%BE%C3%AF7%C3%8F%7B%C3%8Ey%C3%8E%C3%B3J%C3%B5%C3%B5%C3%AE%1C%C2%9F%00%C3%86%C3%BC%C2%85%C3%89d%C3%92M%C2%B0%C3%99l%2C%2F%2F%C2%B3%C2%B2%C2%B2%C2%B2%C3%A5E%C3%8B%C3%8B%C3%8BYZZ%C3%92%C2%8D%C2%A5%C3%93%C3%A9%0F%C3%86%26%C2%93%C2%89%13'N%10%0A%C2%85%0A%09%25%25%25%7C%C2%B5o%1Fv%C2%BB%C2%83H%24%C3%8C%C3%94%C3%A4%C3%A4%C2%96L%2B%C2%AB%C2%AA8p%C2%A0%C2%8DH%24%C3%8C%C3%9F%C2%8F%1F%C2%B3%C2%B6%C2%B6V%C2%889%C2%9DN%06%07%07I%C2%A7%C3%93%1F*%0E%C2%85BLLL%14%C2%92v%C3%AE%C3%9CIwO%2F%00v%C2%BB%C2%83%C3%A1%C2%A1a%16%16%C3%A65%26f%C2%B3%19I%C2%92%0A%C3%B7%C2%92%24%C3%91%C3%9E%C3%91Q%C3%90%3Cy%C3%B2D%C2%B3%C3%A6z%18uY%20%16%C2%8Bq%C3%BF%C3%BE%3D%C3%9A%C3%9A%C3%9A%01%C3%B8%C3%B1%C3%AC%C3%99-U%C2%9C%C3%87%C3%A2b%C2%8C%C3%BB%C3%B7%C3%AE%15%C2%8D%1B6%16%2F~%C2%94%C3%99z%04%02%012%C2%99%C3%8C%C3%87%1B%C2%97%C2%94%C2%94%C3%90%C3%95%C3%B5%C3%8D%C2%B6%C2%8D%1B%1A%1A0%1A%C2%8Bnhq%C3%A3%C2%8E%C2%83%07%C2%B1Z%C2%AD%C3%9B6.%2F%C2%AF%C2%A0%C2%AD%C2%BD%C3%BD%C3%A3%C2%8Cw%C3%AC%C3%98A%7B%7B%C3%87%C2%A6%C2%8B%C2%AB%C2%AAJ*%C2%95%22%C2%95J%C3%A9nkg%C3%A7!%C3%8A%C3%8A%C3%8At%C2%B5%C2%BA%7Bq%C2%A4%C2%BB%5Bw%C2%9B~%C3%B9%C3%B9'%C2%A2%C3%91%C2%A8%C3%AEBNg%0D%3F%C2%9C9%C2%A3%C3%A1L%26%13%C2%BD%7D%7D%5C%C2%BCpA%C3%88%17*%C3%9E%C2%B3g%0F%0D%0D%C2%8DB%C2%A2%C3%8F7U%C3%94%14%20%14z%C3%81%C2%A3G%01%C2%81w%C2%BB%1B%C2%B0%C3%9B%1D%1B%1BK%C2%92D%C3%BF%C3%80%C2%80%C2%90%C2%A4%C2%AA*C7oj8Y%C2%96%C2%91eY%C3%83%C3%9D%C2%BCq%03UU%05%C3%BD%C3%91cG1%18%C2%B45%C3%8AUU%C2%BB%C3%8E%C3%89%C2%B2%C2%8C%C3%8Df%C3%A3%C2%B3%C3%8AJZ%5B%0F%08%C3%82%C3%91%C3%91%11%C2%A6%C2%A7%C2%A7%0B%C3%B7_%C2%B8%5C%7Cw%C3%AA%14-%5E%2F%C2%8B%C2%8B%C2%8B%C3%84b1%00%C2%92%C3%89%24%C2%92%24QSS%C2%A3%C3%91%5B%C2%AD%C2%A5%24%12%09r%C2%B9%1C%0B%0B%0Bd%C2%B3Y%C3%A4%C3%83G%C2%BA%C3%8F555Q%C2%B3w%2F%C3%8D%C3%8D_%0BU%C3%84%C3%A3q.%5E%C3%B8%C2%8Dl6%0B%40%C3%BF%C3%80%00%C3%87%C2%8E%1F%C3%87b%C2%B1%60%C2%B1X%C3%B0x%3C%C2%98%C3%8Df%C2%82%C3%81%20%00sss4%C3%BE%C3%87%C2%AD%C2%87%C3%83%C3%A1%20%C2%B1%C2%92%20%C2%A3f0%18%24%C2%8C%C2%B5%C2%B5%C2%B5x%3C%C3%BB%C2%85*%C3%B3%C2%B8uk%C2%B8%C3%90%C3%98%C3%A1%7D%2B%C3%BD%3F%C3%96s%C3%A9t%C2%9A%C3%AB%C3%97%C2%AE%C3%B1%C3%AD%C3%89%C2%93%C2%9A%1CEQhi%C3%B1%C3%92%C3%92%C3%A2ejjr%C3%A3%C3%8E%05%C2%90J%C2%A66K%11%C2%A0%C2%98%C2%95Ms%C2%8C%C2%A3%23%23%C3%B8%7D~%5Cu.%3C%C2%9E%C3%BD(%C2%8AV%C3%94%C3%97%C3%9FO0%C3%B8%C2%B4Pu%C3%BEy%C2%AE%C3%87z%C3%8Ed2q%C3%B8%C3%B0%11!gmm%C2%8D%C2%B9%C2%B9(%C2%AF_%C2%BF%C3%A6%C3%A5%C3%8B%C2%97%C3%88Vk%C3%A9%C2%B9%C3%A5%C3%A58V%C2%8B%C2%85%17%C2%A1%17%C2%B8%5C.%C2%8D%C3%80l6%C2%A3fT%C3%82%C3%A10%00%C3%81%60%C2%90h4Juu5%C2%AB%C2%AB%C2%AB%C3%BC~%C3%A9%C2%92%C3%A6gp%C2%A8%C2%AB%C2%8B%C2%BA%C2%BA%3A%C3%81%C3%B8%C3%B2%C3%A5%3Fx%C3%BB%C3%A6%0D%C3%A3%C3%A3%C3%A3%C3%BC%C3%B3%C3%AA%C2%95%C2%B6%C2%81L%3C%7CHss36%C3%9B%C3%A7%1AQg%C3%A7!%C2%A6%26'y%C3%B7%C3%AE%1D%00Ogfx%C3%BE%C3%AC%19%C2%80%C2%A6c%C2%95%C2%95%C2%95%C3%91%C3%91qP0%C2%8DFg%09%C3%B8%C3%BD455%158%C3%8D3%C3%8Ef%C2%B3%5C%C3%B9%C3%B3%C2%8A%204%1A%C2%8D%C3%B4%C3%B4%C3%B6j%C2%B8L%26%23%C2%B4%C3%89%C3%AE%C2%9E%1E%C3%9D%C2%8Ew%C3%AD%C3%AAUr9%C3%AD%C2%84%25%C2%BC%5C%C2%91H%C2%98%40%C3%80%2F%C2%88%C3%AB%C3%AB%C3%9D8%C2%9D5%02%C2%9F%C3%87%C3%AE%C3%9D%C2%BBil%C3%B4%08%C2%BC%C3%9F%C3%AFcvvV%C3%A0u%7B%C3%B5%C2%8D%C3%AB%C3%97%C2%A9%C2%AB%C3%BBR%C2%98%C3%83%C2%BE%3F%7D%C2%BA%C3%90%C2%99%0C%06C%C3%919-%0FUU%19%1E%1A%C3%92%C2%8D%C3%A9~N%C3%B1x%C2%9C%C3%91%C3%91%11%C2%81%C2%97e%19EQP%14eSS%C2%80%C2%B1%C2%B1%C2%BB%C2%85%C3%B7bK%C3%86%00%C3%A3cc%2C-m%7F%02I%24%12%C3%9C%C2%BDs%C2%A7h%C2%BC%C2%A8%C2%B1%C2%AA%C2%AA%C3%B8%C3%BD%C3%A2%C2%B3%C3%9E*n%C3%9F%C3%BEK3an%C3%99X%C2%96e%C3%9Cn%C3%B7%C2%B6%C2%8D%2B**6%C2%8C%17%1D%C2%8A%C2%BC%C2%AD%C2%ADTT%C2%BC%C3%AF%C3%81%C2%B1%C3%98%5B~%3D%7F%5E%C3%B3I%C3%A4r9%C2%92%C3%89%C2%A4F%C2%B3k%C2%97%C2%AD0%C2%8Dz%C2%BD%C2%AD%3C%7C%C3%B0%40%C2%B7%C3%93i%C2%8C%C2%9DN%C2%A7%26%C2%90%C3%8Bf%C2%89D%C3%82%C3%98%C3%AD%0Efff%C2%84_%5D1%C3%A45%C3%91%C3%A8%2C.%C2%97K%18%C3%A8%7D%3E%1F%00R%C3%BE%C3%ACT%C3%AC-%C3%9D%C3%A88%C2%A2%07%C2%8B%C3%85Bii)%C3%B3%C3%B3%C3%B3%C2%BA%C3%B1%7C%C3%8F%C2%97%3E%C3%95%C2%A1%C3%AD_3s%C2%A3%C2%89%C2%8B%C3%A0%C2%8EM%00%00%00%00IEND%C2%AEB%60%C2%82",
            UpDown: "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%01%C3%A6IDATH%C2%89%C3%A5%C3%97%3F%C2%8A%C2%B3%40%18%06%C3%B0g%C3%82%16%16%C2%82%C3%9A%C3%98%18%10%C3%93%C2%A4Le%C3%A1mr%02%15%C2%BD%C2%87%08%C3%8E%01%02%C3%9E!9%C2%84U%C2%AA%60!%C2%B1%C3%B2%02%16%C2%82%08%C3%B3U%C2%B3%C2%98%C3%9553%C3%86%C2%AF%C3%9A%C2%A7R%C3%9Eq~8%C3%BFP%C2%B2%C3%9F%C3%AF%C2%99%C3%AB%C2%BA%C3%A0!%C2%84%C3%A0%7F%C2%851%06%00(%C2%8A%02_%C2%AE%C3%AB%C2%A2(%0A%C3%A9N%0E%C2%87%03%18cx%3E%C2%9F%C3%92%C3%8F%C2%BA%C2%AE%C2%8B%C2%9D%C3%B4S%00%1C%C3%87A%10%04%08%C3%83%10%C2%8E%C3%A3%C2%AC%C3%A9B%1Ev%1C%07a%18BQ%14(%C2%8A%C2%B2%0A'%C2%84%60'3%C2%A7%C2%B6m%7F%C2%A3%3C%1C%C2%B7m%5B%0A%17~c%C3%8B%C2%B2%C3%A0%C3%BB%C3%BE%0B%3A%C3%86%7D%C3%9F%C2%87eY%C3%9B%C3%82%C2%96e!%C2%8A%22%C2%A8%C2%AA%C3%BAk%1BUU%11E%C2%910%C3%BE%16%16A%C3%97%C3%A0%C2%8B%C2%B0i%C2%9A%08%C2%82%40%08%1D%C3%A3A%10%C3%804%C3%8Du%C2%B0i%C2%9A%C2%88%C3%A3%18%C2%9A%C2%A6%09%C2%A3%3C%C2%9A%C2%A6!%C2%8E%C3%A3E%7C%16%C3%A6%C2%A8%C2%AE%C3%AB%C3%92(%C2%8F%C2%AE%C3%AB%C2%8B%C3%B8%046%0C%C3%A3c%C3%B4'n%18%C3%86%C2%A4%C3%B65%C2%BE!%C2%84%C3%80%C3%B3%3C%3C%1E%C2%8F%C2%8F%C3%91q%3C%C3%8F%C3%83%C3%ADv%C3%BB%3E%C2%AB'0c%0C%C3%97%C3%ABuSt.%C2%84%C2%90ug%C3%B5%16%C3%B9%7B%C3%B0dq%C2%9D%C3%8Fg%C2%9CN%C2%A7M%C2%91%C3%BB%C3%BD%C2%8E%C3%8B%C3%A5%C2%B2%C2%BC%C2%B8%C3%B2%3C%C2%87a%188%1E%C2%8F%C2%9B%C2%A0eY%22%C3%8F%C3%B3%17%C2%9416%1D%C3%AAa%18%40)EY%C2%96%C2%9B%C2%A0%C2%94R%0C%C3%830%C2%A9%C3%8D%C3%8Eq%C3%9F%C3%B7%1F%C3%A3%1C%C3%AD%C3%BB~%C2%B6%C3%BE%C3%AB%C3%A2%C3%A2xUU%C3%92hUU%C2%8B%C3%A8%22%C3%8C%C3%B1%2C%C3%8BP%C3%97%C2%B50Z%C3%975%C2%B2%2C%5BD%C3%9F%C3%82%00%C3%90u%1D%C3%924%15%C3%82%C3%AB%C2%BAF%C2%9A%C2%A6%C3%A8%C2%BA%C3%AEm%5B%C2%A1%7D%2C%C2%82%C3%8B%C2%A0%C3%820%C3%87)%C2%A5h%C2%9AfRk%C2%9A%06%C2%94RaT%0A%06%C2%80%C2%B6m%C2%91%24%C3%89%0B%C3%9E4%0D%C2%92%24A%C3%9B%C2%B62%5Da7%C3%9E%C3%98%C2%B2%C3%B8Z%14%C3%B8qr%C3%89%C3%A2%C3%BCZ6%C2%8C1%C2%90%C3%B1O%C2%9B%C3%A8%C3%87%C3%BD%5C%3B%C3%91%C2%91c%C2%8C%C2%A1(%0A%C3%BC%03Il%C3%B5%5D%C3%A8'j%C2%AB%00%00%00%00IEND%C2%AEB%60%C2%82"

        };
        // var IconDefaultG1 = new XML('<gup>' + ICON.nullImg + '</gup>'); //组1小人图标
        var typeArr = ['EFFECT', 'EXPRESSION', 'ANIMATION PRESET', 'SCRIPTLAUCHER', 'MENU', 'JAVASCRIPT', 'OS'];

        /** 配置写入/读取 */
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "winLocation") == false) {
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "winLocation", "200,500");
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "winSize") == false) {
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "winSize", "300,500");
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "buttonSize") == false) {
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "buttonSize", "30,30");
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing") == false) {
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing", "0,0");
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "dropSelection") == false) {
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "dropSelection", "0");
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "language") == false) {
            app.settings.saveSetting("Sp_toolbar", "language", "ch");
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "scrollingBar") == false) { //创建scrolling数值
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "scrollingBar", 0);
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "scrollingBarVisible") == false) { //scrolling自动隐藏？
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "scrollingBarVisible", true);
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "autoShowSwitchBarControl") == false) { //自动打开切页条？
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "autoShowSwitchBarControl", 0);
        }
        if (app.settings.haveSetting("Sp_toolbar" + BarID.toString(), "codeEditBoxDarkColor") == false) { //设置面板代码编辑框
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "codeEditBoxDarkColor", 'false');
        }


        /**配置文件1 */
        var thisFolder = Folder(Folder.userData.fullName + "/Aescripts/Sp_toolbar");
        var thisFolderBackUp = Folder(Folder.userData.fullName + "/Aescripts/Sp_toolbar/BackUp");//第二份备份

        if (!thisFolder.exists) thisFolder.create();
        if (!thisFolderBackUp.exists) thisFolderBackUp.create();

        var spFileName = File($.fileName.toString()).fullName;
        var str = spFileName.split("/")[spFileName.split("/").length - 1].replace(".jsx", "");

        var special_file = File(thisFolder.toString() + "/" + str + ".xml");
        var special_file_BackUp = File(thisFolderBackUp.toString() + "/" + str + "_BackUp.xml");

        var backupFile = File(thisFolder.toString() + "/backup.xml");

        var tempJsxFile = File(thisFolder.toString() + "/tempJsx.jsx");

        if (!special_file.exists) {
            try {
                var xml = new XML('<Config><general><version>' + gf.version + '</version></general><groupIcon><gup id="Default">' + ICON.littleMan + '</gup></groupIcon><Group></Group></Config>');
                xml.Group = "";
                writee(special_file, xml.toString());
            } catch (e) { alert(e.line + e.message); }
        }
        if (special_file.exists) {//检查配置1是否为空
            var spFileContentRead = readd(special_file);
            if (spFileContentRead == null) {
                writee(special_file, readd(special_file_BackUp));
            }
        }

        /**配置 信息文件夹 */
        var sp_profileFolder = Folder(thisFolder.toString() + '/sp_profileFolder');
        if (!sp_profileFolder.exists) { sp_profileFolder.create(); };

        /**配置 切换栏 */
        var sp_profileSwitchBarPosition = File(sp_profileFolder.toString() + '/sp_switchBarPosition.xml');
        if (!sp_profileSwitchBarPosition.exists) { writee(sp_profileSwitchBarPosition, '<root>\n<check>false</check>\n<position></position>\n</root>'); };
        if (sp_profileSwitchBarPosition.exists) {
            if (readd(sp_profileSwitchBarPosition) == '') { writee(f, '<root>\n<check>false</check>\n<position></position>\n</root>'); };
        };

        /**配置文件2 面板高度记录XML */
        var sp_PanelSetProfile = File(sp_profileFolder.fullName + '/sp_PanelSet.xml');
        var sp_PanelSetProfile_Content = '<root>\n<Panel>\n<buttonColor>\n<colOutside>[.4, .4, .4, 1]</colOutside>\n<colStr> [.5, .6, .65, 1]</colStr>\n<colOutsideHover>[.6, .8, .9, 1]</colOutsideHover>\n<colStrHover> [.7, .8, .9, 1]</colStrHover>\n</buttonColor>\n<BGcolor>3355455</BGcolor>\n<list>70</list>\n<editBox>70</editBox>\n<listKeep>false</listKeep>\n<listJump>true</listJump></Panel>\n</root>';
        if (!sp_PanelSetProfile.exists) writee(sp_PanelSetProfile, sp_PanelSetProfile_Content);
        if (readd(sp_PanelSetProfile) == '') writee(sp_PanelSetProfile, sp_PanelSetProfile_Content);
        var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
        // alert(special_file.fsName)
        if (eval(PanelWHPrefXML.Panel.hasShowWin) == undefined) {//判断设置窗口是否出现
            var hasShowWin = new XML('<hasShowWin>false</hasShowWin>');
            PanelWHPrefXML.Panel.insertChildAfter(null, hasShowWin);
            writee(sp_PanelSetProfile, PanelWHPrefXML);
        }

        /**配置文件3 */
        var profile_switchBar;

        /**函数方法 */
        var sp_toolbar = { //函数方法集合
            typeArr: typeArr,
            close: 0,
            lang: 0,
            ip: "139.129.132.60",
            downloadLink: "http://139.129.132.60/script/Sp_toolbar",
            weiboLink: "http://weibo.com/u/3893928357",

            regExp: new RegExp("\"", "g"),
            newDraw: function () {
                // var WH = view.itemSize;
                // var wh = this.image.size;//获取图像的尺寸
                // var k = [(WH[0]/wh[0]), (WH[1]/wh[1])];
                // wh = [k[0]*wh[0],k[1]*wh[1]];
                // var xy = [ (WH[0]-wh[0])/2, (WH[1]-wh[1])/2 ];
                // this.graphics.drawImage(this.image,xy[0],xy[1],wh[0],wh[1]);
                this.graphics.drawImage(this.image, sp_toolbar.xy[0], sp_toolbar.xy[1], sp_toolbar.wh[0], sp_toolbar.wh[1]);
            },
            swap: function (a, b) {
                var c = b.text;
                b.text = a.text;
                a.text = c;
            },
            openLink: function (url) {
                var cmd = "";
                if ($.os.indexOf("Win") != -1) {
                    cmd += "explorer " + url;
                } else {
                    cmd += "open \"" + url + "\"";
                }
                try {
                    system.callSystem(cmd);
                } catch (e) { }
            },
            getLastGroupId: function (name) {
                var xml = new XML(readd(special_file));
                return xml.Group.children().length();
            },
            addGroup: function (name) {
                var xml = new XML(readd(special_file));
                var newXml = new XML("<group></group>");
                newXml['@groupName'] = name;
                xml.Group.appendChild(newXml);
                writee(special_file, xml);
            },
            delGroup: function (id) {
                var xml = new XML(readd(special_file));
                xml.Group.child(id).setLocalName("WaitToDelete");
                delete xml.Group.WaitToDelete;
                writee(special_file, xml);
            },
            delG1Image: function (id) {//By GFred 删除组1图片
                var xml = new XML(readd(special_file));
                xml.groupIcon.child(id).setLocalName("WaitToDelete");
                delete xml.groupIcon.WaitToDelete;
                writee(special_file, xml);
            },
            upGroup: function (id) {
                var xml = new XML(readd(special_file));
                var newXml = new XML(xml.Group.child(id));
                xml.Group.insertChildBefore(xml.Group.child(id - 1), newXml);
                xml.Group.child(id + 1).setLocalName("WaitToDelete");
                delete xml.Group.WaitToDelete;
                writee(special_file, xml);
            },
            downGroup: function (id) {
                var xml = new XML(readd(special_file));
                var newXml = new XML(xml.Group.child(id));
                xml.Group.insertChildAfter(xml.Group.child(id + 1), newXml);
                xml.Group.child(id).setLocalName("WaitToDelete");
                delete xml.Group.WaitToDelete;
                writee(special_file, xml);
            },
            //组1图标的移动 | By GFred
            upG1Img: function (id) {
                var xml = new XML(readd(special_file));
                var newXml = new XML(xml.groupIcon.child(id));
                xml.groupIcon.insertChildBefore(xml.groupIcon.child(id - 1), newXml);
                xml.groupIcon.child(id + 1).setLocalName("WaitToDelete");
                delete xml.groupIcon.WaitToDelete;
                writee(special_file, xml);
            },
            downG1Img: function (id) {
                var xml = new XML(readd(special_file));
                var newXml = new XML(xml.groupIcon.child(id));
                xml.groupIcon.insertChildAfter(xml.groupIcon.child(id + 1), newXml);
                xml.groupIcon.child(id).setLocalName("WaitToDelete");
                delete xml.groupIcon.WaitToDelete;
                writee(special_file, xml);
            },
            renameGroup: function (id, name) {
                var xml = new XML(readd(special_file));
                xml.Group.child(id)['@groupName'] = name;
                writee(special_file, xml);
            },
            parseButton: function (groupId, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                var xml = new XML(readd(special_file));
                var newXml = XML("<button><buttonName/><activeModifiers/><click/><ctrl/><shift/><alt/><ctrlShift/><ctrlAlt/><shiftAlt/><ctrlShiftAlt/><helpTip/><icon/><lastModifier/></button>");
                newXml.buttonName = a.toString();
                newXml.activeModifiers = b;
                newXml.click.cmd = c;
                newXml.click.type = d;
                newXml.ctrl.cmd = e;
                newXml.ctrl.type = f;
                newXml.shift.cmd = g;
                newXml.shift.type = h;
                newXml.alt.cmd = i;
                newXml.alt.type = j;
                newXml.ctrlShift.cmd = k;
                newXml.ctrlShift.type = l;
                newXml.ctrlAlt.cmd = m;
                newXml.ctrlAlt.type = n;
                newXml.shiftAlt.cmd = o;
                newXml.shiftAlt.type = p;
                newXml.ctrlShiftAlt.cmd = q;
                newXml.ctrlShiftAlt.type = r;
                newXml.lastModifier = s.toString();
                newXml.helpTip = t.toString();
                newXml.icon = u;
                xml.Group.child(groupId).appendChild(newXml);
                writee(special_file, xml);
            },
            addButton: function (groupId, buttonName, hasSelected, afterChildID) {
                var hasSelOrNot = hasSelected; //判断器
                var xml = new XML(readd(special_file));
                var newXml = new XML("<button><buttonName/><activeModifiers/><click/><ctrl/><shift/><alt/><ctrlShift/><ctrlAlt/><shiftAlt/><ctrlShiftAlt/><helpTip/><icon/><lastModifier/></button>");
                newXml.buttonName = buttonName;
                newXml.activeModifiers = "1";
                newXml.click.cmd = "";
                newXml.click.type = typeArr[0];
                newXml.ctrl.cmd = "";
                newXml.ctrl.type = typeArr[0];
                newXml.shift.cmd = "";
                newXml.shift.type = typeArr[0];
                newXml.alt.cmd = "";
                newXml.alt.type = typeArr[0];
                newXml.ctrlShift.cmd = "";
                newXml.ctrlShift.type = typeArr[0];
                newXml.ctrlAlt.cmd = "";
                newXml.ctrlAlt.type = typeArr[0];
                newXml.shiftAlt.cmd = "";
                newXml.shiftAlt.type = typeArr[0];
                newXml.ctrlShiftAlt.cmd = "";
                newXml.ctrlShiftAlt.type = typeArr[0];
                newXml.lastModifier = "0";
                newXml.helpTip = "";
                newXml.icon = "";
                if (hasSelOrNot == 0) xml.Group.child(groupId).appendChild(newXml);
                if (hasSelOrNot == 1) xml.Group.child(groupId).insertChildAfter(xml.Group.child(groupId).child(afterChildID), newXml);
                // }
                writee(special_file, xml);
            },
            delButton: function (groupId, buttonId) {
                var xml = new XML(readd(special_file));
                xml.Group.child(groupId).child(buttonId).setLocalName("WaitToDelete");
                delete xml.Group.child(groupId).WaitToDelete;
                writee(special_file, xml);
            },
            upButton: function (groupId, buttonId) {
                var xml = new XML(readd(special_file));
                var newXml = new XML(xml.Group.child(groupId).child(buttonId));
                xml.Group.child(groupId).insertChildBefore(xml.Group.child(groupId).child(buttonId - 1), newXml);
                xml.Group.child(groupId).child(buttonId + 1).setLocalName("WaitToDelete");
                delete xml.Group.child(groupId).WaitToDelete;
                writee(special_file, xml);
            },
            downButton: function (groupId, buttonId) {
                var xml = new XML(readd(special_file));
                var newXml = new XML(xml.Group.child(groupId).child(buttonId));
                xml.Group.child(groupId).insertChildAfter(xml.Group.child(groupId).child(buttonId + 1), newXml);
                xml.Group.child(groupId).child(buttonId).setLocalName("WaitToDelete");
                delete xml.Group.child(groupId).WaitToDelete;
                writee(special_file, xml);
            },
            getButtonInfo: function (groupId, buttonId) {
                var xml = new XML(readd(special_file));
                return xml.Group.child(groupId).child(buttonId);
            },
            saveButton: function (list1, list2, ed2, activeModifers, ed3, clickDrop, ed4, ed5) {
                if (ed2.text == "") return;
                if (list1.selection == null) return;
                if (list2.selection == null) return;
                var xml = new XML(readd(special_file));
                var newXml = xml.Group.child(list1.selection.index).child(list2.selection.index);
                newXml.buttonName = ed2.text;
                newXml.activeModifiers = (activeModifers.value == true) ? "1" : "0";
                newXml.click.cmd = ed3.text0.toString();
                newXml.click.subName = ed3.subName0.toString();
                newXml.click.type = typeArr[parseInt(ed3.type0)];
                newXml.ctrl.cmd = ed3.text1;
                newXml.ctrl.subName = ed3.subName1.toString();
                newXml.ctrl.type = typeArr[parseInt(ed3.type1)];
                newXml.shift.cmd = ed3.text2;
                newXml.shift.subName = ed3.subName2.toString();
                newXml.shift.type = typeArr[parseInt(ed3.type2)];
                newXml.alt.cmd = ed3.text3;
                newXml.alt.subName = ed3.subName3.toString();
                newXml.alt.type = typeArr[parseInt(ed3.type3)];
                newXml.ctrlShift.cmd = ed3.text4;
                newXml.ctrlShift.subName = ed3.subName4.toString();
                newXml.ctrlShift.type = typeArr[parseInt(ed3.type4)];
                newXml.ctrlAlt.cmd = ed3.text5;
                newXml.ctrlAlt.subName = ed3.subName5.toString();
                newXml.ctrlAlt.type = typeArr[parseInt(ed3.type5)];
                newXml.shiftAlt.cmd = ed3.text6;
                newXml.shiftAlt.subName = ed3.subName6.toString();
                newXml.shiftAlt.type = typeArr[parseInt(ed3.type6)];
                newXml.ctrlShiftAlt.cmd = ed3.text7;
                newXml.ctrlShiftAlt.subName = ed3.subName7.toString();
                newXml.ctrlShiftAlt.type = typeArr[parseInt(ed3.type7)];
                newXml.lastModifier = clickDrop.selection.index.toString();
                newXml.helpTip = ed4.text;
                if (ed5 instanceof StaticText) { } else {
                    newXml.icon = ed5;
                }
                writee(special_file, xml);
            },
            handler: function (cmd, type) {
                var comp = app.project.activeItem;
                var id = getId(typeArr, type);
                if (cmd == "") return;
                if (id == -1) return;
                try {
                    function isInArray(arr, value) {
                        for (var i = 0; i < arr.length; i++) {
                            if (value === arr[i]) {
                                return true;
                            }
                        }
                        return false;
                    }
                    // 定义需要撤销组的id列表
                    // undo_list = [0, 1, 2, 4, 5, 6]
                    // if (isInArray(undo_list, id)) { app.beginUndoGroup("Sp_toolbar Undo"); }
                    if (id == 0) {
                        if (!(comp instanceof CompItem)) return;
                        var sl = comp.selectedLayers;
                        for (var j = 0; j < sl.length; j++) {
                            var sp = sl[j].selectedProperties;
                            if (sp.length > 0) {
                                for (var l = 0; l < sp.length; l++) { sp[l].selected = false; };
                            };
                            var eff = sl[j].property("ADBE Effect Parade").addProperty(cmd);
                            eff.selected = true;
                        }
                    } else if (id == 1) {
                        if (!(comp instanceof CompItem)) return;
                        var sl = comp.selectedProperties;
                        for (var i = 0; i < sl.length; i++) {
                            sl[i].expression = cmd;
                        }
                    } else if (id == 2) {
                        if (!(comp instanceof CompItem)) return;
                        var sl = comp.selectedLayers;
                        for (var i = 0; i < sl.length; i++) {
                            sl[i].applyPreset(File(cmd));
                        }
                    } else if (id == 3) {
                        (function () { $.evalFile(cmd); })();
                    } else if (id == 4) {
                        app.executeCommand(app.findMenuCommandId(cmd));
                    } else if (id == 5) {
                        writee(tempJsxFile, cmd);
                        (function () { $.evalFile(tempJsxFile.toString()); })();
                    } else if (id == 6) {
                        system.callSystem("cmd.exe /c \"" + cmd + "\"");
                    }
                    // if (isInArray(undo_list, id)) { app.endUndoGroup(); }
                } catch (err) { alert(err.line.toString() + "\r" + err.toString()); }
            },
        };
        //$.global.special_loc =
        var special_loc = new OperatorOverload(function (str) {
            if (sp_toolbar.lang == 0) sp_toolbar.lang = app.settings.getSetting("Sp_toolbar", "language");
            return str[sp_toolbar.lang];
        }, '>>');
        var special_str = {
            general: { en: 'General', ch: '一般' },
            toolbar: { en: 'Toolbar', ch: '工具栏' },
            buttonSize: { en: 'Buttons size', ch: '按钮大小' },
            buttonSpacing: { en: 'Buttons spacing', ch: '按钮间隔' },
            handleXmlFIle: { en: 'Configuration XML File', ch: '配置文件' },
            importFile: { en: 'Import Config File', ch: '▽导入配置' },
            exportFile: { en: 'Export Config File', ch: '△导出配置' },
            internetText: { en: 'Internet', ch: '网络' },
            checkForUpdate: { en: 'Check for update', ch: '☼检查更新' },
            weibo: { en: 'Weibo', ch: 'smallpath微博' },
            parse: { en: 'Parse', ch: '转移' },
            parseButton: { en: 'Parse Ft_toolbar config to Sp_toolbar', ch: '从Ft_toolbar文件读取配置' },
            language: { en: 'Language', ch: '语言' },
            nameText: { en: 'Name:', ch: '名称:' },
            subName: { en: 'Sub name:', ch: '右键菜单中子元素的名称:' },
            command: { en: 'Command:', ch: '命令:' },
            activeModifiers: { en: 'Active modifiers', ch: '允许右键菜单与键盘监听' },
            getEffect: { en: 'Get Effect Name', ch: '获得被选中的插件' },
            getEffectWith: { en: 'Get Effect with parameters', ch: '获得被选中的插件(保留所有参数)' },
            getAppendEffect: { en: 'Append Effect', ch: '追加效果' },
            transferToFile: { en: 'Transfer to File', ch: '转为文件' },
            getPresets: { en: 'Browse Animation Presets', ch: '选择预设文件' },
            getScripts: { en: 'Browse Scripts', ch: '选择脚本文件' },
            ok: { en: 'Ok', ch: '确定' },
            can: { en: 'Cancel', ch: '取消' },
            changeScriptType: { en: 'The script is a Panel script\rDo you want to change script to Menu ?', ch: '此脚本为Panel型脚本,是否保留Panel窗口特性?' },
            toolbars: { en: 'Toolbars', ch: '工具栏' },
            buttons: { en: 'Buttons', ch: '按钮' },
            quit: { en: 'Are you sure to quit without saving?', ch: '直接取消将不会保留你的修改,确定退出吗?' },
            save: { en: 'Do you want to save your changes?', ch: '是否保存你的更改?' },
            importOk: { en: 'Import successfully!Please restart script', ch: '导入成功!请重启脚本' },
            newVersionFind: { en: 'New version found,please download the new version', ch: '发现新版本,版本号为:' },
            whatUpdate: { en: 'Do you want to download new version right now?', ch: '是否下载最新版本?' },
            noNew: { en: 'No new version', ch: '版本已为最新版' },
            notFt: { en: 'This special_file is Not a Ft_toolbar config special_file,please select the correct json', ch: '此文件不是Ft_toolbar的配置文件' },
            buttonsParameters: { en: 'Buttons Parameters', ch: '按钮参数' },
            type: { en: 'Type:', ch: '类型:' },
            typeArr: { en: "['EFFECT','EXPRESSION','ANIMATION PRESET','SCRIPTLAUCHER','MENU','JAVASCRIPT','OS']", ch: "['插件','表达式','预设文件','脚本文件','菜单元素名称','JavaScript代码','系统级命令']" },
            helpTip: { en: 'HelpTip:', ch: '按钮帮助信息:' },
            icon: { en: 'Icon:', ch: '图片:' },


        };

        var win = (thisObj instanceof Panel) ? thisObj : new Window('palette', 'Sp_toolbar V' + gf.version + '_Bar' + BarID, undefined, { resizeable: 1 });
        win.margins = win.spacing = 0;
        var gr = win.add("Group");
        var scrollbar = win.add("scrollbar", [0, 0, 5, 200], 0, 0, 100);
        var droplist = win.add("dropdownlist");
        droplist.itemSize[1] = 40;
        sp_toolbar.drop = droplist;
        win.addEventListener("mouseup", function (event) {
            if (event.button == 2 && event.detail == 2 && event.ctrlKey) {
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                if (eval(String(PanelWHPrefXML.Panel.hasShowWin)) == false) {//如果没有打开设置面板,是false,则：
                    SettingWin(0, gr);
                } else {
                    alert("窗口已存在!\nhasShowWin:" + String(PanelWHPrefXML.Panel.hasShowWin));
                }
            }
        });

        // win.addEventListener('mousemove', function (e) {
        //     // writeLn(e.screenY + '    '+winLMousFeButtonDown.toString())

        // })
        scrollbar.stepdelta = 60;
        scrollbar.jumpdelta = 180;
        droplist.visible = 0;
        gr.margins = 0;
        //Col: 工具栏设置背景颜色
        var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
        var BGcolor = String(PanelWHPrefXML.Panel.BGcolor);
        var BGcolorRBGA = [HextoRGB(BGcolor)[0], HextoRGB(BGcolor)[1], HextoRGB(BGcolor)[2], 255];
        uiSetBgColor(win, BGcolorRBGA / 255);

        /**窗口拖动 */
        win.addEventListener('keydown', function (e) {
            if (e.altKey) {
                if (e.keyName == 'Up') { sp_toolbar.drop.location[1] -= 5; }
                if (e.keyName == 'Down') { sp_toolbar.drop.location[1] += 5; }
                if (e.keyName == 'Left') { sp_toolbar.drop.location[0] -= 5; }
                if (e.keyName == 'Right') { sp_toolbar.drop.location[0] += 5; }
            }
        });
        win.onResize = win.onResizing = function () {
            try {
                gr.size = (sp_toolbar.drop.items.length <= 1) ? win.size : [win.size[0], win.size[1]];
                // gr.location = (sp_toolbar.drop.items.length > 1) ? [0, 23] : [0, 0];
                // gr.location = (sp_toolbar.drop.items.length > 1) ? [0, 0] : [0, 0];
                // sp_toolbar.drop.size = [win.size[0], 20];
                //下拉列表长宽
                if (win.size[0] > win.size[1]) {
                    gr.location = (sp_toolbar.drop.items.length > 1) ? [17, 0] : [0, 0];
                    // sp_toolbar.drop.size = [15, view.itemSize[1]]
                    sp_toolbar.drop.size = [15, win.size[1]];
                    sp_toolbar.drop.location = [-10, 0];
                } else {
                    gr.location = (sp_toolbar.drop.items.length > 1) ? [0, 17] : [0, 0];
                    // sp_toolbar.drop.size = [view.itemSize[1], 15]
                    sp_toolbar.drop.size = [win.size[0], 15];
                    sp_toolbar.drop.location = [0, -5];
                };

                // sp_toolbar.drop.itemSize.width = sp_toolbar.drop.size[0] - 31;
                sp_toolbar.drop.itemSize.width = 250 - 31;

                //这行，按钮宽度加上spacing宽度↓
                var numWidth = Math.floor(gr.size[0] / (view.itemSize[0] + view.itemSpacing[0]));
                if (numWidth == 0) numWidth = 1;
                for (var i = 0; i < gr.children.length; i++) {
                    gr.children[i].size = view.itemSize;
                    gr.children[i].location = [view.itemSpacing[0] + i % numWidth * (view.itemSize[0] + view.itemSpacing[0]),
                    view.itemSpacing[1] + Math.floor(i / numWidth) * (view.itemSize[1] + view.itemSpacing[1])];
                }
                if (sp_toolbar.drop.items.length <= 1) {
                    if (gr.children[0].size[0] != gr.children[0].size[1]) { //设置按钮长宽是否一致，不一致则隐藏图案
                        gr.children[0].image = [];
                        gr.children[0].onDraw = undefined;
                        gr.children[0].text = "≡";
                    };
                } else {
                    if (gr.children[1].size[0] != gr.children[1].size[1]) { //设置按钮长宽是否一致，不一致则隐藏图案
                        gr.children[1].image = [];
                        gr.children[1].onDraw = undefined;
                        gr.children[1].text = "≡";
                    };
                }
                //图标进行涂鸦：使用的话不显示button边框，文字显示不知道为什么会出问题（错位）
                var currVersion = app.version; //获取AE版本,AE25之前文字会错位，猜测是UI问题
                // if (currVersion.slice(0, 2) >= '25') {
                /**从配置文件读取按钮不同状态下的颜色 */
                var sp_PanelSetProfileXML = new XML(readd(sp_PanelSetProfile));
                var mButtonColor = sp_PanelSetProfileXML.Panel.buttonColor;
                if (mButtonColor == '' || mButtonColor == null) {
                    sp_PanelSetProfileXML.Panel.appendChild(new XML('<buttonColor><colOutside>[.4, .4, .4, 1]</colOutside><colStr>[.5, .6, .65, 1]</colStr><colOutsideHover>[.6, .7, .9, 1]</colOutsideHover><colStrHover>[.7, 1,1, 1]</colStrHover></buttonColor>'));
                    writee(sp_PanelSetProfile, sp_PanelSetProfileXML);
                    mButtonColor = sp_PanelSetProfileXML.Panel.buttonColor;
                }
                var colOutside = eval(mButtonColor.colOutside.toString()),
                    colStr = eval(mButtonColor.colStr.toString()),
                    colOutsideHover = eval(mButtonColor.colOutsideHover.toString()),
                    colStrHover = eval(mButtonColor.colStrHover.toString());
                //
                for (var i = 0; i < gr.children.length; i++) {
                    if (gr.children[i].image == undefined) {
                        // gr.children[i].drawPen1 = gr.children[i].graphics.newPen(gr.children[i].graphics.PenType.SOLID_COLOR, [0.85, 0.85, 0.85, 1], 1);
                        // gr.children[i].drawPen2 = gr.children[i].graphics.newPen(gr.children[i].graphics.PenType.SOLID_COLOR, sp_toolbar.view.fillColor, 1);
                        // gr.children[i].bgBrush1 = gr.children[i].graphics.newBrush(gr.children[i].graphics.BrushType.SOLID_COLOR, [0.137, 0.137, 0.137, 1]);
                        // gr.children[i].bgBrush2 = gr.children[i].graphics.newBrush(gr.children[i].graphics.BrushType.SOLID_COLOR, [0.023, 0.023, 0.023, 1]);
                        // gr.children[i].bgBrush3 = gr.children[i].graphics.newBrush(gr.children[i].graphics.BrushType.SOLID_COLOR, [0.85, 0.85, 0.85, 1]);
                        // gr.children[i].onDraw = triDraw;
                        var btnSiringSize = 12; //字体大小
                        gr.children[i].onDraw = function () {
                            var btn = this;
                            paintBtn.call(btn, colOutside, colStr, btnSiringSize);
                        };
                        gr.children[i].addEventListener('mouseover', function () {
                            var btn = this;
                            this.onDraw = function () { paintBtn.call(btn, colOutsideHover, colStrHover, btnSiringSize + 1, true); };
                        });
                        gr.children[i].addEventListener('mouseout', function () {
                            var btn = this;
                            this.onDraw = function () { paintBtn.call(btn, colOutside, colStr, btnSiringSize); };
                        });
                        // function () {
                        //     try {
                        //         var g = this.graphics;
                        //         var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.5, .7, .75, 1], 3);
                        //         var pen2 = g.newPen(g.PenType.SOLID_COLOR, [.4, .6, .6, 1], 1);
                        //         var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.2, .2, .2, 1]);

                        //         var msT = g.measureString(this.text, undefined, this.size[0]);
                        //         var ttX = msT.width <= this.size[0] ? this.size[0] / 2 - msT.width / 2 : 0;
                        //         var ttY = this.size[1] / 2 - msT.height / 2;

                        //         g.rectPath(0, 0, this.size.width, this.size.height)
                        //         g.fillPath(brush1)
                        //         g.strokePath(pen2)
                        //         g.drawString(this.text, pen1, ttX, this.size[1] / 2 - 5)
                        //         // g.backgroundColor = graphics.newBrush(graphics.BrushType.SOLID_COLOR, [1, 0, 0, 1]);
                        //     } catch (e) { alert(e.line + e.message) }
                        //     // try {
                        //     //     // graphics.drawOSControl()
                        //     //     var g = this.graphics;
                        //     //     var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.5, .5, .5, 1], 5);
                        //     //     var pen2 = g.newPen(g.PenType.SOLID_COLOR, [.5, .6, .5, 1], 1);
                        //     //     var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.2, .2, .2, 1]);

                        //     //     var msT = g.measureString(this.text, ScriptUI.newFont('Segoe UI'), this.size[0]);
                        //     //     var ttX = msT.width <= this.size[0] ? this.size[0] / 2 - msT.width / 2 : 0;
                        //     //     var ttY = this.size[1] / 2 - msT.height / 2;

                        //     //     // graphics.drawFocusRing(0, 0, this.size[0], this.size[1])
                        //     //     g.rectPath(0, 0, this.size.width, this.size.height)
                        //     //     g.fillPath(brush1)
                        //     //     g.strokePath(pen2)
                        //     //     g.drawString(this.text, pen1, ttX, this.size[1] / 2 - 5)
                        //     //     // g.drawOSControl()
                        //     //     // g.backgroundColor = graphics.newBrush(graphics.BrushType.SOLID_COLOR, [1, 0, 0, 1]);
                        //     // } catch (e) { alert(e.line + e.message) }
                        // };
                    } else {
                        try {
                            if (sp_toolbar.drop.items.length > 1) {
                                if (i != 1 && i != 3) { //跳开设置按钮和切页按钮
                                    grBtn_HoverStyle.call(gr.children[i]);
                                }
                            }
                        } catch (e) { continue; }
                    }
                }
                var triDraw = function (k) {
                    return;
                    if (this.image) return;
                    var gfx = this.graphics;
                    gfx.newPath();
                    gfx.rectPath(0, 0, this.size[0], this.size[1]);
                    // if(!k.mouseOver){
                    //     gfx.fillPath (this.bgBrush1);
                    // }else{
                    //     gfx.fillPath (this.bgBrush2); 
                    // }
                    gfx.newPath();
                    gfx.moveTo((view.itemSize[0]), (view.itemSize[1] - 3));
                    gfx.lineTo((view.itemSize[0]) / 10 * 9, (view.itemSize[1] - 3));
                    gfx.lineTo((view.itemSize[0]), (view.itemSize[1] - 3) / 10 * 9);
                    var brush = gfx.newBrush(gfx.BrushType.SOLID_COLOR, view.fillColor);
                    if (this.hasMulti) {
                        if (!k.leftButtonPressed || !k.mouseOver) {
                            gfx.fillPath(this.bgBrush3);
                        } else {
                            gfx.fillPath(brush);
                        }
                    }
                    if (!this.image) {
                        var thisDim = gfx.measureString(this.text);
                        // if(!k.leftButtonPressed ||!k.mouseOver){
                        //     gfx.drawString (this.text+" ", this.drawPen1, this.size[0]/2-thisDim.width/2+1,this.size[1]/2-thisDim.height/2 );
                        // }else{
                        //     gfx.drawString (this.text+" ", this.drawPen2, this.size[0]/2-thisDim.width/2+1,this.size[1]/2-thisDim.height/2 );
                        // }
                        // }
                        this.graphics.backgroundColor = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, [1, 0, 0, 1]);
                        this.graphics.drawString(this.text + " ", this.drawPen1, this.size[0] / 2 - this.graphics.measureString(this.text).width / 2, this.size[0] / 2 - this.graphics.measureString(this.text).height / 2);
                    };
                };

                //显示下拉列表
                if (sp_toolbar.drop.items.length > 1) { sp_toolbar.drop.visible = 1; } else { sp_toolbar.drop.visible = 0; }
                //显示右边滑块
                if (gr.children.length == 0) { scrollbar.visible = 0; return; };
                //按钮距离
                var distance = gr.children[gr.children.length - 1].location[1] + view.itemSize[1] + view.itemSpacing[1];
                scrollbar.size[0] = 11;
                scrollbar.size[1] = gr.size[1];
                scrollbar.location[0] = gr.size[0] - scrollbar.size[0];
                scrollbar.location[1] = gr.location[1];
                // clearOutput();
                // writeLn(distance + '||' + win.size[1]);
                if (distance > win.size[1]) {
                    if (eval(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "scrollingBarVisible")) == true) scrollbar.visible = true;
                    //想办法把滚动条计算出来
                    scrollbar.maxvalue = gr.children[gr.children.length - 1].location[1] + view.itemSpacing[1];
                    // writeLn(scrollbar.maxvalue)
                    for (var i = 0; i < gr.children.length; i++) {
                        // gr.children[i].location[1] = gr.children[i].location[1] - ((scrollbar.value / 100) * (distance + view.itemSize[1] + view.itemSpacing[1]));
                        gr.children[i].location[1] = gr.children[i].location[1] - scrollbar.value;
                    }
                } else {
                    scrollbar.visible = false;
                }
                var WH = view.itemSize;
                var wh = view.itemSize;//获取图像的尺寸
                var k = [(WH[0] / wh[0]), (WH[1] / wh[1])];
                wh = [k[0] * wh[0], k[1] * wh[1]];
                var xy = [(WH[0] - wh[0]) / 2, (WH[1] - wh[1]) / 2];
                // spBtnSpacingXY = xy;
                sp_toolbar.xy = xy;
                sp_toolbar.wh = wh;
                // spBtnSpacingXY = distance;////////
                // alert(gui.slWinst.value)

            } catch (e) { writeLn(e.line + e.message); }
        };
        /**绘制文字按钮 */
        function paintBtn(_rectCol, _strCol, _fontSize, _active) {
            try {
                if (_fontSize == undefined) _fontSize = 12;
                var font = ScriptUI.newFont("Segoe UI", ScriptUI.FontStyle.BOLD, _fontSize);
                var g = this.graphics;
                var pen_RectEdge = g.newPen(g.PenType.SOLID_COLOR, _rectCol, 1);
                var pen_String = g.newPen(g.PenType.SOLID_COLOR, _strCol, 3);
                var brush_Bg = g.newBrush(g.BrushType.SOLID_COLOR, [.2, .2, .2, 1]);
                var brushWhite = g.newBrush(g.BrushType.SOLID_COLOR, [1, 1, 1, .2]);

                var ttX, ttY;
                // var msString = g.measureString(this.text, font, this.size[0]);
                var msString = g.measureString(this.text, font);
                // $.writeln(msString);
                // var ttX = msT.width <= this.size[0] ? this.size[0] / 2 - msT.width / 2 : 0;
                ttX = (this.size[0] - msString.width) / 2;
                if (msString[0] > this.size[0]) ttX = 0;
                ttY = (this.size[1] - msString.height) / 2;
                g.newPath();
                g.rectPath(0, 0, this.size.width, this.size.height);
                g.fillPath(brush_Bg);
                g.strokePath(pen_RectEdge);
                g.drawString(this.text, pen_String, ttX, this.size[1] / 2 - 10, font);
                if (_active) {
                    g.newPath();
                    g.rectPath(0, 0, this.size[0], this.size[1]);
                    g.fillPath(brushWhite);
                }
                // g.backgroundColor = graphics.newBrush(graphics.BrushType.SOLID_COLOR, [1, 0, 0, 1]);
                var xml = new XML(readd(special_file));
                var allowMarker = Number(xml.Group.children()[droplist.selection.index].children()[this.index].activeModifiers);
                if (allowMarker && this.hasMulti == 1) {
                    var brush_Corner = g.newBrush(g.BrushType.SOLID_COLOR, [1, .6, .5, 1]);
                    g.newPath();
                    g.moveTo(view.itemSize[0], view.itemSize[1]);
                    g.lineTo(view.itemSize[0] / 5 * 4, view.itemSize[1]);
                    g.lineTo(view.itemSize[0], view.itemSize[1] / 5 * 4);
                    g.fillPath(brush_Corner);
                }
            } catch (e) { print(e.line + e.message); }
        }
        /**图标按钮添加缩放事件、添加小角标 */
        function grBtn_HoverStyle() {
            this.addEventListener("mouseover", function (e) {
                this.onDraw = function () {
                    var g = this.graphics;
                    var brushWhite = g.newBrush(g.BrushType.SOLID_COLOR, [1, 1, 1, .4]);
                    g.drawImage(this.image, -2, -2, this.size[0] + 4, this.size[1] + 4);
                    g.newPath();
                    g.rectPath(0, 0, this.size[0], this.size[1]);
                    g.fillPath(brushWhite);
                    var xml = new XML(readd(special_file));
                    var allowMarker = Number(xml.Group.children()[droplist.selection.index].children()[this.index].activeModifiers);
                    if (allowMarker && this.hasMulti == 1) {
                        var g = this.graphics;
                        var brush_Corner = g.newBrush(g.BrushType.SOLID_COLOR, [0, .6, .8, 1]);
                        g.newPath();
                        g.moveTo(view.itemSize[0], view.itemSize[1]);
                        g.lineTo(view.itemSize[0] / 5 * 4, view.itemSize[1]);
                        g.lineTo(view.itemSize[0], view.itemSize[1] / 5 * 4);
                        g.fillPath(brush_Corner);
                    }
                };
            });
            this.addEventListener("mouseout", function (e) {
                this.onDraw = function () {
                    var g = this.graphics;
                    g.drawImage(this.image, 0, 0, this.size[0], this.size[1]);
                    var xml = new XML(readd(special_file));
                    var allowMarker = Number(xml.Group.children()[droplist.selection.index].children()[this.index].activeModifiers);
                    if (allowMarker && this.hasMulti == 1) {
                        var g = this.graphics;
                        var brush_Corner = g.newBrush(g.BrushType.SOLID_COLOR, [1, .3, .1, 1]);
                        g.newPath();
                        g.moveTo(view.itemSize[0], view.itemSize[1]);
                        g.lineTo(view.itemSize[0] / 5 * 4, view.itemSize[1]);
                        g.lineTo(view.itemSize[0], view.itemSize[1] / 5 * 4);
                        g.fillPath(brush_Corner);
                    }
                };
            });
            this.onDraw = function () {
                var g = this.graphics;
                g.drawImage(this.image, 0, 0, this.size[0], this.size[1]);
                var xml = new XML(readd(special_file));
                var allowMarker = Number(xml.Group.children()[droplist.selection.index].children()[this.index].activeModifiers);
                if (allowMarker && this.hasMulti == 1) {
                    var g = this.graphics;
                    var brush_Corner = g.newBrush(g.BrushType.SOLID_COLOR, [1, .3, .1, 1]);
                    g.newPath();
                    g.moveTo(view.itemSize[0], view.itemSize[1]);
                    g.lineTo(view.itemSize[0] / 5 * 4, view.itemSize[1]);
                    g.lineTo(view.itemSize[0], view.itemSize[1] / 5 * 4);
                    g.fillPath(brush_Corner);
                }
            };
        }

        droplist.onChange = function () {
            try {
                if (!droplist.selection) return;
                app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "dropSelection", droplist.selection.index);
                //切换时移除当前按钮的显示
                var l = gr.children.length;
                for (var i = 0; i < l; i++) { gr.remove(l - 1 - i); }
                var xml = new XML(readd(special_file));
                var thisXml = xml.Group.child(droplist.selection.index);
                // RemindGup.enabled = 0;
                // RemindGup.orientation = 'column';
                // RemindGup.alignChildren = ['fill', 'fill'];
                // RemindGup.margins = RemindGup.spacing = 0;
                // var rmg = RemindGup.graphics;
                // rmg.backgroundColor = rmg.newBrush(rmg.BrushType.SOLID_COLOR, [.2, .2, .2, 1]);
                // var RemindNone = RemindGup.add("statictext", undefined, " ... ");
                // var RemindText = RemindGup.add("statictext", undefined, "Some");
                // RemindText.alignment = ['','bottom'];
                // RemindNone.size[1]=RemindText.size[1]=view.itemSize[1]/2
                // RemindNone.size[1]=RemindGup.size[1]/2;
                // RemindText.size[1]=RemindGup.size[1]/2;
                if (droplist.items.length > 1) { //如果不止一个工具栏就显示上下按钮
                    //按钮显示列表号码
                    var remindGup = gr.add('button', undefined, undefined, { style: 'toolbutton' });
                    remindGup.text = 'Bar' + (droplist.selection.index + 1);
                    remindGup.helpTip = 'LMB: Show Bar\nRMB: Reset Position';
                    var settingBtn = gr.add("iconbutton");//下面一行：栏图标
                    //组图片
                    try { var listGupIcon = gr.add("image"); listGupIcon.helpTip = '栏' + this.selection.index.toString() + ' | ' + this.selection.toString(); listGupIcon.icon = decodeURIComponent(xml.groupIcon.child(this.selection.index)); listGupIcon.onDraw = sp_toolbar.newDraw; } catch (e) { }
                    //上下按钮
                    var upDown = gr.add("iconbutton");
                    upDown.image = File.decode(ICON.UpDown);
                    upDown.onDraw = sp_toolbar.newDraw;
                    upDown.helpTip = "LMB: Before Bar\nRMB: After Bar";
                    //上下按钮
                    upDown.addEventListener('mouseover', function (e) {
                        this.image = [];
                        this.text = droplist.selection.index + 1;
                        upDown.onDraw = undefined;
                        // UPDOWN.onDraw = function () {
                        //     // var g = this.graphics;
                        //     // var rect = g.rectPath(0, 0, this.size[0], this.size[1])
                        //     // var brush = g.newBrush(g.BrushType.SOLID_COLOR, [1, 0, 0, 0.5]);
                        //     // var ell = g.ellipsePath(5, 5, this.size[0] - 3, this.size[1] - 3)
                        //     // g.fillPath(brush, ell);
                        //     // g.drawFocusRing(5, 5, this.size[0] - 5, this.size[1] - 5)
                        //     // g.drawOSControl()
                        //     // g.drawOSControl()
                        // }

                    });
                    upDown.addEventListener('mouseout', function (e) {
                        this.image = [];
                        this.image = decodeURIComponent(ICON.UpDown);
                        this.text = '';
                        upDown.onDraw = sp_toolbar.newDraw;
                        //hover and change item
                        var id = droplist.selection.index;
                        if (e.shiftKey) {
                            if (id > 0) droplist.selection = id - 1;
                        }
                        if (e.ctrlKey) {
                            if (id < droplist.items.length - 1) droplist.selection = id + 1;
                        }
                    });
                    upDown.addEventListener('mousedown', function (e) {
                        if (e.button == 0) {
                            droplist.selection--;
                        }
                        if (e.button == 2) {
                            droplist.selection++;
                        }
                        return thisXml;
                    });
                    var cangetPos = false;
                    function swapWH(a, b) {
                        var c = a;
                        a = b;
                        b = a;
                    }
                    remindGup.addEventListener('mousedown', function (e) {
                        try {
                            var xmlPos = new XML(readd(sp_profileSwitchBarPosition));
                            if (e.button == 0) {
                                var w = movingWin();
                                if (eval(xmlPos.check.toString()) == true) {
                                    if (xmlPos.position.toString() != "") {
                                        w.location = eval('[' + xmlPos.position.toString() + ']');
                                    }
                                } else {
                                    w.location = [e.screenX, e.screenY - w.size[1] - 10];
                                }
                            }
                            if (e.button == 2) {
                                xmlPos.position = floatBarPos.toString();
                                writee(sp_profileSwitchBarPosition, xmlPos);
                                clearOutput();
                                write('位置归零');
                            }
                        } catch (e) { alert(e.line); }
                    });
                    //图片适配按钮大小
                    // UPDOWN.onDraw = sp_toolbar.newDraw;
                    // SETTINGBtn.onDraw = sp_toolbar.newDraw;
                } else {
                    var settingBtn = gr.add("iconbutton");//下面一行：栏图标
                }
                settingBtn.image = File.decode(ICON.Setting);//图像
                settingBtn.onDraw = sp_toolbar.newDraw;
                // SETTINGBtn.onDraw = function () {
                //     var ss = this.size[0] > this.size[1] ? this.size[1] : this.size[0];
                //     var px = this.size[0] / 2 - ss / 2;
                //     var py = this.size[1] / 2 - ss / 2;
                //     this.graphics.drawImage(this.image, px, py, ss, ss)
                // }
                var panelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                /**
                 * 
                 * @returns {string} 设置按钮注释
                 */
                function settingBtnHelpTip() {
                    var panelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                    var str = 'LMB: Open Setting Page\n\nCtrl+RMB: Reset Setting\nhasShowWin: ' + String(panelWHPrefXML.Panel.hasShowWin) + '\n\nAlt+RMB:  Change encoding to GBK\nCurrent Encoding: ' + $.appEncoding;
                    return str;
                }
                settingBtn.helpTip = settingBtnHelpTip();
                settingBtn.addEventListener('mousedown', function (e) {
                    if (e.ctrlKey) {
                        if (e.button == 2) {
                            var remind = confirm('Sure Reset?', '', 'Invert the show win setting', 1);
                            if (remind == true) {
                                var panelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                                var get = eval(String(panelWHPrefXML.Panel.hasShowWin));
                                panelWHPrefXML.Panel.hasShowWin = String(!get);
                                writee(sp_PanelSetProfile, panelWHPrefXML);
                            }
                        }
                    } else if (e.altKey) {
                        if (e.button == 2) {
                            $.appEncoding = 'GBK';
                            writeLn('Current Encoding:' + $.appEncoding);
                        }
                    } else {
                        if (e.button == 0) {
                            // try {
                            var panelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                            if (eval(String(panelWHPrefXML.Panel.hasShowWin)) == false) {//如果没有打开设置面板,是false,则：
                                SettingWin(sp_toolbar.drop.selection.index, gr);
                            } else {
                                alert("窗口已存在!\nhasShowWin:" + String(panelWHPrefXML.Panel.hasShowWin));
                            }
                        }
                        // } catch (err) { alert(err.line.toString() + err.toString()) }
                    }
                    var panelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                });
                settingBtn.addEventListener('mouseover', function (e) {
                    var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                    this.helpTip = settingBtnHelpTip();
                    // var ss = this.size[0] > this.size[1] ? this.size[1] : this.size[0];
                    // var px = this.size[0] / 2 - ss / 2;
                    // var py = this.size[1] / 2 - ss / 2;
                    // this.onDraw = function () { this.graphics.drawImage(this.image, px - 1, py - 1, ss + 2, ss + 2) }
                    if (this.size[0] == this.size[1]) {
                        this.image = File.decode(ICON.Setting);
                        this.onDraw = function () { this.graphics.drawImage(this.image, -1, -1, this.size[0] + 2, this.size[1] + 2); };
                    }
                });
                settingBtn.addEventListener("mouseout", function (e) {
                    // var ss = this.size[0] > this.size[1] ? this.size[1] : this.size[0];
                    // var px = this.size[0] / 2 - ss / 2;
                    // var py = this.size[1] / 2 - ss / 2;
                    // this.onDraw = function () { this.graphics.drawImage(this.image, px, py, ss, ss) }
                    if (this.size[0] == this.size[1]) this.onDraw = function () { this.graphics.drawImage(this.image, 0, 0, this.size[0], this.size[1]); };
                });
                // ic.text = "Edit";
                // ic.size = view.itemSize;
                // ic.index = i;
                //其他按钮               
                // ic.onDraw = sp_toolbar.newDraw;

                for (var i = 0; i < thisXml.children().length(); i++) {
                    //新建按钮
                    var ic = gr.add("iconbutton");
                    if (thisXml.child(i).icon.toString() != "") {
                        try {
                            ic.image = decodeURIComponent(thisXml.child(i).icon.toString());
                            ic.onDraw = function () {
                                sp_toolbar.newDraw.call(this);
                                grBtn_HoverStyle.call(this);
                            };
                        } catch (err) { }
                    }
                    ic.size = view.itemSize;
                    // var btName = thisXml.child(i).buttonName.toString();
                    // for(var i=0;i<btName.length;i++){
                    // }
                    ic.index = i;
                    ic.text = thisXml.child(i).buttonName.toString();
                    ic.helpTip = 'Name: ' + ic.text + '\n' + 'Help: ' + thisXml.child(i).helpTip.toString();
                    // if (ic.size[0] == ic.size[1]) {
                    //     ic.text = ic.text.substring(0, 2) + '\n' + ic.text.substring(2, 4);
                    // }
                    var xml = thisXml.child(i);
                    if (xml.ctrl.cmd != "" ||
                        xml.shift.cmd != "" ||
                        xml.alt.cmd != "" ||
                        xml.ctrlShift.cmd != "" ||
                        xml.ctrlAlt.cmd != "" ||
                        xml.shiftAlt.cmd != "" ||
                        xml.ctrlShiftAlt.cmd != "") {
                        ic.hasMulti = 1;
                        $.sleep(3);
                    } else {
                        ic.hasMulti = 0;
                    }
                    // $.writeln(ic.text + '__' + ic.hasMulti);
                    //右键列表菜单
                    ic.addEventListener("mouseup", function (k) {
                        var xml = new XML(readd(special_file));
                        var thisXml = xml.Group.child(droplist.selection.index);
                        var allowMarker = Number(thisXml.children()[this.index].activeModifiers);
                        // $.writeln(allowMarker);
                        // $.writeln("hasMulti " + ic.hasMulti + "allowMarker: " + allowMarker)
                        //↓别用ic.hasMulti用this,好像会识别index错误
                        if (k.button == 2 && this.hasMulti == 1 && allowMarker == 1) {
                            var newWin = new Window("palette", "", undefined, { borderless: 1 });
                            sp_toolbar.newWin = newWin;
                            var thisBtn = newWin.add("iconbutton", undefined, undefined, { style: "toolbutton" });
                            thisBtn.alignment = ['fill', 'top'];
                            // thisBtn.preferredSize.width = 150;
                            thisBtn.preferredSize.height = 22;
                            thisBtn.text = "Close";
                            thisBtn.onClick = function () {
                                sp_toolbar.newWin.close();
                            };
                            newWin.newDrop = newWin.add("listbox");
                            newWin.newDrop.alignment = ['fill', 'top'];
                            newWin.spacing = 0;
                            newWin.margins = 0;

                            var thisDrop = sp_toolbar.newWin.newDrop;
                            thisDrop.preferredSize = [180, 300];
                            thisDrop.removeAll();
                            var xml = sp_toolbar.getButtonInfo(droplist.selection.index, this.index);
                            {
                                if (xml.click.subName != "") {
                                    var ni = thisDrop.add("item", xml.click.subName);
                                    ni.image = File.decode(ICON.Click);
                                } else
                                    var ni = thisDrop.add("item", xml.buttonName);
                                ni.image = File.decode(ICON.Click);
                                if (xml.ctrl.subName != "") {
                                    var ni = thisDrop.add("item", xml.ctrl.subName);
                                    ni.image = File.decode(ICON.Ctrl);
                                } else {
                                    var ni = thisDrop.add("item", xml.ctrl.cmd);
                                    ni.image = File.decode(ICON.Ctrl);
                                }
                                if (xml.shift.subName != "") {
                                    var ni = thisDrop.add("item", xml.shift.subName);
                                    ni.image = File.decode(ICON.Shift);
                                } else {
                                    var ni = thisDrop.add("item", xml.shift.cmd);
                                    ni.image = File.decode(ICON.Shift);
                                }
                                if (xml.alt.subName != "") {
                                    var ni = thisDrop.add("item", xml.alt.subName);
                                    ni.image = File.decode(ICON.Alt);
                                } else {
                                    var ni = thisDrop.add("item", xml.alt.cmd);
                                    ni.image = File.decode(ICON.Alt);
                                }
                                if (xml.ctrlShift.subName != "") {
                                    var ni = thisDrop.add("item", xml.ctrlShift.subName);
                                    ni.image = File.decode(ICON.CtrlShift);
                                } else {
                                    var ni = thisDrop.add("item", xml.ctrlShift.cmd);
                                    ni.image = File.decode(ICON.CtrlShift);
                                }
                                if (xml.ctrlAlt.subName != "") {
                                    var ni = thisDrop.add("item", xml.ctrlAlt.subName);
                                    ni.image = File.decode(ICON.CtrlAlt);
                                } else {
                                    var ni = thisDrop.add("item", xml.ctrlAlt.cmd);
                                    ni.image = File.decode(ICON.CtrlAlt);
                                }
                                if (xml.shiftAlt.subName != "") {
                                    var ni = thisDrop.add("item", xml.shiftAlt.subName);
                                    ni.image = File.decode(ICON.ShiftAlt);
                                } else {
                                    var ni = thisDrop.add("item", xml.shiftAlt.cmd);
                                    ni.image = File.decode(ICON.ShiftAlt);
                                }
                                if (xml.ctrlShiftAlt.subName != "") {
                                    var ni = thisDrop.add("item", xml.ctrlShiftAlt.subName);
                                    ni.image = File.decode(ICON.CAS);
                                } else {
                                    var ni = thisDrop.add("item", xml.ctrlShiftAlt.cmd);
                                    ni.image = File.decode(ICON.CAS);
                                }
                                thisDrop.onChange = function (k) {
                                    sp_toolbar.newWin.hide();
                                    if (!this.selection) return;
                                    if (this.selection.index == 0) {
                                        sp_toolbar.handler(xml.click.cmd, xml.click.type);
                                    } else if (this.selection.index == 1) {
                                        sp_toolbar.handler(xml.ctrl.cmd, xml.ctrl.type);
                                    } else if (this.selection.index == 2) {
                                        sp_toolbar.handler(xml.shift.cmd, xml.shift.type);
                                    } else if (this.selection.index == 3) {
                                        sp_toolbar.handler(xml.alt.cmd, xml.alt.type);
                                    } else if (this.selection.index == 4) {
                                        sp_toolbar.handler(xml.ctrlShift.cmd, xml.ctrlShift.type);
                                    } else if (this.selection.index == 5) {
                                        sp_toolbar.handler(xml.ctrlAlt.cmd, xml.ctrlAlt.type);
                                    } else if (this.selection.index == 6) {
                                        sp_toolbar.handler(xml.shiftAlt.cmd, xml.shiftAlt.type);
                                    } else if (this.selection.index == 7) {
                                        sp_toolbar.handler(xml.ctrlShiftAlt.cmd, xml.ctrlShiftAlt.type);
                                    }//end of ctrlKey
                                };//end of activModifiers
                            }
                            sp_toolbar.newWin.preferredSize.width = 150; //右键菜单宽度
                            sp_toolbar.newWin.frameLocation = [k.screenX, k.screenY] - [3, 3];
                            sp_toolbar.newWin.show();
                            sp_toolbar.newWin.size[1] = 35 * 8 + 22;


                            //如果点击位置靠屏幕下方，则显示面板上移一段距离
                            if (k.screenX > 0 && k.screenY > 0) {
                                // $.writeln(k.screenX + ',' + k.screenY)
                                if (k.screenY > getScreenLoca()) { sp_toolbar.newWin.location = [k.screenX - 2, k.screenY - sp_toolbar.newWin.size[1]] - [3, 3]; }
                            }
                            function getScreenLoca() {
                                var screen = $.screens;
                                var s = screen[0];
                                var myPos = s.bottom / 2;
                                return myPos;
                            }

                            //sp_toolbar.newWin.addEventListener ("keydown",function(k){sp_toolbar.newWin.close();});
                            sp_toolbar.newWin.addEventListener("blur", function () { sp_toolbar.newWin.close(); });
                            sp_toolbar.newWin.onDeactivate = function () { sp_toolbar.newWin.close(); };
                            newWin.onResize = function () { newWin.layout.resize(); };
                        }
                    });
                    ic.onClick = function () {
                        try {
                            var keyBoard = ScriptUI.environment.keyboardState;
                            var xml = sp_toolbar.getButtonInfo(droplist.selection.index, this.index);
                            if (xml.activeModifiers == "0") { sp_toolbar.handler(xml.click.cmd, xml.click.type); } else {
                                if (keyBoard.ctrlKey == false && keyBoard.altKey == false && keyBoard.shiftKey == false) {
                                    sp_toolbar.handler(xml.click.cmd, xml.click.type);
                                } else if (keyBoard.ctrlKey == true && keyBoard.altKey == false && keyBoard.shiftKey == false) {
                                    sp_toolbar.handler(xml.ctrl.cmd, xml.ctrl.type);
                                } else if (keyBoard.ctrlKey == false && keyBoard.altKey == false && keyBoard.shiftKey == true) {
                                    sp_toolbar.handler(xml.shift.cmd, xml.shift.type);
                                } else if (keyBoard.ctrlKey == false && keyBoard.altKey == true && keyBoard.shiftKey == false) {
                                    sp_toolbar.handler(xml.alt.cmd, xml.alt.type);
                                } else if (keyBoard.ctrlKey == true && keyBoard.altKey == false && keyBoard.shiftKey == true) {
                                    sp_toolbar.handler(xml.ctrlShift.cmd, xml.ctrlShift.type);
                                } else if (keyBoard.ctrlKey == true && keyBoard.altKey == true && keyBoard.shiftKey == false) {
                                    sp_toolbar.handler(xml.ctrlAlt.cmd, xml.ctrlAlt.type);
                                } else if (keyBoard.ctrlKey == false && keyBoard.altKey == true && keyBoard.shiftKey == true) {
                                    sp_toolbar.handler(xml.shiftAlt.cmd, xml.shiftAlt.type);
                                } else if (keyBoard.ctrlKey == true && keyBoard.altKey == true && keyBoard.shiftKey == true) {
                                    sp_toolbar.handler(xml.ctrlShiftAlt.cmd, xml.ctrlShiftAlt.type);
                                }//end of ctrlKey
                            }//end of activModifiers
                        } catch (e) { alert(e.line + e.message); }
                    };//end of onClick function

                    { //尝试做拖动，目前失败，未完成
                        // var flag = false;
                        // ic.parent.removeEventListener('mousemove');
                        // ic.addEventListener('mousedown', function (e) {
                        //     flag = true;
                        //     writeLn(flag)
                        //     var xx = Number(e.clientX);
                        //     var yy = Number(e.clientY);
                        //     ic.parent.addEventListener('mousemove', function (e) {
                        //         // writeLn(e.clientX + ',' + e.clientY)
                        //         if (flag) {
                        //             var dx = Number(e.clientX);
                        //             var dy = Number(e.clientY);
                        //             // ic.location = [ic.location[0] + dx, ic.location[1] + dy];
                        //             if (ic.parent.children[ic.parent.children.length - 1].location[1] == win.size[1] - ic.size[1] - view.itemSize[1]) {
                        //                 ic.parent.children[ic.parent.children.length - 1].location[1] = ic.parent.children[ic.parent.children.length - 1].location[1]
                        //             } else {
                        //                 writeLn(dy - yy)
                        //                 for (var i = 0; i < ic.parent.children.length; i++) {
                        //                     // if(ic.parent.children[i].location[1]<yy&&ic.parent.children[i].location[1]+ic.parent.children[i].size[1]>yy){
                        //                     //     ic.parent.children[i].location[1] = e.clientY;
                        //                     // }
                        //                     ic.parent.children[i].location[1] = ic.parent.children[i].location[1] + (dy - yy) / 100;
                        //                 }
                        //             }
                        //         }
                        //     })
                        // })
                        // ic.parent.addEventListener('mouseup', function (e) {
                        //     flag = false;
                        //     writeLn(flag)
                        // })
                    }

                }
                var addButton = gr.add("button", undefined, '▽'); //跨脚本复制按钮，获得按钮代码
                addButton.helpTip = 'LMB: Import Button Code\nMMB: New a Icon Comp\nRMB: Current Comp Save to binary image code\nAlt+LMB: hide the scrollbar';
                addButton.addEventListener('mousedown', function (e) {
                    if (e.altKey) {
                        if (e.button == 0) {
                            scrollbar.visible = !scrollbar.visible;
                            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "scrollingBarVisible", scrollbar.visible.toString());
                        }
                        // if (e.button == 2) {
                        //     (function () {
                        //         var code = prompt('Paste Code: ', '');
                        //         if (code != '' || code != null) {
                        //             var file = File(Folder.desktop.fullName+'temp_AEscript_icon_sp_set_comp.png');
                        //             if(!file.exists){
                        //                 file.open('w');
                        //                 file.encoding='binary';
                        //                 file.write(code)
                        //             }
                        //         }
                        //     })()
                        // }
                    } else {
                        if (e.button == 0) {
                            var codePanel = buttonCodePanel();
                            codePanel.show();
                            codePanel.location = [e.screenX, e.screenY - 300];
                            codePanel.size = [300, 300];
                            function buttonCodePanel() {
                                var w = new Window("palette", "Button Code", undefined, { resizeable: true, closeButton: false, borderless: false });
                                w.alignment = ["fill", "fill"];
                                w.spacing = 4;
                                w.margins = 4;
                                var g1 = w.add("group");
                                g1.alignment = ["fill", "fill"];
                                var code = g1.add("edittext", undefined, undefined, { multiline: true, scrolling: false, borderless: true });
                                var codeG = code.graphics;
                                codeG.backgroundColor = codeG.newBrush(codeG.BrushType.SOLID_COLOR, [.2, .2, .2, 1]);
                                code.alignment = ["fill", "fill"];
                                var g2 = w.add("group");
                                g2.alignment = ["fill", "bottom"];
                                g2.alignChildren = ["fill", "bottom"];
                                g2.spacing = 4;
                                var ok = g2.add("button", undefined, "OK");
                                var cancel = g2.add("button", undefined, "Cancel", { name: 'cancel' });
                                ok.preferredSize[1] = 30;
                                cancel.preferredSize[1] = 30;
                                ok.onClick = function () {
                                    if (code.text == '') return;
                                    if (code.text.slice(0, 6) != "<Main>") {
                                        alert('Not find the <Main> Tag!');
                                        return;
                                    }
                                    var xml = new XML(readd(special_file));
                                    var newBtn = new XML(code.text);
                                    xml.Group.child(droplist.selection.index).appendChild(newBtn.button);
                                    writee(special_file, xml);
                                    w.hide();
                                    try { droplist.onChange(); } catch (e) { }
                                };
                                cancel.onClick = function () { w.hide(); };
                                w.onResize = function () { this.layout.resize(); };
                                w.onClose = function () { this.hide(); };
                                return w;
                            }
                        }
                        if (e.button == 1) {
                            undo('GetImageBinary', function () {
                                creatIconComp('|ICON|', 30, 30, 2, [.32, .32, .32, 1], [.1, .1, .1, 1]);
                            });
                            function creatIconComp(name, w, h, label, strokeColor, BGcolor) {
                                var iconComp = app.project.items.addComp(name, w, h, 1, 1, 30);
                                var myShape = iconComp.layers.addShape();
                                var content = myShape.property("ADBE Root Vectors Group");
                                var group = content.addProperty("ADBE Vector Group");
                                group.name = 'ICON-Group';
                                var rec = group.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
                                rec(2).setValue([30, 30]);
                                var fill = group.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
                                var myShape2 = myShape.duplicate();
                                var myShape3 = myShape.duplicate();
                                fill(4).setValue(strokeColor);
                                myShape3.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Fill")(4).setValue(BGcolor);
                                myShape2.scale.setValue([90, 90]);
                                if (app.version >= '23') {
                                    myShape.setTrackMatte(myShape2, TrackMatteType.ALPHA_INVERTED);
                                } else {
                                    myShape.trackMatteType = TrackMatteType.ALPHA_INVERTED;
                                    myShape2.enabled = false;
                                };
                                myShape3.moveToEnd();
                                myShape.name = name;
                                myShape2.name = 'matte';
                                myShape3.name = 'Bottom';
                                myShape.label = label;
                                myShape2.label = 0;
                                myShape3.label = label;
                                myShape.selected = false;
                                myShape2.selected = false;
                                myShape3.selected = true;
                                iconComp.openInViewer();
                            }
                        }
                        if (e.button == 2) {
                            try {
                                var comp = app.project.activeItem;
                                if (!(comp instanceof CompItem)) return;
                                if (comp.width > 300 || comp.height > 300) {
                                    alert('Comp size can\' large than 300px*300px!');
                                    return;
                                }
                                // 弹出提示框显示编码后的数据
                                var code = readBinaryFromCurrentImage(Folder.desktop);
                                $.sleep(80);
                                if (code == null) { alert('It\'s Null!'); } else {
                                    // imageFile.remove(); 
                                    var ww = smallpan('window', code);
                                    ww.show();
                                    ww.location = [e.screenX, e.screenY];
                                    ww.size = [150, 200];
                                }
                                // // 如果用户确认复制，删除图片到回收站
                                // if (userInput != null) {
                                //     imageFile.remove();
                                //     alert("图片已删除到回收站");
                                // }
                                function readBinaryFromCurrentImage(path) {//二进制-当前合成图像弹出代码
                                    // 获取当前激活的合成
                                    var comp = app.project.activeItem;
                                    if (!(comp instanceof CompItem)) {
                                        alert("请选择一个合成");
                                        return;
                                    }
                                    // 定义路径
                                    var fileName = "temp_AEscript_icon_sp_set_comp.png";
                                    var imageFile = new File(path.fullName + "/" + fileName);

                                    // 保存当前激活的合成为PNG图片
                                    comp.saveFrameToPng(comp.time, imageFile);

                                    $.sleep(80);
                                    // 读取PNG图片并转换为二进制代码
                                    var imageFile = new File(path.fullName + "/" + fileName);
                                    imageFile.open("r");
                                    imageFile.encoding = "BINARY";
                                    var binaryData = "\"" + encodeURIComponent(imageFile.read()) + "\"";
                                    imageFile.close();
                                    // 使用encodeURIComponent编码二进制数据
                                    return binaryData;
                                }
                            } catch (e) { alert(e.line + e.message); }
                        }
                    }
                });
                droplist.helpTip = droplist.selection.toString();
                win.onResize();
            } catch (e) { alert(e.line + e.message); }
        };//end of onChange function

        var xml = new XML(readd(special_file)); //载入默认列表
        //==========================================================================================
        //*新版本加入组一图标管理*==========================================================================================
        if (xml.groupIcon.length() <= 0) {   //检测有没有组图标，没有的话给默认值
            var xmlG1Icon = new XML('<groupIcon> </groupIcon>');
            xml.insertChildAfter(xml.general, xmlG1Icon); //加在顶上
            for (var i = 0; i < xml.Group.children().length(); i++) {
                //加入list1组图标
                var xmlG1IconID = new XML('<gup>' + ICON.littleMan + '</gup>');
                xml.groupIcon.appendChild(xmlG1IconID);
                xmlG1IconID['@id'] = xml.Group.child(i)['@groupName'];
            }
            writee(special_file, xml); ///////////写入
        }
        /**列表载入 */
        for (var i = 0; i < xml.Group.children().length(); i++) {
            droplist.add("item", xml.Group.child(i)['@groupName']);
            //     {   /////////检测配置文件有没有groupIcon属性，没有的话给默认值
            //         if (xml.Group.child(i).groupIcon == '') {
            //             var XmlAaddgroupIcon = new XML("<groupIcon></groupIcon>");
            //             xml.Group.child(i).insertChildAfter(null,XmlAaddgroupIcon);
            //             xml.Group.child(i).groupIcon = ICON.littleMan;
            //         }
            //     }
        }
        /**默认的时候的Default组 */
        if (droplist.items.length == 0) {
            sp_toolbar.addGroup('Default');
            var item = sp_toolbar.drop.add("item", 'Default');
        }

        var str = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "buttonSize");
        var stra = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing");
        var view = { hasDroplist: 0, hasScrollbar: 0, itemSize: [42, 45], itemSpacing: [0, 0], fillColor: [50 / 255, 190 / 255, 236 / 255] };
        sp_toolbar.view = view;
        view.itemSize = [parseInt(str.split(",")[0]), parseInt(str.split(",")[1])];
        view.itemSpacing = [parseInt(stra.split(",")[0]), parseInt(stra.split(",")[1])];

        if (droplist.items.length > 1) { view.hasDroplist = 1; } else { view.hasDroplist = 0; };
        if (droplist.items.length != 0) {
            droplist.selection = parseInt(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "dropSelection"));
            if (!droplist.selection) droplist.selection = 0;
        }
        if (droplist.items.length == 1) droplist.selection = 0;

        scrollbar.onChange = scrollbar.onChanging = function () {
            win.onResize();
            app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "scrollingBar", this.value);
        };


        //工具栏右边滚动条数值
        scrollbar.value = Number(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "scrollingBar"));
        win.onResize();

        //显示切换条？
        if (app.settings.getSetting("Sp_toolbar" + BarID.toString(), "autoShowSwitchBarControl") === 'true') {
            (function () { //滚动条信息
                if (droplist.items.length > 1) {
                    var movingPan = movingWin();
                    var xmlp = new XML(readd(sp_profileSwitchBarPosition));
                    var xmlCheck = eval(xmlp.check.toString());
                    var xmlpos = xmlp.position.toString();
                    if (xmlCheck == false) { movingPan.location = floatBarPos; }
                    if (xmlCheck == true) {
                        if (xmlpos == '') {
                            movingPan.location = floatBarPos;
                            xmlp.position = floatBarPos.toString();
                            writee(sp_profileSwitchBarPosition, xmlp);
                            return;
                        }
                        if (xmlpos != '') {
                            movingPan.location = eval('[' + xmlpos + ']');
                            return;
                        }
                    }
                }
            })();
        };

        //右边的栏要不要自动隐藏？
        eval(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "scrollingBarVisible")) == true ? scrollbar.visible = true : scrollbar.visible = false;

        if (thisObj instanceof Panel) { win.layout.layout(true); } else {
            win.onClose = function () {
                var thisStr = win.size[0].toString() + "," + win.size[1].toString();
                app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "winSize", thisStr);
                thisStr = win.location[0].toString() + "," + win.location[1].toString();
                app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "winLocation", thisStr);
            };
            win.location = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "winLocation").split(",");
            win.show();
            win.size = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "winSize").split(",");
            win.center();
        }

        //！未完成-尝试做面板拖动
        // var mouseeDownn = false;
        // win.addEventListener('mousedown', function (e) {
        //     mouseeDownn = true;
        //     var startPos = [e.screenX, e.screenY];
        //     writeLn(mouseeDownn);
        //     win.addEventListener('mousemove', function (e) {
        //         if (mouseeDownn == true) {
        //             writeLn('Moving!!!  ' + e.screenX + ',' + e.screenY);
        //             gr.location[1] -= (e.screenY - startPos[1]);
        //             gr.layout.resize()
        //             win.onResize()
        //         }
        //     })
        // })
        // win.addEventListener('mouseup', function (e) { mouseeDownn = false; writeLn(mouseeDownn) })
        // win.addEventListener('mouseout', function (e) { mouseeDownn = false; writeLn(mouseeDownn) })

        /**函数 */

        function smallpan(type, str) { //小窗口
            var w = new Window(type, 'Smallpan', undefined, { resizeable: true });
            w.spacing = w.margins = 0;
            var ed = w.add('edittext', undefined, undefined, { multiline: true, scrolling: true, name: 'ed' });
            ed.alignment = ['fill', 'fill'];
            w.onClose = function () { this.hide(); };
            w.onResize = function () { this.layout.resize(); };
            w.layout.layout(1);
            w.layout.resize();
            ed.text = str;
            return w;
        }
        function movingWin() { //页面切换滚动条
            var w = new Window('palette', 'Switch', undefined, { resizeable: true, borderless: true });
            w.spacing = 0;
            w.margins = 0;
            uiSetBgColor(w, [.32, .32, .32, .97]);
            // w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, [.9, .9, .9, .8]);//[.15,.18,.22,.8]
            var g = w.add('group');
            g.alignment = ['fill', 'fill'];
            g.spacing = g.margins = 0;
            var close = g.add('statictext', undefined, ' X ');
            close.alignment = ['left', 'center'];
            close.preferredSize[0] = close.preferredSize[1];

            var textContent = g.add('statictext', undefined, '-' + String(droplist.selection.index + 1) + '-  ' + String(droplist.selection));
            textContent.alignment = ['fill', 'center'];
            // ttt.preferredSize[0]=80;
            textContent.margins = 0;
            uiSetForeColor(textContent, [.7, .7, .7, 1], 2);
            // ttt.preferredSize[0]=10;

            var sld = g.add('scrollbar', undefined, droplist.selection.index, 0, droplist.items.length - 1);
            sld.orientation = 'column';
            sld.alignment = ['left', 'fill'];
            sld.preferredSize[0] = 250;

            var remindPos = g.add('checkbox', undefined, 'RememPos');
            remindPos.size = [55, 15];
            remindPos.helpTip = 'Remember Position';

            var autoShow = g.add('checkbox', undefined, 'AutoShow');
            autoShow.size = [55, 15];
            autoShow.helpTip = 'Auto Show';

            var g2 = g.add('group');
            g2.alignment = ['right', 'fill'];
            g2.spacing = g2.margins = 0;
            g2.preferredSize[0] = 25;

            /**读文件 */
            var content = readd(sp_profileSwitchBarPosition);
            var xmlPos = new XML(content);
            var xmlCheck = xmlPos.check.toString();

            remindPos.value = eval(xmlCheck);
            autoShow.value = eval(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "autoShowSwitchBarControl"));

            //Function============================================
            remindPos.onClick = function () {
                var content = readd(sp_profileSwitchBarPosition);//写入xml
                var xmlchk = new XML(content);
                xmlchk.check = this.value.toString();
                writee(sp_profileSwitchBarPosition, xmlchk);
            };
            autoShow.onClick = function () {
                app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "autoShowSwitchBarControl", this.value);
            };
            close.addEventListener('mousedown', function (e) { if (e.button == 0) w.hide(); });
            sld.onChanging = function () {
                droplist.selection = droplist.items[sld.value];
                textContent.text = '-' + String(droplist.selection.index + 1) + '-  ' + String(droplist.selection);
                this.value = Math.ceil(sld.value);
            };
            w.onResize = function () {
                if (w.size[0] > w.size[1]) { g.orientation = 'row'; if (w.size[1] > 75) { w.size[1] = 75; } }
                if (w.size[0] < w.size[1]) { g.orientation = 'column'; if (w.size[0] > 75) { w.size[0] = 75; }; swapWH(sld.size[0], sld.size[1]); }
                this.layout.resize();
            };
            w.onClose = function () { this.hide(); };
            w.preferredSize[0] = 300;
            w.preferredSize[1] = 29;
            w.opacity = .9;
            w.show();
            //出现位置
            var xmlp = new XML(readd(sp_profileSwitchBarPosition));
            var xmlCheck = xmlp.check.toString();
            //判断要不要记录位置
            // if (xmlCheck == 'false') {
            //     w.location = [e.screenX, e.screenY - w.preferredSize[1] * 1.5];
            //     RememberPos = w.location;
            //     var content = readd(sp_profileSwitchBarPosition);
            //     var xmlPos = new XML(content);
            //     xmlPos.position = RememberPos.toString();
            //     writee(sp_profileSwitchBarPosition, xmlPos);
            // }
            // if (xmlCheck == 'true') {
            //     try {
            //         var xmlPos = new XML(readd(sp_profileSwitchBarPosition));
            //         var RememberPos = xmlPos.position.toString();
            //         w.location = eval('[' + RememberPos + ']');
            //     } catch (e) { }
            // };
            // var ori = false;
            // ttt.addEventListener('mousedown', function (e) {
            //     if (e.button == 0) {
            //         ori = !ori;
            //         if (ori == true) {
            //             w.orientation = 'column';
            //             swapWH(w.size[0], w.size[1]);
            //             swapWH(sld.size[0], sld.size[1]);
            //             w.layout.resize();
            //         }
            //         if (ori == false) {
            //             w.orientation = 'row';
            //             swapWH(w.size[0], w.size[1]);
            //             swapWH(sld.size[1], sld.size[0]);
            //             w.layout.resize();
            //         }
            //         clearOutput();
            //         write(ori)
            //     }
            // });
            w.addEventListener('keydown', function (e) { //移动位置
                function Press(_pixel) {
                    if (e.keyName == 'Up') {
                        w.location[1] -= _pixel;
                    };
                    if (e.keyName == 'Down') {
                        w.location[1] += _pixel;
                    };
                    if (e.keyName == 'Left') {
                        w.location[0] -= _pixel;
                    };
                    if (e.keyName == 'Right') {
                        w.location[0] += _pixel;
                    };
                    if (w.location[0] < 0 || w.location[1] < 0) w.location = [0, 0];
                }
                if (e.shiftKey) {
                    Press(60);
                } else if (e.ctrlKey) {
                    Press(1.5);
                } else {
                    Press(5);
                }
                RememberPos = w.location;
                var content = readd(sp_profileSwitchBarPosition);
                var xmlPos = new XML(content);
                xmlPos.position = RememberPos.toString();
                writee(sp_profileSwitchBarPosition, xmlPos);

                clearOutput();
                write(w.location);
            });
            var clickDown = false;
            var dis = [0, 0];
            w.addEventListener('mousedown', function (e) {
                if (e.button == 0) { clickDown = true; }
                if (e.button == 2) { clickDown = false; }
                dis = [e.clientX, e.clientY];
            });
            w.addEventListener('mousemove', function (e) {
                if (clickDown) {
                    w.location = [e.screenX - dis[0], e.screenY - dis[1]];
                    var xmlPos = new XML(readd(sp_profileSwitchBarPosition));
                    xmlPos.position = w.location.toString();
                    writee(sp_profileSwitchBarPosition, xmlPos);
                }
            });
            w.addEventListener('mouseout', function (e) { clickDown = false; });
            // w.size=[300,75];
            // win.addEventListener('mouseover', function (l) {
            //     var getP = [l.screenX, l.screenY]
            //     win.onMoving = win.onMove = win.onResizing = function (k) {
            //         var pos = win.location;
            //         w.location = [getP[0],getP[1]];
            //     }
            //     clearOutput();
            //     write(l.screenX+' '+l.screenY)
            // })
            // w.onMoving = w.onResizing = function () {
            // var pos = win.location;
            // w.location = [getP[0],getP[1]];
            // }
            return w;
        }
        function undo(_name, _fun) { //撤销组
            app.beginUndoGroup(_name);
            _fun();
            app.endUndoGroup();
            return;
        }
        function readd(_File) {
            _File.open('r');
            var _content = _File.read();
            _File.close();
            return _content;
        }
        function writee(_File, _str) {
            _File.open('w');
            _File.write(_str);
            _File.close();
        }
        function getId(_arr, _str) { //遍历数组获得想要的
            // for (var i in _arr) { //！！不要用for in, 可能会出现配置篡掉的问题 //By GFred
            //     if (_arr[i] == _str)
            //         return i;
            // }
            for (var i = 0; i < _arr.length; i++) {
                if (_arr[i] == _str) return i;
            }
            return -1;
        }
        function rgbToHex(r, g, b) {//RGBtoHex16进制
            try {
                // 确保RGB值在0到255之间
                r = Math.max(0, Math.min(255, r));
                g = Math.max(0, Math.min(255, g));
                b = Math.max(0, Math.min(255, b));
                // 将RGB值转换为16进制并补足为两位数
            } catch (e) { alert(e.line + e.message); return; }
            return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
        }
        function HextoRGB(_col) { //返回的是255
            try {
                var r = _col >> 16;
                var g = (_col & 0xff00) >> 8;
                var b = _col & 0xff;
                return [r, g, b];
            } catch (e) { alert(e.line + e.message); return [.5, .5, .5]; }
        }
        function uiSetBgColor(_control, _Col) {//控件设置BG颜色
            _control.graphics.backgroundColor = _control.graphics.newBrush(_control.graphics.BrushType.SOLID_COLOR, _Col);
        }
        function uiSetForeColor(_control, _Col, _StrokeWidth) {//控件设置BG颜色
            _control.graphics.foregroundColor = _control.graphics.newPen(_control.graphics.PenType.SOLID_COLOR, _Col, _StrokeWidth);
        }
        /**$.writeln输出内容
         * @param {*} _str 
         */
        function print(_str) {
            $.writeln(_str);
        }
        function SettingWin(groupIndex, group) {
            var keepRf = this;
            var typeArr = sp_toolbar.typeArr;
            special_file.copy(backupFile);
            sp_toolbar.drop.enabled = 0;

            /************************窗口创建***************************************/
            {
                this.w = new Window('palette', 'Sp_toolbar-H Setting_Panel v' + gf.version, undefined, { resizeable: false, closeButton: true });
                this.w.tab = this.w.add("tabbedpanel");
                this.w.tab1 = this.w.tab.add("tab", undefined, special_loc >> special_str.general);
                this.w.tab1.alignChildren = ["fill", "top"];
                this.w.tab2 = this.w.tab.add("tab", undefined, special_loc >> special_str.toolbar);

                this.w.spacing = this.w.margins = 1;
                this.w.alignment = ['fill', 'fill'];
                this.w.tab1.alignment = ['fill', 'fill'];
                this.w.tab1.spacing = this.w.tab1.margins = 3;
                this.w.tab2.spacing = 0;
                this.w.tab2.margins = [0, 3, 0, 0];

                var res0 =
                    "Panel{\
                        text: '" + (special_loc >> special_str.buttonSize) + "',\
                            orientation: 'row',\
                            gr1:Group{\
                                orientation: 'column', alignment: ['fill', 'fill'], alignChildren: ['center', 'fill'],\
                                stBtnS:StaticText{ text: '按钮大小W' },\
                                stBtnS:StaticText{ text: '按钮大小H' },\
                                st1:StaticText{ text: '按钮间隔W' },\
                                st2:StaticText{ text: '按钮间隔H' },\
                            },\
                            gr2:Group{\
                                orientation: 'column', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],\
                                sl1:Slider{ startValue: 0, endValue: 200, value: 30, size: [200, 25] },\
                                sl2:Slider{ startValue: 0, endValue: 200, value: 30, size: [200, 25] },\
                                sl3:Slider{ startValue: 0, endValue: 105, value: 5, size: [200, 25] },\
                                sl4:Slider{ startValue: 0, endValue: 105, value: 5, size: [200, 25] },\
                            },\
                            gr3:Group{\
                                orientation: 'column', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],\
                                ed1:EditText{ characters: 3 },\
                                ed2:EditText{ characters: 3 },\
                                ed3:EditText{ characters: 3 },\
                                ed4:EditText{ characters: 3 },\
                            }\
                        } ";
                this.w.res0 = this.w.tab1.add(res0);

                //打开配置文件夹
                var resTemp =
                    "Panel{\
                            text: '" + (special_loc >> special_str.handleXmlFIle) + "',\
                            orientation: 'column',\
                            gr1:Group{\
                                orientation: 'row', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],\
                                colpanBord:Panel{\
                                    margins:5,\
                                    preferredSize:[35,35],\
                                    colpan:Panel{preferredSize:[31,31]},\
                                },\
                                news:Button{text:'*News*'},\
                                open:Button{ text: \"路径 | 配置\" },\
                                imports:Button{ text: '" + (special_loc >> special_str.importFile) + "' }, \
                                exports:Button{ text: '" + (special_loc >> special_str.exportFile) + "' } \
                            } \
                        } ";
                this.w.res2 = this.w.tab1.add(resTemp);

                var resTemp =
                    "Panel{\
                        text: '" + (special_loc >> special_str.internetText) + "',\
                            orientation: 'column',\
                            gr1:Group{\
                                orientation: 'row', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],spacing:2,\
                                im1:Image{ text:''},\
                                update:Button{ text: '" + (special_loc >> special_str.checkForUpdate) + "' },\
                                weibo:Button{ text: '" + (special_loc >> special_str.weibo) + "' }\
                                Bili:Button{ text: 'Bili GFred',alignment:['fill','fill'] }\
                            }\
                        }";
                this.w.res3 = this.w.tab1.add(resTemp);

                var resTemp =
                    "Panel{\
                        text: '" + (special_loc >> special_str.parse) + "',\
                        orientation: 'column',\
                        gr1:Group{\
                            orientation: 'row', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],\
                            parse:Button{ text: '" + (special_loc >> special_str.parseButton) + "' }\
                        }\
                        }";
                this.w.res35 = this.w.tab1.add(resTemp);

                //语言面板
                var resTemp =
                    "Panel{\
                                text: '" + (special_loc >> special_str.language) + "',\
                                orientation: 'column',\
                                gr1:Group{\
                                    orientation: 'row', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],\
                                    en:Button{ text: 'English' },\
                                    ch:Button{ text: '中文' }\
                                }}";
                this.w.res36 = this.w.tab1.add(resTemp);

                //作者说明面板
                var resTemp =
                    "Panel{\
                                    text: 'What can I say here :)',\
                                    orientation: 'column',\
                                    alignment:['fill','top'],\
                                        gr1:Group{\
                                            alignment:['fill','fill'],\
                                            orientation: 'row', alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],\
                                            ed:EditText{ alignment:['fill','center'],justify: 'center', text: '', properties: { multiline: 1, readonly: 1, scrolling : 0 }, size: [undefined, 160], alignment: ['fill', 'fill'] }\
                                        }\
                                    }";
                this.w.res4 = this.w.tab1.add(resTemp);
                this.w.res4.gr1.ed.text = "Have a nice day~\n\nBy:Smallpath\nEmail:smallpath2013@gmail.com\n\nChange: GFred\nLast Change Time: " + gf.change;
                // this.w.res4.alignment=['fill','fill'];


                // ↓这里改工具栏的设置!!↓ByGF
                //设置面板第2页
                var res1 =
                    "Group{\
                                    orientation: 'column', alignment: ['fill', 'top'],\
                                    spacing:1,margins:2,\
                                    gsld:Group{\
                                        orientation: 'row', alignment: ['fill', 'top'],spacing:1,margins:1,\
                                        sl1Text:StaticText{ text: '50',size: [42, 15]},\
                                        sl1:Slider{ minvalue: 0, maxvalue: 900, value: 50, size: [250, 15], alignment: ['fill', 'top'] },\
                                        sl2Text:StaticText{ text:  '15',size: [42, 15]},\
                                        sl2:Slider{ minvalue: 0, maxvalue: 900, value: 15, size: [250, 15], alignment: ['fill', 'top'] }\
                                    },\
                                    gr1:Group{\
                                            alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'],spacing:0,margins:3,\
                                            gr1:Panel{\
                                                text: '" + (special_loc >> special_str.toolbars) + "',\
                                                size:[0,0,280,5],\
                                                spacing:0, margins:[0,8,0,0]\
                                                gr1:Group{\
                                                    orientation: 'row', alignment: ['fill', 'top'], alignChildren: ['right', 'buttom'], magins: 1, spacing: 3,\
                                                    Input:IconButton{size: [30, 30],properties:{style:'toolbutton'}},\
                                                    Output:IconButton{size: [30, 30],properties:{style:'toolbutton'}},\
                                                    Bar1icon:IconButton{size: [30, 30],properties:{style:'toolbutton'}},\
                                                    Divider:Panel{alignment:'fill'},\
                                                    create:IconButton{ text: 'Add', size: [30, 30],properties:{style:'toolbutton'} },\
                                                    del:IconButton{ text: 'Del', size: [30, 30],properties:{style:'toolbutton'} },\
                                                    up:IconButton{ text: 'Up', size: [30, 30] ,properties:{style:'toolbutton'}},\
                                                    down:IconButton{ text: 'Down', size: [30, 30],properties:{style:'toolbutton'} }\
                                                },\
                                                gr2:Group{\
                                                    alignment: ['fill', 'top'], alignChildren: ['fill', 'top'],\
                                                    st:StaticText{ text: '" + (special_loc >> special_str.nameText) + "' ,alignment:['left','center'],helpTip: 'List1 Name' },\
                                                    ed:EditText{ text: '', characters: 8, size: [120, 35] ,alignment:['fill','center']},\
                                                },\
                                                gr3:ListBox{ alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'], size: [120, '350'] } \
                                            }, \
                                            gr2:Panel{\
                                                text: '" + (special_loc >> special_str.buttons) + "', \
                                                size:[0,0,280,5],\
                                                spacing:0, margins:[0,8,0,0]\
                                                gr1:Group{\
                                                    orientation: 'row', alignment: ['fill', 'top'], alignChildren: ['right', 'top'], magins: 1, spacing: 3, \
                                                    KeepBtn:Checkbox{text:'keep'}, \
                                                    Jump:Checkbox{text:'jump' }, \
                                                    moveGup:IconButton{ text: '◀', size: [30, 30] ,properties:{style:'toolbutton'}}, \
                                                    create:IconButton{ text: 'Add', size: [30, 30] ,properties:{style:'toolbutton'}}, \
                                                    del:IconButton{ text: 'Del', size: [30, 30],properties:{style:'toolbutton'} }, \
                                                    up:IconButton{ text: 'Up', size: [30, 30], helpTip: ' LMB:  移动x1 ' ,properties:{style:'toolbutton'}}, \
                                                    down:IconButton{ text: 'Down', size: [30, 30], helpTip: ' LMB:  移动x1 ',properties:{style:'toolbutton'}} \
                                                }, \
                                                gr2:Group{\
                                                    alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                                    st:StaticText{ text: '" + (special_loc >> special_str.nameText) + "' ,alignment:['left','center'],helpTip: 'List2 Name\\n!!!不要用方向键频繁上下切换按钮，可能导致程序反应不过来造成配置互相乱篡'}, \
                                                    ed:EditText{ text: '', characters: 8, size: [120, 35] ,alignment:['fill','center']}, \
                                                }, \
                                                gr3:ListBox{alignment: ['fill', 'fill'], alignChildren: ['fill', 'fill'], size: [120, '350']} \
                                            } \
                                    }, \
                                    gr2:Panel{\
                                        orientation: 'column', alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                        text: '" + (special_loc >> special_str.buttonsParameters) + "', \
                                        gr1:Group{\
                                            st:StaticText{ text: '" + (special_loc >> special_str.type) + "' }, \
                                            drop:DropDownList{  properties: { items: " + (special_loc >> special_str.typeArr) + " } }, \
                                            GetBtnXmlAboutText:StaticText{text:'Button XML: ',alignment:['right','fill']},\
                                            GetBtnXml:IconButton{text:'Get',size:[40,30],alignment:['right','fill'],properties:{style:'toolbutton'}}\
                                        }, \
                                        gr11:Group{\
                                            st:StaticText{ text: '" + (special_loc >> special_str.subName) + "' }, \
                                            ed:EditText{ text: '', characters: 20, justify: 'center',alignment:['fill','fill'] }, \
                                        }, \
                                        gr2:Group{\
                                            alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], spacing:2,\
                                            st:StaticText{alignment:['left','center'], text: '" + (special_loc >> special_str.command) + "' }, \
                                            chk:Checkbox{alignment:['left','center']}, \
                                            chkAbout:StaticText{ alignment: ['left', 'fill'],text: '" + (special_loc >> special_str.activeModifiers) + "' }, \
                                            drop:DropDownList{ alignment: ['fill', 'fill'],properties: { items: ['Click', 'Ctrl+Click', 'Shift+Click', 'Alt+Click', 'Ctrl+Shift+Click', 'Ctrl+Alt+Click', 'Shift+Alt+Click', 'Ctrl+Shift+Alt+Click'] } }, \
                                            AddUndoGroupBtn:IconButton{alignment: ['right', 'fill'],text:'Undo',size:[40,29],helpTip:'编辑框加入撤销组代码\\n*注意只需要1组',properties:{style:'toolbutton'}}\
                                            CustomEditor:IconButton{alignment: ['right', 'fill'],text:'< / >',size:[40,29],helpTip:'open with editor',properties:{style:'toolbutton'}}\
                                        }, \
                                        ed:EditText{ properties: { multiline: 1 ,borderless:true}, alignment: ['fill', 'top'], alignChildren: ['fill', 'fill'] }, \
                                        gr3:Group{\
                                            orientation: 'stack', alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                            gr1:Group{\
                                                alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                                bt1:Button{ text: '" + (special_loc >> special_str.getEffect) + "' }, \
                                                bt2:Button{ text: '" + (special_loc >> special_str.getEffectWith) + "' } \
                                            },\
                                            gr2:Group{\
                                                alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                                bt1:Button{ text: '" + (special_loc >> special_str.getPresets) + "' } \
                                            },\
                                            gr3:Group{\
                                                alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                                bt1:Button{ text: '" + (special_loc >> special_str.getScripts) + "' } \
                                            },\
                                            gr4:Group{\
                                                alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                                bt1:Button{ text: '" + (special_loc >> special_str.getAppendEffect) + "' }, \
                                                bt2:Button{ text: '" + (special_loc >> special_str.transferToFile) + "' } \
                                            }\
                                        },\
                                        gr4:Group{\
                                            alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                            st:StaticText{ text: '" + (special_loc >> special_str.helpTip) + "' }, \
                                            ed:EditText{ text: '', characters: 30 }\
                                        },\
                                        gr5:Group{\
                                            alignment: ['fill', 'top'], alignChildren: ['fill', 'top'], \
                                            st:StaticText{ text: '" + (special_loc >> special_str.icon) + "' }, \
                                            ed:StaticText{ text: '', characters: 32, properties: { readonly: 1 } }, \
                                            importImg:IconButton{ text: 'Import', size: [30, 30],properties:{style:'toolbutton'} }, \
                                            getImg:IconButton{ text: 'Get', size: [30, 30] ,properties:{style:'toolbutton'}}, \
                                            bt:IconButton{ text: 'Past', size: [30, 30] ,properties:{style:'toolbutton'}}, \
                                            bt1:IconButton{ text: 'Del', size: [30, 30] ,properties:{style:'toolbutton'}}\
                                        },\
                                    },\
                                    gr3:Panel{\
                                        orientation:'row',alignChildren:['fill', 'top'],alignment:['fill', 'top'], text: 'OK | Cancel',\
                                        ok:Button{ text: '" + (special_loc >> special_str.ok) + "' }, \
                                        can:Button{ text: '" + (special_loc >> special_str.can) + "' } \
                                    } \
                                }";


                this.w.res1 = this.w.tab2.add(res1);
                this.w.tab.selection = this.w.tab2;
                this.w.res1.gr1.gr1.gr1.create.image = this.w.res1.gr1.gr2.gr1.create.image = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x17\x00\x00\x00\x14\b\x06\x00\x00\x00f\u00BE\u00A6\x0E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x17OiCCPPhotoshop ICC profile\x00\x00x\u00DA\u00D5yiX\u008D]\u00D8\u00F6u\u00DF\u00FB\u00DES\u00ED\u00DD<\u00CF\u00F3\u00A8y\u009E\u00E7\u00D2\u00A4y\u00A6y\x1Ew\u00BB\u00B9H\u00A5\u00D2@)$\u0085($\u00A1D#\r\u00A2H\u009E$\n\x15\x1A\u00A4\"d\u0088\x10\u00BD?x\u009E\u00E7\x1D\u00BE\u00F7\u00C7w\x1C\u00DF\u009F\u00EF\u00FC\u00B1\u008E\u00F38\u00AFk\u009D\u00D7u\u00FDZ\u00C7Z\x0B\u0080w%\u0080F\u008BFY\x00bb\x13\u00E9\u00CEV\u00A6\"\u009E^\u00DE\"\u00C4) \u00820p\u0083\x06\u00C8\x05\x04%\u00D0L\x1C\x1D\u00ED\u00E0\x7F\u00C5\u0097\t@\x00\x00\x1E*\x04\u00D0h\u00D1\u00F0\x7F\x07\u00D6\u00E0\u0090\u0084 \x00\u00C4\x11\x00\x02\u0083\x13\u0082b\x00\u0090\u00AB\x00\u00A8i\x10\u008D\u009E\b\u0080[\x07\u0080\u00D1\u0094DZ\"\x00v\x07\x008\u00E8\u009E^\u00DE\x00\u00D84\x00p\u0084\u00FD\u00E6\u00AB\x00\u00C0\x11\u00E8\u00E9\u00E5\r\u0080\u00C7\x00\u0080\u0083\u00EE\u00EAl\x06\u0080\u00E7\x01 Q\x02\x02\u00E8a\x00T\t\x00\x10I\x0E\nK\x04\u00A0\u009A\x03\x10\u00D8b\u0083#b\x01\u00D8=\x01\b\u0086A\u00E1\x01\u00C1\x00\u00BC\u0095\x00\u00B0%&&.\x18\u0080\u00F7\x16\x00\u00C8\x04\u00FE'\u009F\u00B0\u00FF\u00E2\x19\u00F8\u008Fg@@\u00D8?\u00FC\u00F7,\x00\x00@2\u008FH\u00A0E\x07\u00A4\u00C1\u00FFk\u00C4D'\u00FD]\u0083\r\x00(\u00B1\u00D1\u00DB\u00EC\x00\u0080\x0B\x00\u0096\u0082\x03\u00CCm\x01@\x00\x00~\u00D1\u00A2\x1D\u00ED~\u00E7 |!\u00B1n.\x7F\u00F8\u0096\u00D8\u00C0m\x0E\x7F\u00B8a(\u00DD\u00D2\u00F9\u00F7^\u00C4\u0091\u0096h\u00EA\f\x00<\x00H(-\u00D1\u00D1\u00F5\u008F\u009E\u0099\x1En\u00B6\r\x00(\x00\u00C8\u00A1\u0090\x04\u008B\u00BF}NF\x06\u00D88\x02\x00\x13\x00\u00D2BOrv\x03\x00\t\x00\u00A4/!\u00D9\u00C5\x02\x00X\x00\u0090\u0097\u00E9\u00E1\u00AE\x1E\x7Fr>\x07\u0087\u0098\u00FF\u00D1Q44\u00C2\u00D2\u00FA\x0Fg\u008BH\u00B4v\x05\x00\x0E\x00T,*\u00CE\u00D6\u00F9w-T\x13l!\x1AB \t\u00E8\x10\x02\u00B1\u00A0\x00v`\x06\u00E6\x7FV\x05\b\u0085\x00\u00A0C2\u0084@\x02D\u00C1+\u00A0C\f\u00D8B\x1CDC\x1C\u00D0A\u00E4O\u009E\u00D9\u00FFP,!\x00\u00E8\x10\x06!\u00FF\u00CDQ\x04\u0082 \x0E\u0092\u00FE\u00A9\u00F9\u00B7\u00FA\u00AFC\x04\x04C\u00DC?z\u00C0\u009F\x18\x1DB \u00C1/\"\u00E7\u00DF\n\u00FF\u00D9/\x1A\u00E2\u0080\u00AE\u00DC\u00A8\u00BC\u00AC\u00BC\u00F1w\x1C\u0093\u00C2T1\r\u00CC\x143\u00C0\f1\x1D\x10\u00C1\u00B80>P\u00C0\u00D41m\u00CC\x043\u00C2\u00F40\rL\x07,\u00E1%\u00D0!\u00EC\u00EF\x1E\u00FD\"r\u00E81-\u00A1\u00C9\u0095qi\u00BA\u00EE\u00E1\x7Ff\b\u00FCg\x02wx\tt\u0088\u00F8?N\u00F4\u00A7\u00F7\u0091\u0095\u00F6\u0095\x7F:\u0084\u00C4\u0090\u00D4D\x00\x00\u00B38Z\x1A=\",<Q\u00C4\u0084F\u008B\x0E\u00D9\"b\x1D\x1B\u00A4\u00B8EDUYE\x05\u00FE\x7F\u0082\u00A7\u0097\u00B7\u00C8o\u00F6\u00C9\x19\x10\x00@\u00B8\u00EE\u00FF\u00AB\u00C5\u00A9\x00\u00E8\x04\x01 {\u00FE\u00D5\u00FC\u00DF\x01\u00B4G\x02\u0090\u00D8\u00FE\u00D5\u00A4\u00DA\x01\u0098U\x01\u0086\u008E\x04%\u00D1\u0093\x7Fk\x18\x00\x00\x1E\x18\u0080\x198\u0080\x17\u0084@\x1Cd@\x01TA\x13\u00F4\u00C0\x18,\u00C0\x06\x1C\u00C0\x15\u00BC\u00C0\x17\u0082 \x1Cb\u0080\x0E)\u00B0\x13\u00B2!\x1F\u008A\u00E1\x00\x1C\u0086*\u00A8\u0081:8\x07\x17\u00A1\x05\u00DA\u00E1:\u00DC\u0080A\x18\u0086Q\x18\u0087)\u0098\u0081\x05x\x03\u00AB\u00F0\x05~ \bBD\u00A8\b;\u00C2\u008B\b#\u0092\u0088<\u00A2\u008Ah#\u0086\u0088\x05b\u00878#^\u0088?\x12\u0086\u00C4\"I\u00C8Nd\x0FR\u008C\u0094#U\u00C8)\u00A4\x01\u00B9\u008Ct\"7\u0090!\u00E4\x01\u00F2\x14\u0099E\u0096\u0091\u008F\u00C8w\x14\u0087RP\x0ET\x10\u0095B\u0095Pm\u00D4\x04\u00B5E]\u00D1\x1Dh\x18\x1A\u008F\u00A6\u00A3\u00B9h\tZ\u0089\u00D6\u00A2\x17\u00D06\u00F4\x06:\u008C\u008E\u00A33\u00E8\x1Bt\r\x078F\x1C\x17N\x14\u00A7\u0080\u00D3\u00C6\u0099\u00E1\x1Cp\u00DE\u00B8P\x1C\x1D\u0097\u0089+\u00C2U\u00E0jq\u0097p]\u00B8\u00DB\u00B8\u0087\u00B8\x19\u00DC\n\u00EE\x1BF\u00C0\u00D81\x11L\x01\u00D3\u00C3\u00B6bnX\x10\x16\u008Feb\u00FB\u00B0*\u00EC\x1C\u00D6\u0086\u00DD\u00C2\x1Eb\u00B3\u00D8*\u00F6\x0BO\u00C5\x0B\u00E0\u00E5\u00F1\u00BAxk\u00BC'>\f\u009F\u0082\u00CF\u00C7W\u00E0\u00CF\u00E2[\u00F1\x03\u00F8q\u00FC\x02\u00FE\x0B\u0081@\u00E0\"H\x13\u00B4\b[\t^\u0084HB\x06a\x1F\u00E18\u00A1\u0089\u00D0Gx@\u0098'\u00AC\x11\u0089D^\u00A2<\u00D1\u0080\u00E8@\f &\x12\u00F3\u0089G\u0089\x17\u0088\u00BD\u00C41\u00E2\x02q\u009D\u00C4H\x12&\u00A9\u0092,I\u00DE\u00A4XR\x0E\u00A9\u0082t\u009E\u00D4C\x1A#-\u0092~\u0090Y\u00C8\u0092d]\u00B2\x039\u0098\u009CF.%\u009F&w\u0091\u00EF\u0093\x17\u00C8?\x18X\x19\u00A4\x19\f\x18\\\x19\"\x19\u00B2\x19*\x19.1\f0L3|bdd\x14c\u00D4atb\u008C`\u00CCb\u00ACdlf\u00BC\u00C38\u00CB\u00F8\u008D\u00C2F\u0091\u00A3\u0098Q\u00B6S\u0092(%\u0094zJ\x1F\u00E5)\u00E5\x13\u0095J\u0095\u00A2\x1AS\u00BD\u00A9\u0089\u00D4\x12j\x03\u00F5&\u00F59u\u009D\u0089\u009DI\u0091\u00C9\u009A)\u0098i7S5S\x1B\u00D3\x18\u00D3;f2\u00B3$\u00B3\t\u00B3/s:s\x05\u00F3\x15\u00E6\u00FB\u00CC+,d\x16)\x163\u0096\x00\u0096L\u0096j\u0096N\u0096\u00C7,k\u00AC\u00EC\u00AC*\u00AC\x0E\u00AC1\u00AC\u00FBX\u00CF\u00B3\x0E\u00B1.\u00B1\x11\u00D9\u00A4\u00D8,\u00D8\u0082\u00D9r\u00D9\u00EA\u00D8n\u00B2\u00CD\u00B3\u00E3\u00D8\u00C5\u00D9\u00CD\u00D8\u0083\u00D8\u00F7\u00B0\u009Ff\x1F`_\u00E0 pHsXsDr\x14s\\\u00E4\x18\u00E1X\u00E5d\u00E3T\u00E7t\u00E7L\u00E5\u00AC\u00E6\u00EC\u00E6\u009C\u00E1\u00C2qIqYsEs\u0095r\u00B5pMp}\u00E7\x16\u00E46\u00E1\x0E\u00E1.\u00E4\u00BE\u00C4=\u00C6\u00FD\u0095\u0087\u009F\u00C7\u0098'\u0084\u00A7\u0088\u00A7\u0089g\u009C\u00E7;\u00AF\b\u00AF\x05o\x14o\x19o;\u00EF3>\u008CO\u008E\u00CF\u0089/\u0085\u00EF\x04\u00DF\x00\u00DF\n?\x07\u00BF\x1E\x7F\x10\x7F\x11\x7F\x0B\u00FF\u00A4\x00* '\u00E0,\u0090!P'pO`MPH\u00D0J\u0090&xT\u00F0\u00A6\u00E0\u008A\x10\u0097\u0090\u00B1P\u00A4\u00D0!\u00A1\x1E\u00A1eavaC\u00E1\b\u00E1C\u00C2\u00BD\u00C2\u00AFE8ELD\u00A2E*En\u0089\u00AC\u008A\n\u0088n\x15M\x12=%:\"\u00FACLZ\u00CCM,G\u00ACI\u00EC\u00998\u0083\u00B8\u00B6x\u00A8\u00F8!\u00F1~\u00F1U\ta\t{\u0089\u009D\x12\u008D\x12\u0093\u0092dIm\u00C9p\u00C9#\u0092\u00B7%\u00BFJIKyH\u00ED\u0095j\u0097Z\u0092\u00E6\u0091\u00B6\u0096N\u0097n\u0094\u009E\u0096\u00A1\u00CA\x18\u00C9\u00C4\u00CB\u00D4\u00CA<\u0092%\u00C8j\u00CBF\u00C9\x1E\u0097\x1D\u0095C\u00E54\u00E4\u00C2\u00E5\u00AA\u00E5\u00EE\u00CB\u00A3\u00F2\u009A\u00F2\x11\u00F2\u00C7\u00E5\x1Fl\u00C1o\u00D1\u00D9\x12\u00BB\u00A5v\u00CBc\x05\u008A\u0082\u0089B\u00B2B\u00A3\u00C2\u00AC\"\u0097\u00A2\u009Db\u008Eb\u00BB\u00E2;%\t%o\u00A52\u00A5\u00DBJ\u00BF\u00945\u0094\u00A3\u0095O+O\u00A9\u00B0\u00A9\u00D8\u00A8\u00E4\u00A8t\u00A9|T\u0095S\rR\u00ADV}\u00A4FU\u00B3T\u00DB\u00AD\u00D6\u00A1\u00F6A]^=D\u00FD\u0084\u00FA\x13\rv\r{\u008D\u00BD\x1A\u00FD\x1A?5\u00B54\u00E9\u009A\u00974\u0097\u00B5$\u00B4\u00FC\u00B5\u008Ei=\u00D6\u00E6\u00D0v\u00D4\u00DE\u00A7}G\x07\u00AFc\u00AA\u00B3[\u00E7\u00BA\u00CE7]M\u00DDD\u00DD\x16\u00DD\u00F7z\nzQz\u00E7\u00F5\u0096\u00F4\u00A5\u00F5C\u00F4O\u00EB\u00CF\x1B\u0088\x19\x04\x18\u009C2\u00981\x141\u00F47<i8c$j\x14`Tk4g,n\x1Cl|\u00D6x\u00D1D\u00D6$\u00D2\u00E4\u0082\u00C9;SeS\u00BAi\u00AB\u00E9W3]\u00B3]f}\u00E68s+\u00F3\"\u00F3\x11\x0B6\x0B7\u008B*\u008B\u00E7\u0096b\u0096a\u0096\u008D\u0096\u00ABV\x1AV\x19V}[\u00F1[m\u00B7\u0096m}l-h\x1Dd\u00DD`\u00BDj\u00A3e\u00B3\u00CB\u00E6\u0096-\u00C5\u00D6\u00C5\u00B6\u00CAv\u00CEN\u00CE\u008En\u00D7e\u008F\u00DA\u00DB\u00D8\x1F\u00B4\u009F\u00DE&\u00B9-v[\u00BB\x038X;\x1Ctx\u00E6(\u00ED\x18\u00EFx\u00CD\u0089\u00E0\u00E4\u00E8T\u00ED\u00F4\u00CAY\u00C5y\u00A7\u00F3m\x17v\x17?\u0097\u00F3._\\M]K]\u00A7\u00DCd\u00DC\u0092\u00DC\u00FA\u00DD\u0099\u00DD\u00B7\u00BB7\u00B8\x7F\u00F50\u00F7(\u00F7\u0098\u00F1T\u00F2\u00DC\u00E59\u00EC\u00C5\u00E7\x15\u00E1\u00D5\u00E1M\u00F4v\u00F7>\u00EB\u00BD\u00E6c\u00E1s\u00D8ga\u00BB\u00C6\u00F6\u00FC\u00ED\x13;\u00A4w\u00A4\u00EE\x18\u00F2\u00E5\u00F3\u008D\u00F6\u00ED\u00F6c\u00F6\x0B\u00F0\u00BB\u00E2\u008F\u00F7\u00F7\u00F0?\u00EF\u00BF\x11\u00E0\x10P\x1B\u00B0\x16h\x1Dx,p5\u00C8,\u00E8H\u00D0\u009B`\u00E3\u00E0C\u00C1\u00CB!\x06!\u00E5!\u008B\u00A1\x06\u00A1\u00E5\u00A1Ka\x06a\x07\u00C3\u0096\u00C3\u008D\u00C2+\u00C2W\"\u00CC\"\u00AA\">Dn\u008D\u00AC\u0089\u00FC\x1A\u00E5\x10U\x1F\u00B5\x19\u00ED\x11\u00DD\x14C\u008A\u00F1\u008F\u00E9\u008Ce\u008B\u008D\u008A\u00BD\x15'\x14\u0097\x1A\u00F7\u0080&O\u00CB\u00A7\u00CD\u00C4\u00EB\u00C6\x1F\u008E_\u00A5\u00DB\u00D2\u00CF& \t;\x12:\x129\x12i\u0089\u00F7\u0092d\u0092\u00F2\u0092f\u0093\r\u0093\u00AB\u0093\u00D7S\u00DCS\u00AE\u00A4\u00B2\u00A6\u00C6\u00A6\u00DEK\u0093K+L[L\u00B7L?\u0093\u0081e\x04e\u00F4\u00EF\x14\u00DD\u0099\u00BDsv\u0097\u00C9\u00AES\u0099Hf`f\u00FFn\u00F1\u00DD\u00B9\u00BB\x17\u00B2\u00AC\u00B2\u00CEe3dGe\u00FF\u0095\u00A3\u009CS\u009E\u00F3y\u008F\u00C7\u009E\u00AE\\\u00C1\u00DC\u00AC\u00DC\u00F9<\u00AB\u00BC\u00C6|\u00A6|z\u00FE\u00E3\u00BDz{k\n\u00B0\u0082\u0088\u0082\u0091B\u00B5\u00C2\u00A3\u0085\u00BF\u008A\u0082\u008B\u00EE\x16+\x17W\x14o\u00EC\x0B\u00DAww\u00BF\u00CA\u00FE\u00CA\u00FD\u009B%\u00A1%#\u00A5\u009A\u00A5'\x0E\x10\x0E\u00C4\x1E\u0098(3*;W\u00CEZ\u009E^>\x7F\u00D0\u00FE`\u00DB!\u0091CE\u0087>\x1F\u00F6;<T\u00A1^Qs\u0084\u00E1H\u00D2\u0091\u0099J\u00BB\u00CA\u008E\u00A3\x12G\x0F\x1C\u00DD\u00A8\n\u00AF\x1A\u00AF6\u00ADn:&p\u00AC\u00F0\u00D8\u00D7\u00E3\u00C1\u00C7\u00C7N\x18\u009F\u00B8T#XS\\\u00F3\u00FDd\u00C4\u00C9'\u00A7\u00ACN\u00B5\u00D5J\u00D5V\u00D4\x11\u00EA\u0092\u00EB^\u009Dv?}\u00FB\u008C\u00F6\u0099\u0086\u00B3|g\u008B\u00CF\u00FE\u00AC\u008F\u00AD\u009F9\u00E7|\u00EEV\u0083VC\u00C3y\u0081\u00F3\u00A5\u008DhcR\u00E3\u00F2\u0085\u00ED\x17F/\u009A_\u00EC\u00B8\u00A4p\u00E9T\x13WSq34'5\u00BF\u00BE\u00EC\x7Fy\u00A2\u00C5\u00B6\u00A5\u00FF\u008A\u00F6\u0095KW%\u00AF\x1Ekeo-jC\u00DA\u00D2\u00DAV\u00DB\u00C3\u00DBg:\u00BC:\x1Et\u00DAt\u00F6w\u00E9u\u00B5^S\u00BCV\x7F]\u00F4zu7gwi\x0FCOn\u00CFfoz\u00EFZ\x1F\u00ADo\u00E5F\u00D8\u008D\u00F9~\u00BF\u00FE\u00A9\u009B\u009E7\x1F\u00DDr\u00BA52`;pg\u00D0r\u00F0\u00E6m\u0093\u00DB\u00BDw\f\u00EE\\\x1F\u00D2\x1D\u00EA\u00BC\u00AB}\u00B7}Xs\u00B8\u00ED\u009E\u00C6\u00BD\u00D6\u00BF4\u00FEj\x1D\u00D1\x1Ci\u00BB\u00AFu\u00BFcTg\u00B4\u00EB\u0081\u00FE\u0083\u009E1\u00A3\u00B1\x1B\x0F\u00CD\x1F\x0E>\u00B2~4<\u00BEm\u00FC\u00C1\u0084\u00DB\u00C4\u0093\u00C7\u00DB\x1F\u00CF<\t~\u00B2\u00F44\u00FA\u00E9\u0087\u00C9\u00E4\u00C9\x1FSY\u00D3\u00F8\u00E9\u00A2g,\u00CF*\u009E\x0B<\u00AF}!\u00FB\u00A2iFs\u00A6{\u00D6|\u00F6\u00DE\u009C\u00CB\u00DC\u00D4|\u00D0\u00FC\u009B\u0097\t/7\x16r_Q_U,\n/6,\u00A9.]_\u00B6\\\x1E}\u00ED\u00F3z\u00E1\r\u00ED\u00CD\u008F\u0095\u00FC\u00B7\u00ACo\u008F\u00BD\u0093yw\u00F5\u00BD\u00F1\u00FB{\u00AB\u009E\u00AB\x0B\x1F\u00E8\x1F6?\u00EE\u00FB\u00C4\u00FB\u00A9\u00FE\u00B3\u00FA\u00E7\u00FE5\u00C7\u00B5\u00E7_b\u00BE\u00FC\u00F8Z\u00B4\u00CE\u00BB~\u00EE\u009B\u00F6\u00B7\u00DB\u00DF=\u00BE/\u00FEH\u00D9 nT\u00FE\u0094\u00FD\u00D9\u00F5\u00CB\u00F6\u00D7\u00F4f\u00CC\u00E6&-\u0080\x1E\x00\x00\x008\x00@CC\x01>\u00D6\x03P\u00BD\x00\u00D8G\x01\x18\u0098~\u00DF)\u00FE\x00\u0087\x00\u00A0\x00@\x04!\u00B0\u0081b\u0098G\u00E4\u0090X\u00A4\x0F\u00E5E\x13\u00D1I\u009C5\u00EE&f\u0085=\u00C2\u00C7\x10X\t\u00FD\u00C4\u009D$C2\u0091\u00FC\u008C\u00A1\u0093\u00F1\x18\u00A5\u0094Z\u00CF4\u00CD\u00C2\u00C2j\u00CBV\u00C8>\u00C4\u00C9\u00CA\u00B5\u009D\u00FB\x02/\u00C6\x17\u00C0\u00DF-(\"\u00B4Ox]4XlRb\u009B\u00E4\u0090\u00B4\u0092L\u0089\u00EC\x1By\u00EB-5\n_\u0094\u00CC\u0094\u00F7\u00AB\u008C\u00AAQ\u00D5M5\x124\u008Fi\u00F5i\u00CF\u00E8\u00FC\u00D4\u00E3\u00D6\u00977\u00D01\u00B40r6\x0E2I0\u00CD5;b\u00DEh\u00D1k\u00F9\u00D0jy\u00EB\u00A6\r\u00A7\u00ED\x16;3{\u009Fm\x11\x0E\u00C9\u008EyN\u00E5\u00CE5.\u008D\u00AE\u00EDn\u00FD\u00EE\u00C3\x1Ec\u009EO\u00BD^x\u00CF\u00FB,m\x7F\u00BBc\u00C9w\u00DAo\u00C4\u00BF7\u00A0)\u00F0D\u00D0\u00FE\u00E0\u00F4\u0090\u00D0P\u00A70\u00BDp\u0089\b\u00A6\u0088/\u0091/\u00A2\x06\u00A3\x1Bb\u00F6\u00C7\u00D2\u00E2\\hZ\u00F1|\u00F1\x1B\u00F4\u00E7\t}\u0089uIy\u00C9\u00A1)\u00D6\u00A9\u00F2i\fi\u00AF\u00D3\u00EFe4\u00EF\u00AC\u00DC\u0095\u009B\u0099\u00B2;>\u008B\u009E\u009D\u009ES\u00B4\u00E7Tnw\u00DE\u008B\u00BD\u00E4\x02\u00FDBZQ]\u00F1\u00C4~\u0086\x12\u00FD\u00D2\u0098\x03'\u00CAF\u00CA\x7F\x1E\u00DAr\u00D8\u00A7\u00A2\u00E8H[\u00E5L\x15c\u00B5\u00C61\u00BF\u00E3\u0085'Zj\u00A6Na\u00B5\nu\u00EE\u00A7w\u009F9w\u00F6A\u00FDz\u0083\u00C8y\u00BB\u00C6\u009D\x17Z.~h\u00D2m.\u00BD\u00FC\u00FE\u008A\u00CF\u00D5\u00FBm\x0E\u00ED\u008F:\u00F5\u00BB\x12\u00AF5\\\u009F\u00EEa\u00ECU\u00EBs\u00BF\x11\u00DF\u009Fw\u00B3\u00ECV\u00C5@\u00C5`\u00D9\u00ED\u0082;{\u0086\u00F6\u00DE\u00DD?\u00BC\u00FF^\u00DE_\u0089#\x1E\u00F7\x15\u00EF\u00FF\x18\u00ED{\u00901\u00A69\u00F6\u00E5\u00E1\u00E3G\u009D\u00E3U\x13\u00BB\x1E\u00FB=1}*9I\u009E|;\u00F5`\u00BA\u00F5Y\u00D5\u00F3]/\u00FCg\u00CCge\u00E7X\u00E6\u00BE\u00CD\u00BFz9\u00B10\u00F4\u00EA\u00C6\u00E2\u00B5\u00A5\u00CE\u00E5\u00CE\u00D7g\u00DE\u0094\u00AC$\u00BF\u00F5}g\u00F1^~\u0095eu\u00ED\u00C3\u00E4\u00C7\u009EO\u00A7>\u00E7\u00AD\u0085\x7F\u00B1\u00FD\u00AA\u00B4\u00CE\u00BE\u00FE\u00F5\u00DB\u00F4\u00F7\u00BE\x1F\u00B5\x1B\u00B9?C~\u0099o\u008Amn\x02\x00\x01\u00F8\u00C0\x18Ra\x00aG\u00EC\u0090\x03\u00C8\x0BT\r-A?\u00E1\u00FCp\x13\u0098\x1B\u00F6\fO#0\x11\u00DA\u0089!$>\u00D2$\u00F9\x18C\x18\u00A3)\u00C5\u0080\u00EA\u00CA\x14\u00CE\u009C\u00C5r\u0092\u00F5\x06\u00DB2\x07'\u00A79W\x1Aw\x13\u00CF{>E~\u00BA\u00C0u!Faw\u0091\u00F3\u00A2\u009B\u00E2&\x12\u00D9\u0092\u00BDR\x1B2Z\u00B2\u0091r\u00C7\u00E5\u0087\u00B7|T\u00E4TRS\u00DE\u00AA\u00E2\u00A3\x1A\u00A6\x16\u00AF\u009E\u00A6\u00B1K3]+R\u00DBG\u00C7N\u00D7@OY_\u00CC\u0080\u00D3\u0090d\u00F8\u00DD\u00E8\u00AD\u00F1\u00AC\u00C9\u00B8\u00E9]\u00B3\x1E\u00F3+\x16\u00F5\u0096\u0095V\x05[S\u00AC\u00C3m\u00BCl\u00B7\u00DAi\u00DBKo\u00E3t\u00C0\x1C>;\u00CE9=p\u00EEsiv=\u00E1V\u00E0\u009E\u00E0\u00E1\u00EBi\u00ED\u00A5\u00E6-\u00E8C\u00F0y\u00B7}bG\u00B7o\u009D_\u0091\x7F\\\u0080k\u00A0z\x10%h.\u00B83\u00A4444L?\u009C5\u00FCU\u00C4\u00B5\u00C8\u00B2\u00A8\u0090h\u00DD\x18\u00E6\u0098\u00F9\u00D8\u00F6\u00B8\x02\u009AW\u00BC|\u00FC\x06}$\u00E1d\"=\u00C9,\u00993y1\u00A53u_\u009Ao\u00BAr\x06\u009A\u00F1xg\u00D3\u00AE\u00E2\u00CC\u0098\u00DDnY\u00E6\u00D9\u00BA9:{\fr\u00B7\u00E6y\u00E6\u00C7\u00EE\u00DD[p\u00A6\u00F0f\u00D1l\u00F1\u00AF\u00FD\x02%:\u00A5\u00EE\x07\x12\u00CA\x0E\u0094_88t\u00E8U\x05zD\u00A0R\u00F3\u00A8SULu\u00F1\u00B1\x0B\u00C7GO|9)v\u00CA\u00B1vO]\u00E7\u00E9\x0Fg\x15\u00EB\u00E3\u00CF]m\u00F8\u00DA\u00A8sa\u00E7\u00C5\u009E&h6\u00B9\u00BC\u00A7e\u00E0*\u00BE\u00D5\u00AA\u00AD\u00A0\u00FDv'\u00B1\u00CB\u00E2Z\u00CE\u00F5\u00EE\u00EE\u00CF\u00BDR}.72\u00FAO\u00DC\u00BCvk|`y\u00F0\u00EB\x1Dl\u0088\u00FD\u00AE\u00E8\u00B0\u00D2=\u0083\u00BF\u00ECF\u00BC\u00EF\u0087\u008F\u00A6<\u00C8\x1F;\u00FC\u00B0\u00F6Q\u00D3\u00F8\u00F5\u0089\u00A1\u00C7\x13O\x16\u009E~\u009E\u00C2Ms<\u0093|\u00AE\u00FD\u00C2n&l\u00B6nn\u00F9\u00A5\u00F4\u0082\u00F7\u00AB\u00FC\u00C5\u00F3K\u00B7\u0097g_\u00AF\u00AF0\u00BD\u0095|g\u00F4\u00DEg5\u00EB\u00C3\u00E8'\u00B5\u00CF\x07\u00D7>}u^\u00BF\u00FA\u009D\u00E7G\u00DE\u00C6\u00FA\u00AF\u0094\u00CDM\x00\u00C0\u0080\x15\u00E4`\x1BdA\x1FBDt\u0091D\u00A4\x1DEQ{\u00F4$\u00FA\x03\u00E7\u008B\u00BB\u008B\u00E9cmxm|?\u00C1\u00910O\u00CC \u00F1\u0093n\u0093\u00F73\x041\u00EAS\u00F8)\u00BF\u00A8sL\u00C3\u00CC\u00AD,gX+\u00D9J\u00D8\x0B8\u00F28\u00F3\u00B9\u008A\u00B9\x0F\u00F2\u00D4\u00F06\u00F2u\u00F0w\x0Bt\x0B\u00F6\b\u00F5\n\u00F7\u0088\\\x13m\x15k\x14?.Q,\u0099$\u00B5]\u00DAXFL\x16d\u00A7\u00E4\u00DA\u00E5\u008B\u00B7\u00B8+\u0088(\u00BCVlU\u00CAR\u00B6U\u00E1R\u0099UmTKR7\u00D2 k<\u00D4<\u00AE\x15\u00AE\u00AD\u00AE\u00BD\u00AE\u00D3\u00A3\u009B\u00A7g\u00AB\u00CF\u00A6?iPk\x18i\u00A4j\u00B4a<hRf\u00BA\u00C3L\u00CE\u00EC\u00AB\u00F9M\u008BRK\x1F+i\u00AB\u008F[{\u00AC\u008Bl\u00DCmEm\u00DF\u00D8\u00B5\u00D9gm\u00B3s\u00E0r\u0098ultJp\u00D6sA]\u00EE\u00BA\u0096\u00BBy\u00BB\u008B\u00B8/z\\\u00F2L\u00F2\u00D2\u00F3F\u00BD\u0087|J\u00B7\u00BB\u00EC\u00E0\u00DA\u00F1\u00D4\u00B7\u00DAo\u0087\u00BF\u00A0\u00FF\u00B3\u0080\u00E3\u0081;\u0082\x04\u0082&\u0083+C\u00DCC\u00D9C\u00EF\u0087\x15\u0087[D@\u00C4\u00B5\u00C8\u00E4(\u0095\u00A8\u0095\u00E8\u00FA\u0098\u00C0X\u0081\u00D8\u00C7q\x07i\u00DB\u00E2I\u00F17\u00E8\u00E9\tj\t+\u0089g\u0092|\u0093\u00B9\u0093\u00EF\u00A7\u00ECM5J]OkN\u008F\u00C8\x10\u00C9x\u00BA\u00F3\u00D0.\u00D7L\u00DE\u00CC\u0085\u00DD\x1DY\u0087\u00B2\u00D3rB\u00F7l\u00CF\u00F5\u00CA\u00F3\u00C9\x0F\u00D9\u009BT\u0090WXQt\u00B6\u00B8m\u00DF\u00E0\u00FE\u00F1\u0092\u0085\u00D2\u00CFe\u00B8r\u00F6\u0083b\u0087\u0094\x0F\u00EBV\u0098\x1D\u00B1\u00A9t:\u00EAU\x15X\x1Dwl\u00F7\u00F1\u0083'.\u00D4\f\u009F|_+Y\u0097vz\u00F4\u00ACt}\u00E6\u00B9\u0089\u00F3\n\u008D\u00B9\x17\u00A6.\u00A94\x154?o\u00D1\u00BCR|\u00F5E\u009BZ\u00FB\u00DE\u008E\u00E9.\u00B5kE\u00D7\u00E7z\u00F4{+\u00FB\u00BE\u00F4\u00BB\u00DEl\x1D\u0090\x1E<}Gah`8\u00EA/\u0089\u0091\u0095\u00D1\u00DBc\u0097\x1F5L4?\u00B91\u00F9\u00EC\x19\u00BCP\u009E\u00AD\x7F\u0099\u00BFX\u00F4\u00BA\u00FD\x1D\u00F3\u0087\u00825\u009E\u00F5\u00D6\r\u008F\u00CDM\u0080\u00DFoK\x00\x00\x04M\u00803\u00F3\x00\u00EE\u00A7\x00\u009C|\x00\u00EA\u00E5\x01$\u00AB\x01\u00988\x00\x1C\u00A9\x00\u00AE:\u0080\u009A\u0096\x02\u00F2\u00F4( V\u0097\u00FE9?\u00A8 \r\u0096\x10\n{\u00E1\x1C\f\u00C1\x1B\u0084\tQA\u00DC\u0090t\u00E48r\x1D\u0099B6PA\u00D4\b\rD\u00F3\u00D1\u00F3\u00E8}\u00F43\u008E\x1Fg\u0082\x0B\u00C7\x1D\u00C0u\u00E2\u00E60FL\x03\u00F3\u00C7\u00F6a\x1D\u00D8K<\x1B\u00DE\b\x1F\u008B?\u0085\x1F'0\x10L\b\u00A9\u0084\x16\u00C2\nQ\u0086\x18F\u00AC'.\u0093\x14II\u00A4^2#\u00D9\u009B|\u0081\x01a\u00F0dhadb\u008Ce\x1C\u00A3hSNRIT:\u00F59\u0093\rS'\u00B3\fs\x15\x0B\u0095%\u009B\u00E5+k\x1C\u00EB\x12[\x10\u00DB\x0B\u00F6@\u00F6E\u008E\x18\u008E/\u009C\u00D9\\L\\\u00C7\u00B9\u0095\u00B8o\u00F2\u00F8\u00F0\u00AC\u00F1\u0096\u00F1\u00A9\u00F0=\u00E4O\x11\x10\x14\x18\x15\u00DC+d*\f\u00C27D\u00F2D\u00ED\u00C5x\u00C5\u0096\u00C4\u00AFI\u0094IFJYJK\u00CAPd\u00D6d\u00E7\u00E4\u00C6\u00E4om\u00E9R\u00B8\u00A2\u00D8\u00AC\u00D4\u00A4\u00DC\u00A2\u00D2\u00A1\u00DA\u00A76\u00AC\u00FE\\\u00E3\u0083\x16\u00A6\u00CD\u00A9#\u00AE\u00AB\u00A0\u00A7\u00A2\u00AFl g(b\u00C4f\u008C\x1A\u00BF7\u00992\u00ED5\u00AB5/\u00B0\u0088\u00B3\u00F4\u00B42\u00DD\u00AAd-d\u00C3l\u008B\u00B3]\u00B7[\u00B5\x7F\u00BDm\u00C1a\u00CEq\u00D6\u00E9\u00A5\u00F3\x1B\u0097O\u00AE?\u00DD\u00C9\x1E\u00DC\u009E\u00D2^:\u00DE\u00F6>A\u00DB3v\x1C\u00F6m\u00F6\x1B\u00F1\x7F\x1B\u00C8\x14\u00A4\x16\u00EC\x15\u00B2;\u00B4.l |>\u00E2g\x14[\u00B4h\u008C\\\u00ACb\u009C\x02M6^\u008C\u00CE\u0095@N\u00F8\u009E\u00B8\u009C\u00CC\u0097b\u009F\u009A\u009B\u00D6\u009B\u00FEk\u00A7\u00C5\u00AE\u0083\u0099o\u00B2\u00EC\u00B3\u00AF\u00EDQ\u00CF\u00ED\u00CC\u00B7\u00DE;_\u00B8\u00B7Xt\u00DF\u00A5\x12\u00E3\u00D2\u0099\u00B2\u00B2\u0083\u009E\u0087\r\u008EX\x1FM\u00A9\x1E8\u00C1\x7F\u0092\u00A9\x16\u00AD\u00FBv\u00E6c\u00FD\u00BB\u0086\u0095\u00C6\u0095\u008B\u00EF\u009B\u00D6.\u00FF\u00BCJj\u00E3\u00EFP\u00EA2\u00BF\u00EE\u00D5\x13\u00D1\u0097\u00DC\u009Fy+kp\u00D7\u009D\u00E4\u00BB\u00D1\u00F7\u00FCG\u008AG;\u00C6^\u008F\u008B>\u00DE\u00F1\u00B4f\u00EA\u00D5s\u0095\u0099\u00EC\u00B9\u00F1\x05\u00F9\u00C5\u0082\u00E5\u00C5\x15\u00ABw\u00E7?\u00B0|\u00CAX{\u00BB\x1E\u00FA}\u00F1'ms\x13\x00\u0098A\x11\u009C \t\u00AA\u00A0\x17^\"\u008C\u0088*\u00E2\u0083\u00E4\"\r\u00C80\u00F2\x1E\u00E5@uQ\x7F\u00B4\x00mF\u009F\u00E2p8\x05\u009C\x17.\x0Fw\x19\u00F7\x02\u00A3b\u00FAX\x14V\u008D\u00FD\u0085\u00FD\u00C2\u00AB\u00E0\u0083\u00F1\u00C7\u00F0\u00E3\x04f\u0082\x1D\u00A1\u0090p\u0087\u00C8@\u00B4'\u0096\x13'I\u0092$:\u00A9\u009F\u00CCE\u008E&\x0F2\u00883\u00E40,0\u00DA0vQ\u00E4)5TN\u00EA>&\x02S\x0E30g\u00B3\u00E0X\nX\u0099X\u008F\u00B0\u0089\u00B15\u00B1\x1B\u00B3\u008Fs\u00C4p\x128k\u00B9L\u00B8\u00E6\u00B8\u00F3y\x14x&x\u00B3\u00F9\u0094\u00F9f\u00F8\x0F\nl\x15\u00C4\x04\u00FB\u0085\u00F6\b[\u008APD&Dk\u00C5\x12\u00C4-%\u0084$\u00D6%'\u00A4\u00DA\u00A5O\u00CA\x1C\u0091-\u0093+\u0091/\u00D9R\u00AEP\u00A5xV\u00A9U\u00F9\u008E\u00CAs\u00D5\u00AF\u00EA\u009C\x1A\u00BA\u009AAZ%\u00DA\u00DD:\u00EF\u00F5$\u00F5\u00FD\f\u00AA\r\u00A7\u008C\u0085L\u0082M\u009B\u00CC~XXX\x16[\r[\u00E3m\u00B4l\x03\u00ED\u00F2\u00ED\u00CFn\u00BB\u00E10\u00E9\u00B8\u00EA\u008C\u00B9p\u00B9\u00CA\u00B9\x19\u00BB{y$x\u0096z]\u00F2\x1E\u00F1\u00F9\u00B0\u0083\u00CB\u00D7\u00C0/\u00D4\u00BF,\u00A0'\u00F0]\u00B0x\u0088ghi\u00D8`\u00F8\u00CFH\u00F5\u00A8\u0088\u00E8\x131\x0F\u00E2P\u009Aj\u00BC?\u00BD$\u00E1Z\u00E2R2s\u008AV\u00AA\x7FZqzG\u00C6\u00E2.\u00EEL\u00EB\u00DD\u00BB\u00B2Z\u00B2_\u00EF\x11\u00CF\u00DD\u0091W\u0095\u00FF\u00A4\u0080\u00BB\u00D0\u00AB\u00E8D\u00F1\u00CB\u00FD\n%\u00A9\u00A5\u0083e<\u00E5q\x07\u00EF\x1DV\u00AE\u00A8\u00AEd:ZXM9v\u00F8\u0084t\u00CD\u00EDS\x11u\u0094\u00D3-g\u00BD\u00CFa\r\u00CD\u008D~\x17Y.\u00DDlNmQ\u00BA\u00B2\u00D4Z\u00DF\x1E\u00D1\u00A9\u00D0\u00F5\u00F1zWON\u009F]?\u00F7\u00CD\u00F9\u0081\u00E6\u00DB;\u0087l\u0086y\u00EF\u008D\u008E\u00B8\u00DD\u009F\x7F\u0090\u00FEP\u00E8\u00D1\u00C8D\u00F1\x13\u0097I\u00A9i\u00E4\u00D9\u00DC\u008B\u00C1\u00D9\u00C6\u00F9\u00D2\x05\u00FA\u00A2\u00CB2\u00FF\u00EB\u009A\x15\u00E9\u00B7\u0097\u00DF\x1B\u00AE\u008E|\u00F4\u00FB\u00F4~-\u00EB+\u00F3\u00FA\u00D1\u00EFB?j~\u00F2\u00FD*\u00DD\u00DC\x04\x00n0\x01\x1A\u00D4\u00C0}\u00D8DT\u0091P\u00E4(2\u0080|B\u00C5Pg4\x17mGWp\u00A28O\u00DC\x01\u00DC\x10\u0086\u00C3\f\u00B1t\u00AC\x1D[\u00C3k\u00E0\u0093\u00F1\u00DD\x04<\u00C1\u0081PMxM\u00D4#\x1E .\u0091\u00CCI\u00A7\u00C9$2\u008D<\u00CD`\u00C7\u00D0\u00C7\u00A8\u00C5\u00D8E1\u00A5\u00DC\u00A3zQ_3e2s27\u00B38\u00B0|`\u00AD`3d[f?\u00CE\u00E1\u00C2I\u00E5\u00BC\u00CBU\u00C8m\u00C7\u00C3\u00C63\u00C9{\u0086\u008F\u00CEo\"\u00C0.\u00F0FpP\u00E8\u00B4p\u00BEH\u0094\u00A8\u00AB\u0098\u0089\u00B8\u00AA\u0084\u00B4\u00A4\u00B0\x14\u00BF4\u009F\u008C\u0088\u00AC\u00BC\u009C\u008E\u00BC\u00ED\u0096\x00\u0085\u009D\u008AUJ\u00DD\u00CA/U\u0099\u00D4\u00F4\u00D5\u00E9\x1A\u00974\u00DFkk\u00E8d\u00EB\u008E\u00E9\u00CB\x18\u00E4\x1A\u00BE2\u00B63i7\u00937?m)jUg-k\u00D3jgn\u00FF\u00C4\u0081\u00E6Dqnv\u00F5q'{t{%\u00FB\u00A8o_\u00F7\u00ED\u00F3\u00DF\x1F\u00E8\x1B\u00AC\x19J\t{\x1AQ\x15e\x1D\u00BD\x1C\u009B\x16\u00B7\x11\u009FH_HtL\u00BA\u0092\u00C2\u009AJO{\u0094\u00A1\u00BB\u00F3T&\u00E3\u00EE\u00D4\u00AC\u00C5\x1C\u00CF=\u00F7\u00F2L\u00F3\u00BB\n\u00D4\x0B\u00DB\u008A\r\u00F6\r\u0095x\u0095\u00BE)\u00CB<\u00C8z\u00A8\u00B6B\u00E9H\u00E7Q\u00C3\u00AA\u00DEc\u00FA\u00C7\u00DBj\u00F0'\u00EDN\x1D\u00AE}qZ\u00EEL\u00CA\u00D9\u0081s\u009C\r\u00A1\u00E7\u00BB.0]\f\u00BEt\u00BD\u0099\u00F32\u00ADe\u00F8\u00AALkQ\u00DB\u00DB\x0E\u00A7\u00CE\u00F6kB\u00D7\u00F3\u00BB\u00DF\u00F5z\u00F4\u00DD\u00E8\u0097\u00BFy\u00F8\u00D6\u00E6`\u00E4\u00EDGC\u00C6w\x1B\u00EFq\u00FD\u00950rw\u0094\u00FFA\u00F8\u00D8\u0085\u0087\u00AF\u00C7\u00C5'<\x1E\u00E7<9\u00F7\u00F4\u00EE\u00E4\u00C2\u00D4\u00C63\u0096\u00E7\u00C2/\u00E4g4fu\u00E7\f\u00E7\u008D_\x1A/\x18\u00BE\u00D2]\u00D4ZRY\u0096{-\u00F6\u0086\u00E9\u00CD\u00F2J\u00E7\u00DB\u0094w\x1A\u00EFV\u00DE\u009FY\u00F5\u00FA\u00C0\u00F0\u00E1\u00FA\u00C7\u00D0O,\u009F:>o_\u0083\u00B5\u00DA/\u00A6_\u00E6\u00BE\u00EE^\x17X\u00EF\u00FC\u00E6\u00F6m\u00F5\u00FB\u00BE\x1F\u00D2?\u00FA7|7\u00D6\x7F\x1E\u00FC\u00A5\u00F4kh3xs\x13 !TM\x15\x00\x00\x10\u008A)\x00\u00FE\u00F9\u00E6\u00E6')\x00b9\u00C0\u00CF\u00B2\u00CD\u00CD\x1F\u00B5\u009B\u009B?\u00EB\x00p\u00D3\x00}\u00D1\u00BF\u00FF+\x00\x00\b,\x00\u00C7\u00EA\u00FE\u00B77\u00D2\u00FF\x00\x1E\u00E1~\u0097\u00DA\u00DF0\u00FA\x00\x00\x00 cHRM\x00\x00m\u0098\x00\x00s\u008E\x00\x00\u00FA\u00CC\x00\x00\u0084\u00FA\x00\x00y\u0081\x00\x00\u00FD\x13\x00\x000m\x00\x00\x12)\r\x1E&N\x00\x00\x01\u00DBIDATx\u00DA\u00B4U=\u00CA\u00EA@\x14=3\x1A\t\u0082\"\x11%\u008D\u0085\u0085b\u00E5\x02\\\u0086\u00A5`a\u00E5\x02\u00EC\u00ECm\u00DD\u0080K\x10l\u00B4p\x01\u0082\u00E0&\x04\u00F1\x07\x0BQD\u0094Lf2\u00AFxL\u00CC$yy)\u00BEo`\u008A\u00E4\u00CE=\u00F7\u00DC\u0093\u0093;\u00A4\u00D9lJ\u00FC\u00D2\u00CA\x02\u00C0h4\u0082\u0094?[c:\u009D\u00FE\x05\u00E7\u009C\u00E3r\u00B9\u00C4\x1E\"\u0084@J\tBHl\\\u00C5\u0082\u00E4l\u00DB\u00FE2\u00E7\u009C\u00C3\u00F3\u00BC\x1Fc-\u0084\u00F8\u0082{\u009E\x17\u0091e\u00B1X\u00A4\x02\u00EAv\u00BBZ\x17\n\u00CF\x07\x17B\u0080s\u00AE\u00B5\u00BEZ\u00ADR\u0081\u00CFf\u00B3d\u00E6\u009CsH)5\u00F6\u009F\u00CF\x07\u00FB\u00FD>\x11\u00B8^\u00AFkr*\u00FD9\u00E7_p)e\u00AC\u00E6\u008E\u00E3\u00FC\u0097y8/H\u00D2g\u00AEZQ\u00EB|>\u00C7:$\u00EC\u008C`\u009E\u008Ai\u00B2\b!\"\f\u0096\u00CB%\u00AE\u00D7+L\u00D3\u00F4\u00DF=\x1E\x0F\f\x06\x03\u00ADh\\\u00C7\u00AE\u00EB&\u00BB\u00A5\u00D3\u00E9`\u00B7\u00DB\u00A1\u00D1h\u00C0\u00B6m\u00E4\u00F3yL&\x13\u00DCn7T\u00AB\u00D5\u0088C\x12e\t3h\u00B5Z(\x14\n\u0098\u00CF\u00E7h\u00B7\u00DB\u00A8\u00D5j\x00\x00J)(\u00A5\x11\u00E6qRQ\x05\u00EE\u00BA\u00AE\u00B6\x01\u00C0\u00B2,\u00F4z=l\u00B7[\x1C\u008FG\x00\u00C0\u00EB\u00F5\u0082a\x180\f\x03\u00EF\u00F7\u00DB?\u00CF9\u00F77c\u00EC\x0B.\u0084\u00F0\u00DB\t\u00B6U,\x16\u0091\u00CB\u00E50\x1C\x0E\u00B1\u00D9l@\b\u00C1\u00E9t\u00C2\u00FD~\x07\u00A5\x14\u008C\u00B1H^\u00D0yY\x00`\u008C\u00F9\u00DE\f\x7F\u0098R\u00A9\x04\x00\u00E8\u00F7\u00FBX\u00AF\u00D7\u00B0,\x0B\u008E\u00E3\u00E0\u00F9|\u00C24M-O\u00F9\\1\u00CF*\u00900\u00F8x<\u008E\u00F5\u00F5\u00E1p\u00D0\u009E+\u0095J\u00B2[\u00E2\u00ACX.\u0097SMI\u00CF\u00F3\u00FE\u00E9\u00FD\u00C8O\x147B\u0093V\u00B8\u0098\u0094Rg\u00CE\x18C&\u0093I5\u00BF\u00D3\u00CCs\u00A59\u00F9\u00CDk\u00EE\u00CF\x00\u00BAdqD\u00EEe\u00C0\x04\x00\x00\x00\x00IEND\u00AEB`\u0082";
                this.w.res1.gr2.gr5.bt1.image = this.w.res1.gr1.gr1.gr1.del.image = this.w.res1.gr1.gr2.gr1.del.image = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x17\x00\x00\x00\x14\b\x06\x00\x00\x00f\u00BE\u00A6\x0E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x17OiCCPPhotoshop ICC profile\x00\x00x\u00DA\u00D5yiX\u008D]\u00D8\u00F6u\u00DF\u00FB\u00DES\u00ED\u00DD<\u00CF\u00F3\u00A8y\u009E\u00E7\u00D2\u00A4y\u00A6y\x1Ew\u00BB\u00B9H\u00A5\u00D2@)$\u0085($\u00A1D#\r\u00A2H\u009E$\n\x15\x1A\u00A4\"d\u0088\x10\u00BD?x\u009E\u00E7\x1D\u00BE\u00F7\u00C7w\x1C\u00DF\u009F\u00EF\u00FC\u00B1\u008E\u00F38\u00AFk\u009D\u00D7u\u00FDZ\u00C7Z\x0B\u0080w%\u0080F\u008BFY\x00bb\x13\u00E9\u00CEV\u00A6\"\u009E^\u00DE\"\u00C4) \u00820p\u0083\x06\u00C8\x05\x04%\u00D0L\x1C\x1D\u00ED\u00E0\x7F\u00C5\u0097\t@\x00\x00\x1E*\x04\u00D0h\u00D1\u00F0\x7F\x07\u00D6\u00E0\u0090\u0084 \x00\u00C4\x11\x00\x02\u0083\x13\u0082b\x00\u0090\u00AB\x00\u00A8i\x10\u008D\u009E\b\u0080[\x07\u0080\u00D1\u0094DZ\"\x00v\x07\x008\u00E8\u009E^\u00DE\x00\u00D84\x00p\u0084\u00FD\u00E6\u00AB\x00\u00C0\x11\u00E8\u00E9\u00E5\r\u0080\u00C7\x00\u0080\u0083\u00EE\u00EAl\x06\u0080\u00E7\x01 Q\x02\x02\u00E8a\x00T\t\x00\x10I\x0E\nK\x04\u00A0\u009A\x03\x10\u00D8b\u0083#b\x01\u00D8=\x01\b\u0086A\u00E1\x01\u00C1\x00\u00BC\u0095\x00\u00B0%&&.\x18\u0080\u00F7\x16\x00\u00C8\x04\u00FE'\u009F\u00B0\u00FF\u00E2\x19\u00F8\u008Fg@@\u00D8?\u00FC\u00F7,\x00\x00@2\u008FH\u00A0E\x07\u00A4\u00C1\u00FFk\u00C4D'\u00FD]\u0083\r\x00(\u00B1\u00D1\u00DB\u00EC\x00\u0080\x0B\x00\u0096\u0082\x03\u00CCm\x01@\x00\x00~\u00D1\u00A2\x1D\u00ED~\u00E7 |!\u00B1n.\x7F\u00F8\u0096\u00D8\u00C0m\x0E\x7F\u00B8a(\u00DD\u00D2\u00F9\u00F7^\u00C4\u0091\u0096h\u00EA\f\x00<\x00H(-\u00D1\u00D1\u00F5\u008F\u009E\u0099\x1En\u00B6\r\x00(\x00\u00C8\u00A1\u0090\x04\u008B\u00BF}NF\x06\u00D88\x02\x00\x13\x00\u00D2BOrv\x03\x00\t\x00\u00A4/!\u00D9\u00C5\x02\x00X\x00\u0090\u0097\u00E9\u00E1\u00AE\x1E\x7Fr>\x07\u0087\u0098\u00FF\u00D1Q44\u00C2\u00D2\u00FA\x0Fg\u008BH\u00B4v\x05\x00\x0E\x00T,*\u00CE\u00D6\u00F9w-T\x13l!\x1AB \t\u00E8\x10\x02\u00B1\u00A0\x00v`\x06\u00E6\x7FV\x05\b\u0085\x00\u00A0C2\u0084@\x02D\u00C1+\u00A0C\f\u00D8B\x1CDC\x1C\u00D0A\u00E4O\u009E\u00D9\u00FFP,!\x00\u00E8\x10\x06!\u00FF\u00CDQ\x04\u0082 \x0E\u0092\u00FE\u00A9\u00F9\u00B7\u00FA\u00AFC\x04\x04C\u00DC?z\u00C0\u009F\x18\x1DB \u00C1/\"\u00E7\u00DF\n\u00FF\u00D9/\x1A\u00E2\u0080\u00AE\u00DC\u00A8\u00BC\u00AC\u00BC\u00F1w\x1C\u0093\u00C2T1\r\u00CC\x143\u00C0\f1\x1D\x10\u00C1\u00B80>P\u00C0\u00D41m\u00CC\x043\u00C2\u00F40\rL\x07,\u00E1%\u00D0!\u00EC\u00EF\x1E\u00FD\"r\u00E81-\u00A1\u00C9\u0095qi\u00BA\u00EE\u00E1\x7Ff\b\u00FCg\x02wx\tt\u0088\u00F8?N\u00F4\u00A7\u00F7\u0091\u0095\u00F6\u0095\x7F:\u0084\u00C4\u0090\u00D4D\x00\x00\u00B38Z\x1A=\",<Q\u00C4\u0084F\u008B\x0E\u00D9\"b\x1D\x1B\u00A4\u00B8EDUYE\x05\u00FE\x7F\u0082\u00A7\u0097\u00B7\u00C8o\u00F6\u00C9\x19\x10\x00@\u00B8\u00EE\u00FF\u00AB\u00C5\u00A9\x00\u00E8\x04\x01 {\u00FE\u00D5\u00FC\u00DF\x01\u00B4G\x02\u0090\u00D8\u00FE\u00D5\u00A4\u00DA\x01\u0098U\x01\u0086\u008E\x04%\u00D1\u0093\x7Fk\x18\x00\x00\x1E\x18\u0080\x198\u0080\x17\u0084@\x1Cd@\x01TA\x13\u00F4\u00C0\x18,\u00C0\x06\x1C\u00C0\x15\u00BC\u00C0\x17\u0082 \x1Cb\u0080\x0E)\u00B0\x13\u00B2!\x1F\u008A\u00E1\x00\x1C\u0086*\u00A8\u0081:8\x07\x17\u00A1\x05\u00DA\u00E1:\u00DC\u0080A\x18\u0086Q\x18\u0087)\u0098\u0081\x05x\x03\u00AB\u00F0\x05~ \bBD\u00A8\b;\u00C2\u008B\b#\u0092\u0088<\u00A2\u008Ah#\u0086\u0088\x05b\u00878#^\u0088?\x12\u0086\u00C4\"I\u00C8Nd\x0FR\u008C\u0094#U\u00C8)\u00A4\x01\u00B9\u008Ct\"7\u0090!\u00E4\x01\u00F2\x14\u0099E\u0096\u0091\u008F\u00C8w\x14\u0087RP\x0ET\x10\u0095B\u0095Pm\u00D4\x04\u00B5E]\u00D1\x1Dh\x18\x1A\u008F\u00A6\u00A3\u00B9h\tZ\u0089\u00D6\u00A2\x17\u00D06\u00F4\x06:\u008C\u008E\u00A33\u00E8\x1Bt\r\x078F\x1C\x17N\x14\u00A7\u0080\u00D3\u00C6\u0099\u00E1\x1Cp\u00DE\u00B8P\x1C\x1D\u0097\u0089+\u00C2U\u00E0jq\u0097p]\u00B8\u00DB\u00B8\u0087\u00B8\x19\u00DC\n\u00EE\x1BF\u00C0\u00D81\x11L\x01\u00D3\u00C3\u00B6bnX\x10\x16\u008Feb\u00FB\u00B0*\u00EC\x1C\u00D6\u0086\u00DD\u00C2\x1Eb\u00B3\u00D8*\u00F6\x0BO\u00C5\x0B\u00E0\u00E5\u00F1\u00BAxk\u00BC'>\f\u009F\u0082\u00CF\u00C7W\u00E0\u00CF\u00E2[\u00F1\x03\u00F8q\u00FC\x02\u00FE\x0B\u0081@\u00E0\"H\x13\u00B4\b[\t^\u0084HB\x06a\x1F\u00E18\u00A1\u0089\u00D0Gx@\u0098'\u00AC\x11\u0089D^\u00A2<\u00D1\u0080\u00E8@\f &\x12\u00F3\u0089G\u0089\x17\u0088\u00BD\u00C41\u00E2\x02q\u009D\u00C4H\x12&\u00A9\u0092,I\u00DE\u00A4XR\x0E\u00A9\u0082t\u009E\u00D4C\x1A#-\u0092~\u0090Y\u00C8\u0092d]\u00B2\x039\u0098\u009CF.%\u009F&w\u0091\u00EF\u0093\x17\u00C8?\x18X\x19\u00A4\x19\f\x18\\\x19\"\x19\u00B2\x19*\x19.1\f0L3|bdd\x14c\u00D4atb\u008C`\u00CCb\u00ACdlf\u00BC\u00C38\u00CB\u00F8\u008D\u00C2F\u0091\u00A3\u0098Q\u00B6S\u0092(%\u0094zJ\x1F\u00E5)\u00E5\x13\u0095J\u0095\u00A2\x1AS\u00BD\u00A9\u0089\u00D4\x12j\x03\u00F5&\u00F59u\u009D\u0089\u009DI\u0091\u00C9\u009A)\u0098i7S5S\x1B\u00D3\x18\u00D3;f2\u00B3$\u00B3\t\u00B3/s:s\x05\u00F3\x15\u00E6\u00FB\u00CC+,d\x16)\x163\u0096\x00\u0096L\u0096j\u0096N\u0096\u00C7,k\u00AC\u00EC\u00AC*\u00AC\x0E\u00AC1\u00AC\u00FBX\u00CF\u00B3\x0E\u00B1.\u00B1\x11\u00D9\u00A4\u00D8,\u00D8\u0082\u00D9r\u00D9\u00EA\u00D8n\u00B2\u00CD\u00B3\u00E3\u00D8\u00C5\u00D9\u00CD\u00D8\u0083\u00D8\u00F7\u00B0\u009Ff\x1F`_\u00E0 pHsXsDr\x14s\\\u00E4\x18\u00E1X\u00E5d\u00E3T\u00E7t\u00E7L\u00E5\u00AC\u00E6\u00EC\u00E6\u009C\u00E1\u00C2qIqYsEs\u0095r\u00B5pMp}\u00E7\x16\u00E46\u00E1\x0E\u00E1.\u00E4\u00BE\u00C4=\u00C6\u00FD\u0095\u0087\u009F\u00C7\u0098'\u0084\u00A7\u0088\u00A7\u0089g\u009C\u00E7;\u00AF\b\u00AF\x05o\x14o\x19o;\u00EF3>\u008CO\u008E\u00CF\u0089/\u0085\u00EF\x04\u00DF\x00\u00DF\n?\x07\u00BF\x1E\x7F\x10\x7F\x11\x7F\x0B\u00FF\u00A4\x00* '\u00E0,\u0090!P'pO`MPH\u00D0J\u0090&xT\u00F0\u00A6\u00E0\u008A\x10\u0097\u0090\u00B1P\u00A4\u00D0!\u00A1\x1E\u00A1eavaC\u00E1\b\u00E1C\u00C2\u00BD\u00C2\u00AFE8ELD\u00A2E*En\u0089\u00AC\u008A\n\u0088n\x15M\x12=%:\"\u00FACLZ\u00CCM,G\u00ACI\u00EC\u00998\u0083\u00B8\u00B6x\u00A8\u00F8!\u00F1~\u00F1U\ta\t{\u0089\u009D\x12\u008D\x12\u0093\u0092dIm\u00C9p\u00C9#\u0092\u00B7%\u00BFJIKyH\u00ED\u0095j\u0097Z\u0092\u00E6\u0091\u00B6\u0096N\u0097n\u0094\u009E\u0096\u00A1\u00CA\x18\u00C9\u00C4\u00CB\u00D4\u00CA<\u0092%\u00C8j\u00CBF\u00C9\x1E\u0097\x1D\u0095C\u00E54\u00E4\u00C2\u00E5\u00AA\u00E5\u00EE\u00CB\u00A3\u00F2\u009A\u00F2\x11\u00F2\u00C7\u00E5\x1Fl\u00C1o\u00D1\u00D9\x12\u00BB\u00A5v\u00CBc\x05\u008A\u0082\u0089B\u00B2B\u00A3\u00C2\u00AC\"\u0097\u00A2\u009Db\u008Eb\u00BB\u00E2;%\t%o\u00A52\u00A5\u00DBJ\u00BF\u00945\u0094\u00A3\u0095O+O\u00A9\u00B0\u00A9\u00D8\u00A8\u00E4\u00A8t\u00A9|T\u0095S\rR\u00ADV}\u00A4FU\u00B3T\u00DB\u00AD\u00D6\u00A1\u00F6A]^=D\u00FD\u0084\u00FA\x13\rv\r{\u008D\u00BD\x1A\u00FD\x1A?5\u00B54\u00E9\u009A\u00974\u0097\u00B5$\u00B4\u00FC\u00B5\u008Ei=\u00D6\u00E6\u00D0v\u00D4\u00DE\u00A7}G\x07\u00AFc\u00AA\u00B3[\u00E7\u00BA\u00CE7]M\u00DDD\u00DD\x16\u00DD\u00F7z\nzQz\u00E7\u00F5\u0096\u00F4\u00A5\u00F5C\u00F4O\u00EB\u00CF\x1B\u0088\x19\x04\x18\u009C2\u00981\x141\u00F47<i8c$j\x14`Tk4g,n\x1Cl|\u00D6x\u00D1D\u00D6$\u00D2\u00E4\u0082\u00C9;SeS\u00BAi\u00AB\u00E9W3]\u00B3]f}\u00E68s+\u00F3\"\u00F3\x11\x0B6\x0B7\u008B*\u008B\u00E7\u0096b\u0096a\u0096\u008D\u0096\u00ABV\x1AV\x19V}[\u00F1[m\u00B7\u0096m}l-h\x1Dd\u00DD`\u00BDj\u00A3e\u00B3\u00CB\u00E6\u0096-\u00C5\u00D6\u00C5\u00B6\u00CAv\u00CEN\u00CE\u008En\u00D7e\u008F\u00DA\u00DB\u00D8\x1F\u00B4\u009F\u00DE&\u00B9-v[\u00BB\x038X;\x1Ctx\u00E6(\u00ED\x18\u00EFx\u00CD\u0089\u00E0\u00E4\u00E8T\u00ED\u00F4\u00CAY\u00C5y\u00A7\u00F3m\x17v\x17?\u0097\u00F3._\\M]K]\u00A7\u00DCd\u00DC\u0092\u00DC\u00FA\u00DD\u0099\u00DD\u00B7\u00BB7\u00B8\x7F\u00F50\u00F7(\u00F7\u0098\u00F1T\u00F2\u00DC\u00E59\u00EC\u00C5\u00E7\x15\u00E1\u00D5\u00E1M\u00F4v\u00F7>\u00EB\u00BD\u00E6c\u00E1s\u00D8ga\u00BB\u00C6\u00F6\u00FC\u00ED\x13;\u00A4w\u00A4\u00EE\x18\u00F2\u00E5\u00F3\u008D\u00F6\u00ED\u00F6c\u00F6\x0B\u00F0\u00BB\u00E2\u008F\u00F7\u00F7\u00F0?\u00EF\u00BF\x11\u00E0\x10P\x1B\u00B0\x16h\x1Dx,p5\u00C8,\u00E8H\u00D0\u009B`\u00E3\u00E0C\u00C1\u00CB!\x06!\u00E5!\u008B\u00A1\x06\u00A1\u00E5\u00A1Ka\x06a\x07\u00C3\u0096\u00C3\u008D\u00C2+\u00C2W\"\u00CC\"\u00AA\">Dn\u008D\u00AC\u0089\u00FC\x1A\u00E5\x10U\x1F\u00B5\x19\u00ED\x11\u00DD\x14C\u008A\u00F1\u008F\u00E9\u008Ce\u008B\u008D\u008A\u00BD\x15'\x14\u0097\x1A\u00F7\u0080&O\u00CB\u00A7\u00CD\u00C4\u00EB\u00C6\x1F\u008E_\u00A5\u00DB\u00D2\u00CF& \t;\x12:\x129\x12i\u0089\u00F7\u0092d\u0092\u00F2\u0092f\u0093\r\u0093\u00AB\u0093\u00D7S\u00DCS\u00AE\u00A4\u00B2\u00A6\u00C6\u00A6\u00DEK\u0093K+L[L\u00B7L?\u0093\u0081e\x04e\u00F4\u00EF\x14\u00DD\u0099\u00BDsv\u0097\u00C9\u00AES\u0099Hf`f\u00FFn\u00F1\u00DD\u00B9\u00BB\x17\u00B2\u00AC\u00B2\u00CEe3dGe\u00FF\u0095\u00A3\u009CS\u009E\u00F3y\u008F\u00C7\u009E\u00AE\\\u00C1\u00DC\u00AC\u00DC\u00F9<\u00AB\u00BC\u00C6|\u00A6|z\u00FE\u00E3\u00BDz{k\n\u00B0\u0082\u0088\u0082\u0091B\u00B5\u00C2\u00A3\u0085\u00BF\u008A\u0082\u008B\u00EE\x16+\x17W\x14o\u00EC\x0B\u00DAww\u00BF\u00CA\u00FE\u00CA\u00FD\u009B%\u00A1%#\u00A5\u009A\u00A5'\x0E\x10\x0E\u00C4\x1E\u0098(3*;W\u00CEZ\u009E^>\x7F\u00D0\u00FE`\u00DB!\u0091CE\u0087>\x1F\u00F6;<T\u00A1^Qs\u0084\u00E1H\u00D2\u0091\u0099J\u00BB\u00CA\u008E\u00A3\x12G\x0F\x1C\u00DD\u00A8\n\u00AF\x1A\u00AF6\u00ADn:&p\u00AC\u00F0\u00D8\u00D7\u00E3\u00C1\u00C7\u00C7N\x18\u009F\u00B8T#XS\\\u00F3\u00FDd\u00C4\u00C9'\u00A7\u00ACN\u00B5\u00D5J\u00D5V\u00D4\x11\u00EA\u0092\u00EB^\u009Dv?}\u00FB\u008C\u00F6\u0099\u0086\u00B3|g\u008B\u00CF\u00FE\u00AC\u008F\u00AD\u009F9\u00E7|\u00EEV\u0083VC\u00C3y\u0081\u00F3\u00A5\u008DhcR\u00E3\u00F2\u0085\u00ED\x17F/\u009A_\u00EC\u00B8\u00A4p\u00E9T\x13WSq34'5\u00BF\u00BE\u00EC\x7Fy\u00A2\u00C5\u00B6\u00A5\u00FF\u008A\u00F6\u0095KW%\u00AF\x1Ekeo-jC\u00DA\u00D2\u00DAV\u00DB\u00C3\u00DBg:\u00BC:\x1Et\u00DAt\u00F6w\u00E9u\u00B5^S\u00BCV\x7F]\u00F4zu7gwi\x0FCOn\u00CFfoz\u00EFZ\x1F\u00ADo\u00E5F\u00D8\u008D\u00F9~\u00BF\u00FE\u00A9\u009B\u009E7\x1F\u00DDr\u00BA52`;pg\u00D0r\u00F0\u00E6m\u0093\u00DB\u00BDw\f\u00EE\\\x1F\u00D2\x1D\u00EA\u00BC\u00AB}\u00B7}Xs\u00B8\u00ED\u009E\u00C6\u00BD\u00D6\u00BF4\u00FEj\x1D\u00D1\x1Ci\u00BB\u00AFu\u00BFcTg\u00B4\u00EB\u0081\u00FE\u0083\u009E1\u00A3\u00B1\x1B\x0F\u00CD\x1F\x0E>\u00B2~4<\u00BEm\u00FC\u00C1\u0084\u00DB\u00C4\u0093\u00C7\u00DB\x1F\u00CF<\t~\u00B2\u00F44\u00FA\u00E9\u0087\u00C9\u00E4\u00C9\x1FSY\u00D3\u00F8\u00E9\u00A2g,\u00CF*\u009E\x0B<\u00AF}!\u00FB\u00A2iFs\u00A6{\u00D6|\u00F6\u00DE\u009C\u00CB\u00DC\u00D4|\u00D0\u00FC\u009B\u0097\t/7\x16r_Q_U,\n/6,\u00A9.]_\u00B6\\\x1E}\u00ED\u00F3z\u00E1\r\u00ED\u00CD\u008F\u0095\u00FC\u00B7\u00ACo\u008F\u00BD\u0093yw\u00F5\u00BD\u00F1\u00FB{\u00AB\u009E\u00AB\x0B\x1F\u00E8\x1F6?\u00EE\u00FB\u00C4\u00FB\u00A9\u00FE\u00B3\u00FA\u00E7\u00FE5\u00C7\u00B5\u00E7_b\u00BE\u00FC\u00F8Z\u00B4\u00CE\u00BB~\u00EE\u009B\u00F6\u00B7\u00DB\u00DF=\u00BE/\u00FEH\u00D9 nT\u00FE\u0094\u00FD\u00D9\u00F5\u00CB\u00F6\u00D7\u00F4f\u00CC\u00E6&-\u0080\x1E\x00\x00\x008\x00@CC\x01>\u00D6\x03P\u00BD\x00\u00D8G\x01\x18\u0098~\u00DF)\u00FE\x00\u0087\x00\u00A0\x00@\x04!\u00B0\u0081b\u0098G\u00E4\u0090X\u00A4\x0F\u00E5E\x13\u00D1I\u009C5\u00EE&f\u0085=\u00C2\u00C7\x10X\t\u00FD\u00C4\u009D$C2\u0091\u00FC\u008C\u00A1\u0093\u00F1\x18\u00A5\u0094Z\u00CF4\u00CD\u00C2\u00C2j\u00CBV\u00C8>\u00C4\u00C9\u00CA\u00B5\u009D\u00FB\x02/\u00C6\x17\u00C0\u00DF-(\"\u00B4Ox]4XlRb\u009B\u00E4\u0090\u00B4\u0092L\u0089\u00EC\x1By\u00EB-5\n_\u0094\u00CC\u0094\u00F7\u00AB\u008C\u00AAQ\u00D5M5\x124\u008Fi\u00F5i\u00CF\u00E8\u00FC\u00D4\u00E3\u00D6\u00977\u00D01\u00B40r6\x0E2I0\u00CD5;b\u00DEh\u00D1k\u00F9\u00D0jy\u00EB\u00A6\r\u00A7\u00ED\x16;3{\u009Fm\x11\x0E\u00C9\u008EyN\u00E5\u00CE5.\u008D\u00AE\u00EDn\u00FD\u00EE\u00C3\x1Ec\u009EO\u00BD^x\u00CF\u00FB,m\x7F\u00BBc\u00C9w\u00DAo\u00C4\u00BF7\u00A0)\u00F0D\u00D0\u00FE\u00E0\u00F4\u0090\u00D0P\u00A70\u00BDp\u0089\b\u00A6\u0088/\u0091/\u00A2\x06\u00A3\x1Bb\u00F6\u00C7\u00D2\u00E2\\hZ\u00F1|\u00F1\x1B\u00F4\u00E7\t}\u0089uIy\u00C9\u00A1)\u00D6\u00A9\u00F2i\fi\u00AF\u00D3\u00EFe4\u00EF\u00AC\u00DC\u0095\u009B\u0099\u00B2;>\u008B\u009E\u009D\u009ES\u00B4\u00E7Tnw\u00DE\u008B\u00BD\u00E4\x02\u00FDBZQ]\u00F1\u00C4~\u0086\x12\u00FD\u00D2\u0098\x03'\u00CAF\u00CA\x7F\x1E\u00DAr\u00D8\u00A7\u00A2\u00E8H[\u00E5L\x15c\u00B5\u00C61\u00BF\u00E3\u0085'Zj\u00A6Na\u00B5\nu\u00EE\u00A7w\u009F9w\u00F6A\u00FDz\u0083\u00C8y\u00BB\u00C6\u009D\x17Z.~h\u00D2m.\u00BD\u00FC\u00FE\u008A\u00CF\u00D5\u00FBm\x0E\u00ED\u008F:\u00F5\u00BB\x12\u00AF5\\\u009F\u00EEa\u00ECU\u00EBs\u00BF\x11\u00DF\u009Fw\u00B3\u00ECV\u00C5@\u00C5`\u00D9\u00ED\u0082;{\u0086\u00F6\u00DE\u00DD?\u00BC\u00FF^\u00DE_\u0089#\x1E\u00F7\x15\u00EF\u00FF\x18\u00ED{\u00901\u00A69\u00F6\u00E5\u00E1\u00E3G\u009D\u00E3U\x13\u00BB\x1E\u00FB=1}*9I\u009E|;\u00F5`\u00BA\u00F5Y\u00D5\u00F3]/\u00FCg\u00CCge\u00E7X\u00E6\u00BE\u00CD\u00BFz9\u00B10\u00F4\u00EA\u00C6\u00E2\u00B5\u00A5\u00CE\u00E5\u00CE\u00D7g\u00DE\u0094\u00AC$\u00BF\u00F5}g\u00F1^~\u0095eu\u00ED\u00C3\u00E4\u00C7\u009EO\u00A7>\u00E7\u00AD\u0085\x7F\u00B1\u00FD\u00AA\u00B4\u00CE\u00BE\u00FE\u00F5\u00DB\u00F4\u00F7\u00BE\x1F\u00B5\x1B\u00B9?C~\u0099o\u008Amn\x02\x00\x01\u00F8\u00C0\x18Ra\x00aG\u00EC\u0090\x03\u00C8\x0BT\r-A?\u00E1\u00FCp\x13\u0098\x1B\u00F6\fO#0\x11\u00DA\u0089!$>\u00D2$\u00F9\x18C\x18\u00A3)\u00C5\u0080\u00EA\u00CA\x14\u00CE\u009C\u00C5r\u0092\u00F5\x06\u00DB2\x07'\u00A79W\x1Aw\x13\u00CF{>E~\u00BA\u00C0u!Faw\u0091\u00F3\u00A2\u009B\u00E2&\x12\u00D9\u0092\u00BDR\x1B2Z\u00B2\u0091r\u00C7\u00E5\u0087\u00B7|T\u00E4TRS\u00DE\u00AA\u00E2\u00A3\x1A\u00A6\x16\u00AF\u009E\u00A6\u00B1K3]+R\u00DBG\u00C7N\u00D7@OY_\u00CC\u0080\u00D3\u0090d\u00F8\u00DD\u00E8\u00AD\u00F1\u00AC\u00C9\u00B8\u00E9]\u00B3\x1E\u00F3+\x16\u00F5\u0096\u0095V\x05[S\u00AC\u00C3m\u00BCl\u00B7\u00DAi\u00DBKo\u00E3t\u00C0\x1C>;\u00CE9=p\u00EEsiv=\u00E1V\u00E0\u009E\u00E0\u00E1\u00EBi\u00ED\u00A5\u00E6-\u00E8C\u00F0y\u00B7}bG\u00B7o\u009D_\u0091\x7F\\\u0080k\u00A0z\x10%h.\u00B83\u00A4444L?\u009C5\u00FCU\u00C4\u00B5\u00C8\u00B2\u00A8\u0090h\u00DD\x18\u00E6\u0098\u00F9\u00D8\u00F6\u00B8\x02\u009AW\u00BC|\u00FC\x06}$\u00E1d\"=\u00C9,\u00993y1\u00A53u_\u009Ao\u00BAr\x06\u009A\u00F1xg\u00D3\u00AE\u00E2\u00CC\u0098\u00DDnY\u00E6\u00D9\u00BA9:{\fr\u00B7\u00E6y\u00E6\u00C7\u00EE\u00DD[p\u00A6\u00F0f\u00D1l\u00F1\u00AF\u00FD\x02%:\u00A5\u00EE\x07\x12\u00CA\x0E\u0094_88t\u00E8U\x05zD\u00A0R\u00F3\u00A8SULu\u00F1\u00B1\x0B\u00C7GO|9)v\u00CA\u00B1vO]\u00E7\u00E9\x0Fg\x15\u00EB\u00E3\u00CF]m\u00F8\u00DA\u00A8sa\u00E7\u00C5\u009E&h6\u00B9\u00BC\u00A7e\u00E0*\u00BE\u00D5\u00AA\u00AD\u00A0\u00FDv'\u00B1\u00CB\u00E2Z\u00CE\u00F5\u00EE\u00EE\u00CF\u00BDR}.72\u00FAO\u00DC\u00BCvk|`y\u00F0\u00EB\x1Dl\u0088\u00FD\u00AE\u00E8\u00B0\u00D2=\u0083\u00BF\u00ECF\u00BC\u00EF\u0087\u008F\u00A6<\u00C8\x1F;\u00FC\u00B0\u00F6Q\u00D3\u00F8\u00F5\u0089\u00A1\u00C7\x13O\x16\u009E~\u009E\u00C2Ms<\u0093|\u00AE\u00FD\u00C2n&l\u00B6nn\u00F9\u00A5\u00F4\u0082\u00F7\u00AB\u00FC\u00C5\u00F3K\u00B7\u0097g_\u00AF\u00AF0\u00BD\u0095|g\u00F4\u00DEg5\u00EB\u00C3\u00E8'\u00B5\u00CF\x07\u00D7>}u^\u00BF\u00FA\u009D\u00E7G\u00DE\u00C6\u00FA\u00AF\u0094\u00CDM\x00\u00C0\u0080\x15\u00E4`\x1BdA\x1FBDt\u0091D\u00A4\x1DEQ{\u00F4$\u00FA\x03\u00E7\u008B\u00BB\u008B\u00E9cmxm|?\u00C1\u00910O\u00CC \u00F1\u0093n\u0093\u00F73\x041\u00EAS\u00F8)\u00BF\u00A8sL\u00C3\u00CC\u00AD,gX+\u00D9J\u00D8\x0B8\u00F28\u00F3\u00B9\u008A\u00B9\x0F\u00F2\u00D4\u00F06\u00F2u\u00F0w\x0Bt\x0B\u00F6\b\u00F5\n\u00F7\u0088\\\x13m\x15k\x14?.Q,\u0099$\u00B5]\u00DAXFL\x16d\u00A7\u00E4\u00DA\u00E5\u008B\u00B7\u00B8+\u0088(\u00BCVlU\u00CAR\u00B6U\u00E1R\u0099UmTKR7\u00D2 k<\u00D4<\u00AE\x15\u00AE\u00AD\u00AE\u00BD\u00AE\u00D3\u00A3\u009B\u00A7g\u00AB\u00CF\u00A6?iPk\x18i\u00A4j\u00B4a<hRf\u00BA\u00C3L\u00CE\u00EC\u00AB\u00F9M\u008BRK\x1F+i\u00AB\u008F[{\u00AC\u008Bl\u00DCmEm\u00DF\u00D8\u00B5\u00D9gm\u00B3s\u00E0r\u0098ultJp\u00D6sA]\u00EE\u00BA\u0096\u00BBy\u00BB\u008B\u00B8/z\\\u00F2L\u00F2\u00D2\u00F3F\u00BD\u0087|J\u00B7\u00BB\u00EC\u00E0\u00DA\u00F1\u00D4\u00B7\u00DAo\u0087\u00BF\u00A0\u00FF\u00B3\u0080\u00E3\u0081;\u0082\x04\u0082&\u0083+C\u00DCC\u00D9C\u00EF\u0087\x15\u0087[D@\u00C4\u00B5\u00C8\u00E4(\u0095\u00A8\u0095\u00E8\u00FA\u0098\u00C0X\u0081\u00D8\u00C7q\x07i\u00DB\u00E2I\u00F17\u00E8\u00E9\tj\t+\u0089g\u0092|\u0093\u00B9\u0093\u00EF\u00A7\u00ECM5J]OkN\u008F\u00C8\x10\u00C9x\u00BA\u00F3\u00D0.\u00D7L\u00DE\u00CC\u0085\u00DD\x1DY\u0087\u00B2\u00D3rB\u00F7l\u00CF\u00F5\u00CA\u00F3\u00C9\x0F\u00D9\u009BT\u0090WXQt\u00B6\u00B8m\u00DF\u00E0\u00FE\u00F1\u0092\u0085\u00D2\u00CFe\u00B8r\u00F6\u0083b\u0087\u0094\x0F\u00EBV\u0098\x1D\u00B1\u00A9t:\u00EAU\x15X\x1Dwl\u00F7\u00F1\u0083'.\u00D4\f\u009F|_+Y\u0097vz\u00F4\u00ACt}\u00E6\u00B9\u0089\u00F3\n\u008D\u00B9\x17\u00A6.\u00A94\x154?o\u00D1\u00BCR|\u00F5E\u009BZ\u00FB\u00DE\u008E\u00E9.\u00B5kE\u00D7\u00E7z\u00F4{+\u00FB\u00BE\u00F4\u00BB\u00DEl\x1D\u0090\x1E<}Gah`8\u00EA/\u0089\u0091\u0095\u00D1\u00DBc\u0097\x1F5L4?\u00B91\u00F9\u00EC\x19\u00BCP\u009E\u00AD\x7F\u0099\u00BFX\u00F4\u00BA\u00FD\x1D\u00F3\u0087\u00825\u009E\u00F5\u00D6\r\u008F\u00CDM\u0080\u00DFoK\x00\x00\x04M\u00803\u00F3\x00\u00EE\u00A7\x00\u009C|\x00\u00EA\u00E5\x01$\u00AB\x01\u00988\x00\x1C\u00A9\x00\u00AE:\u0080\u009A\u0096\x02\u00F2\u00F4( V\u0097\u00FE9?\u00A8 \r\u0096\x10\n{\u00E1\x1C\f\u00C1\x1B\u0084\tQA\u00DC\u0090t\u00E48r\x1D\u0099B6PA\u00D4\b\rD\u00F3\u00D1\u00F3\u00E8}\u00F43\u008E\x1Fg\u0082\x0B\u00C7\x1D\u00C0u\u00E2\u00E60FL\x03\u00F3\u00C7\u00F6a\x1D\u00D8K<\x1B\u00DE\b\x1F\u008B?\u0085\x1F'0\x10L\b\u00A9\u0084\x16\u00C2\nQ\u0086\x18F\u00AC'.\u0093\x14II\u00A4^2#\u00D9\u009B|\u0081\x01a\u00F0dhadb\u008Ce\x1C\u00A3hSNRIT:\u00F59\u0093\rS'\u00B3\fs\x15\x0B\u0095%\u009B\u00E5+k\x1C\u00EB\x12[\x10\u00DB\x0B\u00F6@\u00F6E\u008E\x18\u008E/\u009C\u00D9\\L\\\u00C7\u00B9\u0095\u00B8o\u00F2\u00F8\u00F0\u00AC\u00F1\u0096\u00F1\u00A9\u00F0=\u00E4O\x11\x10\x14\x18\x15\u00DC+d*\f\u00C27D\u00F2D\u00ED\u00C5x\u00C5\u0096\u00C4\u00AFI\u0094IFJYJK\u00CAPd\u00D6d\u00E7\u00E4\u00C6\u00E4om\u00E9R\u00B8\u00A2\u00D8\u00AC\u00D4\u00A4\u00DC\u00A2\u00D2\u00A1\u00DA\u00A76\u00AC\u00FE\\\u00E3\u0083\x16\u00A6\u00CD\u00A9#\u00AE\u00AB\u00A0\u00A7\u00A2\u00AFl g(b\u00C4f\u008C\x1A\u00BF7\u00992\u00ED5\u00AB5/\u00B0\u0088\u00B3\u00F4\u00B42\u00DD\u00AAd-d\u00C3l\u008B\u00B3]\u00B7[\u00B5\x7F\u00BDm\u00C1a\u00CEq\u00D6\u00E9\u00A5\u00F3\x1B\u0097O\u00AE?\u00DD\u00C9\x1E\u00DC\u009E\u00D2^:\u00DE\u00F6>A\u00DB3v\x1C\u00F6m\u00F6\x1B\u00F1\x7F\x1B\u00C8\x14\u00A4\x16\u00EC\x15\u00B2;\u00B4.l |>\u00E2g\x14[\u00B4h\u008C\\\u00ACb\u009C\x02M6^\u008C\u00CE\u0095@N\u00F8\u009E\u00B8\u009C\u00CC\u0097b\u009F\u009A\u009B\u00D6\u009B\u00FEk\u00A7\u00C5\u00AE\u0083\u0099o\u00B2\u00EC\u00B3\u00AF\u00EDQ\u00CF\u00ED\u00CC\u00B7\u00DE;_\u00B8\u00B7Xt\u00DF\u00A5\x12\u00E3\u00D2\u0099\u00B2\u00B2\u0083\u009E\u0087\r\u008EX\x1FM\u00A9\x1E8\u00C1\x7F\u0092\u00A9\x16\u00AD\u00FBv\u00E6c\u00FD\u00BB\u0086\u0095\u00C6\u0095\u008B\u00EF\u009B\u00D6.\u00FF\u00BCJj\u00E3\u00EFP\u00EA2\u00BF\u00EE\u00D5\x13\u00D1\u0097\u00DC\u009Fy+kp\u00D7\u009D\u00E4\u00BB\u00D1\u00F7\u00FCG\u008AG;\u00C6^\u008F\u008B>\u00DE\u00F1\u00B4f\u00EA\u00D5s\u0095\u0099\u00EC\u00B9\u00F1\x05\u00F9\u00C5\u0082\u00E5\u00C5\x15\u00ABw\u00E7?\u00B0|\u00CAX{\u00BB\x1E\u00FA}\u00F1'ms\x13\x00\u0098A\x11\u009C \t\u00AA\u00A0\x17^\"\u008C\u0088*\u00E2\u0083\u00E4\"\r\u00C80\u00F2\x1E\u00E5@uQ\x7F\u00B4\x00mF\u009F\u00E2p8\x05\u009C\x17.\x0Fw\x19\u00F7\x02\u00A3b\u00FAX\x14V\u008D\u00FD\u0085\u00FD\u00C2\u00AB\u00E0\u0083\u00F1\u00C7\u00F0\u00E3\x04f\u0082\x1D\u00A1\u0090p\u0087\u00C8@\u00B4'\u0096\x13'I\u0092$:\u00A9\u009F\u00CCE\u008E&\x0F2\u00883\u00E40,0\u00DA0vQ\u00E4)5TN\u00EA>&\x02S\x0E30g\u00B3\u00E0X\nX\u0099X\u008F\u00B0\u0089\u00B15\u00B1\x1B\u00B3\u008Fs\u00C4p\x128k\u00B9L\u00B8\u00E6\u00B8\u00F3y\x14x&x\u00B3\u00F9\u0094\u00F9f\u00F8\x0F\nl\x15\u00C4\x04\u00FB\u0085\u00F6\b[\u008APD&Dk\u00C5\x12\u00C4-%\u0084$\u00D6%'\u00A4\u00DA\u00A5O\u00CA\x1C\u0091-\u0093+\u0091/\u00D9R\u00AEP\u00A5xV\u00A9U\u00F9\u008E\u00CAs\u00D5\u00AF\u00EA\u009C\x1A\u00BA\u009AAZ%\u00DA\u00DD:\u00EF\u00F5$\u00F5\u00FD\f\u00AA\r\u00A7\u008C\u0085L\u0082M\u009B\u00CC~XXX\x16[\r[\u00E3m\u00B4l\x03\u00ED\u00F2\u00ED\u00CFn\u00BB\u00E10\u00E9\u00B8\u00EA\u008C\u00B9p\u00B9\u00CA\u00B9\x19\u00BB{y$x\u0096z]\u00F2\x1E\u00F1\u00F9\u00B0\u0083\u00CB\u00D7\u00C0/\u00D4\u00BF,\u00A0'\u00F0]\u00B0x\u0088ghi\u00D8`\u00F8\u00CFH\u00F5\u00A8\u0088\u00E8\x131\x0F\u00E2P\u009Aj\u00BC?\u00BD$\u00E1Z\u00E2R2s\u008AV\u00AA\x7FZqzG\u00C6\u00E2.\u00EEL\u00EB\u00DD\u00BB\u00B2Z\u00B2_\u00EF\x11\u00CF\u00DD\u0091W\u0095\u00FF\u00A4\u0080\u00BB\u00D0\u00AB\u00E8D\u00F1\u00CB\u00FD\n%\u00A9\u00A5\u0083e<\u00E5q\x07\u00EF\x1DV\u00AE\u00A8\u00AEd:ZXM9v\u00F8\u0084t\u00CD\u00EDS\x11u\u0094\u00D3-g\u00BD\u00CFa\r\u00CD\u008D~\x17Y.\u00DDlNmQ\u00BA\u00B2\u00D4Z\u00DF\x1E\u00D1\u00A9\u00D0\u00F5\u00F1zWON\u009F]?\u00F7\u00CD\u00F9\u0081\u00E6\u00DB;\u0087l\u0086y\u00EF\u008D\u008E\u00B8\u00DD\u009F\x7F\u0090\u00FEP\u00E8\u00D1\u00C8D\u00F1\x13\u0097I\u00A9i\u00E4\u00D9\u00DC\u008B\u00C1\u00D9\u00C6\u00F9\u00D2\x05\u00FA\u00A2\u00CB2\u00FF\u00EB\u009A\x15\u00E9\u00B7\u0097\u00DF\x1B\u00AE\u008E|\u00F4\u00FB\u00F4~-\u00EB+\u00F3\u00FA\u00D1\u00EFB?j~\u00F2\u00FD*\u00DD\u00DC\x04\x00n0\x01\x1A\u00D4\u00C0}\u00D8DT\u0091P\u00E4(2\u0080|B\u00C5Pg4\x17mGWp\u00A28O\u00DC\x01\u00DC\x10\u0086\u00C3\f\u00B1t\u00AC\x1D[\u00C3k\u00E0\u0093\u00F1\u00DD\x04<\u00C1\u0081PMxM\u00D4#\x1E .\u0091\u00CCI\u00A7\u00C9$2\u008D<\u00CD`\u00C7\u00D0\u00C7\u00A8\u00C5\u00D8E1\u00A5\u00DC\u00A3zQ_3e2s27\u00B38\u00B0|`\u00AD`3d[f?\u00CE\u00E1\u00C2I\u00E5\u00BC\u00CBU\u00C8m\u00C7\u00C3\u00C63\u00C9{\u0086\u008F\u00CEo\"\u00C0.\u00F0FpP\u00E8\u00B4p\u00BEH\u0094\u00A8\u00AB\u0098\u0089\u00B8\u00AA\u0084\u00B4\u00A4\u00B0\x14\u00BF4\u009F\u008C\u0088\u00AC\u00BC\u009C\u008E\u00BC\u00ED\u0096\x00\u0085\u009D\u008AUJ\u00DD\u00CA/U\u0099\u00D4\u00F4\u00D5\u00E9\x1A\u00974\u00DFkk\u00E8d\u00EB\u008E\u00E9\u00CB\x18\u00E4\x1A\u00BE2\u00B63i7\u00937?m)jUg-k\u00D3jgn\u00FF\u00C4\u0081\u00E6Dqnv\u00F5q'{t{%\u00FB\u00A8o_\u00F7\u00ED\u00F3\u00DF\x1F\u00E8\x1B\u00AC\x19J\t{\x1AQ\x15e\x1D\u00BD\x1C\u009B\x16\u00B7\x11\u009FH_HtL\u00BA\u0092\u00C2\u009AJO{\u0094\u00A1\u00BB\u00F3T&\u00E3\u00EE\u00D4\u00AC\u00C5\x1C\u00CF=\u00F7\u00F2L\u00F3\u00BB\n\u00D4\x0B\u00DB\u008A\r\u00F6\r\u0095x\u0095\u00BE)\u00CB<\u00C8z\u00A8\u00B6B\u00E9H\u00E7Q\u00C3\u00AA\u00DEc\u00FA\u00C7\u00DBj\u00F0'\u00EDN\x1D\u00AE}qZ\u00EEL\u00CA\u00D9\u0081s\u009C\r\u00A1\u00E7\u00BB.0]\f\u00BEt\u00BD\u0099\u00F32\u00ADe\u00F8\u00AALkQ\u00DB\u00DB\x0E\u00A7\u00CE\u00F6kB\u00D7\u00F3\u00BB\u00DF\u00F5z\u00F4\u00DD\u00E8\u0097\u00BFy\u00F8\u00D6\u00E6`\u00E4\u00EDGC\u00C6w\x1B\u00EFq\u00FD\u00950rw\u0094\u00FFA\u00F8\u00D8\u0085\u0087\u00AF\u00C7\u00C5'<\x1E\u00E7<9\u00F7\u00F4\u00EE\u00E4\u00C2\u00D4\u00C63\u0096\u00E7\u00C2/\u00E4g4fu\u00E7\f\u00E7\u008D_\x1A/\x18\u00BE\u00D2]\u00D4ZRY\u0096{-\u00F6\u0086\u00E9\u00CD\u00F2J\u00E7\u00DB\u0094w\x1A\u00EFV\u00DE\u009FY\u00F5\u00FA\u00C0\u00F0\u00E1\u00FA\u00C7\u00D0O,\u009F:>o_\u0083\u00B5\u00DA/\u00A6_\u00E6\u00BE\u00EE^\x17X\u00EF\u00FC\u00E6\u00F6m\u00F5\u00FB\u00BE\x1F\u00D2?\u00FA7|7\u00D6\x7F\x1E\u00FC\u00A5\u00F4kh3xs\x13 !TM\x15\x00\x00\x10\u008A)\x00\u00FE\u00F9\u00E6\u00E6')\x00b9\u00C0\u00CF\u00B2\u00CD\u00CD\x1F\u00B5\u009B\u009B?\u00EB\x00p\u00D3\x00}\u00D1\u00BF\u00FF+\x00\x00\b,\x00\u00C7\u00EA\u00FE\u00B77\u00D2\u00FF\x00\x1E\u00E1~\u0097\u00DA\u00DF0\u00FA\x00\x00\x00 cHRM\x00\x00m\u0098\x00\x00s\u008E\x00\x00\u00FA\u00CC\x00\x00\u0084\u00FA\x00\x00y\u0081\x00\x00\u00FD\x13\x00\x000m\x00\x00\x12)\r\x1E&N\x00\x00\x02\x1CIDATx\u00DA\u00B4U1\u008E\u00EA0\x10}\u008E\u00E3D\"(U$\x10\x15BJ.AAA\x0B\x17\u00A0\u00E4\x02\bq\t\x1A8\x02\x05\x14\u00B4\x14 *\nn\u0081\u0094\u0086\n\u009ATQ\u0082Pb\u00C7\u00BFX%\x100\u00BB[\u00FC\u00B5d\u008D%\u00CF\u008C\u00DF\u00BC\u00BC\u0099\x10\u00CF\u00F3$\u00FEh\u00E9\x000\u0099L \u00E5\u00FF}c>\u009F\x7F%\u00E7\u009C\u00E3z\u00BD*\u009D\b!\u0090R\u0082\x10\u00A2\u00BC\u00CF\u00EF\u009E\u00C1\u00D5\u00EB\u00F5\x07r\u00CE9\u00B2,\u00FB\x16\u00C9v\u00BB-\u00CE\u00BD^\u00EF[_!\u00C4#y\u0096e?\u00D22\u009B\u00CD\u008A\u00F3z\u00BDF\u00ADVSV\u0091\u00E7+\u0092\x0B!\u00C09\x7F+\u00FDp8\u00E0v\u00BBa:\u009Db4\x1A\u0095\u00F8\x1C\u008F\u00C7\u00A8T*\u00E8v\u00BB\x1F\u0091\x13\u00CF\u00F3\u00E4p8D\x10\x04oN\u00AE\u00EB\u00A2\u00D9l\x16\u00CE\u00CF\u008BR\u008A\u00F3\u00F9\f\u00DF\u00F7\u00DF\u00F8w\x1C\x07\u008B\u00C5\u00E2\x0B\u00B9\u0094\u00F2\u008D\u00F3~\u00BF\u008F(\u008Ap\u00BF\u00DF\u00954\u00A5i\u008AF\u00A3\u0081V\u00AB\u0085\u00FD~_z \u00A7\u00A7\u00F8\u00A0\u00AF\u00E86\u009B\rl\u00DBVV\u0094/\u00C7q\x10\u0086\u00E1\u009B\u00B2J\x1FT\b\u00A1TK\u00BB\u00DD\u0086\u00EF\u00FB\u00B0,\x0Bq\x1C\x17\u00B6Z\u00AD\"\u008A\"\u00B8\u00AE\u008B\u00DDn\u00A7\u00AC\n\x00\u00B4g\u00B5\u00BC\u00EE,\u00CB\x10\u00C71\x1C\u00C7)Y\u00DB\u00B6\x11E\x11\u0084\x10\u00CA\u0098\u009C\x16\u00EDY\u00E7\u00AF\u009Bs\u008E0\f!\u00A5D\x10\x04H\u0092\x04\u0097\u00CB\x05\x00p:\u009D@\b)|\u0085\x10\x05\x03%Z8\u00E7E)\u00AA\u00F2t]\x07!\x04\u0086a\u0094\u00F4\u00FC).I\u00922\u00E7\u009F\u009A\u00C84MPJ\u00C1\x18\u0083\u0094\x12\u00A6i\u00821\x06\u00C6\x18\u00D24U\u00C6\u0095\u009A(I\x12p\u00CE\u0095N\u0086a\u0080R\n\u00C30\u00A0\u00EB:\x18c\u0085%\u0084\u0094\u00E2r\u009D\u0097\u0090\u00A7i\u00AALn\u009A&\b!\u00A0\u0094\x16V\u00D34PJA)\u0085\u00AE\u00EB\u00CA\u00B8\u009C*\u00E2y\u009E\u00ECt:\u0088\u00E3XI\u00CB`0P\u00CFj]\u00C7j\u00B5RNE\u00CB\u00B2p<\x1E\u00DF\u009B\u00E8\u00D5y\u00B9\\\x16\u00ED\u00AE\x1A\x03\u00AF#YJ\u00F9\x10B\u00CE9\u00A5\u00F4\u00C7\u00F9\u00ADi\u00DA\u00AF\u00E6y\u00CE9\u00F9\u00CB\u00DF\u00DC\u00BF\x01\x005\u00D3\u008B\u00B4\u00FFr\u00C6\u00B0\x00\x00\x00\x00IEND\u00AEB`\u0082";
                this.w.res1.gr1.gr1.gr1.up.image = this.w.res1.gr1.gr2.gr1.up.image = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x17\x00\x00\x00\x14\b\x06\x00\x00\x00f\u00BE\u00A6\x0E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x17OiCCPPhotoshop ICC profile\x00\x00x\u00DA\u00D5yiX\u008D]\u00D8\u00F6u\u00DF\u00FB\u00DES\u00ED\u00DD<\u00CF\u00F3\u00A8y\u009E\u00E7\u00D2\u00A4y\u00A6y\x1Ew\u00BB\u00B9H\u00A5\u00D2@)$\u0085($\u00A1D#\r\u00A2H\u009E$\n\x15\x1A\u00A4\"d\u0088\x10\u00BD?x\u009E\u00E7\x1D\u00BE\u00F7\u00C7w\x1C\u00DF\u009F\u00EF\u00FC\u00B1\u008E\u00F38\u00AFk\u009D\u00D7u\u00FDZ\u00C7Z\x0B\u0080w%\u0080F\u008BFY\x00bb\x13\u00E9\u00CEV\u00A6\"\u009E^\u00DE\"\u00C4) \u00820p\u0083\x06\u00C8\x05\x04%\u00D0L\x1C\x1D\u00ED\u00E0\x7F\u00C5\u0097\t@\x00\x00\x1E*\x04\u00D0h\u00D1\u00F0\x7F\x07\u00D6\u00E0\u0090\u0084 \x00\u00C4\x11\x00\x02\u0083\x13\u0082b\x00\u0090\u00AB\x00\u00A8i\x10\u008D\u009E\b\u0080[\x07\u0080\u00D1\u0094DZ\"\x00v\x07\x008\u00E8\u009E^\u00DE\x00\u00D84\x00p\u0084\u00FD\u00E6\u00AB\x00\u00C0\x11\u00E8\u00E9\u00E5\r\u0080\u00C7\x00\u0080\u0083\u00EE\u00EAl\x06\u0080\u00E7\x01 Q\x02\x02\u00E8a\x00T\t\x00\x10I\x0E\nK\x04\u00A0\u009A\x03\x10\u00D8b\u0083#b\x01\u00D8=\x01\b\u0086A\u00E1\x01\u00C1\x00\u00BC\u0095\x00\u00B0%&&.\x18\u0080\u00F7\x16\x00\u00C8\x04\u00FE'\u009F\u00B0\u00FF\u00E2\x19\u00F8\u008Fg@@\u00D8?\u00FC\u00F7,\x00\x00@2\u008FH\u00A0E\x07\u00A4\u00C1\u00FFk\u00C4D'\u00FD]\u0083\r\x00(\u00B1\u00D1\u00DB\u00EC\x00\u0080\x0B\x00\u0096\u0082\x03\u00CCm\x01@\x00\x00~\u00D1\u00A2\x1D\u00ED~\u00E7 |!\u00B1n.\x7F\u00F8\u0096\u00D8\u00C0m\x0E\x7F\u00B8a(\u00DD\u00D2\u00F9\u00F7^\u00C4\u0091\u0096h\u00EA\f\x00<\x00H(-\u00D1\u00D1\u00F5\u008F\u009E\u0099\x1En\u00B6\r\x00(\x00\u00C8\u00A1\u0090\x04\u008B\u00BF}NF\x06\u00D88\x02\x00\x13\x00\u00D2BOrv\x03\x00\t\x00\u00A4/!\u00D9\u00C5\x02\x00X\x00\u0090\u0097\u00E9\u00E1\u00AE\x1E\x7Fr>\x07\u0087\u0098\u00FF\u00D1Q44\u00C2\u00D2\u00FA\x0Fg\u008BH\u00B4v\x05\x00\x0E\x00T,*\u00CE\u00D6\u00F9w-T\x13l!\x1AB \t\u00E8\x10\x02\u00B1\u00A0\x00v`\x06\u00E6\x7FV\x05\b\u0085\x00\u00A0C2\u0084@\x02D\u00C1+\u00A0C\f\u00D8B\x1CDC\x1C\u00D0A\u00E4O\u009E\u00D9\u00FFP,!\x00\u00E8\x10\x06!\u00FF\u00CDQ\x04\u0082 \x0E\u0092\u00FE\u00A9\u00F9\u00B7\u00FA\u00AFC\x04\x04C\u00DC?z\u00C0\u009F\x18\x1DB \u00C1/\"\u00E7\u00DF\n\u00FF\u00D9/\x1A\u00E2\u0080\u00AE\u00DC\u00A8\u00BC\u00AC\u00BC\u00F1w\x1C\u0093\u00C2T1\r\u00CC\x143\u00C0\f1\x1D\x10\u00C1\u00B80>P\u00C0\u00D41m\u00CC\x043\u00C2\u00F40\rL\x07,\u00E1%\u00D0!\u00EC\u00EF\x1E\u00FD\"r\u00E81-\u00A1\u00C9\u0095qi\u00BA\u00EE\u00E1\x7Ff\b\u00FCg\x02wx\tt\u0088\u00F8?N\u00F4\u00A7\u00F7\u0091\u0095\u00F6\u0095\x7F:\u0084\u00C4\u0090\u00D4D\x00\x00\u00B38Z\x1A=\",<Q\u00C4\u0084F\u008B\x0E\u00D9\"b\x1D\x1B\u00A4\u00B8EDUYE\x05\u00FE\x7F\u0082\u00A7\u0097\u00B7\u00C8o\u00F6\u00C9\x19\x10\x00@\u00B8\u00EE\u00FF\u00AB\u00C5\u00A9\x00\u00E8\x04\x01 {\u00FE\u00D5\u00FC\u00DF\x01\u00B4G\x02\u0090\u00D8\u00FE\u00D5\u00A4\u00DA\x01\u0098U\x01\u0086\u008E\x04%\u00D1\u0093\x7Fk\x18\x00\x00\x1E\x18\u0080\x198\u0080\x17\u0084@\x1Cd@\x01TA\x13\u00F4\u00C0\x18,\u00C0\x06\x1C\u00C0\x15\u00BC\u00C0\x17\u0082 \x1Cb\u0080\x0E)\u00B0\x13\u00B2!\x1F\u008A\u00E1\x00\x1C\u0086*\u00A8\u0081:8\x07\x17\u00A1\x05\u00DA\u00E1:\u00DC\u0080A\x18\u0086Q\x18\u0087)\u0098\u0081\x05x\x03\u00AB\u00F0\x05~ \bBD\u00A8\b;\u00C2\u008B\b#\u0092\u0088<\u00A2\u008Ah#\u0086\u0088\x05b\u00878#^\u0088?\x12\u0086\u00C4\"I\u00C8Nd\x0FR\u008C\u0094#U\u00C8)\u00A4\x01\u00B9\u008Ct\"7\u0090!\u00E4\x01\u00F2\x14\u0099E\u0096\u0091\u008F\u00C8w\x14\u0087RP\x0ET\x10\u0095B\u0095Pm\u00D4\x04\u00B5E]\u00D1\x1Dh\x18\x1A\u008F\u00A6\u00A3\u00B9h\tZ\u0089\u00D6\u00A2\x17\u00D06\u00F4\x06:\u008C\u008E\u00A33\u00E8\x1Bt\r\x078F\x1C\x17N\x14\u00A7\u0080\u00D3\u00C6\u0099\u00E1\x1Cp\u00DE\u00B8P\x1C\x1D\u0097\u0089+\u00C2U\u00E0jq\u0097p]\u00B8\u00DB\u00B8\u0087\u00B8\x19\u00DC\n\u00EE\x1BF\u00C0\u00D81\x11L\x01\u00D3\u00C3\u00B6bnX\x10\x16\u008Feb\u00FB\u00B0*\u00EC\x1C\u00D6\u0086\u00DD\u00C2\x1Eb\u00B3\u00D8*\u00F6\x0BO\u00C5\x0B\u00E0\u00E5\u00F1\u00BAxk\u00BC'>\f\u009F\u0082\u00CF\u00C7W\u00E0\u00CF\u00E2[\u00F1\x03\u00F8q\u00FC\x02\u00FE\x0B\u0081@\u00E0\"H\x13\u00B4\b[\t^\u0084HB\x06a\x1F\u00E18\u00A1\u0089\u00D0Gx@\u0098'\u00AC\x11\u0089D^\u00A2<\u00D1\u0080\u00E8@\f &\x12\u00F3\u0089G\u0089\x17\u0088\u00BD\u00C41\u00E2\x02q\u009D\u00C4H\x12&\u00A9\u0092,I\u00DE\u00A4XR\x0E\u00A9\u0082t\u009E\u00D4C\x1A#-\u0092~\u0090Y\u00C8\u0092d]\u00B2\x039\u0098\u009CF.%\u009F&w\u0091\u00EF\u0093\x17\u00C8?\x18X\x19\u00A4\x19\f\x18\\\x19\"\x19\u00B2\x19*\x19.1\f0L3|bdd\x14c\u00D4atb\u008C`\u00CCb\u00ACdlf\u00BC\u00C38\u00CB\u00F8\u008D\u00C2F\u0091\u00A3\u0098Q\u00B6S\u0092(%\u0094zJ\x1F\u00E5)\u00E5\x13\u0095J\u0095\u00A2\x1AS\u00BD\u00A9\u0089\u00D4\x12j\x03\u00F5&\u00F59u\u009D\u0089\u009DI\u0091\u00C9\u009A)\u0098i7S5S\x1B\u00D3\x18\u00D3;f2\u00B3$\u00B3\t\u00B3/s:s\x05\u00F3\x15\u00E6\u00FB\u00CC+,d\x16)\x163\u0096\x00\u0096L\u0096j\u0096N\u0096\u00C7,k\u00AC\u00EC\u00AC*\u00AC\x0E\u00AC1\u00AC\u00FBX\u00CF\u00B3\x0E\u00B1.\u00B1\x11\u00D9\u00A4\u00D8,\u00D8\u0082\u00D9r\u00D9\u00EA\u00D8n\u00B2\u00CD\u00B3\u00E3\u00D8\u00C5\u00D9\u00CD\u00D8\u0083\u00D8\u00F7\u00B0\u009Ff\x1F`_\u00E0 pHsXsDr\x14s\\\u00E4\x18\u00E1X\u00E5d\u00E3T\u00E7t\u00E7L\u00E5\u00AC\u00E6\u00EC\u00E6\u009C\u00E1\u00C2qIqYsEs\u0095r\u00B5pMp}\u00E7\x16\u00E46\u00E1\x0E\u00E1.\u00E4\u00BE\u00C4=\u00C6\u00FD\u0095\u0087\u009F\u00C7\u0098'\u0084\u00A7\u0088\u00A7\u0089g\u009C\u00E7;\u00AF\b\u00AF\x05o\x14o\x19o;\u00EF3>\u008CO\u008E\u00CF\u0089/\u0085\u00EF\x04\u00DF\x00\u00DF\n?\x07\u00BF\x1E\x7F\x10\x7F\x11\x7F\x0B\u00FF\u00A4\x00* '\u00E0,\u0090!P'pO`MPH\u00D0J\u0090&xT\u00F0\u00A6\u00E0\u008A\x10\u0097\u0090\u00B1P\u00A4\u00D0!\u00A1\x1E\u00A1eavaC\u00E1\b\u00E1C\u00C2\u00BD\u00C2\u00AFE8ELD\u00A2E*En\u0089\u00AC\u008A\n\u0088n\x15M\x12=%:\"\u00FACLZ\u00CCM,G\u00ACI\u00EC\u00998\u0083\u00B8\u00B6x\u00A8\u00F8!\u00F1~\u00F1U\ta\t{\u0089\u009D\x12\u008D\x12\u0093\u0092dIm\u00C9p\u00C9#\u0092\u00B7%\u00BFJIKyH\u00ED\u0095j\u0097Z\u0092\u00E6\u0091\u00B6\u0096N\u0097n\u0094\u009E\u0096\u00A1\u00CA\x18\u00C9\u00C4\u00CB\u00D4\u00CA<\u0092%\u00C8j\u00CBF\u00C9\x1E\u0097\x1D\u0095C\u00E54\u00E4\u00C2\u00E5\u00AA\u00E5\u00EE\u00CB\u00A3\u00F2\u009A\u00F2\x11\u00F2\u00C7\u00E5\x1Fl\u00C1o\u00D1\u00D9\x12\u00BB\u00A5v\u00CBc\x05\u008A\u0082\u0089B\u00B2B\u00A3\u00C2\u00AC\"\u0097\u00A2\u009Db\u008Eb\u00BB\u00E2;%\t%o\u00A52\u00A5\u00DBJ\u00BF\u00945\u0094\u00A3\u0095O+O\u00A9\u00B0\u00A9\u00D8\u00A8\u00E4\u00A8t\u00A9|T\u0095S\rR\u00ADV}\u00A4FU\u00B3T\u00DB\u00AD\u00D6\u00A1\u00F6A]^=D\u00FD\u0084\u00FA\x13\rv\r{\u008D\u00BD\x1A\u00FD\x1A?5\u00B54\u00E9\u009A\u00974\u0097\u00B5$\u00B4\u00FC\u00B5\u008Ei=\u00D6\u00E6\u00D0v\u00D4\u00DE\u00A7}G\x07\u00AFc\u00AA\u00B3[\u00E7\u00BA\u00CE7]M\u00DDD\u00DD\x16\u00DD\u00F7z\nzQz\u00E7\u00F5\u0096\u00F4\u00A5\u00F5C\u00F4O\u00EB\u00CF\x1B\u0088\x19\x04\x18\u009C2\u00981\x141\u00F47<i8c$j\x14`Tk4g,n\x1Cl|\u00D6x\u00D1D\u00D6$\u00D2\u00E4\u0082\u00C9;SeS\u00BAi\u00AB\u00E9W3]\u00B3]f}\u00E68s+\u00F3\"\u00F3\x11\x0B6\x0B7\u008B*\u008B\u00E7\u0096b\u0096a\u0096\u008D\u0096\u00ABV\x1AV\x19V}[\u00F1[m\u00B7\u0096m}l-h\x1Dd\u00DD`\u00BDj\u00A3e\u00B3\u00CB\u00E6\u0096-\u00C5\u00D6\u00C5\u00B6\u00CAv\u00CEN\u00CE\u008En\u00D7e\u008F\u00DA\u00DB\u00D8\x1F\u00B4\u009F\u00DE&\u00B9-v[\u00BB\x038X;\x1Ctx\u00E6(\u00ED\x18\u00EFx\u00CD\u0089\u00E0\u00E4\u00E8T\u00ED\u00F4\u00CAY\u00C5y\u00A7\u00F3m\x17v\x17?\u0097\u00F3._\\M]K]\u00A7\u00DCd\u00DC\u0092\u00DC\u00FA\u00DD\u0099\u00DD\u00B7\u00BB7\u00B8\x7F\u00F50\u00F7(\u00F7\u0098\u00F1T\u00F2\u00DC\u00E59\u00EC\u00C5\u00E7\x15\u00E1\u00D5\u00E1M\u00F4v\u00F7>\u00EB\u00BD\u00E6c\u00E1s\u00D8ga\u00BB\u00C6\u00F6\u00FC\u00ED\x13;\u00A4w\u00A4\u00EE\x18\u00F2\u00E5\u00F3\u008D\u00F6\u00ED\u00F6c\u00F6\x0B\u00F0\u00BB\u00E2\u008F\u00F7\u00F7\u00F0?\u00EF\u00BF\x11\u00E0\x10P\x1B\u00B0\x16h\x1Dx,p5\u00C8,\u00E8H\u00D0\u009B`\u00E3\u00E0C\u00C1\u00CB!\x06!\u00E5!\u008B\u00A1\x06\u00A1\u00E5\u00A1Ka\x06a\x07\u00C3\u0096\u00C3\u008D\u00C2+\u00C2W\"\u00CC\"\u00AA\">Dn\u008D\u00AC\u0089\u00FC\x1A\u00E5\x10U\x1F\u00B5\x19\u00ED\x11\u00DD\x14C\u008A\u00F1\u008F\u00E9\u008Ce\u008B\u008D\u008A\u00BD\x15'\x14\u0097\x1A\u00F7\u0080&O\u00CB\u00A7\u00CD\u00C4\u00EB\u00C6\x1F\u008E_\u00A5\u00DB\u00D2\u00CF& \t;\x12:\x129\x12i\u0089\u00F7\u0092d\u0092\u00F2\u0092f\u0093\r\u0093\u00AB\u0093\u00D7S\u00DCS\u00AE\u00A4\u00B2\u00A6\u00C6\u00A6\u00DEK\u0093K+L[L\u00B7L?\u0093\u0081e\x04e\u00F4\u00EF\x14\u00DD\u0099\u00BDsv\u0097\u00C9\u00AES\u0099Hf`f\u00FFn\u00F1\u00DD\u00B9\u00BB\x17\u00B2\u00AC\u00B2\u00CEe3dGe\u00FF\u0095\u00A3\u009CS\u009E\u00F3y\u008F\u00C7\u009E\u00AE\\\u00C1\u00DC\u00AC\u00DC\u00F9<\u00AB\u00BC\u00C6|\u00A6|z\u00FE\u00E3\u00BDz{k\n\u00B0\u0082\u0088\u0082\u0091B\u00B5\u00C2\u00A3\u0085\u00BF\u008A\u0082\u008B\u00EE\x16+\x17W\x14o\u00EC\x0B\u00DAww\u00BF\u00CA\u00FE\u00CA\u00FD\u009B%\u00A1%#\u00A5\u009A\u00A5'\x0E\x10\x0E\u00C4\x1E\u0098(3*;W\u00CEZ\u009E^>\x7F\u00D0\u00FE`\u00DB!\u0091CE\u0087>\x1F\u00F6;<T\u00A1^Qs\u0084\u00E1H\u00D2\u0091\u0099J\u00BB\u00CA\u008E\u00A3\x12G\x0F\x1C\u00DD\u00A8\n\u00AF\x1A\u00AF6\u00ADn:&p\u00AC\u00F0\u00D8\u00D7\u00E3\u00C1\u00C7\u00C7N\x18\u009F\u00B8T#XS\\\u00F3\u00FDd\u00C4\u00C9'\u00A7\u00ACN\u00B5\u00D5J\u00D5V\u00D4\x11\u00EA\u0092\u00EB^\u009Dv?}\u00FB\u008C\u00F6\u0099\u0086\u00B3|g\u008B\u00CF\u00FE\u00AC\u008F\u00AD\u009F9\u00E7|\u00EEV\u0083VC\u00C3y\u0081\u00F3\u00A5\u008DhcR\u00E3\u00F2\u0085\u00ED\x17F/\u009A_\u00EC\u00B8\u00A4p\u00E9T\x13WSq34'5\u00BF\u00BE\u00EC\x7Fy\u00A2\u00C5\u00B6\u00A5\u00FF\u008A\u00F6\u0095KW%\u00AF\x1Ekeo-jC\u00DA\u00D2\u00DAV\u00DB\u00C3\u00DBg:\u00BC:\x1Et\u00DAt\u00F6w\u00E9u\u00B5^S\u00BCV\x7F]\u00F4zu7gwi\x0FCOn\u00CFfoz\u00EFZ\x1F\u00ADo\u00E5F\u00D8\u008D\u00F9~\u00BF\u00FE\u00A9\u009B\u009E7\x1F\u00DDr\u00BA52`;pg\u00D0r\u00F0\u00E6m\u0093\u00DB\u00BDw\f\u00EE\\\x1F\u00D2\x1D\u00EA\u00BC\u00AB}\u00B7}Xs\u00B8\u00ED\u009E\u00C6\u00BD\u00D6\u00BF4\u00FEj\x1D\u00D1\x1Ci\u00BB\u00AFu\u00BFcTg\u00B4\u00EB\u0081\u00FE\u0083\u009E1\u00A3\u00B1\x1B\x0F\u00CD\x1F\x0E>\u00B2~4<\u00BEm\u00FC\u00C1\u0084\u00DB\u00C4\u0093\u00C7\u00DB\x1F\u00CF<\t~\u00B2\u00F44\u00FA\u00E9\u0087\u00C9\u00E4\u00C9\x1FSY\u00D3\u00F8\u00E9\u00A2g,\u00CF*\u009E\x0B<\u00AF}!\u00FB\u00A2iFs\u00A6{\u00D6|\u00F6\u00DE\u009C\u00CB\u00DC\u00D4|\u00D0\u00FC\u009B\u0097\t/7\x16r_Q_U,\n/6,\u00A9.]_\u00B6\\\x1E}\u00ED\u00F3z\u00E1\r\u00ED\u00CD\u008F\u0095\u00FC\u00B7\u00ACo\u008F\u00BD\u0093yw\u00F5\u00BD\u00F1\u00FB{\u00AB\u009E\u00AB\x0B\x1F\u00E8\x1F6?\u00EE\u00FB\u00C4\u00FB\u00A9\u00FE\u00B3\u00FA\u00E7\u00FE5\u00C7\u00B5\u00E7_b\u00BE\u00FC\u00F8Z\u00B4\u00CE\u00BB~\u00EE\u009B\u00F6\u00B7\u00DB\u00DF=\u00BE/\u00FEH\u00D9 nT\u00FE\u0094\u00FD\u00D9\u00F5\u00CB\u00F6\u00D7\u00F4f\u00CC\u00E6&-\u0080\x1E\x00\x00\x008\x00@CC\x01>\u00D6\x03P\u00BD\x00\u00D8G\x01\x18\u0098~\u00DF)\u00FE\x00\u0087\x00\u00A0\x00@\x04!\u00B0\u0081b\u0098G\u00E4\u0090X\u00A4\x0F\u00E5E\x13\u00D1I\u009C5\u00EE&f\u0085=\u00C2\u00C7\x10X\t\u00FD\u00C4\u009D$C2\u0091\u00FC\u008C\u00A1\u0093\u00F1\x18\u00A5\u0094Z\u00CF4\u00CD\u00C2\u00C2j\u00CBV\u00C8>\u00C4\u00C9\u00CA\u00B5\u009D\u00FB\x02/\u00C6\x17\u00C0\u00DF-(\"\u00B4Ox]4XlRb\u009B\u00E4\u0090\u00B4\u0092L\u0089\u00EC\x1By\u00EB-5\n_\u0094\u00CC\u0094\u00F7\u00AB\u008C\u00AAQ\u00D5M5\x124\u008Fi\u00F5i\u00CF\u00E8\u00FC\u00D4\u00E3\u00D6\u00977\u00D01\u00B40r6\x0E2I0\u00CD5;b\u00DEh\u00D1k\u00F9\u00D0jy\u00EB\u00A6\r\u00A7\u00ED\x16;3{\u009Fm\x11\x0E\u00C9\u008EyN\u00E5\u00CE5.\u008D\u00AE\u00EDn\u00FD\u00EE\u00C3\x1Ec\u009EO\u00BD^x\u00CF\u00FB,m\x7F\u00BBc\u00C9w\u00DAo\u00C4\u00BF7\u00A0)\u00F0D\u00D0\u00FE\u00E0\u00F4\u0090\u00D0P\u00A70\u00BDp\u0089\b\u00A6\u0088/\u0091/\u00A2\x06\u00A3\x1Bb\u00F6\u00C7\u00D2\u00E2\\hZ\u00F1|\u00F1\x1B\u00F4\u00E7\t}\u0089uIy\u00C9\u00A1)\u00D6\u00A9\u00F2i\fi\u00AF\u00D3\u00EFe4\u00EF\u00AC\u00DC\u0095\u009B\u0099\u00B2;>\u008B\u009E\u009D\u009ES\u00B4\u00E7Tnw\u00DE\u008B\u00BD\u00E4\x02\u00FDBZQ]\u00F1\u00C4~\u0086\x12\u00FD\u00D2\u0098\x03'\u00CAF\u00CA\x7F\x1E\u00DAr\u00D8\u00A7\u00A2\u00E8H[\u00E5L\x15c\u00B5\u00C61\u00BF\u00E3\u0085'Zj\u00A6Na\u00B5\nu\u00EE\u00A7w\u009F9w\u00F6A\u00FDz\u0083\u00C8y\u00BB\u00C6\u009D\x17Z.~h\u00D2m.\u00BD\u00FC\u00FE\u008A\u00CF\u00D5\u00FBm\x0E\u00ED\u008F:\u00F5\u00BB\x12\u00AF5\\\u009F\u00EEa\u00ECU\u00EBs\u00BF\x11\u00DF\u009Fw\u00B3\u00ECV\u00C5@\u00C5`\u00D9\u00ED\u0082;{\u0086\u00F6\u00DE\u00DD?\u00BC\u00FF^\u00DE_\u0089#\x1E\u00F7\x15\u00EF\u00FF\x18\u00ED{\u00901\u00A69\u00F6\u00E5\u00E1\u00E3G\u009D\u00E3U\x13\u00BB\x1E\u00FB=1}*9I\u009E|;\u00F5`\u00BA\u00F5Y\u00D5\u00F3]/\u00FCg\u00CCge\u00E7X\u00E6\u00BE\u00CD\u00BFz9\u00B10\u00F4\u00EA\u00C6\u00E2\u00B5\u00A5\u00CE\u00E5\u00CE\u00D7g\u00DE\u0094\u00AC$\u00BF\u00F5}g\u00F1^~\u0095eu\u00ED\u00C3\u00E4\u00C7\u009EO\u00A7>\u00E7\u00AD\u0085\x7F\u00B1\u00FD\u00AA\u00B4\u00CE\u00BE\u00FE\u00F5\u00DB\u00F4\u00F7\u00BE\x1F\u00B5\x1B\u00B9?C~\u0099o\u008Amn\x02\x00\x01\u00F8\u00C0\x18Ra\x00aG\u00EC\u0090\x03\u00C8\x0BT\r-A?\u00E1\u00FCp\x13\u0098\x1B\u00F6\fO#0\x11\u00DA\u0089!$>\u00D2$\u00F9\x18C\x18\u00A3)\u00C5\u0080\u00EA\u00CA\x14\u00CE\u009C\u00C5r\u0092\u00F5\x06\u00DB2\x07'\u00A79W\x1Aw\x13\u00CF{>E~\u00BA\u00C0u!Faw\u0091\u00F3\u00A2\u009B\u00E2&\x12\u00D9\u0092\u00BDR\x1B2Z\u00B2\u0091r\u00C7\u00E5\u0087\u00B7|T\u00E4TRS\u00DE\u00AA\u00E2\u00A3\x1A\u00A6\x16\u00AF\u009E\u00A6\u00B1K3]+R\u00DBG\u00C7N\u00D7@OY_\u00CC\u0080\u00D3\u0090d\u00F8\u00DD\u00E8\u00AD\u00F1\u00AC\u00C9\u00B8\u00E9]\u00B3\x1E\u00F3+\x16\u00F5\u0096\u0095V\x05[S\u00AC\u00C3m\u00BCl\u00B7\u00DAi\u00DBKo\u00E3t\u00C0\x1C>;\u00CE9=p\u00EEsiv=\u00E1V\u00E0\u009E\u00E0\u00E1\u00EBi\u00ED\u00A5\u00E6-\u00E8C\u00F0y\u00B7}bG\u00B7o\u009D_\u0091\x7F\\\u0080k\u00A0z\x10%h.\u00B83\u00A4444L?\u009C5\u00FCU\u00C4\u00B5\u00C8\u00B2\u00A8\u0090h\u00DD\x18\u00E6\u0098\u00F9\u00D8\u00F6\u00B8\x02\u009AW\u00BC|\u00FC\x06}$\u00E1d\"=\u00C9,\u00993y1\u00A53u_\u009Ao\u00BAr\x06\u009A\u00F1xg\u00D3\u00AE\u00E2\u00CC\u0098\u00DDnY\u00E6\u00D9\u00BA9:{\fr\u00B7\u00E6y\u00E6\u00C7\u00EE\u00DD[p\u00A6\u00F0f\u00D1l\u00F1\u00AF\u00FD\x02%:\u00A5\u00EE\x07\x12\u00CA\x0E\u0094_88t\u00E8U\x05zD\u00A0R\u00F3\u00A8SULu\u00F1\u00B1\x0B\u00C7GO|9)v\u00CA\u00B1vO]\u00E7\u00E9\x0Fg\x15\u00EB\u00E3\u00CF]m\u00F8\u00DA\u00A8sa\u00E7\u00C5\u009E&h6\u00B9\u00BC\u00A7e\u00E0*\u00BE\u00D5\u00AA\u00AD\u00A0\u00FDv'\u00B1\u00CB\u00E2Z\u00CE\u00F5\u00EE\u00EE\u00CF\u00BDR}.72\u00FAO\u00DC\u00BCvk|`y\u00F0\u00EB\x1Dl\u0088\u00FD\u00AE\u00E8\u00B0\u00D2=\u0083\u00BF\u00ECF\u00BC\u00EF\u0087\u008F\u00A6<\u00C8\x1F;\u00FC\u00B0\u00F6Q\u00D3\u00F8\u00F5\u0089\u00A1\u00C7\x13O\x16\u009E~\u009E\u00C2Ms<\u0093|\u00AE\u00FD\u00C2n&l\u00B6nn\u00F9\u00A5\u00F4\u0082\u00F7\u00AB\u00FC\u00C5\u00F3K\u00B7\u0097g_\u00AF\u00AF0\u00BD\u0095|g\u00F4\u00DEg5\u00EB\u00C3\u00E8'\u00B5\u00CF\x07\u00D7>}u^\u00BF\u00FA\u009D\u00E7G\u00DE\u00C6\u00FA\u00AF\u0094\u00CDM\x00\u00C0\u0080\x15\u00E4`\x1BdA\x1FBDt\u0091D\u00A4\x1DEQ{\u00F4$\u00FA\x03\u00E7\u008B\u00BB\u008B\u00E9cmxm|?\u00C1\u00910O\u00CC \u00F1\u0093n\u0093\u00F73\x041\u00EAS\u00F8)\u00BF\u00A8sL\u00C3\u00CC\u00AD,gX+\u00D9J\u00D8\x0B8\u00F28\u00F3\u00B9\u008A\u00B9\x0F\u00F2\u00D4\u00F06\u00F2u\u00F0w\x0Bt\x0B\u00F6\b\u00F5\n\u00F7\u0088\\\x13m\x15k\x14?.Q,\u0099$\u00B5]\u00DAXFL\x16d\u00A7\u00E4\u00DA\u00E5\u008B\u00B7\u00B8+\u0088(\u00BCVlU\u00CAR\u00B6U\u00E1R\u0099UmTKR7\u00D2 k<\u00D4<\u00AE\x15\u00AE\u00AD\u00AE\u00BD\u00AE\u00D3\u00A3\u009B\u00A7g\u00AB\u00CF\u00A6?iPk\x18i\u00A4j\u00B4a<hRf\u00BA\u00C3L\u00CE\u00EC\u00AB\u00F9M\u008BRK\x1F+i\u00AB\u008F[{\u00AC\u008Bl\u00DCmEm\u00DF\u00D8\u00B5\u00D9gm\u00B3s\u00E0r\u0098ultJp\u00D6sA]\u00EE\u00BA\u0096\u00BBy\u00BB\u008B\u00B8/z\\\u00F2L\u00F2\u00D2\u00F3F\u00BD\u0087|J\u00B7\u00BB\u00EC\u00E0\u00DA\u00F1\u00D4\u00B7\u00DAo\u0087\u00BF\u00A0\u00FF\u00B3\u0080\u00E3\u0081;\u0082\x04\u0082&\u0083+C\u00DCC\u00D9C\u00EF\u0087\x15\u0087[D@\u00C4\u00B5\u00C8\u00E4(\u0095\u00A8\u0095\u00E8\u00FA\u0098\u00C0X\u0081\u00D8\u00C7q\x07i\u00DB\u00E2I\u00F17\u00E8\u00E9\tj\t+\u0089g\u0092|\u0093\u00B9\u0093\u00EF\u00A7\u00ECM5J]OkN\u008F\u00C8\x10\u00C9x\u00BA\u00F3\u00D0.\u00D7L\u00DE\u00CC\u0085\u00DD\x1DY\u0087\u00B2\u00D3rB\u00F7l\u00CF\u00F5\u00CA\u00F3\u00C9\x0F\u00D9\u009BT\u0090WXQt\u00B6\u00B8m\u00DF\u00E0\u00FE\u00F1\u0092\u0085\u00D2\u00CFe\u00B8r\u00F6\u0083b\u0087\u0094\x0F\u00EBV\u0098\x1D\u00B1\u00A9t:\u00EAU\x15X\x1Dwl\u00F7\u00F1\u0083'.\u00D4\f\u009F|_+Y\u0097vz\u00F4\u00ACt}\u00E6\u00B9\u0089\u00F3\n\u008D\u00B9\x17\u00A6.\u00A94\x154?o\u00D1\u00BCR|\u00F5E\u009BZ\u00FB\u00DE\u008E\u00E9.\u00B5kE\u00D7\u00E7z\u00F4{+\u00FB\u00BE\u00F4\u00BB\u00DEl\x1D\u0090\x1E<}Gah`8\u00EA/\u0089\u0091\u0095\u00D1\u00DBc\u0097\x1F5L4?\u00B91\u00F9\u00EC\x19\u00BCP\u009E\u00AD\x7F\u0099\u00BFX\u00F4\u00BA\u00FD\x1D\u00F3\u0087\u00825\u009E\u00F5\u00D6\r\u008F\u00CDM\u0080\u00DFoK\x00\x00\x04M\u00803\u00F3\x00\u00EE\u00A7\x00\u009C|\x00\u00EA\u00E5\x01$\u00AB\x01\u00988\x00\x1C\u00A9\x00\u00AE:\u0080\u009A\u0096\x02\u00F2\u00F4( V\u0097\u00FE9?\u00A8 \r\u0096\x10\n{\u00E1\x1C\f\u00C1\x1B\u0084\tQA\u00DC\u0090t\u00E48r\x1D\u0099B6PA\u00D4\b\rD\u00F3\u00D1\u00F3\u00E8}\u00F43\u008E\x1Fg\u0082\x0B\u00C7\x1D\u00C0u\u00E2\u00E60FL\x03\u00F3\u00C7\u00F6a\x1D\u00D8K<\x1B\u00DE\b\x1F\u008B?\u0085\x1F'0\x10L\b\u00A9\u0084\x16\u00C2\nQ\u0086\x18F\u00AC'.\u0093\x14II\u00A4^2#\u00D9\u009B|\u0081\x01a\u00F0dhadb\u008Ce\x1C\u00A3hSNRIT:\u00F59\u0093\rS'\u00B3\fs\x15\x0B\u0095%\u009B\u00E5+k\x1C\u00EB\x12[\x10\u00DB\x0B\u00F6@\u00F6E\u008E\x18\u008E/\u009C\u00D9\\L\\\u00C7\u00B9\u0095\u00B8o\u00F2\u00F8\u00F0\u00AC\u00F1\u0096\u00F1\u00A9\u00F0=\u00E4O\x11\x10\x14\x18\x15\u00DC+d*\f\u00C27D\u00F2D\u00ED\u00C5x\u00C5\u0096\u00C4\u00AFI\u0094IFJYJK\u00CAPd\u00D6d\u00E7\u00E4\u00C6\u00E4om\u00E9R\u00B8\u00A2\u00D8\u00AC\u00D4\u00A4\u00DC\u00A2\u00D2\u00A1\u00DA\u00A76\u00AC\u00FE\\\u00E3\u0083\x16\u00A6\u00CD\u00A9#\u00AE\u00AB\u00A0\u00A7\u00A2\u00AFl g(b\u00C4f\u008C\x1A\u00BF7\u00992\u00ED5\u00AB5/\u00B0\u0088\u00B3\u00F4\u00B42\u00DD\u00AAd-d\u00C3l\u008B\u00B3]\u00B7[\u00B5\x7F\u00BDm\u00C1a\u00CEq\u00D6\u00E9\u00A5\u00F3\x1B\u0097O\u00AE?\u00DD\u00C9\x1E\u00DC\u009E\u00D2^:\u00DE\u00F6>A\u00DB3v\x1C\u00F6m\u00F6\x1B\u00F1\x7F\x1B\u00C8\x14\u00A4\x16\u00EC\x15\u00B2;\u00B4.l |>\u00E2g\x14[\u00B4h\u008C\\\u00ACb\u009C\x02M6^\u008C\u00CE\u0095@N\u00F8\u009E\u00B8\u009C\u00CC\u0097b\u009F\u009A\u009B\u00D6\u009B\u00FEk\u00A7\u00C5\u00AE\u0083\u0099o\u00B2\u00EC\u00B3\u00AF\u00EDQ\u00CF\u00ED\u00CC\u00B7\u00DE;_\u00B8\u00B7Xt\u00DF\u00A5\x12\u00E3\u00D2\u0099\u00B2\u00B2\u0083\u009E\u0087\r\u008EX\x1FM\u00A9\x1E8\u00C1\x7F\u0092\u00A9\x16\u00AD\u00FBv\u00E6c\u00FD\u00BB\u0086\u0095\u00C6\u0095\u008B\u00EF\u009B\u00D6.\u00FF\u00BCJj\u00E3\u00EFP\u00EA2\u00BF\u00EE\u00D5\x13\u00D1\u0097\u00DC\u009Fy+kp\u00D7\u009D\u00E4\u00BB\u00D1\u00F7\u00FCG\u008AG;\u00C6^\u008F\u008B>\u00DE\u00F1\u00B4f\u00EA\u00D5s\u0095\u0099\u00EC\u00B9\u00F1\x05\u00F9\u00C5\u0082\u00E5\u00C5\x15\u00ABw\u00E7?\u00B0|\u00CAX{\u00BB\x1E\u00FA}\u00F1'ms\x13\x00\u0098A\x11\u009C \t\u00AA\u00A0\x17^\"\u008C\u0088*\u00E2\u0083\u00E4\"\r\u00C80\u00F2\x1E\u00E5@uQ\x7F\u00B4\x00mF\u009F\u00E2p8\x05\u009C\x17.\x0Fw\x19\u00F7\x02\u00A3b\u00FAX\x14V\u008D\u00FD\u0085\u00FD\u00C2\u00AB\u00E0\u0083\u00F1\u00C7\u00F0\u00E3\x04f\u0082\x1D\u00A1\u0090p\u0087\u00C8@\u00B4'\u0096\x13'I\u0092$:\u00A9\u009F\u00CCE\u008E&\x0F2\u00883\u00E40,0\u00DA0vQ\u00E4)5TN\u00EA>&\x02S\x0E30g\u00B3\u00E0X\nX\u0099X\u008F\u00B0\u0089\u00B15\u00B1\x1B\u00B3\u008Fs\u00C4p\x128k\u00B9L\u00B8\u00E6\u00B8\u00F3y\x14x&x\u00B3\u00F9\u0094\u00F9f\u00F8\x0F\nl\x15\u00C4\x04\u00FB\u0085\u00F6\b[\u008APD&Dk\u00C5\x12\u00C4-%\u0084$\u00D6%'\u00A4\u00DA\u00A5O\u00CA\x1C\u0091-\u0093+\u0091/\u00D9R\u00AEP\u00A5xV\u00A9U\u00F9\u008E\u00CAs\u00D5\u00AF\u00EA\u009C\x1A\u00BA\u009AAZ%\u00DA\u00DD:\u00EF\u00F5$\u00F5\u00FD\f\u00AA\r\u00A7\u008C\u0085L\u0082M\u009B\u00CC~XXX\x16[\r[\u00E3m\u00B4l\x03\u00ED\u00F2\u00ED\u00CFn\u00BB\u00E10\u00E9\u00B8\u00EA\u008C\u00B9p\u00B9\u00CA\u00B9\x19\u00BB{y$x\u0096z]\u00F2\x1E\u00F1\u00F9\u00B0\u0083\u00CB\u00D7\u00C0/\u00D4\u00BF,\u00A0'\u00F0]\u00B0x\u0088ghi\u00D8`\u00F8\u00CFH\u00F5\u00A8\u0088\u00E8\x131\x0F\u00E2P\u009Aj\u00BC?\u00BD$\u00E1Z\u00E2R2s\u008AV\u00AA\x7FZqzG\u00C6\u00E2.\u00EEL\u00EB\u00DD\u00BB\u00B2Z\u00B2_\u00EF\x11\u00CF\u00DD\u0091W\u0095\u00FF\u00A4\u0080\u00BB\u00D0\u00AB\u00E8D\u00F1\u00CB\u00FD\n%\u00A9\u00A5\u0083e<\u00E5q\x07\u00EF\x1DV\u00AE\u00A8\u00AEd:ZXM9v\u00F8\u0084t\u00CD\u00EDS\x11u\u0094\u00D3-g\u00BD\u00CFa\r\u00CD\u008D~\x17Y.\u00DDlNmQ\u00BA\u00B2\u00D4Z\u00DF\x1E\u00D1\u00A9\u00D0\u00F5\u00F1zWON\u009F]?\u00F7\u00CD\u00F9\u0081\u00E6\u00DB;\u0087l\u0086y\u00EF\u008D\u008E\u00B8\u00DD\u009F\x7F\u0090\u00FEP\u00E8\u00D1\u00C8D\u00F1\x13\u0097I\u00A9i\u00E4\u00D9\u00DC\u008B\u00C1\u00D9\u00C6\u00F9\u00D2\x05\u00FA\u00A2\u00CB2\u00FF\u00EB\u009A\x15\u00E9\u00B7\u0097\u00DF\x1B\u00AE\u008E|\u00F4\u00FB\u00F4~-\u00EB+\u00F3\u00FA\u00D1\u00EFB?j~\u00F2\u00FD*\u00DD\u00DC\x04\x00n0\x01\x1A\u00D4\u00C0}\u00D8DT\u0091P\u00E4(2\u0080|B\u00C5Pg4\x17mGWp\u00A28O\u00DC\x01\u00DC\x10\u0086\u00C3\f\u00B1t\u00AC\x1D[\u00C3k\u00E0\u0093\u00F1\u00DD\x04<\u00C1\u0081PMxM\u00D4#\x1E .\u0091\u00CCI\u00A7\u00C9$2\u008D<\u00CD`\u00C7\u00D0\u00C7\u00A8\u00C5\u00D8E1\u00A5\u00DC\u00A3zQ_3e2s27\u00B38\u00B0|`\u00AD`3d[f?\u00CE\u00E1\u00C2I\u00E5\u00BC\u00CBU\u00C8m\u00C7\u00C3\u00C63\u00C9{\u0086\u008F\u00CEo\"\u00C0.\u00F0FpP\u00E8\u00B4p\u00BEH\u0094\u00A8\u00AB\u0098\u0089\u00B8\u00AA\u0084\u00B4\u00A4\u00B0\x14\u00BF4\u009F\u008C\u0088\u00AC\u00BC\u009C\u008E\u00BC\u00ED\u0096\x00\u0085\u009D\u008AUJ\u00DD\u00CA/U\u0099\u00D4\u00F4\u00D5\u00E9\x1A\u00974\u00DFkk\u00E8d\u00EB\u008E\u00E9\u00CB\x18\u00E4\x1A\u00BE2\u00B63i7\u00937?m)jUg-k\u00D3jgn\u00FF\u00C4\u0081\u00E6Dqnv\u00F5q'{t{%\u00FB\u00A8o_\u00F7\u00ED\u00F3\u00DF\x1F\u00E8\x1B\u00AC\x19J\t{\x1AQ\x15e\x1D\u00BD\x1C\u009B\x16\u00B7\x11\u009FH_HtL\u00BA\u0092\u00C2\u009AJO{\u0094\u00A1\u00BB\u00F3T&\u00E3\u00EE\u00D4\u00AC\u00C5\x1C\u00CF=\u00F7\u00F2L\u00F3\u00BB\n\u00D4\x0B\u00DB\u008A\r\u00F6\r\u0095x\u0095\u00BE)\u00CB<\u00C8z\u00A8\u00B6B\u00E9H\u00E7Q\u00C3\u00AA\u00DEc\u00FA\u00C7\u00DBj\u00F0'\u00EDN\x1D\u00AE}qZ\u00EEL\u00CA\u00D9\u0081s\u009C\r\u00A1\u00E7\u00BB.0]\f\u00BEt\u00BD\u0099\u00F32\u00ADe\u00F8\u00AALkQ\u00DB\u00DB\x0E\u00A7\u00CE\u00F6kB\u00D7\u00F3\u00BB\u00DF\u00F5z\u00F4\u00DD\u00E8\u0097\u00BFy\u00F8\u00D6\u00E6`\u00E4\u00EDGC\u00C6w\x1B\u00EFq\u00FD\u00950rw\u0094\u00FFA\u00F8\u00D8\u0085\u0087\u00AF\u00C7\u00C5'<\x1E\u00E7<9\u00F7\u00F4\u00EE\u00E4\u00C2\u00D4\u00C63\u0096\u00E7\u00C2/\u00E4g4fu\u00E7\f\u00E7\u008D_\x1A/\x18\u00BE\u00D2]\u00D4ZRY\u0096{-\u00F6\u0086\u00E9\u00CD\u00F2J\u00E7\u00DB\u0094w\x1A\u00EFV\u00DE\u009FY\u00F5\u00FA\u00C0\u00F0\u00E1\u00FA\u00C7\u00D0O,\u009F:>o_\u0083\u00B5\u00DA/\u00A6_\u00E6\u00BE\u00EE^\x17X\u00EF\u00FC\u00E6\u00F6m\u00F5\u00FB\u00BE\x1F\u00D2?\u00FA7|7\u00D6\x7F\x1E\u00FC\u00A5\u00F4kh3xs\x13 !TM\x15\x00\x00\x10\u008A)\x00\u00FE\u00F9\u00E6\u00E6')\x00b9\u00C0\u00CF\u00B2\u00CD\u00CD\x1F\u00B5\u009B\u009B?\u00EB\x00p\u00D3\x00}\u00D1\u00BF\u00FF+\x00\x00\b,\x00\u00C7\u00EA\u00FE\u00B77\u00D2\u00FF\x00\x1E\u00E1~\u0097\u00DA\u00DF0\u00FA\x00\x00\x00 cHRM\x00\x00m\u0098\x00\x00s\u008E\x00\x00\u00FA\u00CC\x00\x00\u0084\u00FA\x00\x00y\u0081\x00\x00\u00FD\x13\x00\x000m\x00\x00\x12)\r\x1E&N\x00\x00\x01\u0087IDATx\u00DA\u00B4U1\u00AA\x021\x10}Q\u00B7\u00B0\u0090m\x15\x11;\x11\u00C1N\u00C5\u00CE\x03X\u00D8ZZ\u0089\u00BD\u00F7\u00F0\n\u009EC\u00B0\u00B4\u00B1\u00B2\u00F6\x00b\u00E1\r\u00B2\u0093\u00C9/>\u0093\u00DD\u00F8\u0093\u00FD\n:0\u00B00\u00937/og&\u00AA\u00D7\u00EBY|\u00C9j\x00\u00B0\u00DDna\u00EDgk\u00ECv\u00BB_p\"\u00C2\u00FD~\x0F&)\u00A5`\u00AD\u0085R*\x18\u0097X\u0091\\\u00B3\u00D9\u00CC\u0099\x13\x11\u0098\u00F9c\u00AC\u008D1983\x7FD\x16\u00C1\x10\u00A2\x15\u00A9DD0\u00C6D\u00BD\u00D5j\u00E1p8\u0094\u00E603\u0098\u00D91\u00AF\u0088,\u00D6Z\x17|\u00F64M1\x1A\u008D\u0090\u00A6).\u0097K4O\n\x10Q\x0E^\x06\u00CC\u00CC\x18\u008F\u00C7\x00\u0080\u00CDf\u0083\u00EB\u00F5\x1A\u00CD\x13\x1C\u0091\u00C71\u008F]\u00B5\u00D3\u00E9\u00A0^\u00AF\x03\x00\u00BA\u00DD.f\u00B3\x19\u00CE\u00E7sT\x16\u00F9\u00F64\u008F\u00B1\x19\x0E\u0087\u00DEO[\u00ADV\u00B8\u00DDn\u00A5\u00B2dY\u0096\u0083\u00CBU\u009E}0\x18 I\x12\x0F\u00BC\u00D1h`\u00B9\\\u00E2t:\x05\u00CF\x04e\t1\u00E9\u00F7\u00FB\u00C1\u0096[,\x16\u00AE\u00E5\u008A\u00AC\u008B\u00D2x\u00E0Y\u0096y>\u009DN\u00A3\u00FD\u009C$\t\u00D6\u00EB5\u008E\u00C7\u00A3\u00CB'\"\u00E7Z\u00EB|\u0088\u008C1\x7F\u0086\u00A8\u00DDn\u0097\x0E\u00CCd2\u00C1\u00E3\u00F1\b\x0E\u009F\fQ\r\x00\u00B4\u00D6\u00AE7\u00DF\u00B5\u00E29\u00D93\x1Es\u00B9V\u00D1\u00F6\u00FB\u00FD\u00BF\u00C0\u00F3\u00F9<HJ\u00BA\u00A5Vl\u00C5W\u00ECyK\u0086\u00B6\u00A2\u00B7\u00B8d\u0088b\u00C9\u00EF\x16\u00F3\u0098k\u00ADQ\u00ADV_\u00DA\u00DF\u00AF\u00ECs\u00D1\\}\u00F3\u0099\u00FB\x19\x00]\u00B1\x10\x05\u00B1y\u00FD\u0089\x00\x00\x00\x00IEND\u00AEB`\u0082";
                this.w.res1.gr1.gr1.gr1.down.image = this.w.res1.gr1.gr2.gr1.down.image = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x17\x00\x00\x00\x14\b\x06\x00\x00\x00f\u00BE\u00A6\x0E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x17OiCCPPhotoshop ICC profile\x00\x00x\u00DA\u00D5yiX\u008D]\u00D8\u00F6u\u00DF\u00FB\u00DES\u00ED\u00DD<\u00CF\u00F3\u00A8y\u009E\u00E7\u00D2\u00A4y\u00A6y\x1Ew\u00BB\u00B9H\u00A5\u00D2@)$\u0085($\u00A1D#\r\u00A2H\u009E$\n\x15\x1A\u00A4\"d\u0088\x10\u00BD?x\u009E\u00E7\x1D\u00BE\u00F7\u00C7w\x1C\u00DF\u009F\u00EF\u00FC\u00B1\u008E\u00F38\u00AFk\u009D\u00D7u\u00FDZ\u00C7Z\x0B\u0080w%\u0080F\u008BFY\x00bb\x13\u00E9\u00CEV\u00A6\"\u009E^\u00DE\"\u00C4) \u00820p\u0083\x06\u00C8\x05\x04%\u00D0L\x1C\x1D\u00ED\u00E0\x7F\u00C5\u0097\t@\x00\x00\x1E*\x04\u00D0h\u00D1\u00F0\x7F\x07\u00D6\u00E0\u0090\u0084 \x00\u00C4\x11\x00\x02\u0083\x13\u0082b\x00\u0090\u00AB\x00\u00A8i\x10\u008D\u009E\b\u0080[\x07\u0080\u00D1\u0094DZ\"\x00v\x07\x008\u00E8\u009E^\u00DE\x00\u00D84\x00p\u0084\u00FD\u00E6\u00AB\x00\u00C0\x11\u00E8\u00E9\u00E5\r\u0080\u00C7\x00\u0080\u0083\u00EE\u00EAl\x06\u0080\u00E7\x01 Q\x02\x02\u00E8a\x00T\t\x00\x10I\x0E\nK\x04\u00A0\u009A\x03\x10\u00D8b\u0083#b\x01\u00D8=\x01\b\u0086A\u00E1\x01\u00C1\x00\u00BC\u0095\x00\u00B0%&&.\x18\u0080\u00F7\x16\x00\u00C8\x04\u00FE'\u009F\u00B0\u00FF\u00E2\x19\u00F8\u008Fg@@\u00D8?\u00FC\u00F7,\x00\x00@2\u008FH\u00A0E\x07\u00A4\u00C1\u00FFk\u00C4D'\u00FD]\u0083\r\x00(\u00B1\u00D1\u00DB\u00EC\x00\u0080\x0B\x00\u0096\u0082\x03\u00CCm\x01@\x00\x00~\u00D1\u00A2\x1D\u00ED~\u00E7 |!\u00B1n.\x7F\u00F8\u0096\u00D8\u00C0m\x0E\x7F\u00B8a(\u00DD\u00D2\u00F9\u00F7^\u00C4\u0091\u0096h\u00EA\f\x00<\x00H(-\u00D1\u00D1\u00F5\u008F\u009E\u0099\x1En\u00B6\r\x00(\x00\u00C8\u00A1\u0090\x04\u008B\u00BF}NF\x06\u00D88\x02\x00\x13\x00\u00D2BOrv\x03\x00\t\x00\u00A4/!\u00D9\u00C5\x02\x00X\x00\u0090\u0097\u00E9\u00E1\u00AE\x1E\x7Fr>\x07\u0087\u0098\u00FF\u00D1Q44\u00C2\u00D2\u00FA\x0Fg\u008BH\u00B4v\x05\x00\x0E\x00T,*\u00CE\u00D6\u00F9w-T\x13l!\x1AB \t\u00E8\x10\x02\u00B1\u00A0\x00v`\x06\u00E6\x7FV\x05\b\u0085\x00\u00A0C2\u0084@\x02D\u00C1+\u00A0C\f\u00D8B\x1CDC\x1C\u00D0A\u00E4O\u009E\u00D9\u00FFP,!\x00\u00E8\x10\x06!\u00FF\u00CDQ\x04\u0082 \x0E\u0092\u00FE\u00A9\u00F9\u00B7\u00FA\u00AFC\x04\x04C\u00DC?z\u00C0\u009F\x18\x1DB \u00C1/\"\u00E7\u00DF\n\u00FF\u00D9/\x1A\u00E2\u0080\u00AE\u00DC\u00A8\u00BC\u00AC\u00BC\u00F1w\x1C\u0093\u00C2T1\r\u00CC\x143\u00C0\f1\x1D\x10\u00C1\u00B80>P\u00C0\u00D41m\u00CC\x043\u00C2\u00F40\rL\x07,\u00E1%\u00D0!\u00EC\u00EF\x1E\u00FD\"r\u00E81-\u00A1\u00C9\u0095qi\u00BA\u00EE\u00E1\x7Ff\b\u00FCg\x02wx\tt\u0088\u00F8?N\u00F4\u00A7\u00F7\u0091\u0095\u00F6\u0095\x7F:\u0084\u00C4\u0090\u00D4D\x00\x00\u00B38Z\x1A=\",<Q\u00C4\u0084F\u008B\x0E\u00D9\"b\x1D\x1B\u00A4\u00B8EDUYE\x05\u00FE\x7F\u0082\u00A7\u0097\u00B7\u00C8o\u00F6\u00C9\x19\x10\x00@\u00B8\u00EE\u00FF\u00AB\u00C5\u00A9\x00\u00E8\x04\x01 {\u00FE\u00D5\u00FC\u00DF\x01\u00B4G\x02\u0090\u00D8\u00FE\u00D5\u00A4\u00DA\x01\u0098U\x01\u0086\u008E\x04%\u00D1\u0093\x7Fk\x18\x00\x00\x1E\x18\u0080\x198\u0080\x17\u0084@\x1Cd@\x01TA\x13\u00F4\u00C0\x18,\u00C0\x06\x1C\u00C0\x15\u00BC\u00C0\x17\u0082 \x1Cb\u0080\x0E)\u00B0\x13\u00B2!\x1F\u008A\u00E1\x00\x1C\u0086*\u00A8\u0081:8\x07\x17\u00A1\x05\u00DA\u00E1:\u00DC\u0080A\x18\u0086Q\x18\u0087)\u0098\u0081\x05x\x03\u00AB\u00F0\x05~ \bBD\u00A8\b;\u00C2\u008B\b#\u0092\u0088<\u00A2\u008Ah#\u0086\u0088\x05b\u00878#^\u0088?\x12\u0086\u00C4\"I\u00C8Nd\x0FR\u008C\u0094#U\u00C8)\u00A4\x01\u00B9\u008Ct\"7\u0090!\u00E4\x01\u00F2\x14\u0099E\u0096\u0091\u008F\u00C8w\x14\u0087RP\x0ET\x10\u0095B\u0095Pm\u00D4\x04\u00B5E]\u00D1\x1Dh\x18\x1A\u008F\u00A6\u00A3\u00B9h\tZ\u0089\u00D6\u00A2\x17\u00D06\u00F4\x06:\u008C\u008E\u00A33\u00E8\x1Bt\r\x078F\x1C\x17N\x14\u00A7\u0080\u00D3\u00C6\u0099\u00E1\x1Cp\u00DE\u00B8P\x1C\x1D\u0097\u0089+\u00C2U\u00E0jq\u0097p]\u00B8\u00DB\u00B8\u0087\u00B8\x19\u00DC\n\u00EE\x1BF\u00C0\u00D81\x11L\x01\u00D3\u00C3\u00B6bnX\x10\x16\u008Feb\u00FB\u00B0*\u00EC\x1C\u00D6\u0086\u00DD\u00C2\x1Eb\u00B3\u00D8*\u00F6\x0BO\u00C5\x0B\u00E0\u00E5\u00F1\u00BAxk\u00BC'>\f\u009F\u0082\u00CF\u00C7W\u00E0\u00CF\u00E2[\u00F1\x03\u00F8q\u00FC\x02\u00FE\x0B\u0081@\u00E0\"H\x13\u00B4\b[\t^\u0084HB\x06a\x1F\u00E18\u00A1\u0089\u00D0Gx@\u0098'\u00AC\x11\u0089D^\u00A2<\u00D1\u0080\u00E8@\f &\x12\u00F3\u0089G\u0089\x17\u0088\u00BD\u00C41\u00E2\x02q\u009D\u00C4H\x12&\u00A9\u0092,I\u00DE\u00A4XR\x0E\u00A9\u0082t\u009E\u00D4C\x1A#-\u0092~\u0090Y\u00C8\u0092d]\u00B2\x039\u0098\u009CF.%\u009F&w\u0091\u00EF\u0093\x17\u00C8?\x18X\x19\u00A4\x19\f\x18\\\x19\"\x19\u00B2\x19*\x19.1\f0L3|bdd\x14c\u00D4atb\u008C`\u00CCb\u00ACdlf\u00BC\u00C38\u00CB\u00F8\u008D\u00C2F\u0091\u00A3\u0098Q\u00B6S\u0092(%\u0094zJ\x1F\u00E5)\u00E5\x13\u0095J\u0095\u00A2\x1AS\u00BD\u00A9\u0089\u00D4\x12j\x03\u00F5&\u00F59u\u009D\u0089\u009DI\u0091\u00C9\u009A)\u0098i7S5S\x1B\u00D3\x18\u00D3;f2\u00B3$\u00B3\t\u00B3/s:s\x05\u00F3\x15\u00E6\u00FB\u00CC+,d\x16)\x163\u0096\x00\u0096L\u0096j\u0096N\u0096\u00C7,k\u00AC\u00EC\u00AC*\u00AC\x0E\u00AC1\u00AC\u00FBX\u00CF\u00B3\x0E\u00B1.\u00B1\x11\u00D9\u00A4\u00D8,\u00D8\u0082\u00D9r\u00D9\u00EA\u00D8n\u00B2\u00CD\u00B3\u00E3\u00D8\u00C5\u00D9\u00CD\u00D8\u0083\u00D8\u00F7\u00B0\u009Ff\x1F`_\u00E0 pHsXsDr\x14s\\\u00E4\x18\u00E1X\u00E5d\u00E3T\u00E7t\u00E7L\u00E5\u00AC\u00E6\u00EC\u00E6\u009C\u00E1\u00C2qIqYsEs\u0095r\u00B5pMp}\u00E7\x16\u00E46\u00E1\x0E\u00E1.\u00E4\u00BE\u00C4=\u00C6\u00FD\u0095\u0087\u009F\u00C7\u0098'\u0084\u00A7\u0088\u00A7\u0089g\u009C\u00E7;\u00AF\b\u00AF\x05o\x14o\x19o;\u00EF3>\u008CO\u008E\u00CF\u0089/\u0085\u00EF\x04\u00DF\x00\u00DF\n?\x07\u00BF\x1E\x7F\x10\x7F\x11\x7F\x0B\u00FF\u00A4\x00* '\u00E0,\u0090!P'pO`MPH\u00D0J\u0090&xT\u00F0\u00A6\u00E0\u008A\x10\u0097\u0090\u00B1P\u00A4\u00D0!\u00A1\x1E\u00A1eavaC\u00E1\b\u00E1C\u00C2\u00BD\u00C2\u00AFE8ELD\u00A2E*En\u0089\u00AC\u008A\n\u0088n\x15M\x12=%:\"\u00FACLZ\u00CCM,G\u00ACI\u00EC\u00998\u0083\u00B8\u00B6x\u00A8\u00F8!\u00F1~\u00F1U\ta\t{\u0089\u009D\x12\u008D\x12\u0093\u0092dIm\u00C9p\u00C9#\u0092\u00B7%\u00BFJIKyH\u00ED\u0095j\u0097Z\u0092\u00E6\u0091\u00B6\u0096N\u0097n\u0094\u009E\u0096\u00A1\u00CA\x18\u00C9\u00C4\u00CB\u00D4\u00CA<\u0092%\u00C8j\u00CBF\u00C9\x1E\u0097\x1D\u0095C\u00E54\u00E4\u00C2\u00E5\u00AA\u00E5\u00EE\u00CB\u00A3\u00F2\u009A\u00F2\x11\u00F2\u00C7\u00E5\x1Fl\u00C1o\u00D1\u00D9\x12\u00BB\u00A5v\u00CBc\x05\u008A\u0082\u0089B\u00B2B\u00A3\u00C2\u00AC\"\u0097\u00A2\u009Db\u008Eb\u00BB\u00E2;%\t%o\u00A52\u00A5\u00DBJ\u00BF\u00945\u0094\u00A3\u0095O+O\u00A9\u00B0\u00A9\u00D8\u00A8\u00E4\u00A8t\u00A9|T\u0095S\rR\u00ADV}\u00A4FU\u00B3T\u00DB\u00AD\u00D6\u00A1\u00F6A]^=D\u00FD\u0084\u00FA\x13\rv\r{\u008D\u00BD\x1A\u00FD\x1A?5\u00B54\u00E9\u009A\u00974\u0097\u00B5$\u00B4\u00FC\u00B5\u008Ei=\u00D6\u00E6\u00D0v\u00D4\u00DE\u00A7}G\x07\u00AFc\u00AA\u00B3[\u00E7\u00BA\u00CE7]M\u00DDD\u00DD\x16\u00DD\u00F7z\nzQz\u00E7\u00F5\u0096\u00F4\u00A5\u00F5C\u00F4O\u00EB\u00CF\x1B\u0088\x19\x04\x18\u009C2\u00981\x141\u00F47<i8c$j\x14`Tk4g,n\x1Cl|\u00D6x\u00D1D\u00D6$\u00D2\u00E4\u0082\u00C9;SeS\u00BAi\u00AB\u00E9W3]\u00B3]f}\u00E68s+\u00F3\"\u00F3\x11\x0B6\x0B7\u008B*\u008B\u00E7\u0096b\u0096a\u0096\u008D\u0096\u00ABV\x1AV\x19V}[\u00F1[m\u00B7\u0096m}l-h\x1Dd\u00DD`\u00BDj\u00A3e\u00B3\u00CB\u00E6\u0096-\u00C5\u00D6\u00C5\u00B6\u00CAv\u00CEN\u00CE\u008En\u00D7e\u008F\u00DA\u00DB\u00D8\x1F\u00B4\u009F\u00DE&\u00B9-v[\u00BB\x038X;\x1Ctx\u00E6(\u00ED\x18\u00EFx\u00CD\u0089\u00E0\u00E4\u00E8T\u00ED\u00F4\u00CAY\u00C5y\u00A7\u00F3m\x17v\x17?\u0097\u00F3._\\M]K]\u00A7\u00DCd\u00DC\u0092\u00DC\u00FA\u00DD\u0099\u00DD\u00B7\u00BB7\u00B8\x7F\u00F50\u00F7(\u00F7\u0098\u00F1T\u00F2\u00DC\u00E59\u00EC\u00C5\u00E7\x15\u00E1\u00D5\u00E1M\u00F4v\u00F7>\u00EB\u00BD\u00E6c\u00E1s\u00D8ga\u00BB\u00C6\u00F6\u00FC\u00ED\x13;\u00A4w\u00A4\u00EE\x18\u00F2\u00E5\u00F3\u008D\u00F6\u00ED\u00F6c\u00F6\x0B\u00F0\u00BB\u00E2\u008F\u00F7\u00F7\u00F0?\u00EF\u00BF\x11\u00E0\x10P\x1B\u00B0\x16h\x1Dx,p5\u00C8,\u00E8H\u00D0\u009B`\u00E3\u00E0C\u00C1\u00CB!\x06!\u00E5!\u008B\u00A1\x06\u00A1\u00E5\u00A1Ka\x06a\x07\u00C3\u0096\u00C3\u008D\u00C2+\u00C2W\"\u00CC\"\u00AA\">Dn\u008D\u00AC\u0089\u00FC\x1A\u00E5\x10U\x1F\u00B5\x19\u00ED\x11\u00DD\x14C\u008A\u00F1\u008F\u00E9\u008Ce\u008B\u008D\u008A\u00BD\x15'\x14\u0097\x1A\u00F7\u0080&O\u00CB\u00A7\u00CD\u00C4\u00EB\u00C6\x1F\u008E_\u00A5\u00DB\u00D2\u00CF& \t;\x12:\x129\x12i\u0089\u00F7\u0092d\u0092\u00F2\u0092f\u0093\r\u0093\u00AB\u0093\u00D7S\u00DCS\u00AE\u00A4\u00B2\u00A6\u00C6\u00A6\u00DEK\u0093K+L[L\u00B7L?\u0093\u0081e\x04e\u00F4\u00EF\x14\u00DD\u0099\u00BDsv\u0097\u00C9\u00AES\u0099Hf`f\u00FFn\u00F1\u00DD\u00B9\u00BB\x17\u00B2\u00AC\u00B2\u00CEe3dGe\u00FF\u0095\u00A3\u009CS\u009E\u00F3y\u008F\u00C7\u009E\u00AE\\\u00C1\u00DC\u00AC\u00DC\u00F9<\u00AB\u00BC\u00C6|\u00A6|z\u00FE\u00E3\u00BDz{k\n\u00B0\u0082\u0088\u0082\u0091B\u00B5\u00C2\u00A3\u0085\u00BF\u008A\u0082\u008B\u00EE\x16+\x17W\x14o\u00EC\x0B\u00DAww\u00BF\u00CA\u00FE\u00CA\u00FD\u009B%\u00A1%#\u00A5\u009A\u00A5'\x0E\x10\x0E\u00C4\x1E\u0098(3*;W\u00CEZ\u009E^>\x7F\u00D0\u00FE`\u00DB!\u0091CE\u0087>\x1F\u00F6;<T\u00A1^Qs\u0084\u00E1H\u00D2\u0091\u0099J\u00BB\u00CA\u008E\u00A3\x12G\x0F\x1C\u00DD\u00A8\n\u00AF\x1A\u00AF6\u00ADn:&p\u00AC\u00F0\u00D8\u00D7\u00E3\u00C1\u00C7\u00C7N\x18\u009F\u00B8T#XS\\\u00F3\u00FDd\u00C4\u00C9'\u00A7\u00ACN\u00B5\u00D5J\u00D5V\u00D4\x11\u00EA\u0092\u00EB^\u009Dv?}\u00FB\u008C\u00F6\u0099\u0086\u00B3|g\u008B\u00CF\u00FE\u00AC\u008F\u00AD\u009F9\u00E7|\u00EEV\u0083VC\u00C3y\u0081\u00F3\u00A5\u008DhcR\u00E3\u00F2\u0085\u00ED\x17F/\u009A_\u00EC\u00B8\u00A4p\u00E9T\x13WSq34'5\u00BF\u00BE\u00EC\x7Fy\u00A2\u00C5\u00B6\u00A5\u00FF\u008A\u00F6\u0095KW%\u00AF\x1Ekeo-jC\u00DA\u00D2\u00DAV\u00DB\u00C3\u00DBg:\u00BC:\x1Et\u00DAt\u00F6w\u00E9u\u00B5^S\u00BCV\x7F]\u00F4zu7gwi\x0FCOn\u00CFfoz\u00EFZ\x1F\u00ADo\u00E5F\u00D8\u008D\u00F9~\u00BF\u00FE\u00A9\u009B\u009E7\x1F\u00DDr\u00BA52`;pg\u00D0r\u00F0\u00E6m\u0093\u00DB\u00BDw\f\u00EE\\\x1F\u00D2\x1D\u00EA\u00BC\u00AB}\u00B7}Xs\u00B8\u00ED\u009E\u00C6\u00BD\u00D6\u00BF4\u00FEj\x1D\u00D1\x1Ci\u00BB\u00AFu\u00BFcTg\u00B4\u00EB\u0081\u00FE\u0083\u009E1\u00A3\u00B1\x1B\x0F\u00CD\x1F\x0E>\u00B2~4<\u00BEm\u00FC\u00C1\u0084\u00DB\u00C4\u0093\u00C7\u00DB\x1F\u00CF<\t~\u00B2\u00F44\u00FA\u00E9\u0087\u00C9\u00E4\u00C9\x1FSY\u00D3\u00F8\u00E9\u00A2g,\u00CF*\u009E\x0B<\u00AF}!\u00FB\u00A2iFs\u00A6{\u00D6|\u00F6\u00DE\u009C\u00CB\u00DC\u00D4|\u00D0\u00FC\u009B\u0097\t/7\x16r_Q_U,\n/6,\u00A9.]_\u00B6\\\x1E}\u00ED\u00F3z\u00E1\r\u00ED\u00CD\u008F\u0095\u00FC\u00B7\u00ACo\u008F\u00BD\u0093yw\u00F5\u00BD\u00F1\u00FB{\u00AB\u009E\u00AB\x0B\x1F\u00E8\x1F6?\u00EE\u00FB\u00C4\u00FB\u00A9\u00FE\u00B3\u00FA\u00E7\u00FE5\u00C7\u00B5\u00E7_b\u00BE\u00FC\u00F8Z\u00B4\u00CE\u00BB~\u00EE\u009B\u00F6\u00B7\u00DB\u00DF=\u00BE/\u00FEH\u00D9 nT\u00FE\u0094\u00FD\u00D9\u00F5\u00CB\u00F6\u00D7\u00F4f\u00CC\u00E6&-\u0080\x1E\x00\x00\x008\x00@CC\x01>\u00D6\x03P\u00BD\x00\u00D8G\x01\x18\u0098~\u00DF)\u00FE\x00\u0087\x00\u00A0\x00@\x04!\u00B0\u0081b\u0098G\u00E4\u0090X\u00A4\x0F\u00E5E\x13\u00D1I\u009C5\u00EE&f\u0085=\u00C2\u00C7\x10X\t\u00FD\u00C4\u009D$C2\u0091\u00FC\u008C\u00A1\u0093\u00F1\x18\u00A5\u0094Z\u00CF4\u00CD\u00C2\u00C2j\u00CBV\u00C8>\u00C4\u00C9\u00CA\u00B5\u009D\u00FB\x02/\u00C6\x17\u00C0\u00DF-(\"\u00B4Ox]4XlRb\u009B\u00E4\u0090\u00B4\u0092L\u0089\u00EC\x1By\u00EB-5\n_\u0094\u00CC\u0094\u00F7\u00AB\u008C\u00AAQ\u00D5M5\x124\u008Fi\u00F5i\u00CF\u00E8\u00FC\u00D4\u00E3\u00D6\u00977\u00D01\u00B40r6\x0E2I0\u00CD5;b\u00DEh\u00D1k\u00F9\u00D0jy\u00EB\u00A6\r\u00A7\u00ED\x16;3{\u009Fm\x11\x0E\u00C9\u008EyN\u00E5\u00CE5.\u008D\u00AE\u00EDn\u00FD\u00EE\u00C3\x1Ec\u009EO\u00BD^x\u00CF\u00FB,m\x7F\u00BBc\u00C9w\u00DAo\u00C4\u00BF7\u00A0)\u00F0D\u00D0\u00FE\u00E0\u00F4\u0090\u00D0P\u00A70\u00BDp\u0089\b\u00A6\u0088/\u0091/\u00A2\x06\u00A3\x1Bb\u00F6\u00C7\u00D2\u00E2\\hZ\u00F1|\u00F1\x1B\u00F4\u00E7\t}\u0089uIy\u00C9\u00A1)\u00D6\u00A9\u00F2i\fi\u00AF\u00D3\u00EFe4\u00EF\u00AC\u00DC\u0095\u009B\u0099\u00B2;>\u008B\u009E\u009D\u009ES\u00B4\u00E7Tnw\u00DE\u008B\u00BD\u00E4\x02\u00FDBZQ]\u00F1\u00C4~\u0086\x12\u00FD\u00D2\u0098\x03'\u00CAF\u00CA\x7F\x1E\u00DAr\u00D8\u00A7\u00A2\u00E8H[\u00E5L\x15c\u00B5\u00C61\u00BF\u00E3\u0085'Zj\u00A6Na\u00B5\nu\u00EE\u00A7w\u009F9w\u00F6A\u00FDz\u0083\u00C8y\u00BB\u00C6\u009D\x17Z.~h\u00D2m.\u00BD\u00FC\u00FE\u008A\u00CF\u00D5\u00FBm\x0E\u00ED\u008F:\u00F5\u00BB\x12\u00AF5\\\u009F\u00EEa\u00ECU\u00EBs\u00BF\x11\u00DF\u009Fw\u00B3\u00ECV\u00C5@\u00C5`\u00D9\u00ED\u0082;{\u0086\u00F6\u00DE\u00DD?\u00BC\u00FF^\u00DE_\u0089#\x1E\u00F7\x15\u00EF\u00FF\x18\u00ED{\u00901\u00A69\u00F6\u00E5\u00E1\u00E3G\u009D\u00E3U\x13\u00BB\x1E\u00FB=1}*9I\u009E|;\u00F5`\u00BA\u00F5Y\u00D5\u00F3]/\u00FCg\u00CCge\u00E7X\u00E6\u00BE\u00CD\u00BFz9\u00B10\u00F4\u00EA\u00C6\u00E2\u00B5\u00A5\u00CE\u00E5\u00CE\u00D7g\u00DE\u0094\u00AC$\u00BF\u00F5}g\u00F1^~\u0095eu\u00ED\u00C3\u00E4\u00C7\u009EO\u00A7>\u00E7\u00AD\u0085\x7F\u00B1\u00FD\u00AA\u00B4\u00CE\u00BE\u00FE\u00F5\u00DB\u00F4\u00F7\u00BE\x1F\u00B5\x1B\u00B9?C~\u0099o\u008Amn\x02\x00\x01\u00F8\u00C0\x18Ra\x00aG\u00EC\u0090\x03\u00C8\x0BT\r-A?\u00E1\u00FCp\x13\u0098\x1B\u00F6\fO#0\x11\u00DA\u0089!$>\u00D2$\u00F9\x18C\x18\u00A3)\u00C5\u0080\u00EA\u00CA\x14\u00CE\u009C\u00C5r\u0092\u00F5\x06\u00DB2\x07'\u00A79W\x1Aw\x13\u00CF{>E~\u00BA\u00C0u!Faw\u0091\u00F3\u00A2\u009B\u00E2&\x12\u00D9\u0092\u00BDR\x1B2Z\u00B2\u0091r\u00C7\u00E5\u0087\u00B7|T\u00E4TRS\u00DE\u00AA\u00E2\u00A3\x1A\u00A6\x16\u00AF\u009E\u00A6\u00B1K3]+R\u00DBG\u00C7N\u00D7@OY_\u00CC\u0080\u00D3\u0090d\u00F8\u00DD\u00E8\u00AD\u00F1\u00AC\u00C9\u00B8\u00E9]\u00B3\x1E\u00F3+\x16\u00F5\u0096\u0095V\x05[S\u00AC\u00C3m\u00BCl\u00B7\u00DAi\u00DBKo\u00E3t\u00C0\x1C>;\u00CE9=p\u00EEsiv=\u00E1V\u00E0\u009E\u00E0\u00E1\u00EBi\u00ED\u00A5\u00E6-\u00E8C\u00F0y\u00B7}bG\u00B7o\u009D_\u0091\x7F\\\u0080k\u00A0z\x10%h.\u00B83\u00A4444L?\u009C5\u00FCU\u00C4\u00B5\u00C8\u00B2\u00A8\u0090h\u00DD\x18\u00E6\u0098\u00F9\u00D8\u00F6\u00B8\x02\u009AW\u00BC|\u00FC\x06}$\u00E1d\"=\u00C9,\u00993y1\u00A53u_\u009Ao\u00BAr\x06\u009A\u00F1xg\u00D3\u00AE\u00E2\u00CC\u0098\u00DDnY\u00E6\u00D9\u00BA9:{\fr\u00B7\u00E6y\u00E6\u00C7\u00EE\u00DD[p\u00A6\u00F0f\u00D1l\u00F1\u00AF\u00FD\x02%:\u00A5\u00EE\x07\x12\u00CA\x0E\u0094_88t\u00E8U\x05zD\u00A0R\u00F3\u00A8SULu\u00F1\u00B1\x0B\u00C7GO|9)v\u00CA\u00B1vO]\u00E7\u00E9\x0Fg\x15\u00EB\u00E3\u00CF]m\u00F8\u00DA\u00A8sa\u00E7\u00C5\u009E&h6\u00B9\u00BC\u00A7e\u00E0*\u00BE\u00D5\u00AA\u00AD\u00A0\u00FDv'\u00B1\u00CB\u00E2Z\u00CE\u00F5\u00EE\u00EE\u00CF\u00BDR}.72\u00FAO\u00DC\u00BCvk|`y\u00F0\u00EB\x1Dl\u0088\u00FD\u00AE\u00E8\u00B0\u00D2=\u0083\u00BF\u00ECF\u00BC\u00EF\u0087\u008F\u00A6<\u00C8\x1F;\u00FC\u00B0\u00F6Q\u00D3\u00F8\u00F5\u0089\u00A1\u00C7\x13O\x16\u009E~\u009E\u00C2Ms<\u0093|\u00AE\u00FD\u00C2n&l\u00B6nn\u00F9\u00A5\u00F4\u0082\u00F7\u00AB\u00FC\u00C5\u00F3K\u00B7\u0097g_\u00AF\u00AF0\u00BD\u0095|g\u00F4\u00DEg5\u00EB\u00C3\u00E8'\u00B5\u00CF\x07\u00D7>}u^\u00BF\u00FA\u009D\u00E7G\u00DE\u00C6\u00FA\u00AF\u0094\u00CDM\x00\u00C0\u0080\x15\u00E4`\x1BdA\x1FBDt\u0091D\u00A4\x1DEQ{\u00F4$\u00FA\x03\u00E7\u008B\u00BB\u008B\u00E9cmxm|?\u00C1\u00910O\u00CC \u00F1\u0093n\u0093\u00F73\x041\u00EAS\u00F8)\u00BF\u00A8sL\u00C3\u00CC\u00AD,gX+\u00D9J\u00D8\x0B8\u00F28\u00F3\u00B9\u008A\u00B9\x0F\u00F2\u00D4\u00F06\u00F2u\u00F0w\x0Bt\x0B\u00F6\b\u00F5\n\u00F7\u0088\\\x13m\x15k\x14?.Q,\u0099$\u00B5]\u00DAXFL\x16d\u00A7\u00E4\u00DA\u00E5\u008B\u00B7\u00B8+\u0088(\u00BCVlU\u00CAR\u00B6U\u00E1R\u0099UmTKR7\u00D2 k<\u00D4<\u00AE\x15\u00AE\u00AD\u00AE\u00BD\u00AE\u00D3\u00A3\u009B\u00A7g\u00AB\u00CF\u00A6?iPk\x18i\u00A4j\u00B4a<hRf\u00BA\u00C3L\u00CE\u00EC\u00AB\u00F9M\u008BRK\x1F+i\u00AB\u008F[{\u00AC\u008Bl\u00DCmEm\u00DF\u00D8\u00B5\u00D9gm\u00B3s\u00E0r\u0098ultJp\u00D6sA]\u00EE\u00BA\u0096\u00BBy\u00BB\u008B\u00B8/z\\\u00F2L\u00F2\u00D2\u00F3F\u00BD\u0087|J\u00B7\u00BB\u00EC\u00E0\u00DA\u00F1\u00D4\u00B7\u00DAo\u0087\u00BF\u00A0\u00FF\u00B3\u0080\u00E3\u0081;\u0082\x04\u0082&\u0083+C\u00DCC\u00D9C\u00EF\u0087\x15\u0087[D@\u00C4\u00B5\u00C8\u00E4(\u0095\u00A8\u0095\u00E8\u00FA\u0098\u00C0X\u0081\u00D8\u00C7q\x07i\u00DB\u00E2I\u00F17\u00E8\u00E9\tj\t+\u0089g\u0092|\u0093\u00B9\u0093\u00EF\u00A7\u00ECM5J]OkN\u008F\u00C8\x10\u00C9x\u00BA\u00F3\u00D0.\u00D7L\u00DE\u00CC\u0085\u00DD\x1DY\u0087\u00B2\u00D3rB\u00F7l\u00CF\u00F5\u00CA\u00F3\u00C9\x0F\u00D9\u009BT\u0090WXQt\u00B6\u00B8m\u00DF\u00E0\u00FE\u00F1\u0092\u0085\u00D2\u00CFe\u00B8r\u00F6\u0083b\u0087\u0094\x0F\u00EBV\u0098\x1D\u00B1\u00A9t:\u00EAU\x15X\x1Dwl\u00F7\u00F1\u0083'.\u00D4\f\u009F|_+Y\u0097vz\u00F4\u00ACt}\u00E6\u00B9\u0089\u00F3\n\u008D\u00B9\x17\u00A6.\u00A94\x154?o\u00D1\u00BCR|\u00F5E\u009BZ\u00FB\u00DE\u008E\u00E9.\u00B5kE\u00D7\u00E7z\u00F4{+\u00FB\u00BE\u00F4\u00BB\u00DEl\x1D\u0090\x1E<}Gah`8\u00EA/\u0089\u0091\u0095\u00D1\u00DBc\u0097\x1F5L4?\u00B91\u00F9\u00EC\x19\u00BCP\u009E\u00AD\x7F\u0099\u00BFX\u00F4\u00BA\u00FD\x1D\u00F3\u0087\u00825\u009E\u00F5\u00D6\r\u008F\u00CDM\u0080\u00DFoK\x00\x00\x04M\u00803\u00F3\x00\u00EE\u00A7\x00\u009C|\x00\u00EA\u00E5\x01$\u00AB\x01\u00988\x00\x1C\u00A9\x00\u00AE:\u0080\u009A\u0096\x02\u00F2\u00F4( V\u0097\u00FE9?\u00A8 \r\u0096\x10\n{\u00E1\x1C\f\u00C1\x1B\u0084\tQA\u00DC\u0090t\u00E48r\x1D\u0099B6PA\u00D4\b\rD\u00F3\u00D1\u00F3\u00E8}\u00F43\u008E\x1Fg\u0082\x0B\u00C7\x1D\u00C0u\u00E2\u00E60FL\x03\u00F3\u00C7\u00F6a\x1D\u00D8K<\x1B\u00DE\b\x1F\u008B?\u0085\x1F'0\x10L\b\u00A9\u0084\x16\u00C2\nQ\u0086\x18F\u00AC'.\u0093\x14II\u00A4^2#\u00D9\u009B|\u0081\x01a\u00F0dhadb\u008Ce\x1C\u00A3hSNRIT:\u00F59\u0093\rS'\u00B3\fs\x15\x0B\u0095%\u009B\u00E5+k\x1C\u00EB\x12[\x10\u00DB\x0B\u00F6@\u00F6E\u008E\x18\u008E/\u009C\u00D9\\L\\\u00C7\u00B9\u0095\u00B8o\u00F2\u00F8\u00F0\u00AC\u00F1\u0096\u00F1\u00A9\u00F0=\u00E4O\x11\x10\x14\x18\x15\u00DC+d*\f\u00C27D\u00F2D\u00ED\u00C5x\u00C5\u0096\u00C4\u00AFI\u0094IFJYJK\u00CAPd\u00D6d\u00E7\u00E4\u00C6\u00E4om\u00E9R\u00B8\u00A2\u00D8\u00AC\u00D4\u00A4\u00DC\u00A2\u00D2\u00A1\u00DA\u00A76\u00AC\u00FE\\\u00E3\u0083\x16\u00A6\u00CD\u00A9#\u00AE\u00AB\u00A0\u00A7\u00A2\u00AFl g(b\u00C4f\u008C\x1A\u00BF7\u00992\u00ED5\u00AB5/\u00B0\u0088\u00B3\u00F4\u00B42\u00DD\u00AAd-d\u00C3l\u008B\u00B3]\u00B7[\u00B5\x7F\u00BDm\u00C1a\u00CEq\u00D6\u00E9\u00A5\u00F3\x1B\u0097O\u00AE?\u00DD\u00C9\x1E\u00DC\u009E\u00D2^:\u00DE\u00F6>A\u00DB3v\x1C\u00F6m\u00F6\x1B\u00F1\x7F\x1B\u00C8\x14\u00A4\x16\u00EC\x15\u00B2;\u00B4.l |>\u00E2g\x14[\u00B4h\u008C\\\u00ACb\u009C\x02M6^\u008C\u00CE\u0095@N\u00F8\u009E\u00B8\u009C\u00CC\u0097b\u009F\u009A\u009B\u00D6\u009B\u00FEk\u00A7\u00C5\u00AE\u0083\u0099o\u00B2\u00EC\u00B3\u00AF\u00EDQ\u00CF\u00ED\u00CC\u00B7\u00DE;_\u00B8\u00B7Xt\u00DF\u00A5\x12\u00E3\u00D2\u0099\u00B2\u00B2\u0083\u009E\u0087\r\u008EX\x1FM\u00A9\x1E8\u00C1\x7F\u0092\u00A9\x16\u00AD\u00FBv\u00E6c\u00FD\u00BB\u0086\u0095\u00C6\u0095\u008B\u00EF\u009B\u00D6.\u00FF\u00BCJj\u00E3\u00EFP\u00EA2\u00BF\u00EE\u00D5\x13\u00D1\u0097\u00DC\u009Fy+kp\u00D7\u009D\u00E4\u00BB\u00D1\u00F7\u00FCG\u008AG;\u00C6^\u008F\u008B>\u00DE\u00F1\u00B4f\u00EA\u00D5s\u0095\u0099\u00EC\u00B9\u00F1\x05\u00F9\u00C5\u0082\u00E5\u00C5\x15\u00ABw\u00E7?\u00B0|\u00CAX{\u00BB\x1E\u00FA}\u00F1'ms\x13\x00\u0098A\x11\u009C \t\u00AA\u00A0\x17^\"\u008C\u0088*\u00E2\u0083\u00E4\"\r\u00C80\u00F2\x1E\u00E5@uQ\x7F\u00B4\x00mF\u009F\u00E2p8\x05\u009C\x17.\x0Fw\x19\u00F7\x02\u00A3b\u00FAX\x14V\u008D\u00FD\u0085\u00FD\u00C2\u00AB\u00E0\u0083\u00F1\u00C7\u00F0\u00E3\x04f\u0082\x1D\u00A1\u0090p\u0087\u00C8@\u00B4'\u0096\x13'I\u0092$:\u00A9\u009F\u00CCE\u008E&\x0F2\u00883\u00E40,0\u00DA0vQ\u00E4)5TN\u00EA>&\x02S\x0E30g\u00B3\u00E0X\nX\u0099X\u008F\u00B0\u0089\u00B15\u00B1\x1B\u00B3\u008Fs\u00C4p\x128k\u00B9L\u00B8\u00E6\u00B8\u00F3y\x14x&x\u00B3\u00F9\u0094\u00F9f\u00F8\x0F\nl\x15\u00C4\x04\u00FB\u0085\u00F6\b[\u008APD&Dk\u00C5\x12\u00C4-%\u0084$\u00D6%'\u00A4\u00DA\u00A5O\u00CA\x1C\u0091-\u0093+\u0091/\u00D9R\u00AEP\u00A5xV\u00A9U\u00F9\u008E\u00CAs\u00D5\u00AF\u00EA\u009C\x1A\u00BA\u009AAZ%\u00DA\u00DD:\u00EF\u00F5$\u00F5\u00FD\f\u00AA\r\u00A7\u008C\u0085L\u0082M\u009B\u00CC~XXX\x16[\r[\u00E3m\u00B4l\x03\u00ED\u00F2\u00ED\u00CFn\u00BB\u00E10\u00E9\u00B8\u00EA\u008C\u00B9p\u00B9\u00CA\u00B9\x19\u00BB{y$x\u0096z]\u00F2\x1E\u00F1\u00F9\u00B0\u0083\u00CB\u00D7\u00C0/\u00D4\u00BF,\u00A0'\u00F0]\u00B0x\u0088ghi\u00D8`\u00F8\u00CFH\u00F5\u00A8\u0088\u00E8\x131\x0F\u00E2P\u009Aj\u00BC?\u00BD$\u00E1Z\u00E2R2s\u008AV\u00AA\x7FZqzG\u00C6\u00E2.\u00EEL\u00EB\u00DD\u00BB\u00B2Z\u00B2_\u00EF\x11\u00CF\u00DD\u0091W\u0095\u00FF\u00A4\u0080\u00BB\u00D0\u00AB\u00E8D\u00F1\u00CB\u00FD\n%\u00A9\u00A5\u0083e<\u00E5q\x07\u00EF\x1DV\u00AE\u00A8\u00AEd:ZXM9v\u00F8\u0084t\u00CD\u00EDS\x11u\u0094\u00D3-g\u00BD\u00CFa\r\u00CD\u008D~\x17Y.\u00DDlNmQ\u00BA\u00B2\u00D4Z\u00DF\x1E\u00D1\u00A9\u00D0\u00F5\u00F1zWON\u009F]?\u00F7\u00CD\u00F9\u0081\u00E6\u00DB;\u0087l\u0086y\u00EF\u008D\u008E\u00B8\u00DD\u009F\x7F\u0090\u00FEP\u00E8\u00D1\u00C8D\u00F1\x13\u0097I\u00A9i\u00E4\u00D9\u00DC\u008B\u00C1\u00D9\u00C6\u00F9\u00D2\x05\u00FA\u00A2\u00CB2\u00FF\u00EB\u009A\x15\u00E9\u00B7\u0097\u00DF\x1B\u00AE\u008E|\u00F4\u00FB\u00F4~-\u00EB+\u00F3\u00FA\u00D1\u00EFB?j~\u00F2\u00FD*\u00DD\u00DC\x04\x00n0\x01\x1A\u00D4\u00C0}\u00D8DT\u0091P\u00E4(2\u0080|B\u00C5Pg4\x17mGWp\u00A28O\u00DC\x01\u00DC\x10\u0086\u00C3\f\u00B1t\u00AC\x1D[\u00C3k\u00E0\u0093\u00F1\u00DD\x04<\u00C1\u0081PMxM\u00D4#\x1E .\u0091\u00CCI\u00A7\u00C9$2\u008D<\u00CD`\u00C7\u00D0\u00C7\u00A8\u00C5\u00D8E1\u00A5\u00DC\u00A3zQ_3e2s27\u00B38\u00B0|`\u00AD`3d[f?\u00CE\u00E1\u00C2I\u00E5\u00BC\u00CBU\u00C8m\u00C7\u00C3\u00C63\u00C9{\u0086\u008F\u00CEo\"\u00C0.\u00F0FpP\u00E8\u00B4p\u00BEH\u0094\u00A8\u00AB\u0098\u0089\u00B8\u00AA\u0084\u00B4\u00A4\u00B0\x14\u00BF4\u009F\u008C\u0088\u00AC\u00BC\u009C\u008E\u00BC\u00ED\u0096\x00\u0085\u009D\u008AUJ\u00DD\u00CA/U\u0099\u00D4\u00F4\u00D5\u00E9\x1A\u00974\u00DFkk\u00E8d\u00EB\u008E\u00E9\u00CB\x18\u00E4\x1A\u00BE2\u00B63i7\u00937?m)jUg-k\u00D3jgn\u00FF\u00C4\u0081\u00E6Dqnv\u00F5q'{t{%\u00FB\u00A8o_\u00F7\u00ED\u00F3\u00DF\x1F\u00E8\x1B\u00AC\x19J\t{\x1AQ\x15e\x1D\u00BD\x1C\u009B\x16\u00B7\x11\u009FH_HtL\u00BA\u0092\u00C2\u009AJO{\u0094\u00A1\u00BB\u00F3T&\u00E3\u00EE\u00D4\u00AC\u00C5\x1C\u00CF=\u00F7\u00F2L\u00F3\u00BB\n\u00D4\x0B\u00DB\u008A\r\u00F6\r\u0095x\u0095\u00BE)\u00CB<\u00C8z\u00A8\u00B6B\u00E9H\u00E7Q\u00C3\u00AA\u00DEc\u00FA\u00C7\u00DBj\u00F0'\u00EDN\x1D\u00AE}qZ\u00EEL\u00CA\u00D9\u0081s\u009C\r\u00A1\u00E7\u00BB.0]\f\u00BEt\u00BD\u0099\u00F32\u00ADe\u00F8\u00AALkQ\u00DB\u00DB\x0E\u00A7\u00CE\u00F6kB\u00D7\u00F3\u00BB\u00DF\u00F5z\u00F4\u00DD\u00E8\u0097\u00BFy\u00F8\u00D6\u00E6`\u00E4\u00EDGC\u00C6w\x1B\u00EFq\u00FD\u00950rw\u0094\u00FFA\u00F8\u00D8\u0085\u0087\u00AF\u00C7\u00C5'<\x1E\u00E7<9\u00F7\u00F4\u00EE\u00E4\u00C2\u00D4\u00C63\u0096\u00E7\u00C2/\u00E4g4fu\u00E7\f\u00E7\u008D_\x1A/\x18\u00BE\u00D2]\u00D4ZRY\u0096{-\u00F6\u0086\u00E9\u00CD\u00F2J\u00E7\u00DB\u0094w\x1A\u00EFV\u00DE\u009FY\u00F5\u00FA\u00C0\u00F0\u00E1\u00FA\u00C7\u00D0O,\u009F:>o_\u0083\u00B5\u00DA/\u00A6_\u00E6\u00BE\u00EE^\x17X\u00EF\u00FC\u00E6\u00F6m\u00F5\u00FB\u00BE\x1F\u00D2?\u00FA7|7\u00D6\x7F\x1E\u00FC\u00A5\u00F4kh3xs\x13 !TM\x15\x00\x00\x10\u008A)\x00\u00FE\u00F9\u00E6\u00E6')\x00b9\u00C0\u00CF\u00B2\u00CD\u00CD\x1F\u00B5\u009B\u009B?\u00EB\x00p\u00D3\x00}\u00D1\u00BF\u00FF+\x00\x00\b,\x00\u00C7\u00EA\u00FE\u00B77\u00D2\u00FF\x00\x1E\u00E1~\u0097\u00DA\u00DF0\u00FA\x00\x00\x00 cHRM\x00\x00m\u0098\x00\x00s\u008E\x00\x00\u00FA\u00CC\x00\x00\u0084\u00FA\x00\x00y\u0081\x00\x00\u00FD\x13\x00\x000m\x00\x00\x12)\r\x1E&N\x00\x00\x01\u008BIDATx\u00DA\u00B4\u00951\u00AA\u00C2@\x10\u0086\u00FF\u008Di--\u00C4^!\u0085\x17\u00B0\x15\u00C4\u0083x\x01\u00EFa/V\u0096\u00B6\x1E\u00C1V\u00B1\x12E\u00B0\u00B2\x10l\u00C5B\u00D8\u00DD\u0099\u00BC\u00E2\u00B1\u009B\u009D\x18\x13\u00DFC\x07\x06\x12v\u00E7\u00CB\u00BF\x7F&\x13\u00D5n\u00B7S|)b\x00\x18\u008F\u00C7\x1F\u0085*\u00A50\u0099L~\u00E1\u00D6Z\\\u00AFW\u00B1\u0098\u00A6)\u0094R\u0085\u00C5n-M\u008B\x0F\u00DDl63\u00E5D\x04f\u00FE\u0098rkm\x06gf\x0F\x7F\u00A5\u00F6/\u00E1X\u00A5\u00CA\x07\u0083\x01\u00A2(\u00F2Y\u00AB\u00D5\u00C4\u00BDR\n\u00FD~\x1F\u00A3\u00D1HXFD\x19\u00DCZ\x0Bf.\u00F5\u00F9\x1D\u00A5y[\"\u00F74\x07w\x1613.\u0097K)t\u00BD^\u00A3\u00D1h\u0088\x1A\u00C7\u00F1p\"\u00F2\u00D6\u00B8k\"\u00C2v\u00BB}\t6\u00C6`6\u009Ba8\x1C\u008A\x1A\"\u0092\u00CA\u008D1\x1E\u009CWq<\x1E\x0B\u00E1\u00CB\u00E5\x12a3\u0084\u00E9<\x7F\u00B2%\u009F\u00FB\u00FD\x1E\u00C6\x18\x01\u00BE\u00DF\u00EFX,\x16\u00E8\u00F5z\u00855\u00EE\x1DDa\u00B7\u0084\u00F6\u0084\u00B9\u00DB\u00ED\x04|>\u009F\u00A3\u00D5j\x15\u00AAffi\u008B\u00D6\x1A\u00D6Z\u009F\u00C6\x18\u0091\u0087\u00C3\x01\u008F\u00C7\x03\x00p>\u009F\u00B1Z\u00AD\u0090$\u00C9\u00D3>\u0097\x02\u00FE\u00CA\u009207\u009B\r\x00`:\u009D\u00A2\u00D3\u00E9\u0094\u00EE\x15}\u00EE\u0094\u0097\u00F5\u00F9\u00E9tB\u00BD^\u00C7\u00EDvC\u00B7\u00DB\u00F5\u00EA\u008ABk\u009D\u00C1\u00C3\u00A3T\u00F5u\u0092$\u0095{]\x03\x14~\u00FE\u00F9\u00A9X5\x05\u00F3!lq\u00CA\u00FF\x0B\u00CB\u008B\x11SQk\u008D8\u008E\u00DF\u009E\u00E7U\u00F3\u00DDy\u00AE\u00BE\u00F9\u009B\u00FB\x19\x00\u00DCp\u00E61\u00B7\u00E3\x12\u00CD\x00\x00\x00\x00IEND\u00AEB`\u0082";
                this.w.res1.gr2.gr5.bt.image = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x17\x00\x00\x00\x14\b\x06\x00\x00\x00f\u00BE\u00A6\x0E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x17OiCCPPhotoshop ICC profile\x00\x00x\u00DA\u00D5yiX\u008D]\u00D8\u00F6u\u00DF\u00FB\u00DES\u00ED\u00DD<\u00CF\u00F3\u00A8y\u009E\u00E7\u00D2\u00A4y\u00A6y\x1Ew\u00BB\u00B9H\u00A5\u00D2@)$\u0085($\u00A1D#\r\u00A2H\u009E$\n\x15\x1A\u00A4\"d\u0088\x10\u00BD?x\u009E\u00E7\x1D\u00BE\u00F7\u00C7w\x1C\u00DF\u009F\u00EF\u00FC\u00B1\u008E\u00F38\u00AFk\u009D\u00D7u\u00FDZ\u00C7Z\x0B\u0080w%\u0080F\u008BFY\x00bb\x13\u00E9\u00CEV\u00A6\"\u009E^\u00DE\"\u00C4) \u00820p\u0083\x06\u00C8\x05\x04%\u00D0L\x1C\x1D\u00ED\u00E0\x7F\u00C5\u0097\t@\x00\x00\x1E*\x04\u00D0h\u00D1\u00F0\x7F\x07\u00D6\u00E0\u0090\u0084 \x00\u00C4\x11\x00\x02\u0083\x13\u0082b\x00\u0090\u00AB\x00\u00A8i\x10\u008D\u009E\b\u0080[\x07\u0080\u00D1\u0094DZ\"\x00v\x07\x008\u00E8\u009E^\u00DE\x00\u00D84\x00p\u0084\u00FD\u00E6\u00AB\x00\u00C0\x11\u00E8\u00E9\u00E5\r\u0080\u00C7\x00\u0080\u0083\u00EE\u00EAl\x06\u0080\u00E7\x01 Q\x02\x02\u00E8a\x00T\t\x00\x10I\x0E\nK\x04\u00A0\u009A\x03\x10\u00D8b\u0083#b\x01\u00D8=\x01\b\u0086A\u00E1\x01\u00C1\x00\u00BC\u0095\x00\u00B0%&&.\x18\u0080\u00F7\x16\x00\u00C8\x04\u00FE'\u009F\u00B0\u00FF\u00E2\x19\u00F8\u008Fg@@\u00D8?\u00FC\u00F7,\x00\x00@2\u008FH\u00A0E\x07\u00A4\u00C1\u00FFk\u00C4D'\u00FD]\u0083\r\x00(\u00B1\u00D1\u00DB\u00EC\x00\u0080\x0B\x00\u0096\u0082\x03\u00CCm\x01@\x00\x00~\u00D1\u00A2\x1D\u00ED~\u00E7 |!\u00B1n.\x7F\u00F8\u0096\u00D8\u00C0m\x0E\x7F\u00B8a(\u00DD\u00D2\u00F9\u00F7^\u00C4\u0091\u0096h\u00EA\f\x00<\x00H(-\u00D1\u00D1\u00F5\u008F\u009E\u0099\x1En\u00B6\r\x00(\x00\u00C8\u00A1\u0090\x04\u008B\u00BF}NF\x06\u00D88\x02\x00\x13\x00\u00D2BOrv\x03\x00\t\x00\u00A4/!\u00D9\u00C5\x02\x00X\x00\u0090\u0097\u00E9\u00E1\u00AE\x1E\x7Fr>\x07\u0087\u0098\u00FF\u00D1Q44\u00C2\u00D2\u00FA\x0Fg\u008BH\u00B4v\x05\x00\x0E\x00T,*\u00CE\u00D6\u00F9w-T\x13l!\x1AB \t\u00E8\x10\x02\u00B1\u00A0\x00v`\x06\u00E6\x7FV\x05\b\u0085\x00\u00A0C2\u0084@\x02D\u00C1+\u00A0C\f\u00D8B\x1CDC\x1C\u00D0A\u00E4O\u009E\u00D9\u00FFP,!\x00\u00E8\x10\x06!\u00FF\u00CDQ\x04\u0082 \x0E\u0092\u00FE\u00A9\u00F9\u00B7\u00FA\u00AFC\x04\x04C\u00DC?z\u00C0\u009F\x18\x1DB \u00C1/\"\u00E7\u00DF\n\u00FF\u00D9/\x1A\u00E2\u0080\u00AE\u00DC\u00A8\u00BC\u00AC\u00BC\u00F1w\x1C\u0093\u00C2T1\r\u00CC\x143\u00C0\f1\x1D\x10\u00C1\u00B80>P\u00C0\u00D41m\u00CC\x043\u00C2\u00F40\rL\x07,\u00E1%\u00D0!\u00EC\u00EF\x1E\u00FD\"r\u00E81-\u00A1\u00C9\u0095qi\u00BA\u00EE\u00E1\x7Ff\b\u00FCg\x02wx\tt\u0088\u00F8?N\u00F4\u00A7\u00F7\u0091\u0095\u00F6\u0095\x7F:\u0084\u00C4\u0090\u00D4D\x00\x00\u00B38Z\x1A=\",<Q\u00C4\u0084F\u008B\x0E\u00D9\"b\x1D\x1B\u00A4\u00B8EDUYE\x05\u00FE\x7F\u0082\u00A7\u0097\u00B7\u00C8o\u00F6\u00C9\x19\x10\x00@\u00B8\u00EE\u00FF\u00AB\u00C5\u00A9\x00\u00E8\x04\x01 {\u00FE\u00D5\u00FC\u00DF\x01\u00B4G\x02\u0090\u00D8\u00FE\u00D5\u00A4\u00DA\x01\u0098U\x01\u0086\u008E\x04%\u00D1\u0093\x7Fk\x18\x00\x00\x1E\x18\u0080\x198\u0080\x17\u0084@\x1Cd@\x01TA\x13\u00F4\u00C0\x18,\u00C0\x06\x1C\u00C0\x15\u00BC\u00C0\x17\u0082 \x1Cb\u0080\x0E)\u00B0\x13\u00B2!\x1F\u008A\u00E1\x00\x1C\u0086*\u00A8\u0081:8\x07\x17\u00A1\x05\u00DA\u00E1:\u00DC\u0080A\x18\u0086Q\x18\u0087)\u0098\u0081\x05x\x03\u00AB\u00F0\x05~ \bBD\u00A8\b;\u00C2\u008B\b#\u0092\u0088<\u00A2\u008Ah#\u0086\u0088\x05b\u00878#^\u0088?\x12\u0086\u00C4\"I\u00C8Nd\x0FR\u008C\u0094#U\u00C8)\u00A4\x01\u00B9\u008Ct\"7\u0090!\u00E4\x01\u00F2\x14\u0099E\u0096\u0091\u008F\u00C8w\x14\u0087RP\x0ET\x10\u0095B\u0095Pm\u00D4\x04\u00B5E]\u00D1\x1Dh\x18\x1A\u008F\u00A6\u00A3\u00B9h\tZ\u0089\u00D6\u00A2\x17\u00D06\u00F4\x06:\u008C\u008E\u00A33\u00E8\x1Bt\r\x078F\x1C\x17N\x14\u00A7\u0080\u00D3\u00C6\u0099\u00E1\x1Cp\u00DE\u00B8P\x1C\x1D\u0097\u0089+\u00C2U\u00E0jq\u0097p]\u00B8\u00DB\u00B8\u0087\u00B8\x19\u00DC\n\u00EE\x1BF\u00C0\u00D81\x11L\x01\u00D3\u00C3\u00B6bnX\x10\x16\u008Feb\u00FB\u00B0*\u00EC\x1C\u00D6\u0086\u00DD\u00C2\x1Eb\u00B3\u00D8*\u00F6\x0BO\u00C5\x0B\u00E0\u00E5\u00F1\u00BAxk\u00BC'>\f\u009F\u0082\u00CF\u00C7W\u00E0\u00CF\u00E2[\u00F1\x03\u00F8q\u00FC\x02\u00FE\x0B\u0081@\u00E0\"H\x13\u00B4\b[\t^\u0084HB\x06a\x1F\u00E18\u00A1\u0089\u00D0Gx@\u0098'\u00AC\x11\u0089D^\u00A2<\u00D1\u0080\u00E8@\f &\x12\u00F3\u0089G\u0089\x17\u0088\u00BD\u00C41\u00E2\x02q\u009D\u00C4H\x12&\u00A9\u0092,I\u00DE\u00A4XR\x0E\u00A9\u0082t\u009E\u00D4C\x1A#-\u0092~\u0090Y\u00C8\u0092d]\u00B2\x039\u0098\u009CF.%\u009F&w\u0091\u00EF\u0093\x17\u00C8?\x18X\x19\u00A4\x19\f\x18\\\x19\"\x19\u00B2\x19*\x19.1\f0L3|bdd\x14c\u00D4atb\u008C`\u00CCb\u00ACdlf\u00BC\u00C38\u00CB\u00F8\u008D\u00C2F\u0091\u00A3\u0098Q\u00B6S\u0092(%\u0094zJ\x1F\u00E5)\u00E5\x13\u0095J\u0095\u00A2\x1AS\u00BD\u00A9\u0089\u00D4\x12j\x03\u00F5&\u00F59u\u009D\u0089\u009DI\u0091\u00C9\u009A)\u0098i7S5S\x1B\u00D3\x18\u00D3;f2\u00B3$\u00B3\t\u00B3/s:s\x05\u00F3\x15\u00E6\u00FB\u00CC+,d\x16)\x163\u0096\x00\u0096L\u0096j\u0096N\u0096\u00C7,k\u00AC\u00EC\u00AC*\u00AC\x0E\u00AC1\u00AC\u00FBX\u00CF\u00B3\x0E\u00B1.\u00B1\x11\u00D9\u00A4\u00D8,\u00D8\u0082\u00D9r\u00D9\u00EA\u00D8n\u00B2\u00CD\u00B3\u00E3\u00D8\u00C5\u00D9\u00CD\u00D8\u0083\u00D8\u00F7\u00B0\u009Ff\x1F`_\u00E0 pHsXsDr\x14s\\\u00E4\x18\u00E1X\u00E5d\u00E3T\u00E7t\u00E7L\u00E5\u00AC\u00E6\u00EC\u00E6\u009C\u00E1\u00C2qIqYsEs\u0095r\u00B5pMp}\u00E7\x16\u00E46\u00E1\x0E\u00E1.\u00E4\u00BE\u00C4=\u00C6\u00FD\u0095\u0087\u009F\u00C7\u0098'\u0084\u00A7\u0088\u00A7\u0089g\u009C\u00E7;\u00AF\b\u00AF\x05o\x14o\x19o;\u00EF3>\u008CO\u008E\u00CF\u0089/\u0085\u00EF\x04\u00DF\x00\u00DF\n?\x07\u00BF\x1E\x7F\x10\x7F\x11\x7F\x0B\u00FF\u00A4\x00* '\u00E0,\u0090!P'pO`MPH\u00D0J\u0090&xT\u00F0\u00A6\u00E0\u008A\x10\u0097\u0090\u00B1P\u00A4\u00D0!\u00A1\x1E\u00A1eavaC\u00E1\b\u00E1C\u00C2\u00BD\u00C2\u00AFE8ELD\u00A2E*En\u0089\u00AC\u008A\n\u0088n\x15M\x12=%:\"\u00FACLZ\u00CCM,G\u00ACI\u00EC\u00998\u0083\u00B8\u00B6x\u00A8\u00F8!\u00F1~\u00F1U\ta\t{\u0089\u009D\x12\u008D\x12\u0093\u0092dIm\u00C9p\u00C9#\u0092\u00B7%\u00BFJIKyH\u00ED\u0095j\u0097Z\u0092\u00E6\u0091\u00B6\u0096N\u0097n\u0094\u009E\u0096\u00A1\u00CA\x18\u00C9\u00C4\u00CB\u00D4\u00CA<\u0092%\u00C8j\u00CBF\u00C9\x1E\u0097\x1D\u0095C\u00E54\u00E4\u00C2\u00E5\u00AA\u00E5\u00EE\u00CB\u00A3\u00F2\u009A\u00F2\x11\u00F2\u00C7\u00E5\x1Fl\u00C1o\u00D1\u00D9\x12\u00BB\u00A5v\u00CBc\x05\u008A\u0082\u0089B\u00B2B\u00A3\u00C2\u00AC\"\u0097\u00A2\u009Db\u008Eb\u00BB\u00E2;%\t%o\u00A52\u00A5\u00DBJ\u00BF\u00945\u0094\u00A3\u0095O+O\u00A9\u00B0\u00A9\u00D8\u00A8\u00E4\u00A8t\u00A9|T\u0095S\rR\u00ADV}\u00A4FU\u00B3T\u00DB\u00AD\u00D6\u00A1\u00F6A]^=D\u00FD\u0084\u00FA\x13\rv\r{\u008D\u00BD\x1A\u00FD\x1A?5\u00B54\u00E9\u009A\u00974\u0097\u00B5$\u00B4\u00FC\u00B5\u008Ei=\u00D6\u00E6\u00D0v\u00D4\u00DE\u00A7}G\x07\u00AFc\u00AA\u00B3[\u00E7\u00BA\u00CE7]M\u00DDD\u00DD\x16\u00DD\u00F7z\nzQz\u00E7\u00F5\u0096\u00F4\u00A5\u00F5C\u00F4O\u00EB\u00CF\x1B\u0088\x19\x04\x18\u009C2\u00981\x141\u00F47<i8c$j\x14`Tk4g,n\x1Cl|\u00D6x\u00D1D\u00D6$\u00D2\u00E4\u0082\u00C9;SeS\u00BAi\u00AB\u00E9W3]\u00B3]f}\u00E68s+\u00F3\"\u00F3\x11\x0B6\x0B7\u008B*\u008B\u00E7\u0096b\u0096a\u0096\u008D\u0096\u00ABV\x1AV\x19V}[\u00F1[m\u00B7\u0096m}l-h\x1Dd\u00DD`\u00BDj\u00A3e\u00B3\u00CB\u00E6\u0096-\u00C5\u00D6\u00C5\u00B6\u00CAv\u00CEN\u00CE\u008En\u00D7e\u008F\u00DA\u00DB\u00D8\x1F\u00B4\u009F\u00DE&\u00B9-v[\u00BB\x038X;\x1Ctx\u00E6(\u00ED\x18\u00EFx\u00CD\u0089\u00E0\u00E4\u00E8T\u00ED\u00F4\u00CAY\u00C5y\u00A7\u00F3m\x17v\x17?\u0097\u00F3._\\M]K]\u00A7\u00DCd\u00DC\u0092\u00DC\u00FA\u00DD\u0099\u00DD\u00B7\u00BB7\u00B8\x7F\u00F50\u00F7(\u00F7\u0098\u00F1T\u00F2\u00DC\u00E59\u00EC\u00C5\u00E7\x15\u00E1\u00D5\u00E1M\u00F4v\u00F7>\u00EB\u00BD\u00E6c\u00E1s\u00D8ga\u00BB\u00C6\u00F6\u00FC\u00ED\x13;\u00A4w\u00A4\u00EE\x18\u00F2\u00E5\u00F3\u008D\u00F6\u00ED\u00F6c\u00F6\x0B\u00F0\u00BB\u00E2\u008F\u00F7\u00F7\u00F0?\u00EF\u00BF\x11\u00E0\x10P\x1B\u00B0\x16h\x1Dx,p5\u00C8,\u00E8H\u00D0\u009B`\u00E3\u00E0C\u00C1\u00CB!\x06!\u00E5!\u008B\u00A1\x06\u00A1\u00E5\u00A1Ka\x06a\x07\u00C3\u0096\u00C3\u008D\u00C2+\u00C2W\"\u00CC\"\u00AA\">Dn\u008D\u00AC\u0089\u00FC\x1A\u00E5\x10U\x1F\u00B5\x19\u00ED\x11\u00DD\x14C\u008A\u00F1\u008F\u00E9\u008Ce\u008B\u008D\u008A\u00BD\x15'\x14\u0097\x1A\u00F7\u0080&O\u00CB\u00A7\u00CD\u00C4\u00EB\u00C6\x1F\u008E_\u00A5\u00DB\u00D2\u00CF& \t;\x12:\x129\x12i\u0089\u00F7\u0092d\u0092\u00F2\u0092f\u0093\r\u0093\u00AB\u0093\u00D7S\u00DCS\u00AE\u00A4\u00B2\u00A6\u00C6\u00A6\u00DEK\u0093K+L[L\u00B7L?\u0093\u0081e\x04e\u00F4\u00EF\x14\u00DD\u0099\u00BDsv\u0097\u00C9\u00AES\u0099Hf`f\u00FFn\u00F1\u00DD\u00B9\u00BB\x17\u00B2\u00AC\u00B2\u00CEe3dGe\u00FF\u0095\u00A3\u009CS\u009E\u00F3y\u008F\u00C7\u009E\u00AE\\\u00C1\u00DC\u00AC\u00DC\u00F9<\u00AB\u00BC\u00C6|\u00A6|z\u00FE\u00E3\u00BDz{k\n\u00B0\u0082\u0088\u0082\u0091B\u00B5\u00C2\u00A3\u0085\u00BF\u008A\u0082\u008B\u00EE\x16+\x17W\x14o\u00EC\x0B\u00DAww\u00BF\u00CA\u00FE\u00CA\u00FD\u009B%\u00A1%#\u00A5\u009A\u00A5'\x0E\x10\x0E\u00C4\x1E\u0098(3*;W\u00CEZ\u009E^>\x7F\u00D0\u00FE`\u00DB!\u0091CE\u0087>\x1F\u00F6;<T\u00A1^Qs\u0084\u00E1H\u00D2\u0091\u0099J\u00BB\u00CA\u008E\u00A3\x12G\x0F\x1C\u00DD\u00A8\n\u00AF\x1A\u00AF6\u00ADn:&p\u00AC\u00F0\u00D8\u00D7\u00E3\u00C1\u00C7\u00C7N\x18\u009F\u00B8T#XS\\\u00F3\u00FDd\u00C4\u00C9'\u00A7\u00ACN\u00B5\u00D5J\u00D5V\u00D4\x11\u00EA\u0092\u00EB^\u009Dv?}\u00FB\u008C\u00F6\u0099\u0086\u00B3|g\u008B\u00CF\u00FE\u00AC\u008F\u00AD\u009F9\u00E7|\u00EEV\u0083VC\u00C3y\u0081\u00F3\u00A5\u008DhcR\u00E3\u00F2\u0085\u00ED\x17F/\u009A_\u00EC\u00B8\u00A4p\u00E9T\x13WSq34'5\u00BF\u00BE\u00EC\x7Fy\u00A2\u00C5\u00B6\u00A5\u00FF\u008A\u00F6\u0095KW%\u00AF\x1Ekeo-jC\u00DA\u00D2\u00DAV\u00DB\u00C3\u00DBg:\u00BC:\x1Et\u00DAt\u00F6w\u00E9u\u00B5^S\u00BCV\x7F]\u00F4zu7gwi\x0FCOn\u00CFfoz\u00EFZ\x1F\u00ADo\u00E5F\u00D8\u008D\u00F9~\u00BF\u00FE\u00A9\u009B\u009E7\x1F\u00DDr\u00BA52`;pg\u00D0r\u00F0\u00E6m\u0093\u00DB\u00BDw\f\u00EE\\\x1F\u00D2\x1D\u00EA\u00BC\u00AB}\u00B7}Xs\u00B8\u00ED\u009E\u00C6\u00BD\u00D6\u00BF4\u00FEj\x1D\u00D1\x1Ci\u00BB\u00AFu\u00BFcTg\u00B4\u00EB\u0081\u00FE\u0083\u009E1\u00A3\u00B1\x1B\x0F\u00CD\x1F\x0E>\u00B2~4<\u00BEm\u00FC\u00C1\u0084\u00DB\u00C4\u0093\u00C7\u00DB\x1F\u00CF<\t~\u00B2\u00F44\u00FA\u00E9\u0087\u00C9\u00E4\u00C9\x1FSY\u00D3\u00F8\u00E9\u00A2g,\u00CF*\u009E\x0B<\u00AF}!\u00FB\u00A2iFs\u00A6{\u00D6|\u00F6\u00DE\u009C\u00CB\u00DC\u00D4|\u00D0\u00FC\u009B\u0097\t/7\x16r_Q_U,\n/6,\u00A9.]_\u00B6\\\x1E}\u00ED\u00F3z\u00E1\r\u00ED\u00CD\u008F\u0095\u00FC\u00B7\u00ACo\u008F\u00BD\u0093yw\u00F5\u00BD\u00F1\u00FB{\u00AB\u009E\u00AB\x0B\x1F\u00E8\x1F6?\u00EE\u00FB\u00C4\u00FB\u00A9\u00FE\u00B3\u00FA\u00E7\u00FE5\u00C7\u00B5\u00E7_b\u00BE\u00FC\u00F8Z\u00B4\u00CE\u00BB~\u00EE\u009B\u00F6\u00B7\u00DB\u00DF=\u00BE/\u00FEH\u00D9 nT\u00FE\u0094\u00FD\u00D9\u00F5\u00CB\u00F6\u00D7\u00F4f\u00CC\u00E6&-\u0080\x1E\x00\x00\x008\x00@CC\x01>\u00D6\x03P\u00BD\x00\u00D8G\x01\x18\u0098~\u00DF)\u00FE\x00\u0087\x00\u00A0\x00@\x04!\u00B0\u0081b\u0098G\u00E4\u0090X\u00A4\x0F\u00E5E\x13\u00D1I\u009C5\u00EE&f\u0085=\u00C2\u00C7\x10X\t\u00FD\u00C4\u009D$C2\u0091\u00FC\u008C\u00A1\u0093\u00F1\x18\u00A5\u0094Z\u00CF4\u00CD\u00C2\u00C2j\u00CBV\u00C8>\u00C4\u00C9\u00CA\u00B5\u009D\u00FB\x02/\u00C6\x17\u00C0\u00DF-(\"\u00B4Ox]4XlRb\u009B\u00E4\u0090\u00B4\u0092L\u0089\u00EC\x1By\u00EB-5\n_\u0094\u00CC\u0094\u00F7\u00AB\u008C\u00AAQ\u00D5M5\x124\u008Fi\u00F5i\u00CF\u00E8\u00FC\u00D4\u00E3\u00D6\u00977\u00D01\u00B40r6\x0E2I0\u00CD5;b\u00DEh\u00D1k\u00F9\u00D0jy\u00EB\u00A6\r\u00A7\u00ED\x16;3{\u009Fm\x11\x0E\u00C9\u008EyN\u00E5\u00CE5.\u008D\u00AE\u00EDn\u00FD\u00EE\u00C3\x1Ec\u009EO\u00BD^x\u00CF\u00FB,m\x7F\u00BBc\u00C9w\u00DAo\u00C4\u00BF7\u00A0)\u00F0D\u00D0\u00FE\u00E0\u00F4\u0090\u00D0P\u00A70\u00BDp\u0089\b\u00A6\u0088/\u0091/\u00A2\x06\u00A3\x1Bb\u00F6\u00C7\u00D2\u00E2\\hZ\u00F1|\u00F1\x1B\u00F4\u00E7\t}\u0089uIy\u00C9\u00A1)\u00D6\u00A9\u00F2i\fi\u00AF\u00D3\u00EFe4\u00EF\u00AC\u00DC\u0095\u009B\u0099\u00B2;>\u008B\u009E\u009D\u009ES\u00B4\u00E7Tnw\u00DE\u008B\u00BD\u00E4\x02\u00FDBZQ]\u00F1\u00C4~\u0086\x12\u00FD\u00D2\u0098\x03'\u00CAF\u00CA\x7F\x1E\u00DAr\u00D8\u00A7\u00A2\u00E8H[\u00E5L\x15c\u00B5\u00C61\u00BF\u00E3\u0085'Zj\u00A6Na\u00B5\nu\u00EE\u00A7w\u009F9w\u00F6A\u00FDz\u0083\u00C8y\u00BB\u00C6\u009D\x17Z.~h\u00D2m.\u00BD\u00FC\u00FE\u008A\u00CF\u00D5\u00FBm\x0E\u00ED\u008F:\u00F5\u00BB\x12\u00AF5\\\u009F\u00EEa\u00ECU\u00EBs\u00BF\x11\u00DF\u009Fw\u00B3\u00ECV\u00C5@\u00C5`\u00D9\u00ED\u0082;{\u0086\u00F6\u00DE\u00DD?\u00BC\u00FF^\u00DE_\u0089#\x1E\u00F7\x15\u00EF\u00FF\x18\u00ED{\u00901\u00A69\u00F6\u00E5\u00E1\u00E3G\u009D\u00E3U\x13\u00BB\x1E\u00FB=1}*9I\u009E|;\u00F5`\u00BA\u00F5Y\u00D5\u00F3]/\u00FCg\u00CCge\u00E7X\u00E6\u00BE\u00CD\u00BFz9\u00B10\u00F4\u00EA\u00C6\u00E2\u00B5\u00A5\u00CE\u00E5\u00CE\u00D7g\u00DE\u0094\u00AC$\u00BF\u00F5}g\u00F1^~\u0095eu\u00ED\u00C3\u00E4\u00C7\u009EO\u00A7>\u00E7\u00AD\u0085\x7F\u00B1\u00FD\u00AA\u00B4\u00CE\u00BE\u00FE\u00F5\u00DB\u00F4\u00F7\u00BE\x1F\u00B5\x1B\u00B9?C~\u0099o\u008Amn\x02\x00\x01\u00F8\u00C0\x18Ra\x00aG\u00EC\u0090\x03\u00C8\x0BT\r-A?\u00E1\u00FCp\x13\u0098\x1B\u00F6\fO#0\x11\u00DA\u0089!$>\u00D2$\u00F9\x18C\x18\u00A3)\u00C5\u0080\u00EA\u00CA\x14\u00CE\u009C\u00C5r\u0092\u00F5\x06\u00DB2\x07'\u00A79W\x1Aw\x13\u00CF{>E~\u00BA\u00C0u!Faw\u0091\u00F3\u00A2\u009B\u00E2&\x12\u00D9\u0092\u00BDR\x1B2Z\u00B2\u0091r\u00C7\u00E5\u0087\u00B7|T\u00E4TRS\u00DE\u00AA\u00E2\u00A3\x1A\u00A6\x16\u00AF\u009E\u00A6\u00B1K3]+R\u00DBG\u00C7N\u00D7@OY_\u00CC\u0080\u00D3\u0090d\u00F8\u00DD\u00E8\u00AD\u00F1\u00AC\u00C9\u00B8\u00E9]\u00B3\x1E\u00F3+\x16\u00F5\u0096\u0095V\x05[S\u00AC\u00C3m\u00BCl\u00B7\u00DAi\u00DBKo\u00E3t\u00C0\x1C>;\u00CE9=p\u00EEsiv=\u00E1V\u00E0\u009E\u00E0\u00E1\u00EBi\u00ED\u00A5\u00E6-\u00E8C\u00F0y\u00B7}bG\u00B7o\u009D_\u0091\x7F\\\u0080k\u00A0z\x10%h.\u00B83\u00A4444L?\u009C5\u00FCU\u00C4\u00B5\u00C8\u00B2\u00A8\u0090h\u00DD\x18\u00E6\u0098\u00F9\u00D8\u00F6\u00B8\x02\u009AW\u00BC|\u00FC\x06}$\u00E1d\"=\u00C9,\u00993y1\u00A53u_\u009Ao\u00BAr\x06\u009A\u00F1xg\u00D3\u00AE\u00E2\u00CC\u0098\u00DDnY\u00E6\u00D9\u00BA9:{\fr\u00B7\u00E6y\u00E6\u00C7\u00EE\u00DD[p\u00A6\u00F0f\u00D1l\u00F1\u00AF\u00FD\x02%:\u00A5\u00EE\x07\x12\u00CA\x0E\u0094_88t\u00E8U\x05zD\u00A0R\u00F3\u00A8SULu\u00F1\u00B1\x0B\u00C7GO|9)v\u00CA\u00B1vO]\u00E7\u00E9\x0Fg\x15\u00EB\u00E3\u00CF]m\u00F8\u00DA\u00A8sa\u00E7\u00C5\u009E&h6\u00B9\u00BC\u00A7e\u00E0*\u00BE\u00D5\u00AA\u00AD\u00A0\u00FDv'\u00B1\u00CB\u00E2Z\u00CE\u00F5\u00EE\u00EE\u00CF\u00BDR}.72\u00FAO\u00DC\u00BCvk|`y\u00F0\u00EB\x1Dl\u0088\u00FD\u00AE\u00E8\u00B0\u00D2=\u0083\u00BF\u00ECF\u00BC\u00EF\u0087\u008F\u00A6<\u00C8\x1F;\u00FC\u00B0\u00F6Q\u00D3\u00F8\u00F5\u0089\u00A1\u00C7\x13O\x16\u009E~\u009E\u00C2Ms<\u0093|\u00AE\u00FD\u00C2n&l\u00B6nn\u00F9\u00A5\u00F4\u0082\u00F7\u00AB\u00FC\u00C5\u00F3K\u00B7\u0097g_\u00AF\u00AF0\u00BD\u0095|g\u00F4\u00DEg5\u00EB\u00C3\u00E8'\u00B5\u00CF\x07\u00D7>}u^\u00BF\u00FA\u009D\u00E7G\u00DE\u00C6\u00FA\u00AF\u0094\u00CDM\x00\u00C0\u0080\x15\u00E4`\x1BdA\x1FBDt\u0091D\u00A4\x1DEQ{\u00F4$\u00FA\x03\u00E7\u008B\u00BB\u008B\u00E9cmxm|?\u00C1\u00910O\u00CC \u00F1\u0093n\u0093\u00F73\x041\u00EAS\u00F8)\u00BF\u00A8sL\u00C3\u00CC\u00AD,gX+\u00D9J\u00D8\x0B8\u00F28\u00F3\u00B9\u008A\u00B9\x0F\u00F2\u00D4\u00F06\u00F2u\u00F0w\x0Bt\x0B\u00F6\b\u00F5\n\u00F7\u0088\\\x13m\x15k\x14?.Q,\u0099$\u00B5]\u00DAXFL\x16d\u00A7\u00E4\u00DA\u00E5\u008B\u00B7\u00B8+\u0088(\u00BCVlU\u00CAR\u00B6U\u00E1R\u0099UmTKR7\u00D2 k<\u00D4<\u00AE\x15\u00AE\u00AD\u00AE\u00BD\u00AE\u00D3\u00A3\u009B\u00A7g\u00AB\u00CF\u00A6?iPk\x18i\u00A4j\u00B4a<hRf\u00BA\u00C3L\u00CE\u00EC\u00AB\u00F9M\u008BRK\x1F+i\u00AB\u008F[{\u00AC\u008Bl\u00DCmEm\u00DF\u00D8\u00B5\u00D9gm\u00B3s\u00E0r\u0098ultJp\u00D6sA]\u00EE\u00BA\u0096\u00BBy\u00BB\u008B\u00B8/z\\\u00F2L\u00F2\u00D2\u00F3F\u00BD\u0087|J\u00B7\u00BB\u00EC\u00E0\u00DA\u00F1\u00D4\u00B7\u00DAo\u0087\u00BF\u00A0\u00FF\u00B3\u0080\u00E3\u0081;\u0082\x04\u0082&\u0083+C\u00DCC\u00D9C\u00EF\u0087\x15\u0087[D@\u00C4\u00B5\u00C8\u00E4(\u0095\u00A8\u0095\u00E8\u00FA\u0098\u00C0X\u0081\u00D8\u00C7q\x07i\u00DB\u00E2I\u00F17\u00E8\u00E9\tj\t+\u0089g\u0092|\u0093\u00B9\u0093\u00EF\u00A7\u00ECM5J]OkN\u008F\u00C8\x10\u00C9x\u00BA\u00F3\u00D0.\u00D7L\u00DE\u00CC\u0085\u00DD\x1DY\u0087\u00B2\u00D3rB\u00F7l\u00CF\u00F5\u00CA\u00F3\u00C9\x0F\u00D9\u009BT\u0090WXQt\u00B6\u00B8m\u00DF\u00E0\u00FE\u00F1\u0092\u0085\u00D2\u00CFe\u00B8r\u00F6\u0083b\u0087\u0094\x0F\u00EBV\u0098\x1D\u00B1\u00A9t:\u00EAU\x15X\x1Dwl\u00F7\u00F1\u0083'.\u00D4\f\u009F|_+Y\u0097vz\u00F4\u00ACt}\u00E6\u00B9\u0089\u00F3\n\u008D\u00B9\x17\u00A6.\u00A94\x154?o\u00D1\u00BCR|\u00F5E\u009BZ\u00FB\u00DE\u008E\u00E9.\u00B5kE\u00D7\u00E7z\u00F4{+\u00FB\u00BE\u00F4\u00BB\u00DEl\x1D\u0090\x1E<}Gah`8\u00EA/\u0089\u0091\u0095\u00D1\u00DBc\u0097\x1F5L4?\u00B91\u00F9\u00EC\x19\u00BCP\u009E\u00AD\x7F\u0099\u00BFX\u00F4\u00BA\u00FD\x1D\u00F3\u0087\u00825\u009E\u00F5\u00D6\r\u008F\u00CDM\u0080\u00DFoK\x00\x00\x04M\u00803\u00F3\x00\u00EE\u00A7\x00\u009C|\x00\u00EA\u00E5\x01$\u00AB\x01\u00988\x00\x1C\u00A9\x00\u00AE:\u0080\u009A\u0096\x02\u00F2\u00F4( V\u0097\u00FE9?\u00A8 \r\u0096\x10\n{\u00E1\x1C\f\u00C1\x1B\u0084\tQA\u00DC\u0090t\u00E48r\x1D\u0099B6PA\u00D4\b\rD\u00F3\u00D1\u00F3\u00E8}\u00F43\u008E\x1Fg\u0082\x0B\u00C7\x1D\u00C0u\u00E2\u00E60FL\x03\u00F3\u00C7\u00F6a\x1D\u00D8K<\x1B\u00DE\b\x1F\u008B?\u0085\x1F'0\x10L\b\u00A9\u0084\x16\u00C2\nQ\u0086\x18F\u00AC'.\u0093\x14II\u00A4^2#\u00D9\u009B|\u0081\x01a\u00F0dhadb\u008Ce\x1C\u00A3hSNRIT:\u00F59\u0093\rS'\u00B3\fs\x15\x0B\u0095%\u009B\u00E5+k\x1C\u00EB\x12[\x10\u00DB\x0B\u00F6@\u00F6E\u008E\x18\u008E/\u009C\u00D9\\L\\\u00C7\u00B9\u0095\u00B8o\u00F2\u00F8\u00F0\u00AC\u00F1\u0096\u00F1\u00A9\u00F0=\u00E4O\x11\x10\x14\x18\x15\u00DC+d*\f\u00C27D\u00F2D\u00ED\u00C5x\u00C5\u0096\u00C4\u00AFI\u0094IFJYJK\u00CAPd\u00D6d\u00E7\u00E4\u00C6\u00E4om\u00E9R\u00B8\u00A2\u00D8\u00AC\u00D4\u00A4\u00DC\u00A2\u00D2\u00A1\u00DA\u00A76\u00AC\u00FE\\\u00E3\u0083\x16\u00A6\u00CD\u00A9#\u00AE\u00AB\u00A0\u00A7\u00A2\u00AFl g(b\u00C4f\u008C\x1A\u00BF7\u00992\u00ED5\u00AB5/\u00B0\u0088\u00B3\u00F4\u00B42\u00DD\u00AAd-d\u00C3l\u008B\u00B3]\u00B7[\u00B5\x7F\u00BDm\u00C1a\u00CEq\u00D6\u00E9\u00A5\u00F3\x1B\u0097O\u00AE?\u00DD\u00C9\x1E\u00DC\u009E\u00D2^:\u00DE\u00F6>A\u00DB3v\x1C\u00F6m\u00F6\x1B\u00F1\x7F\x1B\u00C8\x14\u00A4\x16\u00EC\x15\u00B2;\u00B4.l |>\u00E2g\x14[\u00B4h\u008C\\\u00ACb\u009C\x02M6^\u008C\u00CE\u0095@N\u00F8\u009E\u00B8\u009C\u00CC\u0097b\u009F\u009A\u009B\u00D6\u009B\u00FEk\u00A7\u00C5\u00AE\u0083\u0099o\u00B2\u00EC\u00B3\u00AF\u00EDQ\u00CF\u00ED\u00CC\u00B7\u00DE;_\u00B8\u00B7Xt\u00DF\u00A5\x12\u00E3\u00D2\u0099\u00B2\u00B2\u0083\u009E\u0087\r\u008EX\x1FM\u00A9\x1E8\u00C1\x7F\u0092\u00A9\x16\u00AD\u00FBv\u00E6c\u00FD\u00BB\u0086\u0095\u00C6\u0095\u008B\u00EF\u009B\u00D6.\u00FF\u00BCJj\u00E3\u00EFP\u00EA2\u00BF\u00EE\u00D5\x13\u00D1\u0097\u00DC\u009Fy+kp\u00D7\u009D\u00E4\u00BB\u00D1\u00F7\u00FCG\u008AG;\u00C6^\u008F\u008B>\u00DE\u00F1\u00B4f\u00EA\u00D5s\u0095\u0099\u00EC\u00B9\u00F1\x05\u00F9\u00C5\u0082\u00E5\u00C5\x15\u00ABw\u00E7?\u00B0|\u00CAX{\u00BB\x1E\u00FA}\u00F1'ms\x13\x00\u0098A\x11\u009C \t\u00AA\u00A0\x17^\"\u008C\u0088*\u00E2\u0083\u00E4\"\r\u00C80\u00F2\x1E\u00E5@uQ\x7F\u00B4\x00mF\u009F\u00E2p8\x05\u009C\x17.\x0Fw\x19\u00F7\x02\u00A3b\u00FAX\x14V\u008D\u00FD\u0085\u00FD\u00C2\u00AB\u00E0\u0083\u00F1\u00C7\u00F0\u00E3\x04f\u0082\x1D\u00A1\u0090p\u0087\u00C8@\u00B4'\u0096\x13'I\u0092$:\u00A9\u009F\u00CCE\u008E&\x0F2\u00883\u00E40,0\u00DA0vQ\u00E4)5TN\u00EA>&\x02S\x0E30g\u00B3\u00E0X\nX\u0099X\u008F\u00B0\u0089\u00B15\u00B1\x1B\u00B3\u008Fs\u00C4p\x128k\u00B9L\u00B8\u00E6\u00B8\u00F3y\x14x&x\u00B3\u00F9\u0094\u00F9f\u00F8\x0F\nl\x15\u00C4\x04\u00FB\u0085\u00F6\b[\u008APD&Dk\u00C5\x12\u00C4-%\u0084$\u00D6%'\u00A4\u00DA\u00A5O\u00CA\x1C\u0091-\u0093+\u0091/\u00D9R\u00AEP\u00A5xV\u00A9U\u00F9\u008E\u00CAs\u00D5\u00AF\u00EA\u009C\x1A\u00BA\u009AAZ%\u00DA\u00DD:\u00EF\u00F5$\u00F5\u00FD\f\u00AA\r\u00A7\u008C\u0085L\u0082M\u009B\u00CC~XXX\x16[\r[\u00E3m\u00B4l\x03\u00ED\u00F2\u00ED\u00CFn\u00BB\u00E10\u00E9\u00B8\u00EA\u008C\u00B9p\u00B9\u00CA\u00B9\x19\u00BB{y$x\u0096z]\u00F2\x1E\u00F1\u00F9\u00B0\u0083\u00CB\u00D7\u00C0/\u00D4\u00BF,\u00A0'\u00F0]\u00B0x\u0088ghi\u00D8`\u00F8\u00CFH\u00F5\u00A8\u0088\u00E8\x131\x0F\u00E2P\u009Aj\u00BC?\u00BD$\u00E1Z\u00E2R2s\u008AV\u00AA\x7FZqzG\u00C6\u00E2.\u00EEL\u00EB\u00DD\u00BB\u00B2Z\u00B2_\u00EF\x11\u00CF\u00DD\u0091W\u0095\u00FF\u00A4\u0080\u00BB\u00D0\u00AB\u00E8D\u00F1\u00CB\u00FD\n%\u00A9\u00A5\u0083e<\u00E5q\x07\u00EF\x1DV\u00AE\u00A8\u00AEd:ZXM9v\u00F8\u0084t\u00CD\u00EDS\x11u\u0094\u00D3-g\u00BD\u00CFa\r\u00CD\u008D~\x17Y.\u00DDlNmQ\u00BA\u00B2\u00D4Z\u00DF\x1E\u00D1\u00A9\u00D0\u00F5\u00F1zWON\u009F]?\u00F7\u00CD\u00F9\u0081\u00E6\u00DB;\u0087l\u0086y\u00EF\u008D\u008E\u00B8\u00DD\u009F\x7F\u0090\u00FEP\u00E8\u00D1\u00C8D\u00F1\x13\u0097I\u00A9i\u00E4\u00D9\u00DC\u008B\u00C1\u00D9\u00C6\u00F9\u00D2\x05\u00FA\u00A2\u00CB2\u00FF\u00EB\u009A\x15\u00E9\u00B7\u0097\u00DF\x1B\u00AE\u008E|\u00F4\u00FB\u00F4~-\u00EB+\u00F3\u00FA\u00D1\u00EFB?j~\u00F2\u00FD*\u00DD\u00DC\x04\x00n0\x01\x1A\u00D4\u00C0}\u00D8DT\u0091P\u00E4(2\u0080|B\u00C5Pg4\x17mGWp\u00A28O\u00DC\x01\u00DC\x10\u0086\u00C3\f\u00B1t\u00AC\x1D[\u00C3k\u00E0\u0093\u00F1\u00DD\x04<\u00C1\u0081PMxM\u00D4#\x1E .\u0091\u00CCI\u00A7\u00C9$2\u008D<\u00CD`\u00C7\u00D0\u00C7\u00A8\u00C5\u00D8E1\u00A5\u00DC\u00A3zQ_3e2s27\u00B38\u00B0|`\u00AD`3d[f?\u00CE\u00E1\u00C2I\u00E5\u00BC\u00CBU\u00C8m\u00C7\u00C3\u00C63\u00C9{\u0086\u008F\u00CEo\"\u00C0.\u00F0FpP\u00E8\u00B4p\u00BEH\u0094\u00A8\u00AB\u0098\u0089\u00B8\u00AA\u0084\u00B4\u00A4\u00B0\x14\u00BF4\u009F\u008C\u0088\u00AC\u00BC\u009C\u008E\u00BC\u00ED\u0096\x00\u0085\u009D\u008AUJ\u00DD\u00CA/U\u0099\u00D4\u00F4\u00D5\u00E9\x1A\u00974\u00DFkk\u00E8d\u00EB\u008E\u00E9\u00CB\x18\u00E4\x1A\u00BE2\u00B63i7\u00937?m)jUg-k\u00D3jgn\u00FF\u00C4\u0081\u00E6Dqnv\u00F5q'{t{%\u00FB\u00A8o_\u00F7\u00ED\u00F3\u00DF\x1F\u00E8\x1B\u00AC\x19J\t{\x1AQ\x15e\x1D\u00BD\x1C\u009B\x16\u00B7\x11\u009FH_HtL\u00BA\u0092\u00C2\u009AJO{\u0094\u00A1\u00BB\u00F3T&\u00E3\u00EE\u00D4\u00AC\u00C5\x1C\u00CF=\u00F7\u00F2L\u00F3\u00BB\n\u00D4\x0B\u00DB\u008A\r\u00F6\r\u0095x\u0095\u00BE)\u00CB<\u00C8z\u00A8\u00B6B\u00E9H\u00E7Q\u00C3\u00AA\u00DEc\u00FA\u00C7\u00DBj\u00F0'\u00EDN\x1D\u00AE}qZ\u00EEL\u00CA\u00D9\u0081s\u009C\r\u00A1\u00E7\u00BB.0]\f\u00BEt\u00BD\u0099\u00F32\u00ADe\u00F8\u00AALkQ\u00DB\u00DB\x0E\u00A7\u00CE\u00F6kB\u00D7\u00F3\u00BB\u00DF\u00F5z\u00F4\u00DD\u00E8\u0097\u00BFy\u00F8\u00D6\u00E6`\u00E4\u00EDGC\u00C6w\x1B\u00EFq\u00FD\u00950rw\u0094\u00FFA\u00F8\u00D8\u0085\u0087\u00AF\u00C7\u00C5'<\x1E\u00E7<9\u00F7\u00F4\u00EE\u00E4\u00C2\u00D4\u00C63\u0096\u00E7\u00C2/\u00E4g4fu\u00E7\f\u00E7\u008D_\x1A/\x18\u00BE\u00D2]\u00D4ZRY\u0096{-\u00F6\u0086\u00E9\u00CD\u00F2J\u00E7\u00DB\u0094w\x1A\u00EFV\u00DE\u009FY\u00F5\u00FA\u00C0\u00F0\u00E1\u00FA\u00C7\u00D0O,\u009F:>o_\u0083\u00B5\u00DA/\u00A6_\u00E6\u00BE\u00EE^\x17X\u00EF\u00FC\u00E6\u00F6m\u00F5\u00FB\u00BE\x1F\u00D2?\u00FA7|7\u00D6\x7F\x1E\u00FC\u00A5\u00F4kh3xs\x13 !TM\x15\x00\x00\x10\u008A)\x00\u00FE\u00F9\u00E6\u00E6')\x00b9\u00C0\u00CF\u00B2\u00CD\u00CD\x1F\u00B5\u009B\u009B?\u00EB\x00p\u00D3\x00}\u00D1\u00BF\u00FF+\x00\x00\b,\x00\u00C7\u00EA\u00FE\u00B77\u00D2\u00FF\x00\x1E\u00E1~\u0097\u00DA\u00DF0\u00FA\x00\x00\x00 cHRM\x00\x00m\u0098\x00\x00s\u008E\x00\x00\u00FA\u00CC\x00\x00\u0084\u00FA\x00\x00y\u0081\x00\x00\u00FD\x13\x00\x000m\x00\x00\x12)\r\x1E&N\x00\x00\x018IDATx\u00DA\u00B4U\u00B1\u008D\u00840\x10\x1C\x0Bbb*p\x17\u0088Z\x10%\u00D0\x07\r\x00\x12\t\x01\u009DP\x02\x11)=\u00D8\u008B\u00FD\u00C1k\r\x06\u00DF\u008BG\u00DC\u0086\u00D83;;\x1E-BJi\u00F1\u00A5\u008A\x01\u00A0\u00AA*X\u00FBn\u008F\u00BA\u00AE\x7F\u00C9\u0089\b\u00EB\u00BA\x06/\t!`\u00AD\u0085\x10\"x\u00CEgGqi\u009A\u00EE\u00CA\u0089\b\u00C6\u0098\u00D7To\u00DB\u00B6\u0093\x1Bc^\u00B1\u00859Xh\u00CC\u009D\u0088\u00C8\u008D>\u00CF3\u00A6i\u0082\u00D6\u00DA\x03K)\u0091\u00E7\u00F9\u00FF\u0094\x13\x11\u00AC\u00B5\u00AE\u00F3\u00B2,\x18\u00C7\x11I\u0092x\u00A0\u00B6m\u00D14\u00CD\u0085LJ\u0089,\u00CB\u009C\u00FFD\u00B4\u0093[k=\u00CF\u00FB\u00BE\u00F7\u00C6\u00E4*\u00CB\x12eY^\u00C8\u00BB\u00AEs\u00F8\u00A3H\u00A7\u009CGa\u00CF\u00E6y\u00BE\u00EDuQ\x14\x18\u0086\u00C1\u00A5\u00C6\u00B3e\u00DB6O\u00B91\x06R\u00CA\u00DB\u00E4\u00C6\x18\x0F\u00CFo\x15L\u00CB\u0093\u00E40&h\u00CBY\u00F9\u00D3l\x07\u00D3r\u008C\u00DD\x13rN\b\x00(\u00A5|\u00CF\u008FV<!\x0F\u00E1c\u00EEt\u00EC\u00FCT9\u00E7\u00DCS\u00AE\u00B5~\u0085<\u0098\u0096s\x14\u00BB\u00AE\u00FBHr\u00DE\u0092\u00A1\u00ADxyP\u00FE\x10\u00BA\u00FCW\u0085\u009Ay\u00CA\u0095R\u0088\u00A2\u00E8\u00D6\u00FE\u00BE\u00B3\u00CF\u00D9s\u00F1\u00CD\u00DF\u00DC\u00CF\x00\u00BC\u00EA,cS\\?\u00AD\x00\x00\x00\x00IEND\u00AEB`\u0082";
                this.w.res1.gr3.ok.onClick = this.w.res1.gr3.can.onClick = function () { keepRf.w.close(); };
                this.w.res1.gr2.gr3.gr1.visible = 1;
                this.w.res1.gr2.gr3.gr2.visible = 0;
                this.w.res1.gr2.gr3.gr3.visible = 0;
                this.w.res1.gr2.gr1.drop.selection = 0;
                this.w.res1.gr2.gr2.drop.selection = 0;
                this.w.res1.gr2.gr2.chk.value = 0;
            }

            var gui = {};
            gui.settingWin = this.w;
            gui.slWinst = this.w.res0.gr1.slWinst;
            gui.slWexpst = this.w.res0.gr1.slWexpst;
            gui.slWinEdtxt = this.w.res0.gr3.edBox1;
            gui.slWexpEdtxt = this.w.res0.gr3.edBox2;
            gui.slWin = this.w.res0.gr2.slWin;
            gui.slexp = this.w.res0.gr2.slexp;

            this.w.res1.gsld.spacing = 3;
            gui.pg2sld1Text = this.w.res1.gsld.sl1Text;//数值1
            gui.pg2sld2Text = this.w.res1.gsld.sl2Text;//数值2
            gui.pg2sld1 = this.w.res1.gsld.sl1;//滑块1
            gui.pg2sld2 = this.w.res1.gsld.sl2;//滑块2

            gui.sl1 = this.w.res0.gr2.sl1;
            gui.sl2 = this.w.res0.gr2.sl2;
            gui.sl3 = this.w.res0.gr2.sl3;
            gui.sl4 = this.w.res0.gr2.sl4;
            gui.ed01 = this.w.res0.gr3.ed1;
            gui.ed02 = this.w.res0.gr3.ed2;
            gui.ed03 = this.w.res0.gr3.ed3;
            gui.ed04 = this.w.res0.gr3.ed4;
            gui.ok = this.w.res1.gr3.ok;
            gui.can = this.w.res1.gr3.can;
            gui.list1 = this.w.res1.gr1.gr1.gr3; //列表1
            gui.list2 = this.w.res1.gr1.gr2.gr3; //列表2
            gui.Input = this.w.res1.gr1.gr1.gr1.Input; //List1 导出
            gui.Output = this.w.res1.gr1.gr1.gr1.Output; //List1 导出
            gui.Input.helpTip = '导入工具栏';
            gui.Output.helpTip = '导出工具栏';
            gui.Bar1icon = this.w.res1.gr1.gr1.gr1.Bar1icon; //List1栏图案
            gui.Input.image = File.decode(ICON.inBar);
            gui.Output.image = File.decode(ICON.OutBar);
            gui.Bar1icon.image = File.decode(ICON.viewImg);
            gui.create1 = this.w.res1.gr1.gr1.gr1.create;
            gui.create2 = this.w.res1.gr1.gr2.gr1.create;

            var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
            gui.Keep = this.w.res1.gr1.gr2.gr1.KeepBtn; // 保留按钮
            gui.Jump = this.w.res1.gr1.gr2.gr1.Jump; //复制到其他大组
            gui.Keep.alignment = gui.Jump.alignment = ["right", "center"];
            gui.Keep.preferredSize[1] = gui.Jump.preferredSize[1] = 22;
            gui.Keep.value = eval(String(PanelWHPrefXML.Panel.listKeep)); //是否打钩
            gui.Jump.value = eval(String(PanelWHPrefXML.Panel.listJump)); //是否打钩
            gui.Keep.helpTip = '移动后保留按钮？';
            gui.Jump.helpTip = '跳转到移动后的组？';
            gui.moveGup = this.w.res1.gr1.gr2.gr1.moveGup; //移动到其他大组
            gui.moveGup.image = decodeURIComponent("%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%12%10%06%00%00%00%0B%40%22S%00%00%03%15IDATH%C2%89%C2%BD%C2%96MH*a%14%C2%86%C3%9F%C2%B1I%C3%83(%26%C2%A8%C2%88%08%C3%BB%C2%81R(L0B*%02%2B%C3%A9%07%05%C2%93%12%17%25-D%22(%24%C3%9A8%C3%AB%20%C2%88%C2%A0m%C3%90%2C%22*%C2%83%C2%A2M%10%112%C2%8B%16%C2%83%C2%84-%02C%C2%98U%C2%8BV%C3%95%C2%A2%C2%85D%C2%84%C2%9C%C3%AFnn%C2%B7K1%C3%BE%C3%B4%C3%B7.%3F%C2%9E%C3%AF%C2%9Cg1s%C3%8E%C3%87Ec%C3%91X4%C3%86%18~9%C2%BA%25%C3%9D%C2%92n%09%C2%A05Z%C2%A35m%C2%8E'%0BY%C3%88%C3%B2%C3%B3B%C2%A5%C2%8B%C2%A5%C2%8B%C2%A5%C2%8B%C2%80%23%C3%A4%089B%40E%C2%B8%22%5C%11%06N%2C'%C2%96%C2%93%1C%C3%BDy%C3%AA%C2%A0%0E%C3%AA%C3%B89%C2%B1%C3%B6%C2%BD%C3%B6%C2%BD%C3%B6%3D%C3%80%C2%B5%C3%AD%C3%9Avm%03%C2%82%20%08%C2%82%00%5C%C3%B9%C2%AE%7CW%3E%C2%80D%12I%C3%8C!%C3%88l%C3%8C%C3%86l%C3%9F'TwWwWw%07%C2%8C%26G%C2%93%C2%A3I%C2%A0%C3%89%C3%97%C3%A4k%C3%B2%7D%C3%A4%C3%98%04%C2%9B%60%13%40%C2%BE%C3%BE%3CuS7u%7F%5E%C2%A8%3CU%C2%9E*O%01C%0DC%0DC%0D%C2%80%5D%C2%B6%C3%8Bv%19%C3%A0%C2%8C%C2%9C%C2%913j%C3%9F%7B%15%C2%A4%04%25(%C2%91K%C2%B0%C2%87z%C2%A8%C2%A7p%C2%A1%12%C2%A9D*%C2%91%00%C2%87%C3%A8%10%1D%220x%3Ax%3Ax%0A%18d%C2%83l%C2%90%0B%C2%AF%C2%83%00%02%08%00%C3%A4'%3F%C3%B9s%09%C3%B6S%3F%C3%B5%C3%A7%C2%AFg%3E4%1F%C2%9A%0F%01%C2%B7%C3%A0%16%C3%9C%02P%3DP%3DP%3D%00%40%C2%85%0A%C2%B5%08%C2%B1%C2%BFa%01%16%60%01%C2%80%C3%BA%C2%A8%C2%8F%C3%BA%C2%B49n%C2%BEq%C2%BEq%C2%BE%C3%B1%C3%A3%C2%98%C2%A9y%C2%A8y%C2%A8y%00%C3%9Cg%C3%AE3%C3%B7%19%60%C2%B6%C2%9A%C2%ADfk%C3%B1%22Z%C2%B9%C3%94_%C3%AA%2F%C3%B5%C3%80A%C3%9BA%C3%9BA%C2%9B6%C3%87%C3%93%18%C2%8D%C3%91%C3%98%C3%9B%C3%81%C3%B0%C3%96%C3%B0%C3%96%C3%B0%16%C3%A0%C2%8C%3B%C3%A3%C3%8E8%C2%A0%C2%B3%C3%AA%C2%AC%C2%BAo%14%C3%BB%C2%97)La%0Ax%C3%9F%C3%BF%C2%A3%C2%A0%C2%97%C2%BC%C3%A4%7D%3BP%24ER%24%40(%13%C3%8A%C2%842%C3%80%0E%3B%C3%AC%3F%C3%A0%C3%87%C2%82%2C%C3%88%C2%82%00%C3%A9IOzm%C2%8E%C2%9B%C2%AD%C2%9A%C2%AD%C2%9A%C2%AD%C3%92%C3%9E%24%C2%A6%0D%C3%93%C2%86i%03%18%3F%1A%3F%1A%3F%02L%C2%92I2I_%17L%C2%B6%24%5B%C2%92-%40%2C%1B%C3%8B%C3%86%C2%B2%C3%9A%1CO34C3%C3%9A%C3%80M%C3%A2%26q%C2%93%00%C3%96%C3%B7%C3%97%C3%B7%C3%97%C3%B7%C2%81.%C2%A5K%C3%A9R%00%C3%8F%C2%AAg%C3%95%C2%B3%0AT%C3%AET%C3%AET%C3%AE%14%2F%C3%88%C3%82%2C%C3%8C%C3%82%00%3D%C3%91%13%3Dis%5C(%1DJ%C2%87%C3%92%C3%85%C3%AFbC%C3%8A%C2%902%C2%A4%00%C2%97%C3%AAR%5D*%C3%A0%C2%8C8%23%C3%8E%08%C3%80%13O%3C%C3%A5%C2%BF%7F%C3%B1x%C3%B1x%C3%B1%08%C3%ACfv3%C2%BB%19m%C2%8Eg%11%16a%C2%91b%C3%B5%C2%80g%3C%C3%A3%19%C3%801%C2%8Eq%0C%40%C2%89%2Bq%25%0Ex3%C3%9E%C2%8C7%03t%C3%8A%C2%9Drg%C2%AE%C2%B98%C2%879%C3%8C%01%C3%AC%C2%85%C2%BD%C2%B0%C2%97%1C%C2%82%C3%B9va%C2%A1%C2%B9%C3%87%3D%C3%AE%01lb%13%C2%9B%00Z%C2%A9%C2%95Z%09%C2%98T'%C3%95I%15%C2%A8%C2%B7%C3%94%5B%C3%AA%C3%BF%7B%14%C2%B0%05%C2%B6%C3%80%16%C3%B2%C3%BF%24%3C%5Bf%C3%8Bl%C3%B9%C3%AB%C2%82%C3%AF%C3%B3%3A%C2%BFW%C3%8EW%C3%8EW%C3%8E%C2%81%C3%9E%C2%91%C3%9E%C2%91%C3%9E%11%C3%80s%C3%AB%C2%B9%C3%B5%C3%9C%02%C3%88%22%C2%8B%2C%C3%80jY-%C2%AB%C3%95%C2%AE%C3%83%05%C3%93%C3%81t%C3%B0%13%C3%9F%C3%A0gc%14%C2%8D%C2%A2Q%04%C2%9Am%C3%8D%C2%B6f%1Bp%C3%AD%C2%BF%C3%B6_%C3%A7Xu%C3%9Ctt%3A%3A%1D%C3%BD%C3%BD%07k%C2%A1%C3%B9%03%C3%AA%C2%91E%C3%92%C3%B5g%40%C2%99%00%00%00%00IEND%C2%AEB%60%C2%82");
            gui.moveGup.helpTip = '移动/复制 到其他的组';

            gui.del1 = this.w.res1.gr1.gr1.gr1.del;
            gui.del2 = this.w.res1.gr1.gr2.gr1.del;
            gui.up1 = this.w.res1.gr1.gr1.gr1.up;
            gui.up2 = this.w.res1.gr1.gr2.gr1.up;
            gui.down1 = this.w.res1.gr1.gr1.gr1.down;
            gui.down2 = this.w.res1.gr1.gr2.gr1.down;
            gui.ed1 = this.w.res1.gr1.gr1.gr2.ed; //名称编辑框
            gui.ed2 = this.w.res1.gr1.gr2.gr2.ed; //名称编辑框
            gui.dyGroup = this.w.res1.gr2.gr3;
            gui.typeDrop = this.w.res1.gr2.gr1.drop; //按键监听
            gui.typeDrop.itemSize[1] = 30;

            gui.GetBtnXml = this.w.res1.gr2.gr1.GetBtnXml; //获得单个按钮XML数据
            gui.GetBtnXml.text = 'GET';
            // gui.subImage = this.w.res1.gr2.gr2.subimage; //子菜单图标
            // gui.subImage.image = ListLittleViewIcon; //子菜单图标

            gui.getEffectName = this.w.res1.gr2.gr3.gr1.bt1;
            gui.getEffectPara = this.w.res1.gr2.gr3.gr1.bt2;
            gui.getAppendEffect = this.w.res1.gr2.gr3.gr4.bt1;
            gui.transferToFile = this.w.res1.gr2.gr3.gr4.bt2;
            gui.browseAnimation = this.w.res1.gr2.gr3.gr2.bt1;
            gui.browseScript = this.w.res1.gr2.gr3.gr3.bt1;
            gui.ed3 = this.w.res1.gr2.ed; //表达式编辑框

            // gui.ed3.graphics.backgroundColor = gui.ed3.graphics.newBrush(gui.ed3.graphics.BrushType.SOLID_COLOR, [.3, .3, .3, 1]);
            // gui.ed3.graphics.foregroundColor = gui.ed3.graphics.newPen(gui.ed3.graphics.PenType.SOLID_COLOR, [.8, .8, .8], 3);
            // gui.ed3.size[1]=this.w.res1.gsld.sl2.value //表达式框高度
            // gui.ed3.preferredSize.height = 200;

            gui.ed4 = this.w.res1.gr2.gr4.ed;
            /** checkbox可否使用多按键监测*/
            gui.modifiers = this.w.res1.gr2.gr2.chk;
            gui.modifiers.size = [15, 15];
            /** 按钮列表[click,ctrl click,shift click ...]*/
            gui.clickDrop = this.w.res1.gr2.gr2.drop;
            gui.clickDrop.itemSize[1] = 30;
            //编辑框加入撤销组
            gui.AddUndoGroupBtn = this.w.res1.gr2.gr2.AddUndoGroupBtn;
            gui.AddUndoGroupBtn.text = 'UNDO';
            //自定义编辑器打开代码
            gui.CustomEditor = this.w.res1.gr2.gr2.CustomEditor;
            gui.CustomEditor.text = '</>';
            gui.CustomEditor.helpTip = 'LMB: Open by Editor\nMMB: Invert color\nRMB: Set editor path\nPlease save content by hand, this will not autosave content.';
            gui.CustomEditor.addEventListener('mousedown', function (e) {
                var xml_WH = new XML(readd(sp_PanelSetProfile));
                if (xml_WH.CustomEditorPath == '') {
                    xml_WH.CustomEditorPath = 'notepad.exe';
                    writee(sp_PanelSetProfile, xml_WH);//编辑器路径
                };
                if (e.button == 0) {
                    var editorContentFile = File(thisFolder.fullName + '/EditorContent.js');
                    if (!editorContentFile.exists) writee(editorContentFile, '');//临时存代码的文件
                    var jsContent = gui.ed3.text;
                    writee(editorContentFile, jsContent);//写入代码
                    var xml_WH = new XML(readd(sp_PanelSetProfile));
                    system.callSystem(xml_WH.CustomEditorPath.toString() + ' ' + editorContentFile.fsName);
                }
                if (e.button == 1) { //反转颜色
                    var currentColor = eval(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "codeEditBoxDarkColor"));
                    if (currentColor == true) {
                        uiSetBgColor(gui.ed3, edColor.whitemode); //代码编辑框
                        uiSetForeColor(gui.ed3, edColor.darkmode, 3);
                    } else {
                        uiSetBgColor(gui.ed3, edColor.darkmode); //代码编辑框
                        uiSetForeColor(gui.ed3, edColor.whitemode, 3);
                    }
                    app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "codeEditBoxDarkColor", !currentColor);
                }
                if (e.button == 2) {
                    var path = prompt('currentEditor', xml_WH.CustomEditorPath.toString());
                    if (path != null) {
                        var xml_WH = new XML(readd(sp_PanelSetProfile));
                        xml_WH.CustomEditorPath = path;
                        writee(sp_PanelSetProfile, xml_WH);
                    }
                }
            });


            gui.icon = this.w.res1.gr2.gr5.bt;
            gui.importImg = this.w.res1.gr2.gr5.importImg;//导入image
            gui.getImg = this.w.res1.gr2.gr5.getImg;//获得image
            gui.ed5 = this.w.res1.gr2.gr5.ed;
            gui.delPic = this.w.res1.gr2.gr5.bt1;

            gui.importImg.image = decodeURIComponent(ICON.importImg);
            gui.getImg.image = decodeURIComponent(ICON.getImg);
            gui.importImg.helpTip = 'paste the image binary message.';
            gui.getImg.helpTip = 'get the image binary message.';

            //UI自定义颜色
            gui.colpanBord = this.w.res2.gr1.colpanBord; //大框
            gui.colset = this.w.res2.gr1.colpanBord.colpan; //颜色方块
            //读取颜色
            var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
            var BGcolor = String(PanelWHPrefXML.Panel.BGcolor);
            var BGcolorRBGA = [HextoRGB(BGcolor)[0], HextoRGB(BGcolor)[1], HextoRGB(BGcolor)[2], 255];

            // gui.settingWin.graphics.backgroundColor = gui.settingWin.graphics.newBrush(gui.settingWin.graphics.BrushType.SOLID_COLOR, BGcolorRBGA / 255);
            // gui.colpanBord.graphics.backgroundColor = gui.colpanBord.graphics.newBrush(gui.colpanBord.graphics.BrushType.SOLID_COLOR, [.5, .5, .5, .8]);
            gui.colset.addEventListener('mousedown', function (e) {
                if (e.button == 0) {
                    var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                    var BGcolor = String(PanelWHPrefXML.Panel.BGcolor);
                    var getHex = $.colorPicker(BGcolor);
                    if (getHex != -1) {
                        var r = HextoRGB(getHex)[0];
                        var g = HextoRGB(getHex)[1];
                        var b = HextoRGB(getHex)[2];
                        var rgb = [r, g, b, 255] / 255;
                        uiSetBgColor(win, rgb);
                        uiSetBgColor(gui.settingWin, rgb);
                        uiSetBgColor(gui.colpanBord, [.5, .5, .5, .8]);
                        uiSetBgColor(gui.colset, rgb);
                        // colorsetGetCol=getHex
                        var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                        PanelWHPrefXML.Panel.BGcolor = getHex;
                        writee(sp_PanelSetProfile, PanelWHPrefXML);
                    }
                }
                if (e.button == 2) {
                    var col = '3355455';
                    var r = HextoRGB(col)[0];
                    var g = HextoRGB(col)[1];
                    var b = HextoRGB(col)[2];
                    var rgb = [r, g, b, 255] / 255;
                    uiSetBgColor(win, rgb);
                    uiSetBgColor(gui.settingWin, [r, g, b, 125] / 255);
                    uiSetBgColor(gui.colpanBord, [.5, .5, .5, 1]);
                    uiSetBgColor(gui.colset, rgb);
                    //写入xml
                    var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                    PanelWHPrefXML.Panel.BGcolor = col;
                    writee(sp_PanelSetProfile, PanelWHPrefXML);
                }
            });

            gui.news = this.w.res2.gr1.news; //更新信息
            gui.open = this.w.res2.gr1.open; //配置路径
            gui.open.helpTip = 'LMB: 打开配置文件夹\nRMB: 打开配置文件\nAlt+LMB: 打开sp_PanelSet配置文件夹\nAlt+RMB: 打开sp_PanelSet配置';
            gui.imports = this.w.res2.gr1.imports; //导入
            gui.exports = this.w.res2.gr1.exports; //导出
            gui.news.size = gui.open.size = gui.imports.size = gui.exports.size = [80, 35];

            gui.im1 = this.w.res3.gr1.im1;
            gui.update = this.w.res3.gr1.update;
            gui.weibo = this.w.res3.gr1.weibo;
            // gui.im2 = this.w.res3.gr1.im2;
            gui.Bili = this.w.res3.gr1.Bili;
            gui.Bili.helpTip = 'GFred';
            gui.im1.alignment = ['left', 'center'];
            gui.im1.margins = 2;
            gui.im1.image = decodeURIComponent(ICON.Smallpath);
            // gui.im2.image=decodeURIComponent(ICON.Dump);
            // gui.im1.text='smallpath';
            // gui.im2.text='GFred';
            gui.Bili.onClick = function () {
                var link = 'https://space.bilibili.com/67956004';
                system.callSystem('explorer ' + link);
            };

            gui.parse = this.w.res35.gr1.parse;
            gui.en = this.w.res36.gr1.en;
            gui.ch = this.w.res36.gr1.ch;
            gui.subName = this.w.res1.gr2.gr11.ed; //子名称编辑框

            gui.ed3.text0 = gui.ed3.text1 = gui.ed3.text2 = gui.ed3.text3 = gui.ed3.text4 = gui.ed3.text5 = gui.ed3.text6 = gui.ed3.text7 = "";
            gui.ed3.type0 = gui.ed3.type1 = gui.ed3.type2 = gui.ed3.type3 = gui.ed3.type4 = gui.ed3.type5 = gui.ed3.type6 = gui.ed3.type7 = 0;
            gui.ed3.subName0 = gui.ed3.subName1 = gui.ed3.subName2 = gui.ed3.subName3 = gui.ed3.subName4 = gui.ed3.subName5 = gui.ed3.subName6 = gui.ed3.subName7 = "";


            gui.ed3.preferredSize.height = 200;



            //按钮大小
            gui.sl1.onChange = gui.sl1.onChanging = function () {
                gui.ed01.text = parseInt(this.value);
                view.itemSize[0] = parseInt(this.value);
                win.onResize();
            };
            gui.sl2.onChange = gui.sl2.onChanging = function () {
                gui.ed02.text = parseInt(this.value);
                view.itemSize[1] = parseInt(this.value);
                win.onResize();
            };
            //按钮空隙
            gui.sl3.onChange = gui.sl3.onChanging = function () {// 
                gui.ed03.text = parseInt(this.value - 5);
                view.itemSpacing[0] = parseInt(this.value - 5);

                win.onResize();
            };
            gui.sl4.onChange = gui.sl4.onChanging = function () {// 
                gui.ed04.text = parseInt(this.value - 5);
                view.itemSpacing[1] = parseInt(this.value - 5);

                win.onResize();
            };
            //更新信息
            gui.news.onClick = function () {
                var newsWin = new Window("palette", "更新日志", undefined, { resizeable: true });
                newsWin.margins = 10;
                newsWin.orientation = 'row';
                // var pan1 = newsWin.add('panel',undefined,'更新日志');
                // pan1.orientation = 'row';
                // pan1.alignment = ['fill', 'fill'];
                var ed = newsWin.add('edittext', undefined, undefined, { scrolling: 1, multiline: true, borderless: true });
                ed.alignment = ['fill', 'fill'];
                ed.text = gf.news.replace(/^ +/gmi, '').replace(/\r?\n +/g, '\n');
                uiSetBgColor(ed, [.8, .8, .8, 1]);
                uiSetForeColor(ed, [.3, .3, .3, 1], 2);
                // var scrollBar = newsWin.add('scrollbar');
                // scrollBar.alignment = ['right', 'fill'];
                // scrollBar.preferredSize[0]=30;
                // //滚动条
                // scrollBar.onChanging = function(){
                //     tt.location.y=-1*this.value*5;
                //     tt.size[1]+=this.value*5;
                //     // $.write(this.value+'\n')
                // }
                newsWin.onResize = newsWin.onResizing = function () { newsWin.layout.resize(); };
                newsWin.onClose = function () { this.hide(); };
                newsWin.center();
                newsWin.size = [650, 550];
                newsWin.show();

            };
            gui.exports.onClick = function () {
                var thisFile = Folder.selectDialog("Select your folder");
                if (!thisFile) return;
                special_file.copy(thisFile.toString() + "/Sp_toolbar_config.xml");
            };
            gui.open.addEventListener('mousedown', function (e) {
                var thisFolder = Folder(Folder.userData.fullName + "/Aescripts/Sp_toolbar");
                thisFolder = String(thisFolder).replace(/\//g, "\\").replace('\\c', 'C:');
                var str = $.fileName.split("/")[$.fileName.split("/").length - 1].replace(".jsxbin", "").replace(".jsx", "");
                thisFolder = Folder(thisFolder).fsName;
                if (e.altKey) {
                    if (e.button == 0) { system.callSystem('explorer ' + sp_profileFolder.fsName); }
                    if (e.button == 2) { system.callSystem('explorer ' + sp_PanelSetProfile.fsName); }
                } else {
                    if (e.button == 0) { system.callSystem('explorer ' + thisFolder); }
                    if (e.button == 2) {
                        var str = File.decode($.fileName.split("/")[$.fileName.split("/").length - 1].replace(".jsxbin", "").replace(".jsx", ""));
                        var filll = File(thisFolder.toString() + "/" + str + ".xml").fsName;
                        system.callSystem('explorer ' + filll);
                    }
                }
            }
            );
            gui.imports.onClick = function () {
                var thisFile = File.openDialog("Select your config", ["*.xml"]);
                if (!thisFile) return;
                //检查是否是单个工具栏配置
                var xml = new XML(readd(thisFile));
                if (xml.name() != 'Config') { alert('xml文件没有Config标签，不是脚本配置文件'); return; }
                //
                thisFile.copy(special_file);
                alert((special_loc >> special_str.importOk));
                gui.ok.notify("onClick");
                try {
                    win.close();
                } catch (err) { };
                //*新版本加入组一图标管理*==========================================================================================
                if (xml.groupIcon.length() <= 0) {   //检测有没有组图标，没有的话给默认值
                    var xmlG1Icon = new XML('<groupIcon> </groupIcon>');
                    xml.insertChildAfter(xml.general, xmlG1Icon); //加在顶上
                    for (var i = 0; i < xml.Group.children().length(); i++) {
                        //加入list1组图标
                        var xmlG1IconID = new XML('<gup>' + ICON.littleMan + '</gup>');
                        xml.groupIcon.appendChild(xmlG1IconID);
                        xmlG1IconID['@id'] = xml.Group.child(i)['@groupName'];
                    }
                    writee(special_file, xml); ///////////写入
                }
                if (xml.groupIcon.length() > 1) droplist.visible = 1; //导入后显示列表？还没测试否正确
            };
            gui.update.onClick = function () {
                try {
                    var GetVersion = function (scriptname) { // eg expression-toolbox
                        var url = sp_toolbar.ip + "/script/" + scriptname + ".txt";

                        var port = 80;
                        var domain = url.split("/")[0] + ":" + port;
                        var fileName = url.substr(url.lastIndexOf("/") + 1);
                        var call = "GET ";
                        if (url.indexOf("/") < 0) {
                            call += "/";
                        } else {
                            call += url.substr(url.indexOf("/"));
                        }
                        call += " HTTP/1.1\n";
                        call += "Host: " + domain + "\n\n";
                        call += "Connection: close\n\n";

                        var reply = new String();
                        var special_file = new File();
                        special_file.encoding = "binary";
                        special_file.open("w");
                        var conn = new Socket();
                        conn.encoding = "binary";
                        if (conn.open(domain, "binary")) {
                            conn.write(call);
                            reply = conn.read(300);
                            var contentLengthHeader = String(reply.match(/Content-Length: [0-9]*/));
                            var contentLength = contentLengthHeader.substr(16);
                            var headerLength = reply.indexOf("\n\n") + 2;
                            reply += conn.read(contentLength + headerLength - 300);
                            var recievedVersion = reply.toString().substring(reply.toString().lastIndexOf("BeginVersion") + 12, reply.toString().lastIndexOf("EndVersion"));

                            conn.close();
                        } else {
                            reply = "";
                        }

                        return recievedVersion;
                    };
                    var latest = parseFloat(GetVersion("Sp_toolbar"));
                    var nowVersion = parseFloat(gf.version);
                    if (latest > nowVersion) {
                        alert((special_loc >> special_str.newVersionFind) + latest.toString());
                        var a = confirm(special_loc >> special_str.whatUpdate);
                        if (a == true) {
                            sp_toolbar.openLink(sp_toolbar.downloadLink + ".jsxbin");
                        }
                    } else {
                        alert(special_loc >> special_str.noNew);
                    }
                } catch (err) { alert(err.line.toString() + err.toString()); }
            };
            gui.weibo.onClick = function () {
                sp_toolbar.openLink(sp_toolbar.weiboLink);
            };
            gui.parse.onClick = function () {
                try {
                    var inFile = File.openDialog("Please select xml", ["*.json"]);
                    if (inFile == null) return;
                    var content = readd(inFile);
                    try {
                        var index = content.indexOf("\"editBtn\":");
                        if (index == -1) return alert(special_loc >> special_str.notFt);
                        var string = content;
                        //~                     var string = content.substring (0,index)+"}}";
                    } catch (err) { alert(err); }


                    var wowObj = eval('(' + string + ')');


                    var jsonToXml = function (json) {
                        var level = 0;
                        var str = '';
                        str += createXml(json, 'xml', level);
                        return str;

                        function createXml(json, name, level) {
                            if (name == 'properties') return '';
                            var str = '';
                            var space = getSpace(level);
                            //如果json为数字或者字符串
                            if (typeof (json) == 'number' || typeof (json) == 'string') {
                                str += space + '<' + name + '>';
                                str += space + '	' + json;
                                str += space + '</' + name + '>';
                            }
                            //如果为数组
                            else if (json instanceof Array) {
                                str += arrayTo(json, name, level);
                            }
                            //如果为json对象
                            else if (json instanceof Object) {
                                str += objectTo(json, name, level);
                            }
                            return str;
                        }//end of createXml
                        function arrayTo(array, name, level) {
                            var str = '';
                            var space = getSpace(level);
                            var len = array.length;
                            for (var i = 0; i < len; i++) {
                                //added for another script
                                //if(array[i].properties){
                                //	name = array[i].properties.type;
                                //}
                                //
                                str += createXml(array[i], name, level);
                            }
                            return str;
                        }//end of arrayTo
                        function objectTo(obj, name, level) {
                            var str = '';
                            var space = getSpace(level);
                            str += space + '<' + name;
                            var cmdContent = [];
                            for (var i in obj) {
                                if (typeof (obj[i]) == 'number' || typeof (obj[i]) == 'string') {
                                    if (i == 'cmd') {
                                        cmdContent.push(obj[i].replace(/\"/g, "\'").toString());
                                        continue;
                                    }
                                    var attr = i;
                                    if (i[0] == '_') attr = i.slice(1);
                                    if (typeof (obj[i]) == 'string')
                                        str += ' ' + attr.toString() + '=\"' + obj[i].replace(sp_toolbar.regExp, "\'").toString() + '\"';
                                    else
                                        str += ' ' + attr.toString() + '=\"' + obj[i].toString() + '\"';
                                }
                            }
                            str += '>';
                            for (var i in obj) {
                                if (typeof (obj[i]) == 'number' || typeof (obj[i]) == 'string' && cmdContent.length == 0) {
                                    continue;
                                }
                                if (cmdContent.length == 0)
                                    str += createXml(obj[i], i, level + 1);
                                else
                                    str += encodeURIComponent(cmdContent.pop());
                            }
                            str += space + '</' + name + '>';
                            return str;
                        }//end of objectTo
                        function getSpace(level) {
                            var space = '\n';
                            for (var k = 0; k < level; k++) {
                                space += '	';
                            }
                            return space;
                        }//end of getSpace
                    };

                    var str = jsonToXml(wowObj);
                    var xmlL = new XML(str);


                    /*转换完毕*/
                    view.itemSize = [parseInt(xmlL.general.btnsSettings.size['@x']), parseInt(xmlL.general.btnsSettings.size['@y'])];
                    view.itemSpacing = [parseInt(xmlL.general.btnsSettings.spacing['@x']), parseInt(xmlL.general.btnsSettings.spacing['@y'])];
                    gui.sl1.value = view.itemSize[0];
                    gui.sl2.value = view.itemSize[1];
                    gui.sl3.value = view.itemSpacing[0] + 5;
                    gui.sl4.value = view.itemSpacing[1] + 5;
                    gui.ed01.text = view.itemSize[0];
                    gui.ed02.text = view.itemSize[1];
                    gui.ed03.text = view.itemSpacing[0];
                    gui.ed04.text = view.itemSpacing[1];
                    for (var jj = 0; jj < xmlL.children().length() - 1; jj++) {
                        if (xmlL.child(jj).localName() != "toolbars")
                            break;
                        sp_toolbar.addGroup(xmlL.child(jj)['@name'].toString());
                        var id = sp_toolbar.getLastGroupId() - 1;
                        for (var ii = 0; ii < xmlL.child(jj).children().length(); ii++) {
                            var xml = xmlL.child(jj).child(ii);
                            var a = xml['@shortName'].toString();
                            var b = "1";
                            var c = decodeURIComponent(xml.cmdDefault.toString());
                            var d = xml.cmdDefault['@type'].toString();
                            var e = decodeURIComponent(xml.cmdCtrl.toString());
                            var f = xml.cmdCtrl['@type'].toString();
                            var g = decodeURIComponent(xml.cmdShift.toString());
                            var h = xml.cmdShift['@type'].toString();
                            var i = decodeURIComponent(xml.cmdAlt.toString());
                            var j = xml.cmdAlt['@type'].toString();
                            var k = decodeURIComponent(xml.cmdCtrlShift.toString());
                            var l = xml.cmdCtrlShift['@type'].toString();
                            var m = decodeURIComponent(xml.cmdCtrlAlt.toString());
                            var n = xml.cmdCtrlAlt['@type'].toString();
                            var o = decodeURIComponent(xml.cmdShiftAlt.toString());
                            var p = xml.cmdShiftAlt['@type'].toString();
                            var q = decodeURIComponent(xml.cmdCtrlShiftAlt.toString());
                            var r = xml.cmdCtrlShiftAlt['@type'].toString();
                            var s = xml['@lastModifier'].toString();
                            var t = xml['@longName'].toString();
                            var u = xml['@icon'].toString();
                            try {
                                if (u != "")
                                    u = encodeURIComponent(unescape(wowObj.icons[u].bin));
                            } catch (err) { u = ""; }
                            sp_toolbar.parseButton(id, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u);
                        }
                    }
                    try {
                        sp_toolbar.drop.removeAll();
                        var xml = new XML(readd(special_file));
                        for (var i = 0; i < xml.Group.children().length(); i++) {
                            droplist.add("item", xml.Group.child(i)['@groupName']);
                        }
                        sp_toolbar.drop.selection = sp_toolbar.drop.items.length - 1;
                    } catch (err) { }
                    var xml = new XML(readd(special_file));
                    gui.list1.removeAll();
                    for (var i = 0; i < xml.Group.children().length(); i++) {
                        gui.list1.add("item", xml.Group.child(i)['@groupName']);
                    }
                    if (gui.list1.items.length != 0) {
                        gui.list1.selection = 0;
                        gui.list1.notify("onChange");
                    }
                    win.onResize();
                    alert("Parse complete!");
                } catch (err) { alert(err.toString() + err.line.toString()); }
            };
            gui.en.onClick = function () {
                app.settings.saveSetting('Sp_toolbar', 'language', 'en');
                alert('Please restart script,the language has been translated to English.');
            };
            gui.ch.onClick = function () {
                app.settings.saveSetting('Sp_toolbar', 'language', 'ch');
                alert('请重启脚本,语言已改变为中文');
            };

            //左边调整高度滑块
            gui.pg2sld1.onChange = gui.pg2sld1.onChanging = function () { //第二页的滑块
                //显示滑竿当前值
                // gui.slWinst.text = parseInt(gui.slWin.value);
                //右边框框数值
                // gui.slWinEdtxt.text = parseInt(gui.slWin.value);
                //调整窗口高度
                // res0.gr1.slWinst.text=this.value;

                gui.list1.size[1] = parseInt(this.value);
                gui.list2.size[1] = parseInt(this.value);
                gui.pg2sld1Text.text = parseInt(this.value);//显示数值
                //写入xml记录高度
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                PanelWHPrefXML.Panel.list = String(parseInt(this.value));
                writee(sp_PanelSetProfile, PanelWHPrefXML);
                //
                win.onResize();
                gui.settingWin.layout.resize();
                gui.settingWin.layout.layout(true);
            };
            //右边调整高度滑块
            gui.pg2sld2.onChange = gui.pg2sld2.onChanging = function () { //第二页的滑块
                //显示滑竿当前值
                // gui.slWexpst.text = parseInt(gui.slexp.value);
                //右边框框数值
                // gui.slWexpEdtxt.text = parseInt(gui.slexp.value);
                //表达式框框高度调节

                gui.ed3.size[1] = this.value;
                gui.pg2sld2Text.text = this.value;//显示数值
                //写入xml记录高度
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                PanelWHPrefXML.Panel.editBox = String(parseInt(this.value));
                writee(sp_PanelSetProfile, PanelWHPrefXML);
                //
                win.onResize();
                gui.settingWin.layout.resize();
                gui.settingWin.layout.layout(true);
            };
            gui.list1.onChange = function () {
                if (gui.list1.selection) {
                    gui.Bar1icon.enabled = 1;
                    gui.ed1.text = this.selection.text;
                    if (gui.list1.selection.index != 0) gui.up1.enabled = 1; else gui.up1.enabled = 0;
                    if (gui.list1.selection.index != gui.list1.children.length - 1) gui.down1.enabled = 1; else gui.down1.enabled = 0;
                    gui.list2.parent.enabled = true;
                    var xml = new XML(readd(special_file));
                    var thisXml = xml.Group.child(gui.list1.selection.index);
                    gui.list2.removeAll();
                    //遍历当前组的所有item，加入到列表2
                    try {
                        for (var i = 0; i < thisXml.children().length(); i++) {
                            gui.list2.add("item", thisXml.child(i).buttonName);
                            //加上图标
                            if (thisXml.child(i).icon.toString().length < 10) {
                                gui.list2.items[i].image = decodeURIComponent(ICON.nullImg);
                            } else {
                                gui.list2.items[i].image = decodeURIComponent(thisXml.child(i).icon);
                            }
                        }
                        //列表图标大小
                        gui.list2.itemSize = gf.listSize;
                    } catch (e) { alert(e.line); } //解码图标的二进制代码}
                    //清空组二的名称输入框
                    gui.ed2.text = "";
                    gui.list2.selection = null;
                    gui.list2.notify('onChange');
                    // if (!gui.list2.selection) gui.ed3.parent.enabled = false;
                } else {
                    gui.Bar1icon.enabled = 0;
                    gui.list2.enable = false;
                    gui.list2.parent.enabled = false;
                    gui.ed3.parent.enabled = false;
                }
                if (this.selection != null) {
                    if (this.items.length > 0) sp_toolbar.drop.selection = this.selection.index;
                }
            };
            gui.Bar1icon.enabled = 0;
            gui.Keep.enabled = 0;
            gui.Jump.enabled = 0;
            gui.moveGup.enabled = 0;
            /**
             * 1 !!!还是会吞配置,没有修复完毕，不知道问题究竟在哪
             * 2 推测是一次性加载数据过多，切换列表却较快导致数据切换不及时导致数据错乱
             * 3 选择list2时已添加sleep进行适当延迟
             * @returns 
             */
            gui.list2.onChange = function () {
                if (gui.list1.selection == null) return;
                if (gui.list2.selection == null) {
                    gui.Keep.enabled = 0;
                    gui.Jump.enabled = 0;
                    gui.moveGup.enabled = 0;
                    gui.up2.enabled = 0;
                    gui.down2.enabled = 0;
                    gui.ed2.text = "";
                    gui.ed3.parent.enabled = false;
                    return;
                } else {
                    gui.ed2.text = this.selection.text;
                    gui.Keep.enabled = 1;
                    gui.Jump.enabled = 1;
                    gui.moveGup.enabled = 1;
                    if (gui.list2.selection.index != 0) gui.up2.enabled = 1; else gui.up2.enabled = 0;
                    if (gui.list2.selection.index != gui.list2.children.length - 1) gui.down2.enabled = 1; else gui.down2.enabled = 0;
                    gui.ed3.parent.enabled = true;
                }

                var xml = sp_toolbar.getButtonInfo(gui.list1.selection.index, gui.list2.selection.index);

                gui.ed2.text = xml.buttonName;
                gui.modifiers.value = parseInt(xml.activeModifiers);
                sp_toolbar.notSaveButton = -1;
                // gui.modifiers.onClick();
                gui.modifiers.parent.drop.enabled = gui.modifiers.value;
                // gui.typeDrop.selection = getId(typeArr,xml.click.type); //此函数原版因为用了for in 猜测原型链出的问题，导致点击不同按钮的时候配置会被篡改（相互串掉，全乱了）,改用for循环
                // gui.typeDrop.notify("onChange"); //可能导致配置错乱所以最后加了sleep做延迟，但未检测是否过关
                sp_toolbar.notSaveButton = 0;

                gui.ed3.text0 = xml.click.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName0 = xml.click.subName;
                gui.ed3.type0 = getId(typeArr, xml.click.type);
                gui.ed3.text1 = xml.ctrl.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName1 = xml.ctrl.subName;
                gui.ed3.type1 = getId(typeArr, xml.ctrl.type);
                gui.ed3.text2 = xml.shift.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName2 = xml.shift.subName;
                gui.ed3.type2 = getId(typeArr, xml.shift.type);
                gui.ed3.text3 = xml.alt.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName3 = xml.alt.subName;
                gui.ed3.type3 = getId(typeArr, xml.alt.type);
                gui.ed3.text4 = xml.ctrlShift.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName4 = xml.ctrlShift.subName;
                gui.ed3.type4 = getId(typeArr, xml.ctrlShift.type);
                gui.ed3.text5 = xml.ctrlAlt.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName5 = xml.ctrlAlt.subName;
                gui.ed3.type5 = getId(typeArr, xml.ctrlAlt.type);
                gui.ed3.text6 = xml.shiftAlt.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName6 = xml.shiftAlt.subName;
                gui.ed3.type6 = getId(typeArr, xml.shiftAlt.type);
                gui.ed3.text7 = xml.ctrlShiftAlt.cmd.toString().replace(/\\n/g, "\n");
                gui.ed3.subName7 = xml.ctrlShiftAlt.subName;
                gui.ed3.type7 = getId(typeArr, xml.ctrlShiftAlt.type);

                //!!! 下面可能因为操作时间太快导致list切换item的时候配置错乱？
                // gui.clickDrop.selection = id;
                gui.clickDrop.selection = 0;
                var delayTime = 110;
                $.sleep(delayTime);
                gui.typeDrop.selection = Number(eval("gui.ed3.type" + gui.clickDrop.selection.index));
                $.sleep(delayTime);
                gui.ed3.text = gui.ed3.text0;
                $.sleep(delayTime);
                gui.subName.text = eval("gui.ed3.subName" + Number(xml.lastModifier)); //子元素名称
                // gui.ed3.text = eval("gui.ed3.text" + gui.clickDrop.selection.index);
                // gui.typeDrop.selection = Number(eval("gui.ed3.type" + gui.clickDrop.selection.index));

                gui.ed3.text = xml.click.cmd;
                gui.ed4.text = xml.helpTip;
                if (xml.icon.toString() != "") { gui.ed5.text = "Has Icon~"; } else gui.ed5.text = "";
                $.sleep(delayTime);
                return;
            };
            // gui.list2.addEventListener('focus', function (e) { this.notify("onChange"); });//刷新

            gui.subName.onChanging = gui.subName.onChange = function () {
                eval("gui.ed3.subName" + gui.clickDrop.selection.index + "=\"" + gui.subName.text + "\"");
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
                $.sleep(20);
            };
            gui.AddUndoGroupBtn.onClick = function () { //添加撤销组
                var text = gui.settingWin.res1.gr2.ed.text;
                var action = (gui.subName.text == '' || gui.subName.text == null) ? gui.ed2.text : gui.subName.text;
                var undoB = "app.beginUndoGroup('" + action + "')\n";
                var undoE = "\napp.endUndoGroup()";
                gui.settingWin.res1.gr2.ed.text = undoB + text + undoE;
                //写入XML
                eval("gui.ed3.text" + gui.clickDrop.selection.index + "=gui.ed3.text;");
                eval("gui.ed3.type" + gui.clickDrop.selection.index + "=gui.typeDrop.selection.index;");
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
            };
            /**代码编辑框 */
            gui.ed3.onChange = function () {
                if (!gui.typeDrop.selection) return;
                if (!gui.clickDrop.selection) return;
                var txt = gui.ed3.text;
                eval("gui.ed3.text" + gui.clickDrop.selection.index + "=txt;");
                eval("gui.ed3.type" + gui.clickDrop.selection.index + "=gui.typeDrop.selection.index;");
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
                $.sleep(100);
            };
            gui.clickDrop.onChange = function () {
                gui.ed3.text = eval("gui.ed3.text" + String(this.selection.index)).toString();
                gui.typeDrop.selection = Number(eval("gui.ed3.type" + String(this.selection.index)));
                gui.subName.text = eval("gui.ed3.subName" + String(this.selection.index)).toString();
                var xml = sp_toolbar.getButtonInfo(gui.list1.selection.index, gui.list2.selection.index);
                var xml = new XML(readd(special_file));
                xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index).lastModifier = gui.clickDrop.selection.index;
                writee(special_file, xml);
                // sp_toolbar.notSaveButton = -1;
                // gui.ed3.notify("onChange");
                // sp_toolbar.notSaveButton = 0;
                // if (sp_toolbar.notSaveButton != -1) {
                //     sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5)
                // }
                $.sleep(150);
            };
            gui.modifiers.onClick = function () {
                if (this.value == true) {
                    this.parent.drop.enabled = 1;
                } else {
                    this.parent.drop.enabled = 0;
                    this.parent.drop.selection = 0;
                    this.parent.drop.notify("onChange");
                    // gr.children[gui.list2.selection.index].enabled = 0;
                }

                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
                $.sleep(20);
                var id = droplist.selection.index;
                droplist.selection = null;
                droplist.selection = id;
            };
            sp_toolbar.notSaveButton = -1;

            // gui.modifiers.onClick(); 
            sp_toolbar.notSaveButton = 0;
            gui.browseAnimation.onClick = function () {
                var special_file = File.openDialog("Select animation preset", ["*.ffx"]);
                if (!special_file) return;
                gui.ed3.text = decodeURIComponent(special_file.toString());
                gui.ed4.text = decodeURIComponent(special_file.toString().split("/")[special_file.toString().split("/").length - 1]);
                sp_toolbar.notSaveButton = -1;
                gui.ed3.notify("onChange");
                sp_toolbar.notSaveButton = 0;
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
            };
            gui.browseScript.onClick = function () {
                var special_file = File.openDialog("Select script preset");
                if (!special_file) return;
                gui.ed3.text = decodeURIComponent(special_file.toString());
                gui.ed4.text = decodeURIComponent(special_file.toString().split("/")[special_file.toString().split("/").length - 1]);
                if (decodeURIComponent(special_file.toString().split("/")[special_file.toString().split("/").length - 2]) == "ScriptUI Panels") {
                    var conf = confirm(special_loc >> special_str.changeScriptType);
                    if (conf) {
                        gui.typeDrop.selection = 4;
                        gui.typeDrop.notify("onChange");
                        gui.ed3.text = gui.ed4.text;
                    }
                }
                sp_toolbar.notSaveButton = -1;
                gui.ed3.notify("onChange");
                sp_toolbar.notSaveButton = 0;
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
            };
            gui.getEffectName.onClick = function () {
                try {
                    var comp = app.project.activeItem;
                    var selectProp = comp.selectedProperties[0];
                    gui.ed3.text = selectProp.matchName;
                    gui.ed4.text = selectProp.name;
                    gui.subName.text = selectProp.name; //子菜单填入名字
                } catch (err) { alert(err); }
                sp_toolbar.notSaveButton = -1;
                gui.subName.notify("onChange"); //子菜单应用
                gui.ed3.notify("onChange");
                sp_toolbar.notSaveButton = 0;
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
            };
            //小人图标
            var ListLittleViewIcon = File.decode(ICON.littleMan);
            gui.dyGroup.gr4.visible = 0;
            //弹出设置面板相关
            gui.getEffectPara.onClick = function () {
                try {
                    var comp = app.project.activeItem;
                    var selectProp = comp.selectedProperties[0];

                    var str1 = "var comp = app.project.activeItem;\
                    if (comp && comp.selectedLayers.length > 0) {\
                        for (var i = 0; i < comp.selectedLayers.length; i++) {\
                            var layer = comp.selectedLayers[i];\
                            var fx = layer.Effects.addProperty('" + selectProp.matchName + "');\
                            fx.name = '" + selectProp.name + "';\
                            ";
                    for (var i = 0; i < selectProp.numProperties; i++) {
                        var prop = selectProp.property(i + 1);
                        try {
                            var str = "try{fx.property(String('" + prop.matchName + "')).setValue(" + prop.valueAtTime(0, false).toSource() + ");}catch(err){}\r";
                            str1 += str;
                            if (prop.canSetExpression && prop.expression) {
                                var exp = "'" + prop.expression + "'";
                                exp = exp.replace(/\r?\n/g, '\\\n');
                                // $.writeln(exp);
                                $.writeln((typeof exp) + '\n' + exp);
                                str = "try{fx.property(String('" + prop.matchName + "')).expression=" + exp + ";fx.property(String('" + prop.matchName + "')).expressionEnabled=" + prop.expressionEnabled + ";}catch(err){}\r";
                                str1 += str;
                            }
                            str1 += "\nfx.selected=true;\n";
                        } catch (err) { }
                    }
                    str1 += "}}";
                    gui.typeDrop.selection = 5;
                    sp_toolbar.notSaveButton = -1;
                    gui.typeDrop.notify("onChange");
                    sp_toolbar.notSaveButton = 0;
                    gui.ed3.text = str1;
                    gui.ed4.text = selectProp.name;
                    sp_toolbar.notSaveButton = -1;

                    gui.subName.text = selectProp.name; //子菜单填入名字
                    gui.subName.notify("onChange"); //子菜单应用
                    gui.ed3.notify("onChange");
                    sp_toolbar.notSaveButton = 0;
                    if (sp_toolbar.notSaveButton != -1) {
                        sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                    }
                } catch (err) { alert(err); }
            };
            gui.getAppendEffect.onClick = function () { //追加参数
                try {
                    var comp = app.project.activeItem;
                    var selectProp = comp.selectedProperties;
                    for (var j = 0; j < selectProp.length; j++) {
                        var str1 = "var comp = app.project.activeItem;\
                        if (comp && comp.selectedLayers.length > 0) {\
                            for (var i = 0; i < comp.selectedLayers.length; i++) {\
                                var layer = comp.selectedLayers[i];\
                                var fx = layer.Effects.addProperty('" + selectProp[j].matchName + "');\
                                fx.name = '" + selectProp[j].name + "';\
                                ";
                        for (var i = 0; i < selectProp[j].numProperties; i++) {
                            var prop = selectProp[j].property(i + 1);
                            try {
                                var str = "try{fx.property(String('" + prop.matchName + "')).setValue(" + prop.valueAtTime(0, false).toSource() + ");}catch(err){}\r";
                                str1 += str;
                                if (prop.canSetExpression && prop.expression) {
                                    str = "try{fx.property(String('" + prop.matchName + "')).expression='" + prop.expression + "';fx.property(String('" + prop.matchName + "')).expressionEnabled=" + prop.expressionEnabled + ";}catch(err){}\r";
                                }
                                str1 += str;
                                str1 += "\nfx.selected=true;\n";
                            } catch (err) { }
                        }
                        str1 += "}}\n";
                        gui.ed3.text += str1;
                    }
                    gui.ed3.notify("onChange");
                    sp_toolbar.notSaveButton = 0;
                    if (sp_toolbar.notSaveButton != -1) {
                        sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                    }
                } catch (e) { alert(e.line + ' ' + e.message); }
            };
            gui.transferToFile.onClick = function () { //转存文件
                try {
                    // alert('因不支持相对路径，此按钮无效')
                    //     var path = File($.fileName);
                    //     var fd = Folder(path.parent.fullName + '/Sp_toolbar_Preset/JsFile');
                    //     if (!fd.exists) fd.create();
                    //     if (gui.ed3.text == "") {
                    //         alert('No Content');
                    //         return;
                    //     }
                    var fd = Folder().selectDlg();
                    if (fd != null) {
                        // alert(decodeURIComponent(fd.getFiles().toString()))
                        if (decodeURIComponent(fd.getFiles().toString()).indexOf(gui.ed2.text + '.jsx') != -1) {
                            var chose = confirm('Find same name file, replace it?', 'Replace', 1);
                            if (chose == 0) return;
                        }
                        var newFile = File(fd.fullName + '/' + gui.ed2.text + '.jsx');
                        writee(new File(fd.fullName + '/' + gui.ed2.text + '.jsx'), gui.ed3.text);
                        gui.typeDrop.selection = 3; //选择为脚本项
                        gui.ed3.text = fd.fullName + '/' + gui.ed2.text + '.jsx';
                        gui.ed3.notify("onChange");
                    }
                } catch (e) { alert(e.line + ' ' + e.message); }
            };
            gui.typeDrop.onChange = function () { //左上角的type选择
                eval("gui.ed3.type" + gui.clickDrop.selection.index + "=gui.typeDrop.selection.index;");
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
                if (this.selection.index == 0) {
                    gui.dyGroup.gr1.visible = 1;
                    gui.dyGroup.gr2.visible = 0;
                    gui.dyGroup.gr3.visible = 0;
                    gui.dyGroup.gr4.visible = 0;
                } else if (this.selection.index == 1) {
                    gui.dyGroup.gr1.visible = 0;
                    gui.dyGroup.gr2.visible = 0;
                    gui.dyGroup.gr3.visible = 0;
                    gui.dyGroup.gr4.visible = 0;
                } else if (this.selection.index == 2) {
                    gui.dyGroup.gr1.visible = 0;
                    gui.dyGroup.gr2.visible = 1;
                    gui.dyGroup.gr3.visible = 0;
                    gui.dyGroup.gr4.visible = 0;
                } else if (this.selection.index == 3) {
                    gui.dyGroup.gr1.visible = 0;
                    gui.dyGroup.gr2.visible = 0;
                    gui.dyGroup.gr3.visible = 1;
                    gui.dyGroup.gr4.visible = 0;
                } else if (this.selection.index == 4) {
                    gui.dyGroup.gr1.visible = 0;
                    gui.dyGroup.gr2.visible = 0;
                    gui.dyGroup.gr3.visible = 0;
                    gui.dyGroup.gr4.visible = 0;
                } else if (this.selection.index == 5) {
                    gui.dyGroup.gr1.visible = 0;
                    gui.dyGroup.gr2.visible = 0;
                    gui.dyGroup.gr3.visible = 0;
                    gui.dyGroup.gr4.visible = 1;
                } else if (this.selection.index == 6) {
                    gui.dyGroup.gr1.visible = 0;
                    gui.dyGroup.gr2.visible = 0;
                    gui.dyGroup.gr3.visible = 0;
                    gui.dyGroup.gr4.visible = 0;
                }
            };
            //导入单独工具栏
            gui.Input.onClick = function () {
                var f = File().openDlg("Read xml...", "xml:*.xml,all:*.*");
                if (f == null) return;
                try {
                    var fName = File.decode(f.name); //读取文件的名字
                    f.open('r');
                    var content = f.read();
                    f.close();
                    var getXmlContent = new XML(content);
                    //检查是否是单个工具栏配置
                    if (getXmlContent.name() != 'Main') { alert('xml文件没有Main标签，不是单个工具栏配置文件'); return; }
                    //操作xml
                    var xml = new XML(readd(special_file));
                    var newXmlIcon = xml.groupIcon.appendChild(getXmlContent.gup); //追加默认图标
                    xml.Group.appendChild(getXmlContent.group); //追加xml工具栏
                    newXmlIcon['@id'] = getXmlContent.group['@groupName'];
                    writee(special_file, xml);
                    //刷新列表
                    sp_toolbar.drop.add('item', fName);
                    gui.list1.removeAll();
                    for (var i = 0; i < xml.Group.children().length(); i++) {
                        gui.list1.add("item", xml.Group.child(i)['@groupName']);
                        try {
                            gui.list1.items[i].image = decodeURIComponent(xml.groupIcon.child(i));
                        } catch (e) { } //解码图标的二进制代码
                    }
                    gui.list1.selection = gui.list1.items.length - 1;
                } catch (e) { alert(e.line + e.message); }

            };
            //导出单独工具栏
            gui.Output.onClick = function () {
                var f = Folder().selectDlg();
                if (f == null) return;
                var xml = new XML(readd(special_file));
                var thisXmlBar1Ico = xml.groupIcon.child(gui.list1.selection.index); //Bar1图标
                var thisXml = xml.Group.child(gui.list1.selection.index); //工具栏内容
                var xmlStrIco = thisXmlBar1Ico.toXMLString();
                var xmlStr = xmlStrIco + '\n' + thisXml.toXMLString();
                var newXmlFile = File(f.fsName.toString() + '\\' + gui.list1.selection.toString() + '.xml');
                //     fn = f.fsName.toString();
                //     fn = fn.substring(0, fn.lastIndexOf('\\')+1);
                //    var newXmlFile = File(fn+gui.list1.selection.toString())
                newXmlFile.open('w');
                newXmlFile.write('<Main>\n' + xmlStr + "\n</Main>");
                newXmlFile.close();
            };
            //栏一图案设置
            gui.Bar1icon.onClick = function () {
                var w_Bar1icon = new Window('palette', 'Set Icon: select an item at list1, then set image', undefined, { resizeable: 1 });
                w_Bar1icon.alignment = ['fill', 'fill'];
                w_Bar1icon.margins = w_Bar1icon.spacing = 0;
                var pan = w_Bar1icon.add('panel');
                pan.alignment = ['fill', 'fill'];
                pan.margins = pan.spacing = 0;
                var img = pan.add('customView', undefined, undefined);
                img.text = 'Pic';
                var btClear = w_Bar1icon.add('iconbutton', undefined, undefined, { style: "toolbutton" });
                btClear.text = 'Clear';
                btClear.alignment = ['fill', 'bottom'];
                var btOpen = w_Bar1icon.add('iconbutton', undefined, undefined, { style: "toolbutton" });
                btOpen.text = 'Open';
                btOpen.alignment = ['fill', 'bottom'];
                var g1 = w_Bar1icon.add('group', undefined, { orientation: 'row' });
                g1.alignment = ['fill', 'bottom'];
                g1.margins = g1.spacing = 0;
                var imgStr = g1.add('edittext', undefined, '');
                var imgPaste = g1.add('iconbutton', [0, 0, 80, 30], undefined, { style: "toolbutton" });
                imgPaste.text = 'Paste';
                imgStr.alignment = ['fill', 'fill'];
                imgPaste.alignment = ['right', 'fill'];
                imgStr.margins = imgStr.spacing = 0;
                imgPaste.margins = imgPaste.spacing = 0;
                img.alignment = ['fill', 'fill'];
                pan.graphics.backgroundColor = pan.graphics.newBrush(pan.graphics.BrushType.SOLID_COLOR, [.2, .2, .2, .8], 1);
                if (gui.list1.selection.image != undefined) {
                    img.text = '';
                    img.image = gui.list1.selection.image;
                }
                imgPaste.onClick = function () {
                    if (imgStr.text == '') return;
                    try {
                        setImage(imgStr.text);
                    } catch (e) { $.writeln(e.line + e.message); }
                };
                /**传入字符使用，不传入则读取图片文件 */
                function setImage(_imgStr) {
                    var content;
                    if (_imgStr != undefined && _imgStr != null) {
                        content = _imgStr.substring(1, _imgStr.length - 1); //去掉引号
                    } else {
                        var f = File().openDlg("Select icon...", "png:*.png,jpg:*.jpg,jpeg:*.jpeg,all:*.*");
                        if (f == null) return;
                        //读文件
                        f.open('e');
                        f.encoding = "BINARY";
                        // content = f.read().toSource();
                        content = encodeURIComponent(f.read());
                        // $.writeln(content)
                        f.close();
                    }
                    //写入xml
                    var xml = new XML(readd(special_file));
                    var xmlIconGup = xml.groupIcon.child(gui.list1.selection.index);
                    xmlIconGup.setChildren(content);
                    writee(special_file, xml);
                    //列表显示
                    gui.list1.selection.image = new Array();
                    gui.list1.selection.image = decodeURIComponent(content);
                    img.image = new Array();
                    img.image = gui.list1.selection.image;
                    gr.children[1].image = new Array();
                    gr.children[1].image = gui.list1.selection.image;
                    //
                    // thisXml.icon = f.name;
                    // writee(special_file,xml)
                    // gui.list1.selection.onDraw = sp_toolbar.newDraw;
                    // var myImg = ScriptUI.newImage(f);
                }
                btOpen.onClick = function () { setImage(); };
                btClear.onClick = function () {
                    //修改xml
                    var xml = new XML(readd(special_file));
                    var thisXml = xml.groupIcon.child(gui.list1.selection.index);
                    thisXml.setChildren(ICON.nullImg);
                    writee(special_file, xml);
                    //修改列表和图片窗口显示
                    gui.list1.selection.image = [];
                    gui.list1.selection.image = decodeURIComponent(ICON.nullImg);
                    img.image = [];
                    img.image = gui.list1.selection.image;
                };
                img.addEventListener('mouseover', function (e) {
                    if (gui.list1.selection == null) return;
                    var ItemImg = gui.list1.selection.image;
                    if (ItemImg == undefined || ItemImg == null) return;
                    img.image = {};
                    img.image = ItemImg;
                    imgStr.notify("onDraw"); //刷新图片窗口显示
                });
                w_Bar1icon.onResize = function () {
                    this.layout.resize();
                };
                w_Bar1icon.onClose = function () {
                    this.hide();
                };
                img.onDraw = setImage;
                function setImage() {
                    var g = this.graphics;
                    var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.1, .1, .1, 1]);
                    var imgS;
                    if (pan.size[0] >= pan.size[1]) imgS = pan.size[1];
                    if (pan.size[0] < pan.size[1]) imgS = pan.size[0];
                    var x = pan.size[0] / 2 - imgS / 2;
                    var y = pan.size[1] / 2 - imgS / 2;
                    g.newPath();
                    g.rectPath(0, 0, pan.size[0], pan.size[1]);
                    g.fillPath(brush1);
                    g.drawImage(this.image, x, y, imgS, imgS);
                }
                w_Bar1icon.layout.layout(1);
                w_Bar1icon.show();
                w_Bar1icon.size = [300, 280];
                var pos = gui.settingWin.location;
                w_Bar1icon.location = [pos[0] - gui.settingWin.size[0] / 2, pos[1]];
                // Bar1icon.onResizing=function(){
                //     $.write('size:'+pan.size.toString()+'\n');
                //     $.write('Winsize:'+Bar1icon.size.toString()+'\n');
                //     $.write('location:'+img.location.toString()+'\n');
                // }
            };
            gui.create1.onClick = function () {
                if (gui.ed1.text != "") {
                    //
                    var item = gui.list1.add("item", gui.ed1.text);
                    item.image = ListLittleViewIcon; //新建的时候显示图标
                    sp_toolbar.addGroup(gui.ed1.text);
                    gui.list1.selection = item;
                    if (gui.list1.items.length == 1) sp_toolbar.view.hasDroplist = 0; else sp_toolbar.view.hasDroplist = 1;
                    var item = sp_toolbar.drop.add("item", gui.ed1.text);
                    sp_toolbar.drop.selection = item;
                    //读写XML
                    var xml = new XML(readd(special_file));
                    var newXmlgup = new XML('<gup>' + ICON.littleMan + '</gup>');
                    newXmlgup['@id'] = gui.list1.selection;
                    xml.groupIcon.appendChild(newXmlgup);
                    writee(special_file, xml);
                }
            };
            // gui.list1.onChange = function(){alert(gui.list1.selection)}
            gui.del1.onClick = function () {
                if (gui.list1.items.length == 1) {
                    alert('at least one group');
                    return;
                };
                if (gui.list1.selection) {
                    try {
                        //
                        var id = gui.list1.selection.index;
                        sp_toolbar.delGroup(gui.list1.selection.index);
                        sp_toolbar.drop.remove(gui.list1.selection.index);
                        gui.list1.remove(id);
                        if (id != 0) gui.list1.selection = id - 1;
                        sp_toolbar.drop.selection = 0;
                        gui.ed3.parent.enabled = false;
                        //操作XML
                        sp_toolbar.delG1Image(id);
                    } catch (err) { alert(err.line); }
                }
                if (gui.list1.items.length == 0) {
                    var l = group.children.length;
                    for (var i = 0; i < l; i++) {
                        group.remove(l - 1 - i);
                    }
                    gui.list2.parent.enabled = 0;
                }
                group.parent.onResize();
            };
            gui.ed1.onChange = gui.ed2.onChange = function () { //命名编辑框
                if (this.text == "") return;
                if (!this.parent.parent.gr3.selection) return;
                var preIndex = this.parent.parent.gr3.selection.index;
                this.parent.parent.gr3.selection.text = this.text;
                sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                this.parent.parent.gr3.notify("onChange");
                this.parent.parent.gr3.selection = preIndex;
                sp_toolbar.drop.onChange();
                if (this.parent.parent.text == (special_loc >> special_str.toolbars)) {
                    sp_toolbar.drop.selection.text = this.text;
                    sp_toolbar.renameGroup(this.parent.parent.gr3.selection.index, this.text);
                } else {
                    if (group.children[gui.list2.selection.index].icon == undefined) {
                        group.children[gui.list2.selection.index].text = this.text;
                    }
                    // win.onResize();
                }
                //写入命名到组图标
                var xml = new XML(readd(special_file));
                xml.groupIcon.child(gui.list1.selection.index)['@id'] = gui.list1.selection;
                writee(special_file, xml);
            };
            gui.ed4.onChange = function () {
                try {
                    group.children[gui.list2.selection.index].helpTip = this.text;
                } catch (err) { alert(err); }
                sp_toolbar.notSaveButton = -1;
                gui.ed3.notify("onChange");
                sp_toolbar.notSaveButton = 0;
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, gui.ed5);
                }
            };
            gui.up1.onClick = function () {
                try {
                    if (!gui.list1.selection) return;
                    if (gui.list1.selection.index == 0) return;
                    var preIndex = gui.list1.selection.index;
                    var upBtnIndex = preIndex - 1;
                    var preImg = gui.list1.selection.image;
                    var upBtnImg = gui.list1.items[upBtnIndex].image;
                    //交换
                    sp_toolbar.swap(gui.list1.items[preIndex], gui.list1.items[upBtnIndex]);
                    gui.list1.selection.image = new Array();
                    gui.list1.items[upBtnIndex].image = new Array();
                    gui.list1.selection.image = upBtnImg;
                    gui.list1.items[upBtnIndex].image = preImg;
                    //操作XML
                    sp_toolbar.upGroup(gui.list1.selection.index);
                    sp_toolbar.upG1Img(gui.list1.selection.index); //移动图片
                    // xml.groupIcon.swap(xml.groupIcon.child(preIndex), xml.groupIcon.child(upBtnIndex));
                    // gui.list1.removeAll();
                    // for (var i = 0; i < xml.Group.children().length(); i++) {
                    //     gui.list1.add("item", xml.Group.child(i)['@groupName']);
                    //     gui.list1.items[i].image = File.decode(ICON.littleMan);
                    // }
                    gui.list1.selection = upBtnIndex; //重新选中
                    gui.list1.notify("onChange");
                    sp_toolbar.drop.onChange();
                    //交换下拉列表
                    sp_toolbar.swap(sp_toolbar.drop.items[preIndex - 1], sp_toolbar.drop.items[preIndex]);
                    if (gui.list1.selection.index == 0) this.enabled = 0;
                    if (gui.list1.selection.index != 0) gui.up1.enabled = 1;
                    if (gui.list1.selection.index != gui.list1.children.length - 1) gui.down1.enabled = 1;
                } catch (e) { alert(e.line); }
            };
            gui.down1.onClick = function () {
                try {
                    if (!gui.list1.selection) return;
                    if (gui.list1.selection.index == gui.list1.items.length - 1) return;
                    var preIndex = gui.list1.selection.index;
                    var downBtnIndex = preIndex + 1;
                    var preImg = gui.list1.selection.image;
                    var downBtnImg = gui.list1.items[downBtnIndex].image;
                    //交换
                    sp_toolbar.swap(gui.list1.items[preIndex], gui.list1.items[downBtnIndex]);
                    gui.list1.selection.image = new Array();
                    gui.list1.items[downBtnIndex].image = new Array();
                    gui.list1.selection.image = downBtnImg;
                    gui.list1.items[downBtnIndex].image = preImg;
                    //操作XML
                    sp_toolbar.downGroup(gui.list1.selection.index);
                    sp_toolbar.downG1Img(gui.list1.selection.index); //移动图片
                    // xml.groupIcon.swap(xml.groupIcon.child(preIndex), xml.groupIcon.child(downBtnIndex))
                    // gui.list1.removeAll();
                    // for (var i = 0; i < xml.Group.children().length(); i++) {
                    //     gui.list1.add("item", xml.Group.child(i)['@groupName']);
                    //     gui.list1.items[i].image = File.decode(ICON.littleMan)
                    // }
                    gui.list1.selection = downBtnIndex; //重新选中
                    gui.list1.notify("onChange");
                    sp_toolbar.drop.onChange();
                    //交换下拉列表
                    sp_toolbar.swap(sp_toolbar.drop.items[preIndex + 1], sp_toolbar.drop.items[preIndex]);
                    if (gui.list1.selection.index == gui.list1.children.length - 1) this.enabled = 0;
                    if (gui.list1.selection.index != 0) gui.up1.enabled = 1;
                } catch (e) { }
            };
            //Keep和jump
            gui.Keep.onClick = function () {
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                PanelWHPrefXML.Panel.listKeep = this.value;
                writee(sp_PanelSetProfile, PanelWHPrefXML);
            };
            gui.Jump.onClick = function () {
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                PanelWHPrefXML.Panel.listJump = this.value;
                writee(sp_PanelSetProfile, PanelWHPrefXML);
            };
            //按钮移动到组
            gui.moveGup.addEventListener('mousedown', function (e) {
                if (e.button == 0) {
                    if (!gui.list2.selection) { alert('Please select first'); return; }
                    // alert(sp_toolbar.drop.items);
                    // alert(gui.list2.selection);
                    // if (!gui.list1.selection) return;
                    //UI创建
                    var title = gui.Keep.value == true ? 'Copy to...' : 'Move to...';
                    var win = new Window('window', title, undefined, { resizeable: true, closeButton: false, borderless: false });
                    win.alignment = ['fill', 'fill'];
                    win.spacing = 4;
                    win.margins = 4;
                    var arr = String(sp_toolbar.drop.items).split(',');
                    var gupLlist = win.add('listbox', undefined, undefined, { items: arr });
                    gupLlist.alignment = ['fill', 'fill'];
                    for (var i = 0; i < arr.length; i++) { //加图标
                        gupLlist.items[i].image = gui.list1.items[i].image;
                    }
                    gupLlist.itemSize[1] = 40;
                    var OKCangup = win.add('group');
                    OKCangup.orientation = 'row';
                    OKCangup.alignment = ['fill', 'bottom'];
                    var ok = OKCangup.add('button', undefined, 'OK');
                    var cancel = OKCangup.add('button', undefined, 'Cancel');
                    ok.alignment = cancel.alignment = ['fill', 'top'];
                    ok.alignment = ['fill', 'bottom'];
                    cancel.preferredSize[1] = 30;
                    ok.preferredSize[1] = 30;
                    var l = sp_toolbar.drop.selection;
                    //Function
                    ok.onClick = function () {
                        if (gui.list1.selection.index == gupLlist.selection.index) { alert('不能在同一组'); win.hide(); return; }
                        try {
                            //XML文件
                            var xml = new XML(readd(special_file));
                            //获得选定的项的xml数据
                            var getGupXml = new XML(xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index));
                            // xml.Group.child(gupLlist.selection.index).appendChild(getGupXml)
                            xml.Group.child(gupLlist.selection.index).appendChild(getGupXml);
                            //移动后保留当前组？
                            writee(special_file, xml);
                            //移动/复制 按钮？
                            if (gui.Keep.value == 0) {
                                sp_toolbar.delButton(gui.list1.selection.index, gui.list2.selection.index);
                                gui.list2.remove(gui.list2.selection.index);
                            }
                            //移动后选中组
                            if (gui.Jump.value == 1) {
                                gui.list1.items[gupLlist.selection.index].selected = true; //选中组一的项
                                gui.list2.items[gui.list2.items.length - 1].selected = true; //选中组二的项
                            }
                            win.hide();
                            //显示移动到哪个组信息
                            clearOutput();
                            write('移动到了：' + String(gupLlist.selection));
                        } catch (e) {
                            alert('ErrLine: ' + e.line + ' | Err: ' + e.message);
                        }
                    };
                    cancel.onClick = function () { win.hide(); };
                    win.onResize = function () { win.layout.resize(); };
                    win.show();
                    var pos = gui.settingWin.location;
                    win.location = [pos[0] + gui.settingWin.size[0], pos[1]];
                }
            });
            // gui.list2.onChange = function () {
            //     alert(gui.list2.selection.index)
            // }
            gui.create2.onClick = function () {
                try {
                    if (!gui.list1.selection) return;
                    if (gui.ed2.text == "") { alert("请先给按钮设置名称\n新建按钮下方的'名称'框"); return; };
                    //如果组2没有选中
                    if (!gui.list2.selection) {
                        var item = gui.list2.add("item", gui.ed2.text);
                        item.image = File.decode(ICON.nullImg); //图标
                        gui.list2.selection = item;
                        gui.ed2.text = gui.list2.selection.text;
                        sp_toolbar.addButton(gui.list1.selection.index, item, 0); //写入xml//没选中，第二个参数就不能用编辑框的名字
                    } else {
                        //如果组2选中了
                        var firstSel = gui.list2.selection.index;
                        // var item = gui.list2.add("item", gui.ed2.text, firstSel + 1);
                        // gui.list2.selection = item;
                        sp_toolbar.addButton(gui.list1.selection.index, gui.ed2.text, 1, firstSel);
                        //
                        //刷新：遍历当前组的所有item，加入到列表2
                        var xml = new XML(readd(special_file));
                        var thisXml = xml.Group.child(gui.list1.selection.index);
                        gui.list2.removeAll();
                        for (var i = 0; i < thisXml.children().length(); i++) {
                            gui.list2.add("item", thisXml.child(i).buttonName);
                            //加上图标
                            try {
                                if (thisXml.child(i).icon.toString().length < 10) { gui.list2.items[i].image = File.decode(ICON.nullImg); }
                                gui.list2.items[i].image = File.decode(thisXml.child(i).icon);
                                //解码图标的二进制代码
                            } catch (e) { } //解码图标的二进制代码
                        }
                        //重新选中item
                        gui.list2.selection = firstSel + 1;
                        if (gui.list2.selection.index != 0) gui.list2.revealItem(gui.list2.selection.index - 1);
                    }
                    {//测试完不用的：
                        //↓想弄新建之后在选中项后面的，没弄出来
                        // var xml = new XML(special_file.sp_toolbar_readdFile());
                        // var thisXML = xml.Group.child(gui.list1.selection.index).child(fid);
                        // gui.list2.selection = item;
                        //
                        // newXml.insertChildAfter(newXml.child(gui.list1.selection.index), newXml);
                        // //改变名称框
                        // gui.ed2.text = gui.list2.selection.text;
                        // //显示图标
                    }
                    sp_toolbar.drop.onChange();
                } catch (e) { alert(e.line + e.message); }
            };
            // gui.list2.onDoubleClick = function () {
            //     gui.list2.selection = null //双击取消选择
            // }
            gui.list2.addEventListener('mousedown', function (e) {
                if (e.button == 2) gui.list2.selection = null; //双击取消选择
            });
            gui.del2.onClick = function () {
                if (!gui.list1.selection) return;
                if (!gui.list2.selection) return;
                var preIndex = gui.list2.selection.index;
                sp_toolbar.delButton(gui.list1.selection.index, gui.list2.selection.index);
                gui.list2.remove(gui.list2.selection);
                sp_toolbar.drop.onChange();
                if (preIndex - 1 >= 0) {
                    gui.list2.selection = preIndex - 1;
                    if (gui.list2.selection.index != 0) gui.list2.revealItem(gui.list2.selection.index - 1); //最顶上显示2行
                    gui.ed3.parent.enabled = false;
                }
            };
            gui.up2.addEventListener('mousedown', function (e) {
                var preIndex = gui.list2.selection.index;
                var tempText = gui.list2.items[preIndex - 1].text;
                // var img1 = gui.list2.items[preIndex].image;
                // var img2 = gui.list2.items[preIndex - 1].image;
                var xml = new XML(readd(special_file));
                var im1 = xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index).icon;
                var im2 = xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index - 1).icon;
                function moveup() {
                    if (!gui.list1.selection) return;
                    if (!gui.list2.selection) return;
                    if (gui.list2.selection.index == 0) return;
                    sp_toolbar.upButton(gui.list1.selection.index, gui.list2.selection.index);
                    gui.list2.items[preIndex - 1].text = gui.list2.selection.text;
                    gui.list2.selection.text = tempText;
                    gui.list2.selection = gui.list2.items[preIndex - 1];
                    if (gui.list2.selection.index != 0) gui.list2.revealItem(gui.list2.selection.index - 1);//最顶上显示数量
                    //刷新图标
                    var NullImageObj = new Object();
                    gui.list2.items[preIndex - 1].image = NullImageObj;
                    gui.list2.items[preIndex].image = NullImageObj;
                    if (im1 != '') gui.list2.items[preIndex - 1].image = File.decode(im1);
                    if (im2 != '') gui.list2.items[preIndex].image = File.decode(im2);
                    if (im1 == '') gui.list2.items[preIndex - 1].image = File.decode(ICON.nullImg);
                    if (im2 == '') gui.list2.items[preIndex].image = File.decode(ICON.nullImg);

                    gui.list2.notify("onChange");
                    sp_toolbar.drop.onChange();
                    if (gui.list2.selection.index == 0) this.enabled = 0;
                    if (gui.list2.selection.index != 0) gui.up2.enabled = 1;
                    if (gui.list2.selection.index != gui.list2.children.length - 1) gui.down2.enabled = 1;
                }
                if (e.button == 0) {
                    try {
                        moveup();
                    } catch (e) { clearOutput(); write(e.message); }
                }
                {                        // if (e.button == 2) {
                    //     for (var i = 0; i < 6; i++) {
                    //         moveup()
                    //     }
                    // }
                    //重新载入列表
                    // var xml = new XML(special_file.sp_toolbar_readdFile());
                    // var thisXml = xml.Group.child(gui.list1.selection.index);
                    //遍历当前组的所有item，加入到列表2
                    // gui.list2.removeAll();
                    // for (var i = 0; i < thisXml.children().length(); i++) {
                    //     gui.list2.add("item", thisXml.child(i).buttonName);
                    //     // 加上图标
                    //     // var iii = File("E:\\003Footage\\06 Icon\\gear (1).png");
                    //     try {
                    //         gui.list2.items[i].image = File.decode(thisXml.child(i).icon);
                    //     } catch (e) { } //解码图标的二进制代码
                    // }
                }
                // gui.list2.selection = preIndex - 1;
            });
            gui.down2.addEventListener('mousedown', function (e) {
                //上下按钮文字交换
                var preIndex = gui.list2.selection.index;
                var tempText = gui.list2.items[preIndex + 1].text;
                // var img1 = gui.list2.items[preIndex].image;
                // var img2 = gui.list2.items[preIndex + 1].image;
                var xml = new XML(readd(special_file));
                var im1 = xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index).icon;
                var im2 = xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index + 1).icon;
                function movedown() {
                    if (!gui.list1.selection) return;
                    if (!gui.list2.selection) return;
                    if (gui.list2.selection.index == gui.list2.items.length - 1) return;
                    sp_toolbar.downButton(gui.list1.selection.index, gui.list2.selection.index);
                    gui.list2.items[preIndex + 1].text = gui.list2.selection.text;
                    gui.list2.selection.text = tempText;
                    gui.list2.selection = gui.list2.items[preIndex + 1];
                    if (gui.list2.selection.index != 0) gui.list2.revealItem(gui.list2.selection.index - 1); //最顶上显示数量
                    gui.list2.notify("onChange");
                    sp_toolbar.drop.onChange();

                    //刷新图标//如果没有图片则报错
                    var NullImageObj = new Object();
                    gui.list2.items[preIndex].image = NullImageObj;
                    gui.list2.items[preIndex + 1].image = NullImageObj;
                    if (im2 != '') gui.list2.items[preIndex].image = File.decode(im2);
                    if (im1 != '') gui.list2.items[preIndex + 1].image = File.decode(im1);
                    if (im1 == '') gui.list2.items[preIndex + 1].image = File.decode(ICON.nullImg);
                    if (im2 == '') gui.list2.items[preIndex].image = File.decode(ICON.nullImg);

                    //上下移动按钮是否可用
                    if (gui.list2.selection.index == gui.list2.children.length - 1) this.enabled = 0;
                    if (gui.list2.selection.index != 0) gui.up2.enabled = 1;
                    if (gui.list2.selection.index != gui.list2.children.length - 1) gui.down2.enabled = 1;
                }
                if (e.button == 0) {
                    try {
                        movedown();
                    } catch (e) { clearOutput(); write(e.message); }
                }
                {
                    // if (e.button == 2) {
                    //     for (var i = 0; i < 6; i++) {
                    //         movedown()
                    //     }
                    //     move5=true
                    // }

                    //重新载入列表
                    // var xml = new XML(special_file.sp_toolbar_readdFile());
                    // var thisXml = xml.Group.child(gui.list1.selection.index);
                    // //遍历当前组的所有item，加入到列表2
                    // gui.list2.removeAll();
                    // for (var i = 0; i < thisXml.children().length(); i++) {
                    //     gui.list2.add("item", thisXml.child(i).buttonName);
                    //     // 加上图标
                    //     // var iii = File("E:\\003Footage\\06 Icon\\gear (1).png");
                    //     try {
                    //         gui.list2.items[i].image = File.decode(thisXml.child(i).icon);
                    //     } catch (e) { } //解码图标的二进制代码
                    // }
                }
                // gui.list2.selection = preIndex + 1;
            });
            // gui.slWin.onChange = gui.slWin.onChanging = function () { //列表高度
            //     // clearOutput();
            //     // // write(res0.gr1.slWinst.value)
            //     // write(parseInt(gui.slWin.value))
            //     // //显示滑竿当前值
            //     gui.slWinst.text = parseInt(gui.slWin.value);
            //     // //右边框框数值
            //     gui.slWinEdtxt.text = parseInt(gui.slWin.value);
            //     // //调整窗口高度
            //     // // res0.gr1.slWinst.text=this.value;
            //     // gui.list1.size[1] = parseInt(this.value) * 5;
            //     // gui.list2.size[1] = parseInt(this.value) * 5;
            //     // //
            //     win.onResize();
            //     gui.settingWin.layout.resize();
            //     gui.settingWin.layout.layout(true);
            // }
            // gui.slexp.onChange = gui.slexp.onChanging = function () { //表达式窗口高度窗口
            //     clearOutput();
            //     write(gui.ed3.size)
            //     //显示滑竿当前值
            //     gui.slWexpst.text = parseInt(gui.slexp.value);
            //     //右边框框数值
            //     gui.slWexpEdtxt.text = parseInt(gui.slexp.value);
            //     //表达式框框高度调节
            //     gui.ed3.size[1] = gui.slexp.value * 4;
            //     //
            //     win.onResize();
            //     gui.settingWin.layout.resize();
            //     gui.settingWin.layout.layout(true);
            // }

            //获得单个按钮XML信息

            gui.GetBtnXml.addEventListener('mousedown', function (event) {
                if (event.button == 0) {
                    var w = uiGetXML();
                    // w.location = [e.screenX-50,e.screenY-50];
                    w.location = [event.screenX + 120, event.screenY];
                    w.show();
                    w.size = [300, 300];
                    function uiGetXML() {
                        var w = new Window('palette', undefined, undefined, { resizeable: true, margins: 3, borderless: false });
                        w.spacing = 4;
                        w.margins = 4;
                        var ed = w.add('edittext', undefined, undefined, { multiline: true, scrolling: true, borderless: true, closebutton: false });
                        var close = w.add('button', undefined, 'Close');
                        close.alignment = ['fill', 'bottom'];
                        ed.alignment = ['fill', 'fill'];
                        close.preferredSize[1] = 30;
                        ed.graphics.backgroundColor = ed.graphics.newBrush(ed.graphics.BrushType.SOLID_COLOR, [.2, .2, .2, 1]);
                        //读取XML文件
                        var xml = new XML(readd(special_file));
                        var xmlThisBtn = xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index);
                        ed.text = '<Main>\n' + xmlThisBtn.toXMLString() + '\n</Main>';
                        close.onClick = function () { w.hide(); };
                        w.onResize = function () { this.layout.resize(); };
                        w.onClose = function () { this.hide(); };
                        return w;
                    }
                }
            });

            gui.ed01.onChange = function () {
                this.text = parseInt(this.text);
                gui.sl1.value = parseInt(this.text);
                gui.sl1.notify("onChange");
            };
            gui.ed02.onChange = function () {
                this.text = parseInt(this.text);
                gui.sl2.value = parseInt(this.text);
                gui.sl2.notify("onChange");
            };
            gui.ed03.onChange = function () {
                this.text = parseInt(this.text);
                gui.sl3.value = parseInt(this.text) + 5;
                gui.sl3.notify("onChange");
            };
            gui.ed04.onChange = function () {
                this.text = parseInt(this.text);
                gui.sl4.value = parseInt(this.text) + 5;
                gui.sl4.notify("onChange");
            };
            /**获取图标信息面板
             */
            function getImagMessageWin() {
                var w = new Window('palette', 'GetImageMessage:', undefined);
                w.alignment = ['fill', 'fill'];
                w.spacing = w.margins = 0;
                w.ed = w.add('edittext', undefined, '', { multiline: true });
                w.ed.alignment = ['fill', 'fill'];
                w.ed.preferredSize = [500, 120];
                w.gup = w.add('group');
                w.gup.alignment = ['fill', 'bottom'];
                w.gup.spacing = 0;
                w.gup.margins = 1;
                w.click = w.gup.add('button', undefined, 'Click');
                w.click.alignment = ['fill', 'fill'];
                return w;
            }

            gui.importImg.addEventListener('mousedown', function (e) {//导入image
                var w = getImagMessageWin();
                w.click.onClick = function () {
                    try {
                        var content = w.ed.text;
                        if (content == '') return;
                        if (content.substring(0, 1) != "\"") {
                            alert("Not start with \"");
                            return;
                        }
                        //存入配置的内容不需要双引号，所以裁切掉开头和结尾的双引号
                        content = content.substring(1, content.length - 1);
                        var xml = new XML(readd(special_file));
                        xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index).icon = content;
                        writee(special_file, xml);
                        droplist.notify('onChange');
                        group.children[gui.list2.selection.index].image = decodeURIComponent(content);
                        group.children[gui.list2.selection.index].onDraw = sp_toolbar.newDraw;
                        gui.list2.selection.image = {}; //显示空白图像                                
                        gui.list2.selection.image = decodeURIComponent(content);
                        gui.list2.itemSize[1] = 33;
                        sp_toolbar.drop.onChange();
                        w.close();
                    } catch (e) { alert(e.line + e.message); };
                };
                w.layout.layout(true);
                w.show();
                var pos = gui.settingWin.location;
                w.location = [pos[0] + gui.settingWin.size[0], e.screenY - 200];
                w.size = [250, 250];
                w.layout.resize();
            });
            gui.getImg.addEventListener('mousedown', function (e) {//获得image
                // var w = getImagMessageWin();
                var xml = new XML(readd(special_file));
                var iconStr = "\"" + String(xml.Group.child(gui.list1.selection.index).child(gui.list2.selection.index).icon) + "\"";
                // var content = prompt('The image binary message:', icon)
                var w = smallpan('palette', iconStr);
                w.layout.layout(true);
                w.show();
                var pos = gui.settingWin.location;
                w.location = [pos[0] + gui.settingWin.size[0], e.screenY - 200];
                w.size = [250, 250];
                w.layout.resize();
                return;
                // w.ed.text=icon;
                // w.click.onClick = function(){w.hide()};
                // w.location = [e.screenX+150,e.screenY-50];
                // w.show();
            });
            gui.delPic.onClick = function () {
                if (!sp_toolbar.drop.selection) return;
                gui.ed5.text = "";
                var preIndex = sp_toolbar.drop.selection.index;
                if (sp_toolbar.notSaveButton != -1) {
                    sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, "");
                }
                try {
                    sp_toolbar.drop.removeAll();
                    var xml = new XML(readd(special_file));
                    for (var i = 0; i < xml.Group.children().length(); i++) {
                        droplist.add("item", xml.Group.child(i)['@groupName']);
                    }
                    sp_toolbar.drop.selection = preIndex;
                    gui.list2.selection.image = new Object(); //显示空白图像
                    gui.list2.selection.image = File.decode(ICON.nullImg);
                } catch (err) { }
            };
            gui.icon.onClick = function () {
                try {
                    var files = File.openDialog("Select icon");
                    if (!files) return;
                    if (files.toString().indexOf(".jpg") == -1 && files.toString().indexOf(".png") == -1) return;
                    if (!gui.list2.selection) return;
                    //获得照片的二进制代码
                    var myImg = ScriptUI.newImage(files);
                    gui.ed5.text = "Has Icon~";
                    files.open("r");
                    files.encoding = "BINARY";
                    var content = encodeURIComponent(files.read());
                    files.close();
                    group.children[gui.list2.selection.index].image = decodeURIComponent(content);
                    group.children[gui.list2.selection.index].onDraw = sp_toolbar.newDraw;
                    if (sp_toolbar.notSaveButton != -1) {
                        sp_toolbar.saveButton(gui.list1, gui.list2, gui.ed2, gui.modifiers, gui.ed3, gui.clickDrop, gui.ed4, content);
                    }
                    gui.list2.selection.image = myImg;
                    gui.list2.itemSize[1] = 33;
                } catch (err) { alert(err.line.toString() + "\r" + err.toString()); }
                sp_toolbar.drop.onChange();
            };

            gui.ok.onClick = function () {
                var str = parseInt(view.itemSize[0]) + "," + parseInt(view.itemSize[1]);
                app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "buttonSize", str);
                var str = parseInt(view.itemSpacing[0]) + "," + parseInt(view.itemSpacing[1]);
                app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing", str);
                sp_toolbar.close = -1;
                keepRf.w.close();
                sp_toolbar.close = 0;
                sp_toolbar.drop.onChange();
                //记录打钩状态
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                PanelWHPrefXML.Panel.listKeep = gui.Keep.value;
                PanelWHPrefXML.Panel.listJump = gui.Jump.value;
                PanelWHPrefXML.Panel.hasShowWin = false;//写入窗口是否显示
                writee(sp_PanelSetProfile, PanelWHPrefXML);
            };
            gui.can.onClick = function () {
                var conf = confirm(special_loc >> special_str.quit);
                //当前选中id
                var currentID = Number(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "dropSelection"));

                if (conf == true) {
                    backupFile.copy(special_file);
                    /******拷贝回来*********/
                    try {
                        sp_toolbar.drop.removeAll();
                        var xml = new XML(readd(special_file));
                        for (var i = 0; i < xml.Group.children().length(); i++) {
                            droplist.add("item", xml.Group.child(i)['@groupName']);
                        }
                        sp_toolbar.drop.selection = 0;
                    } catch (err) { }
                    /*****************/
                    var str = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "buttonSize");
                    var stra = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing");
                    view.itemSize = [parseInt(str.split(",")[0]), parseInt(str.split(",")[1])];
                    view.itemSpacing = [parseInt(stra.split(",")[0]), parseInt(stra.split(",")[1])];
                    win.onResize();
                    sp_toolbar.close = -1;
                    keepRf.w.close();
                    sp_toolbar.close = 0;
                    //写入窗口显示状态
                    var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                    PanelWHPrefXML.Panel.hasShowWin = false;//写入窗口是否显示
                    writee(sp_PanelSetProfile, PanelWHPrefXML);
                    droplist.selection = currentID;
                }
            };
            keepRf.w.onClose = function () {
                //当前选中id
                var currentID = Number(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "dropSelection"));

                sp_toolbar.drop.enabled = 1;
                if (sp_toolbar.close == -1) return;
                var conf = confirm(special_loc >> special_str.save);
                if (conf == true) {
                    var str = parseInt(view.itemSize[0]) + "," + parseInt(view.itemSize[1]);
                    app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "buttonSize", str);
                    var str = parseInt(view.itemSpacing[0]) + "," + parseInt(view.itemSpacing[1]);
                    app.settings.saveSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing", str);
                } else {
                    backupFile.copy(special_file);
                    /******拷贝回来*********/
                    try {
                        sp_toolbar.drop.removeAll();
                        var xml = new XML(readd(special_file));
                        for (var i = 0; i < xml.Group.children().length(); i++) {
                            droplist.add("item", xml.Group.child(i)['@groupName']);
                        }
                        sp_toolbar.drop.selection = 0;
                    } catch (err) { }
                    /*****************/
                    var str = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "buttonSize");
                    var stra = app.settings.getSetting("Sp_toolbar" + BarID.toString(), "buttonSpacing");
                    view.itemSize = [parseInt(str.split(",")[0]), parseInt(str.split(",")[1])];
                    view.itemSpacing = [parseInt(stra.split(",")[0]), parseInt(stra.split(",")[1])];
                    win.onResize();
                }
                //写入窗口显示状态
                var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
                PanelWHPrefXML.Panel.hasShowWin = false;//写入窗口是否显示
                writee(sp_PanelSetProfile, PanelWHPrefXML);

                droplist.selection = currentID; //重新选中droplist项
            };

            //Col: 设置面板颜色, 方块外框颜色, 方块色
            uiSetBgColor(gui.settingWin, BGcolorRBGA / 255);
            uiSetBgColor(gui.colpanBord, [.5, .5, .5, .8]);
            uiSetBgColor(gui.colset, BGcolorRBGA / 255);
            //页1-What can i say here~
            uiSetForeColor(gui.settingWin.res4.gr1.ed, [1, 1, 1, 1], 1);
            uiSetBgColor(gui.settingWin.res4.gr1.ed, [.14, .14, .14, 1]);
            //编辑框背景色
            // var edObjectColor = [.1, .1, .1, .5];
            var col_gray = [.14, .14, .14, 1];
            uiSetBgColor(gui.ed1, col_gray);
            uiSetBgColor(gui.ed2, col_gray);

            uiSetBgColor(gui.ed4, col_gray);
            uiSetBgColor(gui.ed01, col_gray);
            uiSetBgColor(gui.ed02, col_gray);
            uiSetBgColor(gui.ed03, col_gray);
            uiSetBgColor(gui.ed04, col_gray);
            uiSetBgColor(gui.subName, col_gray);

            var edColor = {
                darkmode: [.22, .22, .22, .9],
                whitemode: [0.86, 0.84, 0.79]
            };
            if (eval(app.settings.getSetting("Sp_toolbar" + BarID.toString(), "codeEditBoxDarkColor")) == true) {
                uiSetBgColor(gui.ed3, edColor.darkmode); //代码编辑框
                uiSetForeColor(gui.ed3, edColor.whitemode, 3);
            } else {
                uiSetBgColor(gui.ed3, edColor.whitemode); //代码编辑框
                uiSetForeColor(gui.ed3, edColor.darkmode, 3);
            }
            //*****************************************/
            //****************载入配置*****************/
            //*****************************************/

            var xml = new XML(readd(special_file));
            //载入到打开窗口的列表中
            for (var i = 0; i < xml.Group.children().length(); i++) {
                // var xmlIco = xml.Group.child(i).groupIcon;
                gui.list1.add("item", xml.Group.child(i)['@groupName']);
                try {
                    //左边列表加上图标
                    gui.list1.items[i].image = decodeURIComponent(xml.groupIcon.child(i));
                } catch (e) { $.writeln(e); }
                // $.writeln(xmlIco)
                // $.writeln(typeof xmlIco)
            }
            //列表图标大小
            gui.list1.itemSize = gui.list2.itemSize = [35, 35];
            //滑块数值
            gui.sl1.value = view.itemSize[0];
            gui.sl2.value = view.itemSize[1];
            gui.sl3.value = view.itemSpacing[0] + 5;
            gui.sl4.value = view.itemSpacing[1] + 5;
            gui.ed01.text = view.itemSize[0];
            gui.ed02.text = view.itemSize[1];
            gui.ed03.text = view.itemSpacing[0];
            gui.ed04.text = view.itemSpacing[1];

            if (groupIndex != -1) {
                gui.list1.selection = groupIndex;
                gui.list1.notify("onChange");
                gui.list2.selection = null;
                gui.list2.selection = 0;
                try {
                    // var listSelectionType = typeArr.indexOf(String(xml.Group.children()[groupIndex].children()[0].click.type));
                    // if (listSelectionType != -1) {
                    //     $.writeln(listSelectionType);
                    //     $.writeln(gui.typeDrop.selection)
                    //     gui.typeDrop.selection = listSelectionType;
                    // }
                } catch (e) {
                    $.writeln('ERROR:' + e.line + e.message);
                }
            } else {
                gui.list2.parent.enabled = 0;
                gui.ed3.parent.enabled = 0;
            }
            //加载的图标图案
            // var iii = File("E:\\【GFred】\\01Collect\\【ICON】AE工具栏图标Toolbar\\A_人物.png");
            // // alert(gui.list2.items[2])
            // for (var i = 0; i < gui.list2.numItems; i++) {
            //     gui.list2.items[i].image = iii;
            // }

            //

            this.w.show();
            //写入窗口状态
            var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
            PanelWHPrefXML.Panel.hasShowWin = true;
            writee(sp_PanelSetProfile, PanelWHPrefXML);
            //列表高度设置
            var PanelWHPrefXML = new XML(readd(sp_PanelSetProfile));
            gui.list1.size[1] = gui.list2.size[1] = Number(PanelWHPrefXML.Panel.list);
            //表达式编辑框高度
            gui.ed3.size[1] = Number(PanelWHPrefXML.Panel.editBox);
            //滑块1
            gui.pg2sld1Text.text = Number(PanelWHPrefXML.Panel.list).toFixed(1);
            gui.pg2sld1.value = Number(PanelWHPrefXML.Panel.list).toFixed(1);
            //数值2
            gui.pg2sld2Text.text = Number(PanelWHPrefXML.Panel.editBox).toFixed(1);
            gui.pg2sld2.value = Number(PanelWHPrefXML.Panel.editBox).toFixed(1);
            gui.settingWin.tab1.size[1] = gui.settingWin.res1.gr3.ok.location[1];
            this.w.layout.layout(true);

            this.w.center();

            return this.w;
        }   //SettingWin function end
    }  // Sp_toolbar function end
})(this)


