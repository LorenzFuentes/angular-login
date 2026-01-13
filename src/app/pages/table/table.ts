import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}@Component({
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
  standalone: true,
  imports: [NzTableModule, NzInputModule, FormsModule, NzPopconfirmModule, NzButtonModule, NzIconModule, NzSelectModule, NzSpaceModule]
})
export class Table implements OnInit {
  constructor(private router: Router) {}
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `${i}`,
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }
  onDelete(key: string): void {
  this.listOfData = this.listOfData.filter(item => item.id !== key);
  delete this.editCache[key];
  }

  addUser(): void {
  }
  getTable(){
      console.log('table clicked');
      this.router.navigate(['/home']);
    }

  onSearch(){
    
  }

}