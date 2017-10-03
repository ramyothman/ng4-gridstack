import { Component, HostBinding, QueryList, Input, ContentChildren, ElementRef, Renderer, AfterContentInit } from '@angular/core';
import { GridStackOptions } from './grid-stack-options.model'
import { GridStackItem } from './grid-stack-item.model'
import { GridStackItemComponent } from './grid-stack-item.component'
declare var jQuery: any;
declare var _: any;

@Component({
    selector: 'grid-stack',
    template: `<ng-content></ng-content>`,
    styles: [":host { display: block; }"]
})
export class GridStackComponent implements AfterContentInit {
    @Input() options: GridStackOptions = new GridStackOptions();
    @ContentChildren(GridStackItemComponent) items: QueryList<GridStackItemComponent>;
    private gridStack: any = null;
    private grid: any = null;
    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    makeWidget(item: GridStackItemComponent) {
        //let widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };

    updateWidget(item: GridStackItemComponent) {
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }

    public AddWidget(item: GridStackItemComponent) {
        let widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }

    public RemoveWidget(item: GridStackItemComponent) {
        let widget = this.grid.removeWidget(item.nativeElement, false);
    }
    ngAfterContentInit(): void {
        var that = this;
        let nativeElement = this.el.nativeElement;
        if (this.options == null)
            this.options = new GridStackOptions();
        if (this.options.cellHeight == null)
            this.options.cellHeight = "60px";
        if (this.options.width == null)
            this.options.width = 12;
        if (this.options.height == null)
            this.options.height = 0;
        if (this.options.animate == null)
            this.options.animate = true;
        if (this.options.float == null)
            this.options.float = false;
        if (this.options.resizable == null)
            this.options.resizable = true;
        this.renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.options.width));
        this.renderer.setElementAttribute(nativeElement, "data-gs-height", String(this.options.height));

        this.gridStack = jQuery(nativeElement).gridstack(this.options);
        this.grid = this.gridStack.data("gridstack");

        this.gridStack.on("change", (e: any, items: any) => {
            _.each(items, (item: any) => this.widgetChanged(item));
        });




        // Initialize widgets
        this.items.forEach(item => that.makeWidget(item));

    }

    private widgetChanged(change: GridStackItem): void {
        console.log(change);
        //  debugger;
        //console.log(change);
        var jWidget = change.el;
        var gridStackItem = this.items.find(item => item.jWidgetRef !== null ? item.jWidgetRef === jWidget[0] : false);
        if (!gridStackItem)
            return;


        gridStackItem.update(change.x, change.y, change.width, change.height);

    }
}
