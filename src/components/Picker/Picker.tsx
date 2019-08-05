import { Text,Button, Modal, Picker, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    mode: PropTypes.string,
    selectedValue: PropTypes.string,
    selectedValueIndex: PropTypes.string,
    onValueChange: PropTypes.func,
    data: PropTypes.array,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    pickerItemStyle: PropTypes.object,
    collapseViewStyle: PropTypes.object,
}

// const defaultProps = {
//     data: any,
//     mode: 'collapse',

// };

export interface IOSPickerProps {
    data: [],
    // selectedValueIndex?: number,
    selectedValue?: any,
    style?: object,
    textStyle?: object
    onValueChange?: any
}

export interface IOSPickerState {
    data?: [],
    selectedValueIndex?: number
    textStyle?: string
    modalVisible?: boolean
    selectedValue: any
    selected?: number

}
class PickerComponent extends Component<IOSPickerProps, IOSPickerState> {
    constructor(props: any) {
        super(props);
        // let selected = 0;
        // if (this.props.data !== null) {
        //     selected = this.props.data[this.props.selectedValueIndex || 0];
        // } else {
        //     selected = this.props.selectedValue;
        // }
        this.state = {
            modalVisible: false,
            selectedValue: 'SanPyaeLin',
            selected: 0,
        };
    }

    componentWillReceiveProps(nextProps: IOSPickerProps) {
        if (this.props.data == null && nextProps.selectedValue!= this.state.selectedValue) {
            this.setState({
                 selectedValue: nextProps.selectedValue,
            });
        }
    }

    pressItem = () => {
        this.setState({ modalVisible: true });
    }

    valueChange = (data: any, index: any) => {
        this.setState({ modalVisible: false, selectedValue: data, selected: data });
        this.props.onValueChange(data, index);
    }

    

    renderModalPicker() {
        //  const { style, textStyle } = this.props;
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.pressItem}
                // style={[defaultStyles.container, style]}
                >
                    {/* <Text style={textStyle}>
                        {this.state.selectedValue}
                    </Text> */}
                </TouchableOpacity>
            </View>
        )
    }
    handler = () => {
        //  const { style, textStyle } = this.props;
        this.setState({ modalVisible: true });
    }

    render = () => {
        const { children, data } = this.props;
        return (
            <>
                <Button onPress={this.handler} title='press' />
                <Text>{this.state.selected}</Text>
                <View style={{ backgroundColor: 'green' }}>
                    <Modal transparent visible={true}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ modalVisible: false })} style={defaultStyles.overlay}>
                            <View style={defaultStyles.picker}>
                                <Picker
                                    selectedValue={this.state.selected}
                                    onValueChange={this.valueChange as any}
                                >
                                    {
                                        data.map((item: any, i) =>
                                            <Picker.Item key={i} label={item.name} value={item.name} />
                                        )
                                    }
                                    {children}
                                </Picker>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </>
        );
    }
}

export { PickerComponent as Picker };

const defaultStyles = StyleSheet.create({
    container: {
        padding: 5,
        minHeight: 40,
        borderTopWidth: 0.5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        width: null,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    picker: {
        padding: 10,
        borderTopWidth: 0.5,
        borderColor: '#aaa',
        backgroundColor: 'white'
    },
    picker2: {
        backgroundColor: 'white'
    }
});