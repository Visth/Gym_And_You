"use client";

import styles from "./ContactForm.module.scss";
import { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import contactImg from "../../assets/contactImage.jpg";
import Image from "next/image";

export const ContactForm = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const initialValues = {
		name: "",
		email: "",
		subject: "",
		textarea: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required").max(28),
		email: Yup.string()
			.required("Email is required")
			.email("Invalid email address"),
		subject: Yup.string()
			.required("Subject is required")
			.min(5, "Subject must be at least 5 characters"),
		textarea: Yup.string()
			.required("Message is required")
			.min(20, "Message must be at least 20 characters"),
	});

	const handleSubmit = (_, { resetForm }) => {
		setFormSubmitted(true);
		resetForm();

		setTimeout(() => {
			setFormSubmitted(false);
		}, 2000);
	};

	return (
		<section className={styles.container}>
			<Image
				src={contactImg}
				alt='Man exercising at the gym.'
				className={styles.image}
			/>
			<div>
				<h2>Get In Touch</h2>
				<p>
					Get in touch with us! We’re ready to assist and chat about
					your questions and needs.
				</p>
				<Formik
					onSubmit={handleSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}>
					<Form>
						<div>
							<Field
								type='text'
								name='name'
								placeholder='Your name'
							/>
							<ErrorMessage name='name' component='span' />
						</div>
						<div>
							<Field
								type='email'
								name='email'
								placeholder='Your email'
							/>
							<ErrorMessage name='email' component='span' />
						</div>
						<div>
							<Field
								type='text'
								name='subject'
								placeholder='Your Subject'
							/>
							<ErrorMessage name='subject' component='span' />
						</div>
						<div>
							<Field
								as='textarea'
								name='textarea'
								placeholder='Your Message'
							/>
							<ErrorMessage name='textarea' component='span' />
						</div>
						<button type='submit'>SEND MESSAGE</button>
						{formSubmitted && (
							<p>Your message was sent successfully!</p>
						)}
					</Form>
				</Formik>
			</div>
		</section>
	);
};
