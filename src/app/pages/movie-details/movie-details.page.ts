import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit() {
    const idx=this.route.snapshot.paramMap.get('id');
    console.log(idx);
    this.movieService.getMovieDetails(idx).subscribe(res =>{
      this.movie=res;


    });
  }

}
