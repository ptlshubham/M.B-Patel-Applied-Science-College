import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-image-text',
  templateUrl: './left-image-text.component.html',
  styleUrls: ['./left-image-text.component.css']
})
export class LeftImageTextComponent implements OnInit {
  public homedata: string = 'To be an institution where the most formative years of a young mind are spent in the guided pursuit of excellence while developing a spirit of inquisitive questioning, an ability to excel in the pressure of a fast changing professional world, and a desire to grow into a personality than a person, in an environment that fosters strong moral and ethical values, teamwork, community service and environment consciousness.'
  public aboutdata: string = 'The College was awarded “College with Potential for Excellence” status by University Grants Commission, New Delhi in 2011and received a grant of One Crore under this Scheme. The College is selected “College with Potential for Excellence” by University Grants Commission, New Delhi for the Second phase of five year from 1st April 2017 to 31st March 2022 and is sanctioned grant of Rs. One Crore Thirty Lacks under this Scheme.' ;
  public textdata: string = '';
  public abouttitle: string = 'History';
  public title: string = '';
  public subtitle: string = '';
  public asubtitle: string = 'M.B.Patel Applied Science College (Mogri)';
  public dimg: string = 'assets/images/about/1.jpg';
  himg: string = 'assets/images/about/22.jpg';
  daimg: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.router.url == "/basic/about") {
      this.textdata = this.aboutdata;
      this.daimg = this.dimg;
      this.title = this.abouttitle;
      this.subtitle = this.asubtitle;
    }
    else {
      this.subtitle = this.asubtitle;
      this.textdata = this.homedata; 
      this.daimg = this.himg;

    }
  }

}
