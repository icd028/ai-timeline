<template>
  <div class="home">
    <div class="tech-background">
      <div class="tech-grid"></div>
      <div class="tech-particles"></div>
    </div>

    <div class="filters">
      <el-select
        v-model="regionFilter"
        placeholder="选择地区"
        class="filter-item"
      >
        <el-option label="全部" value="all" />
        <el-option label="国内" value="domestic" />
        <el-option label="国际" value="international" />
      </el-select>

      <el-select
        v-model="yearFilter"
        placeholder="选择年份"
        class="filter-item"
      >
        <el-option label="全部年份" value="all" />
        <el-option
          v-for="year in availableYears"
          :key="year"
          :label="year + '年'"
          :value="year"
        />
      </el-select>

      <el-button @click="toggleSort" class="filter-item">
        {{ sortDirection === 'asc' ? '时间正序' : '时间倒序' }}
        <el-icon class="sort-icon">
          <component :is="sortDirection === 'asc' ? 'ArrowUp' : 'ArrowDown'" />
        </el-icon>
      </el-button>
    </div>

    <div class="timeline">
      <div class="timeline-line"></div>
      <div
        v-for="(event, index) in filteredEvents"
        :key="event.id"
        class="timeline-item"
        :class="{
          'is-domestic': event.isDomestic,
          'is-left': index % 2 === 0,
          'is-right': index % 2 === 1,
        }"
      >
        <div class="timeline-date">
          {{ formatDate(event.date) }}
        </div>
        <div class="timeline-content">
          <h3 class="timeline-title">{{ event.title }}</h3>
          <div class="timeline-tags">
            <el-tag :type="event.isDomestic ? 'success' : 'info'" size="small">
              {{ event.isDomestic ? '国内' : '国际' }}
            </el-tag>
            <el-tag type="warning" size="small">{{ event.category }}</el-tag>
            <a
              v-if="event.source"
              :href="event.source"
              target="_blank"
              class="source-link"
              title="查看来源"
            >
              <el-icon><Link /></el-icon>
            </a>
          </div>
          <p class="timeline-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useTimelineStore } from '@/store/timeline'
import { ArrowUp, ArrowDown, Link } from '@element-plus/icons-vue'
import dayjs from 'dayjs'

const store = useTimelineStore()
const regionFilter = ref('all')
const yearFilter = ref('all')

const sortDirection = computed(() => store.$state.sortDirection)
const filteredEvents = computed(() => store.filteredEvents)
const availableYears = computed(() => store.availableYears)

const toggleSort = () => {
  store.toggleSortDirection()
}

const formatDate = (date) => {
  return dayjs(date).format('YYYY年MM月DD日')
}

watch(regionFilter, (newValue) => {
  store.setFilter('region', newValue)
})

watch(yearFilter, (newValue) => {
  store.setFilter('year', newValue)
})

onMounted(() => {
  store.fetchEvents()
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  color: var(--text-color);
  position: relative;
  overflow: hidden;
}

.tech-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: var(--bg-color);
  overflow: hidden;
}

.tech-grid {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(45deg);
  animation: grid-move 20s linear infinite;
}

.tech-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--particle-color) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: particles-fade 3s ease-in-out infinite alternate;
}

@keyframes grid-move {
  from {
    transform: perspective(500px) rotateX(45deg) translateY(0);
  }
  to {
    transform: perspective(500px) rotateX(45deg) translateY(50px);
  }
}

@keyframes particles-fade {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 0.7;
  }
}

.filters {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 800px;
  justify-content: center;

  .filter-item {
    min-width: 120px;
  }

  .sort-icon {
    margin-left: 4px;
  }
}

.timeline {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #4a90e2 0%, #50e3c2 100%);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  width: 100%;
  justify-content: center;
  opacity: 0;
  animation: item-fade-in 0.5s ease forwards;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #4a90e2;
    border: 2px solid #1a1a1a;
    transform: translateX(-50%);
    z-index: 2;
  }

  &.is-domestic::before {
    background: #50e3c2;
  }

  &.is-left {
    .timeline-content {
      margin-right: calc(50% + 2rem);
      transform-origin: right center;

      &:hover {
        transform: translateX(-5px);
      }
    }

    .timeline-date {
      right: calc(50% + 1rem);
      text-align: right;
    }
  }

  &.is-right {
    .timeline-content {
      margin-left: calc(50% + 2rem);
      transform-origin: left center;

      &:hover {
        transform: translateX(5px);
      }
    }

    .timeline-date {
      left: calc(50% + 1rem);
      text-align: left;
    }
  }
}

@keyframes item-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-date {
  position: absolute;
  top: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  width: 120px;
  margin-top: -2.5rem;
}

.timeline-content {
  width: calc(50% - 8rem);
  background: var(--content-bg);
  border-radius: 8px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2.5rem;
}

.timeline-title {
  margin: 0 0 1rem;
  color: var(--text-color);
  font-size: 1.25rem;
}

.timeline-tags {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}

.timeline-description {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

:deep(.el-select) {
  .el-input__wrapper {
    background: var(--content-bg);
    box-shadow: none;
    border: 1px solid var(--border-color);
  }

  .el-input__inner {
    color: var(--text-color);
  }
}

:deep(.el-button) {
  background: var(--content-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    background: var(--content-bg);
    opacity: 0.8;
  }
}

.source-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--text-secondary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--text-color);
  }
}
</style>
