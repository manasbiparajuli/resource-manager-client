import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatCheckboxModule, MatDividerModule, MatPaginatorModule, MatTableModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';

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
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatSortModule
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
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatSortModule
    ],
})
export class CustomMaterialModule {}

