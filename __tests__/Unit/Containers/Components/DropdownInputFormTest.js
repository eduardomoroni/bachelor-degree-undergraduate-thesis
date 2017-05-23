// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
// $FlowFixMe
import AndroidDropDown from '../../../../src/Containers/Components/DropdownInputForm.android'
import iOSDropDown from '../../../../src/Containers/Components/DropdownInputForm.ios'
import { InputLabel, InputPicker } from '../../../../src/Containers/Components'

const props = {
  dropdownItems: ['item1', 'item2', 'item3'],
  selectedValue: 'item1',
  input: {
    name: 'beauty label',
    onChange: jest.fn() //  <-- This is a mock
  }
}

describe('<DropdownInputForm />', () => {

  const testDropdown = (component) => {
    const wrapper = shallow(component)
    const pickerProps = wrapper.find(InputPicker).props()
    console.log(wrapper.getNode())
    expect(wrapper.find(InputLabel).prop('label')).toEqual(props.input.name)
    expect(pickerProps.selectedValue).toEqual(props.selectedValue)
    expect(pickerProps.dropdownItems).toEqual(props.dropdownItems)
    expect(wrapper).toMatchSnapshot()
  }

  it('Should render android dropdown component', () => {
    testDropdown(<AndroidDropDown {...props} />)
    // const wrapper = shallow(<AndroidDropDown {...props} />)
    // const pickerProps = wrapper.find(InputPicker).props()

    // expect(wrapper.find(InputLabel).prop('label')).toEqual(props.input.name)
    // expect(pickerProps.selectedValue).toEqual(props.selectedValue)
    // expect(pickerProps.dropdownItems).toEqual(props.dropdownItems)
    // expect(wrapper).toMatchSnapshot()
  })

  it('Should render ios dropdown Component', () => {
    const props = { name: 'label', onChange: () => null }

    const wrapper = shallow(<iOSDropDown {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.prop('onChange')).toEqual(props.onChange)
  })
})
