
import React from 'react'
import {  AppRegistry,
    StyleSheet,asset, VrButton, Text, View} from 'react-360'
import Entity from 'Entity'

export default class vods extends React.Component{
    render(){
        return(
            <View>
            <Entity 
                source={{
                    obj: asset('vods.obj'),
                    mtl: asset('vods.mtl')
                }}
                
                style={{transform:[
                    {scaleX: 1 },
                    { scaleY: 1 },
                    { scaleZ: 1 },

                ]}}
                />
            </View>
        )
    }
}