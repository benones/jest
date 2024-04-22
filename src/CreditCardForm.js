// CreditCardForm.js
import React, { useState } from 'react';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid ##000000',
        borderRadius: '8px',
        backgroundColor: '##000000'
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        border: '2px solid ##000000',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: '##000000',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

function CreditCardForm() {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        let error = '';

        // Validations
        switch (name) {
            case 'cardHolderName':
                if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = 'O nome do portador do cartão apenas deve conter letras constatadas no cartão.';
                }
                break;
            case 'cardNumber':
                if (!/^\d{16}$/.test(value)) {
                    error = 'O número do cartão só pode ter até 16 dígitos, sendo estes números.';
                }
                break;
            case 'expiryDate':
                if (!/^\d{2}\/\d{2}$/.test(value)) {
                    error = 'A data de expiração deve estar no futuro e formatada em MÊS/ANO.';
                }
                break;
            case 'cvv':
                if (!/^\d{3}$/.test(value)) {
                    error = 'CVV deve ter 3 dígitos.';
                }
                break;
            default:
                break;
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevState => ({
            ...prevState,
            [name]: error
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert('Formulário subiu com sucesso! Cheque os dados do programa.');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div>
                <label htmlFor="cardHolderName" style={styles.label}>Card Holder Name:</label>
                <input
                    type="text"
                    id="cardHolderName"
                    name="cardHolderName"
                    value={formData.cardHolderName}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <div style={{ color: 'red' }}>{errors.cardHolderName}</div>
            </div>
            <div>
                <label htmlFor="cardNumber" style={styles.label}>Card Number:</label>
                <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <div style={{ color: 'red' }}>{errors.cardNumber}</div>
            </div>
            <div>
                <label htmlFor="expiryDate" style={styles.label}>Expiry Date:</label>
                <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <div style={{ color: 'red' }}>{errors.expiryDate}</div>
            </div>
            <div>
                <label htmlFor="cvv" style={styles.label}>CVV:</label>
                <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <div style={{ color: 'red' }}>{errors.cvv}</div>
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
}

export default CreditCardForm;