<template>
  <div class="cursor-glow" :style="style" />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const state = reactive({ x: 0, y: 0 });

const style = computed(() => ({
  left: `${state.x}px`,
  top: `${state.y}px`,
  opacity: state.x === 0 && state.y === 0 ? '0' : '1'
}));

const throttleId = ref<number | null>(null);
const THROTTLE_MS = 16;

function onMouseMove(e: MouseEvent) {
  if (throttleId.value !== null) return;
  state.x = e.clientX;
  state.y = e.clientY;
  throttleId.value = window.setTimeout(() => {
    throttleId.value = null;
  }, THROTTLE_MS);
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
  if (throttleId.value !== null) window.clearTimeout(throttleId.value);
});
</script>
