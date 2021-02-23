import { defineComponent, reactive } from 'vue';
import { RouterView } from 'vue-router';

const state = reactive({
  t: 'ooo',
});

export default defineComponent({
  components: {},
  render() {
    return (
      <vi-layout>
        <vi-layout-header>header</vi-layout-header>
        <vi-layout>
          <vi-layout-sider>sider</vi-layout-sider>
          <vi-layout-main>{state.t}</vi-layout-main>
        </vi-layout>
        <vi-layout-footer>footer</vi-layout-footer>
      </vi-layout>
    );
  },
});
