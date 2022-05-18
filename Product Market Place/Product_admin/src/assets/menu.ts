export const menuItems = [

  {
    label: 'Dashboard',
    icon: 'pi pi-th-large',
    routerLink: 'dashboard',
    // icons: '',
  },

  {
    label: 'Catalog',
    icon: 'pi pi-sitemap',
    routerLink: 'manage-catalog',
    items: [
      {
        label: 'Products',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/manage-catalog/manage-product',
      },
      {
        label: 'Category',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/manage-catalog/manage-category',
      },
      {
        label: 'Attributes',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/manage-catalog/manage-attribute',
      },

    ]
  },
  
  {
    label: 'Orders',
    icon: 'pi pi-shopping-cart',
    routerLink: 'order-management',
    items: [
      {
        label: 'All Orders',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/order-management/all-order',
      },
      {
        label: 'Requests',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/order-management/order-requests',
      },
      // {
      //   label: 'Requests',
        // icon: 'pi pi-fw pi-play',
      //   routerLink: '/order-management/withdraw-req',
      //   items: [
      //     {
      //       label: 'Withdraw (5)',
            // icon: 'pi pi-fw pi-play',
      //       routerLink: '/order-management/withdraw-req',
      //     },
      //     {
      //       label: 'Cancellation (5)',
            // icon: 'pi pi-fw pi-play',
      //       routerLink: '/order-management/cancel-request',
      //     },
      //     {
      //       label: 'Return & Refund (5)',
            // icon: 'pi pi-fw pi-play',
      //       routerLink: '/order-management/return-refund-request',
      //     },

      //   ]

      // },
    ]
  },

  {
    label: 'Customers',
    icon: 'pi pi-users',
    routerLink: 'customers',
  },

  {
    label: 'Reviews',
    icon: 'pi pi-star',
    routerLink: 'review/manage-product-review',
    items: [
      {
        label: 'Manage Product Reviews',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/review/manage-product-review',
      },
    ]
  },

  {
    label: 'CMS',
    icon: 'pi pi-fw pi-file',
    routerLink: '/cms',
    items: [
      {
        label: 'Manage Home Page',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/cms/home',
      },
      {
        label: 'Add Page',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/cms/add-page',
      },
      {
        label: 'Manage Pages',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/cms/manage-page',
      },

    ]
  },

  {
    label: 'Marketing',
    icon: 'pi pi-globe',
    routerLink: 'marketing-management',
    // items: [
    //   {
    //     label: 'Blog',
        // icon: 'pi pi-fw pi-play',
    //     routerLink: '/marketing-management/blog-categories',
        items: [
          {
            label: 'Blog Categories',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/marketing-management/blog-categories',
          },
          {
            label: 'Blog Post',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/marketing-management/blog-post',
          },
          {
            label: 'Blog Comments',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/marketing-management/blog-comments',
          },

          {
            label: 'Email Template',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/marketing-management/manage-email-templete',
          },

        // ]
      // },

    ]
  },

  {
    label: 'Reports',
    icon: 'pi pi-chart-bar',
    // routerLink: 'dashboard'
  },

  {
    label: 'Shipping & Pickup',
    icon: 'pi pi-clone',
    routerLink: 'shipping',
    items: [
      {
        label: 'Shipping Setting',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/shipping/shipping-setting',
      },
      {
        label: 'Shipping Methods',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/shipping/shipping-method',
      },

    ]
  },

  {
    label: 'Settings',
    icon: 'pi pi-cog',
    routerLink: 'settings',
    items: [
      {
        label: 'General Settings',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/settings/web',
        // routerLinkActiveOptions: { exact: true },
        items: [
          {
            label: 'Web Settings',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/web',
            // routerLinkActiveOptions: { exact: false }
          },
          {
            label: 'Payment Gateway',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/payment',
            // routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'Email Settings',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/email',
            // routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'Tax Settings',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/tax/manage',
            items: [
              {
                label: 'Manage Tax Settings',
                // icon: 'pi pi-fw pi-play',
                routerLink: '/settings/tax/manage',
              },
              {
                label: 'Create Tax Settings',
                // icon: 'pi pi-fw pi-play',
                routerLink: '/settings/tax/create',
              }
            ]
          }
        ]
      },
      {
        label: 'Role Settings',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/settings/manage-role',
        items: [
          {
            label: 'Manage Roles',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/manage-role',
          },
          {
            label: 'Create Roles',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/create-role',
          }

        ]
      },
      {
        label: 'Users Settings',
        // icon: 'pi pi-fw pi-play',
        routerLink: '/settings/create-user',
        items: [
          {
            label: 'Create User',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/create-user',
          },
          {
            label: 'Manage User',
            // icon: 'pi pi-fw pi-play',
            routerLink: '/settings/manage-user',
          },

        ]
      }
    ]
  }



];