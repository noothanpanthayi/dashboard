import { useEffect, useState } from "react";
import {TableVirtuoso } from "react-virtuoso";
import { faker } from "@faker-js/faker";


import style from './lgdatatable.module.css';

const LgDataTable = () => {
  const [state, setState] = useState({
    usersList: [],
  });

  function createUser(index:number) {
    return {
      id: faker.string.uuid(),
      slno:index+1,
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      title: faker.person.jobTitle(),
      email: faker.internet.email(),
    };
  }

  function doGenerateData(tot: number) {
    const usersList = Array.from({ length: tot }, (_, index) => createUser(index));

    setState((prevState: any) => {
      return {
        ...prevState,
        usersList,
      };
    });
  }

  // useEffect(() => {
  //   console.log("State ", state);
  // });

  useEffect(() => {
    doGenerateData(100000);
  }, []);

  const UserCard = ({ user, index }: {user:any, index:number}) => {
    return (
      <> 
        <td className={style.col1}>{user.slno}</td>
        <td className={style.col2}>{user.firstname}</td>
        <td className={style.col3}>{user.lastname}</td>
        <td className={style.col4}>{user.title}</td>
        <td className={style.col5}>{user.email}</td>
      </>
    );
  };

  return (
    <div className={style.virtualize}>
      <div className={style.desc}>This ReactJS table is handling 100,000 rows with smooth scrolling by using the virtualization feature
      </div>
      
      <div className={style.tableContainer}>
      <TableVirtuoso
        className={style.table}
        data={state.usersList}
        itemContent={(_, user, index) => <UserCard user={user} index={index+1} />}
        style={{ height: 700 }}
        fixedHeaderContent={()=>{
            return <>
               <tr>
               <th className={`${style.header} ${style.col1}`}>Index</th>
                <th className={`${style.header} ${style.col2}`}>First Name</th>
                <th className={`${style.header} ${style.col3}`}>Last Name</th>
                <th className={`${style.header} ${style.col4}`}>Title</th>
                <th className={`${style.header} ${style.col5}`}>E-Mail</th>
               </tr>
            </>
        }}
      />
      </div>
    </div>
  );
};

export default LgDataTable;
