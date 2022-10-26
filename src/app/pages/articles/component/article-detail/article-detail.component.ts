import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PagesFacade} from '../../../pages.facade';
import {catchError, tap, throwError} from 'rxjs';
import {getConfigErrorToast} from '../../../../core/helper/config-toast';
import {MessageService} from 'primeng/api';
import {Product} from '../../models/product';
import {first, isEmpty} from 'lodash';
import {ICustomParams} from "../../../../core/models/ICustomParams";
import {ICustomHttpResponse} from "../../../../core/models/ICustomHttpResponse";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute,
              private pagesFacade: PagesFacade,
              private messageService: MessageService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const customParams: ICustomParams = {};
    customParams.code = id ? id : '';
    this.pagesFacade.getProducts(customParams).pipe(
      tap((result: ICustomHttpResponse<Array<Product>>) => {
        if (!isEmpty(result)) {
          this.product = first(result.body) as Product;
        }
      }),
      catchError(err => {
        console.error(err);
        this.messageService.clear();
        this.messageService.add(getConfigErrorToast('Error'));
        this.cdr.detectChanges();
        return throwError(err);
      }))
      .subscribe();

  }

}
