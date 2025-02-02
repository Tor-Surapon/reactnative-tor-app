import { getProductDetailService } from '@/services/product-service';
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import React from 'react';
import { useEffect } from 'react';
import { List } from 'react-native-paper';

export default function DetailScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  const {data} = useQuery<any[]>({
    queryKey: ['productDetailData'],
    queryFn: async () => {
        const response = await getProductDetailService(Number(params.id));        
        return response.data.data;
    }
  });

  useEffect(() => {
    navigation.setOptions({
      title: params.title
    });
  }, [navigation, params]);

  const _renderItem = ({item}: {item: any}) => (
    <List.Item 
        title= {item.ch_title}
        description= {item.ch_dateadd}
        onPress={() => {
          router.push({pathname: '/website'});
        }} 
      />
  )

  return (
    <>
      {
        data && <FlashList data={data} estimatedItemSize={50} renderItem={_renderItem} />
      }
    </>
  )
}