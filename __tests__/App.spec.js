import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render the Vue app to the DOM", () => {
    expect(wrapper.exists()).toBe(true);
  });
  
  it("should render the correct HTML", () => {
    expect(wrapper.html()).toContain('<div id="app">');
  });

  it("should render the correct data", () => {
    expect(wrapper.vm.$data.jobs.length).toBe(5);
  });
  
});
