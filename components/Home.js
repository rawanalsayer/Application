import { TabNavigator  } from 'react-navigation'

import Home from './Homepage/Home'
import Skils from './Skilss-screen/App'
import Latifah from './Latifah\'s\ work/App'
import Tasks from './Tasks/Tasks'

const config = {
    Home: { screen: Home },
    Skils: { screen: Skils },
    Latifah: { screen: Latifah },
    Tasks: { screen: Tasks }
}
export default  TabNavigator(config)

// export default class Home extends React.Component {
    
  
   
  
//     // Render any loading content that you like here
//     render() {
//       return (
//         <View style={styles.container}>
//           <Tabs />
//         </View>
//       );
//     }
//   }
