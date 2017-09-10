import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridStackComponent } from './grid-stack.component';
import { GridStackItemComponent } from './grid-stack-item.component';
import { GridStackDirective } from './grid-stack.directive';
import { GridStackPipe } from './grid-stack.pipe';
import { GridStackService } from './grid-stack.service';

import { GridStackOptions } from './grid-stack-options.model';
import { GridStackItem } from './grid-stack-item.model';
export * from './grid-stack.component';
export * from './grid-stack-item.component';
export * from './grid-stack.directive';
export * from './grid-stack.pipe';
export * from './grid-stack.service';
export * from './grid-stack-options.model';
export * from './grid-stack-item.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridStackComponent,
    GridStackItemComponent,
    GridStackDirective,
    GridStackPipe
  ],
  exports: [
    GridStackComponent,
    GridStackItemComponent,
    GridStackDirective,
    GridStackPipe
  ]
})
export class GridStackModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: GridStackModule,
        providers: [GridStackService]
    };
  }
}
