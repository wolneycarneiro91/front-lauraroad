
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>    
            <TextInput source="name" />           
            <TextInput source="email" />
            <TextInput source="password" type="password"/>
        </SimpleForm>
    </Create>
);

export const UserEdit= () => (
    <Edit>
        <SimpleForm>    
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" type="password"/>
        </SimpleForm>
    </Edit>
);