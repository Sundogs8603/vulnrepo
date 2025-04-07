import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsService } from '../utils.service';
import { UntypedFormControl } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  standalone: false,
  //imports: [],
  selector: 'app-dialog-encrypt-report',
  templateUrl: './dialog-encrypt-report.component.html',
  styleUrl: './dialog-encrypt-report.component.scss'
})
export class DialogEncryptReportComponent implements OnInit {


  @ViewChild('tooltip') tooltip: MatTooltip;

  setkey = new UntypedFormControl();
  usemyrepkey = false;
  hide = true;
  // @ts-ignore
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogEncryptReportComponent>,
    private utilsService: UtilsService) {

  }


  genpass() {
    this.setkey.setValue(this.utilsService.generatePassword(256));
  }

  changeValue() {
    this.usemyrepkey = !this.usemyrepkey;
  }

  copyText() {
    setTimeout(() => {
      this.tooltip.show();
      this.tooltip.message = "Copied!";
    });
    setTimeout(() => {
      this.tooltip.hide();
      this.tooltip.message = "Copy to clipboard";
    }, 2000);
  }
  ngOnInit() {
    this.genpass();
  }
  godownload() {
    if (this.usemyrepkey) {
      this.dialogRef.close('userepokey');
    } else {

      if (this.setkey.value.length <= 7) {
        this.setkey.setErrors({ 'tooweakpass': true });
      } else {
        this.dialogRef.close(this.setkey.value);
      }

    }

  }
  cancel(): void {
    this.dialogRef.close();
  }
}
