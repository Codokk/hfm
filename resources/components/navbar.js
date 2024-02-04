import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
  <div class="surface-50 flex flex-row align-items-center justify-content-between">
    <div class="inline-block w-2 h-1">
      <button class="grey-800 flex flex-row align-items-center inline-block">
        <img src="https://placehold.co/400" class="mr-1 w-3">
        <p> New entry </p>
      </button>
    </div>

    <div>
      <p>these are others</p>
    </div>
  </div>`
}