import { Status } from "src/app/models/Status";

export const ROLE_STATUS: Status[] = [
    {
      name: 'active',
      display_name: 'Active'
    },
    {
      name: 'deactive',
      display_name: 'Deactive'
    }
  ];

  export const ROLE_RESOURCES = [
    { name: 'All' },
    { name: 'Custom' }
  ];