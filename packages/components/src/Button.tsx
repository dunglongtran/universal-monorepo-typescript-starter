import * as React from 'react';
import {View, Text,TouchableNativeFeedback} from 'react-native';

export const Button = props =><View><TouchableNativeFeedback><Text>{props.name}</Text></TouchableNativeFeedback></View>
