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

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ramy Othman](mailto:ramy.mostafa@gmail.com)
