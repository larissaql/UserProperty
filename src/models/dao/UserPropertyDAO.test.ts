import UserProperty from "../entities/UserProperty";
import UserPropertyDAO from "./UserPropertyDAO";

describe('Test over new property insertion', () => {
    beforeEach(() => {
        const userPropertyDAO = new UserPropertyDAO('user.properties');
        userPropertyDAO.clear()
    })
    test('It should contain the new property after add it to the properties', () => {
        
        const userProperty: UserProperty = {
            key: 'email',
            value: 'lari@email.com',
        };
    
        const userPropertyDAO = new UserPropertyDAO('user.properties');
        userPropertyDAO.set(userProperty)
        expect(userPropertyDAO.read()).toBe('email=lari@email.com\n')

    });

    test('It should contain all the new properties after add to thr', () => {
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

        const userPropertyDAO = new UserPropertyDAO('user.properties');
        userProperties.forEach((userProperty) => userPropertyDAO.set(userProperty))        
        expect(userPropertyDAO.read()).toBe('name=Larissa\nemail=lari@email.com\ncpf=99999999999\nage=19\n')
    });
});

describe('Tests over queryng properties', () => {
    beforeEach(() => {
        const userPropertyDAO = new UserPropertyDAO('user.properties');
        userPropertyDAO.clear()
    })
    test('It should return null when key is not found', () => {
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
        ];
        const userPropertyDAO = new UserPropertyDAO('user.properties');
        userProperties.forEach((userProperty) => userPropertyDAO.set(userProperty))        
        expect(userPropertyDAO.get('nome')).toBe(null)

    })
    test('It should return correct value when key is found', () => {
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
        ];
        const userPropertyDAO = new UserPropertyDAO('user.properties');
        userProperties.forEach((userProperty) => userPropertyDAO.set(userProperty))        
        expect(userPropertyDAO.get('nome')).toBe(null)
    })
})

  
describe('Tests over querying properties at CSV properties file', () => {
  beforeEach(() => {
      const userPropertyDAO = new UserPropertyDAO('user.csv');
      userPropertyDAO.clear()
  })
  test('It should return null when key is not found', () => {
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
      ];
      const userPropertyDAO = new UserPropertyDAO('user.csv');
      userProperties.forEach((userProperty) => userPropertyDAO.set(userProperty))        
      expect(userPropertyDAO.get('nome')).toBe(null)

  })
})
