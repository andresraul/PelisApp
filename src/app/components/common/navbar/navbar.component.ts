import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  
  
  
  

  constructor(private route: Router) {
    
  }

  ngOnInit() {
  }

  buscarNavbar(texto: string) {
    if(texto === '') {
      return;
    }
    this.route.navigate(['buscar', texto]);
    
  }

}
