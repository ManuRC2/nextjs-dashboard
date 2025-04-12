import { CustomerField, InvoiceFormType } from '@/app/lib/definitions';
import InvoiceForm from './invoice-form';
import { updateInvoice } from '@/app/lib/actions';

export default function EditInvoicePage({
  invoice,
  customers,
}: {
  invoice: InvoiceFormType;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  return (
    <InvoiceForm
      invoice={invoice}
      customers={customers}
      action={updateInvoiceWithId}
      submitButtonText="Edit Invoice"
    />
  );
}
