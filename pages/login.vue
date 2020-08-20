<template>
	<div class="bg-magic">
		<form class="w-full max-w-xs" @submit.prevent='process'>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="user-id"
					type="text"
					placeholder="owo@profile.place"
					v-model="email"
				/>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
				<input
					class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="Password here OwO"
					v-model="password"
				/>
			</div>
			<template v-if="this.error !== undefined">
				<p class="text-red-500 text-xs italic">{{ this.error }}</p>
			</template>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" id="login-btn">Sign In</button>
			<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgot">Forgot Password?</a>
		</form>
	</div>
</template>
<script>
import { HttpClient } from '@augu/orchid';
const http = new HttpClient({
	defaults: {
		baseUrl: 'http://localhost:3301'
	}
});

export default {
	name: 'login',
	data() {
		return {
			isLoading: false,
			password: '',
			email: '',
			error: null
		};
	},
	computed: {
		async process() {
			if (this.email === '') {
				this.error = 'Please enter your email address.';
				return;
			}

			if (this.password === '') {
				this.error = 'Please enter a password.';
				return;
			}

			if (!(/[\w.!#$%&'*+-/=?^`{|}~]{1,64}@[a-z0-9-]{1,255}.[a-z-]{1,64}/).test(this.email)) {
				this.error = 'Email Address didn\'t abide by RegExp';
				return;
			}

			const button = document.getElementById('login-btn');
			if (button !== undefined) button.disabled = true;
			this.isLoading = true;

			const res = await http.post('/v1/login', {
				data: {
					pass: this.password,
					email: this.email
				}
			});

			console.log(res.json());
		}
	}
};
</script>
