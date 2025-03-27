<script setup>
import { ref, onMounted } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'

const currentTheme = ref('dark')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  currentTheme.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="title">AI发展时间线</h1>
      <nav class="nav">
        <router-link to="/" class="nav-link">时间线</router-link>
        <router-link to="/about" class="nav-link">关于</router-link>
        <button class="theme-toggle" @click="toggleTheme">
          <el-icon v-if="currentTheme === 'dark'"><Sunny /></el-icon>
          <el-icon v-else><Moon /></el-icon>
        </button>
      </nav>
    </header>

    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #4a90e2;
  --secondary-color: #50e3c2;
  --bg-color: #1a1a1a;
  --text-color: #fff;
  --text-secondary: #bbb;
  --border-color: rgba(255, 255, 255, 0.1);
  --content-bg: rgba(0, 0, 0, 0.2);
  --grid-color: rgba(255, 255, 255, 0.1);
  --particle-color: rgba(255, 255, 255, 0.1);
}

:root[data-theme='light'] {
  --bg-color: #f5f5f5;
  --text-color: #333;
  --text-secondary: #666;
  --border-color: rgba(0, 0, 0, 0.1);
  --content-bg: rgba(255, 255, 255, 0.8);
  --grid-color: rgba(0, 0, 0, 0.1);
  --particle-color: rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--content-bg);
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover,
  &.router-link-active {
    color: var(--secondary-color);
  }
}

.main {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
