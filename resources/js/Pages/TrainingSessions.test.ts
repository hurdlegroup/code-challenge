import { mount } from '@vue/test-utils'
import TrainingSessions from '../Pages/TrainingSessions.vue'

test('renders the training sessions page', () => {
    const wrapper = mount(TrainingSessions)
    expect(wrapper.text()).toContain('Training Sessions')
});
