import { Card, Picker, View, } from "@bluebase/components"
import { Modal, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

import { Button } from '@bluebase/core/dist/native';

export interface IOSPickerProps {
    items: [],
    selectedValue: string,
    style?: object,
    onValueChange: (data: object, index: number) => void
}

export interface IOSPickerState {
    selectedValueIndex?: number
    textStyle?: string
    modalVisible?: boolean
    selectedValue: string
    selected?: number

}
class PickerComponent extends Component<IOSPickerProps, IOSPickerState> {
    constructor(props: any) {
        super(props);

        this.state = {
            modalVisible: false,
            selectedValue: '',
            selected: 0,
        };
    }

    componentWillReceiveProps(nextProps: IOSPickerProps) {
        if (this.props.items == null && nextProps.selectedValue != this.state.selectedValue) {
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
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.pressItem}
                >
                </TouchableOpacity>
            </View>
        )
    }
    handler = () => {
        this.setState({ modalVisible: true });
    }

    render = () => {
        const { children, items } = this.props;
        return (
            <>

                <Modal transparent visible={true}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ modalVisible: false })} >
                        <View>
                            <Card>
                                <Picker
                                    selectedValue={this.state.selected}
                                    onValueChange={this.valueChange as any}
                                >
                                    {
                                        items.map((item: any, i: number) =>
                                            <Picker.Item key={i} label={item.name} value={item.name} />
                                        )
                                    }
                                    {children}
                                </Picker>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Button style={{ backgroundColor: 'green' }} title={this.state.selected} onPress={this.handler} />

            </>
        );
    }
}

export { PickerComponent as Picker };

