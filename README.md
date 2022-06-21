# What have I done

=> All the packages are installed using Yarn
=> Updated TypeScript to latest package
=> Installed Axios, Just as a standard

=> to fethch data
```
 useEffect(() => {
     fetch('api/cars.json', {
       method: 'GET',  or 'PUT'
       headers: {
         'Content-Type': 'application/json',
       },
     })
     .then(response => response.json())
     .then(data => {
       console.log('Success:', data);
     })
     .catch((error) => {
       console.error('Error:', error);
     });
   }, [])
```
but I Installed React-Query as it has some advantages
=> Installed and used vcc-ui as recommended in bonus steps
=> Installed some liniting packages like prettier and added to scripts

=> made api's calling as a component with type checking, @ginterdev/endpoints is dependecy package
=> app.tsx consists routing and theme related stuff
=> Added meta data and favicon for seo purspose, to show current page and icon on browser tabs via Layout Component
=> In styles added container and dot related css to make it responsive in bigger screens ans small screens
=> the learn and shop page has data related to specific car
=> In home page added a genric search component which can filter even all fields ["id", "bodyType", "modelName", "modelType"] together
=> In home page added select filter to select specific car and list data
=> Create custom Carousel type component without installing any package. 
=> The arrows will be shown in large screens. The left arrow won't be visible at the start, the right arrow wont be visible at the end and the scroll is smooth scroll, we dont need to click on the section and drag, just drag is enough
=> If less than 4 vehicles, the arrows won't be shown in destop mode
=> The Dot loaders are only visible in small deveices, where you can click on dots to scroll or you can directly scroll smoothly
=> created custom hooks, used memo, useEffect, utils, types, genric components and reusable modules.

=> Deployed to vercel https://project-volvo.vercel.app/, which i will disable once it is reviewed 
