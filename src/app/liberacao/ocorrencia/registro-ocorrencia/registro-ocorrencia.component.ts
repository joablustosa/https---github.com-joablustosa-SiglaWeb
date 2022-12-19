import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/sharedServices/service.repository';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079,symbol: 'teste',action: 'teste'},
  {position: 2, name: 'Helium', weight: 4.0026,symbol: 'teste',action: 'teste'},
  {position: 3, name: 'Lithium', weight: 6.941,symbol: 'teste',action: 'teste'},
  {position: 4, name: 'Beryllium', weight: 9.0122,symbol: 'teste',action: 'teste'},
  {position: 5, name: 'Boron', weight: 10.811,symbol: 'teste',action: 'teste'},
  {position: 6, name: 'Carbon', weight: 12.0107,symbol: 'teste',action: 'teste'},
  {position: 7, name: 'Nitrogen', weight: 14.0067,symbol: 'teste',action: 'teste'},
  {position: 8, name: 'Oxygen', weight: 15.9994,symbol: 'teste',action: 'teste'},
  {position: 9, name: 'Fluorine', weight: 18.9984,symbol: 'teste',action: 'teste'},
  {position: 10, name: 'Neon', weight: 20.1797,symbol: 'teste',action: 'teste'},
  {position: 11, name: 'Neon', weight: 20.1797,symbol: 'teste',action: 'teste'},
];

@Component({
  selector: 'app-registro-ocorrencia',
  templateUrl: './registro-ocorrencia.component.html',
  styleUrls: ['./registro-ocorrencia.component.css']
})
export class RegistroOcorrenciaComponent implements OnInit {
  public displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  public dataSource = new MatTableDataSource<PeriodicElement>();
  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllOwners = () => {
    this.dataSource.data = ELEMENT_DATA;
  }


  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

}
