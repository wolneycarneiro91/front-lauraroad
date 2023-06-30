
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const LevelDonorList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
        </Datagrid>
    </List>
);

export const LevelDonorCreate = () => (
    <Create>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const LevelDonorEdit= () => (
    <Edit>
        <SimpleForm>             
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);