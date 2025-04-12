import { CustomerField } from '@/app/lib/definitions';
import InvoiceForm from './invoice-form';
import { createInvoice } from '@/app/lib/actions';

export default function CreateInvoicePage({ customers }: { customers: CustomerField[] }) {
  return <InvoiceForm customers={customers} action={createInvoice} submitButtonText="Create Invoice" />;
}
