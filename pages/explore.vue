<template>
  <div>
    <NavBar/>
    <Container>
      <h1 class="text-center text-white text-5xl">Hello World!</h1>
      <p class="text-justify text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id blandit ante. Maecenas quis condimentum erat.
        Suspendisse ut mi aliquet, tristique nibh non, mattis magna. Aenean eu dolor elit. Etiam suscipit ipsum mollis
        egestas efficitur. Suspendisse eget mattis magna. Aenean vel est mi. Suspendisse potenti. Donec sit amet mi non
        orci vestibulum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br/>
        Nunc quis nibh quis odio convallis rhoncus. Praesent pellentesque malesuada tellus, a scelerisque sapien. Nam
        vel nunc nec nisi interdum tincidunt. Sed sit amet lectus nec elit sagittis vulputate sed eu quam. Suspendisse
        non ipsum tincidunt, viverra diam at, vulputate leo. In accumsan lectus quis tellus malesuada, eu rutrum nisi
        tempor. Pellentesque posuere augue at sapien lobortis vehicula. Morbi erat tellus, tincidunt a tellus nec,
        mattis sagittis nisl. Ut sit amet urna id dui dignissim efficitur non ut metus. Duis scelerisque auctor tellus,
        ultrices sollicitudin arcu bibendum nec. Cras tempus, nisi quis egestas lobortis, massa odio tincidunt lorem,
        vitae commodo nisi arcu non nibh. Curabitur nunc eros, efficitur at ultrices sit amet, ullamcorper id magna.
      </p>
    </Container>
    <FooterBar/>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar';
import FooterBar from '~/components/FooterBar';
import Container from '~/components/Container';

export default {
	name: 'explore',
	components: {
		Container,
		FooterBar,
		NavBar
	}
};
</script>
<style lang="scss" scoped>
body {
  background: #23272A !important;
  background-image: none;
}

body:before {
  background-image: none !important;
}
</style>
