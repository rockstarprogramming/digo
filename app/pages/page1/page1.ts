import {Page} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(private auth: AuthService) {}
}
