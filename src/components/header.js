import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
    
};

const styles = {
    viewStyle :{
        backgroundColor : '#ffdb58',
        justifyContent : 'center',
        alignItems : 'center',
        height : 100,
        paddingTop : 15,
        shadowColor: 'white',
        shadowOffset: {width:0, height:5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position:'relative'

    },
    textStyle : {
        color : 'white',
        fontSize : 30,
        fontWeight:'600',
    }
};

export default Header;