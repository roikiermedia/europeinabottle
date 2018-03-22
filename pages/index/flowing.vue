<template>
	<figure class="card">
		<img src="~/static/icon.png" :class="{ flow:flow }">
	</figure>
</template>

<script>
export default {
	data() {
		return {
			flow: false
		}
	},
	mounted() {
		setTimeout(()=>{
			this.flow = true;
			setTimeout(()=>{
				this.$router.push('/loading');
			}, 1750);
		}, 1000);
	},
};
</script>

<style lang="scss" scoped>
figure {
	height: 50vh;

	background: transparent;
	box-shadow: none;
}

img {
	position: absolute;
	top: 40%;
	left: 40%;

	height: 100px;
	width: 100px;

	background: #ffffff;
	border-radius: 50%;
	box-shadow: 0 0px 6px 0 hsla(0,0,0,0.3);

	transition: all 1.5s ease-in;
}

.flow {
	opacity: 0;
	transform: translateX(150px) translateY(-120px);
}
</style>
