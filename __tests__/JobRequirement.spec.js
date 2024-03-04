import { mount } from '@vue/test-utils';
import JobRequirement from '@/components/JobRequirement.vue';

describe('JobRequirement', () => {
  it('renders the correct text', () => {
    const text = 'Example Requirement';
    const wrapper = mount(JobRequirement, {
      propsData: {
        text,
      },
    });

    expect(wrapper.text()).toContain(text);
  });

  it('has the correct CSS classes', () => {
    const text = 'Example Requirement';
    const wrapper = mount(JobRequirement, {
      propsData: {
        text,
      },
    });

    expect(wrapper.find('.skill-tag').exists()).toBe(true);
    expect(wrapper.find('.skill-tag').text()).toBe(text);
    expect(wrapper.find('.skill-tag').classes()).toContain('text-truncate');
    expect(wrapper.find('.skill-tag').classes()).toContain('justify-content-evenly');
  });
  
});