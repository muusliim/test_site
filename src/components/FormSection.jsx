"use client";
import React, { useState } from "react";

export default function FormSection() {
	const isEmail = (email) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

	const [error, setError] = useState("");

	const showError = (e) => {
		!isEmail(e) ? setError("Неправильно указана почта") : setError("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEmail(e.target.email.value)) {
			console.log(
				"Email: " + e.target.email.value,
				"Message: " + e.target.message.value
			);
		} else {
			console.log("Что-то пошло не так");
		}
	};

	return (
		<section className="bg-gray-03 flex justify-center lg:h-[650px]">
			<div className="container mx-auto flex justify-center items-center px-8">
				<div className="max-lg:mt-12">
					<h3 className="onest-bold-h2 max-lg:onest-bold-h2-t">Заполните форму</h3>
					<form action="#" onSubmit={handleSubmit}>
						<div className="mt-16 grid lg:grid-cols-2 gap-10">
							<div>
								<textarea
									type="textarea"
									required
									cols={30}
									rows={10}
									name="message"
									placeholder="Напишите свой вопрос"
									className="border border-solid resize-none pt-2 max-lg:pt-4 onest-body-2 max-lg:onest-body-1-t placeholder:text-black placeholder:onest-body-2 max-lg:placeholder:onest-body-1-t text-customBlack border-gray-01 bg-inherit rounded-lg px-[18px] mt-1 w-full"
								/>
							</div>
							<div>
								<div>
									<input
										required
										placeholder="Введите e-mail"
										type="email"
										name="email"
										onBlur={(e) => {
											if (!e.target.validity.valid) {
												showError(e.target.value);
											}
										}}
										onChange={(e) =>
											e.target.validity.valid && showError(e.target.value)
										}
										className="border-b-2 resize-none pt-2 onest-body-2 placeholder:text-black placeholder:onest-body-2 text-customBlack outline-none  border-gray-01 bg-inherit py-4 mt-1 w-full max-lg:onest-body-1-t max-lg:placeholder:onest-body-1-t"
									/>
									<br />
									{error && (
										<p className="text-red-500 onest-body-3 max-lg:onest-body-2-t">{error}</p>
									)}
								</div>
								<div className="mt-8 lg:w-2/3 flex items-start">
									<input
										required
										type="checkbox"
										id="checkbox"
										className="w-4 h-4 mt-1 mr-3 border rounded-xl border-gray-01 outline-none  accent-customOrange cursor-pointer checkbox"
										name="checkbox"
									/>
									<label
										htmlFor="checkbox"
										className="text-customBlack onest-body-3 max-lg:onest-body-1-t"
									>
										Я ознакомлен(а) с <a href="/" className="underline">политикой конфиденциальности</a> и
										согласен(на) на обработку <a href="/" className="underline">персональных данных.</a>
									</label>
								</div>
								<button type="submit" className="black-button mt-12 w-full">Отправить</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
