import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormTitle,
	FormLabel,
	FormInputRow,
	FormButton,
	FormMessage,
} from './FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import emailjs from '@emailjs/browser';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	var values = ({
		name: name,
		email: email,
		subject: subject,
		message: message
	  });

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, subject, message });
		
		emailjs.send("service_lu108uh","template_x5wnygr",values,"RXP4dfS9Ku02Y7TzS").then(res => {console.log(res);}).catch(err=>console.log(err));


		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
		setError(null);
		setSuccess('Message was sent!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Nama', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Perihal',
			value: subject,
			onChange: (e) => setSubject(e.target.value),
		},
		{
			label: 'Pesan',
			value: message,
			onChange: (e) => setMessage(e.target.value),
		},
	];

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Hubungi Kami</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label} *</FormLabel>
									<FormInput
										type={el.type}
										value={el.value}
										name={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Kirim</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
