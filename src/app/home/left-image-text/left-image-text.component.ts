import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-image-text',
  templateUrl: './left-image-text.component.html',
  styleUrls: ['./left-image-text.component.css']
})
export class LeftImageTextComponent implements OnInit {
  public homedata: string = 'was established in 1967 , and has total Campus area of 28852.38 Sq. mtrs. and the total built- up area is 7542.74 Sq.mtr. Started with subjects Physics, Chemistry, Maths, Biology. It is affiliated to Sardar Patel University , Vallabh Vidyanagar.The college is recognized under section 2(f) and 12 B of the UGC Act 1956. The College is Reaccredited by NAAC with a CGPA of 3.02 at ‘A’ Grade in October 2013. The College is Accredited by KCG for ‘AAA’ with a 3.11 CGPA at A-Grade in January 2015.'
  public aboutdata: string = 'The College was awarded “College with Potential for Excellence” status by University Grants Commission, New Delhi in 2011and received a grant of One Crore under this Scheme. The College is selected “College with Potential for Excellence” by University Grants Commission, New Delhi for the Second phase of five year from 1st April 2017 to 31st March 2022 and is sanctioned grant of Rs. One Crore Thirty Lacks under this Scheme.' ;
  public textdata: string = '';
  public abouttitle: string = 'History';
  public title: string = '';
  public subtitle: string = '';
  public asubtitle: string = 'M.B.Patel Applied Science College';
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
