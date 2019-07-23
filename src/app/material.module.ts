import { NgModule } from "@angular/core";
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatPaginatorModule, MatTableModule, MatProgressSpinnerModule, MatSortModule, MatMenuModule } from '@angular/material';

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
        MatSortModule,
        MatMenuModule
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
        MatSortModule,
        MatMenuModule
    ],
})
export class CustomMaterialModule {}