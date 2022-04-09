import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((res) =>
      console.log(res.id, res.username, res)
    );
    this.activatedroute.queryParams.subscribe((res) => console.log(res));

    setInterval(() => {
      //this.router.navigate(['404']);
      this.router.navigateByUrl('404');
    }, 5000);
  }
}
