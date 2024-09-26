import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
	it('renders the tooltip component', () => {
		const { getByText } = render(<Tooltip text="Hover over me" tooltip="Tooltip text" />);
		expect(getByText('Hover over me')).toBeInTheDocument();
	});
});
 