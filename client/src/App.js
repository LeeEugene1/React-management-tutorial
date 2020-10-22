import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import {withStyles} from '@material-ui/core/styles';
const styles = theme =>({
  root: {
    width : "100%",
    overflowX: "auto"
    
  },
  table:{
    minWidth:1080
  }
})

const customer = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'유딩딩',
  'birthday':'920921',
  'gender':'여성',
  'job':'개발자'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'유밍밍',
  'birthday':'950714',
  'gender':'여성',
  'job':'카페사장'

}
]
function App({root, table}) {
  return (
      // <Customer
      //   id={customer[0].id}
      //   image={customer[0].image}
      //   name={customer[0].name}
      //   birthday={customer[0].birthday}
      //   gender={customer[0].gender}
      //   job={customer[0].job}
      // />
      <Paper className={root}>
        <Table className={table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customer.map(c =>{
                return(
                  <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                  />
                );
              })}
            </TableBody>
        </Table>
      </Paper>
  );
}

export default withStyles(styles)(App);
