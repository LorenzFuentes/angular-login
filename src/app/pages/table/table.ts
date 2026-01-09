import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Router } from '@angular/router';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-table',
  imports: [NzDividerModule, NzTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  constructor(private router: Router) {}
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '4',
      name: 'Lebron James',
      age: 41,
      address: 'Los Angeles No. 1 Lake Park'
    },
    {
      key: '5',
      name: 'Marc Anthony Zapata',
      age: 21,
      address: 'Malolos City No. 1 Lake Park'
    }
  ];
}
