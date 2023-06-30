
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const PaymmentTypeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
        </Datagrid>
    </List>
);

export const PaymmentTypeCreate = () => (
    <Create>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const PaymmentTypeEdit= () => (
    <Edit>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);