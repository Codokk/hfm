import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
  <div class="surface-50 flex flex-row align-items-center justify-content-between mt-3 mb-3">
    <div class="inline-block w-2 h-1">
      <button class="surface-100 flex flex-row align-items-center inline-block border-none border-round justify-content-center hover:surface-200">
        <i class="pi pi-plus mr-3 w-1"></i>  
        <p> New entry </p>
      </button>
    </div>

    <div class="flex flex-row">
      <i class="pi pi-file mr-3 p-2 hover:surface-200 text-xl border-round-md"></i>
      <i class="pi pi-filter mr-3 p-2 hover:surface-200 text-xl border-round-md"></i>
      <i class="pi pi-external-link mr-3 p-2 hover:surface-200 text-xl border-round-md"></i>
      <i class="pi pi-cog mr-3 p-2 hover:surface-200 text-xl border-round-md"></i>
    </div>
  </div>`
}