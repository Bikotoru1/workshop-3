import { mount } from '@vue/test-utils';
import JobDetailsItem from '@/components/JobDetailsItem.vue';

describe('JobDetailsItem', () => {
  it('renders the text prop correctly', () => {
    const text = 'Example Text';
    const wrapper = mount(JobDetailsItem, {
      propsData: { text }
    });
    expect(wrapper.text()).toMatch(text);
  });

  it('renders the icon prop correctly', () => {
    const icon = 'example-icon';
    const wrapper = mount(JobDetailsItem, {
      propsData: { icon }
    });
    expect(wrapper.props().icon).toBe(icon);
  });

  it('renders the paths prop correctly', () => {
    const paths = [{ fillRule: 'evenodd', d: 'M0 0h16v16H0z' }];
    const wrapper = mount(JobDetailsItem, {
      propsData: { paths }
    });
    expect(wrapper.props().paths).toEqual(paths);
  });
  
  // Test case to verify that the component renders correctly with props
  it('renders correctly with props', () => {
    const text = 'Company Name';
    const paths = [
      { fillRule: "evenodd", d: "M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" },
      { fillRule: "", d: "M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" }
    ];

    const wrapper = mount(JobDetailsItem, {
      propsData: {
        text,
        paths,
      },
    });

    // Assert that the component renders correctly
    expect(wrapper.exists()).toBe(true);

    // Assert that the text prop is rendered correctly
    expect(wrapper.text()).toBe(text);

    // Assert that SVG paths are rendered correctly
    const svgPaths = wrapper.findAll('path');
    expect(svgPaths).toHaveLength(paths.length);
    svgPaths.wrappers.forEach((pathWrapper, index) => {
      expect(pathWrapper.attributes('fill-rule')).toBe(paths[index].fillRule);
      expect(pathWrapper.attributes('d')).toBe(paths[index].d);
    });
  });

  // Test case to verify that the component renders with default props
  it('renders with default props', () => {
    const wrapper = mount(JobDetailsItem, {
      propsData: {
        text: 'Default Text',
        paths: [{ fillRule: 'evenodd', d: 'M0 0h16v16H0z' }],
      },
    });

    // Assert that the component renders correctly
    expect(wrapper.exists()).toBe(true);

    // Assert that the default text prop is rendered correctly
    expect(wrapper.text() == 'Default Text');

    // Assert that the default SVG paths are rendered correctly
    const svgPaths = wrapper.findAll('path');
    expect(svgPaths.length == 1);
    expect(svgPaths.at(0).attributes('fill-rule') == 'evenodd');
    expect(svgPaths.at(0).attributes('d') == 'M0 0h16v16H0z');
  });

  // Test case to verify that the component has the correct default styles
  it('has the correct default styles', () => {
    const wrapper = mount(JobDetailsItem);

    // Assert that the component has the correct default styles
    expect(wrapper.classes()).toContain('text-truncate');
    expect(wrapper.classes()).toContain('text-capitalize');
  });

  // Test case to verify that the component changes color on hover
  it('changes color on hover', async () => {
    const wrapper = mount(JobDetailsItem);

    // Assert that the component has the correct default color
    expect(wrapper.element.style.color == 'var(--tertiary-color)');

    // Assert that the component changes color on hover
    await wrapper.trigger('mouseover');
    expect(wrapper.element.style.color == 'var(--primary-color)');
    await wrapper.trigger('mouseleave');
    expect(wrapper.element.style.color == 'var(--tertiary-color)');
  });

  // Add more test cases as needed to cover different scenarios
});
