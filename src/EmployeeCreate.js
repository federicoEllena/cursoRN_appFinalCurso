import React,{ Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button, Confirm  } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from './actions';

class EmployeeCreate extends Component {

  state = { showModal: false };

  /*recordar que employeeUpdate(parm) es un action creator que creara una accion
  que luego sera despachada a los reducers a traves de connect*/
  /*handleNameChange = text => this.props.employeeUpdate({ prop: 'name', value: text });
  handlePhoneChange = text => this.props.employeeUpdate({ prop: 'phone', value: text });
  una alternativa mas elegante usando sintaxis de es6, como la segunda key del
  actionCreator es value, entonces*/

  handleNameChange = value => this.props.employeeUpdate({ prop: 'name', value });
  handlePhoneChange = value => this.props.employeeUpdate({ prop: 'phone', value });
  handleShiftChange = value => this.props.employeeUpdate({ prop:'shift', value });
  handleButtonPress = () => {
    const { name, phone, shift} = this.props;
    this.props.employeeCreate( { name, phone, shift: shift ? shift: 'Monday'} );
  };
  onAcceptPress = () => this.setState({showModal: false});
  onDeclinePress = () => this.setState({showModal: false});
  
  
  /* los componentes default de RN toman los estilos y los aplican,
  los custom no necesariamente, debe hacerse a mano y asegurarse que tomen
  el estilo */
  render() {
    return(
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Joseph" value={this.props.name} onChangeText={this.handleNameChange} />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="119999999" value={this.props.phone} onChangeText={this.handlePhoneChange}/>
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
            <Text style={ styles.pickerLabelStyle }>Shift</Text>
            <Picker selectedValue={this.props.shift} style={{height: 50, flex:1}} onValueChange={this.handleShiftChange}> 
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednsday" value="Wednsday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />           
            </Picker>
        </CardSection>

        <CardSection>
          <Button whenPressed={this.handleButtonPress}>Create</Button>
          <Button whenPressed={() => this.setState(prevState => ({ showModal: !prevState.showModal }))}>Create 2</Button>
        </CardSection>
        
        <Confirm visible={this.state.showModal} 
          onAccept={this.onAcceptPress}
          onDecline={this.onDeclinePress}
        >Sure you want to add this employee?</Confirm>        
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }  
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);