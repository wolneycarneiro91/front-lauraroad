
import { Datagrid, DateField, EmailField, List, TextField, Create, Edit , SimpleForm, TextInput } from 'react-admin';

export const InspectionList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="event_type" />
            <TextField source="old_value" />
            <TextField source="table_name" />
            <TextField source="new_value" />
            <TextField source="url" />
            <TextField source="ip_address" />
            <EmailField source="user_agent" />
        </Datagrid>
    </List>
);



