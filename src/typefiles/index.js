
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const TypeFileList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
        </Datagrid>
    </List>
);

export const TypeFileCreate = () => (
    <Create>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const TypeFileEdit= () => (
    <Edit>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);