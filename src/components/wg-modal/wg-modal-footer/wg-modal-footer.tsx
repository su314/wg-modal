import { Component, Prop, h } from '@stencil/core';
import {modalFooter} from '../../../entity/modal';
@Component({
  tag: 'wg-modal-footer',
  styleUrl: 'wg-modal-footer.scss',
  shadow: true,
})
export class MyComponent {
    @Prop() modalFooter:modalFooter;
  render() {
    return (
      <footer class="modal-footer">
        <p>
          {this.modalFooter.modalFooterText}
        </p>
        </footer>
    );
  }
}
