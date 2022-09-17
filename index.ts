import UserPropertyDAO from "./src/models/dao/UserPropertyDAO";
import UserProperty from "./src/models/entities/UserProperty";

 const userProperties: UserProperty[] = [
            {
                key: 'name',
                value: 'Larissa',
              },
              {
                key: 'email',
                value: 'lari@email.com',
              },
              {
                key: 'cpf',
                value: '99999999999',
              },
              {
                key: 'age',
                value: 19,
              },
            ]

const userPropertyDAOcsv = new UserPropertyDAO('user.csv')
userPropertyDAOcsv.clear()
userProperties.forEach((userProperty) => userPropertyDAOcsv.set(userProperty)) 


const userPropertyDAO = new UserPropertyDAO('user.properties')
userPropertyDAO.clear()
userProperties.forEach((userProperty) => userPropertyDAO.set(userProperty)) 



//userPropertyDAO.get('idade')
//let nome = 'Larissa Quirino Lopes'
//console.log(nome.split(' '))
