export const menuItems = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'custom-dashboard custom-background-image',
    routerLink: 'dashboard'
  },
  {
    id: 2,
    label: 'Categories',
    icon: 'custom-manage-category custom-background-image droparrow',
    routerLink: 'categories',
    items: [
      {
        id: 22,
        parent_id: 2,
        label: 'Manage Categories',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/categories/manage'
      },
      {
        id: 21,
        parent_id: 2,
        label: 'Add Category',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/categories/create'
      },
    ]
  },

  {
    id: 3,
    label: 'Services',
    icon: 'custom-service-nav custom-background-image droparrow',
    routerLink: 'services',
    items: [
      {
        id: 53,
        parent_id: 5,
        label: 'Manage Service',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/services/manage'
      },
      {
        id: 51,
        parent_id: 5,
        label: 'Add Service',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/services/add'
      },
      {
        id: 52,
        parent_id: 5,
        label: 'Assign Service',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/services/assign'
      },

    ]
  },

  {
    id: 4,
    label: 'Bookings',
    icon: 'custom-bookings-nav custom-background-image',
    routerLink: 'bookings',
  },


  {
    id: 5,
    label: 'Customers',
    icon: 'custom-customer-nav custom-background-image',
    routerLink: 'customers',
    items: [
      {
        id: 32,
        parent_id: 3,
        label: 'Manage Customer',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/customers/manage'
      },
      {
        id: 31,
        parent_id: 3,
        label: 'Add Customer',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/customers/create'
      },

    ]
  },

  {
    id: 6,
    label: 'Vendors',
    icon: 'custom-vendor-nav custom-background-image',
    routerLink: 'vendors',
    items: [
      {
        id: 42,
        parent_id: 4,
        label: 'Manage Vendor',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/vendors/manage'
      },
      {
        id: 41,
        parent_id: 4,
        label: 'Add Vendor',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/vendors/create'
      },
      {
        id: 43,
        parent_id: 4,
        label: 'Manage Vendor Requests',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/vendors/request'
      },
      {
        id: 44,
        parent_id: 4,
        label: 'Manage Vendor Plans',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/vendors/vendor-plans'
      },
    ]
  },
 
  {
    id: 7,
    label: 'Reviews',
    icon: 'custom-review-nav custom-background-image',
    routerLink: 'review',
    items: [
/*       {
        id: 61,
        parent_id: 6,
        label: 'Manage Product Reviews',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/review/manage-product-review'
      }, */
      {
        id: 62,
        parent_id: 6,
        label: 'Manage Vendor Reviews',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/review/manage-vendor-review'
      },
    ]
  },
  {
    id: 8,
    label: 'CMS',
    icon: 'custom-cms-nav custom-background-image',
    routerLink: 'cms',
    items: [
      {
        id: 71,
        parent_id: 7,
        label: 'Manage Home Page',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/cms/home'
      },
      {
        id: 72,
        parent_id: 7,
        label: 'Manage Pages',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/cms/manage-page'
      },
      {
        id: 73,
        parent_id: 7,
        label: 'Add Page',
        icon: 'icon-common icon-size-25 icon-submenu-play',
        routerLink: '/cms/add-page'
      },
    ]
  },
  {
    id: 9,
    label: 'Settings',
    icon: 'custom-settings-nav custom-background-image',
    routerLink: 'settings',
    items: [
      {
        id: 91,
        parent_id: 9,
        label: 'General Settings',
        icon: 'icon-size-25 icon-submenu-play',
        // routerLink: '/settings/general',
        items: [
          {
            id: 911,
            parent_id: 91,
            label: 'Web Settings',
            icon: 'icon-common icon-size-25 icon-submenu-play',
            routerLink: '/settings/web',
          }]
      },
      {
        id: 92,
        parent_id: 9,
        label: 'Role Settings',
        icon: 'icon-size-25 icon-submenu-play',
        routerLink: '/settings/manage-role',
        items: [
          {
            id: 922,
            parent_id: 92,
            label: 'Manage Roles',
            icon: 'icon-common icon-size-25 icon-submenu-play',
            routerLink: '/settings/manage-role',
          },
          {
            id: 921,
            parent_id: 92,
            label: 'Create Roles',
            icon: 'icon-common icon-size-25 icon-submenu-play',
            routerLink: '/settings/create-role',
          }

        ]
      },
      {
        id: 93,
        parent_id: 9,
        label: 'Users Settings',
        icon: 'icon-size-25 icon-submenu-play',
        routerLink: '/settings/create-user',
        items: [
          {
            id: 932,
            parent_id: 93,
            label: 'Manage User',
            icon: 'icon-common icon-size-25 icon-submenu-play',
            routerLink: '/settings/manage-user',
          },
          {
            id: 931,
            parent_id: 93,
            label: 'Create User',
            icon: 'icon-common icon-size-25 icon-submenu-play',
            routerLink: '/settings/create-user',
          },

        ]
      }
    ]
  }
]