import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Content {
  id?: number;
  title: string;
  type: string;
  subject: string;
  description: string;
  uploadDate: string;
  status: string;
}

@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.css'
})
export class ContentManagementComponent {
  // Content List
  contents: Content[] = [
    { id: 1, title: 'Introduction to Algebra', type: 'Lesson', subject: 'Mathematics', description: 'Basic algebra concepts', uploadDate: '2023-09-01', status: 'Published' },
    { id: 2, title: 'Science Experiment Video', type: 'Video', subject: 'Science', description: 'Hands-on experiment guide', uploadDate: '2023-09-05', status: 'Draft' },
    { id: 3, title: 'English Grammar Quiz', type: 'Quiz', subject: 'English', description: 'Grammar assessment', uploadDate: '2023-09-10', status: 'Published' }
  ];

  // New or Editing Content
  newContent: Content = { title: '', type: '', subject: '', description: '', uploadDate: '', status: '' };

  // Control modal state
  showContentModal = false;

  // Edit mode flag
  isEditMode = false;

  // Selected index for edit
  selectedIndex: number | null = null;

  // ✅ Open modal for adding a new content
  openAddContentModal() {
    this.isEditMode = false;
    this.resetForm();
    this.showContentModal = true;
  }

  // ✅ Open modal for editing an existing content
  openEditContentModal(content: Content, index: number) {
    this.isEditMode = true;
    this.selectedIndex = index;
    this.newContent = { ...content };
    this.showContentModal = true;
  }

  // ✅ Close modal
  closeContentModal() {
    this.showContentModal = false;
    this.resetForm();
  }

  // ✅ Add or Update Content
  saveContent() {
    if (this.newContent.title.trim() === '') return;

    if (this.isEditMode && this.selectedIndex !== null) {
      // Update content
      this.contents[this.selectedIndex] = { ...this.newContent };
    } else {
      // Add new content
      this.newContent.id = this.contents.length + 1;
      this.contents.push({ ...this.newContent });
    }

    this.closeContentModal();
  }

  // ✅ Delete Content
  deleteContent(index: number) {
    if (confirm('Are you sure you want to delete this content?')) {
      this.contents.splice(index, 1);
    }
  }

  // ✅ Reset form
  resetForm() {
    this.newContent = { title: '', type: '', subject: '', description: '', uploadDate: '', status: '' };
    this.selectedIndex = null;
  }
}
