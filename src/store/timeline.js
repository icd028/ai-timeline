import { defineStore } from 'pinia'

export const useTimelineStore = defineStore('timeline', {
  state: () => ({
    events: [],
    filters: {
      region: 'all', // 'all', 'domestic', 'international'
      year: 'all'
    },
    sortDirection: 'desc' // 'asc' or 'desc'
  }),

  getters: {
    filteredEvents: (state) => {
      let filtered = [...state.events]

      if (state.filters.region !== 'all') {
        filtered = filtered.filter(event => 
          state.filters.region === 'domestic' ? event.isDomestic : !event.isDomestic
        )
      }

      if (state.filters.year !== 'all') {
        filtered = filtered.filter(event => 
          new Date(event.date).getFullYear().toString() === state.filters.year
        )
      }

      return filtered.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return state.sortDirection === 'asc' ? dateA - dateB : dateB - dateA
      })
    },

    availableYears: (state) => {
      const years = new Set(state.events.map(event => 
        new Date(event.date).getFullYear().toString()
      ))
      return Array.from(years).sort()
    }
  },

  actions: {
    setFilter(type, value) {
      this.filters[type] = value
    },

    toggleSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    },

    async fetchEvents() {
      // 从事件数据文件中导入数据
      const { events } = await import('@/data/events.js')
      this.events = events
    }
  }
})