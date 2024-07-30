import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todohome',
  templateUrl: './todohome.component.html',
  styleUrls: ['./todohome.component.scss']
})
export class TodohomeComponent implements OnInit {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false}];

  constructor() {}
    ngOnInit(): void {
    }
    
    onSubmit(form: NgForm) {
      console.log(form)

      this.taskArray.push({
        taskName: form.controls['task'].value,
        isCompleted: false
      })
      form.reset();
    }

    onDelete(index: number) {
      console.log(index);

      this.taskArray.splice(index, 1);

    }

    onCheck(index: number) {
      console.log(this.taskArray);
      // Grabbing this value amd asigning it to the same element
      this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    }
  

}
