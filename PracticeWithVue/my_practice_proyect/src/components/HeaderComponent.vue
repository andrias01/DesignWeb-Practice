<script setup>
import { useUserStore } from '../stores/user_store';

const userStore = useUserStore();
</script>

<template>
  <header class="header">
    <h1>Movies</h1>

    <div class="login-bar">
      <p v-if="userStore.user" class="username">{{ userStore.user.name }}</p>
      <button @click="userStore.fetchUser()">Login</button>
    </div>

    <nav>
      <ul class="nav-list">
        <li>
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li class="link">
          <router-link class="link" to="/movies">Movies</router-link>
        </li>
        <li class="link">
          <router-link class="link" :to="{ name: 'create-movie' }">Create Movie</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: #000022;
  color: white;
  text-align: center;
  padding: 10px;

  .login-bar {
    width: 100%;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: end;

    .username {
      margin: 0;
      padding-right: 10px;
    }
  }

  .nav-list {
    display: flex;
    justify-content: space-around;

    .link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>