<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconBookEducation from '@/components/icons/IconBookEducation.vue'
</script>

<script lang="ts">
//Load library shelf information
export default {
  	components: { IconBookEducation }
}
</script>

<template>
  <main id="layout-container">
        <header>
            <RouterLink to="/discovery">
				Discovery
			</RouterLink>
            <RouterLink to="/library">
				<IconBookEducation />
			</RouterLink>
            <RouterLink to="/settings">Settings</RouterLink>
		</header>
        <div id="sidebar"></div>
        <div id="content">
            <RouterView />
        </div>
		
    </main>
</template>

<style scoped>
:root {
	--main-fg-color: #2c2f34;
	--main-bg-color: #1a1d21;
}

main {
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
	font-size: 14px;
	color: #39464e;
}

header {
	height: 60px;
	background: var(--main-bg-color);
	box-shadow: 0 0 5px rgba(26,29,33,0);
	z-index: 100;
	font-size: 28px;
	width: 100vw;
}

header .title {
	position: absolute;
	top: -9000em;
}

#layout-container {
	position: fixed;
	top: 0%;
	left: 0%;
	display: grid;
	grid-template-columns: 210px 1fr;
	grid-template-areas:
		"topbar topbar topbar"
		"sidebar content content";
}

#sidebar {
	grid-area: sidebar;
	padding: 0;
	margin: 0;
	font-size: 12px;
	border-right: 1px solid var(--main-fg-color);
	background: #1f2227;
	display: flex;
	flex-direction: column;
	color: #cfd0d1;
	box-shadow: 0 0 0 rgba(0,0,0,.5);
	position: relative;
}

#content {
	grid-area: content;
	position: relative;
}

a {
	outline: none;
	color: #39464e;
	text-decoration: none;
}

ol, ul {
	list-style: none;
}

blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
	margin: 0;
	padding: 0;
}
</style>
