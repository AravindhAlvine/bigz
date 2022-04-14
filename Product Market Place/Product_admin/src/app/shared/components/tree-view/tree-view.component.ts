import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() inputModel = [];
  @Output() inputModelChange = new EventEmitter<any[]>();
  @Input() options: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  async onValueChange(event, node) {
    this.CheckTreeViewNode(node, event.checked);
    if (node.parent_id) {
      const parentNode = this.findParentNode(node.parent_id, this.options);
      if (parentNode) {
        this.selectParentNodeBasedOnChildren(parentNode);
      }
    }
    this.inputModelChange.emit(this.options);
  }

  findParentNode(id, array) {
    for (const node of array) {
      if (node.id === id) return node;
      if (node.items) {
        const child = this.findParentNode(id, node.items);
        if (child) return child;
      }
    }
  }

  selectParentNodeBasedOnChildren(parentNode) {
    parentNode.selected = false;
    parentNode.items.filter(node => {
      if (node.selected) {
        parentNode.selected = true;
      }
    })
    if (parentNode.parent_id) {
      const superParentNode = this.findParentNode(parentNode.parent_id, this.options);
      this.selectParentNodeBasedOnChildren(superParentNode);
    }
  }

  CheckTreeViewNode(node, isChecked) {
    node.selected = isChecked;
    if (node.items && node.items.length > 0) {
      node.items.forEach(element => {
        element.selected = isChecked;
        if (element.items && element.items.length > 0) {
          this.CheckTreeViewNode(element, isChecked);
        }
      });
    }
  }

}
