<template>
  <nav>
    <ul class="nav-links">
      <li>
        <router-link to="/" class="nav-link" :class="{ active: isActive('/') }">Home</router-link>
      </li>
      <li>
        <router-link to="/profile" class="nav-link" :class="{ active: isActive('/profile') }">Profile</router-link>
      </li>
      <li>
        <router-link to="/career" class="nav-link" :class="{ active: isActive('/career') }">Career</router-link>
      </li>
      <li>
        <router-link to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path: string) => route.path === path;
</script>
