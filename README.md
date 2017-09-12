# ng4-gridstack

## Installation

To install this library, run:

```bash
$ npm install ng4-gridstack --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng4-gridstack
```

Then add reference to the gridstask.js and lodash to your index.html for how to do it check their site at 
- https://github.com/gridstack/gridstack.js

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { GridStackModule } from 'ng4-gridstack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    GridStackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<grid-stack class="grid-stack" [options]="options">
  <grid-stack-item [option]="widget1" class="grid-stack-item"  >
  </grid-stack-item>
  <grid-stack-item [option]="widget2" class="grid-stack-item" >
  </grid-stack-item>
</grid-stack>
```

If you want to dynamically generate widgets:

```xml
<!-- You can now use your library component in app.component.html -->  <grid-stack #gridStackMain id="gridStackMain" class="grid-stack" [options]="area">
	<button (click)="AddWidget()">Add Widget</button>
<grid-stack #gridStackMain id="gridStackMain" class="grid-stack" [options]="area">
    <grid-stack-item *ngFor="let widget of widgets" id="widget-{{widget.ID}}" [option]="widget.Item" class="grid-stack-item">
      <div class="widget-header">
        <div class="widget-header-text">{{widget.Caption}}</div>
      </div>
      <div class="widget-content">
        
      </div>
	</grid-stack-item>
</grid-stack>
```
```typescript
import { Component, OnInit, ViewChildren, QueryList, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GridStackItem, GridStackOptions, GridStackItemComponent, GridStackComponent} from 'ng4-gridstack'

@Component({
  selector: 'app-grid-stack',
  templateUrl: './app-grid-stack.component.html'
})
export class DashboardComponent implements OnInit {
	@ViewChildren(GridStackItemComponent) items: QueryList<GridStackItemComponent>;
    @ViewChild('gridStackMain') gridStackMain: GridStackComponent;
	area: GridStackOptions = new GridStackOptions();
    widgets: GridStackItem[] = [];
	
	constructor(private cd: ChangeDetectorRef) {
      
	}

	AddWidget(widgetType: DashboardWidgetTypeEnum) {
      var widget = new GridStackItem();
      
      widget.width = 6;
      widget.height = 4;
      widget.x = 0;
      widget.y = 0;
      this.widgets.push(widget);
      this.cd.detectChanges();
      var arr = this.items.toArray();
      this.gridStackMain.AddWidget(arr[this.items.length - 1]);
  }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
## Credit

I was looking for integrating cleanly the amazing gridstack.js (https://github.com/gridstack/gridstack.js) library with angular 4 and found this thread on stack overflow
https://stackoverflow.com/questions/39901473/wrap-gridstack-js-into-angular-2-component
Credit Goes to Answers from those users
https://stackoverflow.com/users/3758236/user3758236
https://stackoverflow.com/users/3112339/etchelon

## License

MIT © [Ramy Othman](mailto:ramy.mostafa@gmail.com)
