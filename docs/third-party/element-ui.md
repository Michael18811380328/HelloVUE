# element-ui

Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库

https://element.eleme.cn/#/zh-CN/component/installation

支持按需引入和完整引入

按需引入

~~~js
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
~~~

完整引入，包括下面常用组件

~~~js
import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
~~~

# element-ui 


### version

2.15.14 • 


### downloads

192,906 


### repository

github.com/ElemeFE/element 


### homepage

element.eleme.io 


## default readme


> A Vue.js 2.0 UI Toolkit for Web.

Element will stay with Vue 2.x

For Vue 3.0, we recommend using [Element Plus](https://github.com/element-
plus/element-plus)(Element Plus is a community develop project)

For MiniProgram development, we recommend using
[MorJS](https://github.com/eleme/morjs)

## Links

  * Homepage and documentation 
    * [International users](http://element.eleme.io/#/en-US)
    * [Chinese users](http://element.eleme.io/#/zh-CN)
    * [Spanish users](http://element.eleme.io/#/es)
    * [French users](http://element.eleme.io/#/fr-FR)
  * [awesome-element](https://github.com/ElementUI/awesome-element)
  * [FAQ](https://github.com/ElemeFE/element/blob/HEAD/FAQ.md)
  * [Vue.js 3.0 migration](https://github.com/element-plus/element-plus)
  * [Customize theme](http://element.eleme.io/#/en-US/component/custom-theme)
  * [Preview and generate theme online](https://elementui.github.io/theme-chalk-preview)
  * [Element for React](https://github.com/elemefe/element-react)
  * [Element for Angular](https://github.com/ElemeFE/element-angular)
  * [Atom helper](https://github.com/ElemeFE/element-helper)
  * [Visual Studio Code helper](https://github.com/ElemeFE/vscode-element-helper)
  * Starter kit 
    * [element-starter](https://github.com/ElementUI/element-starter)
    * [element-in-laravel-starter](https://github.com/ElementUI/element-in-laravel-starter)
  * [Design resources](https://github.com/ElementUI/Resources)
  * Gitter 
    * [International users](https://gitter.im/element-en/Lobby)
    * [Chinese users](https://gitter.im/ElemeFE/element)

## Install


​    
​    npm install element-ui -S

## Quick Start


​    
​    import Vue from 'vue'
​    import Element from 'element-ui'
​    
​    Vue.use(Element)
​    

    // or
    import {
      Select,
      Button
      // ...
    } from 'element-ui'
    
    Vue.component(Select.name, Select)
    Vue.component(Button.name, Button)

For more information, please refer to [Quick
Start](http://element.eleme.io/#/en-US/component/quickstart) in our
documentation.

## Browser Support

Modern browsers and Internet Explorer 10+.

## Development

Skip this part if you just want to use Element.

For those who are interested in contributing to Element, please refer to our contributing guide ([中文](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md) | [English](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.en-US.md) | [Español](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.es.md) | [Français](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.fr-FR.md)) to see how to run this project.

## Changelog

Detailed changes for each release are documented in the [release
notes](https://github.com/ElemeFE/element/releases).

## FAQ

We have collected some [frequently asked
questions](https://github.com/ElemeFE/element/blob/master/FAQ.md). Before
reporting an issue, please search if the FAQ has the answer to your problem.
