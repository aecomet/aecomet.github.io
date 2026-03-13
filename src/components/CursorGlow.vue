<template>
  <div class="cursor-glow" :style="style" />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue';

const state = reactive({ x: 0, y: 0 });

const style = computed(() => ({
  left: `${state.x}px`,
  top: `${state.y}px`,
  opacity: state.x === 0 && state.y === 0 ? '0' : '1'
}));

function onMouseMove(e: MouseEvent) {
  state.x = e.clientX;
  state.y = e.clientY;
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
});
</script>
