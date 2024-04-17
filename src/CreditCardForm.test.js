// CreditCardForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreditCardForm from './CreditCardForm';

describe('CreditCardForm', () => {
    test('validates all fields and submits form', () => {
        render(<CreditCardForm />);

        fireEvent.change(screen.getByLabelText(/Card Holder Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Card Number:/i), { target: { value: '1234567890123456' } });
        fireEvent.change(screen.getByLabelText(/Expiry Date:/i), { target: { value: '10/24' } });
        fireEvent.change(screen.getByLabelText(/CVV:/i), { target: { value: '123' } });

        fireEvent.submit(screen.getByRole('button'));

        expect(screen.getByLabelText(/Card Holder Name:/i)).toHaveValue('John Doe');
        expect(screen.getByLabelText(/Card Number:/i)).toHaveValue('1234567890123456');
        expect(screen.getByLabelText(/Expiry Date:/i)).toHaveValue('10/24');
        expect(screen.getByLabelText(/CVV:/i)).toHaveValue('123');
    });
});
