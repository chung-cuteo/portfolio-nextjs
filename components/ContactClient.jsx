"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
	{
		icon: FaPhoneAlt,
		title: "Phone",
		description: "070-4003-9831",
	},
	{
		icon: FaEnvelope,
		title: "Email",
		description: "dinhquangchung.k9sh@gmail.com",
	},
	{
		icon: FaMapMarkerAlt,
		title: "Address",
		description: "埼玉県川口市川口４−４−３４川口寿コーポ",
	},
];

export default function ContactClient() {
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSuccessMessage("");
		setErrorMessage("");

		const form = e.currentTarget;
		if (!form.checkValidity()) {
			form.reportValidity();
      console.log("Form is invalid");
			return;
		}

		const data = Object.fromEntries(new FormData(form).entries());

		setLoading(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await res.json();
			if (!res.ok) {
				setErrorMessage(result?.message || "Send failed");
			} else {
				setSuccessMessage("Message sent. Thank you!");
				setTimeout(() => setSuccessMessage(""), 4000);
			}
		} catch (err) {
			console.error("Contact submit error:", err);
			setErrorMessage("Network error. Please try again.");
		} finally {
			setLoading(false);
      form.reset(); 
		}
	};

	return (
		<div className="flex flex-col xl:flex-row gap-[30px]">
			<div className="xl:w-[54%] order-2 xl:order-none">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-6 p-10 bg-[#303153] rounded-xl text-white"
					noValidate
				>
					<h2 className="text-center">お問い合わせ</h2>
					<p>ご質問やご依頼は、下記の連絡先までお気軽にご連絡ください。</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label htmlFor="firstName" className="block mb-2 text-sm font-medium">
								First name
							</label>
							<Input id="firstName" name="firstName" type="text" placeholder="First name" required />
						</div>

						<div>
							<label htmlFor="lastName" className="block mb-2 text-sm font-medium">
								Last name
							</label>
							<Input id="lastName" name="lastName" type="text" placeholder="Last name" required />
						</div>

						<div>
							<label htmlFor="email" className="block mb-2 text-sm font-medium">
								Email address
							</label>
							<Input id="email" name="email" type="email" placeholder="Email address" required />
						</div>

						<div>
							<label htmlFor="phone" className="block mb-2 text-sm font-medium">
								Phone number
							</label>
							<Input id="phone" name="phone" type="tel" placeholder="Phone number" />
						</div>
					</div>

					<div>
						<label htmlFor="message" className="block mb-2 text-sm font-medium">
							Message
						</label>
						<Textarea id="message" name="message" className="h-[200px]" placeholder="Type your message here." required />
					</div>

					{errorMessage && <p className="text-sm text-red-400 text-center">{errorMessage}</p>}
					{successMessage && <p className="text-sm text-green-400 text-center">{successMessage}</p>}

					<Button type="submit" size="md" className="max-w-40 m-auto" disabled={loading}>
						{loading ? "Sending..." : "送信"}
					</Button>
				</form>
			</div>

			<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
				<ul className="flex flex-col gap-10">
					{info.map((item) => {
						const Icon = item.icon;
						return (
							<li key={item.title} className="flex items-center gap-6">
								<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#303153] text-white rounded-md flex items-center justify-center">
									<div className="text-[28px]" aria-hidden="true">
										{Icon ? <Icon /> : null}
									</div>
								</div>
								<div className="flex-1">
									<p className="font-bold">{item.title}</p>
									<p className="text-xl">{item.description}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}