import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Collapse,
  CollapseInterface,
  CollapseOptions,
  InstanceOptions,
} from 'flowbite';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: HTMLElement | undefined;
  @ViewChild('navMenu') menu: HTMLElement | undefined;

  options: CollapseOptions = {
    onCollapse: () => {},
    onExpand: () => {},
    onToggle: () => {},
  };

  instanceOptions: InstanceOptions = {
    id: 'toggleButton targetEl',
    override: true,
  };

  collapse: Partial<CollapseInterface> = {
    _targetEl: null,
    _triggerEl: null,
    _options: this.options,
    _visible: false,
  };

  ngOnInit(): void {
    this.collapse = new Collapse(
      this.toggleButton,
      this.menu,
      this.options,
      this.instanceOptions
    );
  }

  onEnter(ev: Event): void {
    console.log('SEARCH !!');
    (ev.target as HTMLInputElement).value = '';
  }
}
