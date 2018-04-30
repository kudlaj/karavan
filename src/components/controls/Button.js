
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';



export default class Button extends Component {
	render() {
		return (
			<TouchableOpacity style={[styles.menuButton,this.props.style]} onPress={this.props.onPress}>
            	<Ionicons name={this.props.icon} color={textColor} size={30} />
            	<Text style={[styles.welcome_buttonText,{color:textColor}]}>{this.props.title}</Text>
            </TouchableOpacity>  
		);
	}


}