# React permission lib

Aplicar permisos a nuestro proyecto de react.

## Instalar
```
yarn add react-permission-lib

or

npm install react-permission-lib
```

## Uso
```
import {PermissionContext} from 'react-permission-lib'

const [permissions, setPermissions] = useState([]);

setPermissions([
  'user.show',
  'user.create', 
  'user.update', 
  'user.delete', 
  'user.destroy'
]);

<PermissionContext.Provider value={permissions}>
  // content
</PermissionContext.Provider>
```


## Aplicar el permiso

```
import {Can} from 'react-permission-lib'

<Can permission={'user.show'}>
 // content
</Can>

```

## Aplicar el permiso a la ruta

```
import {Middleware} from 'react-permission-lib'

<Route path="/" element={
  <Middleware permission={'user.show'}>
     <App/>
  </Middleware>
}/>
