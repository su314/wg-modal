import { Component, Prop, h } from '@stencil/core';
import {modalHeader} from '../../../entity/modal';
@Component({
  tag: 'wg-modal-header',
  styleUrl: 'wg-modal-header.scss',
  shadow: true,
})
export class MyComponent {
    @Prop() modalHeader:modalHeader;
  render() {
    return (
      <header class="modal-header">
        <p>
          {this.modalHeader.modalHeaderText}
        </p>
        </header>
    );
  }
}
