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
			<div className={styles.formContainer}>
				<Image
					src={contactImg}
					alt='Man exercising at the gym.'
					className={styles.image}
				/>
				<div className={styles.form}>
					<h2>Get In Touch</h2>
					<p>
						Get in touch with us! We’re ready to assist and chat
						about your questions and needs.
					</p>
					<Formik
						onSubmit={handleSubmit}
						initialValues={initialValues}
						validationSchema={validationSchema}>
						<Form>
							<div className={styles.fieldBox}>
								<Field
									className={styles.field}
									type='text'
									name='name'
									placeholder='Your name'
								/>
								<ErrorMessage
									name='name'
									component='span'
									className={styles.errorMessage}
								/>
							</div>
							<div className={styles.fieldBox}>
								<Field
									className={styles.field}
									type='email'
									name='email'
									placeholder='Your email'
								/>
								<ErrorMessage
									name='email'
									component='span'
									className={styles.errorMessage}
								/>
							</div>
							<div className={styles.fieldBox}>
								<Field
									className={styles.field}
									type='text'
									name='subject'
									placeholder='Your Subject'
								/>
								<ErrorMessage
									name='subject'
									component='span'
									className={styles.errorMessage}
								/>
							</div>
							<div className={styles.fieldBox}>
								<Field
									className={
										styles.field + " " + styles.textarea
									}
									as='textarea'
									name='textarea'
									placeholder='Your Message'
								/>
								<ErrorMessage
									name='textarea'
									component='span'
									className={styles.errorMessage}
								/>
							</div>
							<button type='submit' className={styles.btn}>SEND MESSAGE</button>
							{formSubmitted && (
								<p>Your message was sent successfully!</p>
							)}
						</Form>
					</Formik>
				</div>
			</div>
			<div className={styles.mapContainer}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.9199209892463!2d-122.6508586!3d38.2349655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b421d09c12d1%3A0xf95fa8b4cfac49e6!2s12%20Park%20Ave%2C%20Petaluma%2C%20CA%2094952%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1715601186750!5m2!1spl!2spl'
					width='600'
					height='450'
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className={styles.map}></iframe>
			</div>
		</section>
	);
};
