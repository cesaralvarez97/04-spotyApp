import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBuVPTGovIF7HOtQJlrjCtPA07USbaOHL7WopABwgQwzCvdUH0uJemw_ajJeLrdQeHRXGgr1fl3vBQgHT0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe( map (data => data['albums'].items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDydaOhx-GnYshEQQ-cfznrIM6RDdnLOXIzU_l9YLy7ZYY2QfsCQxUwUmx8aFOlLQ5nIFCj1GmYVwfHxPA'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
     .pipe( map (data => data['artists'].items));
  }
}



