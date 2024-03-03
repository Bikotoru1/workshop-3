import { mount } from '@vue/test-utils';
import JobDetails from '@/components/JobDetails.vue';
import JobDetailsItem from '@/components/JobDetailsItem.vue';

describe('JobDetails', () => {
  // Test case to verify that the component renders correctly with props
  it('renders correctly with props', () => {
    const company = 'Tech Company';
    const location = 'New York';
    const salary = '$100,000 - $120,000';
    const vacancies = 5;
    const creationDate = new Date();

    const wrapper = mount(JobDetails, {
      propsData: {
        company,
        location,
        salary,
        vacancies,
        creationDate,
      },
    });

    // Assert that the component renders correctly
    expect(wrapper.exists()).toBe(true);

    // Assert that JobDetailsItem components are rendered for each prop
    expect(wrapper.findAllComponents(JobDetailsItem)).toHaveLength(5);

    // Assert that props are correctly passed to JobDetailsItem components
    const props = wrapper.findAllComponents(JobDetailsItem).wrappers.map(wrapper => wrapper.props());
    expect(props).toEqual([
      { paths: wrapper.vm.building, text: company },
      { paths: wrapper.vm.geo, text: location },
      { paths: wrapper.vm.cash, text: salary },
      { paths: wrapper.vm.people, text: `${vacancies} Vacante${vacancies === 1 ? "" : "s"}` },
      { paths: wrapper.vm.calendar, text: wrapper.vm.getElapsedTime(creationDate) },
    ]);
  });

  // Add more test cases as needed to cover different scenarios
});
