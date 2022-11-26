import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { color } from '@mui/system';
// import EmailIcon from '@material-ui/icons/Email';

const rows: GridRowsProp =[
  { id: 1, col1: '1', col2: 'Martin Muhia', col3:"martinmuhia@gmail.com",col4: "Fever Cold",col5:"23",col6:"+254793852061"},
  { id: 2, col1: '2', col2: 'Mark Kamau Mbogo ',col3:"mbogo_mk@gmail.com",col4: "Malaria Severe",col5:"49",col6:"+254793852062"},
  { id: 3, col1: '3', col2: 'Alexander Makau',col3:"makaualex66@gmail.com",col4: "Polio",col5:"8",col6:"+2547938520613" },
  { id: 4, col1: '4', col2: 'Susan Njeri Kariuki',col3:"susankariuki@gmail.com",col4: "Typhoid",col5:"34",col6:"+254793852067" },
  { id: 5, col1: '5', col2: 'Peter Machari Wanjiru',col3:"pwm@gmail.com",col4: "covid 19",col5:"70",col6:"+254793852061" },
  { id: 6, col1: '6', col2: 'Sophia Muthoni Kariuki',col3:"sophie@gmail.com",col4: "Tuberculosis",col5:"56",col6:"+254793852068" },
  { id: 7, col1: '7', col2: 'Esther Njoki Muthoni',col3:"enm001@gmail.com",col4: "Whoping cough",col5:"14",col6:"+254793852065" },
  { id: 8, col1: '8', col2: 'James Gitau Muchoki',col3:"Muchokigitau@gmail.com",col4: "Chicken Porks",col5:"17",col6:"+254793852061" },
  { id: 9, col1: '9', col2: 'AMina Wanjiru Wangui',col3:"Amina255@gmail.com",col4: "Measels" ,col5:"41",col6:"+254793852061"},
  { id: 10, col1: '10', col2: 'Faith Atieno Otieno',col3:"faithotine@yahoo.com",col4: "Influenza",col5:"5",col6:"+254793852548" },
  { id: 11, col1: '11', col2: 'Catherine Muthoni Mwangi',col3:"mwangicatherine@gmail.com",col4: "Herpes",col5:"70",col6:"+254793852061" },
  { id: 12, col1: '12', col2: 'John Mwangi Kingori',col3:"johnkingori25@gmail.com.com",col4: "Diarrhea",col5:"55",col6:"+254793852061" },
  { id: 13, col1: '13', col2: 'Cyrus Kiiru Mwangi',col3:"CKmwangi@hotmail.com",col4: "Cold and Flu",col5:"15",col6:"+254793852061" },
  { id: 14, col1: '14', col2: 'Marion Chekorir ',col3:"marionchepkorirR@gmail.com",col4: "Allergies Pollen",col5:"25",col6:"+2547938520222"},
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'ID', width: 100},
  { field: 'col2', headerName: 'USERNAME', width: 200 },
  { field: 'col3', headerName: "EMAIL", width: 200 },
  { field: 'col4', headerName: 'ILLNESS', width: 200 },
  { field: 'col5', headerName: 'AGE', width: 120 },
  { field: 'col6', headerName: 'CONTACT', width: 150 },
  

];

export default function App() {
  return (
    <div style={{ height: 800, width: '90%'}}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}