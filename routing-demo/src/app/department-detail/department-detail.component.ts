import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>
      You have selected department with id:
      {{ departmentID }}
    </h2>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet> </router-outlet>
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="goToDepartments()">Go Back to List</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentID = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //Get id from current url
    // let id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.departmentID = id;
    // }

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id) {
        this.departmentID = id;
      }
    });
  }

  goPrevious() {
    let prevID = parseInt(this.departmentID) - 1;
    this.router.navigate(['departments', prevID]);
  }

  goNext() {
    let nextID = parseInt(this.departmentID) + 1;
    this.router.navigate(['departments', nextID]);
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

  goToDepartments() {
    let selectedID = this.departmentID ? this.departmentID : null;
    //param olarak id adı altında selectedID gönderildi, url içinde id = 2 olarak geldi,
    //optional olmasının sebebi urlyi değiştirmesine rağmen view aynı
    // this.router.navigate(['/departments', { id: selectedID }]);
    this.router.navigate(['../', { id: selectedID }], {
      relativeTo: this.route,
    });
  }
}
