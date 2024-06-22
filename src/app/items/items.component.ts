import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  page: number = 1;
  totalItems: number = 948;
  fetching: boolean = false;
  skeletonArray: any[] = new Array(12);

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.page = queryParams['page'] <= Math.ceil(this.totalItems / 12) && queryParams['page'] > 1 ? queryParams['page'] : 0  || 1;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          page: this.page
        }
      });
    });
    this.getItems();
  }

  public getItems(): void {
    this.fetching = true;
    this.dataService.getItems((this.page - 1) * 12).subscribe(
      (response: [{
        id: number,
        name: string,
        img: string,
        category: string,
        short_effect: string
      }]) => {
        this.items = response.map((item: {
          id: number,
          name: string,
          img: string,
          category: string,
          short_effect: string
        }) => item);
        this.fetching = false;
      },
      (error: any) => {
        console.error(error);
        this.fetching = false;
      }
    );
  }

  public onPageChange($event: number): void {
    this.page = $event;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    });
    this.items = [];
    this.getItems();
  }
}
