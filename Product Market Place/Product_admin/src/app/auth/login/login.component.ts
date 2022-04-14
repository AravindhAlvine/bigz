import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInRequest } from 'src/app/models/AuthRequests';
import { FileData } from 'src/app/models/FileData';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  bodyEl = document.getElementsByTagName('body')[0];
  submitted?: boolean;
  adminLogo: FileData;

  // showIcon: boolean = false;

  constructor(
    private loginFormBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bodyEl.classList.add('auth-page');
    this.adminLogo = JSON.parse(sessionStorage.getItem('adminLogo'));
    //this.loginFormvalidation();
  }

  ngOnDestroy(): void {
    this.bodyEl.classList.remove('auth-page')
  }

  loginFormGroup = this.loginFormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  get forms() {
    return this.loginFormGroup.controls;
  }

  loginFormSubmit(): void {
    this.submitted = true;
    if (this.loginFormGroup.invalid) {
      return;
    }
    this.loginUser();
  }

  async loginUser() {
    const token: string = await this.loginAPICall();
    this.authService.setAuthToken(token);
    const returnUrl: string = await this.getRequestedUrl();
    if (returnUrl)
      this.navigateByUrl(returnUrl)
    else
      this.navigateByUrl('/dashboard');
  }

  loginAPICall(): Promise<string> {
    return new Promise((resolve, reject) => {
      const request: SignInRequest = this.loginFormGroup.value;
      this.authService.signIn(request).subscribe(async (response) => {
        resolve(response.data.token);
      })
    })
  }

  getRequestedUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.activatedRoute.queryParams.subscribe(params => {
        resolve(params['returnUrl'])
      })
    })
  }

  navigateByUrl(url: string) {
    this.router.navigate([url])
  }


  // eye icon show and hide
  toggleIcons() {
    // this.showIcon = true;
    var x = (<HTMLInputElement>document.getElementById("myInput"))
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

}
