import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parent-management.component.html',
  styleUrls: ['./parent-management.component.css']
})
export class ParentManagementComponent {
  parents: any[] = [
    { id: 1, name: 'Rahul Sharma', childName: 'Aarav Sharma', contact: '9876543210', email: 'rahul@gmail.com', address: 'Pune', relation: 'Father' },
  ];

  showForm = false;
  isEdit = false;
  message = '';
  parentData: any = { id: '', name: '', childName: '', contact: '', email: '', address: '', relation: '' };
studentData: any;

  toggleForm() {
    this.showForm = !this.showForm;
    this.isEdit = false;
    this.message = '';
    this.parentData = { id: '', name: '', childName: '', contact: '', email: '', address: '', relation: '' };
  }

 saveParent() {
  const mobileRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!this.parentData.name || !this.parentData.childName || !this.parentData.contact ||
      !this.parentData.email || !this.parentData.address || !this.parentData.relation) {
    this.message = 'Please fill all the fields!';
    return;
  }

  if (!mobileRegex.test(this.parentData.contact)) {
    this.message = 'Please enter a valid 10-digit mobile number!';
    return;
  }

  if (!emailRegex.test(this.parentData.email)) {
    this.message = 'Please enter a valid email!';
    return;
  }

  if (this.isEdit) {
    const index = this.parents.findIndex(p => p.id === this.parentData.id);
    if (index !== -1) this.parents[index] = { ...this.parentData };
    this.message = 'Parent details updated successfully!';
  } else {
    this.parentData.id = this.parents.length + 1;
    this.parents.push({ ...this.parentData });
    this.message = 'Parent added successfully!';
  }
  this.toggleForm();
}



  editParent(parent: any) {
    this.parentData = { ...parent };
    this.showForm = true;
    this.isEdit = true;
  }

  deleteParent(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this parent?');
    if (confirmDelete) {
      this.parents = this.parents.filter(p => p.id !== id);
      this.message = 'Parent deleted successfully!';
    }
  }
}
