
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const ChannelMarketingList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
        </Datagrid>
    </List>
);

export const ChannelMarketingCreate = () => (
    <Create>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const ChannelMarketingEdit= () => (
    <Edit>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);