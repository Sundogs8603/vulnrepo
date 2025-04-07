import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  standalone: false,
  //imports: [],
  selector: 'app-dialog-apierror',
  templateUrl: './dialog-apierror.component.html',
  styleUrls: ['./dialog-apierror.component.scss']
})
export class DialogApierrorComponent implements OnInit {
  // @ts-ignore
  constructor(public dialogRef: MatDialogRef<DialogApierrorComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  tryagain(): void {
    this.dialogRef.close('tryagain');
  }
  savelocally(): void {
    this.dialogRef.close('savelocally');
  }
}
