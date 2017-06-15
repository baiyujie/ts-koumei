import * as avalon from 'avalon2';

const layoutComponent = avalon.component('ms-layout', {
    template: `<div class="koumei-layout" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        style: {},
        className: ''
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-sider',
    template: `<div class="koumei-layout-sider" :css="@style" :class="@className" :class-1="[@fixed?'koumei-layout-fixed-sider':'']"><div class="koumei-layout-sider-inner"><slot /></div></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '300px'
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-header',
    template: `<div class="koumei-layout-header" :css="@style" :class="@className" :class-1="[@fixed?'koumei-layout-fixed-header':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '60px'
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-content',
    template: `<div class="koumei-layout-content" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-footer',
    template: `<div class="koumei-layout-footer" :css="@style" :class="@className" :class-1="[@fixed?'koumei-layout-fixed-footer':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '60px'
    }
});