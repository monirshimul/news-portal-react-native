import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WinterPlace from './WinterPlace'

const Categories = ({itemData, term, setTerm}) => {
    return (
        <FlatList
            data={itemData}
            renderItem={({ item, index }) => {
                return <WinterPlace
                    name={item.name}
                    imageUrl={item.imageUrl}
                    bg={item.bg}
                    index={index}
                    active={item.value === term}
                    onOptionsChange={() => setTerm(item.value)}

                />
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(place) => place.name}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})