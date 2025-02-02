import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { ImageBackground, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Drawer } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useQuery } from '@tanstack/react-query';
import { getVersionService, getVersionService2 } from '@/services/util-service';
import { useContext } from 'react';
import { AuthStoreContext } from '@/contexts/AuthContext';
import { logoutService } from '@/services/auth-service';
import { router } from 'expo-router';
// import { getWebService } from '@/services/web-service';

export default function AppMenu(props: DrawerContentComponentProps) {

  const { profile, onLogout } = useContext(AuthStoreContext);
  
  const {data:verS1} = useQuery<string>({
    queryKey: ['versionData'],
    queryFn: async () => {
      const response = await getVersionService();
      //  console.log(response);
      return response.data.data.version;
    }
  });

  const {data:verS2} = useQuery<string>({
    queryKey: ['versionData2'],
    queryFn: async () => {
      const response = await getVersionService2();
      return response.data;
    }
  });

  // const {data:data3} = useQuery<string>({
  //   queryKey: ['webData'],
  //   queryFn: async () => {
  //     const response = await getWebService();
  //     // console.log(response);
  //     // const js = JSON.parse(response.data);
  //     // console.log(js);      
  //     return response.data;
  //   }
  // });

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground 
            source={{uri: 'https://picsum.photos/180/180'}}
            // source={require('@/assets/images/partial-react-logo.png')}
            style={{width: '100%', height: 180, justifyContent: 'center', alignItems: 'center'}}
        >
            <Text style={{fontSize: 20, color: 'white'}}>Main Menu</Text>
            {
               verS1 && <Text style={{fontSize: 16, color: 'white'}}>Version: { verS1 }</Text>
            }
            {
               verS2 && <Text style={{fontSize: 16, color: 'white'}}>Version: { verS2 }</Text>
            }
            {
              profile && <Text style={{fontSize: 16, color: 'red', fontWeight: "bold"}}>
                id : { profile.id } ยินดีต้อนรับ : { profile.name }
                </Text>
            }
            
        </ImageBackground>
        <Drawer.Section title="เมนูหลัก">
          <Drawer.Item
            icon={"home"}
            label="Home"       
            right={() => <MaterialIcons name="arrow-forward" size={20}/>}    
            onPress={ () => {
              props.navigation.navigate('(tabs)');
            }}   
          />
          <Drawer.Item
            icon={"star"}
            label="สินค้า"
            right={() => <MaterialIcons name="arrow-forward" size={20}/>}   
            onPress={ () => {
              props.navigation.navigate('(product)');
            }}  
          /> 
        </Drawer.Section>
        <Drawer.Section>
          <Drawer.Item
            icon={"logout"}
            label="ออกจากระบบ"                   
            right={() => <MaterialIcons name="arrow-forward" size={20}/>}    
            onPress={ async () => {
              await logoutService();
              onLogout();
              router.replace('/login');
            }}   
          />
        </Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  )
}