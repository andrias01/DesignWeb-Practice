import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from "@angular/router";
import { Navbar } from "../../components/shared/navbar/navbar";

@Component({
  selector: 'GifsPage',
  templateUrl: './gifs-page.html',
  imports: [RouterLink, Navbar],
})
export class GifsPage { 
  constructor(private router: Router) {}

  navigateToGifsView() {
    this.router.navigate(['/dashboard-page']);
  }
}