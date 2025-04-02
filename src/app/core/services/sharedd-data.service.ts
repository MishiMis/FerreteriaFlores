import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddDataService {
  private moduleData = new BehaviorSubject<any>(null);
  currentModuleData = this.moduleData.asObservable();

  constructor() { }

  updateModuleData(data: any) {
    this.moduleData.next(data);
  }
}