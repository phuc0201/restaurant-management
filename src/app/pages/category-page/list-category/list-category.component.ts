import { Component, OnInit } from '@angular/core';
import { RestaurantCategory, RestaurantCategoryDTO } from 'src/app/core/models/restaurant/restaurant-category.model';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  options: string[] = [];
  categories: RestaurantCategory<string>[] = [];
  categoriesForSearch: RestaurantCategory<string>[] = [];
  isVisibleCreateModal: boolean = false;
  cateDTO = new RestaurantCategoryDTO();
  isUpdate: boolean = false;
  isLoading: boolean = false;
  isDeleting: boolean = false;
  cateImage: string = '';
  fileImage: File = new File([], '');
  searchValue: string = '';

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  search(name: string) {
    setTimeout(() => {
      this.categoriesForSearch = this.categories.filter(cate => this.normalizeString(cate.name.toLowerCase()).includes(this.normalizeString(name.toLowerCase())));
    }, 1000);
  }

  formatDate(isoDate: string): string {
    return this.formatSrv.formatDate(isoDate);
  }

  loadCategories() {
    this.isLoading = true;
    this.resSrv.getCategories()
      .subscribe({
        next: data => {
          this.categories = data;
          this.categoriesForSearch = data;
        },
        complete: () => {
          setTimeout(() => {
            this.isLoading = false;
          }, 800);
        }
      });
  }

  deleteCategory(id: string) {
    this.resSrv.deleteCategory(id).subscribe({
      complete: () => {
        this.loadCategories();
      }
    });
  }

  updateCategory(): void {
    this.resSrv.updateCategory(this.cateDTO).subscribe({
      next: (data) => {
        if (this.fileImage.name !== '') {
          const updateImage = this.resSrv.updateCateImg(data._id, this.fileImage).subscribe({
            complete: () => { updateImage.unsubscribe(); }
          });
        }
      },
      complete: () => {
        this.loadCategories();
        this.isVisibleCreateModal = false;
        this.isUpdate = false;
      }
    });
  }

  createCategory(): void {
    const cateObserve = this.resSrv.createCategory(this.cateDTO).subscribe({
      next: data => {
        const updateImage = this.resSrv.updateCateImg(data._id, this.fileImage).subscribe({
          complete: () => { updateImage.unsubscribe(); }
        });
      },
      complete: () => {
        this.loadCategories();
        cateObserve.unsubscribe();
      }
    });
  }

  uploadImage(event: any): void {
    const file: File = event.target.files[0];
    this.fileImage = file;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.cateImage = e.target.result as string;
    };
    reader.readAsDataURL(file);
  }

  showModal() {
    this.cateDTO = new RestaurantCategoryDTO();
    this.isVisibleCreateModal = true;
    this.cateImage = '';
    this.fileImage = new File([], '');
  }

  handleUpdateCategory(cate: RestaurantCategory<string>) {
    this.cateImage = cate.image ?? '';
    this.isUpdate = true;
    this.isVisibleCreateModal = true;
    this.cateDTO = cate;
  }

  handleCreateCategory(): void {
    this.isVisibleCreateModal = false;
    this.createCategory();
  }

  handleOke(): void {
    this.isLoading = true;
    if (!this.isUpdate) {
      this.handleCreateCategory();
    } else {
      this.updateCategory();
    }
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleCreateModal = false;
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  constructor(
    private resSrv: RestaurantService,
    private formatSrv: FormatService
  ) { }
}
