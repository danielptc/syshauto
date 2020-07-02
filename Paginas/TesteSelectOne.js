import RNPickerSelect from 'react-native-picker-select';
import React from "react";

export default class Comodos extends React.Component {
    render() {
        return(
            Dropdown
        )



    }
}

export const Dropdown = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
    );
};
