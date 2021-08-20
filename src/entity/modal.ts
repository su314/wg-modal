interface modalHeader {
  modalHeaderText: string;
}
interface modalFooter {
  modalFooterText: string;
}
interface modalBody {
  modalBodyMessage: string;
}
interface modal {
  modalHeader: modalHeader;
  modalBody: modalBody;
  modalFooter: modalFooter;
}
export { modal, modalBody, modalFooter, modalHeader };
