import { defineComponent, ref, createVNode, Text } from 'vue';

var viLayout = defineComponent({
  setup: function () {
    return {
      sider: ref(false)
    };
  },
  name: 'viLayout',
  methods: {
    hasSider: function () {
      this.sider = true;
    }
  },
  render: function () {
    var $slots = this.$slots;
    var def = $slots.default || '';
    return createVNode("section", {
      "class": ['vite-layout', this.sider ? 'vite-layout-hassider' : '']
    }, [createVNode(def, null, null)]);
  }
});

viLayout.install = function (app) {
  app.component(viLayout.name, viLayout);
};

var viLayoutHeader = defineComponent({
  name: 'viLayoutHeader',
  render: function () {
    var $slots = this.$slots;
    var def = $slots.default;
    return createVNode("section", {
      "class": 'vite-layout-header'
    }, [createVNode(def, null, null)]);
  }
});

viLayoutHeader.install = function (app) {
  app.component(viLayoutHeader.name, viLayoutHeader);
};

var viLayoutSider = defineComponent({
  name: 'viLayoutSider',
  render: function () {
    var _a, _b;

    var _c = this,
        $slots = _c.$slots,
        $parent = _c.$parent;

    var def = $slots.default;

    if ((_a = $parent) === null || _a === void 0 ? void 0 : _a.hasSider) {
      (_b = $parent) === null || _b === void 0 ? void 0 : _b.hasSider();
    }

    return createVNode("aside", {
      "class": 'vite-layout-sider'
    }, [createVNode(def, null, null)]);
  }
});

viLayoutSider.install = function (app) {
  app.component(viLayoutSider.name, viLayoutSider);
};

var viLayoutMain = defineComponent({
  name: 'viLayoutMain',
  render: function () {
    var $slots = this.$slots;
    var def = $slots.default;
    return createVNode("main", {
      "class": 'vite-layout-main'
    }, [createVNode(def, null, null)]);
  }
});

viLayoutMain.install = function (app) {
  app.component(viLayoutMain.name, viLayoutMain);
};

var viLayoutFooter = defineComponent({
  name: 'viLayoutFooter',
  render: function () {
    var $slots = this.$slots;
    var def = $slots.default;
    return createVNode("footer", {
      "class": 'vite-layout-footer'
    }, [createVNode(def, null, null)]);
  }
});

viLayoutFooter.install = function (app) {
  app.component(viLayoutFooter.name, viLayoutFooter);
};

var tuple = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return args;
};
var getButtonSlots = function (self, name) {
  if (name === void 0) {
    name = 'default';
  }

  var res = self.$slots[name]({});
  var children = [];
  res.forEach(function (element) {
    if (element.type === Text) {
      children.push(createVNode("span", null, [element.children]));
    } else {
      children.push(element);
    }
  });
  return children;
};

var ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
tuple('circle', 'circle-outline', 'round');
var ButtonSizes = tuple('large', 'default', 'small');

var buttonProps = function () {
  return {
    size: {
      type: String,
      default: ButtonSizes[1]
    },
    loading: Boolean,
    icon: String,
    shapes: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ButtonTypes[0]
    }
  };
};

var Button = defineComponent({
  name: 'viButton',
  props: buttonProps(),
  setup: function () {},
  render: function () {
    // const { $slots } = this;
    // const className = () => {};
    return createVNode("button", null, [getButtonSlots(this)]);
  }
});

Button.install = function (app) {
  app.component(Button.name, Button);
};

var COMPS = {
  viLayout: viLayout,
  viLayoutHeader: viLayoutHeader,
  viLayoutSider: viLayoutSider,
  viLayoutMain: viLayoutMain,
  viLayoutFooter: viLayoutFooter,
  button: Button
};
var VERSION = '0.0.1';

var install = function (app) {
  for (var key in COMPS) {
    app.use(COMPS[key]);
  }
};
var index = {
  install: install,
  version: VERSION
};

export default index;
export { Button as button, viLayout, viLayoutFooter, viLayoutHeader, viLayoutMain, viLayoutSider };
//# sourceMappingURL=index.js.map
