import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatSnackBar } from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {

  form: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  participant: string;
  selectedParticipant: string;

  participants: string[] = [
    'Sender',
    'Shipper',
    'Receiver'
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewUserDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
    this.company = data.company;
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [this.firstName],
      lastName: [this.lastName],
      email: [this.email],
      password: [this.password],
      selectedParticipant: [this.selectedParticipant],
      company: [this.company],
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.openSnackbar('Gelieven alles in te vullen aub')
    }
  }

  close() {
    this.dialogRef.close();
  }

  openSnackbar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 3000,
    });
  }

}
