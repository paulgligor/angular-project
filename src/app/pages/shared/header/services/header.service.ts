import { Injectable } from '@angular/core';
import { MenuItemModel } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private menuItems: MenuItemModel[] = new Array();

  constructor() { }

  public getMenuItems(): MenuItemModel[] {
    return this.menuItems;
  }

}
