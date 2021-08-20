import { Component, Prop, h } from '@stencil/core';
import { modalBody } from '../../../entity/modal';
@Component({
  tag: 'wg-modal-body',
  styleUrl: 'wg-modal-body.scss',
  shadow: true,
})
export class MyComponent {
  @Prop() modalBody: modalBody;
  render() {
    return (
    <main class="modal-body">
      <p>
       {this.modalBody.modalBodyMessage}
      </p>
    </main>
    );
  }
}
