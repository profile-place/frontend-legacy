<template>
  <div class="bg-magic">
    <Container class="mt-24" style="max-width: 28rem">
      <form ref="login" class="w-full max-w-xs  mx-auto" @submit.prevent="process">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            id="user-id"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="user@profile.place"
          >
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            id="password"
            v-model="password"
            class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="your very secure password here"
          >
        </div>
        <template v-if="error !== undefined">
          <p class="text-red-500 text-xs italic pb-8">
            {{ error }}
          </p>
        </template>
        <button
          id="signup-btn"
          class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="submit()"
        >
          Sign Up
        </button>
        <p class="text-center mt-2">
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgot">Forgot
            Password?</a>
        </p>
        <p class="text-center mt-2">
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">Log in!</a>
        </p>
      </form>
    </Container>
    <FooterBar />
  </div>
</template>
<script>
import { encode } from 'actual-urlsafe-base64'
import Container from '@/components/Container'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'Signup',
  components: { Container, FooterBar },
  data () {
    return {
      isLoading: false,
      password: '',
      email: '',
      error: null
    }
  },
  methods: {
    submit () {
      this.process()
    },
    async process () {
      if (this.email === '') {
        const element = document.getElementById('email')
        if (element !== null) {
          element.classList.add('border', 'border-red-500')
        }

        this.error = '[Email] Please enter your email address.'
        return
      }

      if (this.password === '') {
        const element = document.getElementById('password')
        if (element !== null) {
          element.classList.add('border', 'border-red-500')
        }

        this.error = '[Password] Please enter a password.'
        return
      }

      if (!(/[\w.!#$%&'*+-/=?^`{|}~]{1,64}@[a-z0-9-]{1,255}.[a-z-]{1,64}/).test(this.email)) {
        const element = document.getElementById('email')
        if (element !== null) {
          element.classList.add('border', 'border-red-500')
        }

        this.error = '[Email] Email Address is invalid, double check your entry.'
        return
      }

      const button = document.getElementById('signup-btn')
      if (button !== null) {
        button.disabled = true
      }

      this.isLoading = true
      try {
        const res = await fetch(`http://localhost:3301/api/v1/user?email=${this.email}`)
        if (res.status === 200) {
          this.isLoading = false
          this.error = `Email "${this.email}" is already taken`
          return
        }

        const data = JSON.stringify({ email: encode(this.email), pass: encode(this.password) })
        const res2 = await fetch('http://localhost:3301/api/v1/signup', { body: data, method: 'post' })
        if (res2.status === 400) {
          this.isLoading = false
          this.error = `Unknown error has occured: ${JSON.stringify(await res2.json())}`
          return
        }

        this.isLoading = false
        // do vuex stuff here OwO

        this.error = 'There is no error silly! Your account was registered but this is a WIP, so... yay?...'
      } catch (ex) {
        this.isLoading = false
        this.error = `Unknown error has occured -- ${ex.message}`
      }
    }
  },
  head () {
    return {
      title: 'Sign Up | profile.place'
    }
  }
}
</script>
