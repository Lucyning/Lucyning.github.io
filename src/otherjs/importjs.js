document.write("<script language='javascript' src='./L2Dwidget.min.js'></script>");
L2Dwidget.init(getOptions('./live2d-widget-model-wanko/assets/wanko.model.json'));
function getOptions(dir) {
    return {
        model: {
            jsonPath: dir,
        },
        display: {
            superSample: 2,
            width: 150,
            height: 300,
            position: 'right',
            hOffset: 0,
            vOffset: 0,
        },
        mobile: {
            show: true,
            scale: 1,
            motion: true,
        },
        react: {
            opacityDefault: 0.85,
            opacityOnHover: 0.2,
        },
    }

}