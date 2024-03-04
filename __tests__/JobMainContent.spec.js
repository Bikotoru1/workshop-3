import { mount } from '@vue/test-utils';
import JobMainContent from '@/components/JobMainContent.vue';
import JobRequirement from '@/components/JobRequirement.vue';
import JobDetails from '@/components/JobDetails.vue';

describe('JobMainContent', () => {
  // Test case to verify that the component renders correctly with props
  it('renders correctly with props', () => {
    const icon = 'icon.jpg';
    const name = 'Senior Software Engineer';
    const company = 'Tech Company';
    const location = 'New York';
    const salary = '$100,000 - $120,000';
    const vacancies = 5;
    const creationDate = new Date();
    const requirements = ['JavaScript', 'Vue.js', 'HTML', 'CSS'];

    const wrapper = mount(JobMainContent, {
      propsData: {
        icon,
        name,
        company,
        location,
        salary,
        vacancies,
        creationDate,
        requirements,
      },
    });

    // Assert that the component renders correctly
    expect(wrapper.exists()).toBe(true);

    // Assert that the child components are rendered with the correct props
    expect(wrapper.findComponent(JobRequirement).exists()).toBe(true);
    expect(wrapper.findComponent(JobDetails).exists()).toBe(true);

    // Assert that the props are correctly passed to the child components
    expect(wrapper.findComponent(JobRequirement).props('text')).toEqual(requirements[0]);
    expect(wrapper.findComponent(JobDetails).props()).toEqual({
      company,
      location,
      salary,
      vacancies,
      creationDate,
    });

    // Assert that the DOM structure matches the expected structure
    expect(wrapper.find('#job-title').text()).toBe(name);
    expect(wrapper.find('#icon').attributes('src')).toBe(icon);
  });

  // Add more test cases as needed to cover different scenarios
});
