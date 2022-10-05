import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit {
  @Input() usuarios: User[];
  @Input() usuariosSearch: any;
  @Input() vista: 'grilla' | 'hermanos';
  @Output() goToEdit = new EventEmitter<User>();
  selectedUser:User;
  searchParam: string;
  hermanoSeleccionado: string;


  @ViewChild('detailsModal', { read: TemplateRef })
  detailsModal: TemplateRef<any>;
  disponibilidad: any;

  constructor(
    private storageSVC: StorageService,
    private alertSvc: AlertService,
    private modalSvc:NgbModal) {}

  ngOnInit(): void {
    if (this.vista == 'grilla') {
      this.storageSVC.GetAll('users').subscribe((data) => {
        this.usuarios = data;
      });
    }
  }

  toggleActive(user:User){
    if(user.active){
      user.active = false
    }else{
      user.active = true
    }
    this.storageSVC.Update(user.id,'users', user)
  }

  openModalDetails(user:User){
    this.selectedUser = user;
    this.modalSvc.open(this.detailsModal);
  }


  async delete(product: any) {
    let confirm: any = false;
    confirm = await this.alertSvc.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('hermanos', product.id).then(() => {
        this.alertSvc.alertCenter('info', 'El hermano ha sido eliminado');
      });
    }
  }

  goToEditUser(hermano: User) {
    this.goToEdit.emit(hermano);
  }


  hacerBusqueda() {
    if (this.searchParam === '') {
      this.usuarios = this.usuariosSearch;
      return;
    }
    const serachParamLower = this.searchParam.toLowerCase();
    this.usuarios = this.usuariosSearch.filter((item) => this.doSearch(item, serachParamLower));
  }

  doSearch(value, searcher) {
    if (typeof value === 'boolean') {
      return false;
    }

    if (typeof value === 'object') {
      for (let fieldKey in value) {
        if (this.doSearch(value[fieldKey], searcher)) {
          return true;
        }
      }
      return false;
    }

    return (typeof value == 'string' ? value.toLocaleLowerCase() : value.toString()).includes(searcher);
  }

}
