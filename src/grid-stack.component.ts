import { Component, QueryList, Input, ContentChildren, ElementRef, Renderer, AfterContentInit } from '@angular/core';
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
    private defaultOptions = {
      cellHeight: '60px',
      width: 12,
      height: 0,
      animate: true,
      float: false,
      resizable: true
    };

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    public makeWidget(item: GridStackItemComponent) {
        item.jGridRef = this.grid;
        if (item.option != null && item.option.noResize != null && item.option.noResize) {
          return;
        }

        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };

    public updateWidget(item: GridStackItemComponent) {
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }

    public AddWidget(item: GridStackItemComponent) {
        item.jGridRef = this.grid;
        if (item.option != null && item.option.noResize != null && item.option.noResize) {
          return;
        }

        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }

    public RemoveWidget(item: GridStackItemComponent) {
        this.grid.removeWidget(item.nativeElement, false);
    }

    ngAfterContentInit(): void {
        const that = this;
        let nativeElement = this.el.nativeElement;
        if (this.options == null) {
          this.options = new GridStackOptions();
        }

        for (const key of Object.keys(this.defaultOptions)) {
          if (!this.options.hasOwnProperty(key)) {
            this.options = this.defaultOptions[key];
          }
        }

        this.renderer.setElementAttribute(nativeElement, 'data-gs-width', String(this.options.width));
        this.renderer.setElementAttribute(nativeElement, 'data-gs-height', String(this.options.height));

        this.gridStack = jQuery(nativeElement).gridstack(this.options);
        this.grid = this.gridStack.data('gridstack');

        this.gridStack.on('change', (e: any, items: any) => {
            _.each(items, (item: any) => this.widgetChanged(item));
        });

        // Initialize widgets
        this.items.forEach(item => that.makeWidget(item));
    }

    private widgetChanged(change: GridStackItem): void {
        const jWidget = change.el;
        const gridStackItem = this.items.find(item => item.jWidgetRef !== null ? item.jWidgetRef === jWidget[0] : false);
        if (!gridStackItem) {
          return;
        }

        gridStackItem.update(change.x, change.y, change.width, change.height);
    }
}
