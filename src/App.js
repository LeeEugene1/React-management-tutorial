import React from 'react';
import './App.css';
import Customer from './components/Customer';

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
function App() {
  return (
      // <Customer
      //   id={customer[0].id}
      //   image={customer[0].image}
      //   name={customer[0].name}
      //   birthday={customer[0].birthday}
      //   gender={customer[0].gender}
      //   job={customer[0].job}
      // />
      <>
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
      </>
  );
}

export default App;
