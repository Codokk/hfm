import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
  setup() {
    const entry = {
        ip: "10.0.0.1",
        hosts: "Localhost",
        actve: true
    };
    const data = ref([])
    for(let i = 0; i < 0; i++) {
        data.value.push(entry);
    }
    return { data }
  },
  template: `
  <div class="grid w-100 surface-100 px-3 py-2 mt-2 border-round">
    <div v-for="entry in data" v-if="data.length > 0" class="row grid col-12 hover:surface-200 border-round">
        <div class="col-6 flex align-items-center">
            {{entry.ip}}
        </div>
        <div class="col-6 flex align-items-center justify-content-between">
        <span>
            {{entry.hosts}}
        </span>
        <label class="switch">
            <input type="checkbox" class="switch-input" :checked="active">
            <span class="slider round"></span>
        </label>
        </div>
    </div>
    <div v-else class="col-12 text-center surface-100 px-3 py-2 mt-2 border-round">
        <p>No entries found</p>
    </div>
  </div>
  `
}