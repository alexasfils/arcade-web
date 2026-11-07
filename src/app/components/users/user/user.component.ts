import { ChangeDetectorRef, Component, NgModule } from '@angular/core';
import { UserServiceService } from '../../../service/user-service.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = '';

  constructor(
    private userServiceService: UserServiceService,
    private cdr: ChangeDetectorRef,
  ) {}

  getUserName() {
    this.userServiceService.getUserName().subscribe({
      next: (name) => {
        this.userName = name;
        this.cdr.detectChanges();
        console.log('Il nome ' + this.userName);
      },
      error: (err) => {
        console.error('Errore nella chiamata:', err);
      },
    });
  }
}
