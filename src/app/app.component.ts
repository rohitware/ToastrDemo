import { Component } from '@angular/core';
// import { ToastrSrevice } from './toastr-srevice';
import { ToastrService } from './toastr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private toastrService: ToastrService){

  }

  Success()
  {
    this.toastrService.Success("success button clicked");
  }

  Info()
  {
    this.toastrService.Info("info button clicked")
  }

  Warning()
  {
    this.toastrService.Warning("warning button clicked")
  }

  Error()
  {
    this.toastrService.Error("error button clicked")
  }
}
