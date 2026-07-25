/**
 * @author GFred
 * 先到首选项-脚本和表达式-执行文件时警告用户 取消掉
 * 需要Fit.exe文件在同一目录下才能运行,并且使用的时候需要为英文输入法状态
 * @update
 * 1.0.0
 * 1.0.1 添加输入法中英判断, 中文输入法会自动切换到英文再运行，不再导致按键冲突
 * 1.0.2 添加合成判断
 * 1.0.3 hover按钮
 * 1.1.0 Modulize
 */
var DPLFitModule = (function (_obj) {
    var info = {
        name: "DPL_Fit",
        version: "1.1.0",
        date: "2025/01/31",
        author: "GFred",
        about: "",
        update: "1.0.0\n1.0.1 添加输入法中英判断, 中文输入法会自动切换到英文再运行，不再导致\n1.0.2 添加合成判断\n1.0.3 hover按钮\n1.1.0 Modulize"
    }

    if (app.settings.haveSetting(info.name, 'hoverFit') == false) app.settings.saveSetting(info.name, 'hoverFit', false);

    var executeFileName = 'DPL_Fit.exe';

    function UI(_parent) {
        var w = _parent.add('group', [0, 0, 50, 50]);
        w.orientation = 'column';
        w.alignment = ['fill', 'fill'];
        w.alignChildren = ['center', 'fill'];
        w.spacing = 0;
        w.margins = 0;
        var fitBtn = w.add('statictext{text:"FIT",justify: "center",alignment:["center","center"]}');
        var about = w.add('statictext', undefined, 'Builded By GFred.Have Fun~')
        about.alignment = ['fill', 'bottom'];
        about.margins = 0;

        uiSetBgColor(w, [0.7, 0.7, 0.9, .3]);

        fitBtn.addEventListener('mouseover', function (e) {
            var g = this.graphics;
            g.foregroundColor = g.newPen(g.PenType.SOLID_COLOR, [0, 1, 0, 1], 4);
        });
        fitBtn.addEventListener('mouseout', function (e) {
            var g = this.graphics;
            g.foregroundColor = g.newPen(g.PenType.SOLID_COLOR, [1, 1, 1, 1], 2);
        });
        //functions
        function getComp() {
            var comp = app.project.activeItem;
            if (!comp || !(comp instanceof CompItem)) { alert('Select a comp!'); return false; }
            return comp;
        }
        function getSelL() {
            var comp = getComp();
            if (comp == false) return;
            var selL = comp.selectedLayers;
            if (selL.length == 0) return false;
            return selL;
        }
        function fitViewer(fileName) {
            var f = File(File($.fileName).parent.fullName + '/' + fileName);
            if (!f.exists) {
                clearOutput();
                write('exe file not find!')
                return
            }
            f.execute();
            return f;
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

        //events
        w.addEventListener('mousedown', function (e) {
            if (e.button == 0) {
                fitViewer(executeFileName)
            }
            if (e.button == 2) {
                function setUI() {
                    var w = new Window('palette', undefined, undefined, {});
                    w.margins = w.spacgin = 0;
                    var g = w.add('group');
                    g.margins = g.spacgin = 0;
                    var chk = g.add('checkbox');
                    chk.text = 'hover enabled';
                    return {
                        w: w,
                        chk: chk
                    }
                }
                var win = setUI();
                win.chk.value = eval(app.settings.getSetting(info.name, 'hoverFit'));
                win.chk.onClick = function () {
                    app.settings.saveSetting(info.name, 'hoverFit', this.value)
                }
                win.w.show();
                win.w.location = [e.screenX, e.screenY];
            }
        })
        w.addEventListener('mouseover', function (e) {
            if (eval(app.settings.getSetting(info.name, 'hoverFit')) == true) {
                fitViewer(executeFileName);
            }
            e.stopPropagation();
            e.preventDefault();
        })


        var setResize = function (_obj) {
            var parent = _obj;
            while (parent != null && !(parent instanceof Panel) && !(parent instanceof Window)) {
                parent = parent.parent;
            }
            parent.onResize = function () { this.layout.resize() }
            if (parent instanceof Window) {
                parent.center();
                parent.show();
            }
            parent.layout.layout(true);
        }
        return {
            w: w,
            setResize: setResize
        }

    }

    return {
        info: info,
        UI: UI
    }
})(this)
//非模块化启动
if (!$.global.DPL_MODULE_MODE) {
    (function (_obj) {
        var info = DPLFitModule.info;
        var w = (_obj instanceof Panel) ? _obj : new Window('palette', info.name + info.version, undefined, {
            resizeable: true
        })
        w.alignment = ['fill', 'fill'];
        w.margins = w.spacing = 0;
        var ui = DPLFitModule.UI(w);
        ui.setResize(w);
        w.layout.layout(true);
        if (w instanceof Window) {
            w.show();
            w.center();
            w.size = [150, 80];
        }
        w.layout.resize();
        return w
    })(this)
}