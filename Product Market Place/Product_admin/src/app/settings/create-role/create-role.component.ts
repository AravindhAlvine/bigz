import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/models/Status';
import { UserRole } from 'src/app/models/UserRole';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ROLE_RESOURCES, ROLE_STATUS } from 'src/assets/data/role';
import { menuItems } from 'src/assets/menu';
import { SettingsService } from '../settings.service';
@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  currentRoleId: string;
  roleData: UserRole = {} as UserRole;
  selectedRoleStatus;
  showRoleInfo: boolean = true;
  selected;
  menuItems = menuItems;
  selectedMenus = [];
  roleStatus: Status[] = ROLE_STATUS;
  roleResources = ROLE_RESOURCES;
  isEditMode: boolean = false;
  constructor(
    private roleSettingsService: SettingsService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isUrlContainsEditId();
  }

  isUrlContainsEditId() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.currentRoleId = id;
      this.isEditMode = true;
      this.getRoleDetailsByIdAPICall(id);
    }
  }

  getRoleDetailsByIdAPICall(id) {
    this.roleSettingsService.getUserRoleDetailsById(id).subscribe(result => {
      this.roleData = result.data
      if (result.data.menu_access) {
        this.menuItems = JSON.parse(result.data.menu_access);
      }
    })
  }

  updateRoleDetailsAPICall(data) {
    this.roleSettingsService.updateRoleDetailsById(this.currentRoleId, data).subscribe(result => {
      this.toastService.showSuccessToast('Menu access Saved Successfully')
    })
  }

  showRoleInfoClick(form) {
    this.showRoleInfo = true;
  }

  showRoleResourcesClick(form) {
    if (form.valid)
      this.showRoleInfo = false;
    else
      return;
  }

  createNewRole() {
    this.roleData.menu_access = JSON.stringify(this.selectedMenus);
    this.roleSettingsService.createUserRole(this.roleData).subscribe(result => {
      this.toastService.showSuccessToast(result.message);
    })
  }

  updateRoleDetails() {
    this.roleData.menu_access = JSON.stringify(this.selectedMenus);
    this.updateRoleDetailsAPICall(this.roleData);
  }

  onRoleResourceChange(event) {
    if (event.value == 'All') {
      this.selectDeselectAllResources(this.menuItems, true);
      this.selectedMenus = this.menuItems;
    } else {
      this.selectDeselectAllResources(this.menuItems, false);
    }
  }

  selectDeselectAllResources(menus, flag) {
    menus.forEach(menu => {
      menu.selected = flag
      if (menu.items) {
        this.selectDeselectAllResources(menu.items, flag)
      }
    });
  }
}
