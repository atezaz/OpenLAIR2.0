import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sentences } from 'src/app/data.model';

@Component({
  selector: 'app-add-data-dialog',
  templateUrl: './add-data-dialog.component.html',
  styleUrls: ['./add-data-dialog.component.css']
})
export class AddDataDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public sentences: Sentences
  ) {}


}
