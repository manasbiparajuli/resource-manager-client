import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface ResourceData {
    resCode: string;
    resName: string;
}

const RESOURCE_CODE: string[] = [
    '001', '002', '003', '004', '005', '006'
];

const RESOURCE_NAME: string[] = [
    'Concrete', 'Unit Masonry', 'General Conditions', 'General Requirements', 'Brick and Mortar', 'Stone Masonry'
];

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
  
export class ResourcesComponent implements OnInit {

    displayedColumns: string[] = ['resCode', 'resName'];
    dataSource: MatTableDataSource<ResourceData>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor() { 
        // create resource names
        const resNames = Array.from({length: 6}, (_, k)=> createNewResName(k+1));

        // assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(resNames);
    }
    
    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
    // builds a new resource name
    function createNewResName(id: number): ResourceData {
        return {
            resCode: RESOURCE_CODE[id],
            resName: RESOURCE_NAME[id]
        };
    }