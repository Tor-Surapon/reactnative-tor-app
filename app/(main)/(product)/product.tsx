import { router, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { getProductService } from '@/services/product-service';
import { FlashList } from '@shopify/flash-list';
import { Card, Chip, Text } from 'react-native-paper';
import AppLoading from '@/components/AppLoading';

export default function ProductScreen() {

    const navigation = useNavigation();

    const {data, isPending, error, isError, refetch, isRefetching} = useQuery<any[]>({
        queryKey: ['productData'],
        queryFn: async () => {
            const response = await getProductService();
            return response.data.data;
        }
      });
  
    useEffect(() => {
        navigation.setOptions({
            title: 'Pruduct',
            headerTitleAlign: 'center',
            headerShown: true,
            headerLeft: () => (
            <MaterialIcons.Button 
                name="menu"
                backgroundColor="#9dc31b"
                onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
                }}
            />
            ),
            headerStyle: {
            backgroundColor: '#9dc31b'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        });
    },[navigation]);

    const _renderItem = ({item}: {item: any}) => {
        
        return (
  
            <Card style={{margin: 10}} onPress={() => {

                    router.push({
                        pathname: '/detail',
                        params: { 
                            id: item.id,
                            title: item.title
                        }
                    })
                }}>
                <Card.Cover source={{uri: item.picture}} />            
                <Card.Content>
                    <Text variant='titleLarge'>{item.title}</Text>
                    <Text variant='bodyMedium'>{item.detail}</Text>
                </Card.Content>
                <Card.Actions>
                    <Chip icon="calendar">{item.date}</Chip>
                    <Chip icon="eye">{item.view}</Chip>
                </Card.Actions>
            </Card>
        );
    } 

    const _onRefresh = () => {
        refetch();              
    }    

    if (isPending) {
        return <AppLoading />
    }

    if (isError) {

        return (
            <>
                <Text style={{color: "red"}}>เกิดข้อผิดพลาดจาก server โปรดลองใหม่อีกครั้ง</Text>
                <Text>{JSON.stringify(error.message)}</Text>
            </>
        )
    }

    return (
        <>
            {
                data && <FlashList 
                            data={data} 
                            estimatedItemSize={50} 
                            renderItem={_renderItem} 
                            onRefresh={_onRefresh}
                            refreshing={isRefetching}
                        />
            }
        </>
    )
}