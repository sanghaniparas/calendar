import { Injectable } from '@angular/core';
import pnp from '@pnp/pnpjs';
import { Constants } from 'src/app/app.constant';
import { Events } from '../Model/Calendar';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getEventData(): Promise<Events[]> {
    return new Promise((resolve, reject) => {
      pnp.sp.web.lists
        .getByTitle(Constants.CALENDAR_EVENTS)
        .items.select("*")
        .get()
        .then((result) => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }
}
