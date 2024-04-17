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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert('Form submitted. Check the console for data.');
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
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
}

export default CreditCardForm;
