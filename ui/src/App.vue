<template>
	<div id="app" class="container mt-5">
		<form @submit="formSubmit()">
			<div class="mb-3">
				<label for="company" class="form-label">Company name: </label>
				<input type="text" class="form-control" id="company" v-model="company">
			</div>
			<div class="mb-3">
				<label for="title" class="form-label">Job title: </label>
				<input type="text" class="form-control" id="title" v-model="title">
			</div>
			<div class="mb-3">
				<label for="link" class="form-label">Url: </label>
				<input type="text" class="form-control" id="link" v-model="link">
			</div>
			<button type="submit" class="btn btn-primary">Add</button>
		</form>
	</div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'App',
  data(){
	  return {
		  company: "",
		  title: "",
		  link: ""
	  };
  },
  methods: {
	async formSubmit(){
		console.log("Trying submission");
		const info = {
			company: this.company,
			title: this.title,
			link: this.link
		};

		const res = await axios.post
		("http://localhost:6999/api/create", info);

		if (res.status === 200) console.log("Successful");
	}
  }
}
</script>