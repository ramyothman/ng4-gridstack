export class GridStackOptions {
    acceptWidgets: boolean;
    alwaysShowResizeHandle: boolean;
    animate: boolean;
    auto: boolean;
    cellHeight: string; //default is 60 could be an integer (px) a string (ex: '10em', '100px', '10rem') 0 or null 'auto' - height will be calculated from cell width.
    ddPlugin: boolean;
    disableDrag: boolean;
    disableResize: boolean;
    draggable: boolean;
    handle: string; //default: '.grid-stack-item-content'
    handleClass: string;  //draggable handle class (e.g. 'grid-stack-item-content'). If set handle is ignored (default: null)
    height: number; //maximum rows amount. Default is 0 which means no maximum rows
    float: boolean; // enable floating widgets (default: false)
    itemClass: string;  //widget class (default: 'grid-stack-item')
    minWidth: string; //minimal width.If window width is less, grid will be shown in one - column mode (default: 768)
    disableOneColumnMode: boolean; //disables the onColumnMode when the window width is less than minWidth (default: 'false')
    oneColumnModeClass: string; //class set on grid when in one column mode (default: 'grid-stack-one-column-mode')
    placeholderClass: string; //class for placeholder (default: 'grid-stack-placeholder')
    placeholderText: string; //placeholder default content (default: '')
    resizable: boolean; //allows to override jQuery UI resizable options. (default: {autoHide: true, handles: 'se'})
    removable: boolean; //if true widgets could be removed by dragging outside of the grid. It could also be a jQuery selector string, in this case widgets will be removed by dropping them there (default: false)
    removeTimeout: number; // time in milliseconds before widget is being removed while dragging outside of the grid. (default: 2000)
    rtl: string; //if true turns grid to RTL. Possible values are true, false, 'auto' (default: 'auto') See example
    staticGrid: boolean; //makes grid static (default false). If true widgets are not movable/resizable. You don't even need jQueryUI draggable/resizable. A CSS class grid-stack-static is also added to the container.
    verticalMargin: number; //vertical gap size (default: 20). Can be: an integer (px) a string (ex: '2em', '20px', '2rem')
    width: number; //amount of columns (default: 12). Setting non-default value must be supported by equivalent change in CSS
}
