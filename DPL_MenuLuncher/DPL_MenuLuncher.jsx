/**DPL_MenuLuncher 
 * @update
 * 1.0.0
 * 1.1.0
 * 1.1.2 调整scrollbar宽度
 * 1.2.0 添加收藏
 * 1.2.1 修复bug
 * 1.3.0 Fav添加样式
 * 1.3.1 修正路径引用,修正ui bug
 */
(function () {
    var info = {
        name: 'DPL_MenuLuncher',
        version: '1.3.1',
        date: '2026.07.05',
        author: 'GFred',
        copyright: '©2026-' + (new Date()).getFullYear(),
        update: '1.0.0\n1.1.0 fix bug\n1.1.1 fix bug\n',
        about: 'Bug Report: qq:1540026576 / 1540026576@qq.com\n\nA list for lunch script with ui\n\nThis script can not dock, but support set hotkey and luncher'
    };

    /**文件夹
     * 判断是否在Script文件夹或者Startup文件夹
     */
    var sptParentFolder = File($.fileName).parent;
    var sptParentFolderName = sptParentFolder.fsName;

    // var aeScriptUIFolder = new Folder("C:\\Program Files\\Adobe\\Adobe After Effects 2024\\Support Files\\Scripts\\ScriptUI Panels");
    var sptUIFolderPath,
        sptUIFolder;

    sptUIFolderPath = sptParentFolderName + "\\ScriptUI Panels";
    sptUIFolder = Folder(sptUIFolderPath);
    if (!sptUIFolder.exists) {
        //查找是否为Startup文件夹
        var thisFolder = sptParentFolderName;
        if (thisFolder.indexOf('\\Startup') == -1) {
            alert('folder path error! or this script is not installed in the "Script" of "Startup" folder!');
            return;
        }
        sptUIFolder = Folder(File($.fileName).parent.parent.fsName + "\\ScriptUI Panels");
    }


    /**配置 */
    initSet(info.name, 'edText', '');
    initSet(info.name, 'sptSize', '[300,300]');
    initSet(info.name, 'collpase', false);
    initSet(info.name, 'location', '[100,100]');
    initSet(info.name, 'scrollVal', 0);


    var setXML = {
        createXML: function () {
            var str = '';
            str += '<root>';
            str += '<Fav/>';
            str += '</root>';
            return str;
        }
    };


    var profile = initProfile(info.name);
    if (!profile.file.exists) writee(profile.file, setXML.createXML());
    if (readd(profile.file) == '') writee(profile.file, setXML.createXML());

    /**初始化配置文件 目录为DumplingScript
     * @param {string} _scriptName 配置文件名称
     * @returns { obj } {fdPath, fd, path, file} {文件夹路径，文件夹，配置路径，配置}
     */
    function initProfile(_scriptName) {
        //folder
        var fdPath = Folder.userData.fullName + "/Aescripts/DumplingScript/";
        var fd = new Folder(fdPath);
        if (!fd.exists) fd.create();
        //profile
        var path = fdPath + _scriptName + '.xml';
        var file = new File(path);
        return {
            fdPath: fdPath,
            fd: fd,
            path: path,
            file: file
        };
    }

    /**UI */
    function UI_List() {
        var w = new Window('palette', info.name, [0, 0, 150, 150], {
            resizeable: true
        });
        w.orientation = 'row';
        w.alignment = ['fill', 'fill'];
        w.margins = w.spacing = 0;
        var g = w.add('group');
        g.orientation = 'column';
        g.alignment = ['fill', 'fill'];
        g.margins = g.spacing = 0;


        var gTitle = g.add('group', [0, 0, 15, 15]);
        gTitle.alignment = ['fill', 'top'];
        gTitle.margins = 0;
        gTitle.spacing = 0;

        var title = gTitle.add('statictext{justify:"center",alignment:["fill","center"],size:[15,15]}');
        title.text = info.name + ' ' + info.version + ' ©' + info.author;
        title.margins = title.spacing = 0;

        title.helpTip = info.about;

        var bBili = gTitle.add('button', [0, 0, 15, 15], undefined, { style: "toolbutton" });
        bBili.text = 'B';
        bBili.alignment = ['right', 'fill'];
        bBili.margins = bBili.spacing = 0;


        var gSearch = g.add('group', [0, 0, 20, 20]);
        gSearch.alignment = ['fill', 'top'];
        gSearch.margins = 0;
        gSearch.spacing = 0;

        var bMin = gSearch.add('customButton', [0, 0, 20, 20], undefined, { style: "toolbutton" });
        bMin.text = 'M';
        bMin.alignment = ['left', 'center'];
        var ed = gSearch.add('edittext', [0, 0, 20, 20], '', { style: "toolbutton" });
        ed.alignment = ['fill', 'center'];
        ed.margins = ed.spacing = 0;

        var sett = gSearch.add('iconbutton', [0, 0, 15, 15], undefined, { style: "toolbutton" });
        sett.text = 's';
        sett.alignment = ['right', 'center'];
        sett.margins = sett.spacing = 0;

        var gFav = g.add('group', [0, 0, 20, 20]);
        gFav.alignment = ['fill', 'top'];
        gFav.margins = 0;
        gFav.spacing = 0;


        var gBtns = g.add('group', [0, 0, 20, 20]);
        gBtns.orientation = 'column';
        gBtns.alignment = ['fill', 'fill'];
        gBtns.margins = gBtns.spacing = 0;

        var gMsg = g.add('group', [0, 0, 15, 15]);
        gMsg.orientation = 'column';
        gMsg.alignment = ['fill', 'bottom'];
        gMsg.margins = gMsg.spacing = 0;

        var aboutStr = info.copyright + ' ' + info.author + ' v' + info.version + ' ';

        var msg = gMsg.add('statictext{justify:"center"}', undefined, aboutStr, { justify: 'center' });
        msg.text = aboutStr;
        msg.alignment = 'fill';
        msg.margins = msg.spacing = 0;

        var scrollPan = w.add('group', [0, 0, 15, 50]);
        scrollPan.orientation = 'column';
        scrollPan.alignment = ['right', 'fill'];
        scrollPan.margins = scrollPan.spacing = 0;

        var scrolTop = scrollPan.add('button', [0, 0, 15, 15], '▲');
        scrolTop.alignment = ['fill', 'top'];
        scrolTop.margins = scrolTop.spacing = 0;

        var scroll = scrollPan.add('scrollbar', [0, 0, 15, 50], 0, 0, 500);
        scroll.alignment = ['right', 'fill'];

        var scrolBottom = scrollPan.add('button', [0, 0, 15, 15], '▼');
        scrolBottom.alignment = ['fill', 'bottom'];
        scrolBottom.margins = scrolBottom.spacing = 0;

        var btnSize = [150, 30];
        var minWinX = 50;
        var minWinY = parseInt(gTitle.size[1]) + parseInt(gSearch.size[1]);//26;
        var favBtnHeight = 30;

        scroll.stepdelta = btnSize[1];
        scroll.jumpdelta = btnSize[1] * 5;

        scrolTop.onClick = function () {
            scroll.value = 0;
            scroll.onChange();
        };
        scrolBottom.onClick = function () {
            scroll.value = scroll.maxvalue;
            scroll.onChange();
        };

        /**fns */
        function getSpts(_folderObj) {
            var fd = _folderObj;
            if (!fd) { return; }
            var files = fd.getFiles();
            var names = [],
                fs = [],
                fds = [];
            for (var i = 0; i < files.length; i++) {
                names.push(decodeURIComponent(files[i].fsName));
                if (files[i] instanceof Folder) fds.push(files[i]);
                else {
                    if (files[i].name.match(/\.jsx(bin)?$/)) fs.push(files[i]);
                };
            }
            return fs;
        }
        function collpasePanel(e) {
            var x = minWinY,
                y = minWinY;
            if (e && e.button == 2) {
                x = w.size[0];
                y = minWinY + parseInt(favBtnHeight);
            };
            //判断是否折叠起来了
            var needToCollpase = (
                // w.size[0] > 60 &&
                w.size[1] > y
            ) ? true : false;
            saveSet(info.name, 'collpase', needToCollpase);
            var s = eval(getSet(info.name, 'sptSize'));
            w.size = needToCollpase ? [x, y] : s;
        }
        function drawArrow() {
            var g = this.graphics;
            var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.8, 1, 1, 1]);
            var center = [this.size[0] / 2, this.size[1] / 2];
            var dis = 10;
            g.newPath();
            g.moveTo(center[0] - dis / 2, center[1] - dis / 2);
            g.lineTo(center[0] + dis / 2, center[1] - dis / 2);
            g.lineTo(center[0], center[1] + dis / 2);
            g.fillPath(brush1);
        }
        function drawArrowCollpase() {
            var g = this.graphics;
            var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [1, 1, 1, 1]);
            var center = [this.size[0] / 2, this.size[1] / 2];
            var dis = 10;
            g.newPath();
            g.moveTo(center[0] - dis / 2, center[1] - dis / 2);
            g.lineTo(center[0] + dis / 2, center[1]);
            g.lineTo(center[0] - dis / 2, center[1] + dis / 2);
            g.fillPath(brush1);
        }
        function addToFav() {
            var xml = new XML(readd(profile.file));
            xml.Fav.appendChild(new XML('<p>' + this.text + '</p>'));
            writee(profile.file, xml.toString());
            loadFavBtn();
            var s = w.size;
            w.layout.layout(true);
            w.size = s;
        }
        function removeFavBtn() {
            var xml = new XML(readd(profile.file));
            delete xml.Fav.children()[this.index];
            writee(profile.file, xml.toString());
            gFav.remove(this);
            loadFavBtn();
            var s = w.size;
            w.layout.layout(true);
            w.layout.resize();
            w.size = s;
        }
        function applyFavBtn(_file) {
            if (_file == undefined || !_file.exists) {
                alert('err');
                return;
            }
            app.executeCommand(app.findMenuCommandId(this.text));
        }
        function loadBtn() {
            try {
                var fd = sptUIFolder;
                if (!fd) {
                    alert('folder path error!');
                    return;
                }
                var fs = getSpts(fd);
                if (fs == [] || fs == null) return;
                //remove
                if (gBtns.children.length > 0) {
                    for (var i = gBtns.children.length - 1; i >= 0; i--) { gBtns.remove(gBtns.children[i]); }
                }
                //load
                for (var i = 0; i < fs.length; i++) {
                    var fName = decodeURIComponent(fs[i].name);
                    var btn = gBtns.add('customButton', [0, 0, btnSize[0], btnSize[1]], undefined, { style: "toolbutton" });
                    btn.text = fName;
                    btn.index = i;
                    btn.alignment = ['fill', 'top'];
                    btn.helpTip = 'Alt+LMB: Add to Fav';
                    function randVal() {
                        var val = Math.random();
                        if (val < .5) rand = .5;
                        return val;
                    }
                    function drawBtn() {
                        var g = this.graphics;
                        var pen1 = g.newPen(g.PenType.SOLID_COLOR, [1, 1, 1], 2);
                        var brush_corner = g.newBrush(g.BrushType.SOLID_COLOR, [.7, .8, .8, 1]);
                        var brush_bgCol1 = g.newBrush(g.BrushType.SOLID_COLOR, [.4, .5, .4, .3]);
                        var brush_bgCol2 = g.newBrush(g.BrushType.SOLID_COLOR, [.3, .3, .4, .3]);
                        g.rectPath(0, 0, this.size[0], this.size[1]);
                        g.rectPath(0, 0, this.size[0], this.size[1]);
                        this.index % 2 ? g.fillPath(brush_bgCol1) : g.fillPath(brush_bgCol2);
                        g.newPath();
                        g.moveTo(0, 0);
                        g.lineTo(3, 0);
                        g.lineTo(0, 3);
                        g.fillPath(brush_corner);
                        g.newPath();
                        var id = '(' + zeroLen(this.index + 1) + ')   ';
                        g.drawString(id + this.text, pen1, 5, 3);
                    }
                    function drawBtnHover() {
                        var g = this.graphics;
                        var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.8, 1, 1], 2);
                        var pen2 = g.newPen(g.PenType.SOLID_COLOR, [1, 1, .8], 2);
                        var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.2, .3, .3, 1]);
                        g.newPath();
                        g.rectPath(0, 0, this.size[0], this.size[1]);
                        g.fillPath(brush1);
                        g.newPath();
                        g.moveTo(0, this.size[1]);
                        g.lineTo(this.size[0], this.size[1]);
                        g.strokePath(pen2);
                        g.newPath();
                        g.drawString(this.text, pen1, 5, 3);
                    }
                    function zeroLen(num) {
                        if (num.toString().length == 1) {
                            return '0' + num.toString();
                        }
                        return num;
                    }
                    btn.onDraw = drawBtn;
                    btn.addEventListener('mouseover', function (e) { this.onDraw = function () { drawBtnHover.call(this); }; });
                    btn.addEventListener('mouseout', function (e) { this.onDraw = function () { drawBtn.call(this); }; });
                    btn.addEventListener('mousedown', function (e) {
                        if (e.altKey && e.button == 0) { addToFav.call(this); return; }
                        if (e.button == 0) {
                            var cmd = app.findMenuCommandId(this.text);
                            app.executeCommand(cmd);
                        }

                    });
                }
                //记录滑竿数值
                var scval = eval(app.settings.getSetting(info.name, 'scrollVal'));
                var s = gBtns.children.length * btnSize[1];
                scroll.maxvalue = s - btnSize[1];
                //恢复滑竿数值
                scroll.value = scval;
            } catch (e) { print(e.line + e.message); }
        }
        function loadFavBtn() {
            var xml = new XML(readd(profile.file));
            gFav.size[1] = favBtnHeight;
            if (xml.Fav.children().length() == 0) {
                gFav.size[1] = 0;
                return;
            }
            for (var i = gFav.children.length - 1; i >= 0; i--) { gFav.remove(gFav.children[i]); }
            for (var i = 0; i < xml.Fav.children().length(); i++) {
                var path = sptUIFolderPath + '\\' + xml.Fav.child(i).toString();
                var file = new File(path);
                var name = 'ERR';
                var btn = gFav.add('custombutton', [0, 0, favBtnHeight, favBtnHeight], undefined, { style: 'toolbutton' });
                btn.alignment = ['fill', 'fill'];
                btn.margins = btn.spacing = 0;
                btn.index = i;
                btn.text = name;
                if (file.exists) btn.text = btn.helpTip = decodeURIComponent(file.name);
                btn.helpTip += '\nCtrl+LMB: Remove';
                btn.onDraw = drawBtn;
                btn.addEventListener('mouseover', function (e) { this.onDraw = drawBtnHover; });
                btn.addEventListener('mouseout', function (e) { this.onDraw = drawBtn; });
                btn.addEventListener('mousedown', function (e) {
                    if (e.ctrlKey && e.button == 0) {
                        removeFavBtn.call(this);
                        return;
                    }
                    if (e.button == 0) {
                        applyFavBtn.call(this, file);
                        return;
                    }
                });
            }
            function drawBtn() {
                var g = this.graphics;
                var pen1 = g.newPen(g.PenType.SOLID_COLOR, [1, 1, 1, 1], 1);
                var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.32, .25, .28, 1]);
                var brush2 = g.newBrush(g.BrushType.SOLID_COLOR, [.35, .28, .22, 1]);
                var mss = g.measureString(this.text);
                var font = ScriptUI.newFont("Segoe UI", ScriptUI.FontStyle.REGULAR, 14);
                var x = this.size[0] / 2 - mss[0] / 2,
                    y = this.size[1] / 2 - mss[1] / 2;
                g.newPath();
                g.rectPath(0, 0, this.size[0], this.size[1]);
                g.fillPath(this.index % 2 ? brush2 : brush1);
                g.newPath();
                g.moveTo(0, 0);
                g.lineTo(0, this.size[1]);
                g.lineTo(this.size[0], this.size[1]);
                g.strokePath(pen1);
                g.drawString(this.text, pen1, 4, 2, font);
            }
            function drawBtnHover() {
                var g = this.graphics;
                var pen1 = g.newPen(g.PenType.SOLID_COLOR, [.7, .8, 1, 1], 2);
                var brush1 = g.newBrush(g.BrushType.SOLID_COLOR, [.32, .35, .48, 1]);
                var brush2 = g.newBrush(g.BrushType.SOLID_COLOR, [.35, .38, .42, 1]);
                var mss = g.measureString(this.text);
                var font = ScriptUI.newFont("Segoe UI", ScriptUI.FontStyle.BOLD, 15);
                var x = this.size[0] / 2 - mss[0] / 2,
                    y = this.size[1] / 2 - mss[1] / 2;
                g.newPath();
                g.rectPath(0, 0, this.size[0], this.size[1]);
                g.fillPath(this.index % 2 ? brush2 : brush1);
                g.newPath();
                g.moveTo(0, 0);
                g.lineTo(0, this.size[1]);
                g.lineTo(this.size[0], this.size[1]);
                g.strokePath(pen1);
                g.drawString(this.text, pen1, 4, 2, font);
            }
        }
        function loadColor() {
            uiSetForeColor(title, [.9, .6, .9, 1], 2);
        }

        /**load */
        loadBtn();
        bMin.onDraw = drawArrow;

        loadFavBtn();
        loadColor();

        /**events */
        bBili.onClick = function () {
            var biliLink = "https://space.bilibili.com/67956004";
            system.callSystem("explorer " + biliLink);
        };
        bMin.addEventListener('mousedown', function (e) {
            collpasePanel(e);
            w.size[0] += 1; w.size[0] -= 1;
        });
        ed.addEventListener('mousedown', function (e) {
            if (e.button == 1) {
                this.text = '';
                this.notify('onChange');
                app.settings.saveSetting(info.name, 'edText', this.text);
            }
        });
        ed.onChange = ed.onChanging = function () {
            loadBtn();
            if (this.text == '') {
                w.size[0] += 1; w.size[0] -= 1;
                return;
            };
            var reg = /\+|\-|\*|\//g;
            var tArr = this.text.toLowerCase();
            for (var i = gBtns.children.length - 1; i >= 0; i--) {
                var btn = gBtns.children[i];  // 从后往前删除
                try {
                    //列表的文字去除特殊字符
                    var t = btn.text.toLowerCase().replace(/\_/g, ' ');
                    //搜索的文字分组
                    if (!t.match(eval('\/' + tArr.replace(/\,/g, '\|') + '\/g'))) gBtns.remove(btn);
                } catch (e) { continue; }
            }
            scroll.value = 0;
            scroll.notify('onChange');
            w.size[0] += 1; w.size[0] -= 1;
            app.settings.saveSetting(info.name, 'edText', this.text);
        };
        ed.addEventListener('mouseout', function (e) {
            this.active = false;
            gBtns.active = false;
            gBtns.active = true;
        });
        sett.onClick = function () {
            system.callSystem('explorer ' + profile.file.fsName);
        };
        scroll.onChange = scroll.onChanging = function () {
            try {
                if (gBtns.children.length < 1) return;
                for (var i = 0; i < gBtns.children.length; i++) {
                    var btn = gBtns.children[i];
                    var s = gBtns.children.length * btnSize[1];
                    scroll.maxvalue = s - btnSize[1];
                    btn.location[1] = i * btnSize[1] - 1 * scroll.value;
                }
                if (this.value != 0) saveSet(info.name, 'scrollVal', this.value);
            } catch (e) { }
        };
        w.onResize = function () {
            try {
                this.layout.resize();
                scroll.notify('onChange');
                var s = '[' + this.size.toString() + ']';

                if (gFav.children.length == 0) gFav.size[1] = 0;

                var target = this.size[0] > minWinX
                    && this.size[1] > minWinY + parseInt(favBtnHeight);

                if (target) saveSet(info.name, 'sptSize', s);
                bMin.onDraw = !target ? drawArrowCollpase : drawArrow;
                //刷新
                scrollPan.size[0] = target ? 15 : 0;
            } catch (e) {
                print(e.line + e.message);
            }
        };
        w.addEventListener('mouseover', function () {
            var s = '[' + w.location.toString() + ']';
            app.settings.saveSetting(info.name, 'location', s);
            msg.text = aboutStr + s;
        });
        w.addEventListener('keydown', function (e) {
            if (e.keyName == 'Escape') w.close();
        });
        w.layout.layout(true);
        w.location = eval(getSet(info.name, 'location'));
        w.show();
        var coll = eval(getSet(info.name, 'collpase'));
        w.size = eval(getSet(info.name, 'sptSize'));

        ed.text = app.settings.getSetting(info.name, 'edText');
        if (ed.text != '') ed.notify('onChange');
        //展开
        // if (coll == true) collpasePanel();
        scroll.value = eval(getSet(info.name, 'scrollVal'));
        if (gBtns.children.length <= 5) scrolTop.notify('onClick');
        scroll.onChange();
    }



    /**文件读取
 * @param {FileObject} _file
 * @param {string} _encoding
 * @returns {string} 文件内容
 */
    function readd(_file, _encoding, _toSource) {
        _file.open("r");
        if (_encoding) _file.encoding = _encoding;
        var _content = _toSource ? _file.read().toSource() : _file.read();
        _file.close();
        return _content;
    }
    /**文件写入
     * @param {FileObject} _file 写入的文件
     * @param {string} _str 新的内容
     */
    function writee(_file, _str) {
        _file.open("w");
        _file.write(_str);
        _file.close();
    }
    /**$.writeln输出内容
     * @param {*} _str 
     */
    function print(_str) {
        $.writeln(_str);
    }
    /**profile exists
 * @param {string} _sectionName
 * @param {string} _keyName
 * @returns
 */
    function haveSet(_sectionName, _keyName) {
        return app.settings.haveSetting(_sectionName, _keyName);
    }
    /**profile read
     * @param {string} _sectionName
     * @param {string} _keyName
     * @returns
     */
    function getSet(_sectionName, _keyName) {
        return app.settings.getSetting(_sectionName, _keyName);
    }
    /**profile save
     * @param {string} _sectionName
     * @param {string} _keyName
     * @param {string} _value
     * @returns
     */
    function saveSet(_sectionName, _keyName, _value) {
        return app.settings.saveSetting(_sectionName, _keyName, _value);
    }
    /**profile init
     * @param _sectionName
     * @param _keyName
     * @param _value
     */
    function initSet(_sectionName, _keyName, _value) {
        if (!haveSet(_sectionName, _keyName)) saveSet(_sectionName, _keyName, _value);
    }
    /**控件设置BG颜色
     * @param {object} _control 控件
     * @param {array} _Col [r,g,b,a]
     */
    function uiSetBgColor(_control, _Col) {
        _control.graphics.backgroundColor = _control.graphics.newBrush(_control.graphics.BrushType.SOLID_COLOR, _Col);
    }
    /**控件设置BG颜色
     * @param {object} _control 控件
     * @param {array} _Col [r,g,b,a]
     * @param {number} _StrokeWidth 线宽
     */
    function uiSetForeColor(_control, _Col, _StrokeWidth) {
        _control.graphics.foregroundColor = _control.graphics.newPen(
            _control.graphics.PenType.SOLID_COLOR,
            _Col,
            _StrokeWidth,
        );
    }

    UI_List();
})();