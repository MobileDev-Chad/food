import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({route, navigation}) => {
    const [result, setResult] = useState(null);
    const { id } = route.params;

    const getResult = async (id) => {
        const response = await yelp.get('/${id');
        response.data;
    }
return (
    <View> 
        <Text>Results Show</Text>
    </View>
)
};
const styles = StyleSheet.create({});

export default ResultsShowScreen;
