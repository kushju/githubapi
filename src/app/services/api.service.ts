// Service for APIs call
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// rxjs require methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

	sendRequest(parameters, server) {
		var url = "";
		var data = parameters.data;

		// set headers
		const headers = new Headers({
			'Authorization': parameters.token,
			'Client': "web"
		});

		// get server param (if dynamic)
		if (server == 'core') {
			url = environment.base_api_main + parameters.url;
		
		}

		var url = url;
		var data = data;

		// GET request
		if (parameters.method == 'GET') {
			const headers = new Headers({
			
			});
			//console.log('cehck')
			return this.http.get(url, { headers: headers })
				.map((response: Response) => response.json())
				.catch((error) => error.json());
		}

	}

}
