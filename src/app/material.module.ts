import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatCheckboxModule, MatDividerModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule,
        MatCardModule, 
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule
    ],
    exports: [
        MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule,
        MatCardModule, 
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule
    ],
})
export class CustomMaterialModule {}

