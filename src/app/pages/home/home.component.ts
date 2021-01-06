import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    
   const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300; 
   const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
  
   if(this.peliculasService.cargando){ return; }

   if(pos > max){
     this.peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies)
     })
   }
   

  }

  constructor(private peliculasService: PeliculasService) {
    peliculasService.getCartelera()
                    .subscribe( movies => {
                      this.movies = movies;
                      this.moviesSlideShow = movies;
                    })
   }
   
  ngOnInit(): void {
  }
     
  ngOnDestroy(): void {
    this.peliculasService.resetCarteleraPage();
  }

}
