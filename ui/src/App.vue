<template>
	<div id="app" class="container mt-5">
		<form @click.prevent="formSubmit()">
			<div class="mb-3">
				<label for="company" class="form-label">Company name: </label>
				<input type="text" class="form-control" id="company" :value="company">
			</div>
			<div class="mb-3">
				<label for="title" class="form-label">Job title: </label>
				<input type="text" class="form-control" id="title" :value="title">
			</div>
			<div class="mb-3">
				<label for="link" class="form-label">Url: </label>
				<input type="text" class="form-control" id="link" :value="link">
			</div>
			<button type="submit" class="btn btn-primary">Add</button>
		</form>
	</div>
</template>

<script>
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
	formSubmit(){
		console.log("Hello world");
	}
  }
}
</script>