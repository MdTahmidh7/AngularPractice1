import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {
  }

  getEmail() {
    return ["Mail1",
      "Mail2",
      "Mail3"
    ];
  }

}
