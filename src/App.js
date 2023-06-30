import './App.css';
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList, UserCreate, UserEdit} from './users/index';
import {InspectionList} from './inspections/index';
import {FundTypeList, FundTypeCreate, FundTypeEdit} from './fundtypes/index';
import {PlansTypeList, PlansTypeCreate, PlansTypeEdit} from './planstypes/index';
import {StatusList, StatusCreate, StatusEdit} from './status/index';
import {TypeFileList, TypeFileCreate, TypeFileEdit} from './typefiles/index';
import {ChannelMarketingList, ChannelMarketingCreate, ChannelMarketingEdit} from './channelmarketings/index';
import {PlataformList, PlataformCreate, PlataformEdit} from './plataforms/index';
import {LevelDonorList, LevelDonorCreate, LevelDonorEdit} from './leveldonors/index';
import {DonorTypeList, DonorTypeCreate, DonorTypeEdit} from './donortype/index';
import {PaymmentTypeList, PaymmentTypeCreate, PaymmentTypeEdit} from './paymmenttypes/index';
import {ProfileList, ProfileCreate, ProfileEdit} from './profiles/index';
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:8971/api');
function App() {
  return (
   <Admin dataProvider={dataProvider}> 
    <Resource name="inspections" list={InspectionList} />
    <Resource name="profiles" list={ProfileList} create={ProfileCreate} edit={ProfileEdit}/>
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}/>
    <Resource name="paymmenttypes" list={PaymmentTypeList} create={PaymmentTypeCreate} edit={PaymmentTypeEdit} />
    <Resource name="typefiles" list={TypeFileList} create={TypeFileCreate} edit={TypeFileEdit} />
    <Resource name="fundtypes" list={FundTypeList} create={FundTypeCreate} edit={FundTypeEdit} />
    <Resource name="planstypes" list={PlansTypeList} create={PlansTypeCreate} edit={PlansTypeEdit} />
    <Resource name="donortypes" list={DonorTypeList} create={DonorTypeCreate} edit={DonorTypeEdit} />
    <Resource name="statuses" list={StatusList} create={StatusCreate} edit={StatusEdit} />
    <Resource name="channelmarketings" list={ChannelMarketingList} create={ChannelMarketingCreate} edit={ChannelMarketingEdit} />
    <Resource name="leveldonors" list={LevelDonorList} create={LevelDonorCreate} edit={LevelDonorEdit} />
    <Resource name="plataforms" list={PlataformList} create={PlataformCreate} edit={PlataformEdit} />
   </Admin>
  );
}

export default App;
