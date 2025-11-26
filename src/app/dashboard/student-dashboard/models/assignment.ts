export interface Assignment {
  id?: number;
  title: string;
  description: string;
  submittedDate?: Date;
  fileUrl?: string; // optional, if file uploaded
  studentId: number;
}
