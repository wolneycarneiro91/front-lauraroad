
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const FundTypeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
        </Datagrid>
    </List>
);

export const FundTypeCreate = () => (
    <Create>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const FundTypeEdit= () => (
    <Edit>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);