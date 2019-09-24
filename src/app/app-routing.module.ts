import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

const routes: Routes = [
  { path: '', component: AuthenticateComponent },
  { path: 'upload', component: FileUploaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
