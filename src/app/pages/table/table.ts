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
  searchId: string = '';
  originalData: ItemData[] = [];

  
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

  randomAge(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomAddress<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
  }
  getRandomName<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
  }
  onDelete(key: string): void {
    this.listOfData = this.listOfData.filter(item => item.id !== key);
    delete this.editCache[key];
  }
  getHome(){
      console.log('table clicked');
      this.router.navigate(['/home']);
    }
  addUser(): void {
    const newId = Date.now().toString();
    const newRow: ItemData = {
      
      id: newId,
      name: '',
      age: 0,
      address: ''
    };

    this.listOfData = [newRow, ...this.listOfData];

    this.editCache[newId] = {
      edit: true,
      data: { ...newRow }
    };
  }
  onSearch(): void {
    if (!this.searchId) {
      this.listOfData = [...this.originalData];
      this.updateEditCache();
      return;
    }

    const result = this.originalData.filter(
      item => item.id === this.searchId
    );

    this.listOfData = result;
    this.updateEditCache();
  }
  refreshPage() {
  window.location.reload();
}
  ngOnInit(): void {
    const data: ItemData[] = [];
    const addresses = [
    'Malolos Park','Longos Street','Guiguinto Road','San Pablo Boulevard','Manila Avenue','Makiti Cross','Pasay Lane'
    ];
    const users = [
      "James Carter","Olivia Martinez","Daniel Brooks","Sophia Reynolds","Michael Turner","Ava Collins","Ethan Walker","Isabella Hughes","Noah Bennett","Mia Foster",
      "Lucas Rivera","Emily Anderson","Benjamin Scott","Charlotte Parker","Alexander Morris","Amelia Reed","Henry Coleman","Harper Diaz","Samuel Price","Lily Watson",
      "Matthew Lopez","Grace Sullivan","Andrew Kim","Natalie Johnson","Joseph Alvarez","Chloe Murphy","David Thompson","Victoria Nguyen","Ryan Patel","Hannah O’Connor",
      "Nicholas Brown","Ella Robinson","Jonathan Perez","Zoe Wright","Christopher Lee","Madison Hall","Brandon Young","Scarlett Adams","Justin Clark","Penelope Torres",
      "Aaron Mitchell","Layla Ramirez","Kevin Stewart","Nora Phillips","Thomas Evans","Brooklyn Cruz","Paul Simmons","Audrey Flores","Jason Howard","Camila Sanchez"
    ];

    for (let i = 0; i < 50; i++) {
      data.push({
        id: `${i}`,
        name: `${this.getRandomName(users)}`,
        age: this.randomAge(18, 60),
        address: `${this.getRandomAddress(addresses)} no. ${this.randomAge(1, 200)}`
      });
    }
      this.listOfData = data;
      this.originalData = [...data]; 
      this.updateEditCache();
  }
}