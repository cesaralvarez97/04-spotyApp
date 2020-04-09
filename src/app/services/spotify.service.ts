import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBw52gibxZR4xR7LZhf4ijri05L5L6u4Bp-E1MrsbmWV-XMqwZ0c37YlBp9px9AjRjbznKmaIycMiSnM48'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}



