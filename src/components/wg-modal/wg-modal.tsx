import { Component, Prop, h } from '@stencil/core';
import { modal } from '../../entity/modal';
@Component({
  tag: 'wg-modal',
  styleUrl: 'wg-modal.scss',
  shadow: false,
  scoped: false,
})
export class MyComponent {
  @Prop() modalData: modal;
  render() {
    return (
      <div class="modal-container">
        <wg-modal-header modalHeader={this.modalData.modalHeader}></wg-modal-header>
        <wg-modal-body modalBody={this.modalData.modalBody}></wg-modal-body>
        <wg-modal-footer modalFooter={this.modalData.modalFooter}></wg-modal-footer>
      </div>
    );
  }
}
